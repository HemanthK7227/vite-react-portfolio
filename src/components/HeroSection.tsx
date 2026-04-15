import React from 'react'
import { Linkedin, Instagram, Youtube, FileText } from 'lucide-react'
import { motion } from 'framer-motion'
import profileImg from '../assets/profile.png'

const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-[#0b0f19] text-white"
    >
      <div
        className="absolute inset-0 opacity-[0.18] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.22) 1.2px, transparent 1.2px)',
          backgroundSize: '74px 74px',
          backgroundPosition: '0 0',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-28 pb-20 lg:pt-32 lg:pb-24">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-14 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <h1
              className="font-semibold tracking-tight text-white"
              style={{ fontSize: 'clamp(52px, 8vw, 86px)', lineHeight: 0.98 }}
            >
              Hello,
              <br />
              Hemanth here! 👋
            </h1>

            <div className="mt-10 space-y-7 text-white/82 text-[19px] leading-[1.75] max-w-xl">
              <p>
                I’m a Machine Learning Engineer with over 4+ years of experience
                building scalable AI systems and production-grade ML workflows.
                I focus on Generative AI, LLM applications, and high-performance inference.
              </p>

              <p>
                All things AI: LLMs. RAG. MLOps. Real-time inference.
                Yep, I build them all.
              </p>

              <p>
                Let’s build intelligent systems that are not just functional,
                but impactful, scalable, and production-ready.
              </p>
            </div>

            <div className="mt-10 flex items-center gap-5 text-white/90">
              <span className="text-[15px] text-white/88">Let’s connect</span>

              <a
                href="https://www.linkedin.com/in/your-linkedin"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-white transition-colors"
              >
                <Linkedin size={24} strokeWidth={2} />
              </a>

              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="hover:text-white transition-colors"
              >
                <Youtube size={24} strokeWidth={2} />
              </a>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-white transition-colors"
              >
                <Instagram size={24} strokeWidth={2} />
              </a>
            </div>

            <div className="mt-12 flex flex-wrap gap-4">
              <a
                href="https://drive.google.com/file/d/1_Tycim9kP9y9hWOyt7HwEQqfP9i_bzw0/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4
                           text-[17px] font-medium text-[#111] hover:scale-[1.02]
                           transition-transform duration-200"
              >
                <FileText size={18} strokeWidth={2} />
                Resume
              </a>

              <a
                href="mailto:itshemanthkothapalli@gmail.com"
                className="inline-flex items-center rounded-full bg-white/95 px-7 py-4
                           text-[17px] font-medium text-[#111] hover:scale-[1.02]
                           transition-transform duration-200"
              >
                itshemanthkothapalli@gmail.com
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[470px]">
              <div className="absolute -inset-4 rounded-[36px] bg-white/5 blur-2xl" />
              <img
                src={profileImg}
                alt="Hemanth Kumar"
                className="relative w-full h-[540px] md:h-[620px] object-cover rounded-[34px] shadow-[0_20px_80px_rgba(0,0,0,0.35)]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection