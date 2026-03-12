import { cn } from "@/lib/utils"
import { InputHTMLAttributes, ReactNode, forwardRef } from "react"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  hint?: string
  prefix?: string
  suffix?: ReactNode
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, hint, prefix, suffix, className, id, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, "-")
    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label
            htmlFor={inputId}
            className="text-sm font-medium text-gray-700"
          >
            {label}
          </label>
        )}
        <div className="flex items-center">
          {prefix && (
            <span className="px-3 py-2 text-sm text-gray-500 bg-gray-50 border border-r-0 border-gray-300 rounded-l-lg">
              {prefix}
            </span>
          )}
          <input
            id={inputId}
            ref={ref}
            className={cn(
              "w-full px-3 py-2 text-sm bg-white border border-gray-300 text-gray-900 placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-150",
              prefix && "rounded-l-none",
              suffix && "rounded-r-none",
              error && "border-red-400 focus:ring-red-500",
              className
            )}
            {...props}
          />
          {suffix && (
            <span className="px-3 py-2 text-sm bg-gray-50 border border-l-0 border-gray-300 rounded-r-lg">
              {suffix}
            </span>
          )}
        </div>
        {hint && !error && <p className="text-xs text-gray-500">{hint}</p>}
        {error && <p className="text-xs text-red-500">{error}</p>}
      </div>
    )
  }
)

Input.displayName = "Input"
export default Input
