import React, { useState, useEffect } from 'react'
import { Menu, X, FileText, ArrowUpRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const LINKS = [
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#120f0d]/90 backdrop-blur-2xl border-b border-[#d7b07a]/15 shadow-[0_18px_50px_rgba(0,0,0,0.35)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-[72px]">

        {/* Logo */}
        <a href="#hero" className="group flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center text-[13px] font-black text-[#120f0d]"
               style={{ background: 'linear-gradient(135deg, #f1d9af, #d09d5d)' }}>
            HK
          </div>
          <span className="text-[16px] font-bold text-[#f7f2ea] tracking-tight">
            Hemanth<span className="text-[#d8a86b]">.</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center">
          {LINKS.map(l => (
            <a
              key={l.label}
              href={l.href}
              className="relative px-4 py-2 text-[14px] text-[#d8cab6]/70 hover:text-[#fffaf5]
                         transition-colors duration-200 font-medium tracking-wide group"
            >
              {l.label}
              <span className="absolute bottom-0.5 left-4 right-4 h-px
                               bg-gradient-to-r from-[#f1d9af] to-[#d09d5d]
                               scale-x-0 group-hover:scale-x-100
                               transition-transform duration-300 origin-center" />
            </a>
          ))}
        </nav>

        {/* Desktop CTA buttons */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://drive.google.com/file/d/1mU8jNaOugZsOVT-htM-FDCRRhSM1iv-W/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                       bg-[#201b17]/80 border border-[#d7b07a]/20 text-[#f7f2ea]/80 text-[13px] font-medium
                       hover:bg-[#2a221d] hover:text-white hover:border-[#d7b07a]/35
                       transition-all duration-200"
          >
            <FileText size={13} />
            Resume
          </a>
          <a
            href="mailto:hemanthkumar6x@gmail.com"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full
                       text-white text-[13px] font-semibold
                       hover:-translate-y-px transition-all duration-200
                       shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/35"
            style={{ background: 'linear-gradient(135deg, #6366F1, #7C3AED)' }}
          >
            Hire me
            <ArrowUpRight size={13} strokeWidth={2.5} />
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(v => !v)}
          className="md:hidden text-white/60 hover:text-white transition-colors p-2 -mr-2"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden bg-[#06090F]/98 backdrop-blur-xl border-b border-white/[0.06] overflow-hidden"
          >
            <nav className="flex flex-col px-6 py-4">
              {LINKS.map(l => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-[15px] text-white/55 hover:text-white py-3.5 font-medium
                             transition-colors border-b border-white/[0.04] last:border-0"
                >
                  {l.label}
                </a>
              ))}
              <div className="flex gap-3 pt-5 pb-2">
                <a
                  href="https://drive.google.com/file/d/1mU8jNaOugZsOVT-htM-FDCRRhSM1iv-W/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center py-3 rounded-full bg-white/[0.06] border border-white/10
                             text-white/80 text-[14px] font-medium"
                >
                  Resume
                </a>
                <a
                  href="mailto:hemanthkumar6x@gmail.com"
                  className="flex-1 text-center py-3 rounded-full text-white text-[14px] font-semibold"
                  style={{ background: 'linear-gradient(135deg, #6366F1, #7C3AED)' }}
                >
                  Hire me
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Navbar
