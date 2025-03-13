import { NextRequest, NextResponse } from "next/server"
import prisma from "@/lib/prisma"
import { DEFAULT_USER_ID } from "@/lib/constants"
import { sendBookingConfirmationEmail } from "@/lib/email"

function hasErrorCode(error: unknown): error is { code: string } {
  return (
    typeof error === "object" &&
    error !== null &&
    "code" in error &&
    typeof (error as { code?: unknown }).code === "string"
  )
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const status = searchParams.get("status")

  const now = new Date()

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const where: any = {
    eventType: { userId: DEFAULT_USER_ID },
  }

  if (status === "upcoming") {
    where.status = "CONFIRMED"
    where.startTime = { gte: now }
  } else if (status === "past") {
    where.status = "CONFIRMED"
    where.startTime = { lt: now }
  } else if (status === "cancelled") {
    where.status = "CANCELLED"
  }

  const bookings = await prisma.booking.findMany({
    where,
    include: { eventType: true },
    orderBy: { startTime: "asc" },
  })

  return NextResponse.json(bookings)
}

export async function POST(request: NextRequest) {
  const body = await request.json()
  const { eventTypeId, bookerName, bookerEmail, startTime, notes, answers } = body

  if (!eventTypeId || !bookerName || !bookerEmail || !startTime) {
    return NextResponse.json(
      { error: "eventTypeId, bookerName, bookerEmail, and startTime are required" },
      { status: 400 }
    )
  }

  const eventType = await prisma.eventType.findUnique({
    where: { id: eventTypeId },
    include: { user: true },
  })

  if (!eventType) {
    return NextResponse.json(
      { error: "Event type not found" },
      { status: 404 }
    )
  }

  const start = new Date(startTime)
  const end = new Date(start.getTime() + eventType.duration * 60 * 1000)
  const bufferMs = (eventType.bufferMinutes || 0) * 60 * 1000

  // Buffer overlap check remains pre-write so near slots are blocked.
  const overlappingBooking = await prisma.booking.findFirst({
    where: {
      eventTypeId,
      status: "CONFIRMED",
      AND: [
        { startTime: { lt: new Date(end.getTime() + bufferMs) } },
        { endTime: { gt: new Date(start.getTime() - bufferMs) } },
      ],
    },
  })

  if (overlappingBooking) {
    return NextResponse.json(
      { error: "This time slot is no longer available" },
      { status: 409 }
    )
  }

  try {
    const booking = await prisma.booking.create({
      data: {
        eventTypeId,
        bookerName,
        bookerEmail,
        startTime: start,
        endTime: end,
        status: "CONFIRMED",
        notes: notes || null,
      },
      include: { eventType: true },
    })

    if (answers?.length) {
      await prisma.bookingAnswer.createMany({
        data: answers.map((item: { questionId: string; answer: string }) => ({
          bookingId: booking.id,
          questionId: item.questionId,
          answer: item.answer,
        })),
      })
    }

    void sendBookingConfirmationEmail(booking.bookerEmail, {
      bookerName: booking.bookerName,
      eventTitle: eventType.title,
      hostName: eventType.user?.name ?? "Host",
      startTime: booking.startTime,
    })

    return NextResponse.json(booking, { status: 201 })
  } catch (error: unknown) {
    if (hasErrorCode(error) && error.code === "P2002") {
      return NextResponse.json(
        { error: "This time slot is no longer available" },
        { status: 409 }
      )
    }

    console.error("Booking error:", error)
    return NextResponse.json(
      { error: "Failed to create booking" },
      { status: 500 }
    )
  }
}
