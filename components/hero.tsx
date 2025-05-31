import { Button } from "@/components/ui/button"
import { Code } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <section id="home" className="py-20 md:py-32 bg-gradient-to-b from-muted/50 to-background overflow-hidden">
      <div className="container flex flex-col items-center text-center">
        <div className="flex items-center justify-center mb-6 p-4 rounded-full bg-muted animate-float animate-pulse-glow">
          <Code className="h-10 w-10 text-primary" />
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 animate-fadeInUp">
          <span className="text-primary">برنامه‌نویس</span> بک‌اند و توسعه‌دهنده وب
        </h1>
        <p className="max-w-[700px] text-lg md:text-xl text-muted-foreground mb-8 animate-fadeInUp animate-delay-200">
          با تخصص در PHP و Laravel، راهکارهای نرم‌افزاری مقیاس‌پذیر و کارآمد برای کسب‌وکارها ارائه می‌دهم.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 animate-fadeInUp animate-delay-300">
          <Button asChild size="lg" className="btn-animate">
            <Link href="#contact">تماس با من</Link>
          </Button>
          <Button variant="outline" size="lg" asChild className="btn-animate">
            <Link href="#projects">مشاهده نمونه‌کارها</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
