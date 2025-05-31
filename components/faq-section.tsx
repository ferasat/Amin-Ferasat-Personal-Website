"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronDown, HelpCircle } from "lucide-react"
import { useState } from "react"
import FAQSchema from "./faq-schema"

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const faqs = [
    {
      question: "چه نوع پروژه‌هایی را انجام می‌دهید؟",
      answer:
        "من در زمینه توسعه وب‌سایت‌های اختصاصی، فروشگاه‌های آنلاین، سیستم‌های مدیریت محتوا (CMS)، API ها و اپلیکیشن‌های وب با PHP و Laravel فعالیت می‌کنم. همچنین خدمات بهینه‌سازی و نگهداری وب‌سایت‌های موجود را نیز ارائه می‌دهم.",
    },
    {
      question: "مدت زمان تحویل پروژه چقدر است؟",
      answer:
        "مدت زمان تحویل بستگی به پیچیدگی و حجم پروژه دارد. یک وب‌سایت ساده معمولاً ۱-۲ هفته، فروشگاه آنلاین ۳-۴ هفته و سیستم‌های پیچیده ۱-۳ ماه زمان نیاز دارند. پس از بررسی نیازهای شما، زمان‌بندی دقیق‌تری ارائه خواهم داد.",
    },
    {
      question: "هزینه توسعه وب‌سایت چقدر است؟",
      answer:
        "هزینه بر اساس نوع پروژه، ویژگی‌های مورد نیاز و پیچیدگی کار متفاوت است. برای دریافت قیمت دقیق، لطفاً از طریق فرم تماس یا شماره تلفن با من در ارتباط باشید تا پس از بررسی نیازهای شما، پیشنهاد قیمت مناسبی ارائه دهم.",
    },
    {
      question: "آیا پشتیبانی پس از تحویل پروژه ارائه می‌دهید؟",
      answer:
        "بله، برای تمام پروژه‌ها ۳ ماه پشتیبانی رایگان ارائه می‌دهم که شامل رفع باگ‌ها، بروزرسانی‌های امنیتی و راهنمایی‌های فنی است. پس از این مدت نیز می‌توانید قرارداد پشتیبانی ماهانه یا سالانه داشته باشید.",
    },
    {
      question: "از چه تکنولوژی‌هایی استفاده می‌کنید؟",
      answer:
        "من متخصص PHP و فریم‌ورک Laravel هستم. همچنین از Livewire برای ایجاد رابط‌های کاربری تعاملی، TailwindCSS و Bootstrap برای طراحی، MySQL و PostgreSQL برای پایگاه داده و Git برای مدیریت نسخه استفاده می‌کنم.",
    },
    {
      question: "آیا وب‌سایت‌های شما موبایل‌فرندلی هستند؟",
      answer:
        "بله، تمام وب‌سایت‌هایی که طراحی می‌کنم کاملاً واکنش‌گرا (Responsive) هستند و روی تمام دستگاه‌ها شامل موبایل، تبلت و دسکتاپ به بهترین شکل نمایش داده می‌شوند. همچنین از بهترین شیوه‌های SEO و سرعت بارگذاری استفاده می‌کنم.",
    },
    {
      question: "آیا امکان مدیریت محتوای وب‌سایت توسط خودم وجود دارد؟",
      answer:
        "بله، تمام وب‌سایت‌ها با پنل مدیریت کاربرپسند طراحی می‌شوند که به شما امکان مدیریت محتوا، افزودن مقالات، بروزرسانی تصاویر و مدیریت محصولات را می‌دهد. همچنین آموزش کامل کار با پنل مدیریت نیز ارائه می‌دهم.",
    },
    {
      question: "چگونه امنیت وب‌سایت را تضمین می‌کنید؟",
      answer:
        "امنیت برای من اولویت اول است. از بهترین شیوه‌های امنیتی شامل رمزگذاری داده‌ها، محافظت در برابر SQL Injection و XSS، استفاده از HTTPS، بروزرسانی منظم سیستم و پشتیبان‌گیری خودکار استفاده می‌کنم. همچنین تمام کدها بر اساس استانداردهای امنیتی نوشته می‌شوند.",
    },
  ]

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  return (
    <>
      <FAQSchema faqs={faqs} />
      <section id="faq" className="bg-muted/30">
        <div className="container">
          <div className="text-center mb-12 animate-on-scroll">
            <div className="flex items-center justify-center gap-2 mb-4">
              <HelpCircle className="h-8 w-8 text-primary" />
              <h2 className="section-title mb-0">سوالات متداول</h2>
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              پاسخ سوالات رایج درباره خدمات برنامه‌نویسی و توسعه وب
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid gap-4">
              {faqs.map((faq, index) => (
                <Card key={index} className={`card-hover animate-on-scroll animate-delay-${((index % 4) + 1) * 100}`}>
                  <Collapsible open={openItems.includes(index)} onOpenChange={() => toggleItem(index)}>
                    <CollapsibleTrigger className="w-full">
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-right text-base md:text-lg font-semibold">{faq.question}</CardTitle>
                        <ChevronDown
                          className={`h-4 w-4 shrink-0 transition-transform duration-200 ${
                            openItems.includes(index) ? "rotate-180" : ""
                          }`}
                        />
                      </CardHeader>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <CardContent className="pt-0">
                        <CardDescription className="text-sm md:text-base leading-relaxed">{faq.answer}</CardDescription>
                      </CardContent>
                    </CollapsibleContent>
                  </Collapsible>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
