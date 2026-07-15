"use client"

import { motion } from "framer-motion"
import { SectionTitle } from "@/components/ui/section-title"
import { AnimatedCounter } from "@/components/ui/animated-counter"
import { stats } from "@/data/skills"
import Image from "next/image"

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-gray-50 dark:bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="About Me"
          subtitle="Bespoke & Custom Technical Design offering more than just furniture with unique ideas."
          align="left"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="aspect-[4/5] rounded-2xl bg-gray-200 dark:bg-gray-700 overflow-hidden relative">
              <Image
                src="/brian-profile.jpg"
                alt="Brian Mlilo at work"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
              With over 3 years of experience in technical design, I create bespoke and custom pieces, offering much more than just furniture. I help bring unique ideas to life.
            </p>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
              Based in Victoria Falls, I am readily available for hiring on short or long contracts. My international documentation is ready, ensuring seamless collaboration across borders.
            </p>

            <div className="pt-6 flex flex-wrap gap-12">
              <div>
                <AnimatedCounter target={stats.projectsCompleted} suffix="+" />
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Projects Completed</p>
              </div>
              <div>
                <AnimatedCounter target={stats.yearsOfExperience} suffix="+" />
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Years Experience</p>
              </div>
              <div>
                <AnimatedCounter target={stats.happyClients} suffix="%" />
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Happy Clients</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
