"use client"

import { useState } from "react"
import Image from "next/image"
import { Search, ChevronRight, X, ExternalLink, Check } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const categories = [
  { name: "Conferencing", count: 4, icon: "/assets/app-categories/conferencing.svg", apps: ["Google Meet", "Zoom Video", "Jitsi Video", "Office 365 Video"] },
  { name: "Automation", count: 4, icon: "/assets/app-categories/automation.svg", apps: ["Zapier", "Make", "n8n", "Pipedream"] },
  { name: "Analytics", count: 0, icon: "/assets/app-categories/analytics.svg", apps: [] },
  { name: "Other", count: 2, icon: "/assets/app-categories/other.svg", apps: ["Discord", "Close.com"] },
  { name: "Calendar", count: 2, icon: "/assets/app-categories/calendar.svg", apps: ["Google Calendar", "Office 365 Calendar"] },
  { name: "CRM", count: 3, icon: "/assets/app-categories/crm.svg", apps: ["HubSpot", "Salesforce", "Close.com"] },
  { name: "Messaging", count: 3, icon: "/assets/app-categories/messaging.svg", apps: ["WhatsApp", "Telegram", "Discord"] },
  { name: "Payment", count: 2, icon: "/assets/app-categories/payment.svg", apps: ["Stripe", "PayPal"] },
  { name: "Video", count: 4, icon: "/assets/app-categories/video.svg", apps: ["Zoom Video", "Google Meet", "Jitsi Video", "Office 365 Video"] },
]

const allApps = [
  { name: "Google Calendar", icon: "/assets/app-store/googlecalendar_icon.svg", description: "Google Calendar is a time management and scheduling service developed by Google. Sync your Cal.com bookings with Google Calendar automatically.", category: "Calendar", installed: false },
  { name: "Google Meet", icon: "/assets/icons/apps/google-meet.svg", description: "Google Meet is Google's web-based video conferencing platform. Automatically add Google Meet links to your bookings.", category: "Conferencing", installed: false },
  { name: "Zoom Video", icon: "/assets/app-store/zoomvideo_icon.svg", description: "Zoom is a secure and reliable video platform for all your communication needs. Add Zoom meeting links automatically to your bookings.", category: "Conferencing", installed: false },
  { name: "Zapier", icon: "/assets/app-store/zapier_icon.svg", description: "Connect Cal.com to thousands of apps via Zapier automations. Trigger workflows when bookings are created, cancelled, or rescheduled.", category: "Automation", installed: false },
  { name: "Make", icon: "/assets/app-store/make_icon.svg", description: "Automate workflows and integrate Cal.com with Make (formerly Integromat). Build complex automation scenarios visually.", category: "Automation", installed: false },
  { name: "n8n", icon: "/assets/app-store/n8n_icon.svg", description: "Workflow automation tool. Connect Cal.com with hundreds of integrations using n8n's self-hosted automation platform.", category: "Automation", installed: false },
  { name: "Stripe", icon: "/assets/app-store/stripepayment_icon.svg", description: "Accept payments via Stripe for your bookings. Charge attendees when they book a meeting with you.", category: "Payment", installed: false },
  { name: "PayPal", icon: "/assets/app-store/paypal_icon.svg", description: "Accept PayPal payments for your bookings seamlessly. Let attendees pay with their PayPal account.", category: "Payment", installed: false },
  { name: "HubSpot", icon: "/assets/app-store/hubspot_icon.svg", description: "Sync your bookings with HubSpot CRM to track leads and contacts automatically.", category: "CRM", installed: false },
  { name: "Salesforce", icon: "/assets/app-store/salesforce_icon.png", description: "Sync Cal.com bookings with Salesforce CRM. Automatically create or update records when meetings are booked.", category: "CRM", installed: false },
  { name: "WhatsApp", icon: "/assets/app-store/whatsapp_icon.svg", description: "Send WhatsApp notifications to attendees when bookings are confirmed, cancelled, or rescheduled.", category: "Messaging", installed: false },
  { name: "Telegram", icon: "/assets/app-store/telegram_icon.svg", description: "Send Telegram messages to attendees for booking confirmations and reminders.", category: "Messaging", installed: false },
  { name: "Discord", icon: "/assets/app-store/discord_icon.svg", description: "Send Discord notifications for booking events. Connect your Discord server to Cal.com.", category: "Other", installed: false },
  { name: "Close.com", icon: "/assets/app-store/closecom_icon.svg", description: "Sync your Cal.com bookings with Close CRM to manage your sales pipeline effectively.", category: "CRM", installed: false },
  { name: "Jitsi Video", icon: "/assets/app-store/jitsivideo_icon.svg", description: "Jitsi is a free, open-source video conferencing solution. Add Jitsi meeting links to your bookings automatically.", category: "Conferencing", installed: false },
  { name: "Office 365 Calendar", icon: "/assets/app-store/office365calendar_icon.svg", description: "Sync your Cal.com bookings with Microsoft Office 365 Calendar.", category: "Calendar", installed: false },
  { name: "Office 365 Video", icon: "/assets/app-store/office365video_icon.svg", description: "Add Microsoft Teams meeting links to your Cal.com bookings automatically.", category: "Conferencing", installed: false },
  { name: "Pipedream", icon: "/assets/app-store/pipedream_icon.svg", description: "Connect Cal.com with 1000+ apps using Pipedream's serverless integration platform.", category: "Automation", installed: false },
]

