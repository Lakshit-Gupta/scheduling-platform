"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  Link as LinkIcon,
  Clock,
  Calendar,
} from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/dashboard/event-types", label: "Event Types", icon: LinkIcon },
  { href: "/dashboard/availability", label: "Availability", icon: Clock },
  { href: "/dashboard/bookings", label: "Bookings", icon: Calendar },
]

export default function Sidebar({ onNavigate }: { onNavigate?: () => void } = {}) {
  const pathname = usePathname()

  return (
    <aside className="sticky top-0 flex h-screen w-60 flex-col border-r border-gray-200 bg-white">
      <div className="flex items-center gap-2 px-4 py-5">
        <Link href="/dashboard" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600">
            <Calendar className="h-4 w-4 text-white" />
          </div>
          <span className="text-xl font-bold text-gray-900">Cal</span>
        </Link>
      </div>

      <nav className="flex-1 space-y-0.5 px-3">
        {navItems.map((item) => {
          const isActive =
            pathname === item.href ||
            (item.href !== "/dashboard" && pathname.startsWith(item.href))
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onNavigate}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
                isActive
                  ? "bg-gray-100 font-medium text-gray-900"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              )}
            >
              <item.icon className="h-5 w-5" />
              {item.label}
            </Link>
          )
        })}
      </nav>

      <div className="mt-auto border-t border-gray-200 p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-sm font-medium text-white">
            AJ
          </div>
          <div className="text-sm">
            <p className="font-medium text-gray-900">Alex Johnson</p>
            <p className="text-xs text-gray-500">alex@example.com</p>
          </div>
        </div>
      </div>
    </aside>
  )
}
