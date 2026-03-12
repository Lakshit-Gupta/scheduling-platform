import { NextRequest, NextResponse } from "next/server"
import prisma from "@/lib/prisma"

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const slug = searchParams.get("slug")
  const date = searchParams.get("date")

  if (!slug || !date) {
    return NextResponse.json(
      { error: "slug and date are required" },
      { status: 400 }
    )
  }

  const eventType = await prisma.eventType.findFirst({
    where: { slug, isActive: true },
    include: { user: true },
  })

  if (!eventType) {
    return NextResponse.json(
      { error: "Event type not found" },
      { status: 404 }
    )
  }

  // Parse date and get day of week
  const targetDate = new Date(date + "T00:00:00")
  const dayOfWeek = targetDate.getDay()

  // Get availability for that day
  const availability = await prisma.availability.findFirst({
    where: {
      userId: eventType.userId,
      dayOfWeek,
    },
  })

  if (!availability) {
    return NextResponse.json([])
  }

  // Get existing confirmed bookings for that date
  const startOfDay = new Date(date + "T00:00:00.000Z")
  const endOfDay = new Date(date + "T23:59:59.999Z")

  const existingBookings = await prisma.booking.findMany({
    where: {
      eventTypeId: eventType.id,
      status: "CONFIRMED",
      startTime: { gte: startOfDay, lte: endOfDay },
    },
  })

  // Generate slots
  const [startHour, startMin] = availability.startTime.split(":").map(Number)
  const [endHour, endMin] = availability.endTime.split(":").map(Number)

  const slots: string[] = []
  const slotDuration = eventType.duration
  const bufferMinutes = eventType.bufferMinutes || 0

  let currentMinutes = startHour * 60 + startMin
  const endMinutes = endHour * 60 + endMin

  while (currentMinutes + slotDuration <= endMinutes) {
    const slotHour = Math.floor(currentMinutes / 60)
    const slotMin = currentMinutes % 60

    const slotStart = new Date(targetDate)
    slotStart.setHours(slotHour, slotMin, 0, 0)

    const slotEnd = new Date(slotStart.getTime() + slotDuration * 60 * 1000)

    // Check if this slot conflicts with any existing booking + buffer
    const isBooked = existingBookings.some((booking: typeof existingBookings[number]) => {
      const bStart = new Date(booking.startTime)
      const bEndWithBuffer = new Date(
        new Date(booking.endTime).getTime() + bufferMinutes * 60 * 1000
      )
      return slotStart < bEndWithBuffer && slotEnd > bStart
    })

    if (!isBooked) {
      slots.push(slotStart.toISOString())
    }

    currentMinutes += slotDuration
  }

  return NextResponse.json(slots)
}
