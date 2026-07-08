"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { SectionTitle } from "@/components/ui/section-title"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { ScrollProgress } from "@/components/ui/scroll-progress"
import { BackToTop } from "@/components/ui/back-to-top"
import { FloatingWhatsApp } from "@/components/ui/floating-whatsapp"
import { Lightbox } from "@/components/ui/lightbox"
import { galleryItems, galleryCategories } from "@/data/gallery"
import { cn } from "@/lib/utils"

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [lightboxIndex, setLightboxIndex] = useState(-1)

  const filtered = activeCategory === "All"
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory)

  const lightboxImages = filtered.map((item) => ({ src: item.src, alt: item.alt }))

  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main className="pt-20">
        <section className="py-24 bg-white dark:bg-matte-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle
              title="Gallery"
              subtitle="A visual collection of furniture projects, technical drawings, renders, and workshop photography."
            />

            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {galleryCategories.map((cat) => (
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

            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
              >
                {filtered.map((item, i) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.03 }}
                    layout
                    onClick={() => setLightboxIndex(i)}
                    className="group aspect-square rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 relative"
                  >
                    <div className="w-full h-full flex items-center justify-center">
                      <svg className="w-16 h-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-end p-4">
                      <p className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                        {item.title}
                      </p>
                    </div>
                  </motion.button>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
      <FloatingWhatsApp />

      <Lightbox
        images={lightboxImages}
        currentIndex={Math.max(0, lightboxIndex)}
        isOpen={lightboxIndex >= 0}
        onClose={() => setLightboxIndex(-1)}
      />
    </>
  )
}
