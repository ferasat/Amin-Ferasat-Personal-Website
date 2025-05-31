"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Send } from "lucide-react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // شبیه‌سازی ارسال فرم
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setSubmitMessage("پیام شما با موفقیت ارسال شد! به زودی با شما تماس خواهیم گرفت.")
    setFormData({ name: "", email: "", subject: "", message: "" })
    setIsSubmitting(false)

    // پاک کردن پیام بعد از 5 ثانیه
    setTimeout(() => setSubmitMessage(""), 5000)
  }

  return (
    <section className="py-8 md:py-16 bg-gradient-to-b from-muted/30 to-background">
      <div className="container px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-6 md:mb-8 animate-on-scroll">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">آماده شروع پروژه جدید هستید؟</h2>
            <p className="text-muted-foreground text-sm md:text-base">
              برای مشاوره رایگان و دریافت قیمت پروژه خود، فرم زیر را پر کنید.
            </p>
          </div>

          <Card className="card-hover animate-on-scroll animate-delay-200">
            <CardHeader className="text-center p-4 md:p-6">
              <CardTitle className="flex items-center justify-center gap-2 text-lg md:text-xl">
                <Send className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                فرم تماس سریع
              </CardTitle>
              <CardDescription className="text-sm md:text-base">
                در کمتر از ۲۴ ساعت پاسخ شما را خواهیم داد
              </CardDescription>
            </CardHeader>
            <CardContent className="p-4 md:p-6">
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm">
                      نام و نام خانوادگی *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="transition-all focus:scale-105 text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm">
                      ایمیل *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="transition-all focus:scale-105 text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-sm">
                    موضوع پروژه *
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="مثال: طراحی فروشگاه آنلاین"
                    className="transition-all focus:scale-105 text-sm"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm">
                    توضیحات پروژه *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="لطفاً جزئیات پروژه خود را شرح دهید..."
                    className="transition-all focus:scale-105 text-sm resize-none"
                  />
                </div>

                <Button type="submit" className="w-full btn-animate" disabled={isSubmitting} size="lg">
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white ml-2"></div>
                      در حال ارسال...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 ml-2" />
                      ارسال پیام
                    </>
                  )}
                </Button>

                {submitMessage && (
                  <div className="text-center p-3 md:p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg animate-scaleIn">
                    <p className="text-green-700 dark:text-green-300 font-medium text-sm md:text-base">
                      {submitMessage}
                    </p>
                  </div>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
