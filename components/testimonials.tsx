import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, Quote } from "lucide-react"
import ReviewSchema from "./review-schema"

export default function Testimonials() {
  const testimonials = [
    {
      author: "احمد محمدی",
      company: "مدیر فروشگاه آنلاین تکنو",
      rating: 5,
      reviewBody:
        "فروشگاه آنلاین ما را با کیفیت عالی و در زمان مقرر تحویل داد. سیستم مدیریت محصولات بسیار کاربرپسند است و پشتیبانی فوق‌العاده‌ای دارد.",
      datePublished: "2024-03-15",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      author: "فاطمه کریمی",
      company: "بنیانگذار استارتاپ ایده‌نو",
      rating: 5,
      reviewBody:
        "وب‌سایت شرکت ما را طراحی کرد که هم زیبا و هم کاربردی است. سرعت بارگذاری عالی و SEO بهینه‌سازی شده. کاملاً راضی هستیم.",
      datePublished: "2024-03-10",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      author: "علی رضایی",
      company: "مدیر IT شرکت پارس‌تک",
      rating: 5,
      reviewBody:
        "سیستم مدیریت پروژه اختصاصی که برای ما توسعه داد، کار تیم ما را بسیار ساده‌تر کرده. کدنویسی تمیز و مستندات کامل.",
      datePublished: "2024-03-05",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      author: "مریم احمدی",
      company: "مالک کافه رستوران سنتی",
      rating: 5,
      reviewBody:
        "وب‌سایت رستوران ما با سیستم سفارش آنلاین فوق‌العاده است. مشتریان راحت سفارش می‌دهند و مدیریت سفارشات بسیار آسان شده.",
      datePublished: "2024-02-28",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      author: "حسین موسوی",
      company: "مدیر آژانس دیجیتال مارکتینگ",
      rating: 5,
      reviewBody:
        "چندین پروژه با ایشان داشته‌ایم. همیشه کیفیت کار بالا، تحویل به موقع و پشتیبانی عالی. به تمام دوستان توصیه می‌کنم.",
      datePublished: "2024-02-20",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      author: "زهرا صادقی",
      company: "مدیر وب‌سایت آموزشی",
      rating: 4,
      reviewBody:
        "پلتفرم آموزش آنلاین ما را با امکانات کاملی طراحی کرد. سیستم کوئیز و ارزیابی بسیار حرفه‌ای است. فقط کاش زودتر آشنا می‌شدیم.",
      datePublished: "2024-02-15",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  return (
    <>
      <ReviewSchema
        reviews={testimonials}
        businessName="وب‌سایت شخصی برنامه‌نویس"
        businessUrl={process.env.NEXT_PUBLIC_SITE_URL || "https://example.com"}
      />
      <section id="testimonials">
        <div className="container">
          <div className="text-center mb-12 animate-on-scroll">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Quote className="h-8 w-8 text-primary" />
              <h2 className="section-title mb-0">نظرات مشتریان</h2>
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto">آنچه مشتریان درباره کیفیت کار و خدمات ما می‌گویند</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className={`card-hover animate-on-scroll animate-delay-${((index % 3) + 1) * 100} relative`}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.author} />
                      <AvatarFallback>{testimonial.author.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <CardTitle className="text-base">{testimonial.author}</CardTitle>
                      <CardDescription className="text-sm">{testimonial.company}</CardDescription>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <blockquote className="text-sm leading-relaxed italic">"{testimonial.reviewBody}"</blockquote>
                  <time className="text-xs text-muted-foreground mt-3 block" dateTime={testimonial.datePublished}>
                    {new Date(testimonial.datePublished).toLocaleDateString("fa-IR")}
                  </time>
                </CardContent>
                <Quote className="absolute top-4 left-4 h-6 w-6 text-primary/20" />
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
