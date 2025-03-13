'use client'

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"
import { toast } from "@/components/ui/Toast"
import {
  User, Bell, Shield, CreditCard, Palette, Globe,
  Trash2, Check, Eye, EyeOff, Moon, Sun, Monitor,
  Lock, Smartphone, AlertTriangle, Download, RefreshCw,
  Zap, Mail, MessageSquare, Clock,
} from "lucide-react"

const tabs = [
  { id: "profile", label: "Profile", icon: User },
  { id: "notifications", label: "Notifications", icon: Bell },
  { id: "security", label: "Security", icon: Shield },
  { id: "billing", label: "Billing", icon: CreditCard },
  { id: "appearance", label: "Appearance", icon: Palette },
  { id: "integrations", label: "Integrations", icon: Globe },
]

const timezones = [
  "Asia/Kolkata", "America/New_York", "America/Los_Angeles",
  "America/Chicago", "Europe/London", "Europe/Paris",
  "Europe/Berlin", "Asia/Tokyo", "Asia/Singapore",
  "Asia/Dubai", "Australia/Sydney", "Pacific/Auckland",
]

function Toggle({ enabled, onChange }: { enabled: boolean; onChange: (v: boolean) => void }) {
  return (
    <button
      onClick={() => onChange(!enabled)}
      style={{ minWidth: "36px" }}
      className={cn(
        "relative h-5 w-9 shrink-0 rounded-full transition-colors duration-200",
        enabled ? "bg-neutral-100" : "bg-neutral-600",
      )}
    >
      <motion.span
        animate={{ x: enabled ? 16 : 2 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        style={{ position: "absolute", top: "2px", height: "16px", width: "16px" }}
        className={cn(
          "block rounded-full transition-colors",
          enabled ? "bg-neutral-900" : "bg-neutral-400",
        )}
      />
    </button>
  )
}

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("profile")
  const [saveStatus, setSaveStatus] = useState<"idle" | "saving" | "saved" | "error">("idle")
  const [loading, setLoading] = useState(true)
  const [form, setForm] = useState({
    name: "",
    email: "",
    username: "",
    bio: "",
    timezone: "Asia/Kolkata",
  })
  const [showPassword, setShowPassword] = useState(false)
  const [theme, setTheme] = useState("dark")
  const [notifications, setNotifications] = useState({
    newBookings: true,
    cancellations: true,
    reminders: true,
    workflowRuns: false,
    emailDigest: true,
    smsAlerts: false,
  })

  useEffect(() => {
    fetch("/api/v1/user")
      .then((response) => response.json())
      .then((data) => {
        if (data && !data.error) {
          setForm({
            name: data.name || "",
            email: data.email || "",
            username: data.username || "",
            bio: data.bio || "",
            timezone: data.timezone || "Asia/Kolkata",
          })
        }
      })
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [])

  const handleSave = async () => {
    setSaveStatus("saving")

    try {
      const res = await fetch("/api/v1/user", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })

      if (!res.ok) {
        const data = await res.json()
        toast(data.error || "Failed to save", "error")
        setSaveStatus("error")
        setTimeout(() => setSaveStatus("idle"), 2000)
        return
      }

      setSaveStatus("saved")
      setTimeout(() => setSaveStatus("idle"), 2500)
    } catch {
      toast("Failed to save", "error")
      setSaveStatus("error")
      setTimeout(() => setSaveStatus("idle"), 2000)
    }
  }

  const inputClass = "w-full rounded-lg border border-neutral-600 bg-neutral-900 px-3 py-2.5 text-sm text-neutral-100 placeholder:text-neutral-600 focus:border-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-500 transition-colors"

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
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-[13px] font-medium transition-all",
                    activeTab === tab.id ? "bg-neutral-800 text-neutral-100" : "text-neutral-400 hover:bg-neutral-800 hover:text-neutral-100",
                  )}
                >
                  <Icon className="h-4 w-4" />{tab.label}
                </button>
              )
            })}
          </nav>
        </div>

        <div className="flex-1 max-w-2xl">
          <AnimatePresence mode="wait">
            {activeTab === "profile" && (
              <motion.div
                key="profile"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                <div className="rounded-xl border border-neutral-700 bg-neutral-800 p-6">
                  <h2 className="mb-6 text-sm font-semibold text-neutral-100">Profile</h2>
                  {loading ? (
                    <div className="flex items-center justify-center py-8">
                      <div className="h-6 w-6 animate-spin rounded-full border-2 border-neutral-600 border-t-neutral-100" />
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="flex items-center gap-4 border-b border-neutral-700 pb-4">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-neutral-700 text-xl font-semibold text-neutral-100">
                          {form.name ? form.name.charAt(0).toUpperCase() : "L"}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-neutral-200">{form.name || "Your Name"}</p>
                          <p className="text-xs text-neutral-500">{form.email}</p>
                          <button className="mt-1.5 text-xs text-neutral-400 transition-colors hover:text-neutral-100">Change avatar</button>
                        </div>
                      </div>

                      <div>
                        <label className="mb-1.5 block text-sm font-medium text-neutral-300">Full name</label>
                        <input type="text" value={form.name} onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))} className={inputClass} />
                      </div>
                      <div>
                        <label className="mb-1.5 block text-sm font-medium text-neutral-300">Email</label>
                        <input type="email" value={form.email} onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))} className={inputClass} />
                      </div>
                      <div>
                        <label className="mb-1.5 block text-sm font-medium text-neutral-300">Username</label>
                        <div className="flex">
                          <span className="flex items-center rounded-l-lg border border-r-0 border-neutral-600 bg-neutral-900 px-3 text-sm text-neutral-500">cal.lakshit.dev/</span>
                          <input
                            type="text"
                            value={form.username}
                            onChange={(e) => setForm((p) => ({ ...p, username: e.target.value }))}
                            className="flex-1 rounded-r-lg border border-neutral-600 bg-neutral-900 px-3 py-2.5 text-sm text-neutral-100 focus:border-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-500"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="mb-1.5 block text-sm font-medium text-neutral-300">Bio</label>
                        <textarea
                          value={form.bio}
                          onChange={(e) => setForm((p) => ({ ...p, bio: e.target.value }))}
                          rows={3}
                          placeholder="Tell people a little about yourself..."
                          className={inputClass + " resize-none"}
                        />
                        <p className="mt-1 text-xs text-neutral-600">{form.bio.length}/160 characters</p>
                      </div>
                      <div>
                        <label className="mb-1.5 block text-sm font-medium text-neutral-300">Timezone</label>
                        <select value={form.timezone} onChange={(e) => setForm((p) => ({ ...p, timezone: e.target.value }))} className={inputClass}>
                          {timezones.map((tz) => (
                            <option key={tz} value={tz}>{tz}</option>
                          ))}
                        </select>
                      </div>
                      <div className="flex items-center gap-3 pt-2">
                        <button
                          onClick={handleSave}
                          disabled={saveStatus === "saving"}
                          className={cn(
                            "flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-all",
                            saveStatus === "saved" ? "bg-emerald-500/20 text-emerald-400" :
                            saveStatus === "error" ? "bg-red-500/20 text-red-400" :
                            "bg-neutral-100 text-neutral-900 hover:bg-white disabled:opacity-50",
                          )}
                        >
                          {saveStatus === "saving" && <RefreshCw className="h-4 w-4 animate-spin" />}
                          {saveStatus === "saved" && <Check className="h-4 w-4" />}
                          {saveStatus === "saving" ? "Saving..." : saveStatus === "saved" ? "Saved!" : saveStatus === "error" ? "Error - try again" : "Save changes"}
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                <div className="rounded-xl border border-red-900/50 bg-neutral-800 p-6">
                  <h2 className="mb-2 text-sm font-semibold text-red-400">Danger zone</h2>
                  <p className="mb-4 text-xs text-neutral-400">Once you delete your account, there is no going back. All your data will be permanently removed.</p>
                  <button className="flex items-center gap-2 rounded-lg border border-red-800 px-4 py-2 text-sm font-medium text-red-400 transition-colors hover:bg-red-900/20">
                    <Trash2 className="h-4 w-4" />Delete account
                  </button>
                </div>
              </motion.div>
            )}

            {activeTab === "notifications" && (
              <motion.div
                key="notifications"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-4"
              >
                <div className="rounded-xl border border-neutral-700 bg-neutral-800 p-6 overflow-hidden">
                  <h2 className="mb-1 text-sm font-semibold text-neutral-100">Email Notifications</h2>
                  <p className="mb-5 text-xs text-neutral-500">Choose what you get notified about.</p>
                  <div className="space-y-5">
                    {[
                      { key: "newBookings", icon: Clock, label: "New bookings", desc: "Get notified when someone books a meeting with you" },
                      { key: "cancellations", icon: AlertTriangle, label: "Cancellations", desc: "Get notified when a booking is cancelled" },
                      { key: "reminders", icon: Bell, label: "Meeting reminders", desc: "Get reminders 24 hours before upcoming meetings" },
                      { key: "workflowRuns", icon: Zap, label: "Workflow runs", desc: "Get notified when a workflow executes successfully" },
                      { key: "emailDigest", icon: Mail, label: "Weekly digest", desc: "Receive a weekly summary of your booking activity" },
                    ].map((item) => {
                      const Icon = item.icon
                      const key = item.key as keyof typeof notifications
                      return (
                        <div key={item.key} className="flex items-center gap-3 w-full">
                          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-700 shrink-0">
                              <Icon className="h-3.5 w-3.5 text-neutral-400" />
                          </div>
                          <div className="flex-1 min-w-0 mr-4">
                            <p className="text-sm font-medium text-neutral-200">{item.label}</p>
                            <p className="text-xs text-neutral-500 leading-relaxed">{item.desc}</p>
                          </div>
                          <div className="shrink-0 ml-auto">
                            <Toggle enabled={notifications[key]} onChange={v => setNotifications(p => ({ ...p, [key]: v }))} />
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>

                <div className="rounded-xl border border-neutral-700 bg-neutral-800 p-6">
                  <h2 className="mb-1 text-sm font-semibold text-neutral-100">SMS Notifications</h2>
                  <p className="mb-5 text-xs text-neutral-500">Receive notifications via SMS.</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-700">
                        <MessageSquare className="h-3.5 w-3.5 text-neutral-400" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-neutral-200">SMS alerts</p>
                        <p className="text-xs text-neutral-500">Get SMS for new bookings and cancellations</p>
                      </div>
                    </div>
                    <Toggle enabled={notifications.smsAlerts} onChange={(v) => setNotifications((p) => ({ ...p, smsAlerts: v }))} />
                  </div>
                  <div className="mt-4 rounded-lg border border-neutral-700 bg-neutral-900 p-3">
                    <p className="text-xs text-neutral-500">Add your phone number to enable SMS notifications.</p>
                    <input type="tel" placeholder="+91 98765 43210" className="mt-2 w-full rounded-lg border border-neutral-600 bg-neutral-800 px-3 py-2 text-sm text-neutral-100 placeholder:text-neutral-600 focus:border-neutral-500 focus:outline-none" />
                  </div>
                </div>

                <button className="rounded-lg bg-neutral-100 px-4 py-2.5 text-sm font-medium text-neutral-900 transition-all hover:bg-white">
                  Save notification preferences
                </button>
              </motion.div>
            )}

            {activeTab === "security" && (
              <motion.div
                key="security"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-4"
              >
                <div className="rounded-xl border border-neutral-700 bg-neutral-800 p-6">
                  <h2 className="mb-1 text-sm font-semibold text-neutral-100">Change password</h2>
                  <p className="mb-5 text-xs text-neutral-500">Update your password to keep your account secure.</p>
                  <div className="space-y-4">
                    {[
                      { label: "Current password", placeholder: "Enter current password" },
                      { label: "New password", placeholder: "Enter new password" },
                      { label: "Confirm new password", placeholder: "Confirm new password" },
                    ].map((field, index) => (
                      <div key={index}>
                        <label className="mb-1.5 block text-sm font-medium text-neutral-300">{field.label}</label>
                        <div className="relative">
                          <input
                            type={showPassword ? "text" : "password"}
                            placeholder={field.placeholder}
                            className="w-full rounded-lg border border-neutral-600 bg-neutral-900 px-3 py-2.5 pr-10 text-sm text-neutral-100 placeholder:text-neutral-600 focus:border-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-500"
                          />
                          <button onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500 transition-colors hover:text-neutral-300">
                            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                          </button>
                        </div>
                      </div>
                    ))}
                    <button className="rounded-lg bg-neutral-100 px-4 py-2.5 text-sm font-medium text-neutral-900 transition-all hover:bg-white">
                      Update password
                    </button>
                  </div>
                </div>

                <div className="rounded-xl border border-neutral-700 bg-neutral-800 p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h2 className="flex items-center gap-2 text-sm font-semibold text-neutral-100">
                        <Smartphone className="h-4 w-4" />Two-factor authentication
                      </h2>
                      <p className="mt-1 text-xs text-neutral-500">Add an extra layer of security to your account.</p>
                    </div>
                    <span className="rounded-md bg-neutral-700 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-neutral-400">Disabled</span>
                  </div>
                  <button className="mt-4 flex items-center gap-2 rounded-lg border border-neutral-600 px-4 py-2 text-sm font-medium text-neutral-300 transition-colors hover:bg-neutral-700 hover:text-neutral-100">
                    <Lock className="h-3.5 w-3.5" />Enable 2FA
                  </button>
                </div>

                <div className="rounded-xl border border-neutral-700 bg-neutral-800 p-6">
                  <h2 className="mb-4 text-sm font-semibold text-neutral-100">Active sessions</h2>
                  {[
                    { device: "Chrome on macOS", location: "Mumbai, India", time: "Current session", current: true },
                    { device: "Safari on iPhone", location: "Mumbai, India", time: "2 hours ago", current: false },
                  ].map((session, index) => (
                    <div key={index} className={cn("flex items-center justify-between py-3", index > 0 && "border-t border-neutral-700")}>
                      <div>
                        <p className="text-sm font-medium text-neutral-200">{session.device}</p>
                        <p className="text-xs text-neutral-500">{session.location} · {session.time}</p>
                      </div>
                      {session.current ? (
                        <span className="rounded-md bg-emerald-500/10 px-2 py-0.5 text-xs font-medium text-emerald-400">Active</span>
                      ) : (
                        <button className="text-xs text-red-400 transition-colors hover:text-red-300">Revoke</button>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === "billing" && (
              <motion.div
                key="billing"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-4"
              >
                <div className="rounded-xl border border-neutral-700 bg-neutral-800 p-6">
                  <div className="mb-4 flex items-start justify-between">
                    <div>
                      <h2 className="text-sm font-semibold text-neutral-100">Current plan</h2>
                      <p className="mt-1 text-xs text-neutral-500">You are on the Free plan.</p>
                    </div>
                    <span className="rounded-lg bg-neutral-700 px-3 py-1 text-xs font-semibold text-neutral-300">Free</span>
                  </div>
                  <div className="mb-5 space-y-2">
                    {["Unlimited event types", "1 calendar connection", "Basic integrations", "Cal.com branding"].map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-neutral-400">
                        <Check className="h-3.5 w-3.5 shrink-0 text-emerald-400" />{feature}
                      </div>
                    ))}
                  </div>
                  <button className="w-full rounded-lg bg-neutral-100 py-2.5 text-sm font-medium text-neutral-900 transition-all hover:bg-white">
                    Upgrade to Pro
                  </button>
                </div>

                <div className="rounded-xl border border-neutral-700 bg-neutral-800 p-6">
                  <h2 className="mb-4 text-sm font-semibold text-neutral-100">Billing history</h2>
                  <div className="flex flex-col items-center justify-center py-8 text-center">
                    <CreditCard className="mb-2 h-8 w-8 text-neutral-600" />
                    <p className="text-sm text-neutral-500">No billing history yet.</p>
                    <p className="mt-1 text-xs text-neutral-600">Invoices will appear here after your first payment.</p>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "appearance" && (
              <motion.div
                key="appearance"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-4"
              >
                <div className="rounded-xl border border-neutral-700 bg-neutral-800 p-6">
                  <h2 className="mb-1 text-sm font-semibold text-neutral-100">Theme</h2>
                  <p className="mb-5 text-xs text-neutral-500">Choose how Cal Clone looks to you.</p>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { id: "light", label: "Light", icon: Sun },
                      { id: "dark", label: "Dark", icon: Moon },
                      { id: "system", label: "System", icon: Monitor },
                    ].map((themeOption) => {
                      const Icon = themeOption.icon
                      return (
                        <button
                          key={themeOption.id}
                          onClick={() => setTheme(themeOption.id)}
                          className={cn(
                            "flex flex-col items-center gap-2 rounded-xl border p-4 transition-all",
                            theme === themeOption.id ? "border-neutral-400 bg-neutral-700 text-neutral-100" : "border-neutral-700 bg-neutral-900 text-neutral-500 hover:border-neutral-600 hover:text-neutral-300",
                          )}
                        >
                          <Icon className="h-5 w-5" />
                          <span className="text-xs font-medium">{themeOption.label}</span>
                          {theme === themeOption.id && <Check className="h-3 w-3 text-emerald-400" />}
                        </button>
                      )
                    })}
                  </div>
                </div>

                <div className="rounded-xl border border-neutral-700 bg-neutral-800 p-6">
                  <h2 className="mb-1 text-sm font-semibold text-neutral-100">Booking page</h2>
                  <p className="mb-5 text-xs text-neutral-500">Customize how your public booking page looks.</p>
                  <div className="space-y-4">
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-neutral-300">Brand color</label>
                      <div className="flex items-center gap-3">
                        <input type="color" defaultValue="#3B82F6" className="h-10 w-16 cursor-pointer rounded-lg border border-neutral-600 bg-neutral-900 p-1" />
                        <span className="text-sm text-neutral-400">Used on buttons and accents</span>
                      </div>
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-neutral-300">Hide branding</label>
                      <div className="flex items-center justify-between rounded-lg border border-neutral-700 bg-neutral-900 px-4 py-3">
                        <div>
                          <p className="text-sm text-neutral-300">Remove &quot;Powered by Cal Clone&quot;</p>
                          <p className="text-xs text-neutral-500">Available on Pro plan</p>
                        </div>
                        <Toggle enabled={false} onChange={() => {}} />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "integrations" && (
              <motion.div
                key="integrations"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-4"
              >
                <div className="rounded-xl border border-neutral-700 bg-neutral-800 p-6">
                  <h2 className="mb-1 text-sm font-semibold text-neutral-100">API Access</h2>
                  <p className="mb-5 text-xs text-neutral-500">Use the Cal Clone API to build custom integrations.</p>
                  <div className="space-y-3">
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-neutral-300">API Key</label>
                      <div className="flex gap-2">
                        <input
                          type={showPassword ? "text" : "password"}
                          readOnly
                          value="cal_live_xxxxxxxxxxxxxxxxxxxx"
                          className="flex-1 rounded-lg border border-neutral-600 bg-neutral-900 px-3 py-2.5 font-mono text-sm text-neutral-400 focus:outline-none"
                        />
                        <button onClick={() => setShowPassword(!showPassword)} className="rounded-lg border border-neutral-600 px-3 py-2.5 text-neutral-400 transition-colors hover:bg-neutral-700 hover:text-neutral-100">
                          {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </button>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button className="flex items-center gap-2 rounded-lg border border-neutral-600 px-3 py-2 text-xs font-medium text-neutral-400 transition-colors hover:bg-neutral-700 hover:text-neutral-100">
                        <RefreshCw className="h-3.5 w-3.5" />Regenerate
                      </button>
                      <button className="flex items-center gap-2 rounded-lg border border-neutral-600 px-3 py-2 text-xs font-medium text-neutral-400 transition-colors hover:bg-neutral-700 hover:text-neutral-100">
                        <Download className="h-3.5 w-3.5" />View docs
                      </button>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-neutral-700 bg-neutral-800 p-6">
                  <h2 className="mb-4 text-sm font-semibold text-neutral-100">Webhooks</h2>
                  <p className="mb-4 text-xs text-neutral-500">Send booking events to your own endpoints.</p>
                  <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-neutral-600 py-8 text-center">
                    <Globe className="mb-2 h-8 w-8 text-neutral-600" />
                    <p className="text-sm text-neutral-500">No webhooks configured</p>
                    <button className="mt-3 rounded-lg border border-neutral-600 px-4 py-2 text-xs font-medium text-neutral-400 transition-colors hover:bg-neutral-700 hover:text-neutral-100">
                      Add webhook
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
