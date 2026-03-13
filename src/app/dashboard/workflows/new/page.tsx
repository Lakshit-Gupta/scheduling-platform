"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

const triggers = [
  { value: "NEW_BOOKING", label: "New Booking" },
  { value: "CANCEL_BOOKING", label: "Booking Cancelled" },
  { value: "RESCHEDULE_BOOKING", label: "Booking Rescheduled" },
] as const

const actions = [
  { value: "SEND_EMAIL", label: "Send Email" },
  { value: "SEND_SMS", label: "Send SMS" },
  { value: "WEBHOOK", label: "Trigger Webhook" },
] as const

type WorkflowTriggerValue = (typeof triggers)[number]["value"]
type WorkflowActionValue = (typeof actions)[number]["value"]

export default function NewWorkflowPage() {
  const router = useRouter()
  const [saving, setSaving] = useState(false)
  const [form, setForm] = useState({
    title: "",
    description: "",
    trigger: "NEW_BOOKING" as WorkflowTriggerValue,
    action: "SEND_EMAIL" as WorkflowActionValue,
    timeValue: 24,
    timeUnit: "HOURS",
  })

  const handleSubmit = async () => {
    if (!form.title.trim()) return
    setSaving(true)
    try {
      const res = await fetch("/api/v1/workflows", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      if (res.ok) router.push("/dashboard/workflows")
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="max-w-2xl px-6 py-8 md:px-8">
      <div className="mb-8 flex items-center gap-3">
        <Link href="/dashboard/workflows" className="flex items-center gap-1.5 text-sm text-neutral-400 transition-colors hover:text-neutral-100">
          <ArrowLeft className="h-4 w-4" />Back
        </Link>
      </div>
      <h1 className="mb-1 font-cal text-[28px] text-neutral-100">New Workflow</h1>
      <p className="mb-8 text-sm text-neutral-400">Set up automated notifications and reminders.</p>

      <div className="space-y-5">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-neutral-300">Workflow name</label>
          <input
            type="text"
            placeholder="e.g. Send reminder before meeting"
            value={form.title}
            onChange={(e) => setForm((p) => ({ ...p, title: e.target.value }))}
            className="w-full rounded-lg border border-neutral-700 bg-neutral-800 px-3 py-2.5 text-sm text-neutral-100 placeholder:text-neutral-500 focus:border-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-500"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-neutral-300">Description (optional)</label>
          <input
            type="text"
            placeholder="What does this workflow do?"
            value={form.description}
            onChange={(e) => setForm((p) => ({ ...p, description: e.target.value }))}
            className="w-full rounded-lg border border-neutral-700 bg-neutral-800 px-3 py-2.5 text-sm text-neutral-100 placeholder:text-neutral-500 focus:border-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-500"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-neutral-300">Trigger</label>
          <select
            value={form.trigger}
            onChange={(e) =>
              setForm((p) => ({
                ...p,
                trigger: e.target.value as WorkflowTriggerValue,
              }))
            }
            className="w-full rounded-lg border border-neutral-700 bg-neutral-800 px-3 py-2.5 text-sm text-neutral-100 focus:border-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-500"
          >
            {triggers.map((t) => (
              <option key={t.value} value={t.value}>
                {t.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-neutral-300">Action</label>
          <select
            value={form.action}
            onChange={(e) =>
              setForm((p) => ({
                ...p,
                action: e.target.value as WorkflowActionValue,
              }))
            }
            className="w-full rounded-lg border border-neutral-700 bg-neutral-800 px-3 py-2.5 text-sm text-neutral-100 focus:border-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-500"
          >
            {actions.map((a) => (
              <option key={a.value} value={a.value}>
                {a.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-neutral-300">Timing</label>
          <div className="flex gap-3">
            <input
              type="number"
              min={1}
              value={form.timeValue}
              onChange={(e) => setForm((p) => ({ ...p, timeValue: Number(e.target.value) }))}
              className="w-24 rounded-lg border border-neutral-700 bg-neutral-800 px-3 py-2.5 text-sm text-neutral-100 focus:border-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-500"
            />
            <select
              value={form.timeUnit}
              onChange={(e) => setForm((p) => ({ ...p, timeUnit: e.target.value }))}
              className="flex-1 rounded-lg border border-neutral-700 bg-neutral-800 px-3 py-2.5 text-sm text-neutral-100 focus:border-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-500"
            >
              <option value="MINUTES">Minutes</option>
              <option value="HOURS">Hours</option>
              <option value="DAYS">Days</option>
            </select>
          </div>
        </div>

        <div className="flex gap-3 pt-2">
          <Link
            href="/dashboard/workflows"
            className="flex-1 rounded-lg border border-neutral-700 py-2.5 text-center text-sm font-medium text-neutral-400 transition-colors hover:bg-neutral-800 hover:text-neutral-100"
          >
            Cancel
          </Link>
          <button
            onClick={handleSubmit}
            disabled={!form.title.trim() || saving}
            className="flex-1 rounded-lg bg-neutral-100 py-2.5 text-sm font-medium text-neutral-900 transition-all hover:bg-white disabled:cursor-not-allowed disabled:opacity-50"
          >
            {saving ? "Creating..." : "Create Workflow"}
          </button>
        </div>
      </div>
    </div>
  )
}
