interface StructuredDataProps {
  type: "website" | "article" | "person" | "organization" | "breadcrumb"
  data: any
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  const generateStructuredData = () => {
    switch (type) {
      case "website":
        return {
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: data.name,
          url: data.url,
          description: data.description,
          potentialAction: {
            "@type": "SearchAction",
            target: {
              "@type": "EntryPoint",
              urlTemplate: `${data.url}/blog?search={search_term_string}`,
            },
            "query-input": "required name=search_term_string",
          },
          author: {
            "@type": "Person",
            name: data.author.name,
            url: data.author.url,
          },
        }

      case "article":
        return {
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: data.title,
          description: data.description,
          image: data.image,
          author: {
            "@type": "Person",
            name: data.author.name,
            url: data.author.url,
          },
          publisher: {
            "@type": "Organization",
            name: data.publisher.name,
            logo: {
              "@type": "ImageObject",
              url: data.publisher.logo,
            },
          },
          datePublished: data.datePublished,
          dateModified: data.dateModified,
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": data.url,
          },
          keywords: data.keywords,
          articleSection: data.category,
          wordCount: data.wordCount,
          timeRequired: data.readTime,
          inLanguage: "fa-IR",
        }

      case "person":
        return {
          "@context": "https://schema.org",
          "@type": "Person",
          name: data.name,
          jobTitle: data.jobTitle,
          description: data.description,
          url: data.url,
          image: data.image,
          sameAs: data.sameAs,
          knowsAbout: data.skills,
          worksFor: {
            "@type": "Organization",
            name: data.organization,
          },
          address: {
            "@type": "PostalAddress",
            addressLocality: data.location.city,
            addressCountry: data.location.country,
          },
          email: data.email,
          telephone: data.phone,
        }

      case "organization":
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          name: data.name,
          url: data.url,
          logo: data.logo,
          description: data.description,
          contactPoint: {
            "@type": "ContactPoint",
            telephone: data.phone,
            contactType: "customer service",
            email: data.email,
          },
          address: {
            "@type": "PostalAddress",
            addressLocality: data.location.city,
            addressCountry: data.location.country,
          },
          sameAs: data.sameAs,
        }

      case "breadcrumb":
        return {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: data.items.map((item: any, index: number) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: item.url,
          })),
        }

      default:
        return {}
    }
  }

  const structuredData = generateStructuredData()

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
}
