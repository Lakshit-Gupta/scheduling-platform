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
    include: {
      user: true,
      questions: { orderBy: { order: "asc" } },
    },
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

  let availabilityForDay = availability

  const overrideDayStart = new Date(targetDate)
  overrideDayStart.setHours(0, 0, 0, 0)
  const overrideDayEnd = new Date(targetDate)
  overrideDayEnd.setHours(23, 59, 59, 999)

  const dateOverride = await prisma.dateOverride.findFirst({
    where: {
      eventTypeId: eventType.id,
      date: {
        gte: overrideDayStart,
        lt: overrideDayEnd,
      },
    },
  })

  if (dateOverride?.isBlocked) {
    return NextResponse.json([])
  }

  if (dateOverride && dateOverride.startTime && dateOverride.endTime) {
    availabilityForDay = {
      ...availabilityForDay,
      startTime: dateOverride.startTime,
      endTime: dateOverride.endTime,
    }
  }

  // Get existing confirmed bookings for that date
  const startOfDay = new Date(date + "T00:00:00.000Z")
  const endOfDay = new Date(date + "T23:59:59.999Z")
  const slotDuration = eventType.duration
  const bufferMinutes = eventType.bufferMinutes || 0
  const bufferStart = new Date(startOfDay.getTime() - bufferMinutes * 60 * 1000)
  const lastPossibleSlotEnd = new Date(endOfDay.getTime() + slotDuration * 60 * 1000)

  const existingBookings = await prisma.booking.findMany({
    where: {
      eventTypeId: eventType.id,
      status: "CONFIRMED",
      startTime: { lt: lastPossibleSlotEnd },
      endTime: { gt: bufferStart },
    },
  })

  // Generate slots
  const [startHour, startMin] = availabilityForDay.startTime.split(":").map(Number)
  const [endHour, endMin] = availabilityForDay.endTime.split(":").map(Number)

  const slots: string[] = []

  let currentMinutes = startHour * 60 + startMin
  const endMinutes = endHour * 60 + endMin

  while (currentMinutes + slotDuration <= endMinutes) {
    const slotHour = Math.floor(currentMinutes / 60)
    const slotMin = currentMinutes % 60

    const slotStart = new Date(targetDate)
    slotStart.setHours(slotHour, slotMin, 0, 0)

    const slotEnd = new Date(slotStart.getTime() + slotDuration * 60 * 1000)

    // Slot is blocked if existingStart < slotEnd and existingEnd+buffer > slotStart.
    const isBooked = existingBookings.some((booking: typeof existingBookings[number]) => {
      const existingStart = new Date(booking.startTime)
      const existingEndWithBuffer = new Date(
        new Date(booking.endTime).getTime() + bufferMinutes * 60 * 1000
      )
      return existingStart < slotEnd && existingEndWithBuffer > slotStart
    })

    if (!isBooked) {
      slots.push(slotStart.toISOString())
    }

    currentMinutes += slotDuration
  }

  return NextResponse.json(slots)
}
