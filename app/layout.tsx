import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ScrollAnimationProvider from "@/components/scroll-animation-provider"
import AnimatedBackground from "@/components/animated-background"
import StructuredData from "@/components/structured-data"
import Analytics from "@/components/analytics"
import PerformanceMonitor from "@/components/performance-monitor"
import CookieConsent from "@/components/cookie-consent"
import { Suspense } from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://example.com"),
  title: {
    default: "وب‌سایت شخصی برنامه‌نویس | توسعه‌دهنده بک‌اند PHP و Laravel",
    template: "%s | وب‌سایت شخصی برنامه‌نویس",
  },
  description:
    "برنامه‌نویس بک‌اند متخصص در PHP، Laravel و Livewire. ارائه خدمات طراحی وب‌سایت، فروشگاه آنلاین و نرم‌افزارهای اختصاصی.",
  keywords: ["برنامه‌نویس", "PHP", "Laravel", "Livewire", "توسعه وب", "بک‌اند", "فروشگاه آنلاین", "طراحی وب‌سایت"],
  authors: [{ name: "نام برنامه‌نویس" }],
  creator: "نام برنامه‌نویس",
  publisher: "نام برنامه‌نویس",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  generator: "v0.dev",
  applicationName: "وب‌سایت شخصی برنامه‌نویس",
  referrer: "origin-when-cross-origin",
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "fa_IR",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://example.com",
    siteName: "وب‌سایت شخصی برنامه‌نویس",
    title: "وب‌سایت شخصی برنامه‌نویس | توسعه‌دهنده بک‌اند PHP و Laravel",
    description:
      "برنامه‌نویس بک‌اند متخصص در PHP، Laravel و Livewire. ارائه خدمات طراحی وب‌سایت، فروشگاه آنلاین و نرم‌افزارهای اختصاصی.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "وب‌سایت شخصی برنامه‌نویس",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "وب‌سایت شخصی برنامه‌نویس | توسعه‌دهنده بک‌اند PHP و Laravel",
    description:
      "برنامه‌نویس بک‌اند متخصص در PHP، Laravel و Livewire. ارائه خدمات طراحی وب‌سایت، فروشگاه آنلاین و نرم‌افزارهای اختصاصی.",
    images: ["/og-image.png"],
    creator: "@username",
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL || "https://example.com",
    types: {
      "application/rss+xml": [{ url: "/feed.xml", title: "RSS Feed" }],
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Structured Data for Website
  const websiteStructuredData = {
    name: "وب‌سایت شخصی برنامه‌نویس",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://example.com",
    description: "برنامه‌نویس بک‌اند متخصص در PHP، Laravel و Livewire",
    author: {
      name: "نام برنامه‌نویس",
      url: process.env.NEXT_PUBLIC_SITE_URL || "https://example.com",
    },
  }

  // Structured Data for Person
  const personStructuredData = {
    name: "نام برنامه‌نویس",
    jobTitle: "برنامه‌نویس بک‌اند",
    description: "متخصص در PHP، Laravel و Livewire",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://example.com",
    image: "/placeholder.svg?height=400&width=400",
    sameAs: ["https://github.com/username", "https://linkedin.com/in/username", "https://twitter.com/username"],
    skills: ["PHP", "Laravel", "Livewire", "MySQL", "JavaScript", "TailwindCSS"],
    organization: "فریلنسر",
    location: {
      city: "تهران",
      country: "ایران",
    },
    email: "example@example.com",
    phone: "+989123456789",
  }

  return (
    <html lang="fa" dir="rtl">
      <head>
        <StructuredData type="website" data={websiteStructuredData} />
        <StructuredData type="person" data={personStructuredData} />

        {/* RSS Feed Link */}
        <link
          rel="alternate"
          type="application/rss+xml"
          title="RSS Feed"
          href={`${process.env.NEXT_PUBLIC_SITE_URL || "https://example.com"}/feed.xml`}
        />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />

        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <AnimatedBackground />

        {/* Analytics - اضافه کردن Google Analytics ID در صورت وجود */}
        <Analytics gtmId={process.env.NEXT_PUBLIC_GTM_ID} gtagId={process.env.NEXT_PUBLIC_GA_ID} />

        {/* Performance Monitoring */}
        <PerformanceMonitor />

        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ScrollAnimationProvider>
            <Suspense fallback={null}>
              <Header />
              <main className="flex-grow">{children}</main>
              <Footer />

              {/* Cookie Consent */}
              <CookieConsent />
            </Suspense>
          </ScrollAnimationProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
