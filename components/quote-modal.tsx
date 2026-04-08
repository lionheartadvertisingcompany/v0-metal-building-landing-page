"use client"

import { useState } from "react"
import { X, CheckCircle2, Loader2, User, Mail, Phone, MapPin, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------
interface QuoteModalProps {
  open: boolean
  onClose: () => void
  pricing: {
    subtotal: number
    low: number
    high: number
    sqFt: number
    totalDoors: number
    totalWindows: number
  }
  config: {
    width: number
    length: number
    height: number
    roofStyle: string
    gauge: string
    // windows is now per-type; totalWindows comes from pricing
  }
}

interface FormFields {
  name: string
  email: string
  phone: string
  zip: string
}

interface FormErrors {
  name?: string
  email?: string
  phone?: string
  zip?: string
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
function fmt(n: number) {
  return n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 })
}

function validate(fields: FormFields): FormErrors {
  const errors: FormErrors = {}

  if (!fields.name.trim()) {
    errors.name = "Full name is required."
  } else if (fields.name.trim().length < 2) {
    errors.name = "Please enter your full name."
  }

  if (!fields.email.trim()) {
    errors.email = "Email address is required."
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.trim())) {
    errors.email = "Please enter a valid email address."
  }

  if (!fields.phone.trim()) {
    errors.phone = "Phone number is required."
  } else if (!/^\+?[\d\s\-().]{7,20}$/.test(fields.phone.trim())) {
    errors.phone = "Please enter a valid phone number."
  }

  if (!fields.zip.trim()) {
    errors.zip = "ZIP code is required."
  } else if (!/^\d{5}(-\d{4})?$/.test(fields.zip.trim())) {
    errors.zip = "Please enter a valid 5-digit ZIP code."
  }

  return errors
}

// Mock API call — resolves after 1.5 s
async function submitQuote(fields: FormFields, config: QuoteModalProps["config"], pricing: QuoteModalProps["pricing"]): Promise<void> {
  const response = await fetch("/api/send-quote", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: fields.name,
      email: fields.email,
      phone: fields.phone,
      zipCode: fields.zip,
      width: config.width,
      length: config.length,
      height: config.height,
      roofStyle: config.roofStyle,
      gauge: config.gauge,
      totalDoors: pricing.totalDoors,
      totalWindows: pricing.totalWindows,
      estimatedPrice: pricing.subtotal,
      priceRange: { low: pricing.low, high: pricing.high },
    }),
  })

  if (!response.ok) {
    throw new Error("Failed to submit quote")
  }
}

// ---------------------------------------------------------------------------
// Field component
// ---------------------------------------------------------------------------
function Field({
  id,
  label,
  icon: Icon,
  type = "text",
  placeholder,
  value,
  error,
  onChange,
}: {
  id: string
  label: string
  icon: React.ElementType
  type?: string
  placeholder: string
  value: string
  error?: string
  onChange: (v: string) => void
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-xs font-semibold text-foreground font-sans uppercase tracking-wider">
        {label}
      </label>
      <div className="relative">
        <Icon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          autoComplete={
            id === "name" ? "name" :
            id === "email" ? "email" :
            id === "phone" ? "tel" :
            id === "zip" ? "postal-code" : "off"
          }
          className={`w-full h-10 pl-10 pr-3 rounded-sm border font-sans text-sm bg-background text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 transition-colors ${
            error
              ? "border-red-400 focus:ring-red-400/30"
              : "border-border focus:ring-primary/30 focus:border-primary"
          }`}
        />
      </div>
      {error && (
        <p className="flex items-center gap-1.5 text-xs text-red-500 font-sans" role="alert">
          <AlertCircle className="h-3 w-3 shrink-0" />
          {error}
        </p>
      )}
    </div>
  )
}

