import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, ArrowRight, Building2, Home, Warehouse, Church, Tractor, Car } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Case Studies - Building Projects | Titan Steel Structures",
  description: "Explore our portfolio of completed metal building projects including barndominiums, workshops, riding arenas, warehouses, and more.",
}

const projects = [
  {
    title: "30x72x15 Metal Barndominium",
    description: "As housing costs hit record highs, people of all ages are turning to metal barndominiums for affordable, durable living spaces.",
    category: "Residential",
    icon: Home,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/30x72x15-Metal-Barndominium-in-Michigan-side-view-H2BCnVKYmRhQgh3Mu1NgjeAexHilpW.webp",
  },
  {
    title: "30x45x14 Metal Shop Building in Arizona",
    description: "Our prefab metal buildings have become very popular for workshops and shop buildings across the Southwest.",
    category: "Workshop",
    icon: Building2,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/metal-shop-building-in-Arizona-1024x576-1-CnLdjko7LhP5b4dlwy0edSe3XnEEYn.webp",
  },
  {
    title: "150x275x18 Steel Riding Arena in Texas",
    description: "One of the most popular uses for our steel buildings is covered riding arenas for equestrian facilities.",
    category: "Equestrian",
    icon: Tractor,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Rockin-Wild-Ranch-Arena-150x275x18-1-1024x768-1-mhQz3NA6FL6BQ2OVQYCI7jbibtzGDw.webp",
  },
  {
    title: "60x100x12 Steel Retail Store in Utah",
    description: "Utah's thriving retail industry demands versatile and visually appealing commercial spaces built to last.",
    category: "Commercial",
    icon: Building2,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/60x75x12-Steel-Retail-Store-in-Utah-scaled-1-IIVgSEOZjWXv5LxkdgQ0wU0muYpL9c.webp",
  },
  {
    title: "100x300x25 Steel Warehouse in New York",
    description: "Prefab steel buildings make excellent warehouse and storage buildings because of their durability and clear-span design.",
    category: "Warehouse",
    icon: Warehouse,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/New-York-metal-warehouse-11fcV0USQBZOT62wUaFNWquzwpEVgd.webp",
  },
  {
    title: "110x200x20 Metal Church Building in Michigan",
    description: "Faith communities need worship spaces that are welcoming, cost-effective, and built to serve for generations.",
    category: "Religious",
    icon: Church,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Virginia-Metal-Buildings-e1591289196480-2016x1008-1-dRTo0vy2KRDuUog3VTfo1rozwjRk09.webp",
  },
  {
    title: "50x75x16 Steel Workshop in Montana",
    description: "Pre-engineered steel buildings are the number one choice for workshops and storage across Montana's rugged terrain.",
    category: "Workshop",
    icon: Building2,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/metal-shop-building-in-Arizona-1024x576-1-CnLdjko7LhP5b4dlwy0edSe3XnEEYn.webp",
  },
  {
    title: "90x180x16 Metal Riding Arena in Tennessee",
    description: "A popular use for our prefab metal buildings is covered riding arenas that protect horses and riders year-round.",
    category: "Equestrian",
    icon: Tractor,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Rockin-Wild-Ranch-Arena-150x275x18-1-1024x768-1-mhQz3NA6FL6BQ2OVQYCI7jbibtzGDw.webp",
  },
  {
    title: "28x92x16 Metal House in North Carolina",
    description: "Prefabricated metal buildings have numerous advantages over traditional construction methods for residential use.",
    category: "Residential",
    icon: Home,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/30x72x15-Metal-Barndominium-in-Michigan-side-view-H2BCnVKYmRhQgh3Mu1NgjeAexHilpW.webp",
  },
  {
    title: "40x80x16 Steel Shop in Florida",
    description: "One of the most popular types of buildings we sell is shop and storage combinations built to withstand Florida weather.",
    category: "Workshop",
    icon: Building2,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/metal-shop-building-in-Arizona-1024x576-1-CnLdjko7LhP5b4dlwy0edSe3XnEEYn.webp",
  },
  {
    title: "60x80x18 Metal Building Home in Montana",
    description: "Choosing a prefab metal building for a home is about durability, efficiency, and long-term value.",
    category: "Residential",
    icon: Home,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/30x72x15-Metal-Barndominium-in-Michigan-side-view-H2BCnVKYmRhQgh3Mu1NgjeAexHilpW.webp",
  },
  {
    title: "50x60x16 Metal RV Storage in Idaho",
    description: "Whether you're in the mountains or the plains, our metal buildings provide secure RV and vehicle storage.",
    category: "Storage",
    icon: Car,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/New-York-metal-warehouse-11fcV0USQBZOT62wUaFNWquzwpEVgd.webp",
  },
]

