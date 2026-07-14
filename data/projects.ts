import { Project } from "@/lib/types"

export const projects: Project[] = [
  {
    id: "confidential-bespoke-furniture",
    title: "Bespoke Furniture Design",
    slug: "confidential-bespoke-furniture",
    category: "Custom Furniture",
    categories: ["Custom Furniture", "Residential", "Commercial"],
    client: "Confidential Client",
    year: 2024,
    software: ["SketchUp", "SolidWorks", "AutoCAD", "CNC"],
    heroImage: "/images/kitchen-hero.jpg",
    images: [
      { src: "/images/kitchen-1.jpg", alt: "Bespoke design detail (blurred)", width: 1200, height: 800 },
    ],
    description:
      "A range of bespoke and custom furniture projects. Please note that full details and imagery are kept confidential to protect client privacy. Specific drawings and pictures may feature blurred or hidden parts to respect this confidentiality.",
    challenges:
      "Ensuring high-end bespoke quality while maintaining strict confidentiality regarding the unique ideas and technical details.",
    solutions:
      "Produced precise CAD templates and prototypes to refine designs before final production, while redacting sensitive details in shared documentation.",
    overview:
      "Various technical design projects focusing on bespoke furniture and unique custom solutions.",
    objectives:
      "Deliver highly detailed manufacturing drawings and templates tailored to specific client needs.",
    process:
      "From initial concept to final CNC templates and production-ready drawings.",
    sketches: [],
    cadDrawings: ["/images/cad-1.jpg"],
    renders: [],
    materials: [
      { name: "Various Custom Materials", description: "Selected per client requirements" },
    ],
    dimensions: "Custom",
    manufacturingNotes:
      "Detailed notes and templates provided for precision manufacturing and CNC routing.",
    outcome:
      "Successful delivery of high-quality bespoke furniture with complete technical support.",
    relatedProjects: [],
    featured: true,
  },
]

export const categories = [
  "All",
  "Kitchen",
  "Office Furniture",
  "Wardrobes",
  "Commercial",
  "Hospitality",
  "Custom Furniture",
  "Retail",
  "Residential",
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured)
}

export function getRelatedProjects(slugs: string[]): Project[] {
  return projects.filter((p) => slugs.includes(p.slug))
}
