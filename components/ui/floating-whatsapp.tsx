"use client"

import { MessageCircle } from "lucide-react"

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/447700000000"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 left-8 z-40 p-3 rounded-full bg-[#25D366] text-white shadow-lg hover:bg-[#20BD5A] transition-colors focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle className="w-5 h-5" />
    </a>
  )
}
