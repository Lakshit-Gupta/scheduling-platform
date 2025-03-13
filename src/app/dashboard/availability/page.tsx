"use client"

import { useState, useEffect } from "react"
import * as Switch from "@radix-ui/react-switch"
import Link from "next/link"
import { DEFAULT_USER_ID } from "@/lib/constants"

export const dynamic = 'force-dynamic'

const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

interface DayAvailability { dayOfWeek: number; enabled: boolean; startTime: string; endTime: string }

export default function AvailabilityPage() {
  const [days, setDays] = useState<DayAvailability[]>(DAYS.map((_, i) => ({ dayOfWeek: i, enabled: i >= 1 && i <= 5, startTime: "09:00", endTime: "17:00" })))
  const [timezone, setTimezone] = useState("Asia/Kolkata")
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    fetch("/api/v1/availability").then((res) => res.json())
      .then((data: { dayOfWeek: number; startTime: string; endTime: string; timezone?: string }[]) => {
        if (data.length > 0) {
          setDays(DAYS.map((_, i) => {
            const existing = data.find((d: { dayOfWeek: number }) => d.dayOfWeek === i)
            return existing ? { dayOfWeek: i, enabled: true, startTime: existing.startTime, endTime: existing.endTime }
              : { dayOfWeek: i, enabled: false, startTime: "09:00", endTime: "17:00" }
          }))
          setTimezone(data[0]?.timezone || "Asia/Kolkata")
        }
        setLoading(false)
      })
  }, [])

  function updateDay(index: number, updates: Partial<DayAvailability>) { setDays((prev) => prev.map((d, i) => (i === index ? { ...d, ...updates } : d))) }

  async function handleSave() {
    setSaving(true)
    const enabledDays = days.filter((d) => d.enabled).map((d) => ({ userId: DEFAULT_USER_ID, dayOfWeek: d.dayOfWeek, startTime: d.startTime, endTime: d.endTime, timezone }))
    await fetch("/api/v1/availability", { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(enabledDays) })
    setSaving(false); setSaved(true); setTimeout(() => setSaved(false), 2000)
  }

  if (loading) { return (<div className="flex items-center justify-center p-16"><div className="h-6 w-6 animate-spin rounded-full border-2 border-neutral-600 border-t-neutral-100" /></div>) }

  return (
    <div className="px-6 py-8 md:px-8">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h1 className="font-cal text-[28px] text-neutral-100">Availability</h1>
          <p className="mt-1 text-sm text-neutral-400">Configure times when you are available for bookings.</p>
        </div>
        <Link
          href="/dashboard/availability/schedules"
          className="text-sm text-blue-400 transition-colors hover:text-blue-300"
        >
          Manage multiple schedules →
        </Link>
      </div>
      <div className="mt-8 max-w-2xl">
          <div className="overflow-hidden rounded-xl border border-neutral-700 bg-neutral-800 shadow-sm">
            {days.map((day, index) => (
              <div key={day.dayOfWeek} className="flex flex-col sm:flex-row sm:items-center gap-3 py-3 border-b border-neutral-700 px-6 last:border-0 sm:justify-between">
                <div className="flex items-center gap-3 min-w-[140px]">
                  <Switch.Root checked={day.enabled} onCheckedChange={(checked) => updateDay(index, { enabled: checked })}
                    className="relative h-[22px] w-[42px] cursor-pointer rounded-full bg-neutral-600 transition-colors data-[state=checked]:bg-white">
                  <Switch.Thumb className="block h-[18px] w-[18px] translate-x-0.5 rounded-full bg-neutral-900 shadow-sm transition-transform data-[state=checked]:translate-x-[22px]" />
                  </Switch.Root>
                  <span className={`text-sm font-medium ${day.enabled ? 'text-neutral-100' : 'text-neutral-500'}`}>{DAYS[day.dayOfWeek]}</span>
                </div>
                {day.enabled ? (
                  <div className="flex flex-wrap items-center gap-2">
                    <input type="time" value={day.startTime} onChange={(e) => updateDay(index, { startTime: e.target.value })}
                    className="w-[120px] rounded-lg border border-neutral-600 bg-neutral-800 px-2 py-1.5 text-sm text-neutral-100 focus:outline-none focus:border-neutral-500" />
                  <span className="text-sm text-neutral-500">to</span>
                  <input type="time" value={day.endTime} onChange={(e) => updateDay(index, { endTime: e.target.value })}
                    className="w-[120px] rounded-lg border border-neutral-600 bg-neutral-800 px-2 py-1.5 text-sm text-neutral-100 focus:outline-none focus:border-neutral-500" />
                </div>
              ) : (<span className="text-sm text-neutral-500">Unavailable</span>)}
            </div>
          ))}
          <div className="mt-6 border-t border-neutral-700 pt-6 px-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium text-neutral-100">Timezone</h3>
                <p className="text-xs text-neutral-500 mt-0.5">All availability times are in this timezone</p>
              </div>
              <select
                value={timezone}
                onChange={(e) => setTimezone(e.target.value)}
                className="rounded-lg border border-neutral-600 bg-neutral-800 px-3 py-2 text-sm text-neutral-100 focus:border-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-500"
              >
                <option value="Asia/Kolkata">Asia/Kolkata (IST)</option>
                <option value="America/New_York">America/New_York (EST)</option>
                <option value="America/Los_Angeles">America/Los_Angeles (PST)</option>
                <option value="America/Chicago">America/Chicago (CST)</option>
                <option value="Europe/London">Europe/London (GMT)</option>
                <option value="Europe/Paris">Europe/Paris (CET)</option>
                <option value="Europe/Berlin">Europe/Berlin (CET)</option>
                <option value="Asia/Tokyo">Asia/Tokyo (JST)</option>
                <option value="Asia/Singapore">Asia/Singapore (SGT)</option>
                <option value="Asia/Dubai">Asia/Dubai (GST)</option>
                <option value="Australia/Sydney">Australia/Sydney (AEST)</option>
                <option value="Pacific/Auckland">Pacific/Auckland (NZST)</option>
              </select>
            </div>
          </div>
          <div className="border-t border-neutral-700 px-6 py-4">
            <button onClick={handleSave} disabled={saving}
              className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-neutral-900 shadow-sm transition-all hover:bg-neutral-200 disabled:opacity-50">
              {saving ? "Saving..." : saved ? "✓ Saved" : "Save Changes"}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
