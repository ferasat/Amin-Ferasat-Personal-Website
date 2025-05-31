import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Database, Globe, Layout, Server, Settings } from "lucide-react"

export default function Services() {
  const services = [
    {
      id: 1,
      title: "طراحی و توسعه وب‌سایت",
      description: "طراحی و توسعه وب‌سایت‌های مدرن، سریع و واکنش‌گرا با استفاده از تکنولوژی‌های روز",
      icon: Globe,
    },
    {
      id: 2,
      title: "توسعه فروشگاه آنلاین",
      description: "ایجاد فروشگاه‌های آنلاین با امکانات کامل فروش، مدیریت محصولات و سیستم پرداخت",
      icon: Layout,
    },
    {
      id: 3,
      title: "توسعه API",
      description: "طراحی و پیاده‌سازی API‌های قدرتمند، امن و مقیاس‌پذیر برای اپلیکیشن‌های موبایل و وب",
      icon: Code,
    },
    {
      id: 4,
      title: "توسعه نرم‌افزارهای اختصاصی",
      description: "طراحی و توسعه نرم‌افزارهای اختصاصی متناسب با نیازهای کسب‌وکار شما",
      icon: Settings,
    },
    {
      id: 5,
      title: "مدیریت پایگاه داده",
      description: "طراحی، بهینه‌سازی و مدیریت پایگاه‌های داده برای عملکرد بهتر و امنیت بیشتر",
      icon: Database,
    },
    {
      id: 6,
      title: "پشتیبانی و نگهداری",
      description: "ارائه خدمات پشتیبانی، نگهداری و بروزرسانی برای سیستم‌های موجود",
      icon: Server,
    },
  ]

  return (
    <section id="services">
      <div className="container">
        <h2 className="section-title animate-on-scroll">خدمات قابل ارائه</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon

            return (
              <Card
                key={service.id}
                className={`transition-all hover:shadow-lg hover:-translate-y-1 card-hover animate-on-scroll animate-delay-${((index % 3) + 1) * 100}`}
              >
                <CardHeader className="pb-2">
                  <div className="mb-4 p-2 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
