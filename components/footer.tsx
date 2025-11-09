"use client"

import Link from "next/link"
import { Linkedin, Instagram, Facebook, Mail } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"
import { TypingAnimation } from "./typing-animation"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://www.instagram.com/shehzad.bin.rehman/?__pwa=1a",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/shehzad-bin-rehman-1ba91b352/",
    },
    {
      icon: Facebook,
      label: "Facebook",
      href: "https://www.facebook.com/shehzad.bin.rehman",
    },
    {
      icon: FaWhatsapp,
      label: "WhatsApp",
      href: "https://wa.me/923151177817",
    },
    {
      icon: Mail,
      label: "Email",
      // ✅ Opens Gmail compose directly if user is logged in, or default mail app otherwise
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=Shehzadbinrehman@gmail.com&su=Inquiry%20from%20Portfolio%20Website&body=Hi%20Shehzad,%0A%0AI%20would%20like%20to%20discuss...",
    },
  ]

  const footerLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Work", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <footer className="relative bg-gradient-to-b from-secondary/5 to-background border-t border-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
        <div className="grid md:grid-cols-3 gap-8 mb-6">
          {/* Brand Section */}
          <div className="space-y-2">
            <h3 className="text-lg font-bold gradient-text">Shehzad Bin Rehman</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              <TypingAnimation
                text="Graphic designer & social media strategist crafting beautiful brand stories."
                speed={20}
                loop={true}
                loopDelay={2000}
              />
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-3 text-sm">Navigation</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-3 text-sm">Connect</h4>
            <div className="flex gap-2 flex-wrap">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank" // ✅ Gmail or mail client opens in a new tab
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className={`p-2 text-muted-foreground hover:bg-primary/10 rounded-full transition-all duration-300 shadow-soft hover:shadow-soft-lg text-sm ${
                      social.label === "WhatsApp"
                        ? "hover:text-green-500"
                        : "hover:text-primary"
                    }`}
                  >
                    <Icon size={18} />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-4" />

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>&copy; {currentYear} Shehzad Bin Rehman. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#privacy" className="hover:text-primary transition-colors">
              Privacy
            </a>
            <a href="#terms" className="hover:text-primary transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
