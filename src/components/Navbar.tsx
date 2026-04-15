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
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm'
          : 'bg-white/80 backdrop-blur-sm border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-16">
        <a href="#hero" className="text-lg font-extrabold text-navy-800 tracking-tight">
          Hemanth<span className="text-navy-600">.</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {LINKS.map(l => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm text-slate-500 hover:text-navy-600 transition-colors font-medium tracking-wide"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://drive.google.com/file/d/1_Tycim9kP9y9hWOyt7HwEQqfP9i_bzw0/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-navy-600 text-white text-sm
                       px-5 py-2 rounded-lg font-semibold hover:bg-navy-700
                       transition-all hover:-translate-y-0.5 shadow-sm hover:shadow-md"
          >
            <FileText size={13} /> Resume
          </a>
        </nav>

        <button
          onClick={() => setOpen(v => !v)}
          className="md:hidden text-slate-500 hover:text-navy-600 transition-colors p-1"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <nav className="flex flex-col gap-1 px-6 py-5">
              {LINKS.map(l => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-sm text-slate-500 hover:text-navy-600 py-2.5 font-medium tracking-wide transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="https://drive.google.com/file/d/1_Tycim9kP9y9hWOyt7HwEQqfP9i_bzw0/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-navy-600 font-semibold mt-2"
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
