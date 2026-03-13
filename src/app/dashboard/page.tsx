import prisma from "@/lib/prisma"
import { DEFAULT_USER_ID } from "@/lib/constants"
import Badge from "@/components/ui/Badge"
import { formatTime, formatDate } from "@/lib/utils"
import { Calendar, TrendingUp, Link as LinkIcon, CheckCircle } from "lucide-react"

export const dynamic = 'force-dynamic'

export default async function DashboardPage() {
  const now = new Date()
  const [totalBookings, upcomingBookings, eventTypesCount, recentBookings] = await Promise.all([
    prisma.booking.count({ where: { eventType: { userId: DEFAULT_USER_ID } } }),
    prisma.booking.count({ where: { eventType: { userId: DEFAULT_USER_ID }, status: "CONFIRMED", startTime: { gte: now } } }),
    prisma.eventType.count({ where: { userId: DEFAULT_USER_ID } }),
    prisma.booking.findMany({ where: { eventType: { userId: DEFAULT_USER_ID } }, include: { eventType: true }, orderBy: { createdAt: "desc" }, take: 5 }),
  ])

  const stats = [
    { label: "Total Bookings", value: totalBookings, icon: Calendar },
    { label: "Upcoming", value: upcomingBookings, icon: TrendingUp },
    { label: "Event Types", value: eventTypesCount, icon: LinkIcon },
    { label: "Confirmed", value: upcomingBookings, icon: CheckCircle },
  ]

  return (
    <div className="px-6 py-8 md:px-8">
      <h1 className="font-cal text-[28px] text-neutral-100">Dashboard</h1>
      <p className="mt-1 text-sm text-neutral-400">Overview of your scheduling activity.</p>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-xl border border-neutral-700 bg-neutral-800 p-5 shadow-sm transition-all hover:border-neutral-600">
            <div className="flex items-center justify-between">
              <p className="text-[13px] font-medium text-neutral-400">{stat.label}</p>
              <stat.icon className="h-4 w-4 text-neutral-500" />
            </div>
            <p className="mt-2 text-3xl font-bold tracking-tight text-neutral-100">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <h2 className="font-cal text-xl text-neutral-100">Recent Bookings</h2>
        <div className="mt-4 overflow-hidden rounded-xl border border-neutral-700 bg-neutral-800 shadow-sm">
          {recentBookings.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 px-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-700"><Calendar className="h-6 w-6 text-neutral-500" /></div>
              <p className="mt-4 text-sm font-medium text-neutral-100">No bookings yet</p>
              <p className="mt-1 text-sm text-neutral-400">Bookings will appear here once someone schedules with you.</p>
            </div>
          ) : (
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-neutral-700 bg-neutral-800/50">
                  <th className="px-6 py-3 text-xs font-medium uppercase tracking-wider text-neutral-500">Name</th>
                  <th className="hidden px-6 py-3 text-xs font-medium uppercase tracking-wider text-neutral-500 sm:table-cell">Event</th>
                  <th className="hidden px-6 py-3 text-xs font-medium uppercase tracking-wider text-neutral-500 md:table-cell">Date &amp; Time</th>
                  <th className="px-6 py-3 text-xs font-medium uppercase tracking-wider text-neutral-500">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-700">
                {recentBookings.map((booking: (typeof recentBookings)[number]) => (
                  <tr key={booking.id} className="transition-colors hover:bg-neutral-700/30">
                    <td className="px-6 py-4">
                      <p className="font-medium text-neutral-100">{booking.bookerName}</p>
                      <p className="text-xs text-neutral-500">{booking.bookerEmail}</p>
                    </td>
                    <td className="hidden px-6 py-4 text-neutral-400 sm:table-cell">{booking.eventType.title}</td>
                    <td className="hidden px-6 py-4 md:table-cell">
                      <p className="text-neutral-100">{formatDate(booking.startTime)}</p>
                      <p className="text-xs text-neutral-500">{formatTime(booking.startTime)}</p>
                    </td>
                    <td className="px-6 py-4"><Badge variant={booking.status === "CONFIRMED" ? "success" : "danger"}>{booking.status}</Badge></td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  )
}
