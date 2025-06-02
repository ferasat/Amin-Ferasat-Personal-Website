"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { ModeToggle } from "../mode-toggle"

export default function MobileNavigation() {
  const [open, setOpen] = useState(false)

  const handleLinkClick = () => {
    setOpen(false)
  }

  const navItems = [
    { href: "#home", label: "خانه" },
    { href: "#about", label: "درباره من" },
    { href: "#skills", label: "مهارت‌ها" },
    { href: "#projects", label: "نمونه‌کارها" },
    { href: "#services", label: "خدمات" },
    { href: "#contact", label: "تماس با من" },
  ]

  return (
    <div className="block lg:hidden">
      <div className="flex items-center gap-2">
        <ModeToggle />
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" aria-label="منو" className="h-9 w-9">
              <Menu className="h-4 w-4" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[80vw] max-w-sm p-0">
            <div className="flex flex-col h-full">
              <div className="p-4 border-b flex items-center justify-between">
                <span className="font-bold">منو</span>
                <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <nav className="flex-1 overflow-auto">
                <ul className="p-4 space-y-3">
                  {navItems.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="block py-2 px-3 rounded-md hover:bg-muted transition-colors"
                        onClick={handleLinkClick}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  )
}
