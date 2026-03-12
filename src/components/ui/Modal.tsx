"use client"

import * as Dialog from "@radix-ui/react-dialog"
import { X } from "lucide-react"
import { ReactNode } from "react"
import { cn } from "@/lib/utils"

type ModalSize = "sm" | "md" | "lg" | "xl"

const sizeStyles: Record<ModalSize, string> = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-2xl",
}

interface ModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  title: string
  children: ReactNode
  size?: ModalSize
  className?: string
}

export default function Modal({
  open,
  onOpenChange,
  title,
  children,
  size = "md",
  className,
}: ModalProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm" />
        <Dialog.Content
          className={cn(
            "fixed left-1/2 top-1/2 z-50 w-full -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white border border-gray-200 p-6 shadow-xl focus:outline-none",
            sizeStyles[size],
            className
          )}
        >
          <div className="mb-4 flex items-center justify-between">
            <Dialog.Title className="font-cal text-lg text-gray-900">
              {title}
            </Dialog.Title>
            <Dialog.Close className="rounded-lg p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-all duration-150">
              <X className="h-4 w-4" />
            </Dialog.Close>
          </div>
          {children}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