const popularApps = allApps.slice(0, 3)
const recentApps = allApps.slice(3, 6)

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.05 } } }
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }

interface App { name: string; icon: string; description: string; category: string; installed: boolean }
interface Category { name: string; count: number; icon: string; apps: string[] }

function AppModal({ app, onClose }: { app: App; onClose: () => void }) {
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
              connected
                ? "border border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
                : "bg-neutral-100 text-neutral-900 hover:bg-white"
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

function CategoryModal({ category, onClose, onSelectApp }: { category: Category; onClose: () => void; onSelectApp: (app: App) => void }) {
  const categoryApps = allApps.filter((app) => app.category === category.name || category.apps.includes(app.name))

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
        className="w-full max-w-lg rounded-2xl border border-neutral-700 bg-neutral-800 p-6 shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="mb-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white p-1.5">
              <Image src={category.icon} alt={category.name} width={28} height={28} unoptimized />
            </div>
            <div>
              <h3 className="text-base font-semibold text-neutral-100">{category.name}</h3>
              <p className="text-xs text-neutral-500">{category.count} apps</p>
            </div>
          </div>
          <button onClick={onClose} className="rounded-lg p-1.5 text-neutral-500 transition-colors hover:bg-neutral-700 hover:text-neutral-100">
            <X className="h-4 w-4" />
          </button>
        </div>
        <div className="max-h-80 space-y-2 overflow-y-auto pr-1">
          {categoryApps.length > 0 ? categoryApps.map((app) => (
            <button
              key={app.name}
              onClick={() => {
                onClose()
                onSelectApp(app)
              }}
              className="flex w-full items-center gap-3 rounded-xl border border-neutral-700 bg-neutral-900 p-3 text-left transition-all hover:border-neutral-600 hover:bg-neutral-800"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-neutral-600 bg-neutral-700 p-1.5">
                <Image src={app.icon} alt={app.name} width={24} height={24} className="object-contain" unoptimized />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-neutral-100">{app.name}</p>
                <p className="truncate text-xs text-neutral-500">{app.description.slice(0, 60)}...</p>
              </div>
              <span className="shrink-0 text-xs text-neutral-500">Connect →</span>
            </button>
          )) : (
            <p className="py-8 text-center text-sm text-neutral-500">{category.name === "Analytics" ? "No analytics apps available yet. Check back soon." : "No apps available in this category yet."}</p>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function AppStorePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedApp, setSelectedApp] = useState<App | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null)

  const filteredApps = searchQuery
    ? allApps.filter((app) => app.name.toLowerCase().includes(searchQuery.toLowerCase()) || app.category.toLowerCase().includes(searchQuery.toLowerCase()))
    : null

  return (
    <div className="px-6 py-8 md:px-8">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="font-cal text-[28px] text-neutral-100">App store</h1>
          <p className="mt-1 text-sm text-neutral-400">Connecting people, technology and the workplace.</p>
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-500" />
          <input
            type="text"
            placeholder="Search apps..."
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            className="h-10 w-64 rounded-lg border border-neutral-600 bg-neutral-700 pl-10 pr-4 text-sm text-neutral-100 placeholder:text-neutral-500 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-neutral-400/30"
          />
        </div>
      </div>

      {filteredApps && (
        <div className="mt-6">
          <p className="mb-4 text-sm text-neutral-400">{filteredApps.length} result{filteredApps.length !== 1 ? "s" : ""} for "{searchQuery}"</p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredApps.map((app) => (
              <motion.div
                key={app.name}
                whileHover={{ y: -3 }}
                className="group flex cursor-pointer flex-col rounded-xl border border-neutral-700 bg-neutral-800 p-5 shadow-sm transition-all hover:border-neutral-600"
                onClick={() => setSelectedApp(app)}
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl border border-neutral-600 bg-neutral-700 p-2">
                  <Image src={app.icon} alt={app.name} width={32} height={32} className="object-contain" unoptimized />
                </div>
                <h3 className="text-sm font-semibold text-neutral-100">{app.name}</h3>
                <p className="mt-1.5 flex-1 line-clamp-2 text-xs leading-relaxed text-neutral-400">{app.description}</p>
                <button className="mt-4 w-full rounded-lg border border-neutral-600 bg-neutral-700 py-2 text-xs font-medium text-neutral-400 transition-all hover:bg-neutral-600 hover:text-neutral-100">Details</button>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {!filteredApps && (
        <>
          <div className="mt-10">
            <div className="flex items-center justify-between">
              <h2 className="font-cal text-lg text-neutral-100">Featured categories</h2>
            </div>
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
            >
              {categories.map((category) => (
                <motion.div
                  key={category.name}
                  variants={item}
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="group cursor-pointer rounded-xl border border-neutral-700 bg-neutral-800 p-4 transition-all hover:border-neutral-600 hover:bg-neutral-800/80"
                  onClick={() => setSelectedCategory(category)}
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-white p-1.5">
                    <Image src={category.icon} alt={category.name} width={28} height={28} unoptimized />
                  </div>
                  <p className="text-sm font-semibold text-neutral-100">{category.name}</p>
                  <p className="mt-0.5 flex items-center gap-1 text-xs text-neutral-500">{category.count} apps <ChevronRight className="h-3 w-3" /></p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="mt-12">
            <h2 className="font-cal text-lg text-neutral-100">Most popular</h2>
            <motion.div variants={container} initial="hidden" animate="show" className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {popularApps.map((app) => (
                <motion.div
                  key={app.name}
                  variants={item}
                  whileHover={{ y: -3 }}
                  className="group flex cursor-pointer flex-col rounded-xl border border-neutral-700 bg-neutral-800 p-5 shadow-sm transition-all hover:border-neutral-600"
                  onClick={() => setSelectedApp(app)}
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl border border-neutral-600 bg-neutral-700 p-2">
                    <Image src={app.icon} alt={app.name} width={32} height={32} className="object-contain" unoptimized />
                  </div>
                  <h3 className="text-sm font-semibold text-neutral-100">{app.name}</h3>
                  <p className="mt-1.5 flex-1 line-clamp-3 text-xs leading-relaxed text-neutral-400">{app.description}</p>
                  <button className="mt-4 w-full rounded-lg border border-neutral-600 bg-neutral-700 py-2 text-xs font-medium text-neutral-400 transition-all hover:bg-neutral-600 hover:text-neutral-100">Details</button>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="mt-12">
            <h2 className="font-cal text-lg text-neutral-100">Recently added</h2>
            <motion.div variants={container} initial="hidden" animate="show" className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {recentApps.map((app) => (
                <motion.div
                  key={app.name}
                  variants={item}
                  whileHover={{ y: -3 }}
                  className="group flex cursor-pointer flex-col rounded-xl border border-neutral-700 bg-neutral-800 p-5 shadow-sm transition-all hover:border-neutral-600"
                  onClick={() => setSelectedApp(app)}
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl border border-neutral-600 bg-neutral-700 p-2">
                    <Image src={app.icon} alt={app.name} width={32} height={32} className="object-contain" unoptimized />
                  </div>
                  <h3 className="text-sm font-semibold text-neutral-100">{app.name}</h3>
                  <p className="mt-1.5 flex-1 line-clamp-3 text-xs leading-relaxed text-neutral-400">{app.description}</p>
                  <button className="mt-4 w-full rounded-lg border border-neutral-600 bg-neutral-700 py-2 text-xs font-medium text-neutral-400 transition-all hover:bg-neutral-600 hover:text-neutral-100">Details</button>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="mt-12 pb-8">
            <h2 className="font-cal text-lg text-neutral-100">All apps</h2>
            <motion.div variants={container} initial="hidden" animate="show" className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {allApps.slice(6).map((app) => (
                <motion.div
                  key={app.name}
                  variants={item}
                  whileHover={{ y: -3 }}
                  className="group flex cursor-pointer flex-col rounded-xl border border-neutral-700 bg-neutral-800 p-5 shadow-sm transition-all hover:border-neutral-600"
                  onClick={() => setSelectedApp(app)}
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl border border-neutral-600 bg-neutral-700 p-2">
                    <Image src={app.icon} alt={app.name} width={32} height={32} className="object-contain" unoptimized />
                  </div>
                  <h3 className="text-sm font-semibold text-neutral-100">{app.name}</h3>
                  <p className="mt-1.5 flex-1 line-clamp-3 text-xs leading-relaxed text-neutral-400">{app.description}</p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="rounded-md bg-neutral-700 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-neutral-500">{app.category}</span>
                    <span className="text-xs text-neutral-500 transition-colors hover:text-neutral-300">Details →</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </>
      )}

      <AnimatePresence>
        {selectedCategory && (
          <CategoryModal
            category={selectedCategory}
            onClose={() => setSelectedCategory(null)}
            onSelectApp={(app) => {
              setSelectedCategory(null)
              setSelectedApp(app)
            }}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {selectedApp && (
          <AppModal app={selectedApp} onClose={() => setSelectedApp(null)} />
        )}
      </AnimatePresence>
    </div>
  )
}
