import React from 'react'

const Footer: React.FC = () => (
  <footer className="bg-navy-900 border-t border-white/5 px-6 lg:px-10 py-6
                     flex flex-col md:flex-row items-center justify-between gap-3">
    <a href="#hero" className="text-base font-extrabold text-white tracking-tight">
      Hemanth<span className="text-blue-400">.</span>
    </a>
    <p className="text-xs text-white/20 tracking-wide text-center">
      © {new Date().getFullYear()} Hemanth Kumar · Machine Learning Engineer · USA
    </p>
    <a href="#hero" className="text-xs text-white/20 hover:text-white/50 transition-colors">
      Back to top ↑
    </a>
  </footer>
)

export default Footer
