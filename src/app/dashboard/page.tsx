import prisma from "@/lib/prisma"
import { DEFAULT_USER_ID } from "@/lib/constants"
import Badge from "@/components/ui/Badge"
import { formatTime, formatDate } from "@/lib/utils"

export const dynamic = 'force-dynamic'

export default async function DashboardPage() {
  const now = new Date()

  const [totalBookings, upcomingBookings, eventTypesCount, recentBookings] =
    await Promise.all([
      prisma.booking.count({
        where: {
          eventType: { userId: DEFAULT_USER_ID },
        },
      }),
      prisma.booking.count({
        where: {
          eventType: { userId: DEFAULT_USER_ID },
          status: "CONFIRMED",
          startTime: { gte: now },
        },
      }),
      prisma.eventType.count({
        where: { userId: DEFAULT_USER_ID },
      }),
      prisma.booking.findMany({
        where: {
          eventType: { userId: DEFAULT_USER_ID },
        },
        include: { eventType: true },
        orderBy: { createdAt: "desc" },
        take: 5,
      }),
    ])

  const stats = [
    { label: "Total Bookings", value: totalBookings },
    { label: "Upcoming", value: upcomingBookings },
    { label: "Event Types", value: eventTypesCount },
    { label: "Confirmed", value: upcomingBookings },
  ]

  return (
    <div>
      <h1 className="mt-8 mb-6 px-8 text-2xl font-bold text-gray-900">
        Dashboard
      </h1>

      <div className="mb-8 grid grid-cols-4 gap-4 px-8">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-lg border border-gray-200 bg-white p-6"
          >
            <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
            <p className="mt-1 text-sm text-gray-500">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="px-8">
        <h2 className="mb-4 text-lg font-semibold text-gray-900">
          Recent Bookings
        </h2>
        <div className="overflow-hidden rounded-lg border border-gray-200 bg-white">
          {recentBookings.length === 0 ? (
            <p className="px-6 py-4 text-sm text-gray-500">
              No bookings yet.
            </p>
          ) : (
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-3 text-xs font-medium uppercase tracking-wider text-gray-500">
                    Name
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
                </tr>
              </thead>
              <tbody>
                {recentBookings.map(
                  (booking: (typeof recentBookings)[number]) => (
                    <tr
                      key={booking.id}
                      className="border-t border-gray-100"
                    >
                      <td className="px-6 py-4">
                        <p className="font-medium text-gray-900">
                          {booking.bookerName}
                        </p>
                        <p className="text-xs text-gray-500">
                          {booking.bookerEmail}
                        </p>
                      </td>
                      <td className="px-6 py-4 text-gray-700">
                        {booking.eventType.title}
                      </td>
                      <td className="px-6 py-4 text-gray-700">
                        {formatDate(booking.startTime)}
                        <br />
                        <span className="text-xs text-gray-500">
                          {formatTime(booking.startTime)}
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
                    </tr>
                  )
                )}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  )
}
