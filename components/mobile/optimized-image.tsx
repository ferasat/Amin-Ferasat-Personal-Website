"use client"

import { useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { useMobileDetector } from "./mobile-detector"

interface OptimizedImageProps {
  src: string
  alt: string
  width: number
  height: number
  mobileWidth?: number
  mobileHeight?: number
  className?: string
  priority?: boolean
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  mobileWidth,
  mobileHeight,
  className,
  priority = false,
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true)
  const isMobile = useMobileDetector()

  // تعیین سایز مناسب برای موبایل
  const imgWidth = isMobile && mobileWidth ? mobileWidth : width
  const imgHeight = isMobile && mobileHeight ? mobileHeight : height

  // تعیین کیفیت تصویر بر اساس دستگاه
  const quality = isMobile ? 60 : 80

  // تعیین سایزهای responsive
  const sizes = isMobile ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"

  return (
    <div className={cn("overflow-hidden relative", className)}>
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        width={imgWidth}
        height={imgHeight}
        priority={priority}
        quality={quality}
        sizes={sizes}
        loading={priority ? "eager" : "lazy"}
        onLoadingComplete={() => setIsLoading(false)}
        className={cn("transition-opacity duration-300", isLoading ? "opacity-0" : "opacity-100")}
      />
      {isLoading && <div className="absolute inset-0 bg-gray-200 animate-pulse" />}
    </div>
  )
}
