"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Cookie, X } from "lucide-react"

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      setShowConsent(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setShowConsent(false)

    // فعال‌سازی Google Analytics پس از موافقت
    if (typeof window !== "undefined" && (window as any).gtag) {
      ;(window as any).gtag("consent", "update", {
        analytics_storage: "granted",
        ad_storage: "granted",
      })
    }
  }

  const rejectCookies = () => {
    localStorage.setItem("cookie-consent", "rejected")
    setShowConsent(false)

    // غیرفعال‌سازی Google Analytics
    if (typeof window !== "undefined" && (window as any).gtag) {
      ;(window as any).gtag("consent", "update", {
        analytics_storage: "denied",
        ad_storage: "denied",
      })
    }
  }

  if (!showConsent) return null

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 md:left-auto md:right-4 md:max-w-md animate-fadeInUp">
      <Card className="shadow-lg border-2">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Cookie className="h-5 w-5 text-primary" />
              <CardTitle className="text-lg">کوکی‌ها</CardTitle>
            </div>
            <Button variant="ghost" size="icon" onClick={rejectCookies} className="h-6 w-6">
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent className="pt-0">
          <CardDescription className="mb-4 text-sm">
            ما از کوکی‌ها برای بهبود تجربه کاربری و تجزیه و تحلیل ترافیک وب‌سایت استفاده می‌کنیم. با ادامه استفاده از سایت،
            با استفاده از کوکی‌ها موافقت می‌کنید.
          </CardDescription>
          <div className="flex gap-2">
            <Button onClick={acceptCookies} size="sm" className="flex-1">
              موافقم
            </Button>
            <Button onClick={rejectCookies} variant="outline" size="sm" className="flex-1">
              رد می‌کنم
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
