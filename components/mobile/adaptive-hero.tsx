"use client"

import { useMobileDetector } from "./mobile-detector"
import OptimizedHero from "../performance/optimized-hero"
import MobileOptimizedHero from "./mobile-optimized-hero"

export default function AdaptiveHero() {
  const isMobile = useMobileDetector()

  return isMobile ? <MobileOptimizedHero /> : <OptimizedHero />
}
