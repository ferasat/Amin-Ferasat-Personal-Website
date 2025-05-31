import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight, ArrowLeft, Share2, Heart, MessageCircle } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import StructuredData from "@/components/structured-data"

// Mock data - در پروژه واقعی از دیتابیس یا CMS استفاده کنید
const blogPosts = {
  "laravel-best-practices": {
    id: 1,
    title: "بهترین روش‌های کدنویسی در Laravel",
    excerpt: "در این مقاله به بررسی بهترین شیوه‌های کدنویسی در فریم‌ورک Laravel می‌پردازیم",
    content: `
# بهترین روش‌های کدنویسی در Laravel

Laravel یکی از محبوب‌ترین فریم‌ورک‌های PHP است که با ارائه ساختار منظم و ابزارهای قدرتمند، توسعه وب را آسان‌تر می‌کند. در این مقاله به بررسی بهترین شیوه‌های کدنویسی در Laravel خواهیم پرداخت.

## ۱. استفاده از Eloquent ORM

Eloquent ORM یکی از قدرتمندترین ویژگی‌های Laravel است. برای استفاده بهینه از آن:

- همیشه از relationship ها استفاده کنید
- از eager loading برای جلوگیری از N+1 problem استفاده کنید
- از scope ها برای query های تکراری استفاده کنید

\`\`\`php
// بد
$users = User::all();
foreach($users as $user) {
    echo $user->posts->count();
}

// خوب
$users = User::with('posts')->get();
foreach($users as $user) {
    echo $user->posts->count();
}
\`\`\`

## ۲. استفاده از Service Classes

برای منطق پیچیده کسب‌وکار، از Service Classes استفاده کنید:

\`\`\`php
class UserService
{
    public function createUser(array $data): User
    {
        // منطق ایجاد کاربر
        return User::create($data);
    }
}
\`\`\`

## ۳. Validation

همیشه از Form Request ها برای validation استفاده کنید:

\`\`\`php
class StoreUserRequest extends FormRequest
{
    public function rules()
    {
        return [
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users',
        ];
    }
}
\`\`\`

## نتیجه‌گیری

رعایت این اصول باعث می‌شود کد شما تمیزتر، قابل نگهداری‌تر و قابل اعتمادتر باشد.
    `,
    image: "/placeholder.svg?height=400&width=800",
    category: "Laravel",
    readTime: "۵ دقیقه",
    publishDate: "۱۴۰۳/۰۱/۱۵",
    publishDateISO: "2024-04-04",
    modifiedDateISO: "2024-04-04",
    author: "نام برنامه‌نویس",
    tags: ["Laravel", "PHP", "Best Practices", "Clean Code"],
    wordCount: 850,
  },
  "livewire-tutorial": {
    id: 2,
    title: "آموزش کامل Livewire برای مبتدیان",
    excerpt: "راهنمای جامع برای شروع کار با Livewire",
    content: `
# آموزش کامل Livewire برای مبتدیان

Livewire یک فریم‌ورک full-stack برای Laravel است که امکان ساخت رابط‌های کاربری تعاملی را بدون نوشتن JavaScript فراهم می‌کند.

## نصب Livewire

ابتدا Livewire را نصب کنید:

\`\`\`bash
composer require livewire/livewire
\`\`\`

## ایجاد اولین کامپوننت

\`\`\`bash
php artisan make:livewire Counter
\`\`\`

## کد کامپوننت

\`\`\`php
class Counter extends Component
{
    public $count = 0;

    public function increment()
    {
        $this->count++;
    }

    public function render()
    {
        return view('livewire.counter');
    }
}
\`\`\`

و در view:

\`\`\`html
<div>
    <h1>{{ $count }}</h1>
    <button wire:click="increment">+</button>
</div>
\`\`\`

## نتیجه‌گیری

Livewire ابزار قدرتمندی برای ساخت اپلیکیشن‌های تعاملی است.
    `,
    image: "/placeholder.svg?height=400&width=800",
    category: "Livewire",
    readTime: "۸ دقیقه",
    publishDate: "۱۴۰۳/۰۱/۱۰",
    publishDateISO: "2024-03-30",
    modifiedDateISO: "2024-03-30",
    author: "نام برنامه‌نویس",
    tags: ["Livewire", "Laravel", "Frontend", "Tutorial"],
    wordCount: 650,
  },
  "database-optimization": {
    id: 3,
    title: "بهینه‌سازی عملکرد پایگاه داده در PHP",
    excerpt: "تکنیک‌های مختلف برای بهینه‌سازی کوئری‌ها و بهبود عملکرد پایگاه داده",
    content: `
# بهینه‌سازی عملکرد پایگاه داده در PHP

عملکرد پایگاه داده یکی از مهم‌ترین عوامل در سرعت اپلیکیشن‌های وب است. در این مقاله به بررسی تکنیک‌های مختلف بهینه‌سازی می‌پردازیم.

## ۱. استفاده از Index ها

Index ها سرعت جستجو را به طور چشمگیری افزایش می‌دهند:

\`\`\`sql
-- ایجاد index برای ستون email
CREATE INDEX idx_users_email ON users(email);

-- ایجاد composite index
CREATE INDEX idx_posts_user_status ON posts(user_id, status);
\`\`\`

## ۲. بهینه‌سازی کوئری‌ها

### استفاده از LIMIT
\`\`\`php
// بد - تمام رکوردها را می‌آورد
$users = User::where('active', 1)->get();

// خوب - فقط تعداد مورد نیاز
$users = User::where('active', 1)->limit(10)->get();
\`\`\`

### استفاده از Select
\`\`\`php
// بد - تمام ستون‌ها
$users = User::all();

// خوب - فقط ستون‌های مورد نیاز
$users = User::select('id', 'name', 'email')->get();
\`\`\`

## ۳. Caching

استفاده از cache برای کوئری‌های پرتکرار:

\`\`\`php
$users = Cache::remember('active_users', 3600, function () {
    return User::where('active', 1)->get();
});
\`\`\`

## ۴. Connection Pooling

استفاده از connection pooling برای مدیریت بهتر اتصالات:

\`\`\`php
// تنظیمات database.php
'mysql' => [
    'driver' => 'mysql',
    'host' => env('DB_HOST', '127.0.0.1'),
    'port' => env('DB_PORT', '3306'),
    'database' => env('DB_DATABASE', 'forge'),
    'username' => env('DB_USERNAME', 'forge'),
    'password' => env('DB_PASSWORD', ''),
    'charset' => 'utf8mb4',
    'collation' => 'utf8mb4_unicode_ci',
    'prefix' => '',
    'strict' => true,
    'engine' => null,
    'options' => [
        PDO::ATTR_PERSISTENT => true,
    ],
],
\`\`\`

## نتیجه‌گیری

بهینه‌سازی پایگاه داده نیازمند توجه به جزئیات و تست مداوم است. با اعمال این تکنیک‌ها می‌توانید عملکرد اپلیکیشن خود را به طور قابل توجهی بهبود دهید.
    `,
    image: "/placeholder.svg?height=400&width=800",
    category: "PHP",
    readTime: "۶ دقیقه",
    publishDate: "۱۴۰۳/۰۱/۰۵",
    publishDateISO: "2024-03-25",
    modifiedDateISO: "2024-03-25",
    author: "نام برنامه‌نویس",
    tags: ["PHP", "Database", "Performance", "Optimization"],
    wordCount: 920,
  },
  "tailwindcss-introduction": {
    id: 4,
    title: "معرفی TailwindCSS و مزایای آن",
    excerpt: "آشنایی با فریم‌ورک CSS محبوب TailwindCSS و دلایل استفاده از آن",
    content: `
# معرفی TailwindCSS و مزایای آن

TailwindCSS یک فریم‌ورک CSS utility-first است که رویکرد متفاوتی نسبت به فریم‌ورک‌های سنتی دارد.

## چرا TailwindCSS؟

### ۱. Utility-First Approach
به جای کلاس‌های از پیش تعریف شده، از utility class ها استفاده می‌کنید:

\`\`\`html
<!-- Bootstrap -->
<button class="btn btn-primary">کلیک کنید</button>

<!-- TailwindCSS -->
<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  کلیک کنید
</button>
\`\`\`

### ۲. Customization
TailwindCSS به راحتی قابل سفارشی‌سازی است:

\`\`\`javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'brand-blue': '#1992d4',
      }
    }
  }
}
\`\`\`

### ۳. Responsive Design
طراحی واکنش‌گرا به سادگی:

\`\`\`html
<div class="text-sm md:text-base lg:text-lg xl:text-xl">
  متن واکنش‌گرا
</div>
\`\`\`

## نصب و راه‌اندازی

### نصب از طریق npm
\`\`\`bash
npm install tailwindcss
npx tailwindcss init
\`\`\`

### تنظیم فایل CSS
\`\`\`css
@tailwind base;
@tailwind components;
@tailwind utilities;
\`\`\`

## مزایای TailwindCSS

1. **سرعت توسعه بالا**
2. **اندازه فایل کوچک** (با purging)
3. **سازگاری بالا**
4. **قابلیت سفارشی‌سازی**
5. **جامعه فعال**

## نتیجه‌گیری

TailwindCSS ابزار قدرتمندی برای توسعه سریع و مؤثر رابط کاربری است که ارزش یادگیری دارد.
    `,
    image: "/placeholder.svg?height=400&width=800",
    category: "CSS",
    readTime: "۴ دقیقه",
    publishDate: "۱۴۰۲/۱۲/۲۸",
    publishDateISO: "2024-03-18",
    modifiedDateISO: "2024-03-18",
    author: "نام برنامه‌نویس",
    tags: ["TailwindCSS", "CSS", "Frontend", "Framework"],
    wordCount: 580,
  },
  "web-security": {
    id: 5,
    title: "امنیت در اپلیکیشن‌های وب",
    excerpt: "نکات مهم امنیتی که هر توسعه‌دهنده وب باید در نظر بگیرد",
    content: `
# امنیت در اپلیکیشن‌های وب

امنیت یکی از مهم‌ترین جنبه‌های توسعه اپلیکیشن‌های وب است. در این مقاله به بررسی تهدیدات رایج و راه‌های مقابله با آن‌ها می‌پردازیم.

## ۱. SQL Injection

یکی از رایج‌ترین حملات به پایگاه داده:

### مثال آسیب‌پذیر:
\`\`\`php
// خطرناک - مستقیماً از ورودی کاربر استفاده می‌کند
$query = "SELECT * FROM users WHERE email = '" . $_POST['email'] . "'";
\`\`\`

### راه حل امن:
\`\`\`php
// امن - استفاده از prepared statements
$stmt = $pdo->prepare("SELECT * FROM users WHERE email = ?");
$stmt->execute([$_POST['email']]);
\`\`\`

## ۲. Cross-Site Scripting (XSS)

جلوگیری از اجرای کد JavaScript مخرب:

### مثال آسیب‌پذیر:
\`\`\`php
// خطرناک
echo "سلام " . $_GET['name'];
\`\`\`

### راه حل امن:
\`\`\`php
// امن
echo "سلام " . htmlspecialchars($_GET['name'], ENT_QUOTES, 'UTF-8');
\`\`\`

## ۳. Cross-Site Request Forgery (CSRF)

محافظت در برابر درخواست‌های جعلی:

\`\`\`php
// Laravel - استفاده از CSRF token
<form method="POST" action="/transfer">
    @csrf
    <input type="hidden" name="amount" value="1000">
    <input type="submit" value="انتقال">
</form>
\`\`\`

## ۴. Authentication و Authorization

### رمزگذاری پسورد:
\`\`\`php
// هش کردن پسورد
$hashedPassword = password_hash($password, PASSWORD_DEFAULT);

// تأیید پسورد
if (password_verify($inputPassword, $hashedPassword)) {
    // ورود موفق
}
\`\`\`

### استفاده از JWT:
\`\`\`php
use Firebase\JWT\JWT;

// ایجاد token
$payload = [
    'user_id' => $user->id,
    'exp' => time() + 3600 // یک ساعت
];
$jwt = JWT::encode($payload, $secretKey);
\`\`\`

## ۵. HTTPS و SSL/TLS

همیشه از HTTPS استفاده کنید:

\`\`\`apache
# .htaccess - اجبار به HTTPS
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
\`\`\`

## ۶. Input Validation

اعتبارسنجی تمام ورودی‌های کاربر:

\`\`\`php
function validateEmail($email) {
    return filter_var($email, FILTER_VALIDATE_EMAIL) !== false;
}

function sanitizeString($input) {
    return htmlspecialchars(trim($input), ENT_QUOTES, 'UTF-8');
}
\`\`\`

## ۷. Rate Limiting

محدود کردن تعداد درخواست‌ها:

\`\`\`php
// Laravel - استفاده از middleware
Route::middleware(['throttle:60,1'])->group(function () {
    Route::post('/api/login', 'AuthController@login');
});
\`\`\`

## ۸. Security Headers

تنظیم header های امنیتی:

\`\`\`php
// تنظیم security headers
header('X-Content-Type-Options: nosniff');
header('X-Frame-Options: DENY');
header('X-XSS-Protection: 1; mode=block');
header('Strict-Transport-Security: max-age=31536000; includeSubDomains');
\`\`\`

## نتیجه‌گیری

امنیت یک فرآیند مداوم است و نیازمند به‌روزرسانی مستمر و آگاهی از تهدیدات جدید می‌باشد. همیشه اصل "Defense in Depth" را رعایت کنید.
    `,
    image: "/placeholder.svg?height=400&width=800",
    category: "امنیت",
    readTime: "۱۰ دقیقه",
    publishDate: "۱۴۰۲/۱۲/۲۰",
    publishDateISO: "2024-03-10",
    modifiedDateISO: "2024-03-10",
    author: "نام برنامه‌نویس",
    tags: ["Security", "Web Security", "PHP", "Best Practices"],
    wordCount: 1250,
  },
  "future-of-web-development": {
    id: 6,
    title: "آینده توسعه وب: تکنولوژی‌های نوظهور",
    excerpt: "نگاهی به تکنولوژی‌های جدید و روندهای آینده در حوزه توسعه وب",
    content: `
# آینده توسعه وب: تکنولوژی‌های نوظهور

دنیای توسعه وب به سرعت در حال تغییر است. در این مقاله به بررسی تکنولوژی‌ها و روندهای آینده می‌پردازیم.

## ۱. WebAssembly (WASM)

WebAssembly امکان اجرای کد با عملکرد بالا در مرورگر را فراهم می‌کند:

\`\`\`javascript
// بارگذاری ماژول WebAssembly
WebAssembly.instantiateStreaming(fetch('module.wasm'))
  .then(result => {
    // استفاده از توابع WASM
    const add = result.instance.exports.add;
    console.log(add(1, 2)); // 3
  });
\`\`\`

## ۲. Progressive Web Apps (PWA)

PWA ها تجربه‌ای شبیه اپلیکیشن‌های موبایل ارائه می‌دهند:

\`\`\`javascript
// Service Worker برای PWA
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('v1').then(cache => {
      return cache.addAll([
        '/',
        '/styles.css',
        '/script.js'
      ]);
    })
  );
});
\`\`\`

## ۳. Serverless Architecture

معماری بدون سرور برای مقیاس‌پذیری بهتر:

\`\`\`javascript
// AWS Lambda function
exports.handler = async (event) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda!'),
    };
    return response;
};
\`\`\`

## ۴. JAMstack

JavaScript, APIs, and Markup:

\`\`\`javascript
// Static Site Generation با Next.js
export async function getStaticProps() {
  const data = await fetch('https://api.example.com/data');
  return {
    props: {
      data: await data.json()
    }
  };
}
\`\`\`

## ۵. AI و Machine Learning

ادغام هوش مصنوعی در وب:

\`\`\`javascript
// TensorFlow.js
import * as tf from '@tensorflow/tfjs';

const model = await tf.loadLayersModel('/model.json');
const prediction = model.predict(inputData);
\`\`\`

## ۶. Web3 و Blockchain

وب غیرمتمرکز:

\`\`\`javascript
// Web3.js
const Web3 = require('web3');
const web3 = new Web3('https://mainnet.infura.io/v3/YOUR-PROJECT-ID');

const balance = await web3.eth.getBalance(address);
\`\`\`

## ۷. Edge Computing

پردازش در لبه شبکه:

\`\`\`javascript
// Cloudflare Workers
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  return new Response('Hello from the edge!');
}
\`\`\`

## ۸. Micro Frontends

تقسیم frontend به بخش‌های کوچک:

\`\`\`javascript
// Module Federation
const ModuleFederationPlugin = require('@module-federation/webpack');

module.exports = {
  plugins: [
    new ModuleFederationPlugin({
      name: 'shell',
      remotes: {
        mfe1: 'mfe1@http://localhost:3001/remoteEntry.js',
      },
    }),
  ],
};
\`\`\`

## روندهای آینده

1. **No-Code/Low-Code Platforms**
2. **Voice User Interfaces**
3. **Augmented Reality (AR) در وب**
4. **5G و تأثیر آن بر وب**
5. **Quantum Computing**

## نتیجه‌گیری

آینده توسعه وب پر از فرصت‌های هیجان‌انگیز است. مهم این است که با تغییرات همراه شویم و مهارت‌های خود را به‌روزرسانی کنیم.
    `,
    image: "/placeholder.svg?height=400&width=800",
    category: "تکنولوژی",
    readTime: "۷ دقیقه",
    publishDate: "۱۴۰۲/۱۲/۱۵",
    publishDateISO: "2024-03-05",
    modifiedDateISO: "2024-03-05",
    author: "نام برنامه‌نویس",
    tags: ["Future", "Technology", "Web Development", "Innovation"],
    wordCount: 980,
  },
}

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug as keyof typeof blogPosts]

  if (!post) {
    return {
      title: "مقاله یافت نشد",
    }
  }

  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.tags,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishDateISO,
      modifiedTime: post.modifiedDateISO,
      authors: [post.author],
      images: [
        {
          url: post.image,
          width: 800,
          height: 400,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
    alternates: {
      canonical: `/blog/${params.slug}`,
    },
  }
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug as keyof typeof blogPosts]

  if (!post) {
    notFound()
  }

  // مقالات مرتبط (نمونه)
  const relatedPosts = Object.values(blogPosts)
    .filter((p) => p.id !== post.id)
    .slice(0, 3)

  // Structured Data for Article
  const articleStructuredData = {
    title: post.title,
    description: post.excerpt,
    image: `${process.env.NEXT_PUBLIC_SITE_URL || "https://example.com"}${post.image}`,
    author: {
      name: post.author,
      url: process.env.NEXT_PUBLIC_SITE_URL || "https://example.com",
    },
    publisher: {
      name: "وب‌سایت شخصی برنامه‌نویس",
      logo: `${process.env.NEXT_PUBLIC_SITE_URL || "https://example.com"}/logo.png`,
    },
    datePublished: post.publishDateISO,
    dateModified: post.modifiedDateISO,
    url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://example.com"}/blog/${params.slug}`,
    keywords: post.tags,
    category: post.category,
    wordCount: post.wordCount,
    readTime: post.readTime,
  }

  // Breadcrumb Structured Data
  const breadcrumbData = {
    items: [
      { name: "خانه", url: process.env.NEXT_PUBLIC_SITE_URL || "https://example.com" },
      { name: "بلاگ", url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://example.com"}/blog` },
      { name: post.title, url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://example.com"}/blog/${params.slug}` },
    ],
  }

  return (
    <>
      <StructuredData type="article" data={articleStructuredData} />
      <StructuredData type="breadcrumb" data={breadcrumbData} />

      <div className="min-h-screen py-4 md:py-8">
        <div className="container max-w-4xl">
          {/* Breadcrumb */}
          <nav className="mb-4 md:mb-8 animate-on-scroll" aria-label="مسیر صفحه">
            <ol className="flex items-center gap-2 text-sm text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  خانه
                </Link>
              </li>
              <li>
                <ArrowLeft className="h-3 w-3" />
              </li>
              <li>
                <Link href="/blog" className="hover:text-primary transition-colors">
                  بلاگ
                </Link>
              </li>
              <li>
                <ArrowLeft className="h-3 w-3" />
              </li>
              <li>
                <span className="text-foreground" aria-current="page">
                  {post.title}
                </span>
              </li>
            </ol>
          </nav>

          {/* Article Header */}
          <article className="animate-on-scroll animate-delay-200">
            <header className="mb-6 md:mb-8">
              <div className="mb-4">
                <Badge variant="secondary" className="mb-3">
                  {post.category}
                </Badge>
              </div>

              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">{post.title}</h1>

              <div className="flex flex-col sm:flex-row sm:items-center gap-3 md:gap-6 text-sm text-muted-foreground mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <time dateTime={post.publishDateISO}>{post.publishDate}</time>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>نویسنده: {post.author}</span>
                </div>
              </div>

              {/* Social Actions */}
              <div className="flex items-center gap-3 mb-6">
                <Button variant="outline" size="sm" className="gap-2">
                  <Heart className="h-4 w-4" />
                  <span className="hidden sm:inline">پسندیدن</span>
                </Button>
                <Button variant="outline" size="sm" className="gap-2">
                  <Share2 className="h-4 w-4" />
                  <span className="hidden sm:inline">اشتراک‌گذاری</span>
                </Button>
                <Button variant="outline" size="sm" className="gap-2">
                  <MessageCircle className="h-4 w-4" />
                  <span className="hidden sm:inline">نظرات</span>
                </Button>
              </div>
            </header>

            {/* Featured Image */}
            <div className="relative h-48 md:h-64 lg:h-80 w-full mb-6 md:mb-8 rounded-lg overflow-hidden">
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
              />
            </div>

            {/* Article Content */}
            <div className="article-content">
              <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, "<br>") }} />
            </div>

            {/* Tags */}
            <div className="mt-8 pt-6 border-t">
              <h3 className="text-lg font-semibold mb-3">برچسب‌ها:</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </article>

          <Separator className="my-8 md:my-12" />

          {/* Related Posts */}
          <section className="animate-on-scroll">
            <h2 className="text-xl md:text-2xl font-bold mb-6">مقالات مرتبط</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              {relatedPosts.map((relatedPost) => (
                <Card key={relatedPost.id} className="card-hover">
                  <div className="relative h-32 md:h-40 w-full">
                    <Image
                      src={relatedPost.image || "/placeholder.svg"}
                      alt={relatedPost.title}
                      fill
                      className="object-cover rounded-t-lg"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <CardHeader className="p-3 md:p-4">
                    <CardTitle className="text-sm md:text-base line-clamp-2">{relatedPost.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-3 md:p-4 pt-0">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                      <Calendar className="h-3 w-3" />
                      <time dateTime={relatedPost.publishDateISO}>{relatedPost.publishDate}</time>
                    </div>
                    <Button asChild variant="outline" size="sm" className="w-full">
                      <Link
                        href={`/blog/${Object.keys(blogPosts).find((key) => blogPosts[key as keyof typeof blogPosts].id === relatedPost.id)}`}
                      >
                        مطالعه
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Navigation */}
          <div className="mt-8 md:mt-12 flex flex-col sm:flex-row justify-between gap-4">
            <Button asChild variant="outline" className="gap-2">
              <Link href="/blog">
                <ArrowRight className="h-4 w-4" />
                بازگشت به بلاگ
              </Link>
            </Button>
            <Button asChild className="gap-2">
              <Link href="#contact">
                نظر خود را بگذارید
                <MessageCircle className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
