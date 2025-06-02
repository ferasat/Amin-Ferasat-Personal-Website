"use client"

import { useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface NextImageServiceProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  priority?: boolean
}

export default function NextImageService({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
}: NextImageServiceProps) {
  const [isLoading, setIsLoading] = useState(true)

  // Check if the image is from an external domain
  const isExternal = src.startsWith("http") || src.startsWith("//")

  // For external images, we need to configure domains in next.config.js
  // or use a proxy service like Imgproxy or Cloudinary

  // Generate responsive sizes
  const sizes = `
    (max-width: 640px) 100vw,
    (max-width: 768px) 80vw,
    (max-width: 1024px) 60vw,
    (max-width: 1280px) 50vw,
    33vw
  `

  return (
    <div className={cn("overflow-hidden relative", className)}>
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        quality={80}
        sizes={sizes}
        loading={priority ? "eager" : "lazy"}
        onLoadingComplete={() => setIsLoading(false)}
        className={cn("transition-opacity duration-300", isLoading ? "opacity-0" : "opacity-100")}
      />
      {isLoading && <div className="absolute inset-0 bg-gray-200 animate-pulse" />}
    </div>
  )
}
