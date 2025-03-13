"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import {
  Plus,
  Zap,
  Phone,
  Mail,
  MessageSquare,
  Link2,
  MoreHorizontal,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

interface Workflow { id: string; title: string; description: string | null; isActive: boolean; trigger: string; action: string; timeValue: number; timeUnit: string; createdAt: string; updatedAt: string }
interface CallHistoryEntry { id: string; workflowId: string; callerName: string; callerPhone: string | null; callerEmail: string | null; callType: string; status: string; duration: number; startedAt: string; endedAt: string | null; notes: string | null }

const triggerLabels: Record<string, string> = {
  NEW_BOOKING: "New Booking",
  CANCEL_BOOKING: "Booking Cancelled",
  RESCHEDULE_BOOKING: "Booking Rescheduled",
}

const actionLabels: Record<string, string> = {
  SEND_EMAIL: "Send Email",
  SEND_SMS: "Send SMS",
  WEBHOOK: "Trigger Webhook",
}

const callTypeLabels: Record<string, string> = {
  EMAIL: "Email",
  SMS: "SMS",
  WEBHOOK: "Webhook",
}

const callTypeIcons = {
  EMAIL: Mail,
  SMS: MessageSquare,
  WEBHOOK: Link2,
} as const

function formatDuration(seconds: number): string { if (seconds < 60) return `${seconds}s`; const mins = Math.floor(seconds / 60); const secs = seconds % 60; return secs > 0 ? `${mins}m ${secs}s` : `${mins}m` }
function formatDate(dateStr: string): string { return new Date(dateStr).toLocaleDateString("en-IN", { month: "short", day: "numeric", year: "numeric", hour: "2-digit", minute: "2-digit", hour12: true, timeZone: "Asia/Kolkata" }) }

