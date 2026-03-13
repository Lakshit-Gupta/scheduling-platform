"use client"

import { useState } from "react"
import Image from "next/image"
import { BarChart3, Sparkles, Calendar, Video, LayoutGrid, MessageSquare, CreditCard, Boxes, Plus, ChevronDown, MoreHorizontal } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

const sidebarCategories = [
  { id: "calendar", label: "Calendar", icon: Calendar },
  { id: "analytics", label: "Analytics", icon: BarChart3 },
  { id: "ai-automation", label: "AI & Automation", icon: Sparkles },
  { id: "conferencing", label: "Conferencing", icon: Video },
  { id: "crm", label: "CRM", icon: LayoutGrid },
  { id: "messaging", label: "Messaging", icon: MessageSquare },
  { id: "payment", label: "Payment", icon: CreditCard },
  { id: "other", label: "Other", icon: Boxes },
]

interface ConnectedCalendar { name: string; email: string; icon: string; subCalendars: { name: string; enabled: boolean }[] }

const connectedCalendars: ConnectedCalendar[] = [
  { name: "Google Calendar", email: "user@example.com", icon: "/assets/app-store/googlecalendar_icon.svg",
    subCalendars: [{ name: "user@example.com", enabled: true }, { name: "Family", enabled: false }] },
]

export default function InstalledAppsPage() {
  const [activeCategory, setActiveCategory] = useState("calendar")
  const [calendars, setCalendars] = useState(connectedCalendars)

  const toggleCalendar = (calIndex: number, subIndex: number) => {
    setCalendars((prev) => {
      const next = [...prev]; const cal = { ...next[calIndex] }; const subs = [...cal.subCalendars]
      subs[subIndex] = { ...subs[subIndex], enabled: !subs[subIndex].enabled }
      cal.subCalendars = subs; next[calIndex] = cal; return next
    })
  }

  return (
    <div className="px-6 py-8 md:px-8">
      <h1 className="font-cal text-[28px] text-fg">Installed apps</h1>
      <p className="mt-1 text-sm text-muted">Manage your installed apps or change settings</p>

      <div className="mt-8 flex gap-8">
        <nav className="hidden w-48 shrink-0 flex-col gap-0.5 md:flex">
          {sidebarCategories.map((cat) => (
            <button key={cat.id} onClick={() => setActiveCategory(cat.id)}
              className={cn("flex items-center gap-2.5 rounded-lg px-3 py-2 text-[13px] font-medium transition-all text-left",
                activeCategory === cat.id ? "bg-card text-fg" : "text-muted hover:bg-card hover:text-fg"
              )}>
              <cat.icon className="h-4 w-4" />{cat.label}
            </button>
          ))}
        </nav>

        <div className="flex-1 min-w-0">
          <AnimatePresence mode="wait">
            {activeCategory === "calendar" && (
              <motion.div key="calendar" initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }} transition={{ duration: 0.2 }}>
                <div className="flex items-center justify-between">
                  <div><h2 className="font-cal text-xl text-fg">Calendars</h2><p className="mt-0.5 text-sm text-muted">Configure how your event types interact with your calendars</p></div>
                  <button className="inline-flex items-center gap-2 rounded-lg border border-surface-hover bg-surface px-4 py-2 text-sm font-medium text-muted transition-all hover:bg-surface-hover hover:text-fg"><Plus className="h-4 w-4" />Add calendar</button>
                </div>

                <div className="mt-6 rounded-xl border border-line bg-card p-6 shadow-sm">
                  <h3 className="text-sm font-semibold text-fg">Add to calendar</h3>
                  <p className="mt-1 text-xs text-muted">Select where to add events when you&apos;re booked.</p>
                  <div className="mt-4"><label className="text-xs font-medium text-muted">Add events to</label>
                    <div className="mt-1.5 flex items-center gap-2 rounded-lg border border-surface-hover bg-surface px-4 py-2.5">
                      <span className="text-sm text-fg">user@example.com</span><span className="text-sm text-dim">(Google)</span><ChevronDown className="ml-auto h-4 w-4 text-dim" />
                    </div></div>
                </div>

                <div className="mt-4 rounded-xl border border-line bg-card p-6 shadow-sm">
                  <h3 className="text-sm font-semibold text-fg">Check for conflicts</h3>
                  <p className="mt-1 text-xs text-muted">Select which calendars to check for conflicts.</p>
                  {calendars.map((cal, calIndex) => (
                    <div key={cal.name} className="mt-4 rounded-xl border border-surface-hover bg-card-hover p-4">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 overflow-hidden rounded-lg border border-surface-hover bg-surface p-1.5"><Image src={cal.icon} alt={cal.name} width={28} height={28} /></div>
                        <div className="flex-1 min-w-0"><p className="text-sm font-medium text-fg">{cal.name}</p><p className="text-xs text-dim">{cal.email}</p></div>
                        <button className="rounded-lg p-1.5 text-dim hover:bg-surface hover:text-fg"><MoreHorizontal className="h-4 w-4" /></button>
                      </div>
                      <div className="mt-3 space-y-2">
                        {cal.subCalendars.map((sub, subIndex) => (
                          <div key={sub.name} className="flex items-center gap-3">
                            <button onClick={() => toggleCalendar(calIndex, subIndex)}
                              className={cn("relative h-5 w-9 rounded-full transition-colors duration-200", sub.enabled ? "bg-primary-btn" : "bg-surface-hover")}>
                              <motion.div layout className="absolute top-0.5 h-4 w-4 rounded-full shadow-sm"
                                style={{ left: sub.enabled ? 18 : 2, backgroundColor: sub.enabled ? "#1c1c1c" : "#666" }}
                                transition={{ type: "spring", stiffness: 500, damping: 30 }} />
                            </button>
                            <span className="text-sm text-muted">{sub.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
            {activeCategory !== "calendar" && (
              <motion.div key={activeCategory} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }} transition={{ duration: 0.2 }} className="flex flex-col items-center justify-center py-20">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-surface">
                  {(() => { const cat = sidebarCategories.find((c) => c.id === activeCategory); return cat ? <cat.icon className="h-7 w-7 text-dim" /> : null })()}
                </div>
                <p className="mt-4 text-sm font-medium text-fg">No {sidebarCategories.find((c) => c.id === activeCategory)?.label} apps installed</p>
                <p className="mt-1 text-sm text-muted">Browse the App Store to find and install apps.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
