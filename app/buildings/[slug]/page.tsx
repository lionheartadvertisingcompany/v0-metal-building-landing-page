import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { getCategoryBySlug, categories } from "@/lib/category-data"
import { Navbar } from "@/components/navbar"
import { CategoryHero } from "@/components/category-hero"
import { CategoryFeatures } from "@/components/category-features"
import { BuilderSection } from "@/components/builder-section"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const category = getCategoryBySlug(slug)
  if (!category) return {}
  
  const metaTitles: Record<string, string> = {
    agricultural: "Agricultural Metal Buildings - Farm & Storage Structures",
    commercial: "Commercial Steel Buildings - Warehouses & Industrial",
    equestrian: "Equestrian Steel Buildings - Riding Arenas & Horse Barns",
    "retail-office": "Retail & Office Metal Buildings - Custom Commercial Spaces",
    storage: "Metal Storage Buildings - Self-Storage & Warehouse Solutions",
    aviation: "Aviation Hangars - Custom Aircraft Storage Buildings"
  }
  
  const metaKeywords: Record<string, string> = {
    agricultural: "agricultural metal buildings, farm buildings, barn storage, equipment shelter, steel farm structures",
    commercial: "commercial steel buildings, warehouse construction, industrial buildings, metal warehouses, business structures",
    equestrian: "riding arena, horse barn, equestrian facilities, covered arena, steel horse barn",
    "retail-office": "retail buildings, office buildings, commercial storefronts, metal retail space, professional office",
    storage: "storage buildings, self-storage, RV storage, metal storage units, warehouse storage",
    aviation: "aircraft hangar, airplane storage, aviation buildings, hangar construction, private hangar"
  }
  
  return {
    title: metaTitles[slug] || `${category.name} | Titan Steel Structures`,
    description: category.subheadline,
    keywords: metaKeywords[slug] || `${category.name.toLowerCase()}, metal buildings, steel structures`,
    openGraph: {
      title: `${category.name} - Custom Metal Buildings`,
      description: category.subheadline,
      images: [{
        url: category.heroImage,
        width: 1200,
        height: 630,
        alt: `${category.name} - Titan Steel Structures`
      }],
    },
  }
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params
  const category = getCategoryBySlug(slug)

  if (!category) notFound()

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <CategoryHero category={category} />
        <CategoryFeatures category={category} />
        <BuilderSection defaultConfig={category.defaultConfig} />
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}
