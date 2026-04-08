import { Quote, Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const testimonials = [
  {
    name: "Robert H.",
    role: "Ranch Owner",
    location: "Texas",
    initials: "RH",
    stars: 5,
    quote:
      "Our 150x275x18 steel riding arena has been a game changer. The clear span design lets our customers enjoy riding all year long. The American-made steel quality is evident in every component.",
  },
  {
    name: "Sandra R.",
    role: "Farm Operations Manager",
    location: "Arizona",
    initials: "SR",
    stars: 5,
    quote:
      "We needed a 30x45x14 metal shop building for our equipment. The customer service was exceptional — they helped us design exactly what we needed. Safe, secure, and built to last.",
  },
  {
    name: "Derek M.",
    role: "General Contractor",
    location: "Utah",
    initials: "DM",
    stars: 5,
    quote:
      "Built a 60x100x12 steel retail store for my client. The pre-engineered components went together perfectly. Engineering drawings were stamped and ready for permit. Will definitely use again.",
  },
  {
    name: "Lisa B.",
    role: "Auto Shop Owner",
    location: "Phoenix, AZ",
    initials: "LB",
    stars: 5,
    quote:
      "Expanded my business with a metal shop building. The flexibility in design options helped me create exactly what I needed. Clear span interior means no columns in the way. Perfect.",
  },
  {
    name: "James O.",
    role: "Homeowner",
    location: "Colorado",
    initials: "JO",
    stars: 5,
    quote:
      "Our 30x72x15 metal barndominium exceeded expectations. Pre-engineered steel construction at a fraction of traditional costs. The team walked us through every step of the process.",
  },
  {
    name: "Karen W.",
    role: "Equestrian Center Director",
    location: "Kentucky",
    initials: "KW",
    stars: 5,
    quote:
      "The steel riding arena is perfect for our horses. 100% American-made steel, clear span design, and the vertical roof keeps everything dry. Couldn&apos;t be happier with the experience.",
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
            Over 1,500 satisfied customers nationwide. Here&apos;s what they have to say.
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
