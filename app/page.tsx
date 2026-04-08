import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { BuildingTypesSection } from "@/components/building-types-section"
import { BuilderSection } from "@/components/builder-section"
import { BenefitsSection } from "@/components/benefits-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { ProductSchema } from "@/components/schema-markup"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <ProductSchema />
      <Navbar />
      <main>
        <Hero />
        <BuildingTypesSection />
        <BuilderSection />
        <BenefitsSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}
