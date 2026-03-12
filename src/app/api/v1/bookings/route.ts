import { NextRequest, NextResponse } from "next/server"
import prisma from "@/lib/prisma"
import { DEFAULT_USER_ID } from "@/lib/constants"
import { sendBookingConfirmation } from "@/lib/email"

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
  const { eventTypeId, bookerName, bookerEmail, startTime, notes } = body

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

  // Check for conflicting bookings
  const conflict = await prisma.booking.findFirst({
    where: {
      eventTypeId,
      status: "CONFIRMED",
      startTime: { lt: end },
      endTime: { gt: start },
    },
  })

  if (conflict) {
    return NextResponse.json(
      { error: "This time slot is already booked" },
      { status: 409 }
    )
  }

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

  // Send confirmation email (never break booking creation)
  try {
    await sendBookingConfirmation(
      booking,
      eventType,
      eventType.user.name
    )
  } catch {
    // Silently ignore email errors
  }

  return NextResponse.json(booking, { status: 201 })
}
