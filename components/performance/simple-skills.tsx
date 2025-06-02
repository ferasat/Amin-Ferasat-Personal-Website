import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function SimpleSkills() {
  const masterSkills = [
    { name: "PHP", level: 95 },
    { name: "Laravel", level: 90 },
    { name: "Livewire", level: 85 },
    { name: "Bootstrap", level: 90 },
    { name: "TailwindCSS", level: 90 },
  ]

  const intermediateSkills = [
    { name: "React", level: 70 },
    { name: "Vue.js", level: 65 },
  ]

  return (
    <section id="skills" className="py-8 md:py-16">
      <div className="container px-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8 text-center">مهارت‌های من</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-6 text-primary">مهارت‌های سطح استادکار</h3>
              <div className="space-y-6">
                {masterSkills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-6 text-primary">مهارت‌های سطح متوسط</h3>
              <div className="space-y-6">
                {intermediateSkills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
