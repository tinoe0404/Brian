"use client"

import { motion } from "framer-motion"
import { SectionTitle } from "@/components/ui/section-title"
import { services } from "@/data/services"
import * as Icons from "lucide-react"

export function ServicesSection() {
  return (
    <section className="py-24 bg-white dark:bg-matte-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Services"
          subtitle="Comprehensive technical design services for the furniture industry, from initial concepts through to manufacturing documentation."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const IconComponent = (Icons as any)[service.icon.split("-").map((part, j) => j === 0 ? part : part.charAt(0).toUpperCase() + part.slice(1)).join("")] || Icons.FileText

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                whileHover={{ y: -5 }}
                className="group p-6 rounded-xl border border-gray-100 dark:border-gray-800 hover:border-wood/30 hover:shadow-lg hover:shadow-wood/5 transition-all duration-300 bg-gray-50 dark:bg-charcoal/50"
              >
                <div className="w-10 h-10 rounded-lg bg-wood/10 flex items-center justify-center mb-4 group-hover:bg-wood/20 transition-colors">
                  <IconComponent className="w-5 h-5 text-wood" />
                </div>
                <h3 className="text-lg font-semibold text-charcoal dark:text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
