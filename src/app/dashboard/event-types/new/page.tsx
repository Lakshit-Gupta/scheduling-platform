"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { toast } from "@/components/ui/Toast"

const DURATIONS = [15, 30, 45, 60]
const BUFFER_OPTIONS = [0, 5, 10, 15, 30]
const COLORS = ["#3B82F6", "#EF4444", "#10B981", "#F59E0B", "#8B5CF6", "#EC4899"]
const QUESTION_TYPE_OPTIONS = [
  { value: "TEXT", label: "Short text" },
  { value: "NUMBER", label: "Number" },
  { value: "SELECT", label: "Select" },
  { value: "CHECKBOX", label: "Checkbox" },
] as const

type QuestionTypeValue = (typeof QUESTION_TYPE_OPTIONS)[number]["value"]

interface QuestionFormItem {
  label: string
  placeholder: string
  type: QuestionTypeValue
  required: boolean
  order: number
}

export default function NewEventTypePage() {
  const router = useRouter()
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [duration, setDuration] = useState(30)
  const [slug, setSlug] = useState("")
  const [color, setColor] = useState(COLORS[0])
  const [bufferMinutes, setBufferMinutes] = useState(0)
  const [questions, setQuestions] = useState<QuestionFormItem[]>([])
  const [loading, setLoading] = useState(false)

  function handleTitleChange(value: string) {
    setTitle(value); setSlug(value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault(); setLoading(true)
    const res = await fetch("/api/v1/event-types", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ title, description, duration, slug, color, bufferMinutes, questions }) })
    if (!res.ok) {
      toast("Failed to create event type", "error")
      setLoading(false)
      return
    }
    toast("Event type created", "success")
    router.push("/dashboard/event-types")
    setLoading(false)
  }

  return (
    <div className="px-6 py-8 md:px-8">
      <button onClick={() => router.back()} className="mb-4 inline-flex items-center gap-1.5 text-sm text-neutral-400 transition-colors hover:text-neutral-100"><ArrowLeft className="h-4 w-4" />Back</button>
      <h1 className="font-cal text-[28px] text-neutral-100">New Event Type</h1>
      <p className="mt-1 text-sm text-neutral-400">Create a new event type for people to book.</p>
      <div className="mt-8 max-w-lg rounded-xl border border-neutral-700 bg-neutral-800 p-6 shadow-sm">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-1.5">
            <label className="block text-sm font-medium text-neutral-400">Title</label>
            <input value={title} onChange={(e) => handleTitleChange(e.target.value)} required placeholder="Quick Chat"
              className="block w-full rounded-lg border border-neutral-600 bg-neutral-700 px-3 py-2 text-sm text-neutral-100 shadow-sm placeholder:text-neutral-500 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-neutral-400/30 transition-all" />
          </div>
          <div className="space-y-1.5">
            <label className="block text-sm font-medium text-neutral-400">Description</label>
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} rows={3} placeholder="A brief description..."
              className="block w-full rounded-lg border border-neutral-600 bg-neutral-700 px-3 py-2 text-sm text-neutral-100 shadow-sm placeholder:text-neutral-500 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-neutral-400/30 transition-all" />
          </div>
          <div className="space-y-1.5">
            <label className="block text-sm font-medium text-neutral-400">Duration</label>
            <select value={duration} onChange={(e) => setDuration(Number(e.target.value))}
              className="block w-full rounded-lg border border-neutral-600 bg-neutral-700 px-3 py-2 text-sm text-neutral-100 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-neutral-400/30 transition-all">
              {DURATIONS.map((d) => (<option key={d} value={d}>{d} minutes</option>))}
            </select>
          </div>
          <div className="space-y-1.5">
            <label className="block text-sm font-medium text-neutral-400">Buffer time after event</label>
            <select value={bufferMinutes} onChange={(e) => setBufferMinutes(Number(e.target.value))}
              className="block w-full rounded-lg border border-neutral-600 bg-neutral-700 px-3 py-2 text-sm text-neutral-100 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-neutral-400/30 transition-all">
              {BUFFER_OPTIONS.map((b) => (<option key={b} value={b}>{b === 0 ? "No buffer" : `${b} minutes`}</option>))}
            </select>
          </div>
          <div className="border-t border-neutral-700 pt-5">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-sm font-semibold text-neutral-100">Custom Questions</h3>
              <button
                type="button"
                onClick={() =>
                  setQuestions((prev) => [
                    ...prev,
                    {
                      label: "",
                      placeholder: "",
                      type: "TEXT",
                      required: false,
                      order: prev.length,
                    },
                  ])
                }
                className="text-sm font-medium text-blue-400 hover:text-blue-300"
              >
                + Add question
              </button>
            </div>
            {questions.map((question, index) => (
              <div key={index} className="mb-3 space-y-3 rounded-lg border border-neutral-700 bg-neutral-900/40 p-4">
                <div className="flex justify-between">
                  <span className="text-sm font-medium text-neutral-300">Question {index + 1}</span>
                  <button
                    type="button"
                    onClick={() =>
                      setQuestions((prev) =>
                        prev
                          .filter((_, itemIndex) => itemIndex !== index)
                          .map((item, itemIndex) => ({ ...item, order: itemIndex }))
                      )
                    }
                    className="text-sm text-red-400 hover:text-red-300"
                  >
                    Remove
                  </button>
                </div>
                <input
                  placeholder="Question label"
                  value={question.label}
                  onChange={(e) =>
                    setQuestions((prev) =>
                      prev.map((item, itemIndex) =>
                        itemIndex === index ? { ...item, label: e.target.value } : item
                      )
                    )
                  }
                  className="block w-full rounded-lg border border-neutral-600 bg-neutral-700 px-3 py-2 text-sm text-neutral-100 shadow-sm placeholder:text-neutral-500 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-neutral-400/30 transition-all"
                />
                <input
                  placeholder="Placeholder text (optional)"
                  value={question.placeholder}
                  onChange={(e) =>
                    setQuestions((prev) =>
                      prev.map((item, itemIndex) =>
                        itemIndex === index ? { ...item, placeholder: e.target.value } : item
                      )
                    )
                  }
                  className="block w-full rounded-lg border border-neutral-600 bg-neutral-700 px-3 py-2 text-sm text-neutral-100 shadow-sm placeholder:text-neutral-500 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-neutral-400/30 transition-all"
                />
                <div className="flex gap-4">
                  <select
                    value={question.type}
                    onChange={(e) =>
                      setQuestions((prev) =>
                        prev.map((item, itemIndex) =>
                          itemIndex === index
                            ? { ...item, type: e.target.value as QuestionTypeValue }
                            : item
                        )
                      )
                    }
                    className="rounded-lg border border-neutral-600 bg-neutral-700 px-3 py-2 text-sm text-neutral-100"
                  >
                    {QUESTION_TYPE_OPTIONS.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <label className="flex items-center gap-2 text-sm text-neutral-300">
                    <input
                      type="checkbox"
                      checked={question.required}
                      onChange={(e) =>
                        setQuestions((prev) =>
                          prev.map((item, itemIndex) =>
                            itemIndex === index ? { ...item, required: e.target.checked } : item
                          )
                        )
                      }
                    />
                    Required
                  </label>
                </div>
              </div>
            ))}
          </div>
          <div className="space-y-1.5">
            <label className="block text-sm font-medium text-neutral-400">Slug</label>
            <input value={slug} onChange={(e) => setSlug(e.target.value)} required
              className="block w-full rounded-lg border border-neutral-600 bg-neutral-700 px-3 py-2 text-sm text-neutral-100 shadow-sm placeholder:text-neutral-500 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-neutral-400/30 transition-all" />
          </div>
          <div className="space-y-1.5">
            <label className="block text-sm font-medium text-neutral-400">Color</label>
            <div className="flex gap-2">
              {COLORS.map((c) => (
                <button key={c} type="button" onClick={() => setColor(c)}
                  className={`h-8 w-8 rounded-full border-2 transition-all duration-150 ${color === c ? "scale-110 border-white ring-2 ring-white/20" : "border-transparent hover:scale-105"}`}
                  style={{ backgroundColor: c }} />
              ))}
            </div>
          </div>
          <div className="flex gap-3 pt-3 border-t border-neutral-700">
            <button type="submit" disabled={loading} className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-neutral-900 shadow-sm transition-all hover:bg-neutral-200 disabled:opacity-50">{loading ? "Creating..." : "Create Event Type"}</button>
            <button type="button" onClick={() => router.back()} className="rounded-lg border border-neutral-600 bg-neutral-700 px-4 py-2 text-sm font-medium text-neutral-400 shadow-sm transition-all hover:bg-neutral-600 hover:text-neutral-100">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  )
}
