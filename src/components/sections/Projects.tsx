import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowUpRight } from 'lucide-react'
import { PlaceHolderImages } from '@/lib/placeholder-images'

const projects = [
  {
    title: "Coffee Pro",
    subtitle: "Coffee Fermentation Monitoring System",
    description: "Proyecto académico full-stack enfocado en visualización y experiencia de usuario para monitoreo en tiempo real.",
    technologies: ["React", "Python", "Data Viz", "Responsive Design", "UX Architecture"],
    image: PlaceHolderImages.find(img => img.id === 'project-coffee-pro')?.imageUrl || '',
    imageHint: "coffee data",
    caseStudyUrl: "https://figma.com" // Placeholder link
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
          <p className="text-muted-foreground text-lg max-w-sm">
            A selection of projects that showcase my ability to bridge the gap between design and technical implementation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div key={index} className="group relative">
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10">
                <Image 
                  src={project.image} 
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  data-ai-hint={project.imageHint}
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <Badge className="absolute top-6 left-6 bg-secondary text-white border-none px-4 py-1.5 text-xs font-bold uppercase tracking-wider">
                    UX Case Study
                  </Badge>
                  <Button asChild size="lg" className="rounded-full bg-white text-black hover:bg-white/90 font-bold px-8">
                    <a href={project.caseStudyUrl} target="_blank" rel="noopener noreferrer">
                      View Case Study <ArrowUpRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>

              <div className="mt-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="text-[10px] font-bold uppercase tracking-widest text-secondary px-2 py-1 bg-secondary/10 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                <h4 className="text-2xl font-bold mb-2 group-hover:text-secondary transition-colors">{project.title}</h4>
                <p className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-tighter">{project.subtitle}</p>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}