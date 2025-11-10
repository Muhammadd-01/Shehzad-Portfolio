"use client"

import { Palette, Users, Lightbulb } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"

export function AboutSection() {
  const skills = [
    { icon: Palette, label: "Visual Design", description: "Adobe Creative Suite, Figma, UI/UX Design, Brand Design" },
    {
      icon: Users,
      label: "Social Media Marketing",
      description: "Content Strategy, Community Management, Growth Hacking",
    },
    {
      icon: Lightbulb,
      label: "Creative Storytelling",
      description: "Campaign Development, Visual Narratives, Brand Strategy",
    },
  ]

  return (
    <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <ScrollReveal animation="fade-in-up">
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground text-balance">About Me</h2>
            </ScrollReveal>

            <ScrollReveal animation="fade-in-up" delay={0.1}>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                CEO of{" "}
                <a
                  href="https://growhubdigital.online/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-foreground inline-flex items-center hover:text-primary transition-colors"
                >
                  GrowHub Digital
                  <img
                    src="/growhub-icon.png"
                    alt="GrowHub Digital"
                    className="w-7 h-7 object-contain ml-2"
                  />
                </a>{" "}
                & Social Media Marketer & Graphic Designer at{" "}
                <a
                  href="https://nexovate-digital.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-foreground inline-flex items-center hover:text-primary transition-colors"
                >
                  NexoVate Digital
                  <img
                    src="/website-icon.png"
                    alt="NexoVate Digital"
                    className="w-7 h-7 object-contain ml-2"
                  />
                </a>
                — passionate about creating impactful visual content that drives engagement and brand growth.
              </p>
            </ScrollReveal>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon
              return (
                <ScrollReveal key={index} animation="fade-in-up" delay={index * 0.1}>
                  <div className="p-6 bg-background border border-border rounded-lg hover:border-primary/50 transition-colors">
                    <Icon className="w-8 h-8 text-primary mb-4" />
                    <h3 className="text-xl font-semibold text-foreground mb-2">{skill.label}</h3>
                    <p className="text-muted-foreground">{skill.description}</p>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>

          {/* About Content */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <ScrollReveal animation="slide-in-left">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground">My Journey</h3>
                <p className="text-muted-foreground leading-relaxed">
                  With 6+ years of experience in graphic design and social media marketing, I've helped dozens of brands
                  establish their visual identity and grow their online presence.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I specialize in creating visually compelling content that tells authentic brand stories and engages
                  audiences across all social platforms.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="slide-in-right">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 bg-background border border-border rounded-lg text-center">
                  <div className="text-3xl font-bold text-primary mb-2">100+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div className="p-6 bg-background border border-border rounded-lg text-center">
                  <div className="text-3xl font-bold text-primary mb-2">6+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="p-6 bg-background border border-border rounded-lg text-center">
                  <div className="text-3xl font-bold text-primary mb-2">80+</div>
                  <div className="text-sm text-muted-foreground">Happy Brands</div>
                </div>
                <div className="p-6 bg-background border border-border rounded-lg text-center">
                  <div className="text-3xl font-bold text-primary mb-2">10M+</div>
                  <div className="text-sm text-muted-foreground">Social Reach</div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
