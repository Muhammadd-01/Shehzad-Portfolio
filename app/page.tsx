import { ThreeBackground } from "@/components/three-background"
import { Navbar } from "@/components/navbar"
import { NameIntroSection } from "@/components/name-intro-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { PortfolioGrid } from "@/components/portfolio-grid"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"
import { GoToTopButton } from "@/components/go-to-top-button"

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <ThreeBackground />
      <Navbar />
      <NameIntroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioGrid />
      <ContactForm />
      <Footer />
      <GoToTopButton />
    </main>
  )
}
