import { ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { CategoryData } from "@/lib/category-data"

interface CategoryHeroProps {
  category: CategoryData
}

export function CategoryHero({ category }: CategoryHeroProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${category.heroImage}')` }}
        aria-hidden="true"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-secondary/80" aria-hidden="true" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-20 pt-28 sm:pt-36 text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/40 rounded-full px-4 py-1.5 mb-8">
          <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
          <span className="text-primary text-sm font-semibold font-sans tracking-wide uppercase">
            {category.eyebrow}
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white leading-tight text-balance font-sans mb-6">
          {category.headline}
        </h1>

        {/* Subheadline */}
        <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed font-sans text-pretty">
          {category.subheadline}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white font-sans font-bold text-base px-8 py-4 h-auto rounded-sm"
            asChild
          >
            <a href="#builder">
              Configure &amp; Price Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white/40 text-white hover:bg-white/10 hover:text-white font-sans font-semibold text-base px-8 py-4 h-auto rounded-sm bg-transparent"
            asChild
          >
            <a href="tel:+18888076006">Call 1-888-807-6006</a>
          </Button>
        </div>

        {/* Use cases row */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {category.useCases.map((use) => (
            <div key={use} className="flex items-center gap-1.5 text-white/60 text-sm font-sans">
              <CheckCircle className="h-3.5 w-3.5 text-primary flex-shrink-0" />
              {use}
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 rounded-sm overflow-hidden border border-white/10">
          {category.stats.map((stat) => (
            <div key={stat.label} className="bg-secondary/60 backdrop-blur px-4 py-4 sm:px-6 sm:py-5 text-center">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white font-sans">{stat.value}</div>
              <div className="text-[10px] sm:text-xs text-white/50 font-sans mt-1 uppercase tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
