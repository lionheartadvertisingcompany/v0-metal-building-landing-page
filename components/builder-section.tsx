"use client"

import { useState, useMemo, lazy, Suspense } from "react"
import { ArrowRight, Minus, Plus, Info, Calculator, CheckCircle2, Box, LayoutPanelTop } from "lucide-react"

const Building3DPreview = lazy(() =>
  import("@/components/building-3d-preview").then((m) => ({ default: m.Building3DPreview }))
)
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------
type RoofStyle = "gable" | "single-slope"
type Gauge = "12" | "14"

interface Config {
  width: number
  length: number
  height: number
  roofStyle: RoofStyle
  gauge: Gauge
  doors: number
  windows: number
}

// ---------------------------------------------------------------------------
// Pricing logic — exact rules
//   Base rate:        $12 / sq ft
//   12 gauge:         +$2 / sq ft
//   Single slope:     +10% on structural cost
//   Roll-up door:     $1,200 each
//   Window:           $250 each
//   Price range:      ±10% of estimated total
// ---------------------------------------------------------------------------
const BASE_RATE_PER_SQFT = 12        // $/sq ft
const GAUGE_12_PREMIUM   = 2         // $/sq ft added for 12 gauge
const DOOR_COST          = 1_200     // per roll-up door
const WINDOW_COST        = 250       // per window
const SINGLE_SLOPE_SURCHARGE = 0.10  // 10% on structural cost

function calcPricing(c: Config) {
  const sqFt       = c.width * c.length
  const ratePerSqFt = BASE_RATE_PER_SQFT + (c.gauge === "12" ? GAUGE_12_PREMIUM : 0)
  let structuralCost = sqFt * ratePerSqFt
  if (c.roofStyle === "single-slope") {
    structuralCost *= (1 + SINGLE_SLOPE_SURCHARGE)
  }
  const doorCost   = c.doors   * DOOR_COST
  const windowCost = c.windows * WINDOW_COST
  const subtotal   = structuralCost + doorCost + windowCost
  // ±10% price range
  const low  = Math.round(subtotal * 0.90)
  const high = Math.round(subtotal * 1.10)
  return {
    sqFt,
    subtotal:       Math.round(subtotal),
    low,
    high,
    structuralCost: Math.round(structuralCost),
    doorCost,
    windowCost,
    ratePerSqFt,
  }
}

function fmt(n: number) {
  return n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 })
}

