"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { SectionTitle } from "@/components/ui/section-title"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin } from "lucide-react"

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="py-24 bg-gray-50 dark:bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Get in Touch"
          subtitle="Have a project in mind? Let's discuss how I can help with your furniture design needs."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-wood/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-wood" />
              </div>
              <div>
                <h3 className="font-semibold text-charcoal dark:text-white">Email</h3>
                <p className="text-gray-500 dark:text-gray-400">brianmlilo261102@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-wood/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-wood" />
              </div>
              <div>
                <h3 className="font-semibold text-charcoal dark:text-white">Phone</h3>
                <p className="text-gray-500 dark:text-gray-400">+263 78 009 9553</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-wood/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-wood" />
              </div>
              <div>
                <h3 className="font-semibold text-charcoal dark:text-white">Location</h3>
                <p className="text-gray-500 dark:text-gray-400">Victoria Falls, Zimbabwe</p>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden h-64 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
              <MapPin className="w-8 h-8 text-gray-400" />
              <span className="ml-2 text-gray-400">Map placeholder</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-charcoal dark:text-white mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-matte-black text-charcoal dark:text-white focus:outline-none focus:ring-2 focus:ring-wood focus:border-transparent transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-charcoal dark:text-white mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-matte-black text-charcoal dark:text-white focus:outline-none focus:ring-2 focus:ring-wood focus:border-transparent transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-charcoal dark:text-white mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-matte-black text-charcoal dark:text-white focus:outline-none focus:ring-2 focus:ring-wood focus:border-transparent transition-all"
                  placeholder="What is this regarding?"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-charcoal dark:text-white mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-matte-black text-charcoal dark:text-white focus:outline-none focus:ring-2 focus:ring-wood focus:border-transparent transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <Button type="submit" variant="primary" size="lg" className="w-full">
                {submitted ? "Message Sent!" : "Send Message"}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
