import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowUpRight } from 'lucide-react'
import { PlaceHolderImages } from '@/lib/placeholder-images'
import { Card, CardContent } from '../ui/card'

const projects = [
  {
    title: "Coffee Pro",
    subtitle: "Coffee Fermentation Monitoring System",
    description: "Proyecto académico full-stack enfocado en visualización y experiencia de usuario para monitoreo en tiempo real.",
    technologies: ["React", "Python", "Data Viz", "Responsive Design", "UX Architecture"],
    image: PlaceHolderImages.find(img => img.id === 'project-coffee-pro')?.imageUrl || '',
    imageHint: "coffee data",
    caseStudyUrl: "https://figma.com" 
  }
]

export function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-secondary uppercase tracking-[0.2em] mb-4">Portfolio</h2>
            <h3 className="text-4xl md:text-5xl font-headline font-bold">Featured Projects</h3>
          </div>
        </div>

        <Card className="glass-card overflow-hidden group hover:border-primary/50 transition-colors duration-500 max-w-7xl mx-auto">
          <CardContent className="p-0">
            <div className="p-0">
              <iframe
                title="Figma Embed Portfolio"
                src="https://embed.figma.com/slides/fSamy5UHw0ZLp1eJJ4uG97/Portfolio?node-id=7-1350&embed-host=share"
                style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}
                className="w-full h-[450px] md:h-[600px]"
                allowFullScreen
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}