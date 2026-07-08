"use client"

import { motion } from "framer-motion"
import { SectionTitle } from "@/components/ui/section-title"
import { StarRating } from "@/components/ui/star-rating"
import { testimonials } from "@/data/testimonials"

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-white dark:bg-matte-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="What Clients Say"
          subtitle="Feedback from architects, interior designers, and manufacturers I've worked with."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-8 rounded-xl bg-gray-50 dark:bg-charcoal/50 border border-gray-100 dark:border-gray-800"
            >
              <StarRating rating={testimonial.rating} className="mb-4" />
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 italic">
                &ldquo;{testimonial.review}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-600 flex items-center justify-center text-gray-500 dark:text-gray-400 text-sm font-medium">
                  {testimonial.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <p className="font-semibold text-charcoal dark:text-white text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
