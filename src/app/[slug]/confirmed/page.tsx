import prisma from "@/lib/prisma"
import { formatDate, formatTime } from "@/lib/utils"
import { CheckCircle } from "lucide-react"

export default async function ConfirmedPage({
  searchParams,
}: {
  searchParams: Promise<{ bookingId?: string }>
}) {
  const { bookingId } = await searchParams

  if (!bookingId) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <p className="text-gray-500">Invalid booking.</p>
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
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <p className="text-gray-500">Booking not found.</p>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md rounded-xl bg-white p-8 text-center shadow-lg">
        <div className="mb-4 flex justify-center">
          <CheckCircle className="h-16 w-16 text-green-500" />
        </div>
        <h1 className="mb-2 text-2xl font-bold text-gray-900">
          Booking Confirmed!
        </h1>
        <p className="mb-6 text-sm text-gray-500">
          You&apos;re all set. A confirmation has been sent.
        </p>

        <div className="space-y-3 rounded-lg bg-gray-50 p-4 text-left text-sm">
          <div>
            <span className="font-medium text-gray-500">Event</span>
            <p className="text-gray-900">{booking.eventType.title}</p>
          </div>
          <div>
            <span className="font-medium text-gray-500">Date</span>
            <p className="text-gray-900">{formatDate(booking.startTime)}</p>
          </div>
          <div>
            <span className="font-medium text-gray-500">Time</span>
            <p className="text-gray-900">
              {formatTime(booking.startTime)} – {formatTime(booking.endTime)}
            </p>
          </div>
          <div>
            <span className="font-medium text-gray-500">Host</span>
            <p className="text-gray-900">{booking.eventType.user.name}</p>
          </div>
          <div>
            <span className="font-medium text-gray-500">Booker</span>
            <p className="text-gray-900">{booking.bookerName}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
