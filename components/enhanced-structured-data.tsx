interface EnhancedStructuredDataProps {
  type: "website" | "article" | "person" | "organization" | "breadcrumb" | "localbusiness" | "service" | "review"
  data: any
  validate?: boolean
}

export default function EnhancedStructuredData({ type, data, validate = false }: EnhancedStructuredDataProps) {
  const generateStructuredData = () => {
    if (!data) return {}

    switch (type) {
      case "website":
        return {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "@id": `${data.url}#website`,
          name: data.name || "وب‌سایت شخصی برنامه‌نویس",
          url: data.url || "https://example.com",
          description: data.description || "برنامه‌نویس بک‌اند متخصص",
          inLanguage: "fa-IR",
          publisher: {
            "@type": "Person",
            "@id": `${data.url}#person`,
            name: data.author?.name || "نام برنامه‌نویس",
          },
          potentialAction: {
            "@type": "SearchAction",
            target: {
              "@type": "EntryPoint",
              urlTemplate: `${data.url}/blog?search={search_term_string}`,
            },
            "query-input": "required name=search_term_string",
          },
        }

      case "person":
        return {
          "@context": "https://schema.org",
          "@type": "Person",
          "@id": `${data.url}#person`,
          name: data.name || "نام برنامه‌نویس",
          givenName: data.givenName || "نام",
          familyName: data.familyName || "نام خانوادگی",
          jobTitle: data.jobTitle || "برنامه‌نویس بک‌اند",
          description: data.description || "متخصص در PHP و Laravel",
          url: data.url || "https://example.com",
          image: {
            "@type": "ImageObject",
            url: data.image || "/placeholder.svg?height=400&width=400",
            width: 400,
            height: 400,
          },
          sameAs: data.sameAs || [],
          knowsAbout: data.skills || ["PHP", "Laravel", "JavaScript"],
          worksFor: {
            "@type": "Organization",
            name: data.organization || "فریلنسر",
          },
          address: {
            "@type": "PostalAddress",
            addressLocality: data.location?.city || "تهران",
            addressRegion: data.location?.state || "تهران",
            addressCountry: data.location?.country || "ایران",
          },
          contactPoint: {
            "@type": "ContactPoint",
            email: data.email || "example@example.com",
            telephone: data.phone || "+989123456789",
            contactType: "customer service",
            availableLanguage: ["fa", "en"],
          },
        }

      case "localbusiness":
        return {
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id": `${data.url}#business`,
          name: data.name || "وب‌سایت شخصی برنامه‌نویس",
          description: data.description || "برنامه‌نویس بک‌اند متخصص در PHP، Laravel و Livewire",
          url: data.url || "https://example.com",
          telephone: data.phone || "+989123456789",
          email: data.email || "example@example.com",
          priceRange: "$$",
          currenciesAccepted: "IRR",
          paymentAccepted: ["Cash", "Credit Card", "Bank Transfer"],
          address: {
            "@type": "PostalAddress",
            streetAddress: data.address?.street || "",
            addressLocality: data.address?.city || "تهران",
            addressRegion: data.address?.state || "تهران",
            postalCode: data.address?.postalCode || "",
            addressCountry: data.address?.country || "ایران",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: data.coordinates?.latitude || 35.6892,
            longitude: data.coordinates?.longitude || 51.389,
          },
          openingHoursSpecification: Object.entries(data.workingHours || {}).map(([day, hours]) => ({
            "@type": "OpeningHoursSpecification",
            dayOfWeek: `https://schema.org/${day}`,
            opens: (hours as string).split("-")[0] || "09:00",
            closes: (hours as string).split("-")[1] || "18:00",
          })),
          serviceArea: {
            "@type": "GeoCircle",
            geoMidpoint: {
              "@type": "GeoCoordinates",
              latitude: data.coordinates?.latitude || 35.6892,
              longitude: data.coordinates?.longitude || 51.389,
            },
            geoRadius: "50000",
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
            itemListElement: (data.services || []).map((service: string, index: number) => ({
              "@type": "Offer",
              "@id": `${data.url}#offer-${index}`,
              itemOffered: {
                "@type": "Service",
                name: service,
                serviceType: "Web Development",
              },
              position: index + 1,
            })),
          },
          sameAs: Object.values(data.socialMedia || {}),
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "25",
            bestRating: "5",
            worstRating: "1",
          },
        }

      case "article":
        return {
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "@id": `${data.url}#article`,
          headline: data.title || "مقاله",
          description: data.description || "توضیحات مقاله",
          image: {
            "@type": "ImageObject",
            url: data.image || "/placeholder.svg?height=630&width=1200",
            width: 1200,
            height: 630,
          },
          author: {
            "@type": "Person",
            "@id": `${data.authorUrl || data.url}#person`,
            name: data.author?.name || "نام برنامه‌نویس",
            url: data.author?.url || data.authorUrl,
          },
          publisher: {
            "@type": "Organization",
            "@id": `${data.publisherUrl || data.url}#organization`,
            name: data.publisher?.name || "وب‌سایت شخصی برنامه‌نویس",
            logo: {
              "@type": "ImageObject",
              url: data.publisher?.logo || "/logo.png",
              width: 200,
              height: 60,
            },
          },
          datePublished: data.datePublished || new Date().toISOString(),
          dateModified: data.dateModified || new Date().toISOString(),
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": data.url || "https://example.com",
          },
          keywords: Array.isArray(data.keywords) ? data.keywords.join(", ") : data.keywords || "",
          articleSection: data.category || "عمومی",
          wordCount: data.wordCount || 500,
          timeRequired: `PT${data.readTimeMinutes || 5}M`,
          inLanguage: "fa-IR",
          isPartOf: {
            "@type": "Blog",
            "@id": `${data.blogUrl || data.url}/blog#blog`,
            name: "بلاگ برنامه‌نویسی",
          },
        }

      case "breadcrumb":
        return {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: (data.items || []).map((item: any, index: number) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item?.name || "صفحه",
            item: {
              "@type": "WebPage",
              "@id": item?.url || "https://example.com",
            },
          })),
        }

      case "service":
        return {
          "@context": "https://schema.org",
          "@type": "Service",
          "@id": `${data.providerUrl}#service-${data.name?.replace(/\s+/g, "-").toLowerCase()}`,
          name: data.name || "خدمات برنامه‌نویسی",
          description: data.description || "توضیحات خدمات",
          category: data.category || "Web Development",
          serviceType: data.category || "Web Development",
          offers: {
            "@type": "Offer",
            price: data.price || "قیمت بر اساس پروژه",
            priceCurrency: "IRR",
            availability: "https://schema.org/InStock",
            validFrom: new Date().toISOString(),
            priceValidUntil: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString(),
          },
          provider: {
            "@type": "Person",
            "@id": `${data.providerUrl}#person`,
            name: data.provider?.name || "نام برنامه‌نویس",
            url: data.provider?.url || "https://example.com",
            telephone: data.provider?.telephone || "+989123456789",
          },
          areaServed: {
            "@type": "Country",
            name: "ایران",
          },
          hoursAvailable: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "https://schema.org/Monday",
              "https://schema.org/Tuesday",
              "https://schema.org/Wednesday",
              "https://schema.org/Thursday",
              "https://schema.org/Friday",
              "https://schema.org/Saturday",
            ],
            opens: "09:00",
            closes: "18:00",
          },
        }

      case "review":
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          "@id": `${data.businessUrl}#organization`,
          name: data.businessName || "وب‌سایت شخصی برنامه‌نویس",
          url: data.businessUrl || "https://example.com",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: data.averageRating || "4.9",
            reviewCount: data.reviewCount || data.reviews?.length || 0,
            bestRating: "5",
            worstRating: "1",
          },
          review: (data.reviews || []).map((review: any, index: number) => ({
            "@type": "Review",
            "@id": `${data.businessUrl}#review-${index}`,
            author: {
              "@type": "Person",
              name: review.author || "کاربر ناشناس",
            },
            reviewRating: {
              "@type": "Rating",
              ratingValue: review.rating || 5,
              bestRating: "5",
              worstRating: "1",
            },
            reviewBody: review.reviewBody || "نظر مثبت",
            datePublished: review.datePublished || new Date().toISOString(),
          })),
        }

      default:
        return {}
    }
  }

  const structuredData = generateStructuredData()

  // اگر داده‌ای وجود نداشت، چیزی رندر نکن
  if (!structuredData || Object.keys(structuredData).length === 0) {
    return null
  }

  // اعتبارسنجی در محیط توسعه
  if (validate && process.env.NODE_ENV === "development") {
    console.log(`Schema ${type}:`, structuredData)
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
}
