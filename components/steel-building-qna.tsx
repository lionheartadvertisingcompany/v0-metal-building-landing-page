'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface QAItem {
  question: string
  answer: string
  category: string
}

const qaData: QAItem[] = [
  // Steel Building Cost Calculator Questions
  {
    category: "Steel Building Cost Calculator",
    question: "How does a steel building cost calculator work?",
    answer: "A steel building cost calculator uses your building dimensions (width, length, height), roof style, steel gauge, and customization options to generate an instant price estimate. Our calculator factors in current material costs, regional pricing, and standard accessories to provide accurate metal buildings prices within seconds."
  },
  {
    category: "Steel Building Cost Calculator",
    question: "What information do I need to use a steel building cost calculator?",
    answer: "To use our steel building cost calculator effectively, you'll need your desired building dimensions (width, length, and eave height), preferred roof style (gable or single-slope), steel gauge thickness (14 or 12 gauge), and any additional features like doors, windows, or insulation. This information helps generate accurate steel building cost estimates."
  },
  {
    category: "Steel Building Cost Calculator",
    question: "Are steel building cost calculator estimates accurate?",
    answer: "Our steel building cost calculator provides estimates within 10-15% of final pricing. Actual metal buildings prices may vary based on site conditions, local building codes, delivery distance, and current steel market conditions. We recommend requesting a formal quote for the most accurate cost to build a metal building."
  },
  {
    category: "Steel Building Cost Calculator",
    question: "Can I save my steel building cost calculator results?",
    answer: "Yes, after using our steel building cost calculator, you can submit your configuration to receive a detailed quote via email. This allows you to compare different metal buildings prices and share your steel building cost estimates with contractors or partners."
  },
  {
    category: "Steel Building Cost Calculator",
    question: "Does the steel building cost calculator include installation?",
    answer: "Our steel building cost calculator provides material costs for your building kit. Installation costs typically add $4-$10 per square foot to the total cost to build a metal building, depending on your location and complexity. We can provide contractor referrals for turnkey pricing."
  },

  // Steel Building Cost Per Square Foot Questions
  {
    category: "Steel Building Cost Per Square Foot",
    question: "What is the average steel building cost per square foot?",
    answer: "The average steel building cost per square foot ranges from $11-$25 for materials only, and $16-$35 for fully installed buildings. Metal buildings prices vary based on size, complexity, location, and current steel market conditions. Larger buildings typically have a lower cost per square foot due to economies of scale."
  },
  {
    category: "Steel Building Cost Per Square Foot",
    question: "Why does steel building cost per square foot decrease with larger buildings?",
    answer: "Steel building cost per square foot decreases with size because fixed costs (engineering, delivery, foundation corners) are spread across more square footage. A 30x40 building might cost $18-22 per square foot, while a 100x200 building could be $12-16 per square foot. This makes larger metal buildings prices more economical."
  },
  {
    category: "Steel Building Cost Per Square Foot",
    question: "How does roof style affect steel building cost per square foot?",
    answer: "Roof style significantly impacts steel building cost per square foot. Gable roofs typically add $1-3 per square foot compared to single-slope designs due to additional framing. Monitor roofs or specialty designs can add $3-5 per square foot to metal buildings prices."
  },
  {
    category: "Steel Building Cost Per Square Foot",
    question: "What is the steel building cost per square foot for a garage?",
    answer: "For a steel garage, the steel building cost per square foot typically ranges from $15-$25 for materials and $25-$40 fully installed. Metal buildings prices for garages include overhead doors, which can add $1,000-$5,000 per door to the total cost to build a metal building."
  },
  {
    category: "Steel Building Cost Per Square Foot",
    question: "How does insulation affect steel building cost per square foot?",
    answer: "Adding insulation increases steel building cost per square foot by $1.50-$4.00 depending on R-value and type. Fiberglass batts are most economical, while spray foam provides the best thermal performance. Insulation is essential for climate-controlled spaces and affects long-term metal buildings prices through energy savings."
  },
  {
    category: "Steel Building Cost Per Square Foot",
    question: "What is the steel building cost per square foot for commercial buildings?",
    answer: "Commercial steel building cost per square foot ranges from $16-$30 for materials and $25-$50+ fully installed. Metal buildings prices for commercial use include fire-rated assemblies, ADA compliance, and finished interiors, all adding to the base cost to build a steel building."
  },
  {
    category: "Steel Building Cost Per Square Foot",
    question: "How does location affect steel building cost per square foot?",
    answer: "Location can change steel building cost per square foot by 15-30%. Areas with higher labor costs, strict building codes, or extreme weather requirements (hurricane zones, heavy snow loads) see higher metal buildings prices. Delivery distance also impacts the total cost to build a metal building."
  },
  {
    category: "Steel Building Cost Per Square Foot",
    question: "What is the steel building cost per square foot for warehouses?",
    answer: "Warehouse steel building cost per square foot averages $12-$20 for materials and $18-$30 installed. Large clear-span designs keep metal buildings prices competitive. Loading docks, HVAC, and fire suppression systems add to the base cost to build a metal building."
  },

  // Steel Building Cost General Questions
  {
    category: "Steel Building Cost",
    question: "What factors determine steel building cost?",
    answer: "Steel building cost is determined by building dimensions, steel gauge thickness, roof style, accessories (doors, windows, insulation), site location, engineering requirements, and current steel market prices. Understanding these factors helps you accurately estimate metal buildings prices and plan your budget for the cost to build a metal building."
  },
  {
    category: "Steel Building Cost",
    question: "How much does a 30x40 steel building cost?",
    answer: "A 30x40 steel building cost ranges from $12,000-$20,000 for materials only and $25,000-$45,000 fully installed. This 1,200 square foot building is popular for garages and workshops. Use our steel building cost calculator for accurate metal buildings prices based on your specific requirements."
  },
  {
    category: "Steel Building Cost",
    question: "How much does a 40x60 steel building cost?",
    answer: "A 40x60 steel building cost typically ranges from $18,000-$30,000 for the kit and $40,000-$70,000 turnkey. This 2,400 square foot size is ideal for workshops, small warehouses, and agricultural storage. Metal buildings prices vary based on accessories and local conditions."
  },
  {
    category: "Steel Building Cost",
    question: "How much does a 50x100 steel building cost?",
    answer: "A 50x100 steel building cost ranges from $50,000-$85,000 for materials and $100,000-$175,000 fully installed. This 5,000 square foot building suits commercial, agricultural, and industrial applications. Our steel building cost calculator provides customized metal buildings prices."
  },
  {
    category: "Steel Building Cost",
    question: "How much does a 60x80 steel building cost?",
    answer: "A 60x80 steel building cost is typically $45,000-$75,000 for the kit and $90,000-$150,000 installed. This 4,800 square foot building works well for large workshops, retail, or light manufacturing. Steel building cost varies with gauge, height, and accessories."
  },
  {
    category: "Steel Building Cost",
    question: "How much does a 100x200 steel building cost?",
    answer: "A 100x200 steel building cost ranges from $200,000-$350,000 for materials and $400,000-$700,000+ fully installed. This 20,000 square foot structure is suitable for large warehouses, manufacturing, and distribution centers. Metal buildings prices at this scale require custom engineering."
  },
  {
    category: "Steel Building Cost",
    question: "What is the cheapest steel building size?",
    answer: "The cheapest steel building cost is typically for smaller structures like 20x20 or 24x24 buildings, ranging from $6,000-$12,000 for materials. However, steel building cost per square foot is higher for smaller buildings. A 30x40 often provides better value in metal buildings prices."
  },
  {
    category: "Steel Building Cost",
    question: "How does steel gauge affect building cost?",
    answer: "Steel gauge significantly impacts steel building cost. 14-gauge steel is standard and most economical, while 12-gauge adds 15-25% to metal buildings prices but provides greater durability and longer lifespan. The gauge affects both material cost and the overall cost to build a steel building."
  },
  {
    category: "Steel Building Cost",
    question: "Are steel buildings cheaper than wood construction?",
    answer: "Yes, steel building cost is typically 30-50% less than comparable wood-frame construction when factoring in longevity, maintenance, and insurance. Metal buildings prices include pre-engineered components that reduce labor costs. The cost to build a metal building offers excellent long-term value."
  },
  {
    category: "Steel Building Cost",
    question: "How do steel prices affect building cost?",
    answer: "Steel market fluctuations can change steel building cost by 10-30% year over year. When steel prices rise, metal buildings prices increase proportionally. Locking in pricing early can help manage the cost to build a metal building during volatile markets."
  },

  // Metal Buildings Prices Questions
  {
    category: "Metal Buildings Prices",
    question: "What are current metal buildings prices in 2024?",
    answer: "Current metal buildings prices range from $11-$25 per square foot for materials and $16-$40+ per square foot installed. Steel building cost has stabilized after recent market fluctuations. Our steel building cost calculator reflects current pricing for accurate estimates."
  },
  {
    category: "Metal Buildings Prices",
    question: "Why do metal buildings prices vary so much?",
    answer: "Metal buildings prices vary due to building size, steel gauge, roof complexity, accessories, location, engineering requirements, and market conditions. A basic garage has different steel building cost than a climate-controlled commercial space. Customization significantly affects the cost to build a metal building."
  },
  {
    category: "Metal Buildings Prices",
    question: "How can I get the best metal buildings prices?",
    answer: "To get the best metal buildings prices, order during off-peak seasons (fall/winter), choose standard dimensions, select 14-gauge steel for appropriate applications, minimize custom features, and compare quotes from multiple suppliers. Our steel building cost calculator helps you optimize your budget."
  },
  {
    category: "Metal Buildings Prices",
    question: "Do metal buildings prices include delivery?",
    answer: "Metal buildings prices from most suppliers include delivery within a certain radius (typically 500-1000 miles). Beyond that, freight charges add to steel building cost. Always confirm delivery terms when comparing the cost to build a metal building from different suppliers."
  },
  {
    category: "Metal Buildings Prices",
    question: "Are metal buildings prices negotiable?",
    answer: "Yes, metal buildings prices can often be negotiated, especially on larger orders or during slow seasons. Volume discounts, payment terms, and package deals can reduce steel building cost by 5-15%. Our team works to provide competitive cost to build a metal building quotes."
  },
  {
    category: "Metal Buildings Prices",
    question: "How do metal buildings prices compare to pole barns?",
    answer: "Metal buildings prices are typically 10-20% higher than pole barns initially, but steel building cost provides better long-term value through lower maintenance, longer lifespan, and better insurance rates. The cost to build a metal building includes superior durability and weather resistance."
  },
  {
    category: "Metal Buildings Prices",
    question: "What's included in metal buildings prices?",
    answer: "Standard metal buildings prices include primary framing, secondary framing, roof and wall panels, trim, fasteners, and anchor bolts. Steel building cost may or may not include doors, windows, insulation, and accessories. Always clarify inclusions when comparing cost to build a metal building quotes."
  },
  {
    category: "Metal Buildings Prices",
    question: "Do metal buildings prices include permits?",
    answer: "No, metal buildings prices typically don't include permits or engineering stamps. Permit costs add $500-$5,000+ to steel building cost depending on location and building size. Engineering and permit fees are part of the total cost to build a metal building."
  },

  // Cost to Build Metal Building Questions
  {
    category: "Cost to Build Metal Building",
    question: "What is the total cost to build a metal building?",
    answer: "The total cost to build a metal building includes materials (40-50% of total), foundation (10-15%), erection labor (20-30%), and finishing (10-20%). A $50,000 material kit typically results in $100,000-$125,000 total steel building cost installed. Metal buildings prices are just the starting point."
  },
  {
    category: "Cost to Build Metal Building",
    question: "How much does foundation add to cost to build a metal building?",
    answer: "Foundation adds $4-$8 per square foot to the cost to build a metal building. A 40x60 building needs approximately $9,600-$19,200 for concrete foundation. This essential component is separate from metal buildings prices but crucial to total steel building cost."
  },
  {
    category: "Cost to Build Metal Building",
    question: "What is the labor cost to build a metal building?",
    answer: "Labor cost to build a metal building ranges from $4-$10 per square foot for erection only. Complex buildings with mezzanines or specialty features increase labor costs. Total labor typically represents 20-30% of the complete steel building cost beyond metal buildings prices."
  },
  {
    category: "Cost to Build Metal Building",
    question: "How long does it take to build a metal building?",
    answer: "The time to build a metal building is 2-8 weeks for erection after materials arrive. This faster construction reduces labor costs compared to traditional building. Manufacturing takes 4-8 weeks. The quick timeline helps manage cost to build a metal building through reduced financing costs."
  },
  {
    category: "Cost to Build Metal Building",
    question: "Can I reduce cost to build a metal building with DIY?",
    answer: "DIY assembly can reduce cost to build a metal building by 30-50% on labor. However, metal buildings prices don't account for equipment rental, permits, and time investment. Many owners handle finishing work while hiring professionals for erection to optimize steel building cost."
  },
  {
    category: "Cost to Build Metal Building",
    question: "What site preparation adds to cost to build a metal building?",
    answer: "Site preparation adds $1-$5 per square foot to cost to build a metal building. This includes clearing, grading, drainage, and utilities. Poor soil conditions requiring extra foundation work significantly increase steel building cost beyond base metal buildings prices."
  },
  {
    category: "Cost to Build Metal Building",
    question: "How does building height affect cost to build a metal building?",
    answer: "Each foot of additional height adds 3-5% to cost to build a metal building. Taller sidewalls require heavier framing and more materials. Standard 10-14 foot eave heights minimize steel building cost while providing functional space. Metal buildings prices increase significantly above 20 feet."
  },
  {
    category: "Cost to Build Metal Building",
    question: "What permits affect cost to build a metal building?",
    answer: "Permits add $500-$5,000+ to cost to build a metal building depending on jurisdiction. Building permits, electrical permits, plumbing permits, and occupancy certificates are common requirements. These fees aren't included in metal buildings prices but affect total steel building cost."
  },

  // Cost to Build a Steel Building Questions
  {
    category: "Cost to Build a Steel Building",
    question: "What is the average cost to build a steel building?",
    answer: "The average cost to build a steel building is $16-$40 per square foot fully installed. This includes materials, foundation, erection, and basic finishing. Metal buildings prices vary significantly by region and building use. Our steel building cost calculator provides customized estimates."
  },
  {
    category: "Cost to Build a Steel Building",
    question: "How does size affect cost to build a steel building?",
    answer: "Larger buildings have lower cost to build a steel building per square foot due to economies of scale. A 2,400 SF building might cost $35/SF while a 10,000 SF building could be $22/SF. This scaling effect makes larger metal buildings prices more efficient and reduces steel building cost per unit area."
  },
  {
    category: "Cost to Build a Steel Building",
    question: "What financing options exist for cost to build a steel building?",
    answer: "Financing options for cost to build a steel building include construction loans, equipment financing, SBA loans, and agricultural loans. Many lenders view steel buildings favorably due to durability. Financing terms affect total metal buildings prices through interest costs over the loan term."
  },
  {
    category: "Cost to Build a Steel Building",
    question: "How does climate zone affect cost to build a steel building?",
    answer: "Climate zone significantly impacts cost to build a steel building. Heavy snow load areas require stronger framing (+10-20%), hurricane zones need upgraded connections (+15-25%), and seismic zones add engineering costs. These factors increase metal buildings prices and total steel building cost."
  },
  {
    category: "Cost to Build a Steel Building",
    question: "What interior finishing adds to cost to build a steel building?",
    answer: "Interior finishing adds $10-$50+ per square foot to cost to build a steel building. Basic drywall and paint costs less than full commercial build-out. HVAC, plumbing, and electrical are major factors in total steel building cost beyond base metal buildings prices."
  },
  {
    category: "Cost to Build a Steel Building",
    question: "How do doors affect cost to build a steel building?",
    answer: "Doors significantly impact cost to build a steel building. Walk doors add $300-$1,000 each, overhead doors $1,000-$5,000, and large commercial doors $3,000-$15,000+. Door quantity and size affect metal buildings prices and overall steel building cost."
  },
  {
    category: "Cost to Build a Steel Building",
    question: "What warranty affects cost to build a steel building value?",
    answer: "Warranty coverage affects long-term cost to build a steel building value. Premium warranties (50-year structural, 40-year paint) come with slightly higher metal buildings prices but provide better protection. Our steel building cost includes industry-leading warranty coverage."
  },
  {
    category: "Cost to Build a Steel Building",
    question: "How does energy efficiency affect cost to build a steel building?",
    answer: "Energy-efficient features add 10-20% to initial cost to build a steel building but reduce operating costs significantly. Insulation, cool roof panels, and skylights affect metal buildings prices upfront while lowering long-term steel building cost through utility savings."
  },

  // Specific Building Type Cost Questions
  {
    category: "Steel Building Cost",
    question: "How much does a steel barn cost?",
    answer: "A steel barn cost ranges from $15,000-$50,000 for materials and $35,000-$100,000+ installed depending on size. Our steel building cost calculator provides accurate metal buildings prices for agricultural structures. The cost to build a metal building barn includes considerations for livestock, equipment, or hay storage."
  },
  {
    category: "Steel Building Cost",
    question: "How much does a steel workshop cost?",
    answer: "A steel workshop cost is typically $18,000-$40,000 for a 30x40 to 40x60 kit, with total cost to build a metal building of $40,000-$90,000 installed. Metal buildings prices for workshops include overhead doors, electrical considerations, and ventilation requirements."
  },
  {
    category: "Steel Building Cost",
    question: "How much does a steel riding arena cost?",
    answer: "A steel riding arena cost ranges from $100,000-$300,000+ for 60x120 to 80x200 structures. Steel building cost for equestrian facilities includes high eave heights, large clear spans, and proper ventilation. Metal buildings prices for arenas require specialized engineering."
  },
  {
    category: "Steel Building Cost",
    question: "How much does a steel airplane hangar cost?",
    answer: "A steel airplane hangar cost ranges from $50,000-$500,000+ depending on size and door requirements. Steel building cost includes bi-fold or hydraulic hangar doors that significantly affect metal buildings prices. The cost to build a metal building hangar requires aviation-specific engineering."
  },
  {
    category: "Steel Building Cost",
    question: "How much does a steel auto shop cost?",
    answer: "A steel auto shop cost is typically $60,000-$150,000 for a 40x60 to 60x100 fully installed building. Steel building cost includes multiple overhead doors, drainage, and ventilation. Metal buildings prices for auto shops often require enhanced lighting and electrical capacity."
  },
  {
    category: "Steel Building Cost",
    question: "How much does a steel church building cost?",
    answer: "A steel church building cost ranges from $100-$250 per square foot fully finished. Base steel building cost is lower, but churches require extensive interior finishing, HVAC, and code compliance. Metal buildings prices for churches vary greatly based on design complexity."
  },
  {
    category: "Metal Buildings Prices",
    question: "What are metal buildings prices for a barndominium?",
    answer: "Metal buildings prices for barndominiums range from $65-$160 per square foot fully finished. Base steel building cost is $15-$25/SF, but residential finishing adds significantly. The cost to build a metal building home includes plumbing, electrical, HVAC, and interior finishes."
  },
  {
    category: "Metal Buildings Prices",
    question: "What are metal buildings prices for self-storage?",
    answer: "Metal buildings prices for self-storage facilities range from $25-$50 per square foot for basic units. Steel building cost includes partition walls and roll-up doors. The cost to build a metal building self-storage complex varies based on unit mix and climate control requirements."
  },

  // Regional Cost Questions
  {
    category: "Cost to Build Metal Building",
    question: "What is cost to build a metal building in Texas?",
    answer: "Cost to build a metal building in Texas averages $14-$30 per square foot installed. Texas has moderate labor costs and minimal snow load requirements, keeping steel building cost competitive. Metal buildings prices benefit from the state's strong steel building industry presence."
  },
  {
    category: "Cost to Build Metal Building",
    question: "What is cost to build a metal building in California?",
    answer: "Cost to build a metal building in California averages $25-$50 per square foot installed due to high labor costs and strict building codes. Seismic engineering adds to steel building cost. Metal buildings prices in California include enhanced structural requirements."
  },
  {
    category: "Cost to Build Metal Building",
    question: "What is cost to build a metal building in Florida?",
    answer: "Cost to build a metal building in Florida averages $18-$38 per square foot installed. Hurricane zone requirements add 15-25% to steel building cost. Metal buildings prices include upgraded connections and wind-rated components required by Florida building codes."
  },
  {
    category: "Cost to Build Metal Building",
    question: "What is cost to build a metal building in the Midwest?",
    answer: "Cost to build a metal building in the Midwest averages $15-$32 per square foot installed. Snow load requirements vary by state, affecting steel building cost. Metal buildings prices in northern states include enhanced roof structures for heavy snow loads."
  },
  {
    category: "Cost to Build Metal Building",
    question: "What is cost to build a metal building in the Northeast?",
    answer: "Cost to build a metal building in the Northeast averages $22-$45 per square foot installed. Higher labor costs and snow/wind requirements increase steel building cost. Metal buildings prices reflect the region's stringent building codes and shorter construction season."
  },

  // Comparison Questions
  {
    category: "Steel Building Cost",
    question: "Steel building cost vs. traditional construction?",
    answer: "Steel building cost is typically 30-50% less than traditional construction for comparable space. Metal buildings prices benefit from factory manufacturing efficiency, faster construction, and lower labor costs. The cost to build a metal building includes superior durability and lower long-term maintenance."
  },
  {
    category: "Steel Building Cost",
    question: "Steel building cost vs. wood frame?",
    answer: "Steel building cost is similar to wood frame initially but offers better long-term value. Metal buildings prices include pest resistance, fire resistance, and minimal maintenance. The cost to build a steel building pays off through lower insurance and no rot or termite damage."
  },
  {
    category: "Steel Building Cost",
    question: "Steel building cost vs. concrete block?",
    answer: "Steel building cost is typically 25-40% less than concrete block construction. Metal buildings prices include faster construction and clear-span capability. The cost to build a metal building offers similar durability with greater design flexibility than masonry construction."
  },
  {
    category: "Steel Building Cost",
    question: "Steel building cost vs. brick building?",
    answer: "Steel building cost is 40-60% less than full brick construction. Many owners choose steel frames with brick veneer for aesthetics while maintaining lower metal buildings prices. The cost to build a metal building can include exterior finishes matching any architectural style."
  },

  // Timeline and Planning Questions
  {
    category: "Cost to Build a Steel Building",
    question: "How far in advance should I plan to manage cost to build a steel building?",
    answer: "Plan 4-6 months ahead to manage cost to build a steel building effectively. This allows time for design, engineering, manufacturing, and favorable pricing. Rushing orders can increase metal buildings prices by 10-20%. Early planning helps optimize steel building cost."
  },
  {
    category: "Cost to Build a Steel Building",
    question: "What is the best time of year for lowest cost to build a steel building?",
    answer: "Fall and winter typically offer the lowest cost to build a steel building due to reduced demand. Metal buildings prices may be 5-15% lower during off-peak seasons. Ordering in winter for spring delivery can optimize steel building cost while ensuring timely completion."
  },
  {
    category: "Cost to Build a Steel Building",
    question: "How do supply chain issues affect cost to build a steel building?",
    answer: "Supply chain disruptions can increase cost to build a steel building by 10-30% and extend lead times. Locking in metal buildings prices early protects against market volatility. Working with established suppliers helps manage steel building cost during uncertain periods."
  },

  // Accessory and Feature Questions
  {
    category: "Steel Building Cost Per Square Foot",
    question: "How do windows affect steel building cost per square foot?",
    answer: "Windows add $200-$800 each to steel building cost, translating to $0.50-$2 per square foot depending on quantity. Natural lighting reduces operating costs over time. Metal buildings prices with windows provide better working environments and potential energy savings."
  },
  {
    category: "Steel Building Cost Per Square Foot",
    question: "How does HVAC affect steel building cost per square foot?",
    answer: "HVAC adds $5-$15 per square foot to steel building cost for climate-controlled spaces. Proper insulation reduces HVAC sizing and operating costs. Metal buildings prices for climate-controlled spaces must account for adequate insulation to minimize the cost to build a metal building long-term."
  },
  {
    category: "Steel Building Cost Per Square Foot",
    question: "How do skylights affect steel building cost per square foot?",
    answer: "Skylights add $0.50-$2 per square foot to steel building cost while reducing lighting expenses by 50-70%. Natural lighting improves productivity and reduces operating costs. Metal buildings prices with skylights offer excellent ROI for daytime operations."
  },
  {
    category: "Steel Building Cost Per Square Foot",
    question: "How does crane capacity affect steel building cost per square foot?",
    answer: "Adding crane systems increases steel building cost per square foot by $3-$10 depending on capacity and runway length. Crane-ready buildings require heavier framing from the start. Metal buildings prices for industrial use often include crane considerations."
  },
  {
    category: "Steel Building Cost Per Square Foot",
    question: "How do mezzanines affect steel building cost per square foot?",
    answer: "Mezzanines add $15-$30 per square foot of mezzanine area to steel building cost. This effectively increases usable space without expanding the building footprint. Metal buildings prices with mezzanines offer excellent value for office or storage space within the main structure."
  },

  // Maintenance and Long-term Cost Questions
  {
    category: "Metal Buildings Prices",
    question: "What are long-term maintenance costs for metal buildings?",
    answer: "Metal buildings prices for maintenance average $0.10-$0.25 per square foot annually - far less than traditional construction. Steel building cost benefits include minimal repairs, no painting for decades, and no pest treatment. The cost to build a metal building pays dividends through low upkeep."
  },
  {
    category: "Metal Buildings Prices",
    question: "How do metal buildings prices affect insurance costs?",
    answer: "Metal buildings prices translate to lower insurance premiums - typically 25-40% less than wood construction. Steel building cost benefits include fire resistance and wind ratings that insurers reward. The cost to build a metal building is offset by ongoing insurance savings."
  },
  {
    category: "Metal Buildings Prices",
    question: "What is the lifespan affecting metal buildings prices value?",
    answer: "Steel buildings last 50-100+ years with proper maintenance, maximizing metal buildings prices value. Steel building cost amortized over decades makes steel construction extremely economical. The cost to build a metal building provides generations of use with minimal degradation."
  },
  {
    category: "Metal Buildings Prices",
    question: "How do metal buildings prices affect resale value?",
    answer: "Metal buildings prices retain value well - steel buildings typically maintain 70-90% of value over time. Steel building cost is recovered through durability and low maintenance appeal to buyers. The cost to build a metal building is a solid investment for property value."
  },

  // Technical Questions Affecting Cost
  {
    category: "Cost to Build Metal Building",
    question: "How does clear span vs. multi-span affect cost to build a metal building?",
    answer: "Clear span adds 10-20% to cost to build a metal building compared to multi-span designs. However, clear span eliminates interior columns, maximizing usable space. Metal buildings prices for warehouses and arenas justify clear span through operational efficiency."
  },
  {
    category: "Cost to Build Metal Building",
    question: "How do building codes affect cost to build a metal building?",
    answer: "Building codes add 5-25% to cost to build a metal building depending on jurisdiction. Stricter codes require engineered drawings, inspections, and specific materials. Metal buildings prices include engineering to meet local requirements, ensuring steel building cost covers compliance."
  },
  {
    category: "Cost to Build Metal Building",
    question: "How does soil type affect cost to build a metal building?",
    answer: "Poor soil can add $5,000-$20,000+ to cost to build a metal building through enhanced foundations. Soil testing ($500-$1,500) identifies requirements early. Metal buildings prices don't typically include foundation engineering, but soil conditions significantly affect total steel building cost."
  },
  {
    category: "Cost to Build Metal Building",
    question: "How do utilities affect cost to build a metal building?",
    answer: "Utility connections add $5,000-$25,000+ to cost to build a metal building depending on distance and capacity. Electric, water, sewer, and gas connections are separate from metal buildings prices. Total steel building cost must account for bringing utilities to the site."
  },

  // ROI and Value Questions
  {
    category: "Steel Building Cost",
    question: "What is the ROI on steel building cost?",
    answer: "Steel building cost typically delivers 15-25% annual ROI through rental income, business operations, or property appreciation. Metal buildings prices provide excellent returns compared to alternative construction. The cost to build a metal building is recovered through operational savings and income generation."
  },
  {
    category: "Steel Building Cost",
    question: "How quickly does steel building cost pay for itself?",
    answer: "Steel building cost typically pays for itself in 5-10 years through rental income or business revenue. Lower maintenance and operating costs accelerate payback. Metal buildings prices represent investments that generate returns far exceeding the cost to build a metal building."
  },
  {
    category: "Steel Building Cost",
    question: "What tax benefits offset steel building cost?",
    answer: "Tax benefits reducing effective steel building cost include depreciation (39 years commercial, 20 years agricultural), Section 179 deductions, and energy credits. Metal buildings prices are partially offset by these benefits. Consult a tax professional to maximize deductions on cost to build a metal building."
  },
  {
    category: "Steel Building Cost",
    question: "How does steel building cost compare to leasing?",
    answer: "Owning typically beats leasing when steel building cost can be financed at reasonable rates. After 7-10 years, owned buildings cost less than cumulative lease payments. Metal buildings prices invested in ownership build equity while the cost to build a metal building becomes an appreciating asset."
  },

  // Additional Specific Size Questions
  {
    category: "Steel Building Cost",
    question: "How much does a 24x24 steel building cost?",
    answer: "A 24x24 steel building cost ranges from $6,000-$12,000 for materials and $15,000-$28,000 installed. This 576 SF size is ideal for small garages or workshops. Use our steel building cost calculator for accurate metal buildings prices on compact structures."
  },
  {
    category: "Steel Building Cost",
    question: "How much does a 30x50 steel building cost?",
    answer: "A 30x50 steel building cost is typically $14,000-$22,000 for materials and $32,000-$55,000 installed. This 1,500 SF building suits larger garages, small shops, and storage. Metal buildings prices for this size offer good value with our steel building cost calculator."
  },
  {
    category: "Steel Building Cost",
    question: "How much does a 40x80 steel building cost?",
    answer: "A 40x80 steel building cost ranges from $28,000-$45,000 for materials and $60,000-$100,000 installed. This 3,200 SF size works for workshops, small warehouses, and retail. Steel building cost at this size benefits from economies of scale in metal buildings prices."
  },
  {
    category: "Steel Building Cost",
    question: "How much does a 60x100 steel building cost?",
    answer: "A 60x100 steel building cost is typically $55,000-$90,000 for materials and $110,000-$180,000 installed. This 6,000 SF building suits commercial, agricultural, and industrial applications. Metal buildings prices at this scale provide excellent steel building cost per square foot value."
  },
  {
    category: "Steel Building Cost",
    question: "How much does a 80x120 steel building cost?",
    answer: "An 80x120 steel building cost ranges from $90,000-$150,000 for materials and $180,000-$300,000 installed. This 9,600 SF structure is ideal for large warehouses, manufacturing, and riding arenas. Steel building cost for large buildings offers the best per-square-foot metal buildings prices."
  },
]

