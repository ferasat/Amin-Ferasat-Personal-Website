import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Helper function to get valid site URL
export function getSiteUrl(): string {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL

  // Check if URL is valid
  if (siteUrl) {
    try {
      new URL(siteUrl)
      return siteUrl
    } catch {
      // If invalid URL, fall back to default
      return "https://example.com"
    }
  }

  // If no URL provided, use default
  return "https://example.com"
}

// Helper function to build full URL
export function buildUrl(path = ""): string {
  const baseUrl = getSiteUrl()
  return path ? `${baseUrl}${path.startsWith("/") ? path : `/${path}`}` : baseUrl
}
