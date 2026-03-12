"use client"

import { useEffect, useState } from "react"
import { format, addMinutes } from "date-fns"
import Modal from "@/components/ui/Modal"
import Button from "@/components/ui/Button"
import CalendarPicker from "@/components/booking/CalendarPicker"
import TimeSlotGrid from "@/components/booking/TimeSlotGrid"

interface Booking {
  id: string
  bookerName: string
  bookerEmail: string
  startTime: string
  endTime: string
  eventType: {
    id: string
    title: string
    duration: number
    slug: string
  }
}

interface Props {
  booking: Booking
  isOpen: boolean
  onClose: () => void
  onSuccess: () => void
}

export default function RescheduleModal({
  booking,
  isOpen,
  onClose,
  onSuccess,
}: Props) {
  const [selectedDate, setSelectedDate] = useState<string | null>(null)
  const [slots, setSlots] = useState<string[]>([])
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null)
  const [availableDays, setAvailableDays] = useState<number[]>([])
  const [loadingSlots, setLoadingSlots] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    if (!isOpen) return

    setSelectedDate(null)
    setSelectedSlot(null)
    setSlots([])
    setError("")

    fetch("/api/v1/availability")
      .then((res) => res.json())
      .then((data: { dayOfWeek: number }[]) => {
        setAvailableDays(data.map((item) => item.dayOfWeek))
      })
      .catch(() => {
        setError("Failed to load availability")
      })
  }, [isOpen])

  async function handleDateSelect(date: string) {
    setSelectedDate(date)
    setSelectedSlot(null)
    setLoadingSlots(true)
    setError("")

    try {
      const res = await fetch(`/api/v1/slots?slug=${booking.eventType.slug}&date=${date}`)
      const data = await res.json()
      setSlots(data)
    } catch {
      setError("Failed to load slots")
      setSlots([])
    } finally {
      setLoadingSlots(false)
    }
  }

  async function handleReschedule() {
    if (!selectedSlot) return

    setLoading(true)
    setError("")

    try {
      const newStart = new Date(selectedSlot)
      const newEnd = addMinutes(newStart, booking.eventType.duration)

      const res = await fetch(`/api/v1/bookings/${booking.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          newStartTime: newStart.toISOString(),
          newEndTime: newEnd.toISOString(),
        }),
      })

      if (!res.ok) {
        const data = await res.json()
        setError(data.error || "Failed to reschedule")
        return
      }

      onSuccess()
      onClose()
    } catch {
      setError("Something went wrong")
    } finally {
      setLoading(false)
    }
  }

  return (
    <Modal open={isOpen} onOpenChange={(open) => !open && onClose()} title="Reschedule Booking">
      <div className="space-y-4">
        <div className="rounded-lg bg-gray-50 p-3">
          <p className="text-sm text-gray-600">Current time:</p>
          <p className="font-medium text-gray-900">
            {format(new Date(booking.startTime), "EEEE, MMMM d 'at' h:mm a")}
          </p>
        </div>

        <p className="text-sm font-medium text-gray-700">Select new date and time:</p>

        <CalendarPicker
          selectedDate={selectedDate}
          onDateSelect={handleDateSelect}
          availableDays={availableDays}
        />

        {selectedDate && (
          loadingSlots ? (
            <div className="flex items-center gap-2">
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-gray-300 border-t-gray-900" />
              <span className="text-sm text-gray-500">Loading...</span>
            </div>
          ) : (
            <TimeSlotGrid
              slots={slots}
              selectedSlot={selectedSlot}
              onSlotSelect={setSelectedSlot}
            />
          )
        )}

        {error && <p className="text-sm text-red-500">{error}</p>}

        <div className="flex gap-3 pt-2">
          <Button variant="secondary" onClick={onClose} className="flex-1">
            Cancel
          </Button>
          <Button
            variant="primary"
            onClick={handleReschedule}
            disabled={!selectedDate || !selectedSlot || loading}
            className="flex-1"
          >
            {loading ? "Rescheduling..." : "Confirm Reschedule"}
          </Button>
        </div>
      </div>
    </Modal>
  )
}
