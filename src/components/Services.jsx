"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Palette, ImageIcon, Type, Sparkles, FileText, Video, Globe } from "lucide-react"

export default function Services() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })

  const services = [
    { icon: ImageIcon, title: "Social Media Post Design", desc: "Eye-catching posts optimized for all platforms" },
    {
      icon: Sparkles,
      title: "YouTube Thumbnail Design",
      desc: "Attention-grabbing thumbnails that boost click-through rates",
    },
    { icon: Palette, title: "Logo & Branding Design", desc: "Complete brand identity and visual guidelines" },
    { icon: Type, title: "T-shirt & Apparel Graphics", desc: "Unique designs for print-on-demand products" },
    { icon: FileText, title: "Poster, Banner & Flyer Design", desc: "Promotional materials that make an impact" },
    { icon: Video, title: "Reels, Stories & Promotional Visuals", desc: "Dynamic content for social engagement" },
    { icon: Globe, title: "Website & Product Visuals", desc: "Professional imagery for digital presence" },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="services" ref={ref} className="relative py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-4 text-white text-center"
        >
          What I<span className="text-cyan-500"> Offer</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-gray-400 mb-16 max-w-2xl mx-auto"
        >
          Comprehensive design solutions tailored to your brand's needs
        </motion.p>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -10, boxShadow: "0 0 30px rgba(0, 255, 255, 0.2)" }}
              className="group p-6 rounded-xl border border-cyan-500/20 bg-black/40 backdrop-blur-sm hover:border-cyan-500/50 transition-all cursor-pointer"
            >
              <div className="mb-4 p-3 rounded-lg bg-cyan-500/10 w-fit group-hover:bg-cyan-500/20 transition-colors">
                <service.icon className="text-cyan-500" size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
