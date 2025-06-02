import { Button } from "@/components/ui/button"
import { Code } from "lucide-react"
import Link from "next/link"

export default function MobileOptimizedHero() {
  return (
    <section id="home" className="py-8 md:py-16 bg-gradient-to-b from-muted/50 to-background">
      <div className="container flex flex-col items-center text-center px-4">
        <div className="flex items-center justify-center mb-3 p-2 rounded-full bg-muted">
          <Code className="h-6 w-6 text-primary" />
        </div>
        <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight mb-2">
          <span className="text-primary">برنامه‌نویس</span> بک‌اند
        </h1>
        <p className="text-sm md:text-base text-muted-foreground mb-4 leading-relaxed max-w-[90%]">
          متخصص در PHP و Laravel، با راهکارهای مقیاس‌پذیر و کارآمد
        </p>
        <div className="flex flex-col w-full gap-2">
          <Button asChild size="sm" className="w-full">
            <Link href="#contact">تماس با من</Link>
          </Button>
          <Button variant="outline" size="sm" asChild className="w-full">
            <Link href="#projects">نمونه‌کارها</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
