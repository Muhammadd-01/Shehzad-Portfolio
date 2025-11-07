"use client"

import { useState, useEffect } from "react"
import { ChevronUp } from "lucide-react"

export function GoToTopButton() {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility)
    return () => {
      window.removeEventListener("scroll", toggleVisibility)
    }
  }, [])

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-primary text-primary-foreground rounded-full shadow-soft hover:shadow-soft-lg hover:scale-110 transition-all duration-300 z-40 animate-fadeIn"
          aria-label="Go to top"
        >
          <ChevronUp size={24} />
        </button>
      )}
    </>
  )
}
