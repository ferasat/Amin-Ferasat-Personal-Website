import Link from "next/link"
import { Code } from "lucide-react"
import ContactForm from "./contact-form"

export default function Footer() {
  return (
    <>
      <ContactForm />
      <footer className="border-t py-8 bg-muted/50">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0 animate-fadeInLeft">
              <Code className="h-6 w-6 text-primary ml-2 animate-float" />
              <span className="font-bold text-lg">نام برنامه‌نویس</span>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 animate-fadeInRight">
              <Link href="#home" className="text-sm hover:text-primary transition-colors">
                خانه
              </Link>
              <Link href="#about" className="text-sm hover:text-primary transition-colors">
                درباره من
              </Link>
              <Link href="#skills" className="text-sm hover:text-primary transition-colors">
                مهارت‌ها
              </Link>
              <Link href="#projects" className="text-sm hover:text-primary transition-colors">
                نمونه‌کارها
              </Link>
              <Link href="#services" className="text-sm hover:text-primary transition-colors">
                خدمات
              </Link>
              <Link href="#blog" className="text-sm hover:text-primary transition-colors">
                بلاگ
              </Link>
              <Link href="#contact" className="text-sm hover:text-primary transition-colors">
                تماس با من
              </Link>
            </div>
          </div>

          <div className="mt-8 text-center text-sm text-muted-foreground animate-fadeInUp">
            <p>تمامی حقوق محفوظ است &copy; {new Date().getFullYear()}</p>
            <p className="mt-2">ساخته شده با ❤️ و تکنولوژی‌های مدرن وب</p>
          </div>
        </div>
      </footer>
    </>
  )
}
