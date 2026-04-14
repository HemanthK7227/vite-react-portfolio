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
    /*
      TO WIRE UP EMAIL:
      Install emailjs: npm install @emailjs/browser
      Then replace the alert below with:
        import emailjs from '@emailjs/browser'
        emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form, 'YOUR_PUBLIC_KEY')
      Sign up free at https://www.emailjs.com
    */
    setSent(true)
    setForm({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setSent(false), 3500)
  }

  const inputCls =
    'w-full bg-white border border-[#e0ddd8] text-[#111] text-sm px-4 py-3 ' +
    'placeholder:text-[#bbb] focus:outline-none focus:border-[#111] transition-colors font-light'

  return (
    <section id="contact" className="bg-cream border-b border-border py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-[11px] tracking-[0.16em] uppercase text-[#888] mb-3 font-normal">
            Get in touch
          </p>
          <h2
            className="font-serif font-black text-[#111] leading-[0.92] tracking-tight mb-6"
            style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}
          >
            Let's work<br />
            <em className="not-italic text-[#888]">together.</em>
          </h2>
          <p className="text-[15px] text-[#666] leading-relaxed font-light mb-10 max-w-md">
            Have a project, role, or collaboration in mind? Whether it's building intelligent
            systems, optimizing inference pipelines, or shipping GenAI products — I'd love to
            connect.
          </p>

          <div className="flex flex-col gap-4 mb-10">
            <a
              href="mailto:hemanthkumar5x@gmail.com"
              className="flex items-center gap-3 group"
            >
              <div className="w-9 h-9 border border-border flex items-center justify-center
                              text-[#aaa] group-hover:border-[#bbb] group-hover:text-[#555] transition-colors">
                <Mail size={14} />
              </div>
              <span className="text-sm text-[#555] hover:text-[#111] transition-colors underline underline-offset-4">
                hemanthkumar5x@gmail.com
              </span>
            </a>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 border border-border flex items-center justify-center text-[#aaa]">
                <MapPin size={14} />
              </div>
              <span className="text-sm text-[#555]">USA</span>
            </div>
          </div>

          <div className="flex gap-3">
            {[
              { href: 'https://github.com/HemanthK7227', Icon: Github, label: 'GitHub' },
              { href: 'https://www.linkedin.com/in/hemanth-k-027457190/', Icon: Linkedin, label: 'LinkedIn' },
              { href: 'https://x.com/imhemanth_kk', Icon: Twitter, label: 'Twitter' },
            ].map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 border border-border flex items-center justify-center
                           text-[#aaa] hover:text-[#111] hover:border-[#bbb] transition-colors"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </motion.div>

        {/* RIGHT — form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {[
              { label: 'Full name', id: 'name', type: 'text', placeholder: 'John Doe' },
              { label: 'Email address', id: 'email', type: 'email', placeholder: 'john@example.com' },
              { label: 'Subject', id: 'subject', type: 'text', placeholder: 'Project collaboration' },
            ].map(f => (
              <div key={f.id}>
                <label className="block text-[11px] text-[#888] uppercase tracking-[0.12em] mb-2 font-normal">
                  {f.label}
                </label>
                <input
                  type={f.type}
                  name={f.id}
                  value={form[f.id as keyof typeof form]}
                  onChange={handleChange}
                  required
                  placeholder={f.placeholder}
                  className={inputCls}
                />
              </div>
            ))}
            <div>
              <label className="block text-[11px] text-[#888] uppercase tracking-[0.12em] mb-2 font-normal">
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Tell me about the opportunity or project..."
                className={inputCls + ' resize-none'}
              />
            </div>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-[#111] text-cream
                         text-sm py-3.5 hover:bg-[#333] transition-colors tracking-wide mt-1"
            >
              {sent ? (
                <span className="text-[#4ade80]">Message sent successfully!</span>
              ) : (
                <><Send size={13} /> Send message</>
              )}
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  )
}

export default ContactSection
