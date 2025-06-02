/// <reference lib="webworker" />

// این یک service worker است که به عنوان یک فایل مستقل در مسیر /app قرار می‌گیرد

const CACHE_NAME = "tarsa-theme-v1"

// لیست فایل‌هایی که باید کش شوند
const STATIC_ASSETS = ["/", "/favicon.ico", "/site.webmanifest", "/fonts/your-persian-font.woff2"]

// نصب service worker و کش کردن فایل‌های استاتیک
self.addEventListener("install", (event: ExtendableEvent) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS)
    }),
  )
})

// فعال‌سازی service worker و حذف کش‌های قدیمی
self.addEventListener("activate", (event: ExtendableEvent) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(cacheNames.filter((name) => name !== CACHE_NAME).map((name) => caches.delete(name)))
    }),
  )
})

// استراتژی کش: ابتدا از شبکه، سپس از کش
self.addEventListener("fetch", (event: FetchEvent) => {
  // فقط درخواست‌های GET را کش می‌کنیم
  if (event.request.method !== "GET") return

  // آدرس‌های API را کش نمی‌کنیم
  if (event.request.url.includes("/api/")) return

  // استراتژی Network First برای صفحه اصلی
  if (event.request.url.endsWith("/") || event.request.url.includes("index.html")) {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          const responseClone = response.clone()
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone)
          })
          return response
        })
        .catch(() => {
          return caches.match(event.request)
        }),
    )
    return
  }

  // استراتژی Cache First برای فایل‌های استاتیک
  if (event.request.url.match(/\.(js|css|woff2|png|jpg|jpeg|svg|webp)$/) || event.request.url.includes("/_next/")) {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return (
          response ||
          fetch(event.request).then((fetchResponse) => {
            const responseClone = fetchResponse.clone()
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseClone)
            })
            return fetchResponse
          })
        )
      }),
    )
    return
  }

  // استراتژی پیش‌فرض: Network با fallback به Cache
  event.respondWith(
    fetch(event.request).catch(() => {
      return caches.match(event.request)
    }),
  )
})

// اعلان به کاربر برای به‌روزرسانی
self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting()
  }
})

export {}
