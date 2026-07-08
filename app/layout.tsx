import type { Metadata } from "next"
import { Inter, Manrope } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
})

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "Brian — Furniture Draftsman & Technical Designer",
    template: "%s | Brian — Furniture Draftsman",
  },
  description:
    "Precision furniture design and technical documentation for architects, interior designers, and manufacturers. Specializing in bespoke furniture, cabinetry, and production drawings.",
  keywords: [
    "furniture draftsman",
    "technical designer",
    "furniture design",
    "CAD drawings",
    "shop drawings",
    "production drawings",
    "kitchen design",
    "cabinet design",
    "London furniture designer",
  ],
  authors: [{ name: "Brian" }],
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Brian — Furniture Draftsman",
    title: "Brian — Furniture Draftsman & Technical Designer",
    description:
      "Precision furniture design and technical documentation for architects, interior designers, and manufacturers.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brian — Furniture Draftsman & Technical Designer",
    description:
      "Precision furniture design and technical documentation for architects, interior designers, and manufacturers.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Brian",
              jobTitle: "Furniture Draftsman & Technical Designer",
              description:
                "Precision furniture design and technical documentation for architects, interior designers, and manufacturers.",
              url: "https://brian.design",
              sameAs: ["#", "#", "#"],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white dark:bg-matte-black text-charcoal dark:text-white">
        {children}
      </body>
    </html>
  )
}
