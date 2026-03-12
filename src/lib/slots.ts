import prisma from "@/lib/prisma"
import type { TimeSlot } from "@/types"

export async function getAvailableSlots(
  slug: string,
  date: Date
): Promise<TimeSlot[]> {
  const eventType = await prisma.eventType.findFirst({
    where: { slug, isActive: true },
  })

  if (!eventType) {
    return []
  }

  const dayOfWeek = date.getDay()

  const availability = await prisma.availability.findFirst({
    where: {
      userId: eventType.userId,
      dayOfWeek,
    },
  })

  if (!availability) {
    return []
  }

  // Get confirmed bookings for the target date
  const dateStr = date.toISOString().split("T")[0]
  const startOfDay = new Date(dateStr + "T00:00:00.000Z")
  const endOfDay = new Date(dateStr + "T23:59:59.999Z")

  const existingBookings = await prisma.booking.findMany({
    where: {
      eventTypeId: eventType.id,
      status: "CONFIRMED",
      startTime: { gte: startOfDay, lte: endOfDay },
    },
  })

  // Generate all possible slots
  const [startHour, startMin] = availability.startTime.split(":").map(Number)
  const [endHour, endMin] = availability.endTime.split(":").map(Number)

  const slotDuration = eventType.duration
  const bufferMinutes = eventType.bufferMinutes || 0
  const slots: TimeSlot[] = []

  let currentMinutes = startHour * 60 + startMin
  const endMinutes = endHour * 60 + endMin

  while (currentMinutes + slotDuration <= endMinutes) {
    const slotHour = Math.floor(currentMinutes / 60)
    const slotMin = currentMinutes % 60

    const slotStart = new Date(date)
    slotStart.setHours(slotHour, slotMin, 0, 0)

    const slotEnd = new Date(slotStart.getTime() + slotDuration * 60 * 1000)

    // Check if slot conflicts with any existing booking + buffer
    const isBooked = existingBookings.some(
      (booking: (typeof existingBookings)[number]) => {
        const bStart = new Date(booking.startTime)
        const bEndWithBuffer = new Date(
          new Date(booking.endTime).getTime() + bufferMinutes * 60 * 1000
        )
        return slotStart < bEndWithBuffer && slotEnd > bStart
      }
    )

    slots.push({
      startTime: slotStart,
      endTime: slotEnd,
      available: !isBooked,
    })

    currentMinutes += slotDuration
  }

  return slots.filter((slot) => slot.available)
}
