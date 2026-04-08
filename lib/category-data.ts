export interface CategoryData {
  slug: string
  name: string
  tagline: string
  headline: string
  subheadline: string
  heroImage: string
  eyebrow: string
  stats: { value: string; label: string }[]
  features: { title: string; description: string }[]
  useCases: string[]
  defaultConfig: {
    width: number
    length: number
    height: number
  }
}

export const categories: CategoryData[] = [
  {
    slug: "agricultural",
    name: "Agricultural Buildings",
    tagline: "Built for the Farm",
    headline: "Steel Agricultural Buildings Built to Last",
    subheadline:
      "From hay storage to equipment shelters, our prefabricated steel farm buildings are engineered for durability in all weather conditions. American-made steel, fast delivery, lifetime value.",
    heroImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Rockin-Wild-Ranch-Arena-150x275x18-1-1024x768-1-mhQz3NA6FL6BQ2OVQYCI7jbibtzGDw.webp",
    eyebrow: "Agricultural Structures",
    stats: [
      { value: "40×60", label: "Most Popular Size" },
      { value: "50 Yr", label: "Structural Warranty" },
      { value: "6–8 Wks", label: "Avg. Lead Time" },
      { value: "100%", label: "American Made" },
    ],
    features: [
      {
        title: "Hay & Grain Storage",
        description:
          "Wide clear-span interiors with no interior columns — perfect for storing large volumes of hay, grain, and silage without obstructions.",
      },
      {
        title: "Equipment Shelters",
        description:
          "Protect tractors, combines, and irrigation equipment from weather damage. Oversized sliding doors accommodate any machine.",
      },
      {
        title: "Livestock Housing",
        description:
          "Ventilated wall panels and custom door configurations keep animals comfortable year-round in our livestock barn designs.",
      },
      {
        title: "Multi-Use Barns",
        description:
          "Design a building that handles storage, processing, and workspace all under one roof with custom interior layouts.",
      },
      {
        title: "Irrigation & Utility",
        description:
          "Compact steel utility buildings to house pumps, controls, and irrigation equipment, engineered for rural environments.",
      },
      {
        title: "Cold Climate Engineering",
        description:
          "Heavy snow load ratings and insulation packages available for farms in harsh northern climates.",
      },
    ],
    useCases: [
      "Hay & Feed Storage",
      "Equipment Barn",
      "Livestock Shelter",
      "Grain Storage",
      "Farm Workshop",
      "Irrigation Housing",
    ],
    defaultConfig: { width: 60, length: 100, height: 16 },
  },
  {
    slug: "commercial",
    name: "Commercial Structures",
    tagline: "Built for Business",
    headline: "Pre-Engineered Commercial Steel Buildings",
    subheadline:
      "Fast to build, cost-effective to operate. Our commercial metal buildings deliver maximum usable space with clear-span interiors — no columns interrupting your workflow.",
    heroImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/New-York-metal-warehouse-11fcV0USQBZOT62wUaFNWquzwpEVgd.webp",
    eyebrow: "Commercial Structures",
    stats: [
      { value: "50×100", label: "Most Popular Size" },
      { value: "30%", label: "Avg. Cost Savings" },
      { value: "6–8 Wks", label: "Avg. Lead Time" },
      { value: "100%", label: "American Made" },
    ],
    features: [
      {
        title: "Warehouse & Distribution",
        description:
          "Maximize storage density with high-eave clear-span designs up to 200 ft wide. Loading docks and overhead doors configured to spec.",
      },
      {
        title: "Manufacturing Facilities",
        description:
          "Heavy-duty framing rated for overhead cranes, mezzanines, and industrial equipment loads.",
      },
      {
        title: "Flex Industrial Space",
        description:
          "Multi-tenant industrial parks built faster and cheaper than tilt-up concrete — perfect for lease portfolios.",
      },
      {
        title: "Service & Repair Centers",
        description:
          "Drive-through bays, high-clearance doors, and trench drain prep for automotive, fleet, and equipment service facilities.",
      },
      {
        title: "Cold Storage",
        description:
          "Insulated panel systems and vapor barriers for refrigerated or frozen product warehousing.",
      },
      {
        title: "Stamped Engineering",
        description:
          "Every building ships with stamped engineering drawings ready to permit in all 50 states.",
      },
    ],
    useCases: [
      "Warehousing",
      "Distribution Center",
      "Light Manufacturing",
      "Flex Industrial",
      "Service Center",
      "Cold Storage",
    ],
    defaultConfig: { width: 80, length: 120, height: 20 },
  },
  {
    slug: "equestrian",
    name: "Equestrian Facilities",
    tagline: "Built for Horse & Rider",
    headline: "Custom Steel Equestrian Buildings",
    subheadline:
      "From intimate boarding barns to large competition arenas, Titan Steel designs equestrian facilities that keep horses safe, comfortable, and performing at their best.",
    heroImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Rockin-Wild-Ranch-Arena-150x275x18-1-1024x768-1-mhQz3NA6FL6BQ2OVQYCI7jbibtzGDw.webp",
    eyebrow: "Equestrian Structures",
    stats: [
      { value: "80×150", label: "Most Popular Arena" },
      { value: "16–20 ft", label: "Typical Eave Height" },
      { value: "50 Yr", label: "Structural Warranty" },
      { value: "100%", label: "American Made" },
    ],
    features: [
      {
        title: "Riding Arenas",
        description:
          "Wide clear-span interiors from 60 to 200 ft with no interior posts — ideal for dressage, jumping, and western disciplines.",
      },
      {
        title: "Horse Barns & Stabling",
        description:
          "Custom stall layouts, wash bays, tack rooms, and feed storage all within a single pre-engineered structure.",
      },
      {
        title: "Run-In Sheds",
        description:
          "Open-front loafing sheds with no floor requirements — quick shelter for pastured horses at low cost.",
      },
      {
        title: "Covered Round Pens",
        description:
          "60 ft diameter covered training pens protect your groundwork routine from rain, wind, and sun.",
      },
      {
        title: "Event & Show Facilities",
        description:
          "Large multi-bay structures for boarding operations, 4-H programs, and competitive show venues with spectator areas.",
      },
      {
        title: "Ventilation Packages",
        description:
          "Ridge vents, continuous sidewall venting, and cupola options engineered for horse health and ammonia management.",
      },
    ],
    useCases: [
      "Riding Arena",
      "Horse Barn",
      "Boarding Facility",
      "Run-In Shed",
      "Round Pen",
      "Show Venue",
    ],
    defaultConfig: { width: 80, length: 150, height: 18 },
  },
  {
    slug: "aviation",
    name: "Aviation Hangars",
    tagline: "Built for the Skies",
    headline: "Pre-Engineered Steel Aircraft Hangars",
    subheadline:
      "Protect your aircraft investment with a structurally superior steel hangar. Clear-span widths up to 200 ft, bi-fold and hydraulic door options, engineered to FAA and local code.",
    heroImage: "/images/hero-aviation.jpg",
    eyebrow: "Aviation Hangars",
    stats: [
      { value: "60×80", label: "Popular T-Hangar Size" },
      { value: "200 ft", label: "Max Clear Span" },
      { value: "6–8 Wks", label: "Avg. Lead Time" },
      { value: "100%", label: "American Made" },
    ],
    features: [
      {
        title: "Single Airplane Hangars",
        description:
          "Compact personal hangars sized from 40×40 for single-engine aircraft up to 60×60 for light twins.",
      },
      {
        title: "T-Hangars",
        description:
          "Efficient multi-unit T-hangar layouts that maximize airport footprint and rental income for FBOs.",
      },
      {
        title: "Corporate & Jet Hangars",
        description:
          "High-eave clear-span structures from 80 to 200 ft wide for business jets, turboprops, and helicopters.",
      },
      {
        title: "Bi-Fold & Hydraulic Doors",
        description:
          "Hydraulic bi-fold and standard swing doors in custom widths to fit your aircraft's wingspan and height.",
      },
      {
        title: "Maintenance Facilities",
        description:
          "MRO and maintenance hangar designs with pit provisions, overhead crane rails, and code-compliant electrical layouts.",
      },
      {
        title: "Airport Authority Compliance",
        description:
          "Every hangar ships with stamped drawings meeting FAA Advisory Circulars and local airport authority requirements.",
      },
    ],
    useCases: [
      "Single Aircraft Hangar",
      "T-Hangar Complex",
      "Corporate Jet Hangar",
      "Helicopter Hangar",
      "MRO Facility",
      "FBO Building",
    ],
    defaultConfig: { width: 60, length: 60, height: 20 },
  },
  {
    slug: "retail-office",
    name: "Retail & Office",
    tagline: "Built for Business",
    headline: "Modern Steel Retail & Office Buildings",
    subheadline:
      "Professional storefronts and office spaces built with the speed and economy of pre-engineered steel. Customize your facade, interior layout, and openings for a polished commercial presence.",
    heroImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/60x75x12-Steel-Retail-Store-in-Utah-scaled-1-IIVgSEOZjWXv5LxkdgQ0wU0muYpL9c.webp",
    eyebrow: "Retail & Office Structures",
    stats: [
      { value: "40×60", label: "Most Popular Size" },
      { value: "30%", label: "Avg. Cost Savings" },
      { value: "6–8 Wks", label: "Avg. Lead Time" },
      { value: "100%", label: "American Made" },
    ],
    features: [
      {
        title: "Retail Storefronts",
        description:
          "Attractive steel-framed storefronts with custom facade panels, large window openings, and ADA-compliant entries.",
      },
      {
        title: "Office Complexes",
        description:
          "Multi-tenant or single-user office buildings with open floor plans, natural lighting packages, and HVAC-ready frames.",
      },
      {
        title: "Showrooms",
        description:
          "High-clearance showroom buildings for automotive dealerships, furniture retailers, and equipment dealers.",
      },
      {
        title: "Restaurants & Food Service",
        description:
          "Custom-configured steel buildings for quick service, sit-down dining, and drive-through food service operations.",
      },
      {
        title: "Medical & Professional",
        description:
          "Clean, professional steel structures for clinics, veterinary offices, and professional service businesses.",
      },
      {
        title: "Strip & Inline Retail",
        description:
          "Multi-tenant strip centers with demising walls, individual storefronts, and shared utility infrastructure.",
      },
    ],
    useCases: [
      "Retail Storefront",
      "Office Building",
      "Auto Dealership",
      "Restaurant",
      "Medical Clinic",
      "Strip Center",
    ],
    defaultConfig: { width: 40, length: 60, height: 14 },
  },
  {
    slug: "storage",
    name: "Storage Solutions",
    tagline: "Built for Storage",
    headline: "Steel Self-Storage & Storage Buildings",
    subheadline:
      "Whether you need personal storage, a self-storage business, or commercial product storage, our steel buildings deliver secure, low-maintenance structures at the best price per square foot.",
    heroImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/metal-shop-building-in-Arizona-1024x576-1-CnLdjko7LhP5b4dlwy0edSe3XnEEYn.webp",
    eyebrow: "Storage Structures",
    stats: [
      { value: "30×100", label: "Most Popular Size" },
      { value: "$12", label: "Starting Per Sq Ft" },
      { value: "6–8 Wks", label: "Avg. Lead Time" },
      { value: "100%", label: "American Made" },
    ],
    features: [
      {
        title: "Self-Storage Facilities",
        description:
          "Multi-unit self-storage buildings with roll-up door framing, varied unit sizes, and drive-through aisle layouts.",
      },
      {
        title: "Boat & RV Storage",
        description:
          "High-clearance open or enclosed buildings for oversized vehicle storage — popular income-generating investments.",
      },
      {
        title: "Mini-Warehouse",
        description:
          "Cost-efficient mini-warehouse complexes with single-slope roofs and continuous row construction for maximum density.",
      },
      {
        title: "Personal Storage",
        description:
          "Compact residential storage buildings from 12×20 to 30×50 — secure, lockable, and weather-tight.",
      },
      {
        title: "Commercial Product Storage",
        description:
          "Large-footprint storage warehouses for inventory, raw materials, and finished goods with forklift-ready floors.",
      },
      {
        title: "Climate-Controlled Options",
        description:
          "Insulated wall and roof packages with HVAC provisions for temperature-sensitive storage applications.",
      },
    ],
    useCases: [
      "Self-Storage Business",
      "Boat & RV Storage",
      "Mini-Warehouse",
      "Personal Storage",
      "Commercial Inventory",
      "Climate-Controlled",
    ],
    defaultConfig: { width: 30, length: 100, height: 12 },
  },
]

export function getCategoryBySlug(slug: string): CategoryData | undefined {
  return categories.find((c) => c.slug === slug)
}

export const categorySlugMap: Record<string, string> = {
  "Agricultural Buildings": "/buildings/agricultural",
  "Commercial Structures": "/buildings/commercial",
  "Equestrian Facilities": "/buildings/equestrian",
  "Aviation Hangars": "/buildings/aviation",
  "Retail & Office": "/buildings/retail-office",
  "Storage Solutions": "/buildings/storage",
}
