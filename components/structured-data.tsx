interface StructuredDataProps {
  type: "website" | "article" | "person" | "organization" | "breadcrumb"
  data: any
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  const generateStructuredData = () => {
    // بررسی وجود data
    if (!data) return {}

    switch (type) {
      case "website":
        return {
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: data.name || "وب‌سایت شخصی برنامه‌نویس",
          url: data.url || "https://example.com",
          description: data.description || "برنامه‌نویس بک‌اند متخصص",
          potentialAction: {
            "@type": "SearchAction",
            target: {
              "@type": "EntryPoint",
              urlTemplate: `${data.url || "https://example.com"}/blog?search={search_term_string}`,
            },
            "query-input": "required name=search_term_string",
          },
          author: data.author
            ? {
                "@type": "Person",
                name: data.author.name || "نام برنامه‌نویس",
                url: data.author.url || data.url || "https://example.com",
              }
            : undefined,
        }

      case "article":
        return {
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: data.title || "مقاله",
          description: data.description || "توضیحات مقاله",
          image: data.image || "/placeholder.svg?height=630&width=1200",
          author: data.author
            ? {
                "@type": "Person",
                name: data.author.name || "نام برنامه‌نویس",
                url: data.author.url || "https://example.com",
              }
            : {
                "@type": "Person",
                name: "نام برنامه‌نویس",
                url: "https://example.com",
              },
          publisher: data.publisher
            ? {
                "@type": "Organization",
                name: data.publisher.name || "وب‌سایت شخصی برنامه‌نویس",
                logo: {
                  "@type": "ImageObject",
                  url: data.publisher.logo || "/logo.png",
                },
              }
            : {
                "@type": "Organization",
                name: "وب‌سایت شخصی برنامه‌نویس",
                logo: {
                  "@type": "ImageObject",
                  url: "/logo.png",
                },
              },
          datePublished: data.datePublished || new Date().toISOString(),
          dateModified: data.dateModified || new Date().toISOString(),
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": data.url || "https://example.com",
          },
          keywords: data.keywords || [],
          articleSection: data.category || "عمومی",
          wordCount: data.wordCount || 500,
          timeRequired: data.readTime || "۵ دقیقه",
          inLanguage: "fa-IR",
        }

      case "person":
        return {
          "@context": "https://schema.org",
          "@type": "Person",
          name: data.name || "نام برنامه‌نویس",
          jobTitle: data.jobTitle || "برنامه‌نویس بک‌اند",
          description: data.description || "متخصص در PHP و Laravel",
          url: data.url || "https://example.com",
          image: data.image || "/placeholder.svg?height=400&width=400",
          sameAs: data.sameAs || [],
          knowsAbout: data.skills || ["PHP", "Laravel"],
          worksFor: data.organization
            ? {
                "@type": "Organization",
                name: data.organization,
              }
            : undefined,
          address: data.location
            ? {
                "@type": "PostalAddress",
                addressLocality: data.location.city || "تهران",
                addressCountry: data.location.country || "ایران",
              }
            : {
                "@type": "PostalAddress",
                addressLocality: "تهران",
                addressCountry: "ایران",
              },
          email: data.email || "example@example.com",
          telephone: data.phone || "+989123456789",
        }

      case "organization":
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          name: data.name || "وب‌سایت شخصی برنامه‌نویس",
          url: data.url || "https://example.com",
          logo: data.logo || "/logo.png",
          description: data.description || "برنامه‌نویس بک‌اند متخصص",
          contactPoint: {
            "@type": "ContactPoint",
            telephone: data.phone || "+989123456789",
            contactType: "customer service",
            email: data.email || "example@example.com",
          },
          address: data.location
            ? {
                "@type": "PostalAddress",
                addressLocality: data.location.city || "تهران",
                addressCountry: data.location.country || "ایران",
              }
            : {
                "@type": "PostalAddress",
                addressLocality: "تهران",
                addressCountry: "ایران",
              },
          sameAs: data.sameAs || [],
        }

      case "breadcrumb":
        return {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: (data.items || []).map((item: any, index: number) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item?.name || "صفحه",
            item: item?.url || "https://example.com",
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

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
}
