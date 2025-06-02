import type React from "react"
import "./globals.css"
import "./mobile.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ScrollAnimationProvider from "@/components/scroll-animation-provider"
import ConditionalBackground from "@/components/mobile/conditional-background"
import EnhancedStructuredData from "@/components/enhanced-structured-data"
import Analytics from "@/components/analytics"
import PerformanceMonitor from "@/components/performance-monitor"
import CookieConsent from "@/components/cookie-consent"
import SchemaValidator from "@/components/schema-validator"
import PWAManager from "@/components/pwa/pwa-manager"
import { Suspense } from "react"
import { getSiteUrl } from "@/lib/utils"

const inter = Inter({ subsets: ["latin"], display: "swap", preload: true, variable: "--font-inter" })

const SITE_URL = getSiteUrl()

export const metadata = {
  metadataBase: new URL(SITE_URL),
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
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/icons/icon-192x192.png",
    apple: "/icons/icon-512x512.png",
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "fa_IR",
    url: SITE_URL,
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
    canonical: SITE_URL,
    types: {
      "application/rss+xml": [{ url: "/feed.xml", title: "RSS Feed" }],
    },
  },
  appleWebApp: {
    title: "وب‌سایت شخصی برنامه‌نویس",
    statusBarStyle: "black-translucent",
    startupImage: [
      {
        url: "/icons/apple-splash-2048-2732.png",
        media: "(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)",
      },
      {
        url: "/icons/apple-splash-1668-2388.png",
        media: "(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2)",
      },
      {
        url: "/icons/apple-splash-1536-2048.png",
        media: "(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)",
      },
      {
        url: "/icons/apple-splash-1125-2436.png",
        media: "(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)",
      },
      {
        url: "/icons/apple-splash-1242-2688.png",
        media: "(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3)",
      },
      {
        url: "/icons/apple-splash-828-1792.png",
        media: "(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2)",
      },
      {
        url: "/icons/apple-splash-1242-2208.png",
        media: "(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3)",
      },
      {
        url: "/icons/apple-splash-750-1334.png",
        media: "(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)",
      },
      {
        url: "/icons/apple-splash-640-1136.png",
        media: "(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)",
      },
    ],
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
    url: SITE_URL,
    description: "برنامه‌نویس بک‌اند متخصص در PHP، Laravel و Livewire",
    author: {
      name: "نام برنامه‌نویس",
      url: SITE_URL,
    },
  }

  // Structured Data for Person
  const personStructuredData = {
    name: "نام برنامه‌نویس",
    givenName: "نام",
    familyName: "نام خانوادگی",
    jobTitle: "برنامه‌نویس بک‌اند",
    description: "متخصص در PHP، Laravel و Livewire",
    url: SITE_URL,
    image: "/placeholder.svg?height=400&width=400",
    sameAs: ["https://github.com/username", "https://linkedin.com/in/username", "https://twitter.com/username"],
    skills: ["PHP", "Laravel", "Livewire", "MySQL", "JavaScript", "TailwindCSS"],
    organization: "فریلنسر",
    location: {
      city: "تهران",
      state: "تهران",
      country: "ایران",
    },
    email: "example@example.com",
    phone: "+989123456789",
  }

  return (
    <html lang="fa" dir="rtl" className={inter.className}>
      <head>
        {/* Preload critical assets */}
        <link rel="preload" href="/fonts/your-persian-font.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />

        {/* PWA meta tags */}
        <meta name="application-name" content="وب‌سایت شخصی برنامه‌نویس" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="وب‌سایت شخصی برنامه‌نویس" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#3b82f6" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#3b82f6" />

        {/* Apple touch icons */}
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/icons/apple-touch-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon-180x180.png" />
        <link rel="apple-touch-icon" sizes="167x167" href="/icons/apple-touch-icon-167x167.png" />

        {/* Manifest */}
        <link rel="manifest" href="/manifest.json" />

        {/* Viewport meta tag با تنظیمات بهینه برای موبایل */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, viewport-fit=cover" />

        {/* Inline critical CSS */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
          /* Critical CSS here */
          body { 
            margin: 0; 
            font-family: 'Your Persian Font', Tahoma, Arial, sans-serif; 
            text-size-adjust: 100%; /* جلوگیری از تغییر سایز خودکار فونت در iOS */
          }
          .header { 
            position: sticky; 
            top: 0; 
            z-index: 50; 
          }
          .container { max-width: 1200px; margin: 0 auto; padding: 0 1rem; }
          section { padding: 2rem 0; }
          @media (min-width: 768px) { section { padding: 4rem 0; } }
          
          /* بهینه‌سازی برای موبایل */
          @media (max-width: 768px) {
            body { font-size: 14px; }
            .container { padding: 0 0.75rem; }
            section { padding: 1.5rem 0; }
            h1 { font-size: 1.5rem; }
            h2 { font-size: 1.25rem; }
          }
        `,
          }}
        />

        <EnhancedStructuredData type="website" data={websiteStructuredData} validate={true} />
        <EnhancedStructuredData type="person" data={personStructuredData} validate={true} />

        {/* RSS Feed Link */}
        <link rel="alternate" type="application/rss+xml" title="RSS Feed" href={`${SITE_URL}/feed.xml`} />
      </head>
      <body className="min-h-screen flex flex-col">
        {/* بک‌گراند متحرک که فقط در دسکتاپ نمایش داده می‌شود */}
        <ConditionalBackground />

        {/* Schema Validator - فقط در محیط توسعه */}
        {process.env.NODE_ENV === "development" && <SchemaValidator enabled={true} />}

        {/* Analytics */}
        <Analytics gtmId={process.env.NEXT_PUBLIC_GTM_ID} gtagId={process.env.NEXT_PUBLIC_GA_ID} />

        {/* Performance Monitoring */}
        <PerformanceMonitor />

        {/* PWA Manager */}
        <PWAManager />

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