// ---------------------------------------------------------------------------
// Main modal
// ---------------------------------------------------------------------------
export function QuoteModal({ open, onClose, pricing, config }: QuoteModalProps) {
  const [fields, setFields] = useState<FormFields>({ name: "", email: "", phone: "", zip: "" })
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle")

  if (!open) return null

  function setField(key: keyof FormFields) {
    return (value: string) => {
      setFields((prev) => ({ ...prev, [key]: value }))
      // Clear the error for this field as user types
      if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }))
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const newErrors = validate(fields)
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    setStatus("submitting")
    try {
      await submitQuote(fields, config, pricing)
      setStatus("success")
    } catch {
      setStatus("idle")
      setErrors({ email: "Something went wrong. Please try again." })
    }
  }

  function handleClose() {
    onClose()
    // Reset after close animation (or immediately)
    setTimeout(() => {
      setFields({ name: "", email: "", phone: "", zip: "" })
      setErrors({})
      setStatus("idle")
    }, 300)
  }

  return (
    /* Backdrop */
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="quote-modal-title"
      onClick={(e) => { if (e.target === e.currentTarget) handleClose() }}
    >
      {/* Panel */}
      <div className="relative w-full max-w-lg bg-card rounded-sm shadow-2xl border border-border overflow-hidden max-h-[90dvh] flex flex-col">

        {/* Header */}
        <div className="bg-secondary px-6 py-5 flex items-center justify-between">
          <div>
            <h2 id="quote-modal-title" className="text-white font-bold font-sans text-lg leading-tight">
              Get Your Final Quote
            </h2>
            <p className="text-white/50 text-xs font-sans mt-0.5">
              A specialist will confirm your pricing within 24 hours.
            </p>
          </div>
          <button
            onClick={handleClose}
            aria-label="Close quote form"
            className="text-white/40 hover:text-white transition-colors p-1 rounded-sm hover:bg-white/10"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {status === "success" ? (
          /* ── Success state ── */
          <div className="px-6 py-14 flex flex-col items-center text-center gap-4">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-2">
              <CheckCircle2 className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground font-sans">Quote Request Submitted!</h3>
            <p className="text-muted-foreground font-sans text-sm leading-relaxed max-w-sm">
              Thank you, <strong className="text-foreground">{fields.name.split(" ")[0]}</strong>. Our team will review your{" "}
              <strong className="text-foreground">{config.width}′ × {config.length}′ × {config.height}′</strong> building
              configuration and reach out to <strong className="text-foreground">{fields.email}</strong> within 24 hours with a
              detailed quote.
            </p>
            {/* Quote summary chip */}
            <div className="mt-2 bg-muted border border-border rounded-sm px-6 py-4 w-full text-left space-y-1.5">
              <p className="text-[10px] text-muted-foreground font-sans uppercase tracking-widest mb-2">Your Estimate</p>
              <div className="flex justify-between text-sm font-sans">
                <span className="text-muted-foreground">Estimated Total</span>
                <span className="font-bold text-foreground">{fmt(pricing.subtotal)}</span>
              </div>
              <div className="flex justify-between text-xs font-sans">
                <span className="text-muted-foreground">Price Range</span>
                <span className="text-muted-foreground">{fmt(pricing.low)} – {fmt(pricing.high)}</span>
              </div>
              <div className="flex justify-between text-xs font-sans">
                <span className="text-muted-foreground">Square Footage</span>
                <span className="text-muted-foreground">{pricing.sqFt.toLocaleString()} sq ft</span>
              </div>
            </div>
            <Button
              onClick={handleClose}
              className="mt-2 bg-primary hover:bg-primary/90 text-white font-sans font-bold rounded-sm h-10 px-8"
            >
              Done
            </Button>
          </div>
        ) : (
          /* ── Form state ── */
          <form onSubmit={handleSubmit} noValidate className="flex flex-col min-h-0">
            {/* Pricing recap strip */}
            <div className="bg-primary/5 border-b border-primary/10 px-6 py-3 flex items-center justify-between gap-4 flex-shrink-0">
              <div>
                <p className="text-[10px] text-muted-foreground font-sans uppercase tracking-widest">Your Configuration</p>
                <p className="text-sm font-semibold text-foreground font-sans mt-0.5">
                  {config.width}′ × {config.length}′ × {config.height}′ &bull; {config.roofStyle === "gable" ? "Gable" : "Single Slope"} &bull; {config.gauge} gauge
                </p>
              </div>
              <div className="text-right shrink-0">
                <p className="text-[10px] text-muted-foreground font-sans uppercase tracking-widest">Est. Total</p>
                <p className="text-lg font-bold text-primary font-sans tabular-nums">{fmt(pricing.subtotal)}</p>
              </div>
            </div>

            {/* Fields */}
            <div className="px-6 py-6 space-y-4 overflow-y-auto">
              <Field
                id="name"
                label="Full Name"
                icon={User}
                placeholder="John Smith"
                value={fields.name}
                error={errors.name}
                onChange={setField("name")}
              />
              <Field
                id="email"
                label="Email Address"
                icon={Mail}
                type="email"
                placeholder="john@example.com"
                value={fields.email}
                error={errors.email}
                onChange={setField("email")}
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field
                  id="phone"
                  label="Phone Number"
                  icon={Phone}
                  type="tel"
                  placeholder="(555) 000-0000"
                  value={fields.phone}
                  error={errors.phone}
                  onChange={setField("phone")}
                />
                <Field
                  id="zip"
                  label="ZIP Code"
                  icon={MapPin}
                  placeholder="12345"
                  value={fields.zip}
                  error={errors.zip}
                  onChange={setField("zip")}
                />
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 pb-6 flex flex-col gap-3 flex-shrink-0">
              <Button
                type="submit"
                disabled={status === "submitting"}
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-white font-sans font-bold rounded-sm h-12 text-sm disabled:opacity-70"
              >
                {status === "submitting" ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Submit Quote Request"
                )}
              </Button>
              <p className="text-center text-muted-foreground text-[10px] font-sans leading-snug">
                No obligation. We never sell your information to third parties.
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}
