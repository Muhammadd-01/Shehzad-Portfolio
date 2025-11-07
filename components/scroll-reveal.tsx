"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

interface ScrollRevealProps {
  children: React.ReactNode
  animation?: "fade-in-up" | "slide-in-left" | "slide-in-right" | "fade-in"
  delay?: number
  className?: string
}

export function ScrollReveal({ children, animation = "fade-in-up", delay = 0, className = "" }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  const animationClass = isVisible ? `animate-${animation}` : "opacity-0"
  const delayClass = delay > 0 ? `animation-delay-${delay}` : ""

  return (
    <div
      ref={ref}
      className={`${animationClass} ${delayClass} ${className}`}
      style={delay > 0 ? { animationDelay: `${delay * 100}ms` } : undefined}
    >
      {children}
    </div>
  )
}
