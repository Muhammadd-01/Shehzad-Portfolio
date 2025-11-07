"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { X, ZoomIn } from "lucide-react"

export default function Portfolio() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    { id: 1, title: "Brand Identity Design", category: "Branding", image: "/professional-brand-identity-design.jpg" },
    { id: 2, title: "Social Campaign", category: "Social Media", image: "/social-media-campaign.png" },
    { id: 3, title: "YouTube Thumbnail", category: "Video", image: "/youtube-thumbnail-design.jpg" },
    { id: 4, title: "Apparel Design", category: "Merchandise", image: "/tshirt-apparel-graphic-design.jpg" },
    { id: 5, title: "Poster Design", category: "Print", image: "/creative-poster-design.jpg" },
    { id: 6, title: "Website Graphics", category: "Digital", image: "/modern-website-graphics.jpg" },
  ]

  return (
    <section id="portfolio" ref={ref} className="relative py-20 px-6 bg-black/40 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-4 text-white text-center"
        >
          My<span className="text-cyan-500"> Work</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
        >
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedProject(project)}
              className="relative group cursor-pointer overflow-hidden rounded-xl"
            >
              <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-64 object-cover" />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                <div className="text-center">
                  <h3 className="text-white font-bold mb-2">{project.title}</h3>
                  <p className="text-cyan-500 text-sm">{project.category}</p>
                </div>
                <ZoomIn className="text-cyan-500" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-black rounded-xl overflow-hidden max-w-2xl w-full border border-cyan-500/30"
            >
              <img
                src={selectedProject.image || "/placeholder.svg"}
                alt={selectedProject.title}
                className="w-full h-96 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{selectedProject.title}</h3>
                    <p className="text-cyan-500">{selectedProject.category}</p>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
