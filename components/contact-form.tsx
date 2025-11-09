"use client"

import type React from "react"
import { useState } from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setFormData({ name: "", email: "", message: "" })
    alert("Message sent successfully!")
  }

  const contactInfo = [
    { icon: Mail, value: "Shehzadbinrehman@gmail.com", link: "mailto:Shehzadbinrehman@gmail.com" },
    { icon: Phone, value: "+92 315 1177817", link: "tel:+923151177817" },
    { icon: MapPin, value: "Karachi, Pakistan", link: "#" },
  ]

  return (
    <section id="contact" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <ScrollReveal animation="fade-in-up">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground">Get In Touch</h2>
          </ScrollReveal>
          <ScrollReveal animation="fade-in-up" delay={0.1}>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind? I'd love to hear from you. Let's connect.
            </p>
          </ScrollReveal>
        </div>

        {/* Contact Info (Icons above text) */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-10 mb-12">
          {contactInfo.map((info, index) => {
            const Icon = info.icon
            return (
              <ScrollReveal key={index} animation="fade-in-up" delay={index * 0.1}>
                <a
                  href={info.link}
                  className="flex flex-col items-center text-center text-foreground hover:text-primary transition-colors"
                >
                  <Icon className="w-8 h-8 mb-2 text-primary" />
                  <span className="text-lg">{info.value}</span>
                </a>
              </ScrollReveal>
            )
          })}
        </div>

        {/* Contact Form */}
        <ScrollReveal animation="fade-in-up" delay={0.2}>
          <div className="max-w-2xl mx-auto">
            <form
              onSubmit={handleSubmit}
              className="space-y-6 bg-background border border-border rounded-lg p-8"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-foreground placeholder:text-muted-foreground"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-foreground placeholder:text-muted-foreground"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about your project..."
                  rows={5}
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-foreground placeholder:text-muted-foreground resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/80 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-semibold flex items-center justify-center gap-2"
              >
                <Send size={20} />
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
