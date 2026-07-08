"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Download, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white dark:bg-matte-black overflow-hidden">
      <div className="absolute inset-0 bg-blueprint dark:bg-blueprint-dark opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white dark:to-matte-black" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-wood/10 text-wood border border-wood/20 mb-6">
            Furniture Draftsman &amp; Technical Designer
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-heading text-charcoal dark:text-white leading-tight mb-6"
        >
          Precision in Every
          <br />
          <span className="text-wood">Detail</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-gray-500 dark:text-gray-400 leading-relaxed mb-10"
        >
          Specializing in bespoke furniture design, technical documentation, and manufacturing drawings for architects, interior designers, and private clients.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/portfolio">
            <Button variant="primary" size="lg">
              View Portfolio
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
          <a href="/resume" download>
            <Button variant="outline" size="lg">
              <Download className="w-5 h-5" />
              Download CV
            </Button>
          </a>
          <Link href="/contact">
            <Button variant="ghost" size="lg">
              Contact Me
            </Button>
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-gray-400"
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  )
}
