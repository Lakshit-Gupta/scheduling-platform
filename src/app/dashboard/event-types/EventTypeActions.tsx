"use client"

import { useRouter } from "next/navigation"
import { Pencil, Trash2, Copy } from "lucide-react"
import { useState } from "react"

export default function EventTypeActions({ id, slug }: { id: string; slug: string }) {
  const router = useRouter()
  const [deleting, setDeleting] = useState(false)
  const [copied, setCopied] = useState(false)

  async function handleDelete() {
    if (!confirm("Are you sure you want to delete this event type?")) return
    setDeleting(true)
    await fetch(`/api/v1/event-types/${id}`, { method: "DELETE" })
    router.refresh()
    setDeleting(false)
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
      <button onClick={handleDelete} disabled={deleting} title="Delete"
        className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-[13px] text-neutral-400 transition-all duration-150 hover:bg-red-500/10 hover:text-red-400 disabled:opacity-50">
        <Trash2 className="h-3.5 w-3.5" />{deleting ? "..." : "Delete"}
      </button>
    </div>
  )
}
