import React from 'react'
import { Mail, Phone, Linkedin, Github, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export function Contact() {
  return (
    <footer id="contact" className="pt-24 pb-12 bg-black border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <div>
            <h2 className="text-4xl md:text-6xl font-headline font-bold mb-8 leading-tight">
              Ready to create something <span className="text-gradient">remarkable</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-md">
              I am available for new projects and collaborations. Let's talk about how I can bring value to your team.
            </p>
            
            <div className="space-y-6">
              <a 
                href="mailto:andres211198@hotmail.com" 
                className="flex items-center text-xl font-medium hover:text-secondary transition-colors group"
              >
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center mr-6 group-hover:bg-secondary group-hover:border-secondary transition-all">
                  <Mail className="h-5 w-5" />
                </div>
                andres211198@hotmail.com
              </a>
            </div>
          </div>

          <div className="lg:pl-16 flex flex-col justify-center">
            <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-8">Follow Me</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { name: 'LinkedIn', icon: Linkedin, href: 'www.linkedin.com/in/andrés-orihuela-otero-883b541a0' },
              ].map((social) => (
                <Link 
                  key={social.name} 
                  href={social.href} 
                  target="_blank"
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between hover:bg-white/10 transition-all group"
                >
                  <div className="flex items-center">
                    <social.icon className="h-6 w-6 mr-4 text-muted-foreground group-hover:text-white transition-colors" />
                    <span className="font-bold">{social.name}</span>
                  </div>
                  <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-xl font-headline font-bold text-gradient">
            AO.
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Andrés Orihuela Otero. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}