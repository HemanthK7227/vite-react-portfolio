import React from 'react'

const Footer: React.FC = () => (
  <footer
    className="bg-[#06090F] text-white/20 py-8"
    style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
  >
    <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col sm:flex-row items-center justify-between gap-4">

      <div className="flex items-center gap-2">
        <span className="w-6 h-6 rounded-md flex items-center justify-center text-[11px] font-black text-white"
              style={{ background: 'linear-gradient(135deg, #6366F1, #A855F7)' }}>
          HK
        </span>
        <span className="text-[14px] font-semibold text-white/40 tracking-tight">Hemanth Kumar</span>
      </div>

      <p className="text-[13px] text-white/20 text-center">
        © {new Date().getFullYear()} — Built with React, Vite &amp; Tailwind CSS
      </p>

      <a
        href="mailto:hemanthkumar6x@gmail.com"
        className="text-[13px] text-white/25 hover:text-white/60 transition-colors duration-200"
      >
        hemanthkumar6x@gmail.com
      </a>
    </div>
  </footer>
)

export default Footer
