"use client"

import { useState, useEffect } from "react"
import Navbar from "./components/Navbar"
import ThreeBackground from "./components/ThreeBackground"
import Hero from "./components/Hero"
import About from "./components/About"
import Services from "./components/Services"
import Portfolio from "./components/Portfolio"
import Contact from "./components/Contact"

function App() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="bg-black relative">
      <ThreeBackground />
      <Navbar />
      <Hero scrollY={scrollY} />
      <About />
      <Services />
      <Portfolio />
      <Contact />

      <footer className="bg-black bg-opacity-80 border-t border-cyan-500/20 py-8 px-6 text-center text-gray-400">
        <p>© 2025 Shehzad Bin Rehman. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
