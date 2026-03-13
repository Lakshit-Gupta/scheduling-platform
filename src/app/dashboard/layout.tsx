"use client"

import Sidebar from "@/components/layout/Sidebar"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col bg-neutral-900 md:flex-row">
      <Sidebar />
      <main className="flex-1 overflow-auto bg-neutral-900">
        <div className="mx-auto max-w-6xl">{children}</div>
      </main>
    </div>
  )
}
