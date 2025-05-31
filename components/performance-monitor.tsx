"use client"

import { useEffect } from "react"

export default function PerformanceMonitor() {
  useEffect(() => {
    // Core Web Vitals monitoring
    const reportWebVitals = (metric: any) => {
      // ارسال متریک‌ها به Google Analytics
      if (typeof window !== "undefined" && (window as any).gtag) {
        ;(window as any).gtag("event", metric.name, {
          event_category: "Web Vitals",
          event_label: metric.id,
          value: Math.round(metric.name === "CLS" ? metric.value * 1000 : metric.value),
          non_interaction: true,
        })
      }

      // لاگ کردن در کنسول برای دیباگ
      console.log(`${metric.name}: ${metric.value}`)
    }

    // اندازه‌گیری LCP (Largest Contentful Paint)
    const observeLCP = () => {
      if ("PerformanceObserver" in window) {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries()
          const lastEntry = entries[entries.length - 1]
          reportWebVitals({
            name: "LCP",
            value: lastEntry.startTime,
            id: "lcp",
          })
        })
        observer.observe({ entryTypes: ["largest-contentful-paint"] })
      }
    }

    // اندازه‌گیری FID (First Input Delay)
    const observeFID = () => {
      if ("PerformanceObserver" in window) {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries()
          entries.forEach((entry: any) => {
            reportWebVitals({
              name: "FID",
              value: entry.processingStart - entry.startTime,
              id: "fid",
            })
          })
        })
        observer.observe({ entryTypes: ["first-input"] })
      }
    }

    // اندازه‌گیری CLS (Cumulative Layout Shift)
    const observeCLS = () => {
      if ("PerformanceObserver" in window) {
        let clsValue = 0
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries()
          entries.forEach((entry: any) => {
            if (!entry.hadRecentInput) {
              clsValue += entry.value
            }
          })
          reportWebVitals({
            name: "CLS",
            value: clsValue,
            id: "cls",
          })
        })
        observer.observe({ entryTypes: ["layout-shift"] })
      }
    }

    // اجرای مانیتورینگ
    observeLCP()
    observeFID()
    observeCLS()

    // اندازه‌گیری زمان بارگذاری صفحه
    window.addEventListener("load", () => {
      const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart
      reportWebVitals({
        name: "Page Load Time",
        value: loadTime,
        id: "plt",
      })
    })
  }, [])

  return null
}
