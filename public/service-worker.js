// Service Worker برای PWA

const CACHE_NAME = "tarsa-theme-v1"

// لیست فایل‌هایی که باید کش شوند
const STATIC_ASSETS = [
  "/",
  "/index.html",
  "/manifest.json",
  "/favicon.ico",
  "/icons/icon-192x192.png",
  "/icons/icon-512x512.png",
  "/icons/maskable-icon.png",
]

// نصب service worker و کش کردن فایل‌های استاتیک
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS)
    }),
  )
  self.skipWaiting()
})

// فعال‌سازی service worker و حذف کش‌های قدیمی
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(cacheNames.filter((name) => name !== CACHE_NAME).map((name) => caches.delete(name)))
    }),
  )
  self.clients.claim()
})

// استراتژی کش: ابتدا از شبکه، سپس از کش
self.addEventListener("fetch", (event) => {
  // فقط درخواست‌های GET را کش می‌کنیم
  if (event.request.method !== "GET") return

  // آدرس‌های API را کش نمی‌کنیم
  if (event.request.url.includes("/api/")) return

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // اگر درخواست موفق بود، آن را در کش ذخیره می‌کنیم
        if (response.status === 200) {
          const responseClone = response.clone()
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone)
          })
        }
        return response
      })
      .catch(() => {
        // اگر درخواست ناموفق بود، از کش استفاده می‌کنیم
        return caches.match(event.request).then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse
          }
          // اگر در کش هم نبود، صفحه آفلاین را نمایش می‌دهیم
          if (event.request.mode === "navigate") {
            return caches.match("/offline.html")
          }
          return null
        })
      }),
  )
})

// اعلان به کاربر برای به‌روزرسانی
self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting()
  }
})
