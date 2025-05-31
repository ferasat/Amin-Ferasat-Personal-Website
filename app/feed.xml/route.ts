import { NextResponse } from "next/server"

// Mock data - در پروژه واقعی از دیتابیس استفاده کنید
const blogPosts = [
  {
    id: 1,
    title: "بهترین روش‌های کدنویسی در Laravel",
    excerpt: "در این مقاله به بررسی بهترین شیوه‌های کدنویسی در فریم‌ورک Laravel می‌پردازیم",
    slug: "laravel-best-practices",
    publishDate: "2024-04-04T00:00:00Z",
    category: "Laravel",
    author: "نام برنامه‌نویس",
  },
  {
    id: 2,
    title: "آموزش کامل Livewire برای مبتدیان",
    excerpt: "راهنمای جامع برای شروع کار با Livewire و ایجاد کامپوننت‌های تعاملی",
    slug: "livewire-tutorial",
    publishDate: "2024-03-30T00:00:00Z",
    category: "Livewire",
    author: "نام برنامه‌نویس",
  },
  {
    id: 3,
    title: "بهینه‌سازی عملکرد پایگاه داده در PHP",
    excerpt: "تکنیک‌های مختلف برای بهینه‌سازی کوئری‌ها و بهبود عملکرد پایگاه داده",
    slug: "database-optimization",
    publishDate: "2024-03-25T00:00:00Z",
    category: "PHP",
    author: "نام برنامه‌نویس",
  },
  {
    id: 4,
    title: "معرفی TailwindCSS و مزایای آن",
    excerpt: "آشنایی با فریم‌ورک CSS محبوب TailwindCSS و دلایل استفاده از آن",
    slug: "tailwindcss-introduction",
    publishDate: "2024-03-18T00:00:00Z",
    category: "CSS",
    author: "نام برنامه‌نویس",
  },
  {
    id: 5,
    title: "امنیت در اپلیکیشن‌های وب",
    excerpt: "نکات مهم امنیتی که هر توسعه‌دهنده وب باید در نظر بگیرد",
    slug: "web-security",
    publishDate: "2024-03-10T00:00:00Z",
    category: "امنیت",
    author: "نام برنامه‌نویس",
  },
  {
    id: 6,
    title: "آینده توسعه وب: تکنولوژی‌های نوظهور",
    excerpt: "نگاهی به تکنولوژی‌های جدید و روندهای آینده در حوزه توسعه وب",
    slug: "future-of-web-development",
    publishDate: "2024-03-05T00:00:00Z",
    category: "تکنولوژی",
    author: "نام برنامه‌نویس",
  },
]

export async function GET() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com"

  const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" 
     xmlns:content="http://purl.org/rss/1.0/modules/content/"
     xmlns:wfw="http://wellformedweb.org/CommentAPI/"
     xmlns:dc="http://purl.org/dc/elements/1.1/"
     xmlns:atom="http://www.w3.org/2005/Atom"
     xmlns:sy="http://purl.org/rss/1.0/modules/syndication/"
     xmlns:slash="http://purl.org/rss/1.0/modules/slash/">
  <channel>
    <title>وب‌سایت شخصی برنامه‌نویس - بلاگ</title>
    <link>${siteUrl}</link>
    <description>مقالات و آموزش‌های برنامه‌نویسی، تکنولوژی‌های جدید و تجربیات شخصی</description>
    <language>fa-IR</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <managingEditor>example@example.com (نام برنامه‌نویس)</managingEditor>
    <webMaster>example@example.com (نام برنامه‌نویس)</webMaster>
    <generator>Next.js RSS Generator</generator>
    <image>
      <url>${siteUrl}/logo.png</url>
      <title>وب‌سایت شخصی برنامه‌نویس</title>
      <link>${siteUrl}</link>
      <width>144</width>
      <height>144</height>
    </image>
    <atom:link href="${siteUrl}/feed.xml" rel="self" type="application/rss+xml"/>
    
    ${blogPosts
      .map(
        (post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${siteUrl}/blog/${post.slug}</link>
      <guid isPermaLink="true">${siteUrl}/blog/${post.slug}</guid>
      <description><![CDATA[${post.excerpt}]]></description>
      <pubDate>${new Date(post.publishDate).toUTCString()}</pubDate>
      <author>example@example.com (${post.author})</author>
      <category><![CDATA[${post.category}]]></category>
      <dc:creator><![CDATA[${post.author}]]></dc:creator>
    </item>`,
      )
      .join("")}
  </channel>
</rss>`

  return new NextResponse(rssXml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "s-maxage=3600, stale-while-revalidate",
    },
  })
}
