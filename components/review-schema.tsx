import StructuredData from "./structured-data"

interface Review {
  author: string
  rating: number
  reviewBody: string
  datePublished: string
}

interface ReviewSchemaProps {
  reviews: Review[]
  businessName: string
  businessUrl: string
}

export default function ReviewSchema({ reviews, businessName, businessUrl }: ReviewSchemaProps) {
  // بررسی وجود داده‌های ضروری
  if (!reviews || !Array.isArray(reviews) || reviews.length === 0) {
    return null
  }

  const reviewData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: businessName || "وب‌سایت شخصی برنامه‌نویس",
    url: businessUrl || "https://example.com",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: (reviews.reduce((sum, review) => sum + (review.rating || 5), 0) / reviews.length).toFixed(1),
      reviewCount: reviews.length,
      bestRating: 5,
      worstRating: 1,
    },
    review: reviews.map((review) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: review.author || "کاربر ناشناس",
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: review.rating || 5,
        bestRating: 5,
        worstRating: 1,
      },
      reviewBody: review.reviewBody || "نظر مثبت",
      datePublished: review.datePublished || new Date().toISOString(),
    })),
  }

  return <StructuredData type="organization" data={reviewData} />
}
