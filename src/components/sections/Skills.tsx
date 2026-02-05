import React from 'react'
import { Code2, Palette, Globe } from 'lucide-react'

const skillGroups = [
  {
    title: "Front-End Development",
    icon: Code2,
    skills: ["TypeScript", "JavaScript ES6+", "React", "Next.js", "HTML5", "CSS3", "Tailwind", "REST APIs", "State management"]
  },
  {
    title: "Design and UX",
    icon: Palette,
    skills: ["Figma", "Wireframes", "Prototyping", "User flows", "Usability testing", "A/B Testing", "WCAG Accesibility", "User-centered Design"]
  },
  {
    title: "Other Technologies",
    icon: Globe,
    skills: ["Kotlin", "Java", "Flutter", "Python", "C++", "MySQL", "Oracle SQL", "Git", "Android Studio", "VS Code"]
  }
]

export function Skills() {
  return (
    <section id="skills" className="section-padding bg-black/20">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-sm font-bold text-secondary uppercase tracking-[0.2em] mb-4">Abilities</h2>
          <h3 className="text-4xl md:text-5xl font-headline font-bold mb-6">Technical Skills</h3>
          <p className="text-muted-foreground text-lg">
            A comprehensive overview of my technical stack and design expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillGroups.map((group, index) => (
            <div key={index} className="glass-card p-8 rounded-2xl hover:border-primary/50 transition-all duration-500 group">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <group.icon className="text-primary h-7 w-7" />
              </div>
              <h4 className="text-xl font-bold mb-6">{group.title}</h4>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-sm font-medium hover:bg-primary/20 hover:border-primary/30 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}