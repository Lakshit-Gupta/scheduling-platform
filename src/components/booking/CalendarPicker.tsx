"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface CalendarPickerProps {
  availableDays: number[] // 0-6, days that have availability
  onDateSelect: (date: string) => void
  selectedDate: string | null
}

const DAY_LABELS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
]

export default function CalendarPicker({
  availableDays,
  onDateSelect,
  selectedDate,
}: CalendarPickerProps) {
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const [currentMonth, setCurrentMonth] = useState(today.getMonth())
  const [currentYear, setCurrentYear] = useState(today.getFullYear())

  function prevMonth() {
    if (currentMonth === 0) {
      setCurrentMonth(11)
      setCurrentYear(currentYear - 1)
    } else {
      setCurrentMonth(currentMonth - 1)
    }
  }

  function nextMonth() {
    if (currentMonth === 11) {
      setCurrentMonth(0)
      setCurrentYear(currentYear + 1)
    } else {
      setCurrentMonth(currentMonth + 1)
    }
  }

  const firstDay = new Date(currentYear, currentMonth, 1).getDay()
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate()

  const days: (number | null)[] = []
  for (let i = 0; i < firstDay; i++) days.push(null)
  for (let i = 1; i <= daysInMonth; i++) days.push(i)

  function isDisabled(day: number): boolean {
    const date = new Date(currentYear, currentMonth, day)
    date.setHours(0, 0, 0, 0)
    if (date < today) return true
    if (!availableDays.includes(date.getDay())) return true
    return false
  }

  function isToday(day: number): boolean {
    return (
      currentYear === today.getFullYear() &&
      currentMonth === today.getMonth() &&
      day === today.getDate()
    )
  }

  function formatDateStr(day: number): string {
    const y = currentYear
    const m = String(currentMonth + 1).padStart(2, "0")
    const d = String(day).padStart(2, "0")
    return `${y}-${m}-${d}`
  }

  // Don't allow navigating to past months
  const canGoPrev =
    currentYear > today.getFullYear() ||
    (currentYear === today.getFullYear() && currentMonth > today.getMonth())

  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <button
          onClick={prevMonth}
          disabled={!canGoPrev}
          className="rounded p-1 hover:bg-gray-100 disabled:opacity-30"
        >
          <ChevronLeft className="h-5 w-5 text-gray-600" />
        </button>
        <span className="text-sm font-semibold text-gray-900">
          {MONTH_NAMES[currentMonth]} {currentYear}
        </span>
        <button
          onClick={nextMonth}
          className="rounded p-1 hover:bg-gray-100"
        >
          <ChevronRight className="h-5 w-5 text-gray-600" />
        </button>
      </div>

      <div className="grid grid-cols-7 gap-1 text-center text-xs text-gray-500">
        {DAY_LABELS.map((d) => (
          <div key={d} className="py-1 font-medium">
            {d}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {days.map((day, i) => {
          if (day === null) {
            return <div key={`empty-${i}`} />
          }
          const dateStr = formatDateStr(day)
          const disabled = isDisabled(day)
          const selected = selectedDate === dateStr
          const todayDate = isToday(day)

          return (
            <button
              key={dateStr}
              disabled={disabled}
              onClick={() => onDateSelect(dateStr)}
              className={cn(
                "mx-auto flex h-10 w-10 items-center justify-center text-sm transition-colors",
                disabled
                  ? "cursor-not-allowed text-gray-200"
                  : "cursor-pointer font-medium text-gray-900 hover:bg-blue-50 hover:text-blue-600",
                selected
                  ? "rounded-full bg-blue-600 text-white hover:bg-blue-700 hover:text-white"
                  : "rounded-lg",
                todayDate && !selected && !disabled && "ring-1 ring-blue-500 rounded-lg"
              )}
            >
              {day}
            </button>
          )
        })}
      </div>
    </div>
  )
}
