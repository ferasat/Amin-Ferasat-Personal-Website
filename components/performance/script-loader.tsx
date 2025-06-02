"use client"

import { useEffect, useState } from "react"
import Script from "next/script"

interface ScriptLoaderProps {
  strategy?: "beforeInteractive" | "afterInteractive" | "lazyOnload"
  onLoad?: () => void
  src: string
  id: string
}

export default function ScriptLoader({ strategy = "lazyOnload", onLoad, src, id }: ScriptLoaderProps) {
  const [shouldLoad, setShouldLoad] = useState(false)

  useEffect(() => {
    // Only load non-critical scripts when user has interacted with the page
    // or after a delay
    const timer = setTimeout(() => {
      setShouldLoad(true)
    }, 3000)

    const handleInteraction = () => {
      setShouldLoad(true)
      clearTimeout(timer)
    }

    document.addEventListener("scroll", handleInteraction, { once: true })
    document.addEventListener("click", handleInteraction, { once: true })

    return () => {
      clearTimeout(timer)
      document.removeEventListener("scroll", handleInteraction)
      document.removeEventListener("click", handleInteraction)
    }
  }, [])

  if (!shouldLoad && strategy === "lazyOnload") {
    return null
  }

  return <Script id={id} src={src} strategy={strategy} onLoad={onLoad} />
}
