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
      <p className="text-sm text-neutral-500">No available slots for this date.</p>
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
            "rounded-lg border px-3 py-2.5 text-sm font-medium transition-all duration-150",
            selectedSlot === slot
              ? "border-white bg-white text-neutral-900"
              : "border-neutral-600 bg-neutral-800 text-neutral-100 hover:border-neutral-400 hover:bg-neutral-700"
          )}
        >
          {formatSlotTime(slot)}
        </button>
      ))}
    </div>
  )
}
