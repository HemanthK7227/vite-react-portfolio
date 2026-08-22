import React from 'react'
import { Calendar, MapPin, Briefcase, GraduationCap } from 'lucide-react'
import { motion } from 'framer-motion'

type Job = {
  company: string
  location: string
  role: string
  period: string
  current: boolean
  isEdu?: boolean
  bullets: string[]
}

const JOBS: Job[] = [
  {
    company: 'BNY',
    location: 'USA',
    role: 'Machine Learning Engineer',
    period: 'August 2024 – Present',
    current: true,
    bullets: [
      'Developed RAG-based LLM applications using LangChain, FAISS, and Python to enable intelligent search across 50K+ enterprise documents.',
      'Built multi-agent AI workflows for query orchestration and validation, improving response accuracy and reducing hallucinations.',
      'Developed FastAPI-based inference services for deploying ML/LLM models, supporting 1,000+ daily requests with low-latency performance.',
      'Implemented MLOps workflows with MLflow, CI/CD, and model monitoring, reducing deployment and experimentation cycles by 30%.',
      'Optimized LLM performance through prompt engineering and retrieval tuning, reducing response latency by 40%.',
    ],
  },
  {
    company: 'Abbott',
    location: 'India',
    role: 'Data Scientist',
    period: 'February 2020 – July 2023',
    current: false,
    bullets: [
      'Developed predictive models using Python and Scikit-learn to forecast patient trends and product demand, reducing excess inventory by 15%.',
      'Performed statistical analysis and hypothesis testing to identify key drivers of patient and operational outcomes.',
      'Designed and executed A/B tests for pricing and marketing initiatives, improving conversion rates and forecasting accuracy by 12%.',
      'Built scalable data pipelines and automated data validation using Python, SQL, and Snowflake, reducing data discrepancies by 40%.',
    ],
  },
  {
    company: 'Mercer University',
    location: 'USA',
    role: 'MS Business Analytics',
    period: 'August 2023 – December 2024',
    current: false,
    isEdu: true,
    bullets: [
      'Master of Science in Business Analytics with focus on ML, statistical modeling, and data-driven decision making.',
      'Coordinated with faculty and maintained academic data systems supporting research and course delivery.',
    ],
  },
]

const AboutSection: React.FC = () => (
  <section id="about" className="bg-[#06090F]" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
    <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">

      {/* Header */}
      <p className="text-[12px] font-bold tracking-[0.2em] uppercase text-indigo-400 mb-4">
        Career Path
      </p>
      <h2
        className="font-extrabold tracking-tight text-white mb-16"
        style={{ fontSize: 'clamp(44px, 6.5vw, 76px)', lineHeight: 0.93 }}
      >
        Experience
      </h2>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical guide line */}
        <div className="absolute left-[27px] top-4 bottom-4 w-px hidden md:block"
             style={{ background: 'linear-gradient(to bottom, rgba(99,102,241,0.4), rgba(99,102,241,0.05))' }} />

        <div className="space-y-5">
          {JOBS.map((job, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex gap-7 md:gap-10"
            >
              {/* Timeline dot */}
              <div className="hidden md:flex flex-col items-center shrink-0 w-14 pt-8">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center border-2 z-10
                              transition-all duration-300
                              ${job.current
                                ? 'border-indigo-500'
                                : 'border-white/10 bg-[#0A0F1C]'}`}
                  style={job.current ? {
                    background: 'linear-gradient(135deg, #6366F1, #7C3AED)',
                    boxShadow: '0 0 16px rgba(99,102,241,0.45)',
                  } : {}}
                >
                  {job.isEdu
                    ? <GraduationCap size={14} className={job.current ? 'text-white' : 'text-white/35'} />
                    : <Briefcase size={14} className={job.current ? 'text-white' : 'text-white/35'} />
                  }
                </div>
              </div>

              {/* Card */}
              <div
                className="flex-1 rounded-2xl p-7 md:p-9 transition-all duration-300 group"
                style={{
                  background: job.current
                    ? 'linear-gradient(135deg, rgba(99,102,241,0.07), rgba(124,58,237,0.04))'
                    : 'rgba(255,255,255,0.022)',
                  border: job.current
                    ? '1px solid rgba(99,102,241,0.22)'
                    : '1px solid rgba(255,255,255,0.055)',
                }}
              >
                {/* Card header */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div>
                    <div className="flex flex-wrap items-center gap-2.5 mb-1.5">
                      <span
                        className="text-[13px] font-bold tracking-wide"
                        style={{
                          background: job.current
                            ? 'linear-gradient(135deg, #818CF8, #C4B5FD)'
                            : 'none',
                          WebkitBackgroundClip: job.current ? 'text' : 'none',
                          backgroundClip: job.current ? 'text' : 'none',
                          WebkitTextFillColor: job.current ? 'transparent' : 'rgba(255,255,255,0.45)',
                          color: job.current ? 'transparent' : 'rgba(255,255,255,0.45)',
                        }}
                      >
                        {job.company}
                      </span>

                      <span className="flex items-center gap-1 text-[11px] text-white/25">
                        <MapPin size={10} />
                        {job.location}
                      </span>

                      {job.current && (
                        <span
                          className="inline-flex items-center gap-1.5 text-[10px] font-bold
                                     tracking-widest uppercase px-2.5 py-1 rounded-full"
                          style={{
                            color: '#34D399',
                            background: 'rgba(52,211,153,0.1)',
                            border: '1px solid rgba(52,211,153,0.22)',
                          }}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          Current
                        </span>
                      )}
                    </div>

                    <h3 className="text-[18px] md:text-[21px] font-bold text-white leading-snug">
                      {job.role}
                    </h3>
                  </div>

                  <div className="flex items-center gap-1.5 text-[12px] text-white/25 shrink-0">
                    <Calendar size={12} />
                    {job.period}
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px mb-6" style={{ background: 'rgba(255,255,255,0.05)' }} />

                {/* Bullet points */}
                <ul className="space-y-3">
                  {job.bullets.map((b, j) => (
                    <li key={j} className="flex items-start gap-3 text-[14px] text-white/45 leading-[1.75]">
                      <span
                        className="mt-[7px] w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ background: job.current ? 'rgba(129,140,248,0.7)' : 'rgba(255,255,255,0.2)' }}
                      />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
)

export default AboutSection
