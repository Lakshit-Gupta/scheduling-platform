"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import Sidebar from "@/components/dashboard/Sidebar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex h-screen">
      {/* Mobile backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Mobile sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-40 transform transition-transform duration-200 md:hidden ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="absolute right-2 top-3">
          <button
            onClick={() => setSidebarOpen(false)}
            className="rounded-md p-1 text-gray-500 hover:text-gray-900"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <Sidebar onNavigate={() => setSidebarOpen(false)} />
      </div>

      {/* Desktop sidebar */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      <main className="flex-1 overflow-auto bg-gray-50">
        {/* Mobile header */}
        <div className="sticky top-0 z-20 flex items-center border-b border-gray-200 bg-white px-4 py-3 md:hidden">
          <button
            onClick={() => setSidebarOpen(true)}
            className="rounded-md p-1 text-gray-600 hover:text-gray-900"
          >
            <Menu className="h-6 w-6" />
          </button>
          <span className="ml-3 text-lg font-bold text-gray-900">Cal</span>
        </div>
        {children}
      </main>
    </div>
  )
}
