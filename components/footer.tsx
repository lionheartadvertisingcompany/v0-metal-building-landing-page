import Link from "next/link"
import { categorySlugMap } from "@/lib/category-data"

const productLinks = [
  "Agricultural Buildings",
  "Commercial Structures",
  "Equestrian Facilities",
  "Aviation Hangars",
  "Retail & Office",
  "Storage Solutions",
]

const footerLinks: Record<string, { label: string; href: string }[]> = {
  Products: productLinks.map((label) => ({
    label,
    href: categorySlugMap[label] ?? "#",
  })),
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Sustainability", href: "#" },
    { label: "Press", href: "#" },
    { label: "Careers", href: "#" },
  ],
  Resources: [
    { label: "Building Calculator", href: "#builder" },
    { label: "Quote Request", href: "#builder" },
    { label: "Technical Specs", href: "#" },
    { label: "Installation Guide", href: "#" },
    { label: "FAQ", href: "/faq" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Warranty Information", href: "#" },
    { label: "Accessibility", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-secondary border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 mb-10 sm:mb-12">
          {/* Brand column */}
          <div className="col-span-2 sm:col-span-3 md:col-span-1">
            <div className="flex items-center gap-2 text-white mb-4">
              <img 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/titan%20steel%20structures%20logo-y6dkkVGPMuFB8ZzpSGTDzYmelRlLJt.png"
                alt="Titan Steel Structures"
                className="h-8 w-auto"
              />
              <div className="flex flex-col">
                <span className="font-bold text-sm font-sans">Titan</span>
                <span className="text-xs text-white/70 font-sans">Steel Structures</span>
              </div>
            </div>
            <p className="text-white/50 text-sm font-sans leading-relaxed">
              America&apos;s trusted prefabricated metal building provider. Quality American-made steel structures for every application.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold font-sans text-sm mb-4 uppercase tracking-wide">
                {category}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/50 hover:text-white text-sm font-sans transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm font-sans">
            &copy; {new Date().getFullYear()} Titan Steel Structures, Inc. All rights reserved.
          </p>
          <p className="text-white/30 text-xs font-sans">
            Prices shown are estimates. Final pricing confirmed by a specialist.
          </p>
        </div>
      </div>
    </footer>
  )
}
