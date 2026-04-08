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
  return {
    title: `${category.name} | Titan Steel Structures`,
    description: category.subheadline,
    icons: {
      icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/titan%20steel%20structures%20logo-y6dkkVGPMuFB8ZzpSGTDzYmelRlLJt.png",
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
