"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Check, X, AlertTriangle, Info } from "lucide-react"
import { cn } from "@/lib/utils"

export type ToastType = "success" | "error" | "warning" | "info"

export interface ToastItem {
  id: string
  message: string
  type: ToastType
}

let listeners: ((toasts: ToastItem[]) => void)[] = []
let currentToasts: ToastItem[] = []

export function toast(message: string, type: ToastType = "success") {
  const id = Math.random().toString(36).slice(2)
  const newToast: ToastItem = { id, message, type }
  currentToasts = [...currentToasts, newToast]
  listeners.forEach((listener) => listener(currentToasts))

  setTimeout(() => {
    currentToasts = currentToasts.filter((t) => t.id !== id)
    listeners.forEach((listener) => listener(currentToasts))
  }, 3500)
}

export function ToastContainer() {
  const [toasts, setToasts] = useState<ToastItem[]>([])

  useEffect(() => {
    listeners.push(setToasts)
    return () => {
      listeners = listeners.filter((listener) => listener !== setToasts)
    }
  }, [])

  const icons = {
    success: <Check className="h-4 w-4 text-emerald-400" />,
    error: <X className="h-4 w-4 text-red-400" />,
    warning: <AlertTriangle className="h-4 w-4 text-yellow-400" />,
    info: <Info className="h-4 w-4 text-blue-400" />,
  }

  const colors = {
    success: "border-emerald-400/30 bg-neutral-800",
    error: "border-red-400/30 bg-neutral-800",
    warning: "border-yellow-400/30 bg-neutral-800",
    info: "border-blue-400/30 bg-neutral-800",
  }

  return (
    <div className="pointer-events-none fixed right-4 bottom-4 z-[100] flex flex-col gap-2">
      <AnimatePresence>
        {toasts.map((toastItem) => (
          <motion.div
            key={toastItem.id}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className={cn(
              "pointer-events-auto flex min-w-[280px] max-w-[380px] items-center gap-3 rounded-xl border px-4 py-3 shadow-xl",
              colors[toastItem.type]
            )}
          >
            <div className="shrink-0">{icons[toastItem.type]}</div>
            <p className="text-sm font-medium text-neutral-100">{toastItem.message}</p>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}
