import prisma from "@/lib/prisma"
import { formatDate, formatTime } from "@/lib/utils"
import { CheckCircle, Calendar, Clock, User } from "lucide-react"

export const dynamic = 'force-dynamic'

export default async function ConfirmedPage({
  searchParams,
}: {
  searchParams: Promise<{ bookingId?: string }>
}) {
  const { bookingId } = await searchParams

  if (!bookingId) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0f0f0f]">
        <p className="text-neutral-500">Invalid booking.</p>
      </div>
    )
  }

  const booking = await prisma.booking.findUnique({
    where: { id: bookingId },
    include: {
      eventType: {
        include: { user: true },
      },
    },
  })

  if (!booking) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0f0f0f]">
        <p className="text-neutral-500">Booking not found.</p>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0f0f0f] p-4">
      <div className="w-full max-w-md rounded-2xl border border-neutral-700 bg-neutral-900 p-8 text-center shadow-sm">
        <div className="mb-5 flex justify-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/15">
            <CheckCircle className="h-8 w-8 text-emerald-400" />
          </div>
        </div>
        <h1 className="font-cal text-2xl text-neutral-100">
          Booking Confirmed!
        </h1>
        <p className="mt-2 text-sm text-neutral-400">
          You&apos;re all set. A confirmation has been sent.
        </p>

        <div className="mt-8 space-y-4 rounded-xl border border-neutral-700 bg-neutral-800/50 p-5 text-left text-sm">
          <div className="flex items-start gap-3">
            <Calendar className="mt-0.5 h-4 w-4 text-neutral-500" />
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-neutral-500">Event</p>
              <p className="mt-0.5 font-medium text-neutral-100">{booking.eventType.title}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Clock className="mt-0.5 h-4 w-4 text-neutral-500" />
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-neutral-500">Date &amp; Time</p>
              <p className="mt-0.5 font-medium text-neutral-100">{formatDate(booking.startTime)}</p>
              <p className="text-neutral-400">
                {formatTime(booking.startTime)} – {formatTime(booking.endTime)}
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <User className="mt-0.5 h-4 w-4 text-neutral-500" />
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-neutral-500">Host</p>
              <p className="mt-0.5 font-medium text-neutral-100">{booking.eventType.user.name}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
