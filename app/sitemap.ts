import type { MetadataRoute } from "next"
import { getSiteUrl } from "@/lib/utils"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl()

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.8,
    },
  ]

  // Blog posts
  const blogPosts = [
    "laravel-best-practices",
    "livewire-tutorial",
    "database-optimization",
    "tailwindcss-introduction",
    "web-security",
    "future-of-web-development",
  ]

  const blogPages = blogPosts.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }))

  return [...staticPages, ...blogPages]
}
