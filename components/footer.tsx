import { Building2 } from "lucide-react"

const footerLinks = {
  Products: ["Warehouses", "Garages & Workshops", "Agricultural Barns", "Retail & Office", "Carports & Canopies"],
  Company: ["About Us", "Case Studies", "Careers", "Press"],
  Resources: ["Building Calculator", "Size Guide", "Permit Help", "Contractor Network", "FAQ"],
  Legal: ["Privacy Policy", "Terms of Service", "Warranty", "Accessibility"],
}

export function Footer() {
  return (
    <footer className="bg-secondary border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 text-white mb-4">
              <Building2 className="h-7 w-7 text-primary" />
              <span className="font-bold text-lg font-sans">
                Steel<span className="text-primary">Forge</span>
              </span>
            </div>
            <p className="text-white/50 text-sm font-sans leading-relaxed">
              America&apos;s premier prefabricated metal building supplier since 1988.
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
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white/50 hover:text-white text-sm font-sans transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm font-sans">
            &copy; {new Date().getFullYear()} SteelForge Buildings, Inc. All rights reserved.
          </p>
          <p className="text-white/30 text-xs font-sans">
            Prices shown are estimates. Final pricing confirmed by a specialist.
          </p>
        </div>
      </div>
    </footer>
  )
}
