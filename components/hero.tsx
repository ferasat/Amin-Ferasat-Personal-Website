import { Button } from "@/components/ui/button"
import { Code } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <section id="home" className="py-12 md:py-20 lg:py-32 bg-gradient-to-b from-muted/50 to-background overflow-hidden">
      <div className="container flex flex-col items-center text-center px-4">
        <div className="flex items-center justify-center mb-4 md:mb-6 p-3 md:p-4 rounded-full bg-muted animate-float animate-pulse-glow">
          <Code className="h-8 w-8 md:h-10 md:w-10 text-primary" />
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-extrabold tracking-tight mb-3 md:mb-4 animate-fadeInUp">
          <span className="text-primary">برنامه‌نویس</span> بک‌اند و توسعه‌دهنده وب
        </h1>
        <p className="max-w-[90%] md:max-w-[700px] text-base md:text-lg lg:text-xl text-muted-foreground mb-6 md:mb-8 animate-fadeInUp animate-delay-200 leading-relaxed">
          با تخصص در PHP و Laravel، راهکارهای نرم‌افزاری مقیاس‌پذیر و کارآمد برای کسب‌وکارها ارائه می‌دهم.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full sm:w-auto animate-fadeInUp animate-delay-300">
          <Button asChild size="lg" className="btn-animate w-full sm:w-auto">
            <Link href="#contact">تماس با من</Link>
          </Button>
          <Button variant="outline" size="lg" asChild className="btn-animate w-full sm:w-auto">
            <Link href="#projects">مشاهده نمونه‌کارها</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
