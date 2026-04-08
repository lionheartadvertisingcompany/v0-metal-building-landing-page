"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Tractor, Building, Home, Plane, Warehouse, Car, ShoppingBag, Church, Dumbbell } from "lucide-react"

const buildingTypes = [
  {
    icon: Tractor,
    name: "Agricultural Buildings",
    description: "High-quality farm equipment storage buildings to keep all your equipment safe and secure from the elements. Clear span designs for maximum flexibility.",
    features: ["Equipment Storage", "Hay & Feed Storage", "Livestock Shelter"],
  },
  {
    icon: Building,
    name: "Commercial Buildings",
    description: "Expandable solutions for companies growing into manufacturing, distribution, and industrial operations. Built to accommodate your business needs.",
    features: ["Manufacturing", "Distribution Centers", "Industrial Flex"],
  },
  {
    icon: Home,
    name: "Residential Buildings",
    description: "Pre-engineered steel structures for homeowners looking for expansions or additions at a fraction of the cost of traditional construction methods.",
    features: ["Barndominiums", "Workshops", "Home Additions"],
  },
  {
    icon: Plane,
    name: "Aviation Buildings",
    description: "From small aircraft hangars for sport use to complex hangars for substantial-sized aircraft. We assist you in the layout of your hangar.",
    features: ["Private Hangars", "Commercial Aviation", "Maintenance Facilities"],
  },
  {
    icon: Warehouse,
    name: "Storage Buildings",
    description: "Perfect solution for storing everything from equipment to hay and feed. Additional safe storage facilities built to last.",
    features: ["RV Storage", "Boat Storage", "General Storage"],
  },
  {
    icon: Car,
    name: "Automotive Buildings",
    description: "Flexibility in design options to expand your growing business or start a new one. Metal shop buildings tailored to your workflow.",
    features: ["Auto Repair Shops", "Dealerships", "Body Shops"],
  },
  {
    icon: ShoppingBag,
    name: "Retail & Office Buildings",
    description: "Prefabricated steel retail building systems that integrate all your needs. Design the perfect layout for the store of your dreams.",
    features: ["Retail Stores", "Office Spaces", "Mixed Use"],
  },
  {
    icon: Church,
    name: "Houses of Worship",
    description: "Providing services despite budget constraints. Build the church building designs your congregation deserves with durable steel construction.",
    features: ["Churches", "Community Centers", "Fellowship Halls"],
  },
  {
    icon: Dumbbell,
    name: "Recreational Buildings",
    description: "Designated space easily customized for various events. From volleyball to basketball, our prefab recreational buildings are perfect.",
    features: ["Indoor Arenas", "Gyms", "Multi-Purpose"],
  },
]

export function BuildingTypesSection() {
  const [activeType, setActiveType] = useState(0)
  const active = buildingTypes[activeType]
  const ActiveIcon = active.icon

  return (
    <section id="building-types" className="bg-white py-14 sm:py-24 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-14">
          <Badge variant="outline" className="mb-4 border-primary/40 text-primary font-sans text-xs uppercase tracking-widest">
            Building Types
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-foreground font-sans text-balance mb-4">
            Steel Buildings Designed to Your Specifications
          </h2>
          <p className="text-muted-foreground font-sans max-w-2xl mx-auto leading-relaxed">
            At our facility, we offer affordable and reliable steel building kits. Though the designs vary, 
            the craftsmanship and quality of steel remain top-notch.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Type selector list */}
          <div className="lg:col-span-1 space-y-2">
            {buildingTypes.map((type, index) => {
              const Icon = type.icon
              return (
                <button
                  key={type.name}
                  onClick={() => setActiveType(index)}
                  className={`w-full flex items-center gap-4 p-4 rounded-sm text-left transition-all ${
                    activeType === index
                      ? "bg-primary text-white"
                      : "bg-muted hover:bg-muted/80 text-foreground"
                  }`}
                >
                  <Icon className={`h-5 w-5 flex-shrink-0 ${activeType === index ? "text-white" : "text-primary"}`} />
                  <span className="font-sans font-medium text-sm">{type.name}</span>
                </button>
              )
            })}
          </div>

          {/* Active type detail */}
          <div className="lg:col-span-2 bg-muted rounded-sm p-6 sm:p-8 lg:p-12">
            <div className="flex flex-col sm:flex-row items-start gap-4 mb-6">
              <div className="p-4 bg-primary/10 rounded-sm">
                <ActiveIcon className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground font-sans mb-2">{active.name}</h3>
                <p className="text-muted-foreground font-sans leading-relaxed">{active.description}</p>
              </div>
            </div>

            <div className="mb-8">
              <h4 className="text-sm font-semibold text-foreground font-sans uppercase tracking-wide mb-4">
                Common Applications
              </h4>
              <div className="flex flex-wrap gap-2">
                {active.features.map((feature) => (
                  <span
                    key={feature}
                    className="inline-flex items-center px-4 py-2 bg-white border border-border rounded-sm text-sm font-sans text-foreground"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            <Button
              className="bg-primary hover:bg-primary/90 text-white font-sans font-semibold rounded-sm"
              asChild
            >
              <a href="#builder">
                Configure This Building Type
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
