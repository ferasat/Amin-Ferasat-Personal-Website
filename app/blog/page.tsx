import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowLeft, Search, Rss } from "lucide-react"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import Link from "next/link"
import StructuredData from "@/components/structured-data"
import { getSiteUrl } from "@/lib/utils"

export const metadata = {
  title: "بلاگ و مقالات",
  description: "مقالات و آموزش‌های برنامه‌نویسی، تکنولوژی‌های جدید و تجربیات شخصی در زمینه توسعه وب و PHP",
  keywords: ["بلاگ", "مقالات برنامه‌نویسی", "آموزش PHP", "Laravel", "توسعه وب"],
  openGraph: {
    title: "بلاگ و مقالات | وب‌سایت شخصی برنامه‌نویس",
    description: "مقالات و آموزش‌های برنامه‌نویسی، تکنولوژی‌های جدید و تجربیات شخصی",
    images: ["/og-blog.png"],
  },
  alternates: {
    canonical: "/blog",
    types: {
      "application/rss+xml": [{ url: "/feed.xml", title: "RSS Feed" }],
    },
  },
}

export default function BlogPage() {
  const siteUrl = getSiteUrl()

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

  const categories = ["همه", "Laravel", "PHP", "Livewire", "CSS", "امنیت", "تکنولوژی"]

  // Breadcrumb Structured Data
  const breadcrumbData = {
    items: [
      { name: "خانه", url: siteUrl },
      { name: "بلاگ", url: `${siteUrl}/blog` },
    ],
  }

  return (
    <>
      <StructuredData type="breadcrumb" data={breadcrumbData} />
      <div className="min-h-screen py-8 md:py-16">
        <div className="container">
          {/* Header */}
          <div className="text-center mb-8 md:mb-12 animate-on-scroll">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">بلاگ و مقالات</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-4">
              مقالات و آموزش‌هایی در زمینه برنامه‌نویسی، تکنولوژی‌های جدید و تجربیات شخصی
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

          {/* Search and Filter */}
          <div className="mb-8 md:mb-12 animate-on-scroll animate-delay-200">
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center justify-between">
              <div className="relative w-full md:w-96">
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input placeholder="جستجو در مقالات..." className="pr-10" />
              </div>
              <div className="flex flex-wrap gap-2 justify-center md:justify-end">
                {categories.map((category) => (
                  <Button key={category} variant="outline" size="sm" className="text-xs md:text-sm">
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {blogPosts.map((post, index) => (
              <article
                key={post.id}
                className={`overflow-hidden card-hover animate-on-scroll animate-delay-${((index % 3) + 1) * 100}`}
              >
                <Card className="h-full">
                  <div className="relative h-40 md:h-48 w-full overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute top-3 right-3">
                      <Badge variant="secondary" className="bg-background/80 backdrop-blur text-xs">
                        {post.category}
                      </Badge>
                    </div>
                  </div>

                  <CardHeader className="pb-2 p-4 md:p-6">
                    <div className="flex items-center gap-3 md:gap-4 text-xs md:text-sm text-muted-foreground mb-2">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3 md:h-4 md:w-4" />
                        <time dateTime={post.publishDate}>{post.publishDate}</time>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3 md:h-4 md:w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <CardTitle className="line-clamp-2 hover:text-primary transition-colors text-sm md:text-base">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="pt-0 p-4 md:p-6">
                    <CardDescription className="line-clamp-3 mb-4 text-xs md:text-sm">{post.excerpt}</CardDescription>
                    <Button variant="outline" size="sm" asChild className="w-full btn-animate">
                      <Link href={`/blog/${post.slug}`}>
                        ادامه مطلب
                        <ArrowLeft className="h-3 w-3 md:h-4 md:w-4 mr-2" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </article>
            ))}
          </div>

          {/* Pagination */}
          <nav className="mt-8 md:mt-12 flex justify-center animate-on-scroll" aria-label="صفحه‌بندی">
            <div className="flex gap-2">
              <Button variant="outline" size="sm" aria-label="صفحه قبلی">
                قبلی
              </Button>
              <Button size="sm" aria-current="page">
                ۱
              </Button>
              <Button variant="outline" size="sm">
                ۲
              </Button>
              <Button variant="outline" size="sm">
                ۳
              </Button>
              <Button variant="outline" size="sm" aria-label="صفحه بعدی">
                بعدی
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}
