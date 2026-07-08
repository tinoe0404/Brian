export interface Project {
  id: string
  title: string
  slug: string
  category: string
  categories: string[]
  client: string
  year: number
  software: string[]
  heroImage: string
  images: GalleryImage[]
  description: string
  challenges: string
  solutions: string
  overview: string
  objectives: string
  process: string
  sketches: string[]
  cadDrawings: string[]
  renders: string[]
  materials: { name: string; description: string }[]
  dimensions: string
  manufacturingNotes: string
  outcome: string
  relatedProjects: string[]
  featured: boolean
}

export interface GalleryImage {
  src: string
  alt: string
  width: number
  height: number
}

export interface ServiceCard {
  id: string
  title: string
  description: string
  icon: string
}

export interface SkillCategory {
  title: string
  skills: string[]
}

export interface Testimonial {
  id: string
  name: string
  company: string
  role: string
  photo: string
  review: string
  rating: number
}

export interface Certification {
  id: string
  title: string
  issuer: string
  year: number
  image: string
  description: string
}

export interface TimelineItem {
  id: string
  type: "employment" | "education" | "project"
  title: string
  subtitle: string
  date: string
  description: string
}

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  category: string
  image: string
  author: string
  date: string
  tags: string[]
}

export interface GalleryItem {
  id: string
  src: string
  alt: string
  category: string
  title: string
  width: number
  height: number
}
