import { cn } from "@/lib/utils"
import { HTMLAttributes, ReactNode } from "react"

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export default function Card({ children, className, ...props }: CardProps) {
  return (
    <div
      className={cn("rounded-lg bg-white p-6 shadow-sm", className)}
      {...props}
    >
      {children}
    </div>
  )
}