// ---------------------------------------------------------------------------
// SVG Building Preview
// ---------------------------------------------------------------------------
function BuildingPreview({ config }: { config: Config }) {
  // Normalise dims into a fixed canvas (280 x 200)
  const W = 280
  const H = 200
  const pad = 24

  // Isometric-style orthographic front elevation
  const maxWidth = 200
  const maxHeight = 40
  const drawWidth = Math.max(80, Math.min(W - pad * 2, ((config.width / maxWidth) * (W - pad * 2))))
  const drawHeight = Math.max(50, Math.min(H * 0.55, ((config.height / maxHeight) * (H * 0.55))))
  const startX = (W - drawWidth) / 2
  const wallTop = H - pad - drawHeight
  const wallBottom = H - pad

  // Roof
  const ridgeX = startX + drawWidth / 2
  const ridgeY = wallTop - (config.roofStyle === "gable" ? drawHeight * 0.28 : 0)
  const eaveRightY = config.roofStyle === "single-slope" ? wallTop - drawHeight * 0.22 : wallTop

  // Doors (up to 4 visible)
  const doorW = Math.max(10, drawWidth * 0.1)
  const doorH = Math.min(drawHeight * 0.65, doorW * 1.9)
  const doorsToShow = Math.min(config.doors, 3)
  const doorPositions: number[] = []
  for (let i = 0; i < doorsToShow; i++) {
    const segment = drawWidth / (doorsToShow + 1)
    doorPositions.push(startX + segment * (i + 1) - doorW / 2)
  }

  // Windows
  const winW = Math.max(8, drawWidth * 0.07)
  const winH = winW * 0.85
  const windowsToShow = Math.min(config.windows, 4)
  const windowPositions: { x: number; y: number }[] = []
  for (let i = 0; i < windowsToShow; i++) {
    const segment = drawWidth / (windowsToShow + 1)
    windowPositions.push({
      x: startX + segment * (i + 1) - winW / 2,
      y: wallTop + drawHeight * 0.22,
    })
  }

  const roofPoints =
    config.roofStyle === "gable"
      ? `${startX},${wallTop} ${ridgeX},${ridgeY} ${startX + drawWidth},${wallTop}`
      : `${startX},${wallTop} ${startX + drawWidth},${eaveRightY} ${startX + drawWidth},${wallTop}`

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      width="100%"
      height="100%"
      aria-label={`Building preview: ${config.width}ft wide, ${config.length}ft long, ${config.height}ft tall, ${config.roofStyle} roof`}
    >
      {/* Sky gradient background */}
      <defs>
        <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e8eef6" />
          <stop offset="100%" stopColor="#c8d8e8" />
        </linearGradient>
        <linearGradient id="wallGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#cfd8e3" />
          <stop offset="100%" stopColor="#9faec0" />
        </linearGradient>
        <linearGradient id="roofGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#5b84b1" />
          <stop offset="100%" stopColor="#3b6490" />
        </linearGradient>
      </defs>

      {/* Background */}
      <rect width={W} height={H} fill="url(#skyGrad)" />

      {/* Ground */}
      <rect x={0} y={wallBottom} width={W} height={H - wallBottom} fill="#d1d9e0" />

      {/* Wall */}
      <rect x={startX} y={wallTop} width={drawWidth} height={drawHeight} fill="url(#wallGrad)" stroke="#8fa0b4" strokeWidth="1.5" />

      {/* Roof */}
      <polygon points={roofPoints} fill="url(#roofGrad)" stroke="#2d5280" strokeWidth="1.5" />

      {/* Roof ridge cap line */}
      {config.roofStyle === "gable" && (
        <line x1={ridgeX - 1} y1={ridgeY} x2={ridgeX + 1} y2={ridgeY} stroke="#1e3a5c" strokeWidth="2" />
      )}

      {/* Wall panel lines */}
      {Array.from({ length: Math.floor(drawWidth / 18) }).map((_, i) => (
        <line
          key={i}
          x1={startX + (i + 1) * (drawWidth / (Math.floor(drawWidth / 18) + 1))}
          y1={wallTop}
          x2={startX + (i + 1) * (drawWidth / (Math.floor(drawWidth / 18) + 1))}
          y2={wallBottom}
          stroke="#8fa0b4"
          strokeWidth="0.5"
          strokeDasharray="2,3"
        />
      ))}

      {/* Doors */}
      {doorPositions.map((dx, i) => (
        <g key={i}>
          <rect x={dx} y={wallBottom - doorH} width={doorW} height={doorH} fill="#1e3a5c" rx="1" />
          <rect x={dx + doorW * 0.05} y={wallBottom - doorH + doorH * 0.05} width={doorW * 0.9} height={doorH * 0.9} fill="#2d5280" rx="1" />
          {/* Door handle */}
          <circle cx={dx + doorW * 0.8} cy={wallBottom - doorH * 0.45} r={1.5} fill="#7eb3e8" />
        </g>
      ))}

      {/* Windows */}
      {windowPositions.map((wp, i) => (
        <g key={i}>
          <rect x={wp.x} y={wp.y} width={winW} height={winH} fill="#a8c8e8" stroke="#5b84b1" strokeWidth="1" rx="1" />
          <line x1={wp.x + winW / 2} y1={wp.y} x2={wp.x + winW / 2} y2={wp.y + winH} stroke="#5b84b1" strokeWidth="0.5" />
          <line x1={wp.x} y1={wp.y + winH / 2} x2={wp.x + winW} y2={wp.y + winH / 2} stroke="#5b84b1" strokeWidth="0.5" />
        </g>
      ))}

      {/* Dimension labels */}
      {/* Width arrow */}
      <line x1={startX} y1={wallBottom + 10} x2={startX + drawWidth} y2={wallBottom + 10} stroke="#3b6490" strokeWidth="1" markerEnd="url(#arr)" markerStart="url(#arr)" />
      <text x={W / 2} y={wallBottom + 20} textAnchor="middle" fontSize="9" fill="#3b6490" fontFamily="sans-serif" fontWeight="600">
        {config.width}ft
      </text>
      {/* Height arrow */}
      <line x1={startX - 10} y1={wallTop} x2={startX - 10} y2={wallBottom} stroke="#3b6490" strokeWidth="1" />
      <text x={startX - 14} y={(wallTop + wallBottom) / 2 + 4} textAnchor="middle" fontSize="9" fill="#3b6490" fontFamily="sans-serif" fontWeight="600" transform={`rotate(-90, ${startX - 14}, ${(wallTop + wallBottom) / 2})`}>
        {config.height}ft
      </text>
    </svg>
  )
}

