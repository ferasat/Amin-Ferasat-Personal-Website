import { Suspense } from "react"
import LightweightAbout from "@/components/performance/lightweight-about"
import SimpleSkills from "@/components/performance/simple-skills"
import Projects from "@/components/projects"
import Services from "@/components/services"
import Contact from "@/components/contact"
import { getSiteUrl } from "@/lib/utils"
import AdaptiveHero from "@/components/mobile/adaptive-hero"
import MobilePerformanceTest from "@/components/mobile/mobile-performance-test"

export const metadata = {
  title: "خانه",
  description:
    "وب‌سایت شخصی برنامه‌نویس بک‌اند متخصص در PHP و Laravel. ارائه خدمات طراحی وب‌سایت، فروشگاه آنلاین و توسعه نرم‌افزار.",
  keywords: ["برنامه‌نویس", "PHP", "Laravel", "بک‌اند", "طراحی وب‌سایت", "فروشگاه آنلاین"],
  openGraph: {
    title: "وب‌سایت شخصی برنامه‌نویس | خانه",
    description: "برنامه‌نویس بک‌اند متخصص در PHP و Laravel",
    images: ["/og-home.png"],
  },
}

export default function Home() {
  const siteUrl = getSiteUrl()

  // Local SEO Data
  const localSEOData = {
    businessName: "وب‌سایت شخصی برنامه‌نویس",
    address: {
      street: "خیابان ولیعصر، پلاک ۱۲۳",
      city: "تهران",
      state: "تهران",
      postalCode: "1234567890",
      country: "ایران",
    },
    phone: "+989123456789",
    email: "example@example.com",
    website: siteUrl,
    services: [
      "طراحی وب‌سایت",
      "توسعه فروشگاه آنلاین",
      "برنامه‌نویسی PHP",
      "توسعه با Laravel",
      "طراحی API",
      "پشتیبانی وب‌سایت",
    ],
    workingHours: {
      Monday: "09:00-18:00",
      Tuesday: "09:00-18:00",
      Wednesday: "09:00-18:00",
      Thursday: "09:00-18:00",
      Friday: "09:00-18:00",
      Saturday: "09:00-15:00",
    },
    socialMedia: {
      github: "https://github.com/username",
      linkedin: "https://linkedin.com/in/username",
      twitter: "https://twitter.com/username",
    },
    coordinates: {
      latitude: 35.6892,
      longitude: 51.389,
    },
  }

  // Service Schema Data
  const servicesData = [
    {
      name: "طراحی و توسعه وب‌سایت",
      description: "طراحی وب‌سایت‌های مدرن، سریع و واکنش‌گرا با تکنولوژی‌های روز",
      category: "Web Development",
      price: "از ۵ میلیون تومان",
      duration: "۱-۴ هفته",
    },
    {
      name: "توسعه فروشگاه آنلاین",
      description: "ایجاد فروشگاه‌های آنلاین با امکانات کامل فروش و مدیریت",
      category: "E-commerce",
      price: "از ۱۰ میلیون تومان",
      duration: "۳-۶ هفته",
    },
    {
      name: "توسعه API",
      description: "طراحی و پیاده‌سازی API‌های قدرتمند و مقیاس‌پذیر",
      category: "API Development",
      price: "از ۳ میلیون تومان",
      duration: "۱-۳ هفته",
    },
    {
      name: "پشتیبانی و نگهداری",
      description: "خدمات پشتیبانی، نگهداری و بروزرسانی سیستم‌های موجود",
      category: "Support",
      price: "از ۵۰۰ هزار تومان ماهانه",
      duration: "مداوم",
    },
  ]

  const providerData = {
    name: "نام برنامه‌نویس",
    url: siteUrl,
    telephone: "+989123456789",
    address: localSEOData.address,
  }

  return (
    <>
      <Suspense fallback={<div className="h-screen flex items-center justify-center">در حال بارگذاری...</div>}>
        {/* Hero Section با تشخیص خودکار موبایل */}
        <AdaptiveHero />

        <LightweightAbout />
        <SimpleSkills />

        {/* لود تنبل بخش‌های سنگین‌تر */}
        <Suspense fallback={<div className="py-16 text-center">در حال بارگذاری پروژه‌ها...</div>}>
          <Projects />
        </Suspense>

        <Suspense fallback={<div className="py-16 text-center">در حال بارگذاری خدمات...</div>}>
          <Services />
        </Suspense>

        <Suspense fallback={<div className="py-16 text-center">در حال بارگذاری فرم تماس...</div>}>
          <Contact />
        </Suspense>

        {/* کامپوننت تست عملکرد موبایل */}
        <MobilePerformanceTest />
      </Suspense>
    </>
  )
}
