import { cn } from "@/lib/utils"

interface BadgeProps {
  children: React.ReactNode
  variant?: "default" | "outline" | "wood"
  className?: string
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  const variants = {
    default: "bg-gray-100 text-charcoal dark:bg-gray-800 dark:text-white",
    outline: "border border-gray-300 text-charcoal dark:border-gray-600 dark:text-white",
    wood: "bg-wood/10 text-wood border border-wood/20",
  }

  return (
    <span className={cn("inline-flex items-center px-3 py-1 rounded-full text-xs font-medium", variants[variant], className)}>
      {children}
    </span>
  )
}
