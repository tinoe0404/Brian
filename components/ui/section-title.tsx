"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface SectionTitleProps {
  title: string
  subtitle?: string
  align?: "left" | "center"
  className?: string
}

export function SectionTitle({ title, subtitle, align = "center", className }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={cn(
        "max-w-2xl mb-16",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal dark:text-white mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className={cn(
        "w-16 h-0.5 bg-wood mt-6",
        align === "center" && "mx-auto"
      )} />
    </motion.div>
  )
}
