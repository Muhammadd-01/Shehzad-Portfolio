"use client"

import Link from "next/link"
import { ArrowRight, FileText } from "lucide-react"

export function HeroSection() {
  const introText =
    "I'm a graphic designer and social media marketing specialist dedicated to helping brands tell their story through compelling visual content."

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
      <div className="max-w-4xl mx-auto w-full">
        <div className="space-y-6 mb-12">
          <div className="text-primary text-sm font-semibold tracking-wider uppercase">
            Graphic Design & Social Media Marketing
          </div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight text-balance">
            Creating Visual Stories That Matter
          </h2>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed text-pretty">{introText}</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="#work"
            className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all duration-300 font-semibold shadow-soft hover:shadow-soft-lg hover:scale-105"
          >
            View My Work
            <ArrowRight className="ml-2" size={20} />
          </Link>
          <a
            href="/resume.pdf"
            className="inline-flex items-center justify-center px-8 py-3 border-2 border-primary text-primary rounded-full hover:bg-primary/5 transition-all duration-300 font-semibold shadow-soft hover:shadow-soft-lg hover:scale-105"
          >
            <FileText className="mr-2" size={20} />
            View Resume
          </a>
          <Link
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3 bg-secondary/30 text-foreground rounded-full hover:bg-secondary/50 transition-all duration-300 font-semibold shadow-soft hover:shadow-soft-lg hover:scale-105"
          >
            Get in Touch
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-20 flex justify-center">
          <div className="animate-bounce">
            <svg className="w-6 h-6 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
