import prisma from "@/lib/prisma"
import { DEFAULT_USER_ID } from "@/lib/constants"
import Link from "next/link"
import { Plus, Link as LinkIcon, Clock } from "lucide-react"
import EventTypeActions from "./EventTypeActions"

export const dynamic = 'force-dynamic'

export default async function EventTypesPage() {
  const eventTypes = await prisma.eventType.findMany({
    where: { userId: DEFAULT_USER_ID },
    orderBy: { createdAt: "desc" },
    include: { user: true },
  })

  return (
    <div className="px-6 py-8 md:px-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-cal text-[28px] text-neutral-100">Event Types</h1>
          <p className="mt-1 text-sm text-neutral-400">Configure different events for people to book on your calendar.</p>
        </div>
        <Link href="/dashboard/event-types/new"
          className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium text-neutral-900 shadow-sm transition-all duration-150 hover:bg-neutral-200">
          <Plus className="h-4 w-4" />New
        </Link>
      </div>

      <div className="mt-8 space-y-3">
        {eventTypes.length === 0 ? (
          <div className="flex flex-col items-center justify-center rounded-xl border border-neutral-700 bg-neutral-800 py-16 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-700"><LinkIcon className="h-6 w-6 text-neutral-500" /></div>
            <p className="mt-4 text-sm font-medium text-neutral-100">No event types yet</p>
            <p className="mt-1 text-sm text-neutral-400">Create your first event type to get started.</p>
            <Link href="/dashboard/event-types/new"
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium text-neutral-900 shadow-sm transition-all hover:bg-neutral-200">
              <Plus className="h-4 w-4" />New Event Type
            </Link>
          </div>
        ) : (
          <div className="overflow-hidden rounded-xl border border-neutral-700 bg-neutral-800 shadow-sm">
            {eventTypes.map((et: (typeof eventTypes)[number], index: number) => (
              <div key={et.id}
                className={`flex items-center justify-between px-6 py-4 transition-colors hover:bg-neutral-700/30 ${index < eventTypes.length - 1 ? "border-b border-neutral-700" : ""}`}>
                <div className="flex items-center gap-3 min-w-0 flex-1">
                  <span className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ backgroundColor: et.color || "#3B82F6" }} />
                  <div className="min-w-0">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-medium text-neutral-100">{et.title}</span>
                      <span className="text-xs text-neutral-500">/{et.slug}</span>
                    </div>
                    <div className="mt-0.5 flex items-center gap-1.5">
                      <span className="inline-flex items-center gap-1 rounded-md border border-neutral-600 bg-neutral-700 px-2 py-0.5 text-xs font-medium text-neutral-400">
                        <Clock className="h-3 w-3" />{et.duration}m
                      </span>
                    </div>
                  </div>
                </div>
                <EventTypeActions id={et.id} slug={et.slug} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
