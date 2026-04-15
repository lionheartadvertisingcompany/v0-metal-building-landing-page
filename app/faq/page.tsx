'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { FAQSchema } from '@/components/schema-markup'

interface FAQItem {
  category: string
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    category: 'PRICING & COST QUESTIONS',
    question: 'How much does a prefabricated metal building cost?',
    answer: 'Most prefabricated metal buildings range from $10 to $25 per square foot, depending on size, gauge, insulation, and customization.'
  },
  {
    category: 'PRICING & COST QUESTIONS',
    question: 'What is the average cost per square foot for a steel building?',
    answer: 'Typically between $12–$20 per sq ft, with larger buildings costing less per square foot.'
  },
  {
    category: 'PRICING & COST QUESTIONS',
    question: 'What factors affect the cost of a metal building?',
    answer: 'Size (width × length × height), steel gauge, roof style, doors & windows, insulation, and location & delivery all impact pricing.'
  },
  {
    category: 'PRICING & COST QUESTIONS',
    question: 'Are larger metal buildings cheaper per square foot?',
    answer: 'Yes—larger structures benefit from economies of scale, reducing per-square-foot cost.'
  },
  {
    category: 'PRICING & COST QUESTIONS',
    question: 'How accurate is a metal building cost calculator?',
    answer: 'A calculator provides a close estimate (±10–20%), but final pricing depends on engineering and site conditions.'
  },
  {
    category: 'CALCULATOR-SPECIFIC QUESTIONS',
    question: 'How does the Titan Metal Building Calculator work?',
    answer: 'It calculates pricing based on your building dimensions, materials, and add-ons in real time.'
  },
  {
    category: 'CALCULATOR-SPECIFIC QUESTIONS',
    question: 'Can I design my own metal building online?',
    answer: 'Yes—you can customize dimensions, doors, windows, and features using the interactive builder.'
  },
  {
    category: 'CALCULATOR-SPECIFIC QUESTIONS',
    question: 'Does the calculator include delivery costs?',
    answer: 'Basic estimates may exclude delivery, but final quotes typically include freight based on location.'
  },
  {
    category: 'CALCULATOR-SPECIFIC QUESTIONS',
    question: 'Can I save my building design?',
    answer: 'Yes—users can save designs and return later to finalize their quote.'
  },
  {
    category: 'CALCULATOR-SPECIFIC QUESTIONS',
    question: 'Is the calculator free to use?',
    answer: 'Yes, it\'s completely free and designed to give instant pricing insights.'
  },
  {
    category: 'TYPES & USE CASES',
    question: 'What are prefabricated metal buildings used for?',
    answer: 'Warehouses, garages, workshops, agricultural barns, and commercial buildings.'
  },
  {
    category: 'TYPES & USE CASES',
    question: 'Are metal buildings good for residential homes?',
    answer: 'Yes, they\'re increasingly used for barndominiums due to durability and cost efficiency.'
  },
  {
    category: 'TYPES & USE CASES',
    question: 'What is a barndominium?',
    answer: 'A residential home built using a metal building structure.'
  },
  {
    category: 'TYPES & USE CASES',
    question: 'Can I use a metal building for a business?',
    answer: 'Absolutely—metal buildings are widely used for retail, storage, and industrial operations.'
  },
  {
    category: 'CUSTOMIZATION OPTIONS',
    question: 'What sizes are available for metal buildings?',
    answer: 'Custom sizes are available, typically ranging from 20 ft to 200+ ft wide.'
  },
  {
    category: 'CUSTOMIZATION OPTIONS',
    question: 'Can I customize doors and windows?',
    answer: 'Yes—you can add roll-up doors, walk-in doors, and multiple window configurations.'
  },
  {
    category: 'CUSTOMIZATION OPTIONS',
    question: 'What roof styles are available?',
    answer: 'Gable, single slope, and vertical roof styles are available.'
  },
  {
    category: 'CUSTOMIZATION OPTIONS',
    question: 'What colors can I choose?',
    answer: 'Most manufacturers offer a wide range of color options for walls, trim, and roofing.'
  },
  {
    category: 'MATERIAL & STRUCTURE',
    question: 'What gauge steel should I choose?',
    answer: '14 gauge is standard, while 12 gauge is stronger and recommended for heavy-duty use.'
  },
  {
    category: 'MATERIAL & STRUCTURE',
    question: 'Are metal buildings durable?',
    answer: 'Yes—they are resistant to fire, pests, rot, and extreme weather.'
  },
  {
    category: 'MATERIAL & STRUCTURE',
    question: 'How long do metal buildings last?',
    answer: 'Properly maintained, they can last 40–60+ years.'
  },
  {
    category: 'WEATHER & SAFETY',
    question: 'Are metal buildings hurricane-resistant?',
    answer: 'Yes—many are engineered to meet local wind load requirements, especially in places like Miami.'
  },
  {
    category: 'WEATHER & SAFETY',
    question: 'Can metal buildings handle heavy snow?',
    answer: 'Yes, when engineered for snow loads.'
  },
  {
    category: 'WEATHER & SAFETY',
    question: 'Are they fire-resistant?',
    answer: 'Steel buildings are non-combustible and highly fire-resistant.'
  },
  {
    category: 'INSTALLATION & DELIVERY',
    question: 'How long does installation take?',
    answer: 'Typically 1–4 weeks, depending on size and complexity.'
  },
  {
    category: 'INSTALLATION & DELIVERY',
    question: 'Do I need a foundation?',
    answer: 'Yes—a concrete slab is the most common foundation.'
  },
  {
    category: 'INSTALLATION & DELIVERY',
    question: 'Do metal building kits come pre-engineered?',
    answer: 'Yes, most are pre-engineered for easy assembly.'
  },
  {
    category: 'PERMITS & REGULATIONS',
    question: 'Do I need a permit for a metal building?',
    answer: 'Yes—permits are required in most areas.'
  },
  {
    category: 'PERMITS & REGULATIONS',
    question: 'Are metal buildings code-compliant?',
    answer: 'Yes, when engineered properly to local codes.'
  },
  {
    category: 'INSULATION & ENERGY',
    question: 'Do metal buildings need insulation?',
    answer: 'Yes, especially in hot climates like Miami.'
  },
  {
    category: 'INSULATION & ENERGY',
    question: 'What insulation options are available?',
    answer: 'Fiberglass, spray foam, and rigid board insulation options are available.'
  },
  {
    category: 'FINANCING & ROI',
    question: 'Are metal buildings cheaper than wood?',
    answer: 'Often yes, especially for large spans.'
  },
  {
    category: 'FINANCING & ROI',
    question: 'Do metal buildings increase property value?',
    answer: 'Yes, especially for commercial or storage use.'
  },
  {
    category: 'FINANCING & ROI',
    question: 'Is financing available?',
    answer: 'Many suppliers offer financing options.'
  },
  {
    category: 'MAINTENANCE',
    question: 'Do metal buildings require maintenance?',
    answer: 'Minimal—occasional cleaning and inspections.'
  },
  {
    category: 'MAINTENANCE',
    question: 'Do they rust?',
    answer: 'Modern coatings prevent rust when maintained properly.'
  },
  {
    category: 'ADD-ONS & FEATURES',
    question: 'Can I add skylights?',
    answer: 'Yes.'
  },
  {
    category: 'ADD-ONS & FEATURES',
    question: 'Can I expand later?',
    answer: 'Yes, many designs allow future expansion.'
  },
  {
    category: 'COMPARISON QUESTIONS',
    question: 'Metal vs wood building: which is better?',
    answer: 'Metal is more durable, while wood may be cheaper for small builds.'
  },
  {
    category: 'COMPARISON QUESTIONS',
    question: 'Are metal buildings environmentally friendly?',
    answer: 'Yes—steel is recyclable.'
  },
  {
    category: 'ADVANCED QUESTIONS',
    question: 'What is included in a metal building kit?',
    answer: 'Primary framing, panels, trim, and fasteners.'
  },
  {
    category: 'ADVANCED QUESTIONS',
    question: 'What is not included?',
    answer: 'Foundation, labor, and utilities are typically not included.'
  },
  {
    category: 'ADVANCED QUESTIONS',
    question: 'Can I install it myself?',
    answer: 'Yes, but professional installation is recommended.'
  },
  {
    category: 'SIZING QUESTIONS',
    question: 'What size metal building do I need for a 2-car garage?',
    answer: 'Typically 24×30 or 30×40.'
  },
  {
    category: 'SIZING QUESTIONS',
    question: 'How much does a 40x60 metal building cost?',
    answer: 'Roughly $20,000–$60,000+, depending on specs.'
  },
  {
    category: 'SIZING QUESTIONS',
    question: 'What is the cheapest way to build a metal building?',
    answer: 'Keep design simple, avoid unnecessary add-ons, and choose standard sizes.'
  },
  {
    category: 'CONVERSION QUESTIONS',
    question: 'How do I get an exact quote?',
    answer: 'Use the calculator and submit your design for a detailed quote.'
  },
  {
    category: 'CONVERSION QUESTIONS',
    question: 'How long does it take to receive a quote?',
    answer: 'Typically within 24–48 hours.'
  },
  {
    category: 'CONVERSION QUESTIONS',
    question: 'Can I speak to a specialist?',
    answer: 'Yes—contact support for expert guidance.'
  },
  {
    category: 'WHY TITAN',
    question: 'Why choose Titan Metal Building Calculator?',
    answer: 'Instant pricing, custom design capabilities, an easy-to-use interface, and transparent estimates.'
  },
]

