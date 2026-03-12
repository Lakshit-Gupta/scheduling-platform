import prisma from "@/lib/prisma"
import { DEFAULT_USER_ID } from "@/lib/constants"
import Link from "next/link"
import { Plus, Link as LinkIcon, Calendar } from "lucide-react"
import EventTypeActions from "./EventTypeActions"

export const dynamic = 'force-dynamic'

export default async function EventTypesPage() {
  const eventTypes = await prisma.eventType.findMany({
    where: { userId: DEFAULT_USER_ID },
    orderBy: { createdAt: "desc" },
    include: { _count: { select: { bookings: true } } },
  })

  return (
    <div className="px-6 py-8 md:px-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="font-cal text-[28px] text-neutral-100">Event Types</h1>
          <p className="mt-1 text-sm text-neutral-400">Configure different events for people to book on your calendar.</p>
        </div>
        <Link href="/dashboard/event-types/new"
          className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium text-neutral-900 shadow-sm transition-all duration-150 hover:bg-neutral-200">
          <Plus className="h-4 w-4" />New Event Type
        </Link>
      </div>

      <div className="mt-8">
        {eventTypes.length === 0 ? (
          <div className="flex min-h-[300px] flex-col items-center justify-center rounded-xl border border-neutral-700 bg-neutral-800/50 px-6 text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-700"><LinkIcon className="h-6 w-6 text-neutral-500" /></div>
            <p className="mt-4 text-sm font-medium text-neutral-100">No event types yet</p>
            <p className="mt-1 text-sm text-neutral-400">Create your first event type</p>
            <Link href="/dashboard/event-types/new"
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium text-neutral-900 shadow-sm transition-all hover:bg-neutral-200">
              <Plus className="h-4 w-4" />New Event Type
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {eventTypes.map((et: (typeof eventTypes)[number]) => (
              <article key={et.id}
                className="group relative rounded-xl border border-neutral-700 bg-neutral-800/50 p-5 transition-all hover:border-neutral-600">
                <Link href={`/dashboard/event-types/${et.id}/edit`} className="absolute inset-0 z-10 rounded-xl"
                  aria-label={`Edit ${et.title}`}>
                  <span className="sr-only">Edit {et.title}</span>
                </Link>

                <div className="relative z-0">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <div className="flex items-center gap-2.5">
                        <span className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ backgroundColor: et.color || "#3B82F6" }} />
                        <h2 className="truncate text-sm font-semibold text-neutral-100">{et.title}</h2>
                      </div>
                      <p className="mt-3 line-clamp-2 text-sm text-neutral-400">
                        {et.description?.trim() ? et.description : "No description added yet."}
                      </p>
                    </div>

                    <span className="shrink-0 rounded-full bg-neutral-700 px-2 py-0.5 text-xs text-neutral-200">
                      {et.duration}m
                    </span>
                  </div>

                  <div className="mt-4 space-y-2 text-xs">
                    <div className="flex items-center gap-1.5 text-neutral-400">
                      <LinkIcon className="h-3.5 w-3.5 shrink-0" />
                      <span className="text-neutral-500">Public URL</span>
                      <span className="max-w-[180px] truncate text-neutral-300">/{et.slug}</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="inline-flex items-center gap-1.5 text-neutral-400">
                        <Calendar className="h-3.5 w-3.5" />
                        {et._count.bookings} {et._count.bookings === 1 ? "booking" : "bookings"}
                      </span>
                      <span
                        className={`inline-flex items-center gap-1.5 ${
                          et.isActive ? "text-emerald-400" : "text-neutral-500"
                        }`}
                      >
                        <span
                          className={`h-2 w-2 rounded-full ${
                            et.isActive ? "bg-emerald-400" : "bg-neutral-500"
                          }`}
                        />
                        {et.isActive ? "Active" : "Inactive"}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 border-t border-neutral-700/70 pt-3">
                  <EventTypeActions id={et.id} slug={et.slug} />
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
