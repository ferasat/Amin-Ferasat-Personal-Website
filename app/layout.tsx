import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ScrollAnimationProvider from "@/components/scroll-animation-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "وب‌سایت شخصی برنامه‌نویس",
  description: "وب‌سایت شخصی و حرفه‌ای برنامه‌نویس بک‌اند",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ScrollAnimationProvider>
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </ScrollAnimationProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
