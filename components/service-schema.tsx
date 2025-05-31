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
  // بررسی وجود داده‌های ضروری
  if (!services || !Array.isArray(services) || services.length === 0 || !provider) {
    return null
  }

  const serviceData = services.map((service) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name || "خدمات برنامه‌نویسی",
    description: service.description || "توضیحات خدمات",
    category: service.category || "Web Development",
    offers: {
      "@type": "Offer",
      price: service.price || "قیمت بر اساس پروژه",
      priceCurrency: "IRR",
      availability: "https://schema.org/InStock",
      validFrom: new Date().toISOString(),
    },
    provider: {
      "@type": "Person",
      name: provider.name || "نام برنامه‌نویس",
      url: provider.url || "https://example.com",
      telephone: provider.telephone || "+989123456789",
      address: provider.address || {
        "@type": "PostalAddress",
        addressLocality: "تهران",
        addressCountry: "ایران",
      },
    },
    areaServed: {
      "@type": "Country",
      name: "ایران",
    },
    serviceType: service.category || "Web Development",
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
