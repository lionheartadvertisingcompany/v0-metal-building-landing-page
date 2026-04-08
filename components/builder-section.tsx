"use client"

import { useState } from "react"
import { ArrowRight, Calculator, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"

const buildingTypes = ["Agricultural", "Commercial", "Residential", "Aviation", "Equestrian", "Storage", "Automotive", "Retail/Office"]
const roofStyles = ["Vertical Roof", "A-Frame Horizontal", "Regular Style"]

function formatCurrency(n: number) {
  return n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 })
}

function calcPrice(width: number, length: number, height: number, type: string): number {
  const baseSqFt = width * length
  const baseRate = type === "Retail/Office" ? 28 : type === "Aviation" ? 24 : type === "Equestrian" ? 20 : 18
  const heightPremium = height > 14 ? (height - 14) * 0.4 : 0
  return Math.round(baseSqFt * (baseRate + heightPremium))
}

export function BuilderSection() {
  const [width, setWidth] = useState(40)
  const [length, setLength] = useState(60)
  const [height, setHeight] = useState(14)
  const [buildingType, setBuildingType] = useState("Agricultural")
  const [roofStyle, setRoofStyle] = useState("Vertical Roof")

  const price = calcPrice(width, length, height, buildingType)
  const sqFt = width * length

  return (
    <section id="builder" className="bg-muted py-24 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <Badge variant="outline" className="mb-4 border-primary/40 text-primary font-sans text-xs uppercase tracking-widest">
            Instant Quote Tool
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground font-sans text-balance mb-4">
            Configure Your Building
          </h2>
          <p className="text-muted-foreground font-sans max-w-xl mx-auto leading-relaxed">
            Adjust the dimensions and options below. Your estimated price updates in real time.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Controls */}
          <div className="lg:col-span-3 bg-white rounded-sm border border-border p-8 space-y-8 shadow-sm">
            {/* Building type */}
            <div>
              <label className="block text-sm font-semibold text-foreground font-sans mb-3 uppercase tracking-wide">
                Building Type
              </label>
              <div className="flex flex-wrap gap-2">
                {buildingTypes.map((t) => (
                  <button
                    key={t}
                    onClick={() => setBuildingType(t)}
                    className={`px-4 py-2 rounded-sm text-sm font-sans font-medium border transition-colors ${
                      buildingType === t
                        ? "bg-primary text-white border-primary"
                        : "bg-white text-foreground border-border hover:border-primary/60 hover:text-primary"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Width slider */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm font-semibold text-foreground font-sans uppercase tracking-wide">
                  Width
                </label>
                <span className="text-primary font-bold font-sans text-lg">{width} ft</span>
              </div>
              <Slider
                min={20}
                max={200}
                step={5}
                value={[width]}
                onValueChange={([v]) => setWidth(v)}
                className="[&_[role=slider]]:bg-primary [&_[role=slider]]:border-primary"
              />
              <div className="flex justify-between text-xs text-muted-foreground font-sans mt-1">
                <span>20 ft</span><span>200 ft</span>
              </div>
            </div>

            {/* Length slider */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm font-semibold text-foreground font-sans uppercase tracking-wide">
                  Length
                </label>
                <span className="text-primary font-bold font-sans text-lg">{length} ft</span>
              </div>
              <Slider
                min={20}
                max={400}
                step={5}
                value={[length]}
                onValueChange={([v]) => setLength(v)}
                className="[&_[role=slider]]:bg-primary [&_[role=slider]]:border-primary"
              />
              <div className="flex justify-between text-xs text-muted-foreground font-sans mt-1">
                <span>20 ft</span><span>400 ft</span>
              </div>
            </div>

            {/* Height slider */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm font-semibold text-foreground font-sans uppercase tracking-wide">
                  Eave Height
                </label>
                <span className="text-primary font-bold font-sans text-lg">{height} ft</span>
              </div>
              <Slider
                min={8}
                max={40}
                step={1}
                value={[height]}
                onValueChange={([v]) => setHeight(v)}
                className="[&_[role=slider]]:bg-primary [&_[role=slider]]:border-primary"
              />
              <div className="flex justify-between text-xs text-muted-foreground font-sans mt-1">
                <span>8 ft</span><span>40 ft</span>
              </div>
            </div>

            {/* Roof style */}
            <div>
              <label className="block text-sm font-semibold text-foreground font-sans mb-3 uppercase tracking-wide">
                Roof Style
              </label>
              <div className="flex flex-wrap gap-2">
                {roofStyles.map((r) => (
                  <button
                    key={r}
                    onClick={() => setRoofStyle(r)}
                    className={`px-4 py-2 rounded-sm text-sm font-sans font-medium border transition-colors ${
                      roofStyle === r
                        ? "bg-primary text-white border-primary"
                        : "bg-white text-foreground border-border hover:border-primary/60 hover:text-primary"
                    }`}
                  >
                    {r}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Price summary */}
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-secondary rounded-sm p-8 text-white">
              <div className="flex items-center gap-2 mb-6">
                <Calculator className="h-5 w-5 text-primary" />
                <span className="text-sm font-semibold font-sans uppercase tracking-wide text-white/70">
                  Estimated Price
                </span>
              </div>
              <div className="text-5xl font-bold font-sans mb-1">
                {formatCurrency(price)}
              </div>
              <div className="text-white/50 text-sm font-sans mb-8">
                {formatCurrency(Math.round(price / sqFt))}/sq ft &nbsp;&bull;&nbsp; {sqFt.toLocaleString()} sq ft total
              </div>

              {/* Summary rows */}
              <div className="space-y-3 border-t border-white/10 pt-6 mb-8">
                {[
                  { label: "Dimensions", value: `${width}' W × ${length}' L × ${height}' H` },
                  { label: "Type", value: buildingType },
                  { label: "Roof", value: roofStyle },
                  { label: "Lead Time", value: "6–8 weeks" },
                ].map((row) => (
                  <div key={row.label} className="flex justify-between text-sm font-sans">
                    <span className="text-white/50">{row.label}</span>
                    <span className="text-white font-medium">{row.value}</span>
                  </div>
                ))}
              </div>

              <Button
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-white font-sans font-bold rounded-sm h-12"
              >
                Get My Full Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <div className="flex items-start gap-3 bg-primary/10 border border-primary/20 rounded-sm p-4">
              <Info className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
              <p className="text-xs text-muted-foreground font-sans leading-relaxed">
                This is an estimated range. Final pricing includes delivery, foundation anchoring, and 
                optional insulation packages. A specialist will confirm your quote within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
