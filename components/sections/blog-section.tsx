"use client"

import { motion } from "framer-motion"
import { SectionTitle } from "@/components/ui/section-title"
import { Badge } from "@/components/ui/badge"
import { blogPosts } from "@/data/blog"
import { Calendar } from "lucide-react"

export function BlogSection() {
  return (
    <section id="blog" className="py-24 bg-gray-50 dark:bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Blog"
          subtitle="Articles on furniture design, technical drawing, CAD tutorials, and industry insights."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="group block">
                <div className="rounded-xl overflow-hidden bg-white dark:bg-matte-black border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-shadow">
                  <div className="aspect-[16/9] bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                    <svg className="w-20 h-20 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                    </svg>
                  </div>
                  <div className="p-6">
                    <Badge variant="wood" className="mb-3">{post.category}</Badge>
                    <h3 className="text-lg font-semibold text-charcoal dark:text-white group-hover:text-wood transition-colors mb-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
