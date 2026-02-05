import React from 'react'
import { Button } from '@/components/ui/button'
import { ChevronRight, ArrowDown } from 'lucide-react'
import Link from 'next/link'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background elements */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/10 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-6 animate-fade-in-up">
            <span className="flex h-2 w-2 rounded-full bg-secondary mr-2 animate-pulse" />
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Available for new opportunities</span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-headline font-bold mb-8 animate-fade-in-up [animation-delay:200ms]">
            Andrés <span className="text-gradient">Orihuela</span> Otero
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up [animation-delay:400ms]">
            <span className="text-foreground font-semibold">Front-End Developer & UX/UI Designer.</span> Crafting high-performance, accessible, and user-centered digital experiences with precision and passion.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up [animation-delay:600ms]">
            <Button asChild size="lg" className="rounded-full px-8 h-14 text-base bg-primary hover:bg-primary/90">
              <Link href="#projects">
                See projects <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8 h-14 text-base border-white/10 hover:bg-white/5">
              <Link href="#contact">
                Contact
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <ArrowDown className="text-muted-foreground h-6 w-6" />
      </div>
    </section>
  )
}