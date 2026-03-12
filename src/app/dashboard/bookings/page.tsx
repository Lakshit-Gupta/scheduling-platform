import prisma from "@/lib/prisma"
import { DEFAULT_USER_ID } from "@/lib/constants"
import Badge from "@/components/ui/Badge"
import { formatTime, formatDate } from "@/lib/utils"
import CancelBookingButton from "./CancelBookingButton"
import BookingsClient from "./BookingsClient"

export const dynamic = 'force-dynamic'

export default async function BookingsPage() {
  const now = new Date()

  const bookings = await prisma.booking.findMany({
    where: {
      eventType: { userId: DEFAULT_USER_ID },
    },
    include: { eventType: true },
    orderBy: { startTime: "asc" },
  })

  type BookingWithEventType = (typeof bookings)[number]
  const upcoming = bookings.filter(
    (b: BookingWithEventType) => b.status === "CONFIRMED" && new Date(b.startTime) >= now
  )
  const past = bookings.filter(
    (b: BookingWithEventType) => b.status === "CONFIRMED" && new Date(b.startTime) < now
  )
  const cancelled = bookings.filter((b: BookingWithEventType) => b.status === "CANCELLED")

  const sections = [
    { key: "upcoming", title: "Upcoming", count: upcoming.length },
    { key: "past", title: "Past", count: past.length },
    { key: "cancelled", title: "Cancelled", count: cancelled.length },
  ]

  function renderTable(data: BookingWithEventType[]) {
    if (data.length === 0) {
      return (
        <div className="overflow-hidden rounded-lg border border-gray-200 bg-white">
          <p className="px-6 py-8 text-center text-sm text-gray-500">
            No bookings found.
          </p>
        </div>
      )
    }
    return (
      <div className="overflow-hidden rounded-lg border border-gray-200 bg-white">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-6 py-3 text-xs font-medium uppercase tracking-wider text-gray-500">
                Name
              </th>
              <th className="px-6 py-3 text-xs font-medium uppercase tracking-wider text-gray-500">
                Email
              </th>
              <th className="px-6 py-3 text-xs font-medium uppercase tracking-wider text-gray-500">
                Event
              </th>
              <th className="px-6 py-3 text-xs font-medium uppercase tracking-wider text-gray-500">
                Date &amp; Time
              </th>
              <th className="px-6 py-3 text-xs font-medium uppercase tracking-wider text-gray-500">
                Status
              </th>
              <th className="px-6 py-3 text-xs font-medium uppercase tracking-wider text-gray-500">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((booking: BookingWithEventType) => (
              <tr key={booking.id} className="border-t border-gray-100">
                <td className="px-6 py-4 font-medium text-gray-900">
                  {booking.bookerName}
                </td>
                <td className="px-6 py-4 text-gray-600">
                  {booking.bookerEmail}
                </td>
                <td className="px-6 py-4 text-gray-700">
                  {booking.eventType.title}
                </td>
                <td className="px-6 py-4 text-gray-700">
                  {formatDate(booking.startTime)}
                  <br />
                  <span className="text-xs text-gray-500">
                    {formatTime(booking.startTime)} –{" "}
                    {formatTime(booking.endTime)}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <Badge
                    variant={
                      booking.status === "CONFIRMED"
                        ? "success"
                        : "danger"
                    }
                  >
                    {booking.status}
                  </Badge>
                </td>
                <td className="px-6 py-4">
                  {booking.status === "CONFIRMED" &&
                    new Date(booking.startTime) >= now && (
                      <CancelBookingButton id={booking.id} />
                    )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }

  const tabContents: Record<string, React.ReactNode> = {
    upcoming: renderTable(upcoming),
    past: renderTable(past),
    cancelled: renderTable(cancelled),
  }

  return (
    <div>
      <h1 className="mt-8 mb-6 px-8 text-2xl font-bold text-gray-900">
        Bookings
      </h1>
      <BookingsClient sections={sections} tabContents={tabContents} />
    </div>
  )
}
