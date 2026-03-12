"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Input from "@/components/ui/Input"
import Card from "@/components/ui/Card"

const DURATIONS = [15, 30, 45, 60]
const BUFFER_OPTIONS = [0, 5, 10, 15, 30]
const COLORS = ["#3B82F6", "#EF4444", "#10B981", "#F59E0B", "#8B5CF6", "#EC4899"]

export default function NewEventTypePage() {
  const router = useRouter()
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [duration, setDuration] = useState(30)
  const [slug, setSlug] = useState("")
  const [color, setColor] = useState(COLORS[0])
  const [bufferMinutes, setBufferMinutes] = useState(0)
  const [loading, setLoading] = useState(false)

  function handleTitleChange(value: string) {
    setTitle(value)
    setSlug(
      value
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "")
    )
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    const res = await fetch("/api/v1/event-types", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, description, duration, slug, color, bufferMinutes }),
    })
    if (res.ok) {
      router.push("/dashboard/event-types")
    }
    setLoading(false)
  }

  return (
    <div className="px-8">
      <h1 className="mt-8 mb-6 text-2xl font-bold text-gray-900">
        New Event Type
      </h1>
      <Card className="max-w-lg border border-gray-200">
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Title"
            value={title}
            onChange={(e) => handleTitleChange(e.target.value)}
            required
          />
          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="block w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm placeholder:text-gray-400 focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900"
              rows={3}
            />
          </div>
          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-700">
              Duration
            </label>
            <select
              value={duration}
              onChange={(e) => setDuration(Number(e.target.value))}
              className="block w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900"
            >
              {DURATIONS.map((d) => (
                <option key={d} value={d}>
                  {d} minutes
                </option>
              ))}
            </select>
          </div>
          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-700">
              Buffer time after event
            </label>
            <select
              value={bufferMinutes}
              onChange={(e) => setBufferMinutes(Number(e.target.value))}
              className="block w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900"
            >
              {BUFFER_OPTIONS.map((b) => (
                <option key={b} value={b}>
                  {b === 0 ? "No buffer" : `${b} minutes`}
                </option>
              ))}
            </select>
          </div>
          <Input label="Slug" value={slug} onChange={(e) => setSlug(e.target.value)} required />
          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-700">
              Color
            </label>
            <div className="flex gap-2">
              {COLORS.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setColor(c)}
                  className={`h-8 w-8 rounded-full border-2 transition-transform ${
                    color === c
                      ? "scale-110 border-gray-900"
                      : "border-transparent"
                  }`}
                  style={{ backgroundColor: c }}
                />
              ))}
            </div>
          </div>
          <div className="flex gap-2 pt-2">
            <button
              type="submit"
              disabled={loading}
              className="rounded-md bg-black px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-800 disabled:opacity-50"
            >
              {loading ? "Creating..." : "Create Event Type"}
            </button>
            <button
              type="button"
              onClick={() => router.back()}
              className="rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 transition-colors hover:bg-gray-50"
            >
              Cancel
            </button>
          </div>
        </form>
      </Card>
    </div>
  )
}
