"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import Sidebar from "@/components/dashboard/Sidebar"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex h-screen bg-neutral-900">
      {sidebarOpen && (
        <div className="fixed inset-0 z-30 bg-black/60 backdrop-blur-sm md:hidden" onClick={() => setSidebarOpen(false)} />
      )}
      <div className={`fixed inset-y-0 left-0 z-40 transform transition-transform duration-200 ease-in-out md:hidden ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="absolute right-2 top-3 z-50">
          <button onClick={() => setSidebarOpen(false)} className="rounded-lg p-1.5 text-neutral-500 hover:bg-neutral-800 hover:text-neutral-100"><X className="h-5 w-5" /></button>
        </div>
        <Sidebar onNavigate={() => setSidebarOpen(false)} />
      </div>
      <div className="hidden md:block"><Sidebar /></div>
      <main className="flex-1 overflow-auto bg-neutral-900">
        <div className="sticky top-0 z-20 flex items-center border-b border-neutral-800 bg-neutral-900 px-4 py-3 md:hidden">
          <button onClick={() => setSidebarOpen(true)} className="rounded-lg p-1.5 text-neutral-400 hover:bg-neutral-800 hover:text-neutral-100"><Menu className="h-5 w-5" /></button>
          <div className="ml-3 flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white"><span className="text-xs font-bold text-black">C</span></div>
            <span className="font-cal text-lg text-neutral-100">Cal</span>
          </div>
        </div>
        <div className="mx-auto max-w-6xl">{children}</div>
      </main>
    </div>
  )
}
