import { Clock } from "lucide-react"
import Link from "next/link"

interface EventType {
  id: string
  title: string
  description: string | null
  duration: number
  slug: string
  color: string
}

interface User {
  id: string
  name: string
  username: string
  bio: string | null
  eventTypes: EventType[]
}

export default function UserProfilePage({ user }: { user: User }) {
  return (
    <div className="flex min-h-screen flex-col items-center bg-[#0f0f0f] px-4 py-16">
      <div className="w-full max-w-md">
        <div className="mb-4 rounded-2xl border border-neutral-800 bg-neutral-900 p-6">
          <div className="flex flex-col items-start gap-4">
            <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-neutral-700">
              <span className="text-2xl font-semibold text-neutral-100">
                {user.name.charAt(0).toUpperCase()}
              </span>
            </div>
            <div>
              <h1 className="text-xl font-semibold lowercase text-neutral-100">{user.name.toLowerCase()}</h1>
              {user.bio && <p className="mt-1 text-sm text-neutral-400">{user.bio}</p>}
            </div>
          </div>
        </div>

        {user.eventTypes.length === 0 ? (
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-8 text-center">
            <p className="text-sm text-neutral-500">No event types available.</p>
          </div>
        ) : (
          <div className="overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900">
            {user.eventTypes.map((event, index) => (
              <Link
                key={event.id}
                href={`/${event.slug}`}
                className={`block px-6 py-5 transition-colors hover:bg-neutral-800 ${
                  index < user.eventTypes.length - 1 ? "border-b border-neutral-800" : ""
                }`}
              >
                <div className="flex items-start gap-3">
                  <div
                    className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full"
                    style={{ backgroundColor: event.color || "#3B82F6" }}
                  />
                  <div className="min-w-0 flex-1">
                    <h2 className="text-sm font-medium text-neutral-100">{event.title}</h2>
                    {event.description && (
                      <p className="mt-0.5 line-clamp-1 text-xs text-neutral-500">{event.description}</p>
                    )}
                    <div className="mt-2 flex items-center gap-1.5">
                      <span className="inline-flex items-center gap-1 rounded-md border border-neutral-700 bg-neutral-800 px-2 py-0.5 text-xs text-neutral-400">
                        <Clock className="h-3 w-3" />{event.duration}m
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        <p className="mt-6 text-center text-xs text-neutral-600">
          Powered by <span className="font-medium text-neutral-500">Cal Clone</span>
        </p>
      </div>
    </div>
  )
}