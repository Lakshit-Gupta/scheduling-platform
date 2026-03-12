"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

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
    <button
      onClick={handleCancel}
      disabled={cancelling}
      className="rounded px-2 py-1 text-sm text-gray-500 transition-colors hover:text-red-600 disabled:opacity-50"
    >
      {cancelling ? "Cancelling..." : "Cancel"}
    </button>
  )
}
