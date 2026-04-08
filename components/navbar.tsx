"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { label: "Building Types", href: "#building-types" },
  { label: "Get a Quote", href: "#builder" },
  { label: "Benefits", href: "#benefits" },
  { label: "How It Works", href: "#how-it-works" },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-secondary/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3 text-white hover:opacity-90 transition-opacity">
          <img 
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/titan%20steel%20structures%20logo-y6dkkVGPMuFB8ZzpSGTDzYmelRlLJt.png"
            alt="Titan Steel Structures"
            className="h-8 w-auto"
          />
          <div className="flex flex-col leading-tight">
            <span className="font-bold text-sm tracking-tight font-sans">Titan</span>
            <span className="text-xs text-white/70 font-sans">Steel Structures</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-white/70 hover:text-white transition-colors font-sans"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" className="text-white/70 hover:text-white hover:bg-white/10 font-sans">
            Sign In
          </Button>
          <Button className="bg-primary hover:bg-primary/90 text-white font-sans font-semibold px-5">
            Get a Quote
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-secondary border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block text-white/80 hover:text-white text-sm font-sans py-1"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Button className="bg-primary hover:bg-primary/90 text-white font-sans font-semibold w-full mt-2">
            Get a Quote
          </Button>
        </div>
      )}
    </header>
  )
}
