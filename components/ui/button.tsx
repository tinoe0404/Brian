"use client"

import { forwardRef, ButtonHTMLAttributes } from "react"
import { cn } from "@/lib/utils"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost" | "wood"
  size?: "sm" | "md" | "lg"
}

const variants = {
  primary: "bg-charcoal text-white hover:bg-matte-black dark:bg-white dark:text-charcoal dark:hover:bg-gray-200",
  outline: "border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-charcoal",
  ghost: "text-charcoal hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800",
  wood: "bg-wood text-white hover:bg-wood-dark",
}

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-wood focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
      </button>
    )
  }
)
Button.displayName = "Button"

export { Button, type ButtonProps }
