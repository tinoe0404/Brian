"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { SectionTitle } from "@/components/ui/section-title"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { ScrollProgress } from "@/components/ui/scroll-progress"
import { BackToTop } from "@/components/ui/back-to-top"
import { FloatingWhatsApp } from "@/components/ui/floating-whatsapp"
import { Mail, Phone, MapPin, MessageCircle, Globe, Camera } from "lucide-react"

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main className="pt-20">
        <section className="py-24 bg-white dark:bg-matte-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle
              title="Contact"
              subtitle="Have a project in mind? Let's discuss how I can help with your furniture design requirements."
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-wood/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-wood" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal dark:text-white text-lg">Email</h3>
                    <p className="text-gray-500 dark:text-gray-400">hello@brian.design</p>
                    <p className="text-sm text-gray-400 mt-1">I typically respond within 24 hours.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-wood/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-wood" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal dark:text-white text-lg">Phone</h3>
                    <p className="text-gray-500 dark:text-gray-400">+44 7700 000000</p>
                    <p className="text-sm text-gray-400 mt-1">Available weekdays 9am — 6pm.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-wood/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-wood" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal dark:text-white text-lg">Location</h3>
                    <p className="text-gray-500 dark:text-gray-400">London, United Kingdom</p>
                    <p className="text-sm text-gray-400 mt-1">Available for projects across the UK and internationally.</p>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-charcoal dark:text-white text-lg mb-4">Connect Online</h3>
                  <div className="flex gap-3">
                    <a href="#" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-wood hover:text-white transition-colors">
                      <Globe className="w-5 h-5" />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-wood hover:text-white transition-colors">
                      <Camera className="w-5 h-5" />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-wood hover:text-white transition-colors">
                      <MessageCircle className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                <div className="rounded-xl overflow-hidden h-64 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-gray-400" />
                  <span className="ml-2 text-gray-400">Map placeholder</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="p-8 rounded-2xl bg-gray-50 dark:bg-charcoal/50 border border-gray-100 dark:border-gray-800">
                  <h3 className="text-xl font-semibold text-charcoal dark:text-white mb-6">Send a Message</h3>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-charcoal dark:text-white mb-2">Name</label>
                        <input type="text" id="name" required className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-matte-black text-charcoal dark:text-white focus:outline-none focus:ring-2 focus:ring-wood focus:border-transparent" placeholder="Your name" />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-charcoal dark:text-white mb-2">Email</label>
                        <input type="email" id="email" required className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-matte-black text-charcoal dark:text-white focus:outline-none focus:ring-2 focus:ring-wood focus:border-transparent" placeholder="your@email.com" />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-charcoal dark:text-white mb-2">Subject</label>
                      <input type="text" id="subject" required className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-matte-black text-charcoal dark:text-white focus:outline-none focus:ring-2 focus:ring-wood focus:border-transparent" placeholder="What is this regarding?" />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-charcoal dark:text-white mb-2">Message</label>
                      <textarea id="message" required rows={6} className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-matte-black text-charcoal dark:text-white focus:outline-none focus:ring-2 focus:ring-wood focus:border-transparent resize-none" placeholder="Tell me about your project..." />
                    </div>
                    <Button type="submit" variant="primary" size="lg" className="w-full">
                      {submitted ? "✓ Message Sent!" : "Send Message"}
                    </Button>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
      <FloatingWhatsApp />
    </>
  )
}
