import React from 'react'
import { GraduationCap, Award, MapPin } from 'lucide-react'

export function Education() {
  return (
    <section id="education" className="section-padding bg-black/40">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap className="text-secondary h-8 w-8" />
            <h2 className="text-sm font-bold text-secondary uppercase tracking-[0.2em]">Education</h2>
          </div>
          
          <div className="glass-card p-10 rounded-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32 group-hover:bg-primary/10 transition-colors duration-500" />
            
            <div className="relative z-10 flex flex-col md:flex-row justify-between gap-10">
              <div className="flex-1">
                <h3 className="text-3xl md:text-4xl font-headline font-bold mb-4">Software Engineering</h3>
                <h4 className="text-xl text-foreground/90 font-semibold mb-6">Universidad Popular Autónoma del Estado de Puebla (UPAEP)</h4>
                
                <div className="flex flex-wrap gap-6">
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2 text-primary" />
                    Puebla, México
                  </div>
                </div>
              </div>
              
              <div className="md:text-right">
                <div className="text-4xl font-headline font-bold text-gradient mb-2">2020 – 2025</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}