"use client"

import { motion } from "framer-motion"
import Link from "next/link"

interface NavLink {
  href: string
  label: string
}

interface MobileMenuProps {
  links: NavLink[]
  onClose: () => void
}

export function MobileMenu({ links, onClose }: MobileMenuProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-30 bg-white dark:bg-matte-black pt-20"
    >
      <nav className="flex flex-col items-center justify-center h-full gap-8">
        {links.map((link, i) => (
          <motion.div
            key={link.href}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Link
              href={link.href}
              onClick={onClose}
              className="text-2xl font-heading font-medium text-charcoal dark:text-white hover:text-wood transition-colors"
            >
              {link.label}
            </Link>
          </motion.div>
        ))}
      </nav>
    </motion.div>
  )
}
