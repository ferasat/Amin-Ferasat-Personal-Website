import StructuredData from "./structured-data"

interface LocalSEOProps {
  businessName: string
  address: {
    street: string
    city: string
    state: string
    postalCode: string
    country: string
  }
  phone: string
  email: string
  website: string
  services: string[]
  workingHours: {
    [key: string]: string
  }
  socialMedia: {
    [key: string]: string
  }
  coordinates?: {
    latitude: number
    longitude: number
  }
}

export default function LocalSEO({
  businessName,
  address,
  phone,
  email,
  website,
  services,
  workingHours,
  socialMedia,
  coordinates,
}: LocalSEOProps) {
  // بررسی وجود داده‌های ضروری
  if (!businessName || !address || !phone || !email || !website) {
    return null
  }

  // Local Business Schema
  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: businessName,
    description: "برنامه‌نویس بک‌اند متخصص در PHP، Laravel و Livewire",
    url: website,
    telephone: phone,
    email: email,
    address: {
      "@type": "PostalAddress",
      streetAddress: address.street || "",
      addressLocality: address.city || "تهران",
      addressRegion: address.state || "تهران",
      postalCode: address.postalCode || "",
      addressCountry: address.country || "ایران",
    },
    geo: coordinates
      ? {
          "@type": "GeoCoordinates",
          latitude: coordinates.latitude,
          longitude: coordinates.longitude,
        }
      : {
          "@type": "GeoCoordinates",
          latitude: 35.6892,
          longitude: 51.389,
        },
    openingHoursSpecification: Object.entries(workingHours || {}).map(([day, hours]) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: day,
      opens: hours.split("-")[0] || "09:00",
      closes: hours.split("-")[1] || "18:00",
    })),
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: coordinates?.latitude || 35.6892,
        longitude: coordinates?.longitude || 51.389,
      },
      geoRadius: "50000", // 50km radius
    },
    areaServed: [
      {
        "@type": "City",
        name: "تهران",
      },
      {
        "@type": "Country",
        name: "ایران",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "خدمات برنامه‌نویسی",
      itemListElement: (services || []).map((service, index) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service,
        },
        position: index + 1,
      })),
    },
    sameAs: Object.values(socialMedia || {}),
    priceRange: "$$",
    currenciesAccepted: "IRR",
    paymentAccepted: "Cash, Credit Card, Bank Transfer",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "25",
      bestRating: "5",
      worstRating: "1",
    },
  }

  return <StructuredData type="organization" data={localBusinessData} />
}
