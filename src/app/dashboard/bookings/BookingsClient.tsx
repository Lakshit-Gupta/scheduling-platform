"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

interface BookingsClientProps {
  sections: { key: string; title: string; count: number }[]
  tabContents: Record<string, React.ReactNode>
}

export default function BookingsClient({ sections, tabContents }: BookingsClientProps) {
  const [activeTab, setActiveTab] = useState(sections[0]?.key || "upcoming")

  return (
    <>
      <div className="flex border-b border-gray-200 px-8">
        {sections.map((section) => (
          <button
            key={section.key}
            onClick={() => setActiveTab(section.key)}
            className={cn(
              "border-b-2 px-4 py-2 text-sm font-medium transition-colors",
              activeTab === section.key
                ? "border-gray-900 text-gray-900"
                : "border-transparent text-gray-500 hover:text-gray-700"
            )}
          >
            {section.title} ({section.count})
          </button>
        ))}
      </div>
      <div className="px-8 pt-6">
        {tabContents[activeTab]}
      </div>
    </>
  )
}
