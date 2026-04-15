import { CheckCircle2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import type { CategoryData } from "@/lib/category-data"

interface CategoryFeaturesProps {
  category: CategoryData
}

export function CategoryFeatures({ category }: CategoryFeaturesProps) {
  return (
    <section className="bg-white py-14 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <Badge variant="outline" className="mb-4 border-primary/40 text-primary font-sans text-xs uppercase tracking-widest">
            {category.name}
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-foreground font-sans text-balance mb-4">
            Everything You Need in One Building
          </h2>
          <p className="text-muted-foreground font-sans max-w-xl mx-auto leading-relaxed">
            Premium {category.name.toLowerCase()} engineered for your specific application — durable, customizable, and delivered fast.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {category.features.map((feature) => (
            <div
              key={feature.title}
              className="group border border-border rounded-sm p-5 sm:p-8 hover:border-primary/40 hover:shadow-md transition-all duration-200 bg-white"
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="h-8 w-8 rounded-sm bg-primary/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-primary/20 transition-colors">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                </div>
                <h3 className="text-base font-bold font-sans text-foreground leading-snug">{feature.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground font-sans leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
