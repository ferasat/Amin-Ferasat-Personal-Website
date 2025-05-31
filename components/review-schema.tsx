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
  const reviewData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: businessName,
    url: businessUrl,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: (reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length).toFixed(1),
      reviewCount: reviews.length,
      bestRating: 5,
      worstRating: 1,
    },
    review: reviews.map((review) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: review.author,
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: review.rating,
        bestRating: 5,
        worstRating: 1,
      },
      reviewBody: review.reviewBody,
      datePublished: review.datePublished,
    })),
  }

  return <StructuredData type="organization" data={reviewData} />
}
