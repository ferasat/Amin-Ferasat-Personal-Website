import StructuredData from "./structured-data"

interface ServiceItem {
  name: string
  description: string
  price?: string
  duration?: string
  category: string
}

interface ServiceSchemaProps {
  services: ServiceItem[]
  provider: {
    name: string
    url: string
    telephone: string
    address: any
  }
}

export default function ServiceSchema({ services, provider }: ServiceSchemaProps) {
  const serviceData = services.map((service) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    category: service.category,
    offers: {
      "@type": "Offer",
      price: service.price || "قیمت بر اساس پروژه",
      priceCurrency: "IRR",
      availability: "https://schema.org/InStock",
      validFrom: new Date().toISOString(),
    },
    provider: {
      "@type": "Person",
      name: provider.name,
      url: provider.url,
      telephone: provider.telephone,
      address: provider.address,
    },
    areaServed: {
      "@type": "Country",
      name: "ایران",
    },
    serviceType: service.category,
    hoursAvailable: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "18:00",
    },
  }))

  return (
    <>
      {serviceData.map((data, index) => (
        <StructuredData key={index} type="organization" data={data} />
      ))}
    </>
  )
}
