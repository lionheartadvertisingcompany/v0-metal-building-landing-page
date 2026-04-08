import { Quote, Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const testimonials = [
  {
    name: "Marcus T.",
    role: "Owner, T&T Logistics",
    location: "Dallas, TX",
    initials: "MT",
    stars: 5,
    quote:
      "We needed a 10,000 sq ft distribution center fast. SteelForge had our quote same-day and the building was delivered in 7 weeks. Our GC said he&apos;d never seen components labeled so precisely. Assembly went without a hitch.",
  },
  {
    name: "Sandra R.",
    role: "Farm Operations Manager",
    location: "Salinas, CA",
    initials: "SR",
    stars: 5,
    quote:
      "Compared four prefab companies. SteelForge beat everyone on price by 15% and the online configurator made it easy to get exactly what we needed — a 60x120 barn with two 16-ft sliding doors. Absolutely thrilled.",
  },
  {
    name: "Derek M.",
    role: "General Contractor",
    location: "Nashville, TN",
    initials: "DM",
    stars: 5,
    quote:
      "I&apos;ve ordered six buildings from SteelForge over the past three years for commercial clients. Every single one arrived on time, within spec. The engineering drawings are always stamped and ready to permit.",
  },
  {
    name: "Lisa B.",
    role: "Auto Shop Owner",
    location: "Phoenix, AZ",
    initials: "LB",
    stars: 5,
    quote:
      "Expanded my shop with a 40x80 clear-span garage. The 16-foot eave height and insulation package were exactly what I needed. My utility bills are lower than expected and the building looks fantastic.",
  },
  {
    name: "James O.",
    role: "Real Estate Developer",
    location: "Atlanta, GA",
    initials: "JO",
    stars: 5,
    quote:
      "Built two industrial flex spaces for lease. Tenants love the clear span interiors — no columns to work around. I saved $180k compared to tilt-up concrete and had both buildings ready 4 months sooner.",
  },
  {
    name: "Karen W.",
    role: "Equestrian Center Director",
    location: "Lexington, KY",
    initials: "KW",
    stars: 5,
    quote:
      "The 100x200 arena came out beautifully. The vertical roof keeps our horses dry through heavy rains and the skylights SteelForge suggested keep it bright inside. Couldn&apos;t be happier with the whole experience.",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-muted py-24 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary/40 text-primary font-sans text-xs uppercase tracking-widest">
            Customer Stories
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground font-sans text-balance mb-4">
            Trusted by Builders Nationwide
          </h2>
          <p className="text-muted-foreground font-sans max-w-xl mx-auto leading-relaxed">
            Over 10,000 buildings delivered. Here&apos;s what our customers have to say.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white border border-border rounded-sm p-7 flex flex-col">
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <div className="relative flex-1 mb-6">
                <Quote className="absolute -top-1 -left-1 h-8 w-8 text-primary/10" />
                <p className="text-foreground text-sm font-sans leading-relaxed pl-3">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5 border-t border-border">
                <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white text-sm font-bold font-sans flex-shrink-0">
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground font-sans">{t.name}</div>
                  <div className="text-xs text-muted-foreground font-sans">{t.role} &bull; {t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
