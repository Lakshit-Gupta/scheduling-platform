import prisma from "@/lib/prisma"
import { DEFAULT_USER_ID } from "@/lib/constants"
import BookingsClient from "./BookingsClient"

export const dynamic = 'force-dynamic'

export default async function BookingsPage() {
  const bookings = await prisma.booking.findMany({
    where: { eventType: { userId: DEFAULT_USER_ID } },
    include: { eventType: true },
    orderBy: { startTime: "asc" },
  })

  const serializedBookings = bookings.map((booking) => ({
    ...booking,
    startTime: booking.startTime.toISOString(),
    endTime: booking.endTime.toISOString(),
  }))

  return (
    <div className="px-6 py-8 md:px-8">
      <h1 className="font-cal text-[28px] text-neutral-100">Bookings</h1>
      <p className="mt-1 text-sm text-neutral-400">See upcoming and past events booked through your event type links.</p>
      <div className="mt-8"><BookingsClient bookings={serializedBookings} /></div>
    </div>
  )
}
