"use client"

import { useState } from "react"
import Input from "@/components/ui/Input"
import Button from "@/components/ui/Button"

type BookingQuestionType = "TEXT" | "NUMBER" | "SELECT" | "CHECKBOX"

function normalizeQuestionType(type: string): BookingQuestionType {
  const normalized = type.trim().toUpperCase()
  if (
    normalized === "TEXT" ||
    normalized === "NUMBER" ||
    normalized === "SELECT" ||
    normalized === "CHECKBOX"
  ) {
    return normalized
  }
  if (normalized === "TEXTAREA") return "TEXT"
  return "TEXT"
}

interface BookingFormProps {
  onSubmit: (data: { name: string; email: string; notes: string }) => void
  loading?: boolean
  questions?: {
    id: string
    label: string
    placeholder: string | null
    type: string
    required: boolean
  }[]
  answers?: Record<string, string>
  onAnswerChange?: (questionId: string, value: string) => void
}

export default function BookingForm({
  onSubmit,
  loading,
  questions = [],
  answers = {},
  onAnswerChange,
}: BookingFormProps) {
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
      <div className="space-y-1.5">
        <label className="block text-sm font-medium text-gray-700">
          Notes (optional)
        </label>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className="block w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-gray-900 transition-all duration-150"
          rows={3}
          placeholder="Any additional info..."
        />
      </div>
      {questions.map((question) => {
        const questionType = normalizeQuestionType(question.type)

        return (
          <div key={question.id} className="space-y-1.5">
            <label className="block text-sm font-medium text-gray-700">
              {question.label}
              {question.required ? " *" : ""}
            </label>
            {questionType === "CHECKBOX" ? (
              <label className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900">
                <input
                  type="checkbox"
                  checked={answers[question.id] === "true"}
                  onChange={(e) =>
                    onAnswerChange?.(question.id, e.target.checked ? "true" : "false")
                  }
                  required={question.required}
                />
                {question.placeholder || "Select"}
              </label>
            ) : (
              <Input
                type={questionType === "NUMBER" ? "number" : "text"}
                value={answers[question.id] || ""}
                onChange={(e) => onAnswerChange?.(question.id, e.target.value)}
                placeholder={question.placeholder || "Your answer"}
                required={question.required}
              />
            )}
          </div>
        )
      })}
      <Button type="submit" className="w-full" disabled={loading}>
        {loading ? "Confirming..." : "Confirm Booking"}
      </Button>
    </form>
  )
}
