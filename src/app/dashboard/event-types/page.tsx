import prisma from "@/lib/prisma"
import { DEFAULT_USER_ID } from "@/lib/constants"
import Link from "next/link"
import { Plus } from "lucide-react"
import EventTypeActions from "./EventTypeActions"

export const dynamic = 'force-dynamic'

export default async function EventTypesPage() {
  const eventTypes = await prisma.eventType.findMany({
    where: { userId: DEFAULT_USER_ID },
    orderBy: { createdAt: "desc" },
  })

  return (
    <div>
      <div className="mt-8 mb-6 flex items-center justify-between px-8">
        <h1 className="text-2xl font-bold text-gray-900">Event Types</h1>
        <Link
          href="/dashboard/event-types/new"
          className="inline-flex items-center gap-2 rounded-md bg-black px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-800"
        >
          <Plus className="h-4 w-4" />
          New Event Type
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-3 px-8">
        {eventTypes.length === 0 ? (
          <div className="rounded-lg border border-gray-200 bg-white px-6 py-8 text-center text-sm text-gray-500">
            No event types yet. Create your first one!
          </div>
        ) : (
          eventTypes.map((et: (typeof eventTypes)[number]) => (
            <div
              key={et.id}
              className="flex items-center justify-between rounded-lg border border-gray-200 bg-white px-6 py-4 transition-colors hover:border-gray-300"
            >
              <div className="flex items-center">
                <span
                  className="mr-3 h-3 w-3 rounded-full"
                  style={{ backgroundColor: et.color || "#3B82F6" }}
                />
                <span className="text-sm font-medium text-gray-900">
                  {et.title}
                </span>
                <span className="ml-3 rounded bg-gray-100 px-2 py-0.5 text-xs text-gray-500">
                  {et.duration} min
                </span>
              </div>
              <EventTypeActions id={et.id} slug={et.slug} />
            </div>
          ))
        )}
      </div>
    </div>
  )
}
