import { Shield, DollarSign, Ruler, Zap, Wrench, Leaf } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const benefits = [
  {
    icon: Shield,
    title: "Built to Last 50+ Years",
    description:
      "Our high-tensile steel frames are hot-dip galvanized and rated for 150 mph wind loads and 35 psf snow loads. Every structure comes with a 50-year structural warranty.",
    stat: "150 mph",
    statLabel: "Wind Rated",
  },
  {
    icon: DollarSign,
    title: "Up to 40% Cost Savings",
    description:
      "Prefab steel buildings cost significantly less than traditional wood-frame construction — both upfront and over time. Lower insurance premiums, minimal maintenance.",
    stat: "40%",
    statLabel: "Avg. Savings",
  },
  {
    icon: Ruler,
    title: "Fully Customizable",
    description:
      "Choose from hundreds of configurations — widths up to 300 ft, custom colors, door placements, windows, insulation, and interior mezzanines tailored to your workflow.",
    stat: "300 ft",
    statLabel: "Max Clear Span",
  },
  {
    icon: Zap,
    title: "Fast Delivery & Assembly",
    description:
      "From order to delivery in as little as 6 weeks. Pre-punched and labeled components mean a small crew can erect your building in days, not months.",
    stat: "6 Weeks",
    statLabel: "Lead Time",
  },
  {
    icon: Wrench,
    title: "Low Maintenance",
    description:
      "Steel doesn't rot, warp, or attract pests. A periodic wash-down is all it takes to keep your building looking and performing like new for decades.",
    stat: "Zero",
    statLabel: "Pest Risk",
  },
  {
    icon: Leaf,
    title: "Sustainable & Recyclable",
    description:
      "Steel is the most recycled material on earth. Our buildings use up to 80% recycled content, and the entire structure is fully recyclable at end of life.",
    stat: "80%",
    statLabel: "Recycled Content",
  },
]

export function BenefitsSection() {
  return (
    <section id="benefits" className="bg-white py-24 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary/40 text-primary font-sans text-xs uppercase tracking-widest">
            Why Steel
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground font-sans text-balance mb-4">
            The Smarter Way to Build
          </h2>
          <p className="text-muted-foreground font-sans max-w-xl mx-auto leading-relaxed">
            Prefabricated steel buildings outperform traditional construction on every metric 
            that matters — durability, cost, speed, and sustainability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit) => {
            const Icon = benefit.icon
            return (
              <div
                key={benefit.title}
                className="group border border-border rounded-sm p-8 hover:border-primary/40 hover:shadow-md transition-all duration-200 bg-white"
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="p-3 bg-primary/10 rounded-sm group-hover:bg-primary/15 transition-colors">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-foreground font-sans">{benefit.stat}</div>
                    <div className="text-xs text-muted-foreground font-sans uppercase tracking-wide">{benefit.statLabel}</div>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-foreground font-sans mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm font-sans leading-relaxed">{benefit.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
