"use client"

import { motion } from "framer-motion"
import { SectionTitle } from "@/components/ui/section-title"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Download, Briefcase, GraduationCap, PenTool } from "lucide-react"
import { timelineItems } from "@/data/timeline"
import { skillCategories } from "@/data/skills"

export function ResumeSection() {
  const employment = timelineItems.filter((t) => t.type === "employment")
  const education = timelineItems.filter((t) => t.type === "education")
  const projects = timelineItems.filter((t) => t.type === "project")

  return (
    <section id="resume" className="py-24 bg-white dark:bg-matte-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-16">
          <SectionTitle
            title="Resume"
            subtitle="Professional experience, education, and qualifications."
            align="left"
            className="mb-0"
          />
          <Button variant="primary">
            <Download className="w-4 h-4" />
            Download Resume
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-lg bg-wood/10 flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-wood" />
                </div>
                <h2 className="text-2xl font-bold text-charcoal dark:text-white">Experience</h2>
              </div>
              <div className="space-y-8">
                {employment.map((item, i) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="relative pl-8 border-l-2 border-wood/30"
                  >
                    <div className="absolute left-0 top-1 w-3 h-3 rounded-full bg-wood -translate-x-[7px]" />
                    <span className="text-sm text-wood font-medium">{item.date}</span>
                    <h3 className="text-lg font-semibold text-charcoal dark:text-white mt-1">{item.title}</h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">{item.subtitle}</p>
                    <p className="text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-lg bg-wood/10 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-wood" />
                </div>
                <h2 className="text-2xl font-bold text-charcoal dark:text-white">Education</h2>
              </div>
              <div className="space-y-8">
                {education.map((item, i) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="relative pl-8 border-l-2 border-wood/30"
                  >
                    <div className="absolute left-0 top-1 w-3 h-3 rounded-full bg-wood -translate-x-[7px]" />
                    <span className="text-sm text-wood font-medium">{item.date}</span>
                    <h3 className="text-lg font-semibold text-charcoal dark:text-white mt-1">{item.title}</h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">{item.subtitle}</p>
                    <p className="text-gray-500 dark:text-gray-400 mt-2">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {projects.length > 0 && (
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-lg bg-wood/10 flex items-center justify-center">
                    <PenTool className="w-5 h-5 text-wood" />
                  </div>
                  <h2 className="text-2xl font-bold text-charcoal dark:text-white">Key Projects</h2>
                </div>
                <div className="space-y-8">
                  {projects.map((item, i) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="relative pl-8 border-l-2 border-wood/30"
                    >
                      <div className="absolute left-0 top-1 w-3 h-3 rounded-full bg-wood -translate-x-[7px]" />
                      <span className="text-sm text-wood font-medium">{item.date}</span>
                      <h3 className="text-lg font-semibold text-charcoal dark:text-white mt-1">{item.title}</h3>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">{item.subtitle}</p>
                      <p className="text-gray-500 dark:text-gray-400 mt-2">{item.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div>
            <div className="sticky top-28 space-y-8">
              {skillCategories.map((category) => (
                <div key={category.title} className="p-6 rounded-xl bg-gray-50 dark:bg-charcoal/50 border border-gray-100 dark:border-gray-800">
                  <h3 className="font-semibold text-charcoal dark:text-white mb-4 text-sm uppercase tracking-wider">
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge key={skill} variant="outline">{skill}</Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
