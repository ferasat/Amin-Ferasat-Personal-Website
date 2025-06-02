"use client"

import Link from "next/link"
import { ModeToggle } from "./mode-toggle"
import MobileNavigation from "./mobile/mobile-navigation"
import { useMobileDetector } from "./mobile/mobile-detector"

export default function Header() {
  const isMobile = useMobileDetector()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 md:h-16 items-center justify-between px-4">
        <div className="flex items-center">
          <Link href="/" className="text-lg md:text-xl font-bold">
            نام برنامه‌نویس
          </Link>
        </div>

        {/* منوی دسکتاپ */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
          <Link href="#home" className="text-sm font-medium hover:text-primary transition-colors">
            خانه
          </Link>
          <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">
            درباره من
          </Link>
          <Link href="#skills" className="text-sm font-medium hover:text-primary transition-colors">
            مهارت‌ها
          </Link>
          <Link href="#projects" className="text-sm font-medium hover:text-primary transition-colors">
            نمونه‌کارها
          </Link>
          <Link href="#services" className="text-sm font-medium hover:text-primary transition-colors">
            خدمات
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
            تماس با من
          </Link>
          <ModeToggle />
        </nav>

        {/* منوی موبایل */}
        {isMobile ? (
          <MobileNavigation />
        ) : (
          <div className="lg:hidden">
            <ModeToggle />
          </div>
        )}
      </div>
    </header>
  )
}
