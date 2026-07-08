"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { notFound } from "next/navigation"
import { SectionTitle } from "@/components/ui/section-title"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { ScrollProgress } from "@/components/ui/scroll-progress"
import { BackToTop } from "@/components/ui/back-to-top"
import { FloatingWhatsApp } from "@/components/ui/floating-whatsapp"
import { ArrowLeft, Download, Check } from "lucide-react"
import { getProjectBySlug, getRelatedProjects } from "@/data/projects"
import { Lightbox } from "@/components/ui/lightbox"
import { useState } from "react"

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug)
  const [lightboxIndex, setLightboxIndex] = useState(-1)

  if (!project) notFound()

  const allImages = [
    ...project.images.map((img) => ({ src: img.src, alt: img.alt })),
    ...project.sketches.map((src) => ({ src, alt: `${project.title} sketch` })),
    ...project.cadDrawings.map((src) => ({ src, alt: `${project.title} CAD drawing` })),
    ...project.renders.map((src) => ({ src, alt: `${project.title} render` })),
  ]

  const related = getRelatedProjects(project.relatedProjects)

  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main className="pt-20">
        <section className="py-12 bg-gray-50 dark:bg-charcoal">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/portfolio" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-wood transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" />
              Back to Portfolio
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Badge variant="wood" className="mb-4">{project.category}</Badge>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-charcoal dark:text-white mb-4">
                  {project.title}
                </h1>
                <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-6 text-sm mb-8">
                  <div>
                    <span className="text-gray-400">Client</span>
                    <p className="font-medium text-charcoal dark:text-white">{project.client}</p>
                  </div>
                  <div>
                    <span className="text-gray-400">Year</span>
                    <p className="font-medium text-charcoal dark:text-white">{project.year}</p>
                  </div>
                  <div>
                    <span className="text-gray-400">Software</span>
                    <p className="font-medium text-charcoal dark:text-white">{project.software.join(", ")}</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Button variant="primary">
                    <Download className="w-4 h-4" />
                    Download PDF
                  </Button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="aspect-[4/3] rounded-xl bg-gray-200 dark:bg-gray-700 overflow-hidden cursor-pointer"
                onClick={() => setLightboxIndex(0)}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <svg className="w-32 h-32 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white dark:bg-matte-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-2xl font-bold text-charcoal dark:text-white mb-6">Overview</h2>
                <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-8">{project.overview}</p>

                <h2 className="text-2xl font-bold text-charcoal dark:text-white mb-6">Objectives</h2>
                <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-8">{project.objectives}</p>

                <h2 className="text-2xl font-bold text-charcoal dark:text-white mb-6">Process</h2>
                <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-8">{project.process}</p>

                <h2 className="text-2xl font-bold text-charcoal dark:text-white mb-6">Challenges</h2>
                <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-8">{project.challenges}</p>

                <h2 className="text-2xl font-bold text-charcoal dark:text-white mb-6">Solutions</h2>
                <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-8">{project.solutions}</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-charcoal dark:text-white mb-6">Materials</h2>
                <div className="space-y-4 mb-8">
                  {project.materials.map((material) => (
                    <div key={material.name} className="flex gap-3">
                      <Check className="w-5 h-5 text-wood flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-charcoal dark:text-white">{material.name}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{material.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <h2 className="text-2xl font-bold text-charcoal dark:text-white mb-4">Dimensions</h2>
                <p className="text-gray-500 dark:text-gray-400 mb-8">{project.dimensions}</p>

                <h2 className="text-2xl font-bold text-charcoal dark:text-white mb-4">Manufacturing Notes</h2>
                <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-8">{project.manufacturingNotes}</p>

                <h2 className="text-2xl font-bold text-charcoal dark:text-white mb-4">Outcome</h2>
                <p className="text-gray-500 dark:text-gray-400 leading-relaxed">{project.outcome}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50 dark:bg-charcoal">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle
              title="Gallery"
              subtitle="Sketches, technical drawings, and rendered images from this project."
            />

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {allImages.map((image, i) => (
                <motion.button
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  onClick={() => setLightboxIndex(i)}
                  className="aspect-square rounded-lg bg-gray-200 dark:bg-gray-700 overflow-hidden hover:ring-2 hover:ring-wood transition-all"
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <svg className="w-12 h-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {related.length > 0 && (
          <section className="py-16 bg-white dark:bg-matte-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <SectionTitle
                title="Related Projects"
                subtitle="Explore similar projects."
              />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {related.map((rel, i) => (
                  <motion.div
                    key={rel.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    <Link href={`/portfolio/${rel.slug}`} className="group block">
                      <div className="rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 border border-gray-100 dark:border-gray-800">
                        <div className="aspect-[4/3] bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                          <svg className="w-16 h-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div className="p-6">
                          <Badge variant="wood" className="mb-3">{rel.category}</Badge>
                          <h3 className="text-lg font-semibold text-charcoal dark:text-white group-hover:text-wood transition-colors">{rel.title}</h3>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
      <BackToTop />
      <FloatingWhatsApp />

      <Lightbox
        images={allImages}
        currentIndex={Math.max(0, lightboxIndex)}
        isOpen={lightboxIndex >= 0}
        onClose={() => setLightboxIndex(-1)}
      />
    </>
  )
}
