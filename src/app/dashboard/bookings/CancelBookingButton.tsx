"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import { X } from "lucide-react"
import { toast } from "@/components/ui/Toast"

export default function CancelBookingButton({ id }: { id: string }) {
  const router = useRouter()
  const [cancelling, setCancelling] = useState(false)
  const [confirmCancel, setConfirmCancel] = useState(false)

  async function handleCancel() {
    setCancelling(true)
    const res = await fetch(`/api/v1/bookings/${id}`, { method: "PATCH" })
    if (!res.ok) {
      toast("Failed to cancel booking", "error")
      setCancelling(false)
      return
    }
    toast("Booking cancelled", "success")
    router.refresh()
    setCancelling(false)
    setConfirmCancel(false)
  }

  return (
    confirmCancel ? (
      <div className="inline-flex items-center gap-2 rounded-lg px-2.5 py-1.5">
        <button
          onClick={handleCancel}
          disabled={cancelling}
          className="text-xs font-medium text-red-400 transition-colors hover:text-red-300 disabled:opacity-50"
        >
          {cancelling ? "..." : "Confirm"}
        </button>
        <button
          onClick={() => setConfirmCancel(false)}
          disabled={cancelling}
          className="text-xs text-neutral-500 transition-colors hover:text-neutral-300 disabled:opacity-50"
        >
          Cancel
        </button>
      </div>
    ) : (
      <button
        onClick={() => setConfirmCancel(true)}
        className="inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-[13px] text-neutral-400 transition-all duration-150 hover:bg-red-500/10 hover:text-red-400"
      >
        <X className="h-3.5 w-3.5" />Cancel
      </button>
    )
  )
}
