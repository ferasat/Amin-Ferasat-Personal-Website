"use client"

import { useEffect } from "react"

interface SchemaValidatorProps {
  enabled?: boolean
}

export default function SchemaValidator({ enabled = false }: SchemaValidatorProps) {
  useEffect(() => {
    if (!enabled || typeof window === "undefined") return

    // تابع برای اعتبارسنجی Schema ها
    const validateSchemas = () => {
      const scripts = document.querySelectorAll('script[type="application/ld+json"]')
      const schemas: any[] = []

      scripts.forEach((script, index) => {
        try {
          const data = JSON.parse(script.textContent || "")
          schemas.push({ index, data, valid: true })
          console.log(`✅ Schema ${index + 1} is valid:`, data)
        } catch (error) {
          schemas.push({ index, data: null, valid: false, error })
          console.error(`❌ Schema ${index + 1} is invalid:`, error)
        }
      })

      // خلاصه نتایج
      const validCount = schemas.filter((s) => s.valid).length
      const totalCount = schemas.length

      console.log(`📊 Schema Validation Summary: ${validCount}/${totalCount} valid schemas`)

      return schemas
    }

    // اجرای اعتبارسنجی پس از بارگذاری کامل صفحه
    const timer = setTimeout(validateSchemas, 1000)

    return () => clearTimeout(timer)
  }, [enabled])

  return null
}