// ---------------------------------------------------------------------------
// Counter input
// ---------------------------------------------------------------------------
function Counter({
  label,
  value,
  min,
  max,
  onChange,
}: {
  label: string
  value: number
  min: number
  max: number
  onChange: (n: number) => void
}) {
  return (
    <div>
      <label className="block text-xs font-semibold text-foreground font-sans mb-2 uppercase tracking-wider">
        {label}
      </label>
      <div className="flex items-center gap-0 border border-border rounded-sm overflow-hidden w-fit">
        <button
          onClick={() => onChange(Math.max(min, value - 1))}
          disabled={value <= min}
          className="w-9 h-9 flex items-center justify-center bg-muted hover:bg-border disabled:opacity-40 transition-colors"
          aria-label={`Decrease ${label}`}
        >
          <Minus className="h-3.5 w-3.5 text-foreground" />
        </button>
        <span className="w-12 text-center text-sm font-bold font-sans text-foreground select-none tabular-nums">
          {value}
        </span>
        <button
          onClick={() => onChange(Math.min(max, value + 1))}
          disabled={value >= max}
          className="w-9 h-9 flex items-center justify-center bg-muted hover:bg-border disabled:opacity-40 transition-colors"
          aria-label={`Increase ${label}`}
        >
          <Plus className="h-3.5 w-3.5 text-foreground" />
        </button>
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Slider row
// ---------------------------------------------------------------------------
function SliderRow({
  label,
  value,
  min,
  max,
  step,
  unit,
  onChange,
}: {
  label: string
  value: number
  min: number
  max: number
  step: number
  unit: string
  onChange: (v: number) => void
}) {
  return (
    <div>
      <div className="flex justify-between items-baseline mb-2.5">
        <label className="text-xs font-semibold text-foreground font-sans uppercase tracking-wider">
          {label}
        </label>
        <div className="flex items-baseline gap-1">
          <span className="text-xl font-bold text-primary font-sans tabular-nums">{value}</span>
          <span className="text-xs text-muted-foreground font-sans">{unit}</span>
        </div>
      </div>
      <Slider
        min={min}
        max={max}
        step={step}
        value={[value]}
        onValueChange={([v]) => onChange(v)}
        className="[&_[role=slider]]:bg-primary [&_[role=slider]]:border-primary [&_[role=slider]]:shadow-md"
      />
      <div className="flex justify-between text-[10px] text-muted-foreground font-sans mt-1.5 select-none">
        <span>{min} {unit}</span>
        <span>{max} {unit}</span>
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Main export
// ---------------------------------------------------------------------------
export function BuilderSection() {
  const [config, setConfig] = useState<Config>({
    width: 40,
    length: 60,
    height: 14,
    roofStyle: "gable",
    gauge: "14",
    doors: 1,
    windows: 2,
  })
  const [previewMode, setPreviewMode] = useState<"2d" | "3d">("3d")

  const set = <K extends keyof Config>(key: K, value: Config[K]) =>
    setConfig((prev) => ({ ...prev, [key]: value }))

  const pricing = useMemo(() => calcPricing(config), [config])

  const lineItems = [
    { label: "Steel Structure", value: fmt(pricing.structuralCost) },
    { label: `Doors (×${config.doors})`, value: fmt(pricing.doorCost) },
    { label: `Windows (×${config.windows})`, value: fmt(pricing.windowCost) },
  ]

  const summaryRows = [
    { label: "Dimensions", value: `${config.width}′ W × ${config.length}′ L × ${config.height}′ H` },
    { label: "Roof Style", value: config.roofStyle === "gable" ? "Gable (A-Frame)" : "Single Slope" },
    { label: "Steel Gauge", value: `${config.gauge} gauge` },
    { label: "Square Footage", value: `${pricing.sqFt.toLocaleString()} sq ft` },
    { label: "Base Rate / sq ft", value: `$${pricing.ratePerSqFt}` },
    { label: "Est. Lead Time", value: "6–8 weeks" },
  ]

  return (
    <section id="builder" className="bg-muted py-24 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section header */}
        <div className="text-center mb-14">
          <Badge variant="outline" className="mb-4 border-primary/40 text-primary font-sans text-xs uppercase tracking-widest">
            Instant Quote Tool
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground font-sans text-balance mb-4">
            Configure Your Building
          </h2>
          <p className="text-muted-foreground font-sans max-w-xl mx-auto leading-relaxed">
            Adjust every dimension and option below. Your estimated price and 3D preview update in real time.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-5 gap-6 items-start">

          {/* ── LEFT: Inputs ─────────────────────────────────────────────── */}
          <div className="lg:col-span-3 bg-card rounded-sm border border-border shadow-sm overflow-hidden">

            {/* Panel header */}
            <div className="bg-secondary px-6 py-4 flex items-center gap-3">
              <Calculator className="h-4 w-4 text-primary" />
              <span className="text-white font-semibold font-sans text-sm uppercase tracking-wider">
                Building Specifications
              </span>
            </div>

            <div className="p-6 space-y-7">

              {/* Dimension sliders */}
              <div className="space-y-6">
                <h3 className="text-[11px] font-bold text-muted-foreground font-sans uppercase tracking-widest border-b border-border pb-2">
                  Dimensions
                </h3>
                <SliderRow label="Width" value={config.width} min={20} max={200} step={5} unit="ft" onChange={(v) => set("width", v)} />
                <SliderRow label="Length" value={config.length} min={20} max={300} step={5} unit="ft" onChange={(v) => set("length", v)} />
                <SliderRow label="Eave Height" value={config.height} min={10} max={40} step={1} unit="ft" onChange={(v) => set("height", v)} />
              </div>

              {/* Roof style */}
              <div className="space-y-3">
                <h3 className="text-[11px] font-bold text-muted-foreground font-sans uppercase tracking-widest border-b border-border pb-2">
                  Roof Style
                </h3>
                <Select value={config.roofStyle} onValueChange={(v) => set("roofStyle", v as RoofStyle)}>
                  <SelectTrigger className="w-full font-sans bg-background border-border h-10 rounded-sm focus:ring-primary">
                    <SelectValue placeholder="Select roof style" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="gable" className="font-sans">Gable (A-Frame) — symmetric double pitch</SelectItem>
                    <SelectItem value="single-slope" className="font-sans">Single Slope — one-directional drainage</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Steel gauge */}
              <div className="space-y-3">
                <h3 className="text-[11px] font-bold text-muted-foreground font-sans uppercase tracking-widest border-b border-border pb-2">
                  Steel Gauge
                </h3>
                <div className="grid grid-cols-2 gap-3" role="radiogroup" aria-label="Steel gauge selection">
                  {(["14", "12"] as Gauge[]).map((g) => {
                    const active = config.gauge === g
                    return (
                      <button
                        key={g}
                        role="radio"
                        aria-checked={active}
                        onClick={() => set("gauge", g)}
                        className={`relative flex flex-col gap-1 p-4 rounded-sm border text-left transition-all ${
                          active
                            ? "border-primary bg-primary/5 ring-1 ring-primary"
                            : "border-border bg-background hover:border-primary/50"
                        }`}
                      >
                        {active && (
                          <CheckCircle2 className="absolute top-3 right-3 h-4 w-4 text-primary" />
                        )}
                        <span className="text-base font-bold font-sans text-foreground">
                          {g} gauge
                        </span>
                        <span className="text-[11px] text-muted-foreground font-sans leading-snug">
                          {g === "14"
                            ? "Standard — residential & light commercial"
                            : "Heavy-duty — industrial & high snow/wind loads"}
                        </span>
                        {g === "12" && (
                          <span className="inline-block mt-1 text-[10px] font-bold text-primary font-sans uppercase tracking-wide">
                            +${GAUGE_12_PREMIUM}.00/sq ft
                          </span>
                        )}
                        {g === "14" && (
                          <span className="inline-block mt-1 text-[10px] font-bold text-muted-foreground font-sans uppercase tracking-wide">
                            Standard rate
                          </span>
                        )}
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Openings */}
              <div className="space-y-4">
                <h3 className="text-[11px] font-bold text-muted-foreground font-sans uppercase tracking-widest border-b border-border pb-2">
                  Openings
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  <Counter label="Roll-up Doors — $1,200 ea." value={config.doors} min={0} max={12} onChange={(v) => set("doors", v)} />
                  <Counter label="Windows — $250 ea." value={config.windows} min={0} max={20} onChange={(v) => set("windows", v)} />
                </div>
              </div>

            </div>
          </div>

          {/* ── RIGHT: Preview + Pricing ─────────────────────────────────── */}
          <div className="lg:col-span-2 flex flex-col gap-4">

            {/* Building preview */}
            <div className="bg-card border border-border rounded-sm shadow-sm overflow-hidden">
              <div className="bg-secondary px-4 py-3 flex items-center justify-between">
                <span className="text-white font-semibold font-sans text-sm uppercase tracking-wider">
                  Building Preview
                </span>
                {/* 2D / 3D toggle */}
                <div className="flex items-center gap-1 bg-white/10 rounded-sm p-0.5">
                  {([["3d", Box, "3D"], ["2d", LayoutPanelTop, "2D"]] as const).map(([mode, Icon, label]) => (
                    <button
                      key={mode}
                      onClick={() => setPreviewMode(mode)}
                      className={`flex items-center gap-1.5 px-3 py-1 rounded-[3px] text-xs font-semibold font-sans transition-colors ${
                        previewMode === mode
                          ? "bg-primary text-white"
                          : "text-white/60 hover:text-white"
                      }`}
                      aria-pressed={previewMode === mode}
                    >
                      <Icon className="h-3 w-3" />
                      {label}
                    </button>
                  ))}
                </div>
              </div>
              <div className="bg-slate-900" style={{ height: 280 }}>
                {previewMode === "3d" ? (
                  <Suspense
                    fallback={
                      <div className="w-full h-full flex items-center justify-center text-slate-400 text-xs font-sans">
                        Loading 3D preview...
                      </div>
                    }
                  >
                    <Building3DPreview config={config} />
                  </Suspense>
                ) : (
                  <div className="p-4 h-full bg-gradient-to-b from-slate-100 to-slate-200">
                    <BuildingPreview config={config} />
                  </div>
                )}
              </div>
              {/* Quick stats strip */}
              <div className="grid grid-cols-3 divide-x divide-border border-t border-border">
                {[
                  { label: "Sq Ft", value: pricing.sqFt.toLocaleString() },
                  { label: "Doors", value: config.doors },
                  { label: "Windows", value: config.windows },
                ].map((s) => (
                  <div key={s.label} className="flex flex-col items-center py-3">
                    <span className="text-base font-bold text-foreground font-sans tabular-nums">{s.value}</span>
                    <span className="text-[10px] text-muted-foreground font-sans uppercase tracking-wider">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing card */}
            <div className="bg-secondary rounded-sm shadow-sm overflow-hidden">
              <div className="px-6 pt-6 pb-5">
                <p className="text-white/60 text-[11px] font-sans uppercase tracking-widest mb-1">Estimated Price</p>
                <div className="flex items-baseline gap-2 flex-wrap">
                  <span className="text-4xl font-bold text-white font-sans tabular-nums">{fmt(pricing.subtotal)}</span>
                </div>
                {/* ±10% range bar */}
                <div className="mt-3 flex items-center justify-between text-[11px] font-sans mb-1">
                  <span className="text-white/50">Low <span className="text-white/80 font-semibold">{fmt(pricing.low)}</span></span>
                  <span className="text-white/40 text-[10px]">± 10%</span>
                  <span className="text-white/50">High <span className="text-white/80 font-semibold">{fmt(pricing.high)}</span></span>
                </div>
                <div className="relative h-1.5 rounded-full bg-white/10 overflow-hidden">
                  <div className="absolute left-[9%] right-[9%] top-0 bottom-0 bg-primary/70 rounded-full" />
                  <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-0.5 bg-white/60" />
                </div>
                <p className="text-white/40 text-xs font-sans mt-2.5">
                  ${pricing.ratePerSqFt}/sq ft &bull; {pricing.sqFt.toLocaleString()} sq ft total
                </p>
              </div>

              {/* Line items */}
              <div className="border-t border-white/10 px-6 py-4 space-y-2">
                <p className="text-white/50 text-[10px] font-sans uppercase tracking-widest mb-3">Cost Breakdown</p>
                {lineItems.map((item) => (
                  <div key={item.label} className="flex justify-between items-center">
                    <span className="text-white/60 text-xs font-sans">{item.label}</span>
                    <span className="text-white text-sm font-semibold font-sans tabular-nums">{item.value}</span>
                  </div>
                ))}
                <div className="border-t border-white/10 pt-2 flex justify-between items-center">
                  <span className="text-white/80 text-xs font-semibold font-sans uppercase tracking-wide">Total Est.</span>
                  <span className="text-primary font-bold text-base font-sans tabular-nums">{fmt(pricing.subtotal)}</span>
                </div>
              </div>

              {/* Spec summary */}
              <div className="border-t border-white/10 px-6 py-4 space-y-2.5">
                <p className="text-white/50 text-[10px] font-sans uppercase tracking-widest mb-3">Configuration Summary</p>
                {summaryRows.map((row) => (
                  <div key={row.label} className="flex justify-between text-xs font-sans gap-4">
                    <span className="text-white/50 shrink-0">{row.label}</span>
                    <span className="text-white font-medium text-right">{row.value}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="px-6 pb-6 space-y-3">
                <Button
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-white font-sans font-bold rounded-sm h-12 text-sm"
                >
                  Get My Full Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <p className="text-center text-white/30 text-[10px] font-sans leading-snug">
                  No obligation. A specialist will confirm your quote within 24 hours.
                </p>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="flex items-start gap-3 bg-primary/10 border border-primary/20 rounded-sm p-4">
              <Info className="h-4 w-4 text-primary mt-0.5 shrink-0" />
              <p className="text-xs text-muted-foreground font-sans leading-relaxed">
                Estimates include structural steel only. Delivery, site prep, foundation, and insulation packages quoted separately by a specialist.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
