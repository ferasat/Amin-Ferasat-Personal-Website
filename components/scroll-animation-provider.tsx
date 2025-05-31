"use client"

import type React from "react"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export default function ScrollAnimationProvider({
  children,
}: {
  children: React.ReactNode
}) {
  useScrollAnimation()
  return <>{children}</>
}
