"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { ModeToggle } from "./mode-toggle"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 animate-fadeInUp">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="text-xl font-bold">
            نام برنامه‌نویس
          </Link>
        </div>

        {/* منوی دسکتاپ */}
        <nav className="hidden md:flex items-center gap-6 animate-fadeInRight">
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
          <Link href="#blog" className="text-sm font-medium hover:text-primary transition-colors">
            بلاگ
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
            تماس با من
          </Link>
          <ModeToggle />
        </nav>

        {/* دکمه منوی موبایل */}
        <div className="flex md:hidden items-center gap-4">
          <ModeToggle />
          <Button
            variant="ghost"
            size="icon"
            aria-label="منو"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* منوی موبایل */}
      {isMenuOpen && (
        <div className="container md:hidden py-4">
          <nav className="flex flex-col gap-4">
            <Link
              href="#home"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              خانه
            </Link>
            <Link
              href="#about"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              درباره من
            </Link>
            <Link
              href="#skills"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              مهارت‌ها
            </Link>
            <Link
              href="#projects"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              نمونه‌کارها
            </Link>
            <Link
              href="#services"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              خدمات
            </Link>
            <Link
              href="#blog"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              بلاگ
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              تماس با من
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
