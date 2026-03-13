"use client"

import { useState } from "react"
import Image from "next/image"
import { Search, ChevronLeft, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"

const categories = [
  { name: "Conferencing", count: 26, icon: "/assets/app-categories/conferencing.svg" },
  { name: "Automation", count: 22, icon: "/assets/app-categories/automation.svg" },
  { name: "Analytics", count: 11, icon: "/assets/app-categories/analytics.svg" },
  { name: "Other", count: 11, icon: "/assets/app-categories/other.svg" },
  { name: "Calendar", count: 10, icon: "/assets/app-categories/calendar.svg" },
  { name: "CRM", count: 8, icon: "/assets/app-categories/crm.svg" },
  { name: "Messaging", count: 7, icon: "/assets/app-categories/messaging.svg" },
  { name: "Payment", count: 5, icon: "/assets/app-categories/payment.svg" },
  { name: "Video", count: 12, icon: "/assets/app-categories/video.svg" },
]

const popularApps = [
  { name: "Google Calendar", icon: "/assets/app-store/googlecalendar_icon.svg", description: "Google Calendar is a time management and scheduling service developed by Google.", category: "Calendar" },
  { name: "Google Meet", icon: "/assets/icons/apps/google-meet.svg", description: "Google Meet is Google's web-based video conferencing platform.", category: "Conferencing" },
  { name: "Zoom Video", icon: "/assets/app-store/zoomvideo_icon.svg", description: "Zoom is a secure and reliable video platform for all your communication needs.", category: "Conferencing" },
]

const recentApps = [
  { name: "Zapier", icon: "/assets/app-store/zapier_icon.svg", description: "Connect Cal.com to thousands of apps via Zapier automations.", category: "Automation" },
  { name: "Make", icon: "/assets/app-store/make_icon.svg", description: "Automate workflows and integrate Cal.com with Make.", category: "Automation" },
  { name: "n8n", icon: "/assets/app-store/n8n_icon.svg", description: "Workflow automation tool. Connect Cal.com with hundreds of integrations.", category: "Automation" },
]

const moreApps = [
  { name: "Stripe Payment", icon: "/assets/app-store/stripepayment_icon.svg", description: "Accept payments via Stripe for your bookings.", category: "Payment" },
  { name: "PayPal", icon: "/assets/app-store/paypal_icon.svg", description: "Accept PayPal payments for your bookings seamlessly.", category: "Payment" },
  { name: "HubSpot", icon: "/assets/app-store/hubspot_icon.svg", description: "Sync your bookings with HubSpot CRM to track leads.", category: "CRM" },
]

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.05 } } }
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }

export default function AppStorePage() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="px-6 py-8 md:px-8">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="font-cal text-[28px] text-neutral-100">App store</h1>
          <p className="mt-1 text-sm text-neutral-400">Connecting people, technology and the workplace.</p>
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-500" />
          <input type="text" placeholder="Search" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
            className="h-10 w-64 rounded-lg border border-neutral-600 bg-neutral-700 pl-10 pr-4 text-sm text-neutral-100 placeholder:text-neutral-500 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-neutral-400/30" />
        </div>
      </div>

      <div className="mt-10">
        <div className="flex items-center justify-between">
          <h2 className="font-cal text-lg text-neutral-100">Featured categories</h2>
          <div className="flex gap-1.5">
            <button className="rounded-lg border border-neutral-600 p-1.5 text-neutral-500 hover:bg-neutral-700 hover:text-neutral-100 transition-colors"><ChevronLeft className="h-4 w-4" /></button>
            <button className="rounded-lg border border-neutral-600 p-1.5 text-neutral-500 hover:bg-neutral-700 hover:text-neutral-100 transition-colors"><ChevronRight className="h-4 w-4" /></button>
          </div>
        </div>
        <motion.div variants={container} initial="hidden" animate="show" className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {categories.map((cat) => (
            <motion.div key={cat.name} variants={item} whileHover={{ scale: 1.02, y: -2 }} className="group cursor-pointer rounded-xl border border-neutral-700 bg-neutral-800 p-4 transition-all hover:border-neutral-600 hover:bg-neutral-800/80">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-white p-1.5"><Image src={cat.icon} alt={cat.name} width={28} height={28} /></div>
              <p className="text-sm font-semibold text-neutral-100">{cat.name}</p>
              <p className="mt-0.5 flex items-center gap-1 text-xs text-neutral-500">{cat.count} apps <ChevronRight className="h-3 w-3" /></p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="mt-12">
        <h2 className="font-cal text-lg text-neutral-100">Most popular</h2>
        <motion.div variants={container} initial="hidden" animate="show" className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {popularApps.map((app) => (
            <motion.div key={app.name} variants={item} whileHover={{ y: -3 }} className="group flex flex-col rounded-xl border border-neutral-700 bg-neutral-800 p-5 shadow-sm transition-all hover:border-neutral-600">
              <div className="mb-4 h-12 w-12 overflow-hidden rounded-xl border border-neutral-600 bg-neutral-700 p-2"><Image src={app.icon} alt={app.name} width={32} height={32} /></div>
              <h3 className="text-sm font-semibold text-neutral-100">{app.name}</h3>
              <p className="mt-1.5 flex-1 text-xs leading-relaxed text-neutral-400 line-clamp-3">{app.description}</p>
              <button className="mt-4 w-full rounded-lg border border-neutral-600 bg-neutral-700 py-2 text-xs font-medium text-neutral-400 transition-all hover:bg-neutral-600 hover:text-neutral-100">Details</button>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="mt-12">
        <h2 className="font-cal text-lg text-neutral-100">Recently added</h2>
        <motion.div variants={container} initial="hidden" animate="show" className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {recentApps.map((app) => (
            <motion.div key={app.name} variants={item} whileHover={{ y: -3 }} className="group flex flex-col rounded-xl border border-neutral-700 bg-neutral-800 p-5 shadow-sm transition-all hover:border-neutral-600">
              <div className="mb-4 h-12 w-12 overflow-hidden rounded-xl border border-neutral-600 bg-neutral-700 p-2"><Image src={app.icon} alt={app.name} width={32} height={32} /></div>
              <h3 className="text-sm font-semibold text-neutral-100">{app.name}</h3>
              <p className="mt-1.5 flex-1 text-xs leading-relaxed text-neutral-400 line-clamp-3">{app.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="mt-12 pb-8">
        <h2 className="font-cal text-lg text-neutral-100">All apps</h2>
        <motion.div variants={container} initial="hidden" animate="show" className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {moreApps.map((app) => (
            <motion.div key={app.name} variants={item} whileHover={{ y: -3 }} className="group flex flex-col rounded-xl border border-neutral-700 bg-neutral-800 p-5 shadow-sm transition-all hover:border-neutral-600">
              <div className="mb-4 h-12 w-12 overflow-hidden rounded-xl border border-neutral-600 bg-neutral-700 p-2"><Image src={app.icon} alt={app.name} width={32} height={32} /></div>
              <h3 className="text-sm font-semibold text-neutral-100">{app.name}</h3>
              <p className="mt-1.5 flex-1 text-xs leading-relaxed text-neutral-400 line-clamp-3">{app.description}</p>
              <div className="mt-3"><span className="rounded-md bg-neutral-700 px-2 py-0.5 text-[10px] font-medium text-neutral-500 uppercase tracking-wider">{app.category}</span></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
