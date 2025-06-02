"use client"

import type React from "react"

import { useEffect, useState } from "react"

export function useMobileDetector() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // تشخیص موبایل بر اساس عرض صفحه
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // اجرای اولیه
    checkMobile()

    // اضافه کردن event listener برای تغییر سایز
    window.addEventListener("resize", checkMobile)

    // پاکسازی event listener
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  return isMobile
}

// کامپوننت render prop برای استفاده در مواردی که نیاز به تشخیص موبایل داریم
interface MobileDetectorProps {
  children: (isMobile: boolean) => React.ReactNode
}

export default function MobileDetector({ children }: MobileDetectorProps) {
  const isMobile = useMobileDetector()
  return <>{children(isMobile)}</>
}
