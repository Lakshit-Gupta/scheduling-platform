"use client"

import { useRouter } from "next/navigation"
import { Pencil, Trash2, Copy } from "lucide-react"
import { useState } from "react"
import { toast } from "@/components/ui/Toast"

export default function EventTypeActions({ id, slug }: { id: string; slug: string }) {
  const router = useRouter()
  const [deleting, setDeleting] = useState(false)
  const [copied, setCopied] = useState(false)
  const [confirmDelete, setConfirmDelete] = useState(false)

  async function handleDelete() {
    setDeleting(true)
    const res = await fetch(`/api/v1/event-types/${id}`, { method: "DELETE" })
    if (!res.ok) {
      toast("Failed to delete event type", "error")
      setDeleting(false)
      return
    }
    toast("Event type deleted", "success")
    router.refresh()
    setDeleting(false)
    setConfirmDelete(false)
  }

  function handleCopyLink() {
    const url = `${window.location.origin}/${slug}`
    navigator.clipboard.writeText(url)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="flex items-center gap-0.5">
      <button onClick={handleCopyLink} title="Copy link"
        className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-[13px] text-neutral-400 transition-all duration-150 hover:bg-neutral-700 hover:text-neutral-100">
        <Copy className="h-3.5 w-3.5" />{copied ? "Copied!" : "Copy"}
      </button>
      <button onClick={() => router.push(`/dashboard/event-types/${id}/edit`)} title="Edit"
        className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-[13px] text-neutral-400 transition-all duration-150 hover:bg-neutral-700 hover:text-neutral-100">
        <Pencil className="h-3.5 w-3.5" />Edit
      </button>
      {confirmDelete ? (
        <div className="flex items-center gap-2 rounded-lg px-2.5 py-1.5">
          <button
            onClick={handleDelete}
            disabled={deleting}
            className="text-xs font-medium text-red-400 transition-colors hover:text-red-300 disabled:opacity-50"
          >
            {deleting ? "..." : "Confirm"}
          </button>
          <button
            onClick={() => setConfirmDelete(false)}
            disabled={deleting}
            className="text-xs text-neutral-500 transition-colors hover:text-neutral-300 disabled:opacity-50"
          >
            Cancel
          </button>
        </div>
      ) : (
        <button
          onClick={() => setConfirmDelete(true)}
          title="Delete"
          className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-[13px] text-neutral-400 transition-all duration-150 hover:bg-red-500/10 hover:text-red-400"
        >
          <Trash2 className="h-3.5 w-3.5" />Delete
        </button>
      )}
    </div>
  )
}
