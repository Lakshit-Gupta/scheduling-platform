"use client"

import { useEffect, useState } from "react"
import { format, parseISO } from "date-fns"
import { useParams } from "next/navigation"
import Button from "@/components/ui/Button"

interface Override {
  id: string
  date: string
  isBlocked: boolean
  startTime: string | null
  endTime: string | null
}

export default function DateOverridesPage() {
  const params = useParams<{ id: string }>()
  const id = params.id

  const [overrides, setOverrides] = useState<Override[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedDate, setSelectedDate] = useState("")
  const [isBlocked, setIsBlocked] = useState(true)
  const [startTime, setStartTime] = useState("09:00")
  const [endTime, setEndTime] = useState("17:00")
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    if (!id) return
    fetch(`/api/v1/event-types/${id}/overrides`)
      .then((r) => r.json())
      .then(setOverrides)
      .finally(() => setLoading(false))
  }, [id])

  const handleAdd = async () => {
    if (!selectedDate || !id) return
    setSaving(true)
    const res = await fetch(`/api/v1/event-types/${id}/overrides`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        date: selectedDate,
        isBlocked,
        startTime: isBlocked ? null : startTime,
        endTime: isBlocked ? null : endTime,
      }),
    })
    const data = await res.json()
    setOverrides((prev) => {
      const exists = prev.findIndex((o) => o.id === data.id)
      if (exists >= 0) {
        return prev.map((o, i) => (i === exists ? data : o))
      }
      return [...prev, data]
    })
    setSelectedDate("")
    setSaving(false)
  }

  const handleDelete = async (overrideId: string) => {
    if (!id) return
    await fetch(`/api/v1/event-types/${id}/overrides`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ overrideId }),
    })
    setOverrides((prev) => prev.filter((o) => o.id !== overrideId))
  }

  return (
    <div className="px-6 py-8 md:px-8">
      <div className="mx-auto max-w-2xl">
        <h1 className="mb-2 font-cal text-2xl text-neutral-100">Date Overrides</h1>
        <p className="mb-8 text-neutral-400">
          Block specific dates or set different hours for certain days.
        </p>

        <div className="mb-6 rounded-xl border border-neutral-700 bg-neutral-800 p-6">
          <h2 className="mb-4 text-base font-semibold text-neutral-100">Add Override</h2>
          <div className="space-y-4">
            <div>
              <label className="mb-1 block text-sm font-medium text-neutral-400">Date</label>
              <input
                type="date"
                value={selectedDate}
                min={format(new Date(), "yyyy-MM-dd")}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full rounded-lg border border-neutral-600 bg-neutral-700 px-3 py-2 text-neutral-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex gap-4">
              <label className="flex cursor-pointer items-center gap-2">
                <input
                  type="radio"
                  checked={isBlocked}
                  onChange={() => setIsBlocked(true)}
                />
                <span className="text-sm text-neutral-300">Block entire day</span>
              </label>
              <label className="flex cursor-pointer items-center gap-2">
                <input
                  type="radio"
                  checked={!isBlocked}
                  onChange={() => setIsBlocked(false)}
                />
                <span className="text-sm text-neutral-300">Custom hours</span>
              </label>
            </div>
            {!isBlocked && (
              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="mb-1 block text-sm font-medium text-neutral-400">
                    Start
                  </label>
                  <input
                    type="time"
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                    className="w-full rounded-lg border border-neutral-600 bg-neutral-700 px-3 py-2 text-neutral-100 focus:outline-none"
                  />
                </div>
                <div className="flex-1">
                  <label className="mb-1 block text-sm font-medium text-neutral-400">
                    End
                  </label>
                  <input
                    type="time"
                    value={endTime}
                    onChange={(e) => setEndTime(e.target.value)}
                    className="w-full rounded-lg border border-neutral-600 bg-neutral-700 px-3 py-2 text-neutral-100 focus:outline-none"
                  />
                </div>
              </div>
            )}
            <Button
              variant="primary"
              onClick={handleAdd}
              disabled={!selectedDate || saving}
              className="w-full"
            >
              {saving ? "Saving..." : "Add Override"}
            </Button>
          </div>
        </div>

        <div className="space-y-3">
          {loading ? (
            <p className="text-sm text-neutral-400">Loading...</p>
          ) : overrides.length === 0 ? (
            <p className="py-8 text-center text-sm text-neutral-400">
              No date overrides yet.
            </p>
          ) : (
            overrides.map((o) => (
              <div
                key={o.id}
                className="flex items-center justify-between rounded-xl border border-neutral-700 bg-neutral-800 p-4"
              >
                <div>
                  <p className="font-medium text-neutral-100">
                    {format(parseISO(o.date), "EEEE, MMMM d, yyyy")}
                  </p>
                  <p className="text-sm text-neutral-400">
                    {o.isBlocked
                      ? "Blocked — no bookings"
                      : `Custom hours: ${o.startTime} – ${o.endTime}`}
                  </p>
                </div>
                <button
                  onClick={() => handleDelete(o.id)}
                  className="text-sm font-medium text-red-400 hover:text-red-300"
                >
                  Remove
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}
