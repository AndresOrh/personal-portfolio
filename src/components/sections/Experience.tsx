import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Briefcase, Calendar } from 'lucide-react'

const experiences = [
  {
    title: 'Full-Stack Software Engineer Jr.',
    company: 'Kigo',
    period: 'June 2024 – Present',
    responsibilities: [
      'UI component design and development for web and mobile.',
      'Development of an Android access control application with more than 400,000 monthly active users.',
      'Development of the Kigo School Access cafeteria module.',
      'UX/UI prototyping using Figma and Illustrator.',
      'Participation in user interviews, design reviews, and A/B testing.',
      'Collaboration with cross-functional teams and design systems.'
    ],
    isCurrent: true
  },
  {
    title: 'IT Intern',
    company: 'Kigo',
    period: 'January 2024 – June 2024',
    responsibilities: [
      'Debugging and application optimization.',
      'QA testing and validation of staging and production environments.',
      'Market and competitor research.',
      'Work within Scrum agile methodologies.'
    ]
  },
  {
    title: 'Logistics Director',
    company: 'TEDx UPAEP',
    period: '2022 – 2023',
    responsibilities: [
      'Logistics management for a TEDx event with more than 130 attendees.',
      'Leadership of a team of more than 30 volunteers.',
      'Design of operational workflows and documentation.',
      'Data analysis to improve campaigns and engagement.'
    ]
  }
]

export function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-secondary uppercase tracking-[0.2em] mb-4">Experience</h2>
            <h3 className="text-4xl md:text-5xl font-headline font-bold">Work History</h3>
          </div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="glass-card overflow-hidden group hover:border-primary/50 transition-colors duration-500">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 lg:grid-cols-12">
                  <div className="lg:col-span-4 p-8 bg-white/5">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-primary/20 text-primary">
                        <Briefcase className="h-5 w-5" />
                      </div>
                      <Badge variant={exp.isCurrent ? "default" : "secondary"} className="rounded-full">
                        {exp.period}
                      </Badge>
                    </div>
                    <h4 className="text-2xl font-bold mb-2">{exp.title}</h4>
                    <p className="text-lg text-secondary font-semibold">{exp.company}</p>
                  </div>
                  <div className="lg:col-span-8 p-8">
                    <ul className="space-y-4">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 mr-4 shrink-0" />
                          <span className="text-muted-foreground leading-relaxed">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}