import { NextRequest, NextResponse } from "next/server"
import prisma from "@/lib/prisma"
import { sendCancellationEmail, sendRescheduleEmail } from "@/lib/email"

export async function PATCH(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const booking = await prisma.booking.update({
    where: { id },
    data: {
      status: "CANCELLED",
      cancelledAt: new Date(),
    },
    include: { eventType: true },
  })

  await sendCancellationEmail(booking.bookerEmail, {
    bookerName: booking.bookerName,
    eventTitle: booking.eventType.title,
    startTime: booking.startTime,
  })

  return NextResponse.json(booking)
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const body = await request.json()
    const { newStartTime, newEndTime } = body

    if (!newStartTime || !newEndTime) {
      return NextResponse.json(
        { error: "newStartTime and newEndTime required" },
        { status: 400 }
      )
    }

    const booking = await prisma.booking.findUnique({
      where: { id },
      include: { eventType: true },
    })

    if (!booking) {
      return NextResponse.json({ error: "Booking not found" }, { status: 404 })
    }

    if (booking.status === "CANCELLED") {
      return NextResponse.json(
        { error: "Cannot reschedule cancelled booking" },
        { status: 400 }
      )
    }

    const newStart = new Date(newStartTime)
    const newEnd = new Date(newEndTime)

    if (Number.isNaN(newStart.getTime()) || Number.isNaN(newEnd.getTime())) {
      return NextResponse.json({ error: "Invalid date values" }, { status: 400 })
    }

    const conflict = await prisma.booking.findFirst({
      where: {
        id: { not: id },
        eventTypeId: booking.eventTypeId,
        status: "CONFIRMED",
        AND: [{ startTime: { lt: newEnd } }, { endTime: { gt: newStart } }],
      },
    })

    if (conflict) {
      return NextResponse.json(
        { error: "This slot is no longer available" },
        { status: 409 }
      )
    }

    const updated = await prisma.booking.update({
      where: { id },
      data: { startTime: newStart, endTime: newEnd },
      include: { eventType: { include: { user: true } } },
    })

    await sendRescheduleEmail(updated.bookerEmail, {
      bookerName: updated.bookerName,
      eventTitle: updated.eventType.title,
      newStartTime: newStart,
    })

    return NextResponse.json(updated)
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: "Failed to reschedule" }, { status: 500 })
  }
}

export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  await prisma.booking.delete({ where: { id } })
  return NextResponse.json({ success: true })
}
