"use client"

import { TypingAnimation } from "./typing-animation"
import { ChevronDown } from "lucide-react"
import Link from "next/link"

export function NameIntroSection() {
  const introText = "Creative Designer | Social Media Marketing Specialist | Brand Storyteller"

  const handleArrowClick = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center justify-center"
    >
      <div className="text-center space-y-8 max-w-4xl mx-auto">
        <div className="flex justify-center mb-8">
          <div className="w-32 h-32 sm:w-48 sm:h-48 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 border-2 border-primary flex items-center justify-center shadow-lg">
            <img
              src="/ShehzadPic.jpeg"
              alt="Profile"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </div>

        <div className="space-y-4">
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-foreground leading-tight">
            <TypingAnimation text="Shehzad Bin Rehman" speed={50} />
          </h1>
          <p className="text-xl sm:text-2xl text-primary font-semibold">
            <TypingAnimation text={introText} speed={30} startDelay={2000} loop={true} loopDelay={3000} />
          </p>
        </div>

        {/* Descriptive Text */}
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
          I specialize in creating stunning visual identities and viral social media campaigns that elevate brands and
          engage audiences. With expertise in graphic design, content creation, and strategic marketing, I transform
          ideas into impactful digital experiences.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
          <Link
            href="#projects"
            className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all duration-300 font-semibold shadow-soft hover:shadow-soft-lg hover:scale-105"
          >
            View My Work
          </Link>
          <a
            href="/ShehzadResume.pdf"
            target="_blank"
            className="inline-flex items-center justify-center px-8 py-3 border-2 border-primary text-primary rounded-full hover:bg-primary/5 transition-all duration-300 font-semibold shadow-soft hover:shadow-soft-lg hover:scale-105"
          >
            View Resume
          </a>
          <Link
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3 bg-secondary/30 text-foreground rounded-full hover:bg-secondary/50 transition-all duration-300 font-semibold shadow-soft hover:shadow-soft-lg hover:scale-105"
          >
            Get in Touch
          </Link>
        </div>

        <div className="pt-12 flex justify-center">
          <button
            onClick={handleArrowClick}
            className="animate-bounce hover:text-primary transition-colors cursor-pointer"
            aria-label="Scroll to next section"
          >
            <ChevronDown className="w-8 h-8 text-muted-foreground" />
          </button>
        </div>
      </div>
    </section>
  )
}
