import React from 'react'

const Footer: React.FC = () => (
  <footer className="bg-cream border-t border-border px-6 lg:px-10 py-6
                     flex flex-col md:flex-row items-center justify-between gap-3">
    <a href="#hero" className="font-serif text-base font-bold text-[#111] tracking-tight">
      Hemanth.
    </a>
    <p className="text-xs text-[#aaa] tracking-wide text-center">
      © {new Date().getFullYear()} Hemanth Kumar · Machine Learning Engineer · USA
    </p>
    <a
      href="#hero"
      className="text-xs text-[#888] underline underline-offset-4
                 hover:text-[#111] transition-colors"
    >
      Back to top ↑
    </a>
  </footer>
)

export default Footer
