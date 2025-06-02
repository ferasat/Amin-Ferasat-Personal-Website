"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, X } from "lucide-react"

export default function PWAManager() {
  const [installPrompt, setInstallPrompt] = useState<any>(null)
  const [showInstallBanner, setShowInstallBanner] = useState(false)
  const [isOnline, setIsOnline] = useState(true)
  const [isUpdateAvailable, setIsUpdateAvailable] = useState(false)

  useEffect(() => {
    // ثبت service worker
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker
          .register("/service-worker.js")
          .then((registration) => {
            console.log("Service Worker registered with scope:", registration.scope)

            // بررسی به‌روزرسانی
            registration.addEventListener("updatefound", () => {
              const newWorker = registration.installing
              if (newWorker) {
                newWorker.addEventListener("statechange", () => {
                  if (newWorker.state === "installed" && navigator.serviceWorker.controller) {
                    setIsUpdateAvailable(true)
                  }
                })
              }
            })
          })
          .catch((error) => {
            console.error("Service Worker registration failed:", error)
          })

        // بررسی به‌روزرسانی service worker
        let refreshing = false
        navigator.serviceWorker.addEventListener("controllerchange", () => {
          if (refreshing) return
          refreshing = true
          window.location.reload()
        })
      })
    }

    // ذخیره رویداد beforeinstallprompt برای استفاده بعدی
    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault()
      setInstallPrompt(e)

      // نمایش بنر نصب اگر کاربر قبلاً آن را رد نکرده باشد
      const hasUserDismissed = localStorage.getItem("pwa-install-dismissed")
      if (!hasUserDismissed) {
        setShowInstallBanner(true)
      }
    })

    // بررسی وضعیت آنلاین/آفلاین
    const handleOnlineStatus = () => setIsOnline(navigator.onLine)
    window.addEventListener("online", handleOnlineStatus)
    window.addEventListener("offline", handleOnlineStatus)

    return () => {
      window.removeEventListener("online", handleOnlineStatus)
      window.removeEventListener("offline", handleOnlineStatus)
    }
  }, [])

  const handleInstall = async () => {
    if (!installPrompt) return

    // نمایش پنجره نصب
    installPrompt.prompt()

    // منتظر انتخاب کاربر
    const choiceResult = await installPrompt.userChoice

    // پاکسازی رویداد
    setInstallPrompt(null)
    setShowInstallBanner(false)

    // ثبت انتخاب کاربر
    if (choiceResult.outcome === "accepted") {
      console.log("User accepted the install prompt")
    } else {
      console.log("User dismissed the install prompt")
      // ذخیره انتخاب کاربر برای عدم نمایش مجدد
      localStorage.setItem("pwa-install-dismissed", "true")
    }
  }

  const dismissInstallBanner = () => {
    setShowInstallBanner(false)
    // ذخیره انتخاب کاربر برای عدم نمایش مجدد
    localStorage.setItem("pwa-install-dismissed", "true")
  }

  const updateServiceWorker = () => {
    if ("serviceWorker" in navigator && navigator.serviceWorker.controller) {
      navigator.serviceWorker.ready.then((registration) => {
        if (registration.waiting) {
          registration.waiting.postMessage({ type: "SKIP_WAITING" })
        }
      })
    }
  }

  return (
    <>
      {/* بنر نصب PWA */}
      {showInstallBanner && (
        <div className="fixed bottom-4 left-4 right-4 z-50 md:left-auto md:right-4 md:max-w-md animate-fadeInUp">
          <Card className="shadow-lg border-2">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">نصب اپلیکیشن</CardTitle>
                <Button variant="ghost" size="icon" onClick={dismissInstallBanner} className="h-6 w-6">
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <CardDescription className="mb-4">
                این وب‌سایت را به عنوان اپلیکیشن روی دستگاه خود نصب کنید تا بدون نیاز به مرورگر به آن دسترسی داشته باشید.
              </CardDescription>
            </CardContent>
            <CardFooter className="pt-0">
              <Button onClick={handleInstall} className="w-full">
                <Download className="h-4 w-4 mr-2" />
                نصب اپلیکیشن
              </Button>
            </CardFooter>
          </Card>
        </div>
      )}

      {/* اعلان آفلاین */}
      {!isOnline && (
        <div className="fixed top-4 left-4 right-4 z-50 md:left-auto md:right-4 md:max-w-md animate-fadeInDown">
          <Card className="shadow-lg border-2 border-yellow-500 bg-yellow-50 dark:bg-yellow-900/20">
            <CardContent className="p-4 flex items-center justify-between">
              <p className="text-yellow-800 dark:text-yellow-200 text-sm">
                شما آفلاین هستید. برخی از ویژگی‌ها ممکن است در دسترس نباشند.
              </p>
              <Button variant="ghost" size="sm" onClick={() => window.location.reload()}>
                تلاش مجدد
              </Button>
            </CardContent>
          </Card>
        </div>
      )}

      {/* اعلان به‌روزرسانی */}
      {isUpdateAvailable && (
        <div className="fixed top-4 left-4 right-4 z-50 md:left-auto md:right-4 md:max-w-md animate-fadeInDown">
          <Card className="shadow-lg border-2 border-blue-500 bg-blue-50 dark:bg-blue-900/20">
            <CardContent className="p-4 flex items-center justify-between">
              <p className="text-blue-800 dark:text-blue-200 text-sm">نسخه جدیدی از وب‌سایت در دسترس است.</p>
              <Button variant="outline" size="sm" onClick={updateServiceWorker}>
                به‌روزرسانی
              </Button>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  )
}
