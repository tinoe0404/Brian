"use client"

import { motion } from "framer-motion"
import { SectionTitle } from "@/components/ui/section-title"
import { Badge } from "@/components/ui/badge"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { ScrollProgress } from "@/components/ui/scroll-progress"
import { BackToTop } from "@/components/ui/back-to-top"
import { FloatingWhatsApp } from "@/components/ui/floating-whatsapp"
import { AnimatedCounter } from "@/components/ui/animated-counter"
import { skillCategories, stats } from "@/data/skills"
import { timelineItems } from "@/data/timeline"
import { certifications } from "@/data/certifications"
import { Modal } from "@/components/ui/modal"
import { useState } from "react"

export default function AboutPage() {
  const [selectedCert, setSelectedCert] = useState<null | (typeof certifications)[0]>(null)

  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main className="pt-20">
        <section className="py-24 bg-white dark:bg-matte-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle
              title="About Me"
              subtitle="A Furniture Draftsman with over 12 years of experience in technical design and manufacturing documentation."
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="aspect-[4/5] rounded-2xl bg-gray-200 dark:bg-gray-700 overflow-hidden flex items-center justify-center">
                  <svg className="w-32 h-32 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-6"
              >
                <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                  With over a decade of experience in furniture design and technical documentation, I help architects, interior designers, and manufacturers bring their furniture concepts to life with precision and clarity.
                </p>
                <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                  My background in both furniture making and CAD technology allows me to create drawings that are not just accurate but truly production-ready. I understand how furniture is built, not just how it looks.
                </p>
                <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                  Based in London, I work on projects ranging from bespoke residential furniture to large-scale commercial fit-outs, always maintaining the same commitment to quality and precision.
                </p>
                <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                  My design philosophy centers on the belief that great furniture starts with great documentation. Every line, dimension, and note on a drawing represents a decision that affects the final piece. I take that responsibility seriously.
                </p>

                <div className="pt-4 flex flex-wrap gap-10">
                  <div>
                    <AnimatedCounter target={stats.projectsCompleted} suffix="+" />
                    <p className="text-sm text-gray-500 mt-1">Projects Completed</p>
                  </div>
                  <div>
                    <AnimatedCounter target={stats.yearsOfExperience} suffix="+" />
                    <p className="text-sm text-gray-500 mt-1">Years Experience</p>
                  </div>
                  <div>
                    <AnimatedCounter target={stats.happyClients} suffix="%" />
                    <p className="text-sm text-gray-500 mt-1">Happy Clients</p>
                  </div>
                </div>
              </motion.div>
            </div>

            <SectionTitle
              title="Experience & Education"
              subtitle="My professional journey in furniture design and technical documentation."
              align="left"
              className="mb-12"
            />

            <div className="relative mb-24">
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-800 -translate-x-1/2" />
              <div className="space-y-12">
                {timelineItems.map((item, i) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className={`relative flex flex-col md:flex-row gap-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                  >
                    <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                      <span className="text-xs font-semibold text-wood uppercase tracking-wider">{item.date}</span>
                      <h3 className="text-xl font-bold text-charcoal dark:text-white mt-1">{item.title}</h3>
                      <p className="text-gray-500 dark:text-gray-400 font-medium">{item.subtitle}</p>
                      <p className="text-gray-500 dark:text-gray-400 text-sm mt-2 leading-relaxed">{item.description}</p>
                    </div>
                    <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-wood border-4 border-white dark:border-matte-black -translate-x-1/2 mt-1.5" />
                    <div className="flex-1" />
                  </motion.div>
                ))}
              </div>
            </div>

            <SectionTitle
              title="Technical Skills"
              subtitle="Proficient in industry-standard software and technical disciplines."
              align="left"
              className="mb-12"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
              {skillCategories.map((category, i) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="p-6 rounded-xl bg-gray-50 dark:bg-charcoal/50 border border-gray-100 dark:border-gray-800"
                >
                  <h3 className="text-lg font-semibold text-charcoal dark:text-white mb-4">{category.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge key={skill} variant="outline">{skill}</Badge>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            <SectionTitle
              title="Certifications"
              subtitle="Professional certifications and qualifications."
              align="left"
              className="mb-12"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, i) => (
                <motion.button
                  key={cert.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -4 }}
                  onClick={() => setSelectedCert(cert)}
                  className="p-6 rounded-xl bg-white dark:bg-matte-black border border-gray-100 dark:border-gray-800 text-left hover:shadow-lg hover:border-wood/30 transition-all"
                >
                  <div className="w-full aspect-[4/3] rounded-lg bg-gray-100 dark:bg-gray-800 mb-4 flex items-center justify-center">
                    <svg className="w-12 h-12 text-gray-300 dark:text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-charcoal dark:text-white">{cert.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{cert.issuer} — {cert.year}</p>
                </motion.button>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
      <FloatingWhatsApp />

      <Modal isOpen={!!selectedCert} onClose={() => setSelectedCert(null)}>
        {selectedCert && (
          <div className="p-8">
            <div className="w-full aspect-[4/3] rounded-lg bg-gray-100 dark:bg-gray-800 mb-6 flex items-center justify-center">
              <svg className="w-16 h-16 text-gray-300 dark:text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-charcoal dark:text-white mb-2">{selectedCert.title}</h2>
            <p className="text-gray-500 dark:text-gray-400 mb-4">{selectedCert.issuer} — {selectedCert.year}</p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{selectedCert.description}</p>
          </div>
        )}
      </Modal>
    </>
  )
}
