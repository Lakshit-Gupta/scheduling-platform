"use client"

import { useState, useEffect } from "react"
import * as Switch from "@radix-ui/react-switch"
import { DEFAULT_USER_ID } from "@/lib/constants"

export const dynamic = 'force-dynamic'

const DAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
]

interface DayAvailability {
  dayOfWeek: number
  enabled: boolean
  startTime: string
  endTime: string
}

export default function AvailabilityPage() {
  const [days, setDays] = useState<DayAvailability[]>(
    DAYS.map((_, i) => ({
      dayOfWeek: i,
      enabled: i >= 1 && i <= 5,
      startTime: "09:00",
      endTime: "17:00",
    }))
  )
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    fetch("/api/v1/availability")
      .then((res) => res.json())
      .then((data: { dayOfWeek: number; startTime: string; endTime: string }[]) => {
        if (data.length > 0) {
          setDays(
            DAYS.map((_, i) => {
              const existing = data.find(
                (d: { dayOfWeek: number }) => d.dayOfWeek === i
              )
              return existing
                ? {
                    dayOfWeek: i,
                    enabled: true,
                    startTime: existing.startTime,
                    endTime: existing.endTime,
                  }
                : {
                    dayOfWeek: i,
                    enabled: false,
                    startTime: "09:00",
                    endTime: "17:00",
                  }
            })
          )
        }
        setLoading(false)
      })
  }, [])

  function updateDay(index: number, updates: Partial<DayAvailability>) {
    setDays((prev) =>
      prev.map((d, i) => (i === index ? { ...d, ...updates } : d))
    )
  }

  async function handleSave() {
    setSaving(true)
    const enabledDays = days
      .filter((d) => d.enabled)
      .map((d) => ({
        userId: DEFAULT_USER_ID,
        dayOfWeek: d.dayOfWeek,
        startTime: d.startTime,
        endTime: d.endTime,
        timezone: "Asia/Kolkata",
      }))

    await fetch("/api/v1/availability", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(enabledDays),
    })
    setSaving(false)
    alert("Availability saved!")
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <p className="text-gray-500">Loading...</p>
      </div>
    )
  }

  return (
    <div>
      <div className="mt-8 mb-6 flex items-center justify-between px-8">
        <h1 className="text-2xl font-bold text-gray-900">Availability</h1>
      </div>

      <div className="px-8">
        <div className="max-w-2xl rounded-lg border border-gray-200 bg-white">
          {days.map((day, index) => (
            <div
              key={day.dayOfWeek}
              className="flex items-center justify-between border-b border-gray-100 px-6 py-4 last:border-0"
            >
              <div className="flex items-center gap-3">
                <Switch.Root
                  checked={day.enabled}
                  onCheckedChange={(checked) =>
                    updateDay(index, { enabled: checked })
                  }
                  className="relative h-6 w-11 rounded-full bg-gray-200 transition-colors data-[state=checked]:bg-gray-900"
                >
                  <Switch.Thumb className="block h-5 w-5 translate-x-0.5 rounded-full bg-white shadow transition-transform data-[state=checked]:translate-x-[22px]" />
                </Switch.Root>
                <span className="w-24 text-sm font-medium text-gray-900">
                  {DAYS[day.dayOfWeek]}
                </span>
              </div>

              {day.enabled && (
                <div className="flex items-center gap-2">
                  <input
                    type="time"
                    value={day.startTime}
                    onChange={(e) =>
                      updateDay(index, { startTime: e.target.value })
                    }
                    className="rounded border border-gray-300 px-3 py-1.5 text-sm focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900"
                  />
                  <span className="text-sm text-gray-500">–</span>
                  <input
                    type="time"
                    value={day.endTime}
                    onChange={(e) =>
                      updateDay(index, { endTime: e.target.value })
                    }
                    className="rounded border border-gray-300 px-3 py-1.5 text-sm focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900"
                  />
                </div>
              )}
            </div>
          ))}

          <div className="border-t border-gray-100 px-6 py-4">
            <button
              onClick={handleSave}
              disabled={saving}
              className="rounded-md bg-black px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-800 disabled:opacity-50"
            >
              {saving ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
