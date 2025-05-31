import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowLeft, Rss } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "بهترین روش‌های کدنویسی در Laravel",
      excerpt:
        "در این مقاله به بررسی بهترین شیوه‌های کدنویسی در فریم‌ورک Laravel می‌پردازیم و نکاتی برای نوشتن کد تمیز و قابل نگهداری ارائه می‌دهیم.",
      image: "/placeholder.svg?height=200&width=400",
      category: "Laravel",
      readTime: "۵ دقیقه",
      publishDate: "۱۴۰۳/۰۱/۱۵",
      slug: "laravel-best-practices",
    },
    {
      id: 2,
      title: "آموزش کامل Livewire برای مبتدیان",
      excerpt: "راهنمای جامع برای شروع کار با Livewire و ایجاد کامپوننت‌های تعاملی بدون نیاز به JavaScript پیچیده.",
      image: "/placeholder.svg?height=200&width=400",
      category: "Livewire",
      readTime: "۸ دقیقه",
      publishDate: "۱۴۰۳/۰۱/۱۰",
      slug: "livewire-tutorial",
    },
    {
      id: 3,
      title: "بهینه‌سازی عملکرد پایگاه داده در PHP",
      excerpt: "تکنیک‌های مختلف برای بهینه‌سازی کوئری‌ها و بهبود عملکرد پایگاه داده در اپلیکیشن‌های PHP.",
      image: "/placeholder.svg?height=200&width=400",
      category: "PHP",
      readTime: "۶ دقیقه",
      publishDate: "۱۴۰۳/۰۱/۰۵",
      slug: "database-optimization",
    },
    {
      id: 4,
      title: "معرفی TailwindCSS و مزایای آن",
      excerpt: "آشنایی با فریم‌ورک CSS محبوب TailwindCSS و دلایل استفاده از آن در پروژه‌های مدرن وب.",
      image: "/placeholder.svg?height=200&width=400",
      category: "CSS",
      readTime: "۴ دقیقه",
      publishDate: "۱۴۰۲/۱۲/۲۸",
      slug: "tailwindcss-introduction",
    },
    {
      id: 5,
      title: "امنیت در اپلیکیشن‌های وب",
      excerpt: "نکات مهم امنیتی که هر توسعه‌دهنده وب باید در نظر بگیرد تا از اپلیکیشن خود در برابر تهدیدات محافظت کند.",
      image: "/placeholder.svg?height=200&width=400",
      category: "امنیت",
      readTime: "۱۰ دقیقه",
      publishDate: "۱۴۰۲/۱۲/۲۰",
      slug: "web-security",
    },
    {
      id: 6,
      title: "آینده توسعه وب: تکنولوژی‌های نوظهور",
      excerpt: "نگاهی به تکنولوژی‌های جدید و روندهای آینده در حوزه توسعه وب که باید مورد توجه قرار گیرند.",
      image: "/placeholder.svg?height=200&width=400",
      category: "تکنولوژی",
      readTime: "۷ دقیقه",
      publishDate: "۱۴۰۲/۱۲/۱۵",
      slug: "future-of-web-development",
    },
  ]

  return (
    <section id="blog" className="bg-muted/30">
      <div className="container">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="section-title">وبلاگ و مقالات</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-4">
            در این بخش، مقالات و آموزش‌هایی در زمینه برنامه‌نویسی، تکنولوژی‌های جدید و تجربیات شخصی خود منتشر می‌کنم.
          </p>

          {/* RSS Feed Link */}
          <div className="flex justify-center">
            <Button variant="outline" size="sm" asChild className="gap-2">
              <Link href="/feed.xml" target="_blank">
                <Rss className="h-4 w-4" />
                RSS Feed
              </Link>
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <Card
              key={post.id}
              className={`overflow-hidden card-hover animate-on-scroll animate-delay-${((index % 3) + 1) * 100}`}
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-background/80 backdrop-blur">
                    {post.category}
                  </Badge>
                </div>
              </div>

              <CardHeader className="pb-2">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{post.publishDate}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <CardTitle className="line-clamp-2 hover:text-primary transition-colors">{post.title}</CardTitle>
              </CardHeader>

              <CardContent className="pt-0">
                <CardDescription className="line-clamp-3 mb-4">{post.excerpt}</CardDescription>
                <Button variant="outline" size="sm" asChild className="w-full btn-animate">
                  <Link href={`/blog/${post.slug}`}>
                    ادامه مطلب
                    <ArrowLeft className="h-4 w-4 mr-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-on-scroll">
          <Button asChild size="lg" className="btn-animate">
            <Link href="/blog">مشاهده همه مقالات</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
