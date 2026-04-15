import React, { useRef, useEffect } from 'react'
import { Calendar } from 'lucide-react'
import { motion } from 'framer-motion'

const JOBS = [
  {
    company: 'Cigna Healthcare', location: 'USA', role: 'Machine Learning Engineer',
    period: 'March 2025 – Present', current: true,
    bullets: [
      'Built and deployed LLM-powered applications using RAG pipelines with LangChain and vector databases across enterprise systems.',
      'Developed production-grade ML services using FastAPI deployed on AWS (S3, Lambda, SageMaker) — 99.9% system availability.',
      'Implemented MLOps pipelines using MLflow for experiment tracking, model versioning, and automated retraining.',
      'Optimized model inference using ONNX Runtime and TensorRT for real-time AI applications.',
    ],
  },
  {
    company: 'Lenskart', location: 'India', role: 'Data Scientist',
    period: 'January 2020 – July 2023', current: false,
    bullets: [
      'Developed ML models using Scikit-learn and XGBoost for customer retention and demand forecasting.',
      'Built recommendation systems using collaborative filtering, increasing engagement across 100K+ users.',
      'Conducted A/B testing and statistical analysis for measurable improvements in business strategy.',
      'Designed end-to-end ML pipelines improving workflow efficiency through automation.',
    ],
  },
  {
    company: 'Mercer University', location: 'USA', role: 'Learning Technology Assistant',
    period: 'September 2023 – December 2024', current: false,
    bullets: [
      'Maintained and organized 500+ academic records, improving data accuracy across internal systems.',
      'Coordinated with 10+ faculty members to ensure timely availability of all course resources.',
    ],
  },
  {
    company: 'EPAM Systems', location: 'India', role: 'Junior Software Engineer',
    period: 'April 2018 – December 2019', current: false,
    bullets: [
      'Developed backend services and REST APIs handling thousands of daily user requests.',
      'Built data processing pipelines and automation scripts, reducing manual effort significantly.',
      'Collaborated with cross-functional teams to design scalable architectures.',
    ],
  },
]

const ExpCard: React.FC<typeof JOBS[0] & { index: number }> = ({ company, location, role, period, current, bullets, index }) => {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = cardRef.current
    if (!el) return
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect()
      const x = ((e.clientX - r.left) / r.width * 100).toFixed(1)
      const y = ((e.clientY - r.top) / r.height * 100).toFixed(1)
      el.style.background = `radial-gradient(circle at ${x}% ${y}%, #eff6ff, #fff 55%)`
    }
    const onLeave = () => { el.style.background = '' }
    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)
    return () => { el.removeEventListener('mousemove', onMove); el.removeEventListener('mouseleave', onLeave) }
  }, [])

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
      className={`relative bg-white border-2 rounded-xl p-6 transition-all duration-300
                  hover:-translate-y-1 hover:shadow-lg overflow-hidden
                  ${current ? 'border-navy-600' : 'border-slate-100 hover:border-blue-200'}`}
    >
      {/* Animated left bar */}
      <div className={`absolute top-0 left-0 w-1 transition-all duration-500 rounded-l-xl
                       ${current ? 'h-full bg-navy-600' : 'h-0 bg-navy-600 group-hover:h-full'}`} />

      <div className="pl-1">
        <p className="text-[11px] font-bold text-navy-600 tracking-[0.12em] uppercase mb-1">{company} · {location}</p>
        <p className="text-base font-bold text-navy-800 mb-1">{role}</p>
        <p className="flex items-center gap-1.5 text-xs text-slate-400 mb-4">
          <Calendar size={11} /> {period}
          {current && <span className="ml-2 text-[10px] font-semibold text-emerald-600 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">Current</span>}
        </p>
        <ul className="flex flex-col gap-2.5">
          {bullets.map((b, j) => (
            <li key={j} className="flex items-start gap-2.5 text-sm text-slate-500 leading-relaxed">
              <span className="text-navy-600 text-xs mt-0.5 shrink-0 font-bold">→</span>
              {b}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

const AboutSection: React.FC = () => (
  <section id="about" className="bg-slate-50 border-b border-slate-100 py-20">
    <div className="max-w-7xl mx-auto px-6 lg:px-10">
      <p className="text-xs font-bold text-navy-600 tracking-[0.14em] uppercase mb-2">Where I've worked</p>
      <h2 className="text-[clamp(32px,5vw,52px)] font-extrabold text-navy-800 tracking-tight leading-none mb-12">
        Experience
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {JOBS.map((job, i) => <ExpCard key={i} index={i} {...job} />)}
      </div>
    </div>
  </section>
)

export default AboutSection
