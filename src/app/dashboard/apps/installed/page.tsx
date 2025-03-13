"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { X, Check, ExternalLink } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

const tabs = [
  "Calendar", "Analytics", "AI & Automation", "Conferencing", "CRM", "Messaging", "Payment", "Other",
]

const allApps = [
  { name: "Google Calendar", icon: "/assets/app-store/googlecalendar_icon.svg", description: "Sync your Cal.com bookings with Google Calendar automatically.", category: "Calendar" },
  { name: "Office 365 Calendar", icon: "/assets/app-store/office365calendar_icon.svg", description: "Sync your Cal.com bookings with Microsoft Office 365 Calendar.", category: "Calendar" },
  { name: "Zapier", icon: "/assets/app-store/zapier_icon.svg", description: "Connect Cal.com to thousands of apps via Zapier automations.", category: "AI & Automation" },
  { name: "Make", icon: "/assets/app-store/make_icon.svg", description: "Automate workflows and integrate Cal.com with Make.", category: "AI & Automation" },
  { name: "n8n", icon: "/assets/app-store/n8n_icon.svg", description: "Workflow automation tool. Connect Cal.com with hundreds of integrations.", category: "AI & Automation" },
  { name: "Pipedream", icon: "/assets/app-store/pipedream_icon.svg", description: "Connect Cal.com with 1000+ apps using Pipedream.", category: "AI & Automation" },
  { name: "Google Meet", icon: "/assets/icons/apps/google-meet.svg", description: "Automatically add Google Meet links to your bookings.", category: "Conferencing" },
  { name: "Zoom Video", icon: "/assets/app-store/zoomvideo_icon.svg", description: "Add Zoom meeting links automatically to your bookings.", category: "Conferencing" },
  { name: "Jitsi Video", icon: "/assets/app-store/jitsivideo_icon.svg", description: "Add Jitsi meeting links to your bookings automatically.", category: "Conferencing" },
  { name: "Office 365 Video", icon: "/assets/app-store/office365video_icon.svg", description: "Add Microsoft Teams meeting links to your bookings.", category: "Conferencing" },
  { name: "HubSpot", icon: "/assets/app-store/hubspot_icon.svg", description: "Sync your bookings with HubSpot CRM.", category: "CRM" },
  { name: "Salesforce", icon: "/assets/app-store/salesforce_icon.png", description: "Sync Cal.com bookings with Salesforce CRM.", category: "CRM" },
  { name: "Close.com", icon: "/assets/app-store/closecom_icon.svg", description: "Sync your Cal.com bookings with Close CRM.", category: "CRM" },
  { name: "WhatsApp", icon: "/assets/app-store/whatsapp_icon.svg", description: "Send WhatsApp notifications to attendees.", category: "Messaging" },
  { name: "Telegram", icon: "/assets/app-store/telegram_icon.svg", description: "Send Telegram messages to attendees.", category: "Messaging" },
  { name: "Discord", icon: "/assets/app-store/discord_icon.svg", description: "Send Discord notifications for booking events.", category: "Messaging" },
  { name: "Stripe", icon: "/assets/app-store/stripepayment_icon.svg", description: "Accept payments via Stripe for your bookings.", category: "Payment" },
  { name: "PayPal", icon: "/assets/app-store/paypal_icon.svg", description: "Accept PayPal payments for your bookings.", category: "Payment" },
]

interface App { name: string; icon: string; description: string; category: string }