const testimonials = [
  {
    quote: "I want to pass along to you how happy we are with the structure of the 30&apos; x 60&apos; metal building we purchased from Titan Steel. The local erector even commented on how sturdy and well-built it turned out. The quality of the materials is nothing short of amazing and the design is perfect.",
    author: "Faithe Evans",
    location: "Florida",
  },
  {
    quote: "Titan Steel Structures has been the best I have had the pleasure working with in years. Mark Milazzo was my primary contact and he was very accommodating to our engineering requirements. Mark was always responsive to our emails and phone conversations.",
    author: "Ron Patterson",
    location: "Business Owner",
  },
  {
    quote: "It was a great experience from start to finish. I am a business owner myself and Titan Steel is a good example of how to operate a business, very prompt on phone calls, pricing and follow through was great.",
    author: "David B.",
    location: "Business Owner",
  },
  {
    quote: "As GC&apos;s specializing in Equestrian structures for over 15 years, we were very satisfied with the quality of the steel structure we purchased from Titan Steel Structures for a Riding Arena in Wellington, FL. The staff was very professional and made it easy to get exactly what we needed.",
    author: "Priscilla Thomasevich",
    location: "General Contractor",
  },
]

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-[#1e3a5f] pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a5f] to-[#0f2744]" />
        <div className="container relative mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-sans mb-6 text-balance">
            Building Projects
          </h1>
          <p className="text-lg md:text-xl text-white/80 font-sans max-w-3xl mx-auto leading-relaxed text-pretty">
            Explore our portfolio of completed metal building projects. From barndominiums to warehouses, 
            riding arenas to retail stores, see how Titan Steel Structures delivers quality across America.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground font-sans mb-4">
              Featured Projects
            </h2>
            <p className="text-muted-foreground font-sans max-w-2xl mx-auto">
              Each project represents our commitment to quality, durability, and customer satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => {
              const IconComponent = project.icon
              return (
                <Card key={index} className="group hover:shadow-lg transition-shadow duration-300 border-border/50 overflow-hidden flex flex-col">
                  <div className="relative overflow-hidden h-48 bg-muted">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6 flex-1 flex flex-col">
                    <div className="flex items-start gap-4 flex-1">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <span className="inline-block text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                          {project.category}
                        </span>
                        <h3 className="text-lg font-bold text-foreground font-sans mb-2 group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-sm text-muted-foreground font-sans leading-relaxed">
                          {project.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground font-sans mb-4">
              What Our Customers Say
            </h2>
            <p className="text-muted-foreground font-sans max-w-2xl mx-auto">
              Real feedback from real customers who trusted Titan Steel Structures for their building projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-border/50">
                <CardContent className="p-6">
                  <blockquote className="text-muted-foreground font-sans text-sm leading-relaxed mb-4 italic">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-bold font-sans">
                        {testimonial.author.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground font-sans text-sm">
                        {testimonial.author}
                      </p>
                      <p className="text-xs text-muted-foreground font-sans">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#1e3a5f]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-sans mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-white/80 font-sans mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied customers who chose Titan Steel Structures. 
            Call us today for a free quote on your metal building project.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:+18888076006">
              <Button size="lg" className="bg-white text-[#1e3a5f] hover:bg-white/90 font-sans font-semibold">
                <Phone className="w-5 h-5 mr-2" />
                1-888-807-6006
              </Button>
            </a>
            <Link href="/">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-sans font-semibold">
                Get a Free Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
