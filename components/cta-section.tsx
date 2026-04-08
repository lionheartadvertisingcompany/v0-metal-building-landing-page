import { ArrowRight, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CtaSection() {
  return (
    <section className="bg-primary py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white font-sans text-balance mb-6 leading-tight">
          Have Any Questions? Call Us Now!
        </h2>
        <p className="text-white/80 font-sans text-lg leading-relaxed mb-10 max-w-2xl mx-auto text-pretty">
          We are excited to work with you to create your ideal steel structure. Give us a call and 
          we can provide you with a quick quote. We look forward to speaking with you!
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <Button
            size="lg"
            className="bg-white text-primary hover:bg-white/90 font-sans font-bold text-base px-10 py-4 h-auto rounded-sm"
            asChild
          >
            <a href="#builder">
              Build &amp; Price Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white/40 text-white hover:bg-white/10 hover:text-white font-sans font-semibold text-base px-10 py-4 h-auto rounded-sm bg-transparent"
          >
            Talk to a Specialist
          </Button>
        </div>

        {/* Contact quick links */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-8 border-t border-white/20">
          <a
            href="tel:+18888076006"
            className="flex items-center gap-2 text-white/80 hover:text-white font-sans text-sm transition-colors"
          >
            <Phone className="h-4 w-4" />
            1-888-807-6006
          </a>
          <a
            href="mailto:quotes@steelforge.com"
            className="flex items-center gap-2 text-white/80 hover:text-white font-sans text-sm transition-colors"
          >
            <Mail className="h-4 w-4" />
            quotes@steelforge.com
          </a>
        </div>
      </div>
    </section>
  )
}
