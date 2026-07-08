"use client"

import { motion } from "framer-motion"
import { AnimatedCounter } from "@/components/ui/animated-counter"
import { stats } from "@/data/skills"

export function StatsSection() {
  return (
    <section className="py-20 bg-wood/5 dark:bg-charcoal/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <AnimatedCounter target={stats.projectsCompleted} suffix="+" />
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Projects Completed</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <AnimatedCounter target={stats.yearsOfExperience} suffix="+" />
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Years Experience</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <AnimatedCounter target={stats.happyClients} suffix="%" />
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Happy Clients</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <AnimatedCounter target={8} suffix="+" />
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Software Proficient</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
