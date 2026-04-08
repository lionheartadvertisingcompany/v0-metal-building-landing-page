import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Configure Online",
    description:
      "Use our interactive builder to set your building's dimensions, roof style, door placements, color, and accessories. Your price updates instantly as you customize.",
    detail: "Takes about 5 minutes",
  },
  {
    number: "02",
    title: "Review Your Quote",
    description:
      "A detailed quote PDF is generated immediately. One of our building specialists reviews your configuration and contacts you within 24 hours to confirm specs and answer questions.",
    detail: "No commitment required",
  },
  {
    number: "03",
    title: "We Deliver & You Build",
    description:
      "Your pre-engineered, pre-punched, and labeled components ship directly to your site. Erect it yourself or use our certified contractor network — we support you through every step.",
    detail: "Ready in 6–8 weeks",
  },
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-secondary py-14 sm:py-24 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <Badge variant="outline" className="mb-4 border-primary/40 text-primary font-sans text-xs uppercase tracking-widest">
            The Process
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white font-sans text-balance mb-4">
            From Idea to Building in 3 Steps
          </h2>
          <p className="text-white/60 font-sans max-w-xl mx-auto leading-relaxed">
            We&apos;ve streamlined the entire process so you can go from concept to completed structure 
            faster than any traditional contractor can even submit a bid.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-px bg-white/10 rounded-sm overflow-hidden mb-12">
          {steps.map((step, index) => (
            <div key={step.number} className="relative bg-secondary p-6 sm:p-10 group hover:bg-white/5 transition-colors">
              {/* Connector arrow (desktop) */}
              {index < steps.length - 1 && (
                <ArrowRight className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 h-6 w-6 text-primary z-10" />
              )}

              <div className="text-7xl font-bold text-white/5 font-sans leading-none mb-4 select-none">
                {step.number}
              </div>

              <div className="w-12 h-0.5 bg-primary mb-6" />

              <h3 className="text-xl font-bold text-white font-sans mb-3">{step.title}</h3>
              <p className="text-white/60 text-sm font-sans leading-relaxed mb-4">{step.description}</p>

              <div className="inline-flex items-center gap-2 text-xs text-primary font-sans font-semibold uppercase tracking-wide">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                {step.detail}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white font-sans font-bold px-10 py-4 h-auto rounded-sm text-base"
            asChild
          >
            <a href="#builder">
              Start Your Configuration
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
