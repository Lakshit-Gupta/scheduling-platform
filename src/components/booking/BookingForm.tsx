"use client"

import { useState } from "react"
import Input from "@/components/ui/Input"
import Button from "@/components/ui/Button"

interface BookingFormProps {
  onSubmit: (data: { name: string; email: string; notes: string }) => void
  loading?: boolean
}

export default function BookingForm({ onSubmit, loading }: BookingFormProps) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [notes, setNotes] = useState("")

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    onSubmit({ name, email, notes })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        label="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        placeholder="John Doe"
      />
      <Input
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        placeholder="john@example.com"
      />
      <div className="space-y-1">
        <label className="block text-sm font-medium text-gray-700">
          Notes (optional)
        </label>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className="block w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          rows={3}
          placeholder="Any additional info..."
        />
      </div>
      <Button type="submit" className="w-full" disabled={loading}>
        {loading ? "Confirming..." : "Confirm Booking"}
      </Button>
    </form>
  )
}
