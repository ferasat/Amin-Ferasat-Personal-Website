import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "فروشگاه آنلاین",
      description: "یک فروشگاه آنلاین کامل با سیستم پرداخت، مدیریت محصولات و پنل کاربری",
      image: "/placeholder.svg?height=300&width=600",
      technologies: ["Laravel", "Livewire", "TailwindCSS", "MySQL"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      id: 2,
      title: "سیستم مدیریت محتوا",
      description: "یک CMS اختصاصی با قابلیت‌های پیشرفته برای مدیریت محتوا و کاربران",
      image: "/placeholder.svg?height=300&width=600",
      technologies: ["Laravel", "Vue.js", "Bootstrap", "PostgreSQL"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      id: 3,
      title: "اپلیکیشن مدیریت پروژه",
      description: "سیستم مدیریت پروژه با قابلیت تعریف وظایف، زمان‌بندی و گزارش‌گیری",
      image: "/placeholder.svg?height=300&width=600",
      technologies: ["Laravel", "React", "TailwindCSS", "MySQL"],
      demoUrl: "#",
      githubUrl: "#",
    },
  ]

  return (
    <section id="projects" className="bg-muted/30">
      <div className="container">
        <h2 className="section-title animate-on-scroll">نمونه‌کارهای من</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className={`overflow-hidden flex flex-col card-hover animate-on-scroll animate-delay-${((index % 3) + 1) * 100}`}
            >
              <div className="relative h-48 w-full">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-2 mt-auto">
                <Button asChild variant="outline" size="sm">
                  <Link href={project.demoUrl} target="_blank">
                    <ExternalLink className="h-4 w-4 ml-2" />
                    نمایش
                  </Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href={project.githubUrl} target="_blank">
                    <Github className="h-4 w-4 ml-2" />
                    گیت‌هاب
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
