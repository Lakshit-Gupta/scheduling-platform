"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import { X } from "lucide-react"

export default function CancelBookingButton({ id }: { id: string }) {
  const router = useRouter()
  const [cancelling, setCancelling] = useState(false)

  async function handleCancel() {
    if (!confirm("Are you sure you want to cancel this booking?")) return
    setCancelling(true)
    await fetch(`/api/v1/bookings/${id}`, { method: "PATCH" })
    router.refresh()
    setCancelling(false)
  }

  return (
    <button onClick={handleCancel} disabled={cancelling}
      className="inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-[13px] text-neutral-400 transition-all duration-150 hover:bg-red-500/10 hover:text-red-400 disabled:opacity-50">
      <X className="h-3.5 w-3.5" />{cancelling ? "..." : "Cancel"}
    </button>
  )
}
