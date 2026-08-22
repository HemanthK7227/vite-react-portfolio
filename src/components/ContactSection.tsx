import React from 'react'
import { Linkedin, Mail, FileText, ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'

/* Inline GitHub SVG */
const GithubIcon: React.FC<{ size?: number }> = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483
             0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466
             -.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832
             .092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688
             -.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115
             2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595
             1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012
             2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
)

const SOCIALS = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/hemanth-k-027457190/',
    icon: <Linkedin size={20} strokeWidth={1.8} />,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/HemanthK7227',
    icon: <GithubIcon size={20} />,
  },
  {
    label: 'Email',
    href: 'mailto:hemanthkumar6x@gmail.com',
    icon: <Mail size={20} strokeWidth={1.8} />,
  },
]

const ContactSection: React.FC = () => (
  <section id="contact" className="relative bg-[#06090F] overflow-hidden" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>

    {/* Background glow */}
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
         style={{ background: 'radial-gradient(ellipse, rgba(99,102,241,0.12) 0%, transparent 70%)' }} />

    <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-28 lg:py-36">

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-3xl"
      >
        {/* Eyebrow */}
        <p className="text-[12px] font-bold tracking-[0.2em] uppercase text-indigo-400 mb-6">
          Get In Touch
        </p>

        {/* Big heading */}
        <h2
          className="font-extrabold tracking-tight text-white mb-6"
          style={{ fontSize: 'clamp(44px, 7vw, 88px)', lineHeight: 0.93 }}
        >
          Let's build
          <br />
          <span style={{
            background: 'linear-gradient(125deg, #818CF8 0%, #A78BFA 40%, #67E8F9 100%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            together.
          </span>
        </h2>

        <p className="text-[16px] md:text-[18px] text-white/40 leading-relaxed mb-12 max-w-lg">
          Open to ML engineering roles, AI consulting projects, and interesting collaborations.
          Let's make something great.
        </p>

        {/* Primary CTA */}
        <a
          href="mailto:hemanthkumar6x@gmail.com"
          className="inline-flex items-center gap-3 px-8 py-5 rounded-2xl
                     text-white text-[16px] md:text-[18px] font-semibold
                     hover:-translate-y-0.5 hover:shadow-2xl transition-all duration-300
                     shadow-lg shadow-indigo-500/20"
          style={{ background: 'linear-gradient(135deg, #6366F1, #7C3AED)' }}
        >
          <Mail size={20} strokeWidth={2} />
          hemanthkumar6x@gmail.com
          <ArrowUpRight size={18} strokeWidth={2.5} />
        </a>

        {/* Resume link */}
        <div className="mt-5">
          <a
            href="https://drive.google.com/file/d/1mU8jNaOugZsOVT-htM-FDCRRhSM1iv-W/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[15px] text-white/40
                       hover:text-white/70 transition-colors duration-200 group"
          >
            <FileText size={16} />
            Download Resume
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Divider */}
        <div className="mt-16 mb-8 h-px max-w-sm" style={{ background: 'rgba(255,255,255,0.07)' }} />

        {/* Social links */}
        <div className="flex items-center gap-4">
          <span className="text-[11px] font-bold text-white/20 tracking-[0.2em] uppercase">Follow</span>
          {SOCIALS.map(({ label, href, icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-12 h-12 rounded-xl flex items-center justify-center text-white/40
                         hover:text-white hover:scale-110 transition-all duration-200"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              {icon}
            </a>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
)

export default ContactSection
