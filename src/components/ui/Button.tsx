import { cn } from "@/lib/utils"
import { ButtonHTMLAttributes } from "react"

type Variant = "primary" | "secondary" | "danger" | "destructive" | "ghost" | "outline"

const variantStyles: Record<Variant, string> = {
  primary: "bg-gray-900 text-white hover:bg-gray-800 shadow-sm",
  secondary: "bg-white text-gray-700 hover:bg-gray-50 border border-gray-300 shadow-sm",
  danger: "bg-red-600 text-white hover:bg-red-700 shadow-sm",
  destructive: "bg-red-600 text-white hover:bg-red-700 shadow-sm",
  ghost: "bg-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-100",
  outline: "bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-50 hover:text-gray-900",
}

type Size = "sm" | "md" | "lg"

const sizeStyles: Record<Size, string> = {
  sm: "px-3 py-1.5 text-[13px]",
  md: "px-4 py-2 text-sm",
  lg: "px-6 py-2.5 text-sm",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
  loading?: boolean
}

export default function Button({
  variant = "primary",
  size = "md",
  loading,
  className,
  children,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      disabled={disabled || loading}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {loading && (
        <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
        </svg>
      )}
      {children}
    </button>
  )
}
