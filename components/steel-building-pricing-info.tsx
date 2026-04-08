import { CheckCircle2 } from 'lucide-react'

export function SteelBuildingPricingInfo() {
  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground font-sans mb-4 text-balance">
            Steel Building Cost Calculator & Pricing Guide
          </h2>
          <p className="text-lg text-muted-foreground font-sans leading-relaxed">
            Understanding the cost to build a metal building has never been easier. Our steel building cost calculator provides instant pricing based on your specific dimensions and customization options.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-foreground font-sans">
              Steel Building Cost Per Square Foot
            </h3>
            <p className="text-muted-foreground font-sans leading-relaxed">
              The cost to build a steel building typically ranges from $12 to $18 per square foot, depending on gauge, roof style, and customizations. Premium 12-gauge steel and standing seam roofing add approximately 6-10% to your base cost.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-foreground font-sans">
              Metal Buildings Prices & Options
            </h3>
            <p className="text-muted-foreground font-sans leading-relaxed">
              Metal buildings prices depend on several factors including roof style (gable, single-slope, or standing seam), steel gauge (14 or 12), and additional features like doors, windows, and insulation.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-foreground font-sans">
              Cost to Build a Metal Building
            </h3>
            <p className="text-muted-foreground font-sans leading-relaxed">
              The cost to build a metal building is significantly lower than traditional construction. Use our steel building cost calculator below to get an accurate quote based on your exact specifications in seconds.
            </p>
          </div>
        </div>

        <div className="bg-primary/5 border border-primary/20 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-foreground font-sans mb-6">
            Why Choose Our Steel Building Cost Calculator?
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <p className="text-foreground font-sans">
                <strong>Instant Pricing:</strong> Get real-time cost estimates for your steel building design
              </p>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <p className="text-foreground font-sans">
                <strong>Accurate Calculations:</strong> Our steel building cost per square foot calculations account for all variables
              </p>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <p className="text-foreground font-sans">
                <strong>Transparent Pricing:</strong> See exactly how costs break down for your metal building project
              </p>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <p className="text-foreground font-sans">
                <strong>3D Preview:</strong> Visualize your metal building while calculating exact costs
              </p>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <p className="text-foreground font-sans">
                <strong>No Hidden Fees:</strong> All steel building prices include labor, materials, and delivery estimates
              </p>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <p className="text-foreground font-sans">
                <strong>Expert Support:</strong> Our team can answer questions about your metal buildings prices
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
