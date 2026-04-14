import React from 'react'
import { ArrowRight, Github, Linkedin, Twitter, Mail } from 'lucide-react'
import { motion } from 'framer-motion'
import profileImg from '../assets/profile.png'

const SOCIALS = [
  { href: 'https://github.com/HemanthK7227', Icon: Github, label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/hemanth-k-027457190/', Icon: Linkedin, label: 'LinkedIn' },
  { href: 'https://x.com/imhemanth_kk', Icon: Twitter, label: 'Twitter' },
]

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } }
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
}

const HeroSection: React.FC = () => (
  <section
    id="hero"
    className="min-h-screen bg-cream flex items-center border-b border-border pt-16"
  >
    <div className="w-full max-w-7xl mx-auto px-6 lg:px-10 py-20
                    grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

      {/* LEFT */}
      <motion.div variants={stagger} initial="hidden" animate="show">

        <motion.div variants={fadeUp}>
          <span className="inline-block text-[11px] tracking-[0.16em] uppercase text-[#888]
                           border border-[#ddd] px-4 py-1.5 mb-8 font-normal">
            Available for opportunities
          </span>
        </motion.div>

        <motion.p
          variants={fadeUp}
          className="font-serif text-lg italic text-[#888] mb-1"
        >
          Hello,
        </motion.p>

        <motion.h1
          variants={fadeUp}
          className="font-serif font-black text-[#111] leading-[0.9] tracking-tight mb-8"
          style={{ fontSize: 'clamp(52px, 8vw, 92px)' }}
        >
          Hemanth<br />
          <em className="not-italic text-[#555]">here!</em>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="text-[15px] text-[#555] leading-[1.8] max-w-lg mb-10 font-light"
        >
          I'm a{' '}
          <strong className="text-[#111] font-medium">Machine Learning Engineer</strong>{' '}
          with 4+ years of experience building scalable AI-driven systems. Specialized in{' '}
          <strong className="text-[#111] font-medium">Generative AI, LLM applications</strong>,
          and real-time inference workflows for enterprise solutions across healthcare,
          education, and e-commerce.
        </motion.p>

        <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mb-10">
          <a
            href="#work"
            className="group inline-flex items-center gap-2 bg-[#111] text-cream
                       text-sm px-7 py-3 hover:bg-[#333] transition-colors tracking-wide"
          >
            View my work
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center text-sm text-[#111] px-7 py-3
                       border border-[#bbb] hover:border-[#111] transition-colors tracking-wide"
          >
            Get in touch
          </a>
        </motion.div>

        <motion.div variants={fadeUp} className="flex items-center gap-4 flex-wrap">
          {SOCIALS.map(({ href, Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-[#bbb] hover:text-[#111] transition-colors"
            >
              <Icon size={18} />
            </a>
          ))}
          <span className="w-px h-4 bg-[#e0ddd8]" />
          <a
            href="mailto:hemanthkumar5x@gmail.com"
            className="inline-flex items-center gap-1.5 text-sm text-[#888]
                       hover:text-[#111] transition-colors underline underline-offset-4"
          >
            <Mail size={13} />
            hemanthkumar5x@gmail.com
          </a>
        </motion.div>

      </motion.div>

      {/* RIGHT â€” profile card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="flex justify-center"
      >
        <motion.div
          whileHover={{ y: -8 }}
          transition={{ type: 'spring', stiffness: 200, damping: 18 }}
          className="w-full max-w-[340px] border border-border bg-white overflow-hidden"
        >
          <div className="w-full h-[380px] border-b border-border overflow-hidden">
            <img
              src={profileImg}
              alt="Hemanth Kumar"
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>

          <div className="px-6 py-5">
            <p className="font-serif text-lg font-bold text-[#111] mb-1">
              Hemanth Kumar
            </p>
            <p className="text-[11px] text-[#888] uppercase tracking-[0.1em] mb-4">
              Machine Learning Engineer · USA
            </p>
            <span className="inline-flex items-center gap-2 text-xs text-[#2d7a4f]
                             bg-[#edf7f1] px-3 py-1.5 border border-[#c3e6d3]">
              <span className="w-2 h-2 rounded-full bg-[#2d7a4f] animate-pulse" />
              Open to opportunities
            </span>
          </div>
        </motion.div>
      </motion.div>

    </div>
  </section>
)
export default HeroSection