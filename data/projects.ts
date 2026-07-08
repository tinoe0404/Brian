import { Project } from "@/lib/types"

export const projects: Project[] = [
  {
    id: "luxury-oak-kitchen",
    title: "Luxury Oak Kitchen",
    slug: "luxury-oak-kitchen",
    category: "Kitchen",
    categories: ["Kitchen", "Residential", "Custom Furniture"],
    client: "Private Residence – Chelsea, London",
    year: 2024,
    software: ["AutoCAD", "Fusion 360", "KeyShot"],
    heroImage: "/images/kitchen-hero.jpg",
    images: [
      { src: "/images/kitchen-1.jpg", alt: "Kitchen overview", width: 1200, height: 800 },
      { src: "/images/kitchen-2.jpg", alt: "Kitchen detail", width: 800, height: 1000 },
      { src: "/images/kitchen-3.jpg", alt: "Kitchen island", width: 1200, height: 800 },
    ],
    description:
      "A complete bespoke kitchen design for a luxury residential project in Chelsea. The design features custom oak cabinetry with integrated handles, soft-close mechanisms, and a minimalist aesthetic that complements the open-plan living space.",
    challenges:
      "The kitchen needed to accommodate a complex layout with multiple angled walls while maintaining a seamless flow between cooking, dining, and living areas. The client requested maximum storage without visible handles or hardware.",
    solutions:
      "Developed a parametric model in Fusion 360 to optimize the cabinet layout for the irregular space. Designed custom push-to-open mechanisms and integrated LED lighting within the cabinet reveals. Created detailed shop drawings for the manufacturer.",
    overview:
      "This luxury oak kitchen was designed for a penthouse apartment in Chelsea. The project required a complete technical design package including layout plans, elevations, section details, joinery specifications, and 3D renders.",
    objectives:
      "Create a functional yet beautiful kitchen that maximizes storage, integrates high-end appliances, and maintains clean, minimalist lines throughout.",
    process:
      "The project began with detailed site measurements and client consultations. Concept sketches evolved into CAD layout plans, which were refined through multiple iterations. Once approved, full technical drawings were produced for manufacturing.",
    sketches: ["/images/sketch-1.jpg", "/images/sketch-2.jpg"],
    cadDrawings: ["/images/cad-1.jpg", "/images/cad-2.jpg", "/images/cad-3.jpg"],
    renders: ["/images/render-1.jpg", "/images/render-2.jpg"],
    materials: [
      { name: "European Oak", description: "Fumed and wire-brushed for texture" },
      { name: "Quartz Worktop", description: "Calacatta marble-look quartz" },
      { name: "Brass Hardware", description: "Custom brass pulls and fixtures" },
    ],
    dimensions: "6.2m x 4.8m (L-shaped layout)",
    manufacturingNotes:
      "All cabinetry constructed using 18mm birch plywood with solid oak veneer. Dovetail joinery used for drawer boxes. Soft-close Blum hardware throughout.",
    outcome:
      "The completed kitchen exceeds the client's expectations. The design has been featured in a design publication and has led to three additional projects in the same building.",
    relatedProjects: ["modern-office-workstations", "custom-walkin-wardrobe"],
    featured: true,
  },
  {
    id: "modern-office-workstations",
    title: "Modern Office Workstations",
    slug: "modern-office-workstations",
    category: "Office Furniture",
    categories: ["Office Furniture", "Commercial"],
    client: "TechCorp Solutions – Canary Wharf",
    year: 2024,
    software: ["SolidWorks", "AutoCAD", "Lumion"],
    heroImage: "/images/office-hero.jpg",
    images: [
      { src: "/images/office-1.jpg", alt: "Office overview", width: 1200, height: 800 },
      { src: "/images/office-2.jpg", alt: "Workstation detail", width: 800, height: 1000 },
    ],
    description:
      "Design and technical documentation for 120 height-adjustable workstations for a tech company's headquarters. The design focused on ergonomics, cable management, and creating collaborative zones.",
    challenges:
      "Integrating extensive cable management within slim-profile desking while maintaining adjustability. The client needed workstations that could be reconfigured as teams grew.",
    solutions:
      "Designed a modular aluminum extrusion framework with snap-in cable trays and removable modesty panels. Created comprehensive manufacturing drawings for the fabricator.",
    overview:
      "A complete office furniture system designed for a leading tech company's headquarters in Canary Wharf, London.",
    objectives:
      "Create ergonomic, height-adjustable workstations that promote movement and collaboration while hiding all technology infrastructure.",
    process:
      "Conducted ergonomic research and workplace assessments. Developed 3D models in SolidWorks for structural testing. Produced full manufacturing documentation.",
    sketches: ["/images/sketch-3.jpg"],
    cadDrawings: ["/images/cad-4.jpg", "/images/cad-5.jpg"],
    renders: ["/images/render-3.jpg"],
    materials: [
      { name: "Powder-coated Aluminum", description: "Frame and legs" },
      { name: "Laminate Worktop", description: "Textured white laminate" },
      { name: "Acoustic Felt", description: "Panel dividers in wool blend" },
    ],
    dimensions: "1600mm x 800mm per workstation",
    manufacturingNotes:
      "Aluminum frames CNC-cut and powder coated. Worktops CNC-routed with integrated cable ports. Flat-pack design for efficient shipping.",
    outcome:
      "Successfully delivered 120 workstations on time and within budget. The client reported a 25% increase in employee satisfaction with the new setup.",
    relatedProjects: ["executive-boardroom-furniture"],
    featured: true,
  },
  {
    id: "custom-walkin-wardrobe",
    title: "Custom Walk-in Wardrobe",
    slug: "custom-walkin-wardrobe",
    category: "Wardrobes",
    categories: ["Wardrobes", "Residential", "Storage"],
    client: "Private Residence – Mayfair",
    year: 2023,
    software: ["AutoCAD", "SketchUp", "Twinmotion"],
    heroImage: "/images/wardrobe-hero.jpg",
    images: [
      { src: "/images/wardrobe-1.jpg", alt: "Wardrobe interior", width: 800, height: 1000 },
      { src: "/images/wardrobe-2.jpg", alt: "Drawer detail", width: 800, height: 800 },
    ],
    description:
      "A fully custom walk-in wardrobe featuring integrated LED lighting, glass display cases for accessories, and bespoke joinery throughout.",
    challenges:
      "Working within a room with irregular ceiling heights and existing structural columns that needed to be incorporated into the design.",
    solutions:
      "Created a parametric SketchUp model to explore layout options. Designed custom cabinetry that wrapped around the structural elements, turning them into design features.",
    overview:
      "A luxury walk-in wardrobe designed for a Mayfair residence, combining storage functionality with display aesthetics.",
    objectives:
      "Design a wardrobe that stores an extensive clothing and accessories collection while displaying items like a boutique retail space.",
    process:
      "Detailed inventory of client's wardrobe. Space analysis and 3D modeling. Iterative design with client feedback. Technical drawing production.",
    sketches: ["/images/sketch-4.jpg"],
    cadDrawings: ["/images/cad-6.jpg", "/images/cad-7.jpg"],
    renders: ["/images/render-4.jpg"],
    materials: [
      { name: "Walnut Veneer", description: "American black walnut" },
      { name: "Tempered Glass", description: "Smoked glass for display cabinets" },
      { name: "LED Strip Lighting", description: "Integrated dimmable system" },
    ],
    dimensions: "5.4m x 3.2m",
    manufacturingNotes:
      "MDF core with walnut veneer, lacquered finish. Glass shelves with polished edges. All joinery mortise and tenon construction.",
    outcome:
      "The client described it as 'the best room in the house.' The project was featured in a luxury interiors magazine.",
    relatedProjects: ["luxury-oak-kitchen"],
    featured: false,
  },
  {
    id: "hotel-reception-desk",
    title: "Hotel Reception Desk",
    slug: "hotel-reception-desk",
    category: "Commercial",
    categories: ["Commercial", "Hospitality", "Custom Furniture"],
    client: "Boutique Hotel – Shoreditch",
    year: 2023,
    software: ["Fusion 360", "AutoCAD", "KeyShot"],
    heroImage: "/images/hotel-hero.jpg",
    images: [
      { src: "/images/hotel-1.jpg", alt: "Reception desk front", width: 1200, height: 800 },
      { src: "/images/hotel-2.jpg", alt: "Detail view", width: 800, height: 1000 },
    ],
    description:
      "A sculptural reception desk that serves as the centerpiece of a boutique hotel lobby. The flowing organic form contrasts with the industrial interior.",
    challenges:
      "Creating a complex curved form that could be manufactured using CNC technology while maintaining structural integrity and hiding all IT infrastructure.",
    solutions:
      "Developed the form in Fusion 360 using T-spline modeling. The desk was segmented into manageable CNC-cut sections with hidden joinery. Integrated cable management and workstation for staff.",
    overview:
      "A statement reception desk designed as the focal point of a boutique hotel's lobby in Shoreditch, London.",
    objectives:
      "Create a dramatic entrance piece that reflects the hotel's design-forward identity while being fully functional for hotel operations.",
    process:
      "Concept sketches and mood boards. 3D modeling and form development. Structural analysis. CNC file preparation. On-site assembly supervision.",
    sketches: ["/images/sketch-5.jpg"],
    cadDrawings: ["/images/cad-8.jpg", "/images/cad-9.jpg"],
    renders: ["/images/render-5.jpg"],
    materials: [
      { name: "MDF", description: "CNC-cut and laminated" },
      { name: "High-gloss Lacquer", description: "Automotive-grade finish" },
      { name: "Brushed Brass", description: "Accent trim" },
    ],
    dimensions: "4.2m x 1.1m x 1.05m",
    manufacturingNotes:
      "Desk constructed from 28 CNC-machined sections. Steel reinforcement frame within. Automotive-grade lacquer applied in sprayed booth.",
    outcome:
      "The desk has become an Instagram-worthy feature for the hotel. Featured in multiple design blogs and publications.",
    relatedProjects: ["restaurant-seating-system"],
    featured: true,
  },
  {
    id: "executive-boardroom-furniture",
    title: "Executive Boardroom Furniture",
    slug: "executive-boardroom-furniture",
    category: "Office Furniture",
    categories: ["Office Furniture", "Commercial"],
    client: "Law Firm – City of London",
    year: 2023,
    software: ["SolidWorks", "AutoCAD", "Lumion"],
    heroImage: "/images/boardroom-hero.jpg",
    images: [
      { src: "/images/boardroom-1.jpg", alt: "Boardroom table", width: 1200, height: 800 },
      { src: "/images/boardroom-2.jpg", alt: "Chair detail", width: 800, height: 1000 },
    ],
    description:
      "Complete boardroom furniture package including a 6-meter conference table, 16 executive chairs, and AV-integrated joinery.",
    challenges:
      "Integrating extensive AV technology within the table while maintaining a clean, minimalist appearance. The table needed to accommodate 16 people without visual clutter.",
    solutions:
      "Designed a custom cable management spine within the table's center. Pop-up power and data modules flush with the table surface. Integrated wireless charging zones.",
    overview:
      "A complete boardroom furniture solution for a prestigious law firm's headquarters in the City of London.",
    objectives:
      "Create a sophisticated boardroom that projects authority and success while providing seamless technology integration.",
    process:
      "Met with stakeholders to understand AV requirements. Developed table concepts. Full technical drawings and joinery specifications. Prototype review and refinement.",
    sketches: ["/images/sketch-6.jpg"],
    cadDrawings: ["/images/cad-10.jpg"],
    renders: ["/images/render-6.jpg"],
    materials: [
      { name: "Macassar Ebony Veneer", description: "Table surface" },
      { name: "Chrome-plated Steel", description: "Table legs" },
      { name: "Italian Leather", description: "Chair upholstery" },
    ],
    dimensions: "6.0m x 1.8m (conference table)",
    manufacturingNotes:
      "Table constructed from marine-grade ply core with Macassar ebony veneer. High-gloss polyester finish. CNC-cut and hand-finished.",
    outcome:
      "The boardroom has become the firm's primary client meeting space. The partners praised the design's balance of tradition and modernity.",
    relatedProjects: ["modern-office-workstations", "hotel-reception-desk"],
    featured: false,
  },
  {
    id: "restaurant-seating-system",
    title: "Restaurant Seating System",
    slug: "restaurant-seating-system",
    category: "Hospitality",
    categories: ["Hospitality", "Commercial", "Custom Furniture"],
    client: "Michelin-starred Restaurant – Soho",
    year: 2022,
    software: ["SketchUp", "AutoCAD", "Twinmotion"],
    heroImage: "/images/restaurant-hero.jpg",
    images: [
      { src: "/images/restaurant-1.jpg", alt: "Restaurant interior", width: 1200, height: 800 },
      { src: "/images/restaurant-2.jpg", alt: "Seating detail", width: 800, height: 1000 },
    ],
    description:
      "Custom seating system for a Michelin-starred restaurant including banquettes, dining chairs, bar stools, and private dining seating.",
    challenges:
      "Creating a cohesive seating family that works across multiple dining zones with different spatial requirements while maintaining consistent design language.",
    solutions:
      "Developed a modular seating system with shared design DNA. Created detailed specifications for the upholsterer including foam density recommendations and seam placement.",
    overview:
      "A comprehensive seating system designed for a Michelin-starred restaurant in Soho, encompassing all dining areas.",
    objectives:
      "Design comfortable, durable seating that complements the restaurant's culinary philosophy and interior design.",
    process:
      "Visited the space, understood the flow. Tested ergonomics with prototypes. Coordinated with interior designer. Produced manufacturing drawings.",
    sketches: ["/images/sketch-7.jpg"],
    cadDrawings: ["/images/cad-11.jpg"],
    renders: ["/images/render-7.jpg"],
    materials: [
      { name: "Beech Wood", description: "Frame, steam-bent" },
      { name: "Velvet", description: "Upholstery, stain-resistant" },
      { name: "Brass", description: "Leg tips and accents" },
    ],
    dimensions: "Various (12 configurations)",
    manufacturingNotes:
      "Beech frames steam-bent for organic curves. Double-dowel joinery at stress points. Commercial-grade upholstery standards.",
    outcome:
      "The seating system received acclaim in restaurant reviews. The design has been referenced in hospitality design publications.",
    relatedProjects: ["hotel-reception-desk"],
    featured: false,
  },
  {
    id: "contemporary-tv-unit",
    title: "Contemporary TV Unit",
    slug: "contemporary-tv-unit",
    category: "Custom Furniture",
    categories: ["Custom Furniture", "Residential", "Storage"],
    client: "Private Client – Islington",
    year: 2022,
    software: ["AutoCAD", "Fusion 360", "KeyShot"],
    heroImage: "/images/tvunit-hero.jpg",
    images: [
      { src: "/images/tvunit-1.jpg", alt: "TV unit front", width: 1200, height: 800 },
      { src: "/images/tvunit-2.jpg", alt: "Detail", width: 800, height: 800 },
    ],
    description:
      "A minimalist floating TV unit with concealed storage, integrated ambient lighting, and a live-edge oak shelf feature.",
    challenges:
      "The client wanted a 'floating' appearance while housing multiple AV components with adequate ventilation, all within a shallow depth.",
    solutions:
      "Designed a steel frame within the unit for wall mounting. Integrated silent fans with temperature sensors for ventilation. Custom cable management channels.",
    overview:
      "A custom TV and media unit designed for a modern apartment living room in Islington, London.",
    objectives:
      "Create a clean, minimalist media wall that hides all technology while providing display space for art and objects.",
    process:
      "Measured the space and identified existing AV components. Designed around specific equipment dimensions. Created detailed joinery drawings.",
    sketches: ["/images/sketch-8.jpg"],
    cadDrawings: ["/images/cad-12.jpg"],
    renders: ["/images/render-8.jpg"],
    materials: [
      { name: "European Oak", description: "Live-edge shelf" },
      { name: "Matte Laminate", description: "Cabinet body in off-white" },
      { name: "Steel", description: "Internal support frame" },
    ],
    dimensions: "2.8m x 0.45m x 0.6m",
    manufacturingNotes:
      "Cabinet boxes from 18mm birch ply with laminate finish. Live-edge oak shelf hand-finished with Danish oil. Steel frame powder-coated.",
    outcome:
      "The unit perfectly integrates into the living space. The client particularly enjoys the ambient lighting feature.",
    relatedProjects: ["luxury-oak-kitchen"],
    featured: false,
  },
  {
    id: "retail-display-cabinets",
    title: "Retail Display Cabinets",
    slug: "retail-display-cabinets",
    category: "Commercial",
    categories: ["Commercial", "Retail", "Custom Furniture"],
    client: "Luxury Fashion Brand – Bond Street",
    year: 2022,
    software: ["AutoCAD", "SolidWorks", "KeyShot"],
    heroImage: "/images/retail-hero.jpg",
    images: [
      { src: "/images/retail-1.jpg", alt: "Display cabinets", width: 1200, height: 800 },
      { src: "/images/retail-2.jpg", alt: "Detail", width: 800, height: 1000 },
    ],
    description:
      "A suite of display cabinets and cases for a luxury fashion brand's flagship store. The design needed to balance security with accessibility and visual appeal.",
    challenges:
      "Integrating high-security locking systems within delicate-looking glass cases. Meeting strict retail brand guidelines while improving display functionality.",
    solutions:
      "Developed concealed locking mechanisms with electronic access control. Designed LED lighting integrated into the cabinet structure. Created detailed hardware specifications.",
    overview:
      "Retail display fixtures for a luxury fashion brand's Bond Street flagship store, combining security with elegant presentation.",
    objectives:
      "Design display cases that protect high-value merchandise while presenting it beautifully and accessibly.",
    process:
      "Brand guideline review. Security assessment. 3D modeling and material selection. Prototype construction and testing. Manufacturing documentation.",
    sketches: ["/images/sketch-9.jpg"],
    cadDrawings: ["/images/cad-13.jpg"],
    renders: ["/images/render-9.jpg"],
    materials: [
      { name: "Tempered Glass", description: "10mm low-iron glass" },
      { name: "Lacquered MDF", description: "High-gloss white" },
      { name: "Stainless Steel", description: "Polished and brushed" },
    ],
    dimensions: "Various (16 units)",
    manufacturingNotes:
      "Glass cases with polished edges and concealed fixings. MDF bodies with automotive-grade lacquer. Electronic locking integration.",
    outcome:
      "The store reported increased engagement with displayed products. The design was rolled out to additional locations.",
    relatedProjects: [],
    featured: false,
  },
  {
    id: "minimalist-kitchen-cabinet-set",
    title: "Minimalist Kitchen Cabinet Set",
    slug: "minimalist-kitchen-cabinet-set",
    category: "Kitchen",
    categories: ["Kitchen", "Residential"],
    client: "Private Residence – Richmond",
    year: 2021,
    software: ["AutoCAD", "SketchUp", "Twinmotion"],
    heroImage: "/images/kitchen2-hero.jpg",
    images: [
      { src: "/images/kitchen2-1.jpg", alt: "Kitchen view", width: 1200, height: 800 },
    ],
    description:
      "A minimalist handleless kitchen with high-gloss lacquer cabinets, integrated appliances, and a large central island.",
    challenges:
      "The room had an uneven floor and non-square walls that required all cabinetry to be custom-fitted on-site.",
    solutions:
      "Designed cabinets with adjustable feet and filler panels. Created site-specific cutting diagrams for on-site adjustments.",
    overview:
      "A complete kitchen fit-out for a modern home extension in Richmond.",
    objectives:
      "Deliver a seamless handleless kitchen that appears custom-built for the space.",
    process:
      "Precise site measurement. Cabinet layout optimization. Technical drawing production. On-site fitting support.",
    sketches: [],
    cadDrawings: ["/images/cad-14.jpg"],
    renders: ["/images/render-10.jpg"],
    materials: [
      { name: "High-gloss Lacquer", description: "Cabinet doors" },
      { name: "Quartz Composite", description: "Worktop and splashback" },
    ],
    dimensions: "5.8m x 3.4m",
    manufacturingNotes:
      "18mm MDF with lacquered finish. Push-to-open mechanisms. Soft-close hinges throughout.",
    outcome:
      "Seamless installation despite challenging room geometry. Client extremely satisfied.",
    relatedProjects: ["luxury-oak-kitchen"],
    featured: false,
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
