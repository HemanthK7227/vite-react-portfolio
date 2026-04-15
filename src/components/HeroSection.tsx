import React, { useRef, useEffect } from 'react'
import { ArrowRight, Github, Linkedin, Twitter, Mail } from 'lucide-react'
import { motion } from 'framer-motion'
import profileImg from '../assets/profile.png'

const SOCIALS = [
  { href: 'https://github.com/HemanthK7227', Icon: Github, label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/hemanth-k-027457190/', Icon: Linkedin, label: 'LinkedIn' },
  { href: 'https://x.com/imhemanth_kk', Icon: Twitter, label: 'Twitter' },
]

const CHIPS = ['Python', 'LangChain', 'AWS', 'TensorRT', 'MLflow', 'FastAPI']

const FLOAT_PILLS = [
  { label: 'LangChain', delay: '0s', top: '18%', right: '32%' },
  { label: 'AWS SageMaker', delay: '-3s', top: '58%', right: '26%' },
  { label: 'MLflow', delay: '-1.5s', bottom: '22%', right: '40%' },
]

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] } },
})

const HeroSection: React.FC = () => {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const card = cardRef.current
    if (!card) return
    const onMove = (e: MouseEvent) => {
      const r = card.getBoundingClientRect()
      const x = (e.clientX - r.left) / r.width - 0.5
      const y = (e.clientY - r.top) / r.height - 0.5
      card.style.transform = `perspective(700px) rotateY(${x * 18}deg) rotateX(${-y * 18}deg) translateY(-10px)`
    }
    const onLeave = () => {
      card.style.transition = 'transform 0.5s cubic-bezier(0.16,1,0.3,1)'
      card.style.transform = ''
    }
    const onEnter = () => { card.style.transition = 'transform 0.08s' }
    card.addEventListener('mousemove', onMove)
    card.addEventListener('mouseleave', onLeave)
    card.addEventListener('mouseenter', onEnter)
    return () => {
      card.removeEventListener('mousemove', onMove)
      card.removeEventListener('mouseleave', onLeave)
      card.removeEventListener('mouseenter', onEnter)
    }
  }, [])

  return (
    <section
      id="hero"
      className="relative bg-white border-b border-slate-100 pt-16 overflow-hidden min-h-screen flex items-center"
    >
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-50 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(30,64,175,0.08) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* Floating orbs */}
      <div className="absolute top-0 right-20 w-72 h-72 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle,rgba(30,64,175,0.07),transparent 70%)', animation: 'float 8s ease-in-out infinite' }} />
      <div className="absolute bottom-10 left-1/3 w-48 h-48 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle,rgba(37,99,235,0.06),transparent 70%)', animation: 'float 6s ease-in-out infinite', animationDelay: '-2s' }} />
      <div className="absolute top-1/3 right-10 w-28 h-28 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle,rgba(96,165,250,0.09),transparent 70%)', animation: 'float 9s ease-in-out infinite', animationDelay: '-4s' }} />

      {/* Floating tech pills */}
      {FLOAT_PILLS.map((p, i) => (
        <div
          key={i}
          className="absolute hidden lg:flex items-center gap-2 bg-white border border-slate-200
                     text-navy-600 text-xs font-semibold px-3 py-2 rounded-full shadow-sm pointer-events-none"
          style={{
            top: p.top,
            right: p.right,
            bottom: (p as any).bottom,
            animation: `float 7s ease-in-out infinite`,
            animationDelay: p.delay,
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-navy-600" />
          {p.label}
        </div>
      ))}

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10 py-20
                      grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <motion.div initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: 0.1 } } }}>

          <motion.div variants={fadeUp(0)}>
            <span className="inline-flex items-center gap-2 text-xs font-semibold text-navy-600
                             bg-blue-50 border border-blue-200 px-4 py-1.5 rounded-full mb-6 tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-navy-600 animate-[pulseDot_2s_ease-in-out_infinite]" />
              Open to opportunities
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp(0.1)}
            className="text-[clamp(44px,7vw,72px)] font-extrabold text-navy-800 leading-[0.92] tracking-tight mb-4"
          >
            Hello, I'm<br />
            <span className="text-navy-600">Hemanth.</span>
          </motion.h1>

          <motion.p variants={fadeUp(0.2)} className="text-[15px] text-slate-500 leading-relaxed max-w-lg mb-8 font-normal">
            <strong className="text-navy-800 font-semibold">Machine Learning Engineer</strong> with 4+ years
            building scalable AI-driven systems. Specialized in{' '}
            <strong className="text-navy-800 font-semibold">Generative AI & LLMs</strong> across healthcare,
            education, and e-commerce.
          </motion.p>

          <motion.div variants={fadeUp(0.3)} className="flex flex-wrap gap-3 mb-8">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 bg-navy-600 text-white text-sm
                         font-semibold px-6 py-3 rounded-lg hover:bg-navy-700 transition-all
                         hover:-translate-y-0.5 shadow-sm hover:shadow-lg"
            >
              View my work
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center text-sm font-semibold text-navy-800
                         px-6 py-3 border-2 border-slate-200 rounded-lg
                         hover:border-navy-600 hover:text-navy-600 transition-all hover:-translate-y-0.5"
            >
              Get in touch
            </a>
          </motion.div>

          <motion.div variants={fadeUp(0.35)} className="flex flex-wrap gap-2 mb-8">
            {CHIPS.map(c => (
              <span key={c} className="text-xs bg-slate-100 text-slate-600 px-3 py-1.5 rounded-full font-medium">
                {c}
              </span>
            ))}
          </motion.div>

          <motion.div variants={fadeUp(0.4)} className="flex items-center gap-4">
            {SOCIALS.map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 border-2 border-slate-200 rounded-lg flex items-center justify-center
                           text-slate-400 hover:text-navy-600 hover:border-navy-600 transition-all hover:-translate-y-0.5"
              >
                <Icon size={15} />
              </a>
            ))}
            <span className="w-px h-4 bg-slate-200" />
            <a
              href="mailto:hemanthkumar5x@gmail.com"
              className="inline-flex items-center gap-1.5 text-sm text-slate-400
                         hover:text-navy-600 transition-colors"
            >
              <Mail size={13} />
              hemanthkumar5x@gmail.com
            </a>
          </motion.div>

        </motion.div>

        {/* RIGHT — 3D tilt profile card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center"
        >
          <div
            ref={cardRef}
            className="w-full max-w-[320px] bg-navy-800 rounded-2xl overflow-hidden cursor-pointer"
            style={{ willChange: 'transform' }}
          >
            {/* Animated rings */}
            <div className="relative w-full h-[300px] flex items-center justify-center overflow-hidden"
              style={{ background: 'linear-gradient(135deg,#1e3a8a,#1e40af,#3b82f6)' }}>
              <div className="absolute rounded-full border border-white/10 w-52 h-52"
                style={{ animation: 'ringPulse 4s ease-in-out infinite' }} />
              <div className="absolute rounded-full border border-white/10 w-36 h-36"
                style={{ animation: 'ringPulse 5s ease-in-out infinite', animationDelay: '-1s' }} />
              <div className="absolute rounded-full border border-white/10 w-20 h-20"
                style={{ animation: 'ringPulse 3s ease-in-out infinite', animationDelay: '-2s' }} />
              <img
                src={profileImg}
                alt="Hemanth Kumar"
                className="relative z-10 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-800/80 to-transparent" />
            </div>

            <div className="px-5 py-5">
              <p className="text-base font-bold text-white mb-1">Hemanth Kumar</p>
              <p className="text-xs text-white/40 tracking-widest uppercase mb-3">ML Engineer · USA</p>
              <span className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400
                               bg-emerald-400/10 border border-emerald-400/25 px-3 py-1.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"
                  style={{ animation: 'pulseDot 1.5s ease-in-out infinite' }} />
                Available now
              </span>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Keyframes injected globally */}
      <style>{`
        @keyframes float { 0%,100%{transform:translateY(0) scale(1)} 50%{transform:translateY(-16px) scale(1.03)} }
        @keyframes pulseDot { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.3;transform:scale(.75)} }
        @keyframes ringPulse { 0%,100%{transform:scale(1);opacity:.6} 50%{transform:scale(1.15);opacity:.15} }
        @keyframes wave { from{left:-100%} to{left:100%} }
      `}</style>
    </section>
  )
}

export default HeroSection
