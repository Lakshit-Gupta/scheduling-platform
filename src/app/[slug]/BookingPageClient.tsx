"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Clock, Globe, ArrowLeft } from "lucide-react"
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
    questions?: {
      id: string
      label: string
      placeholder: string | null
      type: string
      required: boolean
      order: number
    }[]
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
  const [answers, setAnswers] = useState<Record<string, string>>({})

  async function handleDateSelect(date: string) {
    setSelectedDate(date)
    setSelectedSlot(null)
    setShowForm(false)
    setAnswers({})
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
        answers: Object.entries(answers).map(([questionId, answer]) => ({
          questionId,
          answer,
        })),
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
    <div className="flex min-h-screen items-center justify-center bg-[#f8f9fa] p-4">
      <div className="mx-auto flex max-w-4xl flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm md:flex-row">
        {/* Left Panel */}
        <div className="w-full border-b border-gray-200 p-6 md:w-72 md:border-b-0 md:border-r md:p-8">
          <div
            className="flex h-11 w-11 items-center justify-center rounded-full text-sm font-semibold text-white"
            style={{ backgroundColor: eventType.color || "#111827" }}
          >
            {initials}
          </div>
          <p className="mt-4 text-[13px] text-gray-500">{host.name}</p>
          <h1 className="mt-1 font-cal text-xl text-gray-900">
            {eventType.title}
          </h1>
          {eventType.description && (
            <p className="mt-3 text-[13px] leading-relaxed text-gray-500">
              {eventType.description}
            </p>
          )}
          <div className="mt-5 space-y-2">
            <div className="flex items-center gap-2.5 text-[13px] text-gray-500">
              <Clock className="h-4 w-4 text-gray-400" />
              {eventType.duration} min
            </div>
            <div className="flex items-center gap-2.5 text-[13px] text-gray-500">
              <Globe className="h-4 w-4 text-gray-400" />
              Asia/Kolkata
            </div>
          </div>
        </div>

        {/* Right Panel */}
        <div className="flex-1 p-6 md:p-8">
          {!showForm ? (
            <>
              <h2 className="mb-6 font-cal text-lg text-gray-900">
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
                    <h3 className="mb-3 text-[13px] font-semibold uppercase tracking-wider text-gray-500">
                      Available Times
                    </h3>
                    {loadingSlots ? (
                      <div className="flex items-center gap-2">
                        <div className="h-4 w-4 animate-spin rounded-full border-2 border-gray-300 border-t-gray-900" />
                        <span className="text-sm text-gray-500">Loading...</span>
                      </div>
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
                className="mb-5 inline-flex items-center gap-1.5 text-sm text-gray-500 transition-colors hover:text-gray-900"
              >
                <ArrowLeft className="h-4 w-4" />
                Back
              </button>
              <h2 className="font-cal text-lg text-gray-900">
                Enter your details
              </h2>
              <p className="mt-1 mb-5 text-[13px] text-gray-500">
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
                questions={eventType.questions || []}
                answers={answers}
                onAnswerChange={(questionId, value) =>
                  setAnswers((prev) => ({ ...prev, [questionId]: value }))
                }
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
