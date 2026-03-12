"use client"

import { cn } from "@/lib/utils"

interface TimeSlotGridProps {
  slots: string[]
  selectedSlot: string | null
  onSlotSelect: (slot: string) => void
}

export default function TimeSlotGrid({
  slots,
  selectedSlot,
  onSlotSelect,
}: TimeSlotGridProps) {
  if (slots.length === 0) {
    return (
      <p className="text-sm text-gray-500">No available slots for this date.</p>
    )
  }

  function formatSlotTime(iso: string): string {
    const date = new Date(iso)
    return date.toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
      timeZone: "Asia/Kolkata",
    })
  }

  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
      {slots.map((slot) => (
        <button
          key={slot}
          onClick={() => onSlotSelect(slot)}
          className={cn(
            "rounded-md border px-3 py-2 text-sm font-medium transition-colors",
            selectedSlot === slot
              ? "border-blue-600 bg-blue-600 text-white"
              : "border-gray-200 bg-white text-gray-900 hover:border-blue-300 hover:bg-blue-50"
          )}
        >
          {formatSlotTime(slot)}
        </button>
      ))}
    </div>
  )
}
