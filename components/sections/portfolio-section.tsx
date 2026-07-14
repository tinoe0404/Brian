"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { SectionTitle } from "@/components/ui/section-title"
import { Badge } from "@/components/ui/badge"
import { Search } from "lucide-react"
import { projects, categories } from "@/data/projects"
import { cn } from "@/lib/utils"

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  const filtered = projects.filter((project) => {
    const matchesCategory = activeCategory === "All" || project.categories.includes(activeCategory)
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.client.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <section id="portfolio" className="py-24 bg-white dark:bg-matte-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Portfolio"
          subtitle="A selection of projects showcasing technical precision and design excellence across residential and commercial sectors."
        />

        <div className="flex flex-col sm:flex-row items-center gap-4 mb-10">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-matte-black text-charcoal dark:text-white focus:outline-none focus:ring-2 focus:ring-wood focus:border-transparent text-sm"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                  activeCategory === cat
                    ? "bg-wood text-white"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory + searchQuery}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <div className="group block">
                  <div className="rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-all duration-300">
                    <div className="aspect-[4/3] bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                      <svg className="w-20 h-20 text-gray-400 dark:text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="p-6">
                      <Badge variant="wood" className="mb-3">{project.category}</Badge>
                      <h3 className="text-lg font-semibold text-charcoal dark:text-white group-hover:text-wood transition-colors mb-2">
                        {project.title}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-3 line-clamp-2">
                        {project.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-400">{project.client}</span>
                        <span className="text-xs text-gray-400">{project.year}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500">No projects found matching your criteria.</p>
          </div>
        )}
      </div>
    </section>
  )
}
