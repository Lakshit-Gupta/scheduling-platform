import { cn } from "@/lib/utils"
import { ReactNode } from "react"

type Variant = "default" | "success" | "warning" | "danger" | "info" | "purple"

const variantStyles: Record<Variant, string> = {
  default: "bg-neutral-700 text-neutral-400",
  success: "bg-emerald-500/10 text-emerald-400",
  warning: "bg-amber-500/10 text-amber-400",
  danger: "bg-red-500/10 text-red-400",
  info: "bg-sky-500/10 text-sky-400",
  purple: "bg-purple-500/10 text-purple-400",
}

interface BadgeProps { variant?: Variant; children: ReactNode; className?: string }

export default function Badge({ variant = "default", children, className }: BadgeProps) {
  return (
    <span className={cn("inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium tracking-wide", variantStyles[variant], className)}>
      {children}
    </span>
  )
}
