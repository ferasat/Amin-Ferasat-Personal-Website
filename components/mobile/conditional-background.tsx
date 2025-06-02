"use client"

import { useMobileDetector } from "./mobile-detector"
import AnimatedBackground from "../animated-background"

export default function ConditionalBackground() {
  const isMobile = useMobileDetector()

  // فقط در دسکتاپ بک‌گراند متحرک نمایش داده می‌شود
  return !isMobile ? <AnimatedBackground /> : null
}
