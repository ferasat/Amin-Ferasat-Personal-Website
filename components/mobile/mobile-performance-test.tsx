"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { useMobileDetector } from "./mobile-detector"

export default function MobilePerformanceTest() {
  const isMobile = useMobileDetector()
  const [metrics, setMetrics] = useState({
    fcp: 0,
    lcp: 0,
    cls: 0,
    fid: 0,
    ttfb: 0,
    networkType: "",
    effectiveConnectionType: "",
    deviceMemory: 0,
    hardwareConcurrency: 0,
  })

  useEffect(() => {
    // اندازه‌گیری TTFB
    const navigationEntry = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming
    if (navigationEntry) {
      setMetrics((prev) => ({
        ...prev,
        ttfb: navigationEntry.responseStart - navigationEntry.requestStart,
      }))
    }

    // اندازه‌گیری FCP
    const fcpObserver = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries()
      if (entries.length > 0) {
        const fcp = entries[0]
        setMetrics((prev) => ({
          ...prev,
          fcp: fcp.startTime,
        }))
      }
    })
    fcpObserver.observe({ type: "paint", buffered: true })

    // اندازه‌گیری LCP
    const lcpObserver = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries()
      const lastEntry = entries[entries.length - 1]
      setMetrics((prev) => ({
        ...prev,
        lcp: lastEntry.startTime,
      }))
    })
    lcpObserver.observe({ type: "largest-contentful-paint", buffered: true })

    // اندازه‌گیری CLS
    let clsValue = 0
    const clsObserver = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries()
      entries.forEach((entry: any) => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value
          setMetrics((prev) => ({
            ...prev,
            cls: clsValue,
          }))
        }
      })
    })
    clsObserver.observe({ type: "layout-shift", buffered: true })

    // اندازه‌گیری FID
    const fidObserver = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries()
      entries.forEach((entry: any) => {
        setMetrics((prev) => ({
          ...prev,
          fid: entry.processingStart - entry.startTime,
        }))
      })
    })
    fidObserver.observe({ type: "first-input", buffered: true })

    // اطلاعات دستگاه
    if (navigator.connection) {
      const conn = navigator.connection as any
      setMetrics((prev) => ({
        ...prev,
        networkType: conn.type || "unknown",
        effectiveConnectionType: conn.effectiveType || "unknown",
      }))
    }

    if (navigator.deviceMemory) {
      setMetrics((prev) => ({
        ...prev,
        deviceMemory: navigator.deviceMemory,
      }))
    }

    if (navigator.hardwareConcurrency) {
      setMetrics((prev) => ({
        ...prev,
        hardwareConcurrency: navigator.hardwareConcurrency,
      }))
    }

    return () => {
      fcpObserver.disconnect()
      lcpObserver.disconnect()
      clsObserver.disconnect()
      fidObserver.disconnect()
    }
  }, [])

  if (!isMobile) return null

  return (
    <Card className="mx-4 my-8">
      <CardHeader>
        <CardTitle>تست عملکرد موبایل</CardTitle>
        <CardDescription>اندازه‌گیری Core Web Vitals در دستگاه شما</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>FCP (First Contentful Paint)</span>
            <span>{metrics.fcp.toFixed(0)} ms</span>
          </div>
          <Progress value={Math.min(100, (metrics.fcp / 2000) * 100)} className="h-2" />
        </div>

        <div className="space-y-2">
          <div className="flex justify-between">
            <span>LCP (Largest Contentful Paint)</span>
            <span>{metrics.lcp.toFixed(0)} ms</span>
          </div>
          <Progress value={Math.min(100, (metrics.lcp / 2500) * 100)} className="h-2" />
        </div>

        <div className="space-y-2">
          <div className="flex justify-between">
            <span>CLS (Cumulative Layout Shift)</span>
            <span>{metrics.cls.toFixed(3)}</span>
          </div>
          <Progress value={Math.min(100, (metrics.cls / 0.1) * 100)} className="h-2" />
        </div>

        <div className="space-y-2">
          <div className="flex justify-between">
            <span>FID (First Input Delay)</span>
            <span>{metrics.fid.toFixed(0)} ms</span>
          </div>
          <Progress value={Math.min(100, (metrics.fid / 100) * 100)} className="h-2" />
        </div>

        <div className="space-y-2">
          <div className="flex justify-between">
            <span>TTFB (Time to First Byte)</span>
            <span>{metrics.ttfb.toFixed(0)} ms</span>
          </div>
          <Progress value={Math.min(100, (metrics.ttfb / 500) * 100)} className="h-2" />
        </div>

        <div className="pt-4 border-t">
          <h4 className="font-medium mb-2">اطلاعات دستگاه</h4>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div>نوع شبکه:</div>
            <div>{metrics.networkType}</div>

            <div>کیفیت اتصال:</div>
            <div>{metrics.effectiveConnectionType}</div>

            <div>حافظه دستگاه:</div>
            <div>{metrics.deviceMemory} GB</div>

            <div>تعداد هسته‌های CPU:</div>
            <div>{metrics.hardwareConcurrency}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
