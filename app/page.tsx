import { Hero } from "@/components/sections/hero"
import { StatsSection } from "@/components/sections/stats-section"
import { AboutSection } from "@/components/sections/about-section"
import { ServicesSection } from "@/components/sections/services-section"
import { FeaturedProject } from "@/components/sections/featured-project"
import { ProcessSection } from "@/components/sections/process-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { SkillsSection } from "@/components/sections/skills-section"
import { ContactSection } from "@/components/sections/contact-section"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { ScrollProgress } from "@/components/ui/scroll-progress"
import { BackToTop } from "@/components/ui/back-to-top"
import { FloatingWhatsApp } from "@/components/ui/floating-whatsapp"

export default function HomePage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <StatsSection />
        <AboutSection />
        <FeaturedProject />
        <ServicesSection />
        <ProcessSection />
        <TestimonialsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
      <BackToTop />
      <FloatingWhatsApp />
    </>
  )
}
