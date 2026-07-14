import { GalleryItem } from "@/lib/types"

export const galleryItems: GalleryItem[] = [
  { id: "g1", src: "/images/gallery-1.jpg", alt: "Bespoke design detail (blurred)", category: "Furniture", title: "Bespoke Design", width: 1200, height: 800 },
  { id: "g2", src: "/images/gallery-4.jpg", alt: "Technical drawing (redacted)", category: "Technical Drawings", title: "CAD Section Detail", width: 1200, height: 800 },
  { id: "g3", src: "/images/gallery-6.jpg", alt: "Workshop production", category: "Workshop", title: "Workshop Prototype", width: 1200, height: 800 },
  { id: "g4", src: "/images/gallery-11.jpg", alt: "CAD drawing with hidden details", category: "Technical Drawings", title: "Exploded Isometric", width: 1200, height: 800 },
]

export const galleryCategories = [
  "All",
  "Furniture",
  "Cabinets",
  "Wardrobes",
  "Kitchen",
  "Office",
  "Technical Drawings",
  "3D Renders",
  "Workshop",
]
