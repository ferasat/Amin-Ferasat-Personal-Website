import { Card, CardContent } from "@/components/ui/card"
import { Briefcase, GraduationCap, Heart } from "lucide-react"
import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="bg-muted/30">
      <div className="container">
        <h2 className="section-title animate-on-scroll">درباره من</h2>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1 animate-on-scroll animate-delay-200">
            <h3 className="text-2xl font-bold mb-4">سلام، من [نام شما] هستم</h3>
            <p className="text-muted-foreground mb-4">
              من یک برنامه‌نویس بک‌اند با بیش از [X] سال تجربه در توسعه وب هستم. تخصص اصلی من در PHP و فریم‌ورک Laravel است
              و به ایجاد راهکارهای نرم‌افزاری مقیاس‌پذیر و کارآمد علاقه‌مندم.
            </p>
            <p className="text-muted-foreground mb-6">
              من به کدنویسی تمیز، معماری نرم‌افزار اصولی و بهینه‌سازی عملکرد اهمیت زیادی می‌دهم. همواره در حال یادگیری
              تکنولوژی‌های جدید هستم تا بتوانم راهکارهای بهتری برای مشتریانم ارائه دهم.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Card>
                <CardContent className="p-4 flex flex-col items-center text-center">
                  <Briefcase className="h-8 w-8 text-primary mb-2" />
                  <h4 className="font-bold">تجربه کاری</h4>
                  <p className="text-muted-foreground">[X] سال</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4 flex flex-col items-center text-center">
                  <GraduationCap className="h-8 w-8 text-primary mb-2" />
                  <h4 className="font-bold">تحصیلات</h4>
                  <p className="text-muted-foreground">[مدرک تحصیلی]</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4 flex flex-col items-center text-center">
                  <Heart className="h-8 w-8 text-primary mb-2" />
                  <h4 className="font-bold">علاقه‌مندی‌ها</h4>
                  <p className="text-muted-foreground">[علاقه‌مندی‌ها]</p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center animate-on-scroll animate-delay-300">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary">
              <Image
                src="/placeholder.svg?height=320&width=320"
                alt="تصویر پروفایل"
                width={320}
                height={320}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
