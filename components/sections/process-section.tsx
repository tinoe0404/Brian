"use client"

import { motion } from "framer-motion"
import { SectionTitle } from "@/components/ui/section-title"
import { Search, Ruler, PencilRuler, FileText, CheckCircle, Wrench, Building, Home } from "lucide-react"

const steps = [
  { icon: Search, title: "Discovery", description: "Understanding requirements, style preferences, and budget" },
  { icon: Ruler, title: "Site Measurements", description: "Precise on-site measurement and space analysis" },
  { icon: PencilRuler, title: "Concept Sketches", description: "Initial design concepts and layout options" },
  { icon: FileText, title: "Technical Drawings", description: "Detailed 2D and 3D technical documentation" },
  { icon: CheckCircle, title: "Client Approval", description: "Review and sign-off on final design" },
  { icon: Wrench, title: "Manufacturing Drawings", description: "Production-ready drawings for workshop" },
  { icon: Building, title: "Production", description: "Manufacturing support and quality control" },
  { icon: Home, title: "Installation", description: "On-site installation supervision" },
]

export function ProcessSection() {
  return (
    <section className="py-24 bg-white dark:bg-matte-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Design Process"
          subtitle="A structured approach to furniture design, from initial consultation through to installation."
        />

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-800 hidden md:block" />

          <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-16 md:pl-0"
              >
                <div className="hidden md:flex items-center justify-center w-16 h-16 rounded-full bg-wood/10 border-2 border-wood/20 mb-4">
                  <step.icon className="w-6 h-6 text-wood" />
                </div>
                <div className="md:hidden absolute left-0 top-0 w-12 h-12 rounded-full bg-wood/10 border-2 border-wood/20 flex items-center justify-center">
                  <step.icon className="w-5 h-5 text-wood" />
                </div>
                <span className="text-xs font-semibold text-wood uppercase tracking-wider mb-1 block">
                  Step {i + 1}
                </span>
                <h3 className="text-lg font-semibold text-charcoal dark:text-white mb-1">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
