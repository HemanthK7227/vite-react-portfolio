import React from 'react'
import { Linkedin, FileText, ArrowRight, Zap } from 'lucide-react'
import { motion } from 'framer-motion'
import profileImg from '../assets/profile.png'

const STATS = [
  { value: '5+', label: 'Years of Experience' },
  { value: '10+', label: 'AI / ML Projects' },
  { value: '2', label: 'Top Companies' },
]

/* Inline GitHub SVG so we don't depend on a specific lucide version */
const GithubIcon: React.FC<{ size?: number }> = ({ size = 18 }) => (
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

const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden bg-[#0b0908] text-[#f8f2ea]">

      {/* Background gradient orbs */}
      <div className="absolute -top-40 -left-32 w-[700px] h-[700px] rounded-full pointer-events-none"
           style={{ background: 'radial-gradient(circle, rgba(205,146,84,0.18) 0%, transparent 70%)' }} />
      <div className="absolute top-1/4 -right-40 w-[600px] h-[600px] rounded-full pointer-events-none"
           style={{ background: 'radial-gradient(circle, rgba(178,119,52,0.12) 0%, transparent 70%)' }} />
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[900px] h-[400px] rounded-full pointer-events-none"
           style={{ background: 'radial-gradient(ellipse, rgba(255,214,153,0.07) 0%, transparent 70%)' }} />

      {/* Dot grid overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.13] dot-grid" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="grid lg:grid-cols-[1fr_460px] gap-16 lg:gap-20 items-center">

          {/* ─── Left: Content ─── */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Availability badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full mb-8
                            bg-white/[0.04] border border-white/[0.07] backdrop-blur-sm">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-[13px] text-[#f0e5d1]/80 font-medium">Available for new opportunities</span>
            </div>

            {/* Main heading */}
            <h1 className="font-extrabold tracking-tight" style={{ fontSize: 'clamp(50px, 8vw, 92px)', lineHeight: 0.93 }}>
              <span className="block text-[#f8f2ea]">Hemanth</span>
              <span className="block text-[#f8f2ea]">Kumar</span>
              <span className="block mt-1" style={{
                background: 'linear-gradient(125deg, #f1d9af 0%, #d09d5d 46%, #ba7645 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                AI / ML Engineer
              </span>
            </h1>

            {/* Role tags */}
            <div className="mt-6 flex flex-wrap gap-2">
              {['LLM Engineer', 'AI Engineer', 'Data Scientist', 'Forward Deployed Engineer'].map(role => (
                <span
                  key={role}
                  className="px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide"
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(209,156,88,0.2)',
                    color: 'rgba(240,220,180,0.65)',
                  }}
                >
                  {role}
                </span>
              ))}
            </div>

            {/* Sub-description */}
            <p className="mt-8 text-[17px] leading-[1.85] text-[#d9d0c7]/70 max-w-[520px]">
              I turn{' '}
              <span className="text-[#f7f2ea] font-medium">LLMs into production systems</span> —
              RAG pipelines, multi-agent orchestration, and real-time inference at scale.
              5+ years from raw data to deployed AI, currently engineering intelligent enterprise search at{' '}
              <span className="font-semibold" style={{
                background: 'linear-gradient(135deg, #f1d9af, #d09d5d)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>BNY</span>.
            </p>

            {/* CTA row */}
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#work"
                className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full
                           text-white text-[16px] font-semibold
                           hover:-translate-y-0.5 transition-all duration-200
                           shadow-xl shadow-indigo-500/25 hover:shadow-indigo-500/40"
                style={{ background: 'linear-gradient(135deg, #e5c98b, #c98d55)' }}
              >
                View My Work
                <ArrowRight size={16} strokeWidth={2.5} />
              </a>
              <a
                href="https://drive.google.com/file/d/1mU8jNaOugZsOVT-htM-FDCRRhSM1iv-W/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full
                           bg-[#201b17]/75 border border-[#d7b07a]/25 text-[#f6efe7] text-[16px] font-medium
                           hover:bg-[#2a221d] hover:border-[#d7b07a]/35
                           hover:-translate-y-0.5 transition-all duration-200"
              >
                <FileText size={16} />
                Resume
              </a>
            </div>

            {/* Social links */}
            <div className="mt-10 flex items-center gap-4">
              <span className="text-[11px] font-bold text-white/25 tracking-[0.2em] uppercase">Connect</span>
              <div className="h-px w-8 bg-white/10" />
              {[
                {
                  href: 'https://www.linkedin.com/in/hemanth-k-027457190/',
                  label: 'LinkedIn',
                  node: <Linkedin size={17} strokeWidth={1.8} />,
                },
                {
                  href: 'https://github.com/HemanthK7227',
                  label: 'GitHub',
                  node: <GithubIcon size={17} />,
                },
              ].map(({ href, label, node }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-full bg-[#201b17]/80 border border-[#d7b07a]/15
                             flex items-center justify-center text-[#d8cab6]/70
                             hover:text-white hover:bg-[#2a221d] hover:border-[#d7b07a]/35
                             hover:scale-110 transition-all duration-200"
                >
                  {node}
                </a>
              ))}
            </div>

            {/* Stats row */}
            <div className="mt-12 flex flex-wrap gap-10">
              {STATS.map(({ value, label }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div
                    className="text-[40px] font-black leading-none"
                    style={{
                      background: 'linear-gradient(135deg, #f1d9af, #d09d5d)',
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    {value}
                  </div>
                  <div className="text-[12px] text-white/35 mt-1.5 font-medium tracking-wide">{label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ─── Right: Profile photo ─── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 28 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.12 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[420px]">

              {/* Outer glow halo */}
              <div
                className="absolute -inset-6 rounded-[48px] pointer-events-none"
                style={{
                  background: 'conic-gradient(from 45deg, #6366F1, #A855F7, #38BDF8, #6366F1)',
                  opacity: 0.22,
                  filter: 'blur(32px)',
                }}
              />

              {/* Gradient border ring */}
              <div
                className="absolute -inset-[1.5px] rounded-[36px] pointer-events-none"
                style={{
                  background: 'linear-gradient(135deg, rgba(99,102,241,0.6), rgba(168,85,247,0.3), rgba(56,189,248,0.2))',
                  opacity: 0.5,
                }}
              />

              {/* Photo */}
              <img
                src={profileImg}
                alt="Hemanth Kumar"
                className="relative w-full h-[520px] md:h-[600px] object-cover rounded-[34px]
                           shadow-[0_32px_80px_rgba(0,0,0,0.6)]"
                style={{ zIndex: 1, position: 'relative' }}
              />

              {/* Bottom fade */}
              <div
                className="absolute bottom-0 inset-x-0 h-28 rounded-b-[34px] pointer-events-none"
                style={{
                  background: 'linear-gradient(to bottom, transparent, rgba(6,9,15,0.55))',
                  zIndex: 2,
                }}
              />

              {/* Floating badge — top right */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -right-5 top-10 flex items-center gap-2 px-3.5 py-2.5
                           bg-[#0D1321]/95 border border-indigo-500/25 rounded-2xl
                           shadow-[0_8px_32px_rgba(99,102,241,0.18)] backdrop-blur-sm"
                style={{ zIndex: 10 }}
              >
                <div className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0"
                     style={{ background: 'linear-gradient(135deg, #6366F1, #A855F7)' }}>
                  <Zap size={12} className="text-white" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-white leading-none">Generative AI</div>
                  <div className="text-[10px] text-white/40 mt-0.5">LLMs · RAG · Agents</div>
                </div>
              </motion.div>

              {/* Floating badge — bottom left */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.7 }}
                className="absolute -left-5 bottom-16 flex items-center gap-2 px-3.5 py-2.5
                           bg-[#0D1321]/95 border border-violet-500/25 rounded-2xl
                           shadow-[0_8px_32px_rgba(168,85,247,0.15)] backdrop-blur-sm"
                style={{ zIndex: 10 }}
              >
                <span className="relative flex h-2.5 w-2.5 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
                <div>
                  <div className="text-[11px] font-bold text-white leading-none">Open to Work</div>
                  <div className="text-[10px] text-white/40 mt-0.5">AI / ML Engineering</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
