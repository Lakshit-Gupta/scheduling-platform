"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useState } from "react"
import {
  LayoutDashboard, Link as LinkIcon, Clock, Calendar, Zap,
  Grid3X3, ChevronDown, Store, AppWindow, ExternalLink, Copy, Check, Gift, Settings,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

const navItems = [
  { href: "/dashboard/event-types", label: "Event Types", icon: LinkIcon },
  { href: "/dashboard/bookings", label: "Bookings", icon: Calendar },
  { href: "/dashboard/availability", label: "Availability", icon: Clock },
]

const appsSubmenu = [
  { href: "/dashboard/apps/store", label: "App Store", icon: Store },
  { href: "/dashboard/apps/installed", label: "Installed Apps", icon: AppWindow },
]

export default function Sidebar({ onNavigate }: { onNavigate?: () => void } = {}) {
  const pathname = usePathname()
  const [appsOpen, setAppsOpen] = useState(pathname.startsWith("/dashboard/apps"))
  const [copied, setCopied] = useState(false)
  const isAppsActive = pathname.startsWith("/dashboard/apps")
  const isWorkflowsActive = pathname.startsWith("/dashboard/workflows")

  const handleCopyPublicLink = () => {
    navigator.clipboard.writeText(`${window.location.origin}/lakshit-gupta`)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <aside className="sticky top-0 flex h-screen w-[240px] flex-col border-r border-neutral-800 bg-neutral-900">
      <div className="flex items-center gap-2.5 px-5 py-5">
        <Link href="/dashboard" className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white p-1.5">
            <Image src="/cal-com-icon.svg" alt="Cal" width={20} height={20} />
          </div>
          <span className="font-cal text-[22px] text-neutral-100">Cal</span>
        </Link>
      </div>

      <nav className="flex-1 space-y-0.5 px-3 pt-2">
        <Link href="/dashboard" onClick={onNavigate}
          className={cn("flex items-center gap-3 rounded-lg px-3 py-2.5 text-[13px] font-medium transition-all duration-150",
            pathname === "/dashboard" ? "bg-neutral-800 text-neutral-100" : "text-neutral-400 hover:bg-neutral-800 hover:text-neutral-100"
          )}>
          <LayoutDashboard className="h-[18px] w-[18px]" />Dashboard
        </Link>

        {navItems.map((item) => {
          const isActive = pathname === item.href || (item.href !== "/dashboard" && pathname.startsWith(item.href))
          return (
            <Link key={item.href} href={item.href} onClick={onNavigate}
              className={cn("flex items-center gap-3 rounded-lg px-3 py-2.5 text-[13px] font-medium transition-all duration-150",
                isActive ? "bg-neutral-800 text-neutral-100" : "text-neutral-400 hover:bg-neutral-800 hover:text-neutral-100"
              )}>
              <item.icon className="h-[18px] w-[18px]" />{item.label}
            </Link>
          )
        })}

        <div>
          <button onClick={() => setAppsOpen(!appsOpen)}
            className={cn("flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-[13px] font-medium transition-all duration-150",
              isAppsActive ? "bg-neutral-800 text-neutral-100" : "text-neutral-400 hover:bg-neutral-800 hover:text-neutral-100"
            )}>
            <Grid3X3 className="h-[18px] w-[18px]" />
            <span className="flex-1 text-left">Apps</span>
            <motion.div animate={{ rotate: appsOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
              <ChevronDown className="h-3.5 w-3.5" />
            </motion.div>
          </button>
          <AnimatePresence initial={false}>
            {appsOpen && (
              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2, ease: "easeInOut" }} className="overflow-hidden">
                <div className="ml-4 space-y-0.5 border-l border-neutral-700 pl-3 pt-1">
                  {appsSubmenu.map((item) => {
                    const isActive = pathname === item.href || pathname.startsWith(item.href)
                    return (
                      <Link key={item.href} href={item.href} onClick={onNavigate}
                        className={cn("flex items-center gap-3 rounded-lg px-3 py-2 text-[13px] font-medium transition-all duration-150",
                          isActive ? "bg-neutral-800 text-neutral-100" : "text-neutral-400 hover:bg-neutral-800 hover:text-neutral-100"
                        )}>
                        <item.icon className="h-[16px] w-[16px]" />{item.label}
                      </Link>
                    )
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <Link href="/dashboard/workflows" onClick={onNavigate}
          className={cn("flex items-center gap-3 rounded-lg px-3 py-2.5 text-[13px] font-medium transition-all duration-150",
            isWorkflowsActive ? "bg-neutral-800 text-neutral-100" : "text-neutral-400 hover:bg-neutral-800 hover:text-neutral-100"
          )}>
          <Zap className="h-[18px] w-[18px]" />Workflows
        </Link>
      </nav>

      <div className="border-t border-neutral-800 px-3 py-3 space-y-0.5">
        <a href="https://cal.lakshit.dev/lakshit-gupta" target="_blank" rel="noopener noreferrer" className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-[13px] font-medium text-neutral-400 transition-all hover:bg-neutral-800 hover:text-neutral-100">
          <ExternalLink className="h-4 w-4" />View public page
        </a>
        <button onClick={handleCopyPublicLink} className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-[13px] font-medium text-neutral-400 transition-all hover:bg-neutral-800 hover:text-neutral-100">
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          {copied ? "Copied!" : "Copy public page link"}
        </button>
        <Link href="/dashboard/refer" onClick={onNavigate} className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-[13px] font-medium text-neutral-400 transition-all hover:bg-neutral-800 hover:text-neutral-100">
          <Gift className="h-4 w-4" />Refer and earn
        </Link>
        <Link href="/dashboard/settings" onClick={onNavigate} className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-[13px] font-medium text-neutral-400 transition-all hover:bg-neutral-800 hover:text-neutral-100">
          <Settings className="h-4 w-4" />Settings
        </Link>
      </div>

      <div className="border-t border-neutral-800 p-3">
        <div className="flex items-center gap-3 rounded-lg px-3 py-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-700 text-xs font-semibold text-neutral-100">LG</div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-[13px] font-medium text-neutral-100">Lakshit Gupta</p>
            <p className="truncate text-[11px] text-neutral-500">contact@lakshit.dev</p>
          </div>
        </div>
      </div>
    </aside>
  )
}