const categories = [
  "Steel Building Cost Calculator",
  "Steel Building Cost Per Square Foot", 
  "Steel Building Cost",
  "Metal Buildings Prices",
  "Cost to Build Metal Building",
  "Cost to Build a Steel Building"
]

function QAAccordion({ item, index }: { item: QAItem; index: number }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-border/50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left px-4 py-4 flex items-start justify-between hover:bg-muted/30 transition-colors"
        aria-expanded={isOpen}
      >
        <span className="text-sm font-medium text-foreground font-sans pr-4 leading-relaxed">
          {index + 1}. {item.question}
        </span>
        <ChevronDown
          className={`h-4 w-4 text-primary flex-shrink-0 mt-1 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && (
        <div className="px-4 pb-4">
          <p className="text-sm text-muted-foreground font-sans leading-relaxed">
            {item.answer}
          </p>
        </div>
      )}
    </div>
  )
}

export function SteelBuildingQnA() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  
  const filteredQAs = activeCategory 
    ? qaData.filter(qa => qa.category === activeCategory)
    : qaData

  // Generate FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": qaData.map(qa => ({
      "@type": "Question",
      "name": qa.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": qa.answer
      }
    }))
  }

  return (
    <section id="faq" className="py-16 sm:py-24 bg-muted/30">
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground font-sans mb-4">
              Steel Building Cost Questions & Answers
            </h2>
            <p className="text-lg text-muted-foreground font-sans leading-relaxed max-w-2xl mx-auto">
              Get answers to the most common questions about steel building cost, metal buildings prices, and the cost to build a metal building. Our comprehensive FAQ covers everything from our steel building cost calculator to regional pricing.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            <button
              onClick={() => setActiveCategory(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === null 
                  ? 'bg-primary text-white' 
                  : 'bg-background border border-border text-foreground hover:bg-muted'
              }`}
            >
              All Questions ({qaData.length})
            </button>
            {categories.map(category => {
              const count = qaData.filter(qa => qa.category === category).length
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category 
                      ? 'bg-primary text-white' 
                      : 'bg-background border border-border text-foreground hover:bg-muted'
                  }`}
                >
                  {category} ({count})
                </button>
              )
            })}
          </div>

          {/* Q&A List */}
          <div className="bg-background rounded-lg border border-border overflow-hidden">
            {filteredQAs.map((qa, index) => (
              <QAAccordion key={`${qa.category}-${index}`} item={qa} index={index} />
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground font-sans mb-4">
              Still have questions about steel building cost or metal buildings prices?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+18008872853"
                className="inline-block bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-3 rounded-lg transition-colors font-sans"
              >
                Call: 1-800-Your-Build
              </a>
              <a
                href="#builder"
                className="inline-block bg-secondary hover:bg-secondary/90 text-white font-semibold px-6 py-3 rounded-lg transition-colors font-sans"
              >
                Use Our Steel Building Cost Calculator
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