export default function WorkflowsPage() {
  const [activeTab, setActiveTab] = useState<"workflows" | "call-history">("workflows")
  const [workflows, setWorkflows] = useState<Workflow[]>([])
  const [callHistory, setCallHistory] = useState<CallHistoryEntry[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      setLoading(true)
      try { const [wRes, chRes] = await Promise.all([fetch("/api/v1/workflows"), fetch("/api/v1/call-history")]); if (wRes.ok) setWorkflows(await wRes.json()); if (chRes.ok) setCallHistory(await chRes.json()) }
      catch (e) { console.error("Failed to fetch:", e) } finally { setLoading(false) }
    }
    fetchData()
  }, [])

  return (
    <div className="px-6 py-8 md:px-8">
      <div className="flex items-start justify-between gap-4">
        <div><h1 className="font-cal text-[28px] text-fg">Workflows</h1><p className="mt-1 text-sm text-muted">Create workflows to automate notifications and reminders</p></div>
        <Link href="/dashboard/workflows/new" className="inline-flex items-center gap-2 rounded-lg bg-primary-btn px-4 py-2 text-sm font-medium text-primary-btn-fg shadow-sm transition-all hover:opacity-90"><Plus className="h-4 w-4" />New</Link>
      </div>

      <div className="mt-6 border-b border-line">
        <nav className="-mb-px flex gap-6">
          <button onClick={() => setActiveTab("workflows")} className={cn("relative pb-3 text-sm font-medium transition-colors", activeTab === "workflows" ? "text-fg" : "text-muted hover:text-fg")}>
            Workflows
            {activeTab === "workflows" && <motion.div layoutId="wf-tab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-fg" transition={{ type: "spring", stiffness: 400, damping: 30 }} />}
          </button>
          <button onClick={() => setActiveTab("call-history")} className={cn("relative pb-3 text-sm font-medium transition-colors flex items-center gap-1.5", activeTab === "call-history" ? "text-fg" : "text-muted hover:text-fg")}>
            <Phone className="h-3.5 w-3.5" />Call History
            {activeTab === "call-history" && <motion.div layoutId="wf-tab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-fg" transition={{ type: "spring", stiffness: 400, damping: 30 }} />}
          </button>
        </nav>
      </div>

      <AnimatePresence mode="wait">
        {activeTab === "workflows" && (
          <motion.div key="wf" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }} className="mt-6">
            {loading ? (
              <div className="flex items-center justify-center py-16"><div className="h-6 w-6 animate-spin rounded-full border-2 border-surface-hover border-t-fg" /></div>
            ) : workflows.length === 0 ? (
              <div className="flex flex-col items-center justify-center rounded-xl border border-line bg-card py-16 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-surface"><Zap className="h-6 w-6 text-dim" /></div>
                <p className="mt-4 text-sm font-medium text-fg">No workflows yet</p>
                <p className="mt-1 text-sm text-muted">Create your first workflow to automate notifications.</p>
                <Link href="/dashboard/workflows/new" className="mt-4 inline-flex items-center gap-2 rounded-lg bg-primary-btn px-4 py-2 text-sm font-medium text-primary-btn-fg shadow-sm transition-all hover:opacity-90"><Plus className="h-4 w-4" />New Workflow</Link>
              </div>
            ) : (
              <div className="overflow-hidden rounded-xl border border-line bg-card shadow-sm">
                {workflows.map((wf, index) => (
                  <div key={wf.id} className={cn("flex items-center justify-between px-6 py-4 transition-colors hover:bg-card-hover", index < workflows.length - 1 && "border-b border-line")}>
                    <div className="flex items-center gap-3">
                      <div className={cn("flex h-8 w-8 items-center justify-center rounded-lg", wf.isActive ? "bg-emerald-500/10 text-emerald-400" : "bg-surface text-dim")}><Zap className="h-4 w-4" /></div>
                      <div><span className="text-sm font-medium text-fg">{wf.title}</span><div className="mt-0.5 flex items-center gap-2 text-xs text-dim"><span>{triggerLabels[wf.trigger] || wf.trigger}</span><span className="text-surface-hover">→</span><span>{actionLabels[wf.action] || wf.action}</span></div></div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className={cn("rounded-md px-2 py-0.5 text-xs font-medium", wf.isActive ? "bg-emerald-500/10 text-emerald-400" : "bg-surface text-dim")}>{wf.isActive ? "Active" : "Inactive"}</span>
                      <button className="rounded-lg p-1.5 text-dim hover:bg-surface hover:text-fg"><MoreHorizontal className="h-4 w-4" /></button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        )}
        {activeTab === "call-history" && (
          <motion.div key="ch" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }} className="mt-6">
            {loading ? (
              <div className="flex items-center justify-center py-16"><div className="h-6 w-6 animate-spin rounded-full border-2 border-surface-hover border-t-fg" /></div>
            ) : callHistory.length === 0 ? (
              <div className="flex flex-col items-center justify-center rounded-xl border border-line bg-card py-16 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-surface"><Phone className="h-6 w-6 text-dim" /></div>
                <p className="mt-4 text-sm font-medium text-fg">No calls recorded yet</p>
                <p className="mt-1 text-sm text-muted">Calls made by workflows will appear here.</p>
              </div>
            ) : (
              <div className="overflow-hidden rounded-xl border border-line bg-card shadow-sm">
                <table className="w-full text-left text-sm">
                  <thead><tr className="border-b border-line bg-card-hover">
                    <th className="px-6 py-3 text-xs font-medium uppercase tracking-wider text-dim">Caller</th>
                    <th className="hidden px-6 py-3 text-xs font-medium uppercase tracking-wider text-dim sm:table-cell">Phone</th>
                    <th className="px-6 py-3 text-xs font-medium uppercase tracking-wider text-dim">Type</th>
                    <th className="px-6 py-3 text-xs font-medium uppercase tracking-wider text-dim">Status</th>
                    <th className="hidden px-6 py-3 text-xs font-medium uppercase tracking-wider text-dim md:table-cell">Duration</th>
                    <th className="hidden px-6 py-3 text-xs font-medium uppercase tracking-wider text-dim lg:table-cell">Date</th>
                  </tr></thead>
                  <tbody className="divide-y divide-line">
                    {callHistory.map((call) => (
                      <tr key={call.id} className="transition-colors hover:bg-card-hover">
                        <td className="px-6 py-4"><p className="font-medium text-fg">{call.callerName}</p>{call.callerEmail && <p className="text-xs text-dim">{call.callerEmail}</p>}</td>
                        <td className="hidden px-6 py-4 text-muted sm:table-cell">{call.callerPhone || "—"}</td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center gap-1 text-sm text-muted">
                            {(() => {
                              const CallTypeIcon =
                                callTypeIcons[
                                  call.callType as keyof typeof callTypeIcons
                                ] || Phone
                              const label = callTypeLabels[call.callType] || call.callType
                              return (
                                <>
                                  <CallTypeIcon className="h-3.5 w-3.5 text-blue-400" />
                                  {label}
                                </>
                              )
                            })()}
                          </span>
                        </td>
                        <td className="px-6 py-4"><span className={cn("rounded-md px-2 py-0.5 text-xs font-medium", call.status === "COMPLETED" && "bg-emerald-500/10 text-emerald-400", call.status === "FAILED" && "bg-red-500/10 text-red-400", call.status === "PENDING" && "bg-blue-500/10 text-blue-400")}>{call.status}</span></td>
                        <td className="hidden px-6 py-4 text-muted md:table-cell">{formatDuration(call.duration)}</td>
                        <td className="hidden px-6 py-4 text-muted lg:table-cell">{formatDate(call.startedAt)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
