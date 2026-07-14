"use client"

import Link from "next/link"
import { ArrowUp, MessageCircle, Globe, Camera } from "lucide-react"

const quickLinks = [
  { href: "/#about", label: "About" },
  { href: "/#portfolio", label: "Portfolio" },
  { href: "/#services", label: "Services" },
  { href: "/#resume", label: "Resume" },
  { href: "/#blog", label: "Blog" },
  { href: "/#contact", label: "Contact" },
]

const serviceLinks = [
  { href: "/#services", label: "Technical Drawings" },
  { href: "/#services", label: "Cabinet Design" },
  { href: "/#services", label: "3D Modeling" },
  { href: "/#services", label: "Manufacturing Support" },
]

const socialLinks = [
  { href: "#", label: "LinkedIn", icon: Globe },
  { href: "#", label: "Instagram", icon: Camera },
  { href: "#", label: "WhatsApp", icon: MessageCircle },
]

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-matte-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <Link href="/" className="text-2xl font-bold font-heading">
              Brian<span className="text-wood">.</span>
            </Link>
            <p className="mt-4 text-gray-400 text-sm leading-relaxed">
              Furniture Draftsman & Technical Designer specializing in bespoke furniture design, technical documentation, and manufacturing support.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-wood transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-400 hover:text-wood transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">
              Connect
            </h3>
            <div className="flex gap-3 mb-6">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/10 hover:bg-wood transition-colors"
                  aria-label={link.label}
                >
                  <link.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            <p className="text-gray-400 text-sm">hello@brian.design</p>
            <p className="text-gray-400 text-sm mt-1">+263 78 009 9553</p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Brian Mlilo. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-gray-400 hover:text-wood transition-colors text-sm"
            aria-label="Back to top"
          >
            Back to top <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  )
}
