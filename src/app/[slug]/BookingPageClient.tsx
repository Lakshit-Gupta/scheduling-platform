"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Clock, Globe } from "lucide-react"
import CalendarPicker from "@/components/booking/CalendarPicker"
import TimeSlotGrid from "@/components/booking/TimeSlotGrid"
import BookingForm from "@/components/booking/BookingForm"

interface BookingPageClientProps {
  eventType: {
    id: string
    title: string
    description: string | null
    duration: number
    slug: string
    color: string | null
  }
  host: {
    name: string
    username: string
  }
  availableDays: number[]
}

export default function BookingPageClient({
  eventType,
  host,
  availableDays,
}: BookingPageClientProps) {
  const router = useRouter()
  const [selectedDate, setSelectedDate] = useState<string | null>(null)
  const [slots, setSlots] = useState<string[]>([])
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null)
  const [showForm, setShowForm] = useState(false)
  const [loadingSlots, setLoadingSlots] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  async function handleDateSelect(date: string) {
    setSelectedDate(date)
    setSelectedSlot(null)
    setShowForm(false)
    setLoadingSlots(true)
    const res = await fetch(
      `/api/v1/slots?slug=${eventType.slug}&date=${date}`
    )
    const data = await res.json()
    setSlots(data)
    setLoadingSlots(false)
  }

  function handleSlotSelect(slot: string) {
    setSelectedSlot(slot)
    setShowForm(true)
  }

  async function handleBookingSubmit(formData: {
    name: string
    email: string
    notes: string
  }) {
    setSubmitting(true)
    const res = await fetch("/api/v1/bookings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        eventTypeId: eventType.id,
        bookerName: formData.name,
        bookerEmail: formData.email,
        startTime: selectedSlot,
        notes: formData.notes,
      }),
    })

    if (res.ok) {
      const booking = await res.json()
      router.push(`/${eventType.slug}/confirmed?bookingId=${booking.id}`)
    }
    setSubmitting(false)
  }

  const initials = host.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2)

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
      <div className="mx-auto flex max-w-4xl flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm md:flex-row">
        {/* Left Panel */}
        <div className="w-full border-b border-gray-200 bg-white p-6 md:w-80 md:border-b-0 md:border-r md:p-8">
          <div
            className="flex h-12 w-12 items-center justify-center rounded-full text-lg font-semibold text-white"
            style={{ backgroundColor: eventType.color || "#3B82F6" }}
          >
            {initials}
          </div>
          <p className="mt-4 text-sm text-gray-600">{host.name}</p>
          <h1 className="mt-1 text-xl font-bold text-gray-900">
            {eventType.title}
          </h1>
          {eventType.description && (
            <p className="mt-2 text-sm text-gray-500">
              {eventType.description}
            </p>
          )}
          <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
            <Clock className="h-4 w-4" />
            {eventType.duration} min
          </div>
          <div className="mt-2 flex items-center gap-2 text-sm text-gray-500">
            <Globe className="h-4 w-4" />
            Asia/Kolkata
          </div>
        </div>

        {/* Right Panel */}
        <div className="flex-1 bg-white p-8">
          {!showForm ? (
            <>
              <h2 className="mb-6 text-lg font-semibold text-gray-900">
                Select a Date &amp; Time
              </h2>
              <div className="flex flex-col gap-6 lg:flex-row">
                <div className="lg:w-72">
                  <CalendarPicker
                    availableDays={availableDays}
                    onDateSelect={handleDateSelect}
                    selectedDate={selectedDate}
                  />
                </div>
                {selectedDate && (
                  <div className="flex-1">
                    <h3 className="mb-3 text-sm font-semibold text-gray-900">
                      Available Times
                    </h3>
                    {loadingSlots ? (
                      <p className="text-sm text-gray-500">Loading...</p>
                    ) : (
                      <TimeSlotGrid
                        slots={slots}
                        selectedSlot={selectedSlot}
                        onSlotSelect={handleSlotSelect}
                      />
                    )}
                  </div>
                )}
              </div>
            </>
          ) : (
            <div className="max-w-sm">
              <button
                onClick={() => setShowForm(false)}
                className="mb-4 text-sm text-gray-500 hover:text-gray-900"
              >
                &larr; Back to time selection
              </button>
              <h2 className="mb-1 text-sm font-semibold text-gray-900">
                Enter your details
              </h2>
              <p className="mb-4 text-xs text-gray-500">
                {selectedDate} at{" "}
                {selectedSlot &&
                  new Date(selectedSlot).toLocaleTimeString("en-IN", {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true,
                    timeZone: "Asia/Kolkata",
                  })}
              </p>
              <BookingForm
                onSubmit={handleBookingSubmit}
                loading={submitting}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
