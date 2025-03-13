"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import { Calendar, X } from "lucide-react"
import Badge from "@/components/ui/Badge"
import { cn } from "@/lib/utils"
import { formatDate, formatTime } from "@/lib/utils"
import RescheduleModal from "@/components/dashboard/RescheduleModal"
import { toast } from "@/components/ui/Toast"

interface BookingsClientProps {
  bookings: Booking[]
}

interface Booking {
  id: string
  bookerName: string
  bookerEmail: string
  status: "CONFIRMED" | "CANCELLED"
  startTime: string
  endTime: string
  eventType: {
    id: string
    title: string
    duration: number
    slug: string
  }
}

export default function BookingsClient({ bookings }: BookingsClientProps) {
  const router = useRouter()
  const now = new Date()
  const [rescheduleBooking, setRescheduleBooking] = useState<Booking | null>(null)
  const [confirmingId, setConfirmingId] = useState<string | null>(null)
  const [cancellingId, setCancellingId] = useState<string | null>(null)

  async function handleCancel(bookingId: string) {
    setCancellingId(bookingId)
    const res = await fetch(`/api/v1/bookings/${bookingId}`, { method: "PATCH" })
    if (!res.ok) {
      toast("Failed to cancel booking", "error")
      setCancellingId(null)
      return
    }
    toast("Booking cancelled", "success")
    setConfirmingId(null)
    setCancellingId(null)
    router.refresh()
  }

  const upcoming = bookings.filter(
    (booking) => booking.status === "CONFIRMED" && new Date(booking.startTime) >= now
  )
  const past = bookings.filter(
    (booking) => booking.status === "CONFIRMED" && new Date(booking.startTime) < now
  )
  const cancelled = bookings.filter((booking) => booking.status === "CANCELLED")
  const sections = [
    { key: "upcoming", title: "Upcoming", count: upcoming.length },
    { key: "past", title: "Past", count: past.length },
    { key: "cancelled", title: "Cancelled", count: cancelled.length },
  ]
  const [activeTab, setActiveTab] = useState(sections[0]?.key || "upcoming")

  function canManageBooking(booking: Booking) {
    return booking.status === "CONFIRMED" && new Date(booking.startTime) >= now
  }

  function renderStatusBadge(status: Booking["status"]) {
    return (
      <Badge
        variant={status === "CONFIRMED" ? "success" : "danger"}
        className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium whitespace-nowrap shrink-0"
      >
        {status}
      </Badge>
    )
  }

  function renderActionButtons(booking: Booking) {
    if (!canManageBooking(booking)) return null

    return (
      <>
        {confirmingId === booking.id ? (
          <div className="inline-flex items-center gap-2 rounded-lg px-2 py-1">
            <button
              onClick={() => handleCancel(booking.id)}
              disabled={cancellingId === booking.id}
              className="text-xs font-medium text-red-400 transition-colors hover:text-red-300 disabled:opacity-50"
            >
              {cancellingId === booking.id ? "..." : "Confirm"}
            </button>
            <button
              onClick={() => setConfirmingId(null)}
              disabled={cancellingId === booking.id}
              className="text-xs text-neutral-500 transition-colors hover:text-neutral-300 disabled:opacity-50"
            >
              Cancel
            </button>
          </div>
        ) : (
          <button
            onClick={() => setConfirmingId(booking.id)}
            className="inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-[13px] text-neutral-400 transition-all duration-150 hover:bg-red-500/10 hover:text-red-400"
          >
            <X className="h-3.5 w-3.5" />
            Cancel
          </button>
        )}
        <button
          onClick={() => setRescheduleBooking(booking)}
          className="text-xs font-medium text-blue-400 transition-colors hover:text-blue-300 sm:text-sm"
        >
          Reschedule
        </button>
      </>
    )
  }

  function renderTable(data: Booking[]) {
    if (data.length === 0) {
      return (
        <div className="overflow-hidden rounded-xl border border-neutral-700 bg-neutral-800 shadow-sm">
          <div className="flex flex-col items-center justify-center px-6 py-16">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-700">
              <Calendar className="h-6 w-6 text-neutral-500" />
            </div>
            <p className="mt-4 text-sm font-medium text-neutral-100">No bookings found</p>
            <p className="mt-1 text-sm text-neutral-400">
              Bookings matching this filter will appear here.
            </p>
          </div>
        </div>
      )
    }

    return (
      <div className="overflow-hidden rounded-xl border border-neutral-700 bg-neutral-800 shadow-sm">
        <div className="divide-y divide-neutral-700 sm:hidden">
          {data.map((booking) => {
            const actionButtons = renderActionButtons(booking)

            return (
              <div key={booking.id} className="px-4 py-4">
                <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-neutral-100">{booking.bookerName}</p>
                    <p className="mt-0.5 text-xs text-neutral-400">{booking.bookerEmail}</p>
                    <p className="mt-2 text-xs text-neutral-400">{booking.eventType.title}</p>
                    <p className="mt-0.5 text-xs text-neutral-500">
                      {formatDate(new Date(booking.startTime))} •{" "}
                      {formatTime(new Date(booking.startTime))} –{" "}
                      {formatTime(new Date(booking.endTime))}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 shrink-0 flex-wrap">
                    {renderStatusBadge(booking.status)}
                    {actionButtons}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <table className="hidden w-full text-left text-sm sm:table">
          <thead>
            <tr className="border-b border-neutral-700 bg-neutral-800/50">
              <th className="px-6 py-3 text-xs font-medium uppercase tracking-wider text-neutral-500">Name</th>
              <th className="hidden px-6 py-3 text-xs font-medium uppercase tracking-wider text-neutral-500 sm:table-cell">Email</th>
              <th className="hidden px-6 py-3 text-xs font-medium uppercase tracking-wider text-neutral-500 md:table-cell">Event</th>
              <th className="hidden px-6 py-3 text-xs font-medium uppercase tracking-wider text-neutral-500 lg:table-cell">Date &amp; Time</th>
              <th className="px-6 py-3 text-xs font-medium uppercase tracking-wider text-neutral-500">Status</th>
              <th className="px-6 py-3 text-xs font-medium uppercase tracking-wider text-neutral-500">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-700">
            {data.map((booking) => {
              const actionButtons = renderActionButtons(booking)

              return (
                <tr key={booking.id} className="transition-colors hover:bg-neutral-700/30">
                  <td className="px-6 py-4 font-medium text-neutral-100">{booking.bookerName}</td>
                  <td className="hidden px-6 py-4 text-neutral-400 sm:table-cell">{booking.bookerEmail}</td>
                  <td className="hidden px-6 py-4 text-neutral-400 md:table-cell">{booking.eventType.title}</td>
                  <td className="hidden px-6 py-4 lg:table-cell">
                    <p className="text-neutral-100">{formatDate(new Date(booking.startTime))}</p>
                    <p className="text-xs text-neutral-500">
                      {formatTime(new Date(booking.startTime))} – {formatTime(new Date(booking.endTime))}
                    </p>
                  </td>
                  <td className="px-6 py-4">{renderStatusBadge(booking.status)}</td>
                  <td className="px-6 py-4">
                    {actionButtons ? (
                      <div className="flex items-center gap-2 shrink-0 flex-wrap">{actionButtons}</div>
                    ) : null}
                  </td>
                </tr>
              )
            })}
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
    <>
      <div className="flex gap-1 rounded-lg bg-neutral-800 p-1 w-fit">
        {sections.map((section) => (
          <button key={section.key} onClick={() => setActiveTab(section.key)}
            className={cn("rounded-md px-4 py-1.5 text-[13px] font-medium transition-all duration-150",
              activeTab === section.key ? "bg-neutral-700 text-neutral-100 shadow-sm" : "text-neutral-400 hover:text-neutral-100"
            )}>
            {section.title}
            <span className={cn("ml-1.5 rounded-full px-1.5 py-0.5 text-[11px]",
              activeTab === section.key ? "bg-neutral-600 text-neutral-100" : "bg-neutral-700 text-neutral-500"
            )}>{section.count}</span>
          </button>
        ))}
      </div>
      <div className="mt-4">{tabContents[activeTab]}</div>
      {rescheduleBooking && (
        <RescheduleModal
          booking={rescheduleBooking}
          isOpen={!!rescheduleBooking}
          onClose={() => setRescheduleBooking(null)}
          onSuccess={() => {
            setRescheduleBooking(null)
            router.refresh()
          }}
        />
      )}
    </>
  )
}
