"use client"

import { Palette, Share2, Camera, TrendingUp } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"

export function ServicesSection() {
  const services = [
    {
      icon: Palette,
      title: "Brand Identity Design",
      description:
        "Logo design, brand guidelines, and visual identity systems that make your brand stand out and resonate with your audience.",
    },
    {
      icon: Share2,
      title: "Social Media Content",
      description:
        "Engaging visual content, carousel designs, and strategic posts optimized for Instagram, TikTok, LinkedIn, and Facebook.",
    },
    {
      icon: Camera,
      title: "Graphic Design",
      description:
        "Marketing collateral, infographics, presentations, and print-ready designs that communicate your message effectively.",
    },
    {
      icon: TrendingUp,
      title: "Social Media Strategy",
      description:
        "Content calendars, campaign planning, and analytics-driven strategies to grow your brand presence and engagement.",
    },
  ]

  return (
    <section id="services" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <ScrollReveal animation="fade-in-up">
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground text-balance">Services</h2>
            </ScrollReveal>
            <ScrollReveal animation="fade-in-up" delay={0.1}>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Comprehensive design and marketing services to elevate your brand and connect with your audience.
              </p>
            </ScrollReveal>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <ScrollReveal key={index} animation="fade-in-up" delay={index * 0.1}>
                  <div className="p-8 bg-background border border-border rounded-lg hover:border-primary/50 hover:shadow-lg transition-all duration-300 group">
                    <div className="mb-4 inline-block p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
