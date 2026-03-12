"use client"

import { useEffect, useState } from "react"
import Button from "@/components/ui/Button"

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

interface ScheduleAvailability {
  dayOfWeek: number
  startTime: string
  endTime: string
}

interface AvailabilitySchedule {
  id: string
  name: string
  timezone: string
  isDefault: boolean
  availability: ScheduleAvailability[]
}

export default function SchedulesPage() {
  const [schedules, setSchedules] = useState<AvailabilitySchedule[]>([])
  const [loading, setLoading] = useState(true)
  const [creating, setCreating] = useState(false)
  const [newName, setNewName] = useState("")

  useEffect(() => {
    fetch("/api/v1/schedules")
      .then((r) => r.json())
      .then((data: AvailabilitySchedule[]) => setSchedules(data))
      .finally(() => setLoading(false))
  }, [])

  const handleCreate = async () => {
    if (!newName.trim()) return
    setCreating(true)
    const res = await fetch("/api/v1/schedules", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: newName, copyFromDefault: true }),
    })
    const data = (await res.json()) as AvailabilitySchedule
    setSchedules((prev) => [...prev, data])
    setNewName("")
    setCreating(false)
  }

  const handleDelete = async (id: string) => {
    const res = await fetch(`/api/v1/schedules/${id}`, { method: "DELETE" })
    if (!res.ok) return
    setSchedules((prev) => prev.filter((s) => s.id !== id))
  }

  return (
    <div className="px-4 py-8 md:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="font-cal text-2xl text-gray-900">
              Availability Schedules
            </h1>
            <p className="mt-1 text-gray-500">
              Manage multiple schedules for different situations.
            </p>
          </div>
        </div>

        <div className="mb-6 rounded-xl border border-gray-200 bg-white p-6">
          <h2 className="mb-4 text-sm font-semibold text-gray-900">
            Create New Schedule
          </h2>
          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              type="text"
              placeholder="Schedule name (e.g. Office Hours, Consulting)"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              className="flex-1 rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Button
              variant="primary"
              onClick={handleCreate}
              disabled={!newName.trim() || creating}
            >
              {creating ? "Creating..." : "Create"}
            </Button>
          </div>
        </div>

        {loading ? (
          <p className="text-sm text-gray-500">Loading...</p>
        ) : (
          <div className="space-y-4">
            {schedules.map((s) => (
              <div
                key={s.id}
                className="rounded-xl border border-gray-200 bg-white p-6"
              >
                <div className="mb-4 flex items-center justify-between gap-3">
                  <div>
                    <h3 className="font-semibold text-gray-900">{s.name}</h3>
                    <p className="text-sm text-gray-500">
                      {s.timezone} · {s.availability?.length || 0} active days
                    </p>
                  </div>
                  <div className="flex gap-2">
                    {!s.isDefault && (
                      <button
                        onClick={() => handleDelete(s.id)}
                        className="text-sm text-red-500 hover:text-red-700"
                      >
                        Delete
                      </button>
                    )}
                    {s.isDefault && (
                      <span className="rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-700">
                        Default
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {DAYS.map((day, i) => {
                    const avail = s.availability?.find((a) => a.dayOfWeek === i)
                    return (
                      <div
                        key={i}
                        className={`rounded-lg px-3 py-1.5 text-xs font-medium ${
                          avail
                            ? "bg-blue-100 text-blue-700"
                            : "bg-gray-100 text-gray-400"
                        }`}
                      >
                        {day}
                        {avail ? ` ${avail.startTime}–${avail.endTime}` : ""}
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
