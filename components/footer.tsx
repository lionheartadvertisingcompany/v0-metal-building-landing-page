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
    { label: "About Us", href: "#" },
    { label: "Case Studies", href: "#" },
    { label: "Sustainability", href: "#" },
    { label: "Press", href: "#" },
    { label: "Careers", href: "#" },
  ],
  Resources: [
    { label: "Building Calculator", href: "#builder" },
    { label: "Quote Request", href: "#builder" },
    { label: "Technical Specs", href: "#" },
    { label: "Installation Guide", href: "#" },
    { label: "FAQ", href: "#" },
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
              <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center">
                <span className="font-bold text-sm text-white">MB</span>
              </div>
              <span className="font-bold text-sm font-sans">Metal Builder</span>
            </div>
            <p className="text-white/50 text-sm font-sans leading-relaxed">
              Premium prefabricated metal buildings. Fast, reliable, and cost-effective steel structures for any application.
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
                    <a
                      href={link.href}
                      className="text-white/50 hover:text-white text-sm font-sans transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm font-sans">
            &copy; {new Date().getFullYear()} Metal Builder. All rights reserved.
          </p>
          <p className="text-white/30 text-xs font-sans">
            Prices shown are estimates. Final pricing confirmed by a specialist.
          </p>
        </div>
      </div>
    </footer>
  )
}
