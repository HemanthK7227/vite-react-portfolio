import React, { FC, useRef, useEffect } from 'react'
import { Calendar } from 'lucide-react'
import { motion } from 'framer-motion'

type Job = {
  company: string
  location: string
  role: string
  period: string
  current: boolean
  bullets: string[]
}

const JOBS: Job[] = [
  {
    company: 'BNY', location: 'USA', role: 'Machine Learning Engineer',
    period: 'August 2024 – Present', current: true,
    bullets: [
      'Developed RAG-based LLM applications using LangChain, FAISS, and Python to enable intelligent search across 50K+ enterprise documents.',
      'Built multi-agent AI workflows for query orchestration and validation, improving response accuracy and reducing hallucinations.',
      'Developed FastAPI-based inference services for deploying ML/LLM models, supporting 1,000+ daily requests with low-latency performance.',
      'Implemented MLOps workflows with MLflow, CI/CD, and model monitoring, reducing deployment and experimentation cycles by 30%.',
      'Optimized LLM performance through prompt engineering and retrieval tuning, reducing response latency by 40%.',
    ],
  },
  {
    company: 'Abbott', location: 'India', role: 'Data Scientist',
    period: 'February 2020 – July 2023', current: false,
    bullets: [
      'Developed predictive models using Python and Scikit-learn to forecast patient trends and product demand, reducing excess inventory by 15%.',
      'Performed statistical analysis and hypothesis testing to identify key drivers of patient and operational outcomes.',
      'Designed and executed A/B tests for pricing and marketing initiatives, improving conversion rates and forecasting accuracy by 12%.',
      'Built scalable data pipelines and automated data validation using Python, SQL, and Snowflake, reducing data discrepancies by 40%.',
    ],
  },
  {
    company: 'Mercer University', location: 'USA', role: 'Graduate — MS Business Analytics',
    period: 'August 2023 – December 2024', current: false,
    bullets: [
      'Master of Science in Business Analytics with focus on ML, statistical modeling, and data-driven decision making.',
      'Coordinated with faculty and maintained academic data systems supporting research and course delivery.',
    ],
  },
]

const ExpCard: FC<Job & { index: number }> = ({ company, location, role, period, current, bullets, index }) => {
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
      className={`relative group bg-white border-2 rounded-xl p-6 transition-all duration-300
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
