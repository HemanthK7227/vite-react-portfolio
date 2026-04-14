import React, { useState, useEffect } from 'react'
import { Menu, X, FileText } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const LINKS = [
  { label: 'My Work', href: '#work' },
  { label: 'Experience', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-cream/95 backdrop-blur-sm border-b border-border shadow-[0_1px_0_#e8e5e0]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-16">

        {/* Logo */}
        <a href="#hero" className="font-serif text-lg font-bold text-[#111] tracking-tight">
          Hemanth.
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {LINKS.map(l => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm text-[#666] hover:text-[#111] transition-colors tracking-wide"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://drive.google.com/file/d/1_Tycim9kP9y9hWOyt7HwEQqfP9i_bzw0/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#111] text-cream text-sm px-5 py-2.5
                       hover:bg-[#333] transition-colors tracking-wide"
          >
            <FileText size={13} />
            Resume
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(v => !v)}
          className="md:hidden text-[#666] hover:text-[#111] transition-colors p-1"
          aria-label="Toggle menu"
          aria-expanded={open}
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
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden bg-cream border-b border-border overflow-hidden"
          >
            <nav className="flex flex-col gap-1 px-6 py-5">
              {LINKS.map(l => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-sm text-[#555] hover:text-[#111] py-2 tracking-wide transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="https://drive.google.com/file/d/1_Tycim9kP9y9hWOyt7HwEQqfP9i_bzw0/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-[#111] font-medium mt-2 tracking-wide"
              >
                <FileText size={13} /> Resume
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Navbar
