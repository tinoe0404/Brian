"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { SectionTitle } from "@/components/ui/section-title"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { getFeaturedProjects } from "@/data/projects"

export function FeaturedProject() {
  const projects = getFeaturedProjects()

  if (projects.length === 0) return null

  const project = projects[0]

  return (
    <section className="py-24 bg-gray-50 dark:bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Featured Project"
          subtitle="A selection of recent work showcasing technical precision and design excellence."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="group relative overflow-hidden rounded-2xl bg-white dark:bg-matte-black border border-gray-100 dark:border-gray-800"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="aspect-[4/3] bg-gray-200 dark:bg-gray-700 overflow-hidden">
              <div className="w-full h-full flex items-center justify-center text-gray-400 dark:text-gray-500">
                <svg className="w-32 h-32" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <Badge variant="wood" className="mb-4 w-fit">
                {project.category}
              </Badge>
              <h3 className="text-2xl md:text-3xl font-bold text-charcoal dark:text-white mb-3">
                {project.title}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-500 dark:text-gray-400">
                <span>Client: {project.client}</span>
                <span>Year: {project.year}</span>
              </div>
              <Link href={`/portfolio/${project.slug}`}>
                <Button variant="primary">
                  View Project Details
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
