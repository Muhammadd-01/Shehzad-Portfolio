"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })

  return (
    <section id="about" ref={ref} className="relative py-20 px-6 bg-black/40 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white">
            About<span className="text-cyan-500"> Me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                I'm Shehzad Bin Rehman — a creative graphic designer passionate about crafting modern, impactful
                visuals. I turn ideas into professional designs that reflect brand personality and purpose.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                With expertise across multiple design tools and a keen eye for aesthetics, I help brands communicate
                their message effectively through stunning visual content.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold text-cyan-500 mb-6">Tools & Skills</h3>
              {[
                "Canva",
                "Photoshop (Basic)",
                "Illustrator (Basic)",
                "Design Thinking",
                "Branding",
                "Social Media Design",
              ].map((skill, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                  <span className="text-gray-300">{skill}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
