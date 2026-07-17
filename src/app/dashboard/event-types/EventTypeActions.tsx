"use client"

import { useRouter } from "next/navigation"
import { Pencil, Trash2, Copy } from "lucide-react"
import { useState } from "react"
import { toast } from "@/components/ui/Toast"

export default function EventTypeActions({ id, slug }: { id: string; slug: string }) {
  const router = useRouter()
  const [deleting, setDeleting] = useState(false)
  const [copied, setCopied] = useState(false)
  const [confirmingId, setConfirmingId] = useState<string | null>(null)

  async function handleDelete(eventTypeId: string) {
    setDeleting(true)
    const res = await fetch(`/api/v1/event-types/${eventTypeId}`, { method: "DELETE" })
    if (!res.ok) {
      toast("Failed to delete event type", "error")
      setDeleting(false)
      return
    }
    toast("Event type deleted", "success")
    router.refresh()
    setDeleting(false)
    setConfirmingId(null)
  }

  function handleCopyLink() {
    const url = `${window.location.origin}/${slug}`
    navigator.clipboard
      .writeText(url)
      .then(() => {
        setCopied(true)
        toast("Public link copied", "success")
        setTimeout(() => setCopied(false), 2000)
      })
      .catch(() => {
        toast("Failed to copy public link", "error")
      })
  }

  return (
    <div className="relative z-20 flex items-center gap-0.5">
      <button type="button" onClick={handleCopyLink} title="Copy link"
        className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-[13px] text-neutral-400 transition-all duration-150 hover:bg-neutral-700 hover:text-neutral-100">
        <Copy className="h-3.5 w-3.5" />{copied ? "Copied!" : "Copy"}
      </button>
      <button type="button" onClick={() => router.push(`/dashboard/event-types/${id}/edit`)} title="Edit"
        className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-[13px] text-neutral-400 transition-all duration-150 hover:bg-neutral-700 hover:text-neutral-100">
        <Pencil className="h-3.5 w-3.5" />Edit
      </button>
      {confirmingId === id ? (
        <div className="flex items-center gap-2 rounded-lg px-2.5 py-1.5">
          <button
            type="button"
            onClick={() => handleDelete(id)}
            disabled={deleting}
            className="text-xs font-medium text-red-400 transition-colors hover:text-red-300 disabled:opacity-50"
          >
            {deleting ? "..." : "Confirm"}
          </button>
          <button
            type="button"
            onClick={() => setConfirmingId(null)}
            disabled={deleting}
            className="text-xs text-neutral-500 transition-colors hover:text-neutral-300 disabled:opacity-50"
          >
            Cancel
          </button>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setConfirmingId(id)}
          title="Delete"
          className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-[13px] text-neutral-400 transition-all duration-150 hover:bg-red-500/10 hover:text-red-400"
        >
          <Trash2 className="h-3.5 w-3.5" />Delete
        </button>
      )}
    </div>
  )
}