function FAQAccordion({ item }: { item: FAQItem }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="bg-background/30">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left px-6 py-5 flex items-center justify-between hover:bg-white/5 transition-colors"
      >
        <div className="flex-1">
          <h3 className="text-base font-semibold text-foreground font-sans pr-4 leading-relaxed">
            {item.question}
          </h3>
        </div>
        <ChevronDown
          className={`h-5 w-5 text-primary flex-shrink-0 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && (
        <div className="px-6 pb-5">
          <p className="text-muted-foreground text-sm font-sans leading-relaxed">
            {item.answer}
          </p>
        </div>
      )}
    </div>
  )
}

export default function FAQPage() {
  const categories = Array.from(new Set(faqData.map(item => item.category)))
  
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <FAQSchema faqs={faqData.slice(0, 20)} />
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-cover bg-center bg-no-repeat py-16 sm:py-24 mt-16 min-h-96" style={{ backgroundImage: "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/New-York-metal-warehouse-11fcV0USQBZOT62wUaFNWquzwpEVgd.webp')" }}>
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white font-sans mb-4 text-balance">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-white/90 font-sans max-w-2xl mx-auto leading-relaxed">
              Everything you need to know about prefabricated metal buildings, our calculator, and the quote process.
            </p>
          </div>
        </section>

      {/* FAQ Content */}
      <section className="py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {categories.map(category => (
            <div key={category} className="mb-12">
              <h2 className="text-xl font-bold text-foreground font-sans mb-4 uppercase tracking-wide">
                {category}
              </h2>
              <div className="bg-secondary/30 rounded-lg border border-white/10 overflow-hidden divide-y divide-white/10">
                {faqData
                  .filter(item => item.category === category)
                  .map((item, index) => (
                    <FAQAccordion key={index} item={item} />
                  ))}
              </div>
            </div>
          ))}

          {/* CTA Section */}
          <div className="mt-16 bg-primary/10 border border-primary/20 rounded-lg p-8 sm:p-12 text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-sans mb-4">
              Still have questions?
            </h3>
            <p className="text-white/80 font-sans mb-8 max-w-2xl mx-auto leading-relaxed">
              Our team of specialists is ready to help you design the perfect metal building for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+18888076006"
                className="inline-block bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-3 rounded-lg transition-colors font-sans"
              >
                Call: 1-888-807-6006
              </a>
              <a
                href="#builder"
                className="inline-block bg-white text-secondary font-semibold px-8 py-3 rounded-lg hover:bg-white/90 transition-colors font-sans"
              >
                Get Your Quote
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
