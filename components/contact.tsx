import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"

export default function Contact() {
  return (
    <section id="contact" className="bg-muted/30">
      <div className="container">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="section-title">راه‌های ارتباط با من</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            از طریق راه‌های زیر می‌توانید با من در ارتباط باشید. همیشه آماده همکاری در پروژه‌های جالب و چالش‌برانگیز هستم.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="text-center card-hover animate-on-scroll animate-delay-100">
            <CardHeader className="pb-2">
              <div className="mx-auto mb-4 p-3 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Mail className="h-8 w-8 text-primary" />
              </div>
              <CardTitle>ایمیل</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">example@example.com</p>
              <Link href="mailto:example@example.com" className="text-primary hover:underline transition-colors">
                ارسال ایمیل
              </Link>
            </CardContent>
          </Card>

          <Card className="text-center card-hover animate-on-scroll animate-delay-200">
            <CardHeader className="pb-2">
              <div className="mx-auto mb-4 p-3 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Phone className="h-8 w-8 text-primary" />
              </div>
              <CardTitle>تلفن</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">۰۹۱۲۳۴۵۶۷۸۹</p>
              <Link href="tel:+989123456789" className="text-primary hover:underline transition-colors">
                تماس تلفنی
              </Link>
            </CardContent>
          </Card>

          <Card className="text-center card-hover animate-on-scroll animate-delay-300">
            <CardHeader className="pb-2">
              <div className="mx-auto mb-4 p-3 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Github className="h-8 w-8 text-primary" />
              </div>
              <CardTitle>گیت‌هاب</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">@username</p>
              <Link
                href="https://github.com/username"
                target="_blank"
                className="text-primary hover:underline transition-colors"
              >
                مشاهده پروفایل
              </Link>
            </CardContent>
          </Card>

          <Card className="text-center card-hover animate-on-scroll animate-delay-400">
            <CardHeader className="pb-2">
              <div className="mx-auto mb-4 p-3 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Linkedin className="h-8 w-8 text-primary" />
              </div>
              <CardTitle>لینکدین</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">@username</p>
              <Link
                href="https://linkedin.com/in/username"
                target="_blank"
                className="text-primary hover:underline transition-colors"
              >
                اتصال در لینکدین
              </Link>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center animate-on-scroll animate-delay-500">
          <Card className="max-w-md mx-auto card-hover">
            <CardHeader>
              <div className="mx-auto mb-4 p-3 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <CardTitle>آدرس</CardTitle>
              <CardDescription>تهران، ایران</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  )
}
