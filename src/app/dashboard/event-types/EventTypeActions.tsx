"use client"

import { useRouter } from "next/navigation"
import { Pencil, Trash2, Link as LinkIcon } from "lucide-react"
import { useState } from "react"

export default function EventTypeActions({
  id,
  slug,
}: {
  id: string
  slug: string
}) {
  const router = useRouter()
  const [deleting, setDeleting] = useState(false)

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
    alert("Link copied!")
  }

  return (
    <div className="flex items-center gap-1">
      <button
        onClick={handleCopyLink}
        className="flex items-center gap-1 rounded px-2 py-1 text-sm text-gray-500 transition-colors hover:text-gray-900"
      >
        <LinkIcon className="h-3.5 w-3.5" />
        Copy Link
      </button>
      <button
        onClick={() => router.push(`/dashboard/event-types/${id}/edit`)}
        className="flex items-center gap-1 rounded px-2 py-1 text-sm text-gray-500 transition-colors hover:text-gray-900"
      >
        <Pencil className="h-3.5 w-3.5" />
        Edit
      </button>
      <button
        onClick={handleDelete}
        disabled={deleting}
        className="flex items-center gap-1 rounded px-2 py-1 text-sm text-gray-500 transition-colors hover:text-red-600 disabled:opacity-50"
      >
        <Trash2 className="h-3.5 w-3.5" />
        {deleting ? "Deleting..." : "Delete"}
      </button>
    </div>
  )
}
