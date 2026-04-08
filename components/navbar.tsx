"use client"

import { useState } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

const buildingLinks = [
  { label: "Agricultural Buildings", href: "/buildings/agricultural" },
  { label: "Commercial Structures", href: "/buildings/commercial" },
  { label: "Equestrian Facilities", href: "/buildings/equestrian" },
  { label: "Aviation Hangars", href: "/buildings/aviation" },
  { label: "Retail & Office", href: "/buildings/retail-office" },
  { label: "Storage Solutions", href: "/buildings/storage" },
]

const navLinks = [
  { label: "Building Types", href: "#building-types" },
  { label: "Get a Quote", href: "#builder" },
  { label: "Benefits", href: "#benefits" },
  { label: "How It Works", href: "#how-it-works" },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [buildingsOpen, setBuildingsOpen] = useState(false)

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
          {/* Buildings dropdown */}
          <div className="relative" onMouseEnter={() => setBuildingsOpen(true)} onMouseLeave={() => setBuildingsOpen(false)}>
            <button className="flex items-center gap-1 text-sm text-white/70 hover:text-white transition-colors font-sans">
              Buildings
              <ChevronDown className={`h-3.5 w-3.5 transition-transform ${buildingsOpen ? "rotate-180" : ""}`} />
            </button>
            {buildingsOpen && (
              <div className="absolute top-full left-0 mt-2 w-52 bg-secondary border border-white/10 rounded-sm shadow-xl py-2 z-50">
                {buildingLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="block px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/5 font-sans transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </div>
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
          {/* Buildings group */}
          <div>
            <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest font-sans mb-2">Buildings</p>
            {buildingLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block text-white/80 hover:text-white text-sm font-sans py-1"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="border-t border-white/10 pt-2">
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
          </div>
          <Button className="bg-primary hover:bg-primary/90 text-white font-sans font-semibold w-full mt-2">
            Get a Quote
          </Button>
        </div>
      )}
    </header>
  )
}
