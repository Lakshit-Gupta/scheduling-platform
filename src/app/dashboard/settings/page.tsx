'use client'

import { useState } from "react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { User, Bell, Shield, CreditCard, Palette, Globe, Key, Trash2 } from "lucide-react"

const tabs = [
  { id: "profile", label: "Profile", icon: User },
  { id: "notifications", label: "Notifications", icon: Bell },
  { id: "security", label: "Security", icon: Shield },
  { id: "billing", label: "Billing", icon: CreditCard },
  { id: "appearance", label: "Appearance", icon: Palette },
  { id: "integrations", label: "Integrations", icon: Globe },
]

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("profile")
  const [saved, setSaved] = useState(false)
  const [form, setForm] = useState({
    name: "Lakshit Gupta",
    email: "contact@lakshit.dev",
    username: "lakshit-gupta",
    bio: "",
    timezone: "Asia/Kolkata",
  })

  const handleSave = () => {
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  return (
    <div className="px-6 py-8 md:px-8">
      <div className="mb-8">
        <h1 className="font-cal text-[28px] text-neutral-100">Settings</h1>
        <p className="mt-1 text-sm text-neutral-400">Manage your account settings and preferences.</p>
      </div>

      <div className="flex gap-8">
        <div className="w-48 shrink-0">
          <nav className="space-y-0.5">
            {tabs.map((tab) => {
              const Icon = tab.icon
              return (
                <button key={tab.id} onClick={() => setActiveTab(tab.id)}
                  className={cn("flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-[13px] font-medium transition-all",
                    activeTab === tab.id ? "bg-neutral-800 text-neutral-100" : "text-neutral-400 hover:bg-neutral-800 hover:text-neutral-100"
                  )}>
                  <Icon className="h-4 w-4" />{tab.label}
                </button>
              )
            })}
          </nav>
        </div>

        <div className="flex-1 max-w-2xl">
          {activeTab === "profile" && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }}
              className="space-y-6">
              <div className="rounded-xl border border-neutral-700 bg-neutral-800 p-6">
                <h2 className="mb-6 text-sm font-semibold text-neutral-100">Profile</h2>
                <div className="space-y-4">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-neutral-300">Full name</label>
                    <input type="text" value={form.name} onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                      className="w-full rounded-lg border border-neutral-600 bg-neutral-900 px-3 py-2.5 text-sm text-neutral-100 focus:border-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-500" />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-neutral-300">Email</label>
                    <input type="email" value={form.email} onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                      className="w-full rounded-lg border border-neutral-600 bg-neutral-900 px-3 py-2.5 text-sm text-neutral-100 focus:border-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-500" />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-neutral-300">Username</label>
                    <div className="flex">
                      <span className="flex items-center rounded-l-lg border border-r-0 border-neutral-600 bg-neutral-900 px-3 text-sm text-neutral-500">cal.lakshit.dev/</span>
                      <input type="text" value={form.username} onChange={(e) => setForm((p) => ({ ...p, username: e.target.value }))}
                        className="flex-1 rounded-r-lg border border-neutral-600 bg-neutral-900 px-3 py-2.5 text-sm text-neutral-100 focus:border-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-500" />
                    </div>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-neutral-300">Bio</label>
                    <textarea value={form.bio} onChange={(e) => setForm((p) => ({ ...p, bio: e.target.value }))} rows={3} placeholder="Tell people a little about yourself..."
                      className="w-full resize-none rounded-lg border border-neutral-600 bg-neutral-900 px-3 py-2.5 text-sm text-neutral-100 placeholder:text-neutral-600 focus:border-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-500" />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-neutral-300">Timezone</label>
                    <select value={form.timezone} onChange={(e) => setForm((p) => ({ ...p, timezone: e.target.value }))}
                      className="w-full rounded-lg border border-neutral-600 bg-neutral-900 px-3 py-2.5 text-sm text-neutral-100 focus:border-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-500">
                      <option value="Asia/Kolkata">Asia/Kolkata (IST)</option>
                      <option value="America/New_York">America/New_York (EST)</option>
                      <option value="America/Los_Angeles">America/Los_Angeles (PST)</option>
                      <option value="Europe/London">Europe/London (GMT)</option>
                      <option value="Asia/Tokyo">Asia/Tokyo (JST)</option>
                    </select>
                  </div>
                  <button onClick={handleSave}
                    className="rounded-lg bg-neutral-100 px-4 py-2.5 text-sm font-medium text-neutral-900 transition-all hover:bg-white">
                    {saved ? "Saved!" : "Save changes"}
                  </button>
                </div>
              </div>

              <div className="rounded-xl border border-red-900/50 bg-neutral-800 p-6">
                <h2 className="mb-2 text-sm font-semibold text-red-400">Danger zone</h2>
                <p className="mb-4 text-xs text-neutral-400">Once you delete your account, there is no going back.</p>
                <button className="flex items-center gap-2 rounded-lg border border-red-800 px-4 py-2 text-sm font-medium text-red-400 transition-colors hover:bg-red-900/20">
                  <Trash2 className="h-4 w-4" />Delete account
                </button>
              </div>
            </motion.div>
          )}

          {activeTab === "notifications" && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }}
              className="space-y-5 rounded-xl border border-neutral-700 bg-neutral-800 p-6">
              <h2 className="text-sm font-semibold text-neutral-100">Notifications</h2>
              {[
                { label: "New bookings", desc: "Get notified when someone books a meeting" },
                { label: "Cancellations", desc: "Get notified when a booking is cancelled" },
                { label: "Reminders", desc: "Get reminders before upcoming meetings" },
                { label: "Workflow runs", desc: "Get notified when a workflow executes" },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-neutral-200">{item.label}</p>
                    <p className="text-xs text-neutral-500">{item.desc}</p>
                  </div>
                  <button className="relative h-5 w-9 rounded-full bg-neutral-600 transition-colors">
                    <span className="absolute left-0.5 top-0.5 h-4 w-4 rounded-full bg-neutral-400 transition-transform" />
                  </button>
                </div>
              ))}
            </motion.div>
          )}

          {(activeTab === "security" || activeTab === "billing" || activeTab === "appearance" || activeTab === "integrations") && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }}
              className="flex flex-col items-center justify-center rounded-xl border border-neutral-700 bg-neutral-800 py-20 text-center">
              <Key className="mb-3 h-10 w-10 text-neutral-600" />
              <p className="capitalize text-sm font-medium text-neutral-400">{activeTab} settings</p>
              <p className="mt-1 text-xs text-neutral-600">This section is coming soon.</p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}
