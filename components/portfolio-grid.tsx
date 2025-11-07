"use client"

import Image from "next/image"
import { ExternalLink, Instagram } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"

export function PortfolioGrid() {
  const projects = [
    {
      id: 1,
      title: "Fashion Brand Campaign",
      description:
        "Complete social media campaign with 20+ carousel designs, reels, and posts for a luxury fashion brand. 45% engagement increase.",
      image: "/ecommerce-dashboard.png",
      tags: ["Social Media", "Campaign Design", "Brand Strategy"],
      link: "#",
      github: "#",
    },
    {
      id: 2,
      title: "Startup Brand Identity",
      description:
        "Full brand identity design including logo, color palette, typography, and brand guidelines for a tech startup.",
      image: "/task-management-app.png",
      tags: ["Logo Design", "Brand Identity", "Guidelines"],
      link: "#",
      github: "#",
    },
    {
      id: 3,
      title: "Lifestyle Influencer Content",
      description:
        "3-month content calendar with 60+ Instagram posts, stories, and reels for a lifestyle influencer. 120K followers growth.",
      image: "/analytics-dashboard.png",
      tags: ["Content Creation", "Influencer", "Growth"],
      link: "#",
      github: "#",
    },
    {
      id: 4,
      title: "Product Launch Campaign",
      description:
        "Integrated social media campaign with infographics, promotional posts, and video content for product launch.",
      image: "/social-media-feed-interface.jpg",
      tags: ["Campaign", "Infographics", "Marketing"],
      link: "#",
      github: "#",
    },
    {
      id: 5,
      title: "E-commerce Social Strategy",
      description:
        "Strategic content calendar and design execution for e-commerce brand resulting in 200% sales increase from social.",
      image: "/blog-platform-editor-interface.jpg",
      tags: ["E-commerce", "Social Commerce", "Strategy"],
      link: "#",
      github: "#",
    },
    {
      id: 6,
      title: "Corporate Branding Package",
      description:
        "Comprehensive branding package including business cards, letterheads, email templates, and presentation designs.",
      image: "/design-system-components.png",
      tags: ["Corporate Design", "Branding", "Print"],
      link: "#",
      github: "#",
    },
  ]

  return (
    <section id="projects" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-card/20">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <ScrollReveal animation="fade-in-up">
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground text-balance">Featured Work</h2>
            </ScrollReveal>
            <ScrollReveal animation="fade-in-up" delay={0.1}>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Showcasing successful design and marketing campaigns that delivered real results for brands and
                businesses.
              </p>
            </ScrollReveal>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ScrollReveal key={project.id} animation="fade-in-up" delay={index * 0.1}>
                <div className="group bg-background border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300">
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden bg-card">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-3">
                      <a
                        href={project.link}
                        className="p-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/80 transition-colors"
                        aria-label="View project"
                      >
                        <ExternalLink size={18} />
                      </a>
                      <a
                        href={project.github}
                        className="p-2 bg-secondary text-secondary-foreground rounded-full hover:bg-secondary/80 transition-colors"
                        aria-label="View on Instagram"
                      >
                        <Instagram size={18} />
                      </a>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6 space-y-3">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-full font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
