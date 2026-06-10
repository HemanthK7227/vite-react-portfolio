import React from 'react'
import { Linkedin, Youtube, Instagram, Link as LinkIcon, MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'

const ContactSection: React.FC = () => {
  return (
    <section
      id="contact"
      className="bg-[#111111] text-white border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="font-light tracking-tight text-white mb-10"
              style={{ fontSize: 'clamp(52px, 7vw, 88px)', lineHeight: 1 }}
            >
              Get in touch
            </h2>

            <a
              href="mailto:hemanthkumar6x@gmail.com"
              className="inline-flex items-center rounded-2xl bg-[#f3f1ee] text-[#111]
                         px-8 py-5 text-xl md:text-2xl font-medium
                         hover:scale-[1.02] transition-transform duration-200"
            >
              hemanthkumar6x@gmail.com
            </a>

            <div className="mt-8">
              <a
                href="https://drive.google.com/file/d/1tiLK02TZJR1XUN_jWwMpPX4FxJYc2I22/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-white/90 text-xl md:text-2xl
                           underline underline-offset-4 hover:text-white transition-colors"
              >
                <MessageCircle size={22} strokeWidth={1.8} />
                Resume-Hemanth-Kumar.pdf
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex lg:justify-end"
          >
            <div className="flex items-center gap-8 md:gap-10 text-white">
              <a
                href="https://www.linkedin.com/in/hemanth-k-027457190/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity"
                aria-label="LinkedIn"
              >
                <Linkedin size={34} strokeWidth={2} />
              </a>

              <a
                href="https://github.com/HemanthK7227"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[34px] font-semibold leading-none hover:opacity-70 transition-opacity"
                aria-label="GitHub"
              >
                GH
              </a>

              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity"
                aria-label="YouTube"
              >
                <Youtube size={34} strokeWidth={2} />
              </a>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity"
                aria-label="Instagram"
              >
                <Instagram size={34} strokeWidth={2} />
              </a>

              <a
                href="https://www.hemanthkothapalli.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity"
                aria-label="Website"
              >
                <LinkIcon size={34} strokeWidth={2} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
