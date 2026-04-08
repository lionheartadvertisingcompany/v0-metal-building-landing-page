export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Titan Steel Structures",
    "url": "https://titansteelstructures.com",
    "logo": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/titan%20steel%20structures%20logo-y6dkkVGPMuFB8ZzpSGTDzYmelRlLJt.png",
    "description": "Leading provider of pre-engineered steel structures and metal building kits with 50+ years of experience and 1,500+ satisfied customers nationwide.",
    "telephone": "+1-888-807-6006",
    "email": "info@titansteelstructures.com",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    },
    "slogan": "Rising Above Expectations",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "1500"
    },
    "sameAs": [
      "https://titansteelstructures.com"
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function ProductSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Custom Metal Building",
    "description": "Pre-engineered steel building kits with custom dimensions, roof styles, and configurations. 100% American-made with 50-year warranty.",
    "brand": {
      "@type": "Brand",
      "name": "Titan Steel Structures"
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "Titan Steel Structures"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "minPrice": "10000",
        "priceCurrency": "USD"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "1500"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Titan Steel Structures",
    "image": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/titan%20steel%20structures%20logo-y6dkkVGPMuFB8ZzpSGTDzYmelRlLJt.png",
    "telephone": "+1-888-807-6006",
    "email": "info@titansteelstructures.com",
    "url": "https://titansteelstructures.com",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "39.8283",
      "longitude": "-98.5795"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "08:00",
      "closes": "17:00"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function FAQSchema({ faqs }: { faqs: Array<{ question: string; answer: string }> }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function BreadcrumbSchema({ items }: { items: Array<{ name: string; url: string }> }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