function AppDetailModal({ app, onClose }: { app: App; onClose: () => void }) {
  const [connected, setConnected] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 20 }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        className="w-full max-w-md rounded-2xl border border-neutral-700 bg-neutral-800 p-6 shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="mb-5 flex items-start justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-neutral-600 bg-neutral-700 p-2">
              <Image src={app.icon} alt={app.name} width={36} height={36} className="object-contain" unoptimized />
            </div>
            <div>
              <h3 className="text-base font-semibold text-neutral-100">{app.name}</h3>
              <span className="text-xs text-neutral-500">{app.category}</span>
            </div>
          </div>
          <button onClick={onClose} className="rounded-lg p-1.5 text-neutral-500 transition-colors hover:bg-neutral-700 hover:text-neutral-100">
            <X className="h-4 w-4" />
          </button>
        </div>
        <p className="mb-6 text-sm leading-relaxed text-neutral-400">{app.description}</p>
        <div className="flex gap-3">
          <button
            onClick={() => setConnected(!connected)}
            className={`flex flex-1 items-center justify-center gap-2 rounded-lg py-2.5 text-sm font-medium transition-all ${
              connected ? "border border-emerald-500/30 bg-emerald-500/10 text-emerald-400" : "bg-neutral-100 text-neutral-900 hover:bg-white"
            }`}
          >
            {connected ? <><Check className="h-4 w-4" />Connected</> : "Connect"}
          </button>
          <button className="flex items-center gap-1.5 rounded-lg border border-neutral-600 px-4 py-2.5 text-sm font-medium text-neutral-400 transition-colors hover:bg-neutral-700 hover:text-neutral-100">
            <ExternalLink className="h-3.5 w-3.5" />Learn more
          </button>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function InstalledAppsPage() {
  const [activeTab, setActiveTab] = useState("Calendar")
  const [selectedApp, setSelectedApp] = useState<App | null>(null)

  const filteredApps = allApps.filter((app) => app.category === activeTab)

  return (
    <div className="px-6 py-8 md:px-8">
      <div className="mb-6">
        <h1 className="font-cal text-[28px] text-neutral-100">Installed Apps</h1>
        <p className="mt-1 text-sm text-neutral-400">Manage your connected integrations.</p>
      </div>

      <div className="mb-6 border-b border-neutral-700">
        <nav className="-mb-px flex gap-1 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                "relative whitespace-nowrap px-4 pb-3 text-sm font-medium transition-colors",
                activeTab === tab ? "text-neutral-100" : "text-neutral-500 hover:text-neutral-300",
              )}
            >
              {tab}
              {activeTab === tab && (
                <motion.div
                  layoutId="installed-tab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-neutral-100"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          ))}
        </nav>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.15 }}
        >
          {filteredApps.length === 0 ? (
            <div className="flex flex-col items-center justify-center rounded-xl border border-neutral-700 bg-neutral-800 py-20 text-center">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-neutral-700">
                <span className="text-2xl">📦</span>
              </div>
              <p className="text-sm font-medium text-neutral-400">No {activeTab} apps installed</p>
              <p className="mt-1 text-xs text-neutral-600">Visit the App Store to connect integrations.</p>
              <Link
                href="/dashboard/apps/store"
                className="mt-4 rounded-lg bg-neutral-700 px-4 py-2 text-sm font-medium text-neutral-300 transition-colors hover:bg-neutral-600 hover:text-neutral-100"
              >
                Browse App Store
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filteredApps.map((app) => (
                <motion.div
                  key={app.name}
                  whileHover={{ y: -3 }}
                  className="cursor-pointer rounded-xl border border-neutral-700 bg-neutral-800 p-5 shadow-sm transition-all hover:border-neutral-600"
                  onClick={() => setSelectedApp(app)}
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl border border-neutral-600 bg-neutral-700 p-2">
                    <Image src={app.icon} alt={app.name} width={32} height={32} className="object-contain" unoptimized />
                  </div>
                  <h3 className="text-sm font-semibold text-neutral-100">{app.name}</h3>
                  <p className="mt-1.5 flex-1 line-clamp-2 text-xs leading-relaxed text-neutral-400">{app.description}</p>
                  <button className="mt-4 w-full rounded-lg border border-neutral-600 bg-neutral-700 py-2 text-xs font-medium text-neutral-400 transition-all hover:bg-neutral-600 hover:text-neutral-100">
                    Manage
                  </button>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        {selectedApp && <AppDetailModal app={selectedApp} onClose={() => setSelectedApp(null)} />}
      </AnimatePresence>
    </div>
  )
}
