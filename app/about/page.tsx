import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "About Us - Titan Steel Structures",
  description: "Learn about Titan Steel Structures, a leader in pre-engineered steel building solutions with 25+ years of expertise.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-cover bg-center bg-no-repeat py-16 sm:py-24 min-h-96" style={{ backgroundImage: "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/30x72x15-Metal-Barndominium-in-Michigan-side-view-H2BCnVKYmRhQgh3Mu1NgjeAexHilpW.webp')" }}>
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 font-sans text-balance">
              About Titan Steel Structures
            </h1>
            <p className="text-lg text-white/90 font-sans leading-relaxed">
              A leader in pre-engineered steel structures with a commitment to excellence and customer satisfaction.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 sm:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            {/* Who We Are */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-4 font-sans">Who We Are</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4 font-sans">
                At Titan Steel Structures, we believe in a multidimensional approach to offering the best customer satisfaction and maintaining our position as a leader in the pre-engineered steel structures industry.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed font-sans">
                We take great pride in our customer satisfaction and our experienced staff. We&apos;ve accomplished extraordinary success and have blossomed because of our unwavering commitment to putting our customers first and foremost.
              </p>
            </div>

            {/* Our Mission */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-4 font-sans">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed font-sans">
                To date, we&apos;ve helped thousands of men and women seeking information about how to design the building of their dreams. We are dedicated to being of service to the thousands more we plan to serve with the same exceptional expertise and enthusiasm that has made us a leader in the pre-engineered steel structure industry.
              </p>
            </div>

            {/* Our Experience */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-8 font-sans">Our Experience</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-secondary/50 p-6 rounded-lg border border-white/10">
                  <p className="text-white font-semibold font-sans mb-2">Architectural Design CAD</p>
                  <p className="text-white/70 font-sans">25+ years of expertise</p>
                </div>
                <div className="bg-secondary/50 p-6 rounded-lg border border-white/10">
                  <p className="text-white font-semibold font-sans mb-2">Insights & Strategy</p>
                  <p className="text-white/70 font-sans">25+ years of expertise</p>
                </div>
                <div className="bg-secondary/50 p-6 rounded-lg border border-white/10">
                  <p className="text-white font-semibold font-sans mb-2">Location Research</p>
                  <p className="text-white/70 font-sans">25+ years of expertise</p>
                </div>
                <div className="bg-secondary/50 p-6 rounded-lg border border-white/10">
                  <p className="text-white font-semibold font-sans mb-2">Local Codes & Loads</p>
                  <p className="text-white/70 font-sans">25+ years of expertise</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4 font-sans">Ready to Build Your Dream Structure?</h3>
              <p className="text-white/80 mb-6 font-sans">Get in touch with our team to discuss your project.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+18888076006"
                  className="inline-block px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors font-sans"
                >
                  Call: 1-888-807-6006
                </a>
                <a
                  href="mailto:info@titansteelstructures.com"
                  className="inline-block px-8 py-3 border border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-colors font-sans"
                >
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
