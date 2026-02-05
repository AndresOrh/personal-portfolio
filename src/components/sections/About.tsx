
import React from 'react'
import Image from 'next/image'
import { CheckCircle2 } from 'lucide-react'
import { PlaceHolderImages } from '@/lib/placeholder-images'

export function About() {
  const profileImage = PlaceHolderImages.find(img => img.id === 'hero-portrait')?.imageUrl || '/resources/IMG_4507.JPG'

  return (
    <section id="about" className="section-padding bg-black/20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="flex justify-center lg:justify-center">
            <div className="relative group">
              {/* Decorative background blur */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/30 to-secondary/30 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-70" />
              
              {/* Circular profile image container - smaller size */}
              <div className="relative h-32 w-32 md:h-48 md:w-48 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl bg-muted">
                <Image 
                  src={profileImage}
                  alt="Andrés Orihuela"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-5xl font-headline font-bold mb-3">
              About <span className="text-gradient">Me</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Front-End Developer and UX/UI Designer with experience building responsive and accessible web interfaces using React, Next.js, TypeScript, HTML, CSS, and JavaScript.
            </p>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              I collaborate with multidisciplinary teams to create user-centered interfaces, always with a strong focus on accessibility and performance.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                'User-Centered Design',
                'Web Accessibility (WCAG)',
                'Responsive & Mobile-First',
                'Design Systems Expert',
                'Prototyping & Flow Analysis',
                'Agile Collaboration'
              ].map((item) => (
                <li key={item} className="flex items-center text-foreground/80 font-medium">
                  <CheckCircle2 className="text-secondary mr-3 h-5 w-5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
