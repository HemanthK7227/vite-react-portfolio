import React, { useState } from 'react'
import { Send, Github, Linkedin, Twitter, Mail, MapPin } from 'lucide-react'
import { motion } from 'framer-motion'

const ContactSection: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
    setForm({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setSent(false), 3500)
  }

  const inp = `w-full bg-white/10 border border-white/15 text-white text-sm px-4 py-3 rounded-xl
               placeholder:text-white/25 focus:outline-none focus:border-blue-400 transition-colors font-normal`

  return (
    <section id="contact" className="bg-navy-800 py-20 relative overflow-hidden">
      {/* Floating orb */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle,rgba(59,130,246,0.12),transparent 70%)', animation: 'float 10s ease-in-out infinite' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-xs font-bold text-blue-400 tracking-[0.14em] uppercase mb-3">Get in touch</p>
          <h2 className="text-[clamp(36px,5vw,60px)] font-extrabold text-white leading-[0.92] tracking-tight mb-6">
            Let's work<br />
            <span className="text-blue-400">together.</span>
          </h2>
          <p className="text-[15px] text-white/45 leading-relaxed max-w-md mb-10 font-normal">
            Have a project, role, or collaboration in mind? Whether it's building intelligent
            systems or shipping GenAI products — I'd love to connect.
          </p>

          <div className="flex flex-col gap-4 mb-10">
            <a href="mailto:hemanthkumar5x@gmail.com"
              className="flex items-center gap-3 group">
              <div className="w-10 h-10 border border-white/10 rounded-xl flex items-center justify-center
                              text-white/40 group-hover:border-blue-400 group-hover:text-blue-400 transition-all">
                <Mail size={15} />
              </div>
              <span className="text-sm text-white/40 group-hover:text-white transition-colors underline underline-offset-4">
                hemanthkumar5x@gmail.com
              </span>
            </a>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 border border-white/10 rounded-xl flex items-center justify-center text-white/40">
                <MapPin size={15} />
              </div>
              <span className="text-sm text-white/40">Atlanta, Georgia, USA</span>
            </div>
          </div>

          <div className="flex gap-3">
            {[
              { href: 'https://github.com/HemanthK7227', Icon: Github, label: 'GitHub' },
              { href: 'https://www.linkedin.com/in/hemanth-k-027457190/', Icon: Linkedin, label: 'LinkedIn' },
              { href: 'https://x.com/imhemanth_kk', Icon: Twitter, label: 'Twitter' },
            ].map(({ href, Icon, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                className="w-11 h-11 border border-white/10 rounded-xl flex items-center justify-center
                           text-white/40 hover:text-blue-400 hover:border-blue-400 transition-all hover:-translate-y-0.5">
                <Icon size={16} />
              </a>
            ))}
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            {[
              { label: 'Full name', id: 'name', type: 'text', placeholder: 'John Doe' },
              { label: 'Email address', id: 'email', type: 'email', placeholder: 'john@example.com' },
              { label: 'Subject', id: 'subject', type: 'text', placeholder: 'Project collaboration' },
            ].map(f => (
              <div key={f.id}>
                <label className="block text-[11px] text-white/35 uppercase tracking-[0.1em] mb-1.5 font-semibold">
                  {f.label}
                </label>
                <input
                  type={f.type} name={f.id}
                  value={form[f.id as keyof typeof form]}
                  onChange={handleChange} required placeholder={f.placeholder}
                  className={inp}
                />
              </div>
            ))}
            <div>
              <label className="block text-[11px] text-white/35 uppercase tracking-[0.1em] mb-1.5 font-semibold">
                Message
              </label>
              <textarea
                name="message" value={form.message} onChange={handleChange}
                required rows={5} placeholder="Tell me about the opportunity..."
                className={inp + ' resize-none'}
              />
            </div>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-navy-600 text-white
                         text-sm font-semibold py-3.5 rounded-xl hover:bg-navy-500
                         transition-all hover:-translate-y-0.5 hover:shadow-lg mt-1"
            >
              {sent ? <span className="text-emerald-400">Message sent successfully!</span>
                : <><Send size={14} /> Send message</>}
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  )
}

export default ContactSection
