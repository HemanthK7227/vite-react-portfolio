import React from 'react'
import { Calendar, MapPin, Briefcase, GraduationCap } from 'lucide-react'
import { motion } from 'framer-motion'

type Job = {
  company: string
  companyShort: string
  companyColor: string
  companyBg: string
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
    companyShort: 'BNY',
    companyColor: '#38BDF8',
    companyBg: 'linear-gradient(135deg, #0369A1, #0284C7)',
    location: 'New York, USA',
    role: 'Machine Learning Engineer',
    period: 'Aug 2024 – Present',
    current: true,
    bullets: [
      'Architected a multi-agent RAG system using LangGraph, FAISS, and LangChain over 50K+ enterprise documents — cutting analyst research time by 60% and enabling citation-aware, validated answers at scale.',
      'Deployed 7 LLM inference services via FastAPI on AWS EKS using Helm charts and horizontal pod autoscaling — handling 1,000+ daily requests with p99 latency under 200ms across zero-downtime rolling deployments.',
      'Engineered agentic pipelines with tool-use, query orchestration, and self-validation loops — reducing hallucination rate by 35% and increasing response reliability across production deployments.',
      'Optimized retrieval and prompt pipelines (chunking, re-ranking, MMR, semantic caching) to cut LLM response latency by 40% while maintaining answer quality across diverse query types.',
      'Instrumented LLM pipelines with LangSmith for end-to-end tracing, latency profiling, and citation accuracy tracking — identified retrieval gaps that drove a 22% improvement in answer relevance scores.',
      'Analyzed 10K+ weekly search query patterns and user feedback signals to surface business insights; built Power BI dashboards adopted by 4 enterprise client teams to prioritize product roadmap decisions.',
      'Built end-to-end MLOps infrastructure using MLflow, CI/CD, and automated drift monitoring — reducing model deployment and experimentation cycles by 30%.',
      'Led end-to-end deployment of an AI search solution for 3 internal business units — scoped requirements with stakeholders, shipped a production RAG system, and trained 40+ end users; cut average document lookup time from 45 to 8 minutes.',
    ],
  },
  {
    company: 'Abbott',
    companyShort: 'ABT',
    companyColor: '#F87171',
    companyBg: 'linear-gradient(135deg, #B91C1C, #DC2626)',
    location: 'India',
    role: 'Data Scientist',
    period: 'Feb 2020 – Jul 2023',
    current: false,
    bullets: [
      'Built demand forecasting models (XGBoost, Scikit-learn, LSTM) over 3M+ patient records — reducing excess inventory by 15% and improving supply chain planning accuracy across 6 product lines.',
      'Designed and executed A/B experiments across 12 pricing and marketing initiatives, improving conversion rates and forecasting accuracy by 12%; applied hypothesis testing and Bayesian methods to surface causal insights.',
      'Applied feature engineering, EDA, and statistical modeling to identify key drivers of patient and operational outcomes — delivering data-backed recommendations that shaped product and clinical strategy.',
      'Built automated ETL pipelines across 8 heterogeneous data sources using Python, SQL, and Snowflake — cutting data discrepancy rate by 40% and reducing manual reconciliation from days to minutes.',
    ],
  },
  {
    company: 'Mercer University',
    companyShort: 'MU',
    companyColor: '#FB923C',
    companyBg: 'linear-gradient(135deg, #C2410C, #EA580C)',
    location: 'Georgia, USA',
    role: 'MS — Business Analytics',
    period: 'Aug 2023 – Dec 2024',
    current: false,
    isEdu: true,
    bullets: [
      'Master of Science in Business Analytics — coursework in ML, statistical modeling, optimization, and data-driven decision making.',
      'Coordinated with faculty and maintained academic data systems supporting research and course delivery.',
    ],
  },
]

/* Company logo badge */
const CompanyLogo: React.FC<{ job: Job }> = ({ job }) => (
  <div
    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0
               text-white text-[13px] font-black tracking-wide shadow-lg"
    style={{ background: job.companyBg }}
  >
    {job.companyShort}
  </div>
)

const AboutSection: React.FC = () => (
  <section id="about" className="bg-[#06090F]" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
    <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">

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
        <div
          className="absolute left-[27px] top-4 bottom-4 w-px hidden md:block"
          style={{ background: 'linear-gradient(to bottom, rgba(99,102,241,0.45), rgba(99,102,241,0.04))' }}
        />

        <div className="space-y-5">
          {JOBS.map((job, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex gap-7 md:gap-10"
            >
              {/* Timeline dot */}
              <div className="hidden md:flex flex-col items-center shrink-0 w-14 pt-7">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center border-2 z-10"
                  style={job.current ? {
                    background: 'linear-gradient(135deg, #6366F1, #7C3AED)',
                    borderColor: 'rgba(99,102,241,0.5)',
                    boxShadow: '0 0 16px rgba(99,102,241,0.45)',
                  } : {
                    background: '#0A0F1C',
                    borderColor: 'rgba(255,255,255,0.1)',
                  }}
                >
                  {job.isEdu
                    ? <GraduationCap size={14} className={job.current ? 'text-white' : 'text-white/35'} />
                    : <Briefcase size={14} className={job.current ? 'text-white' : 'text-white/35'} />
                  }
                </div>
              </div>

              {/* Card */}
              <div
                className="flex-1 rounded-2xl p-7 md:p-9 transition-all duration-300"
                style={{
                  background: job.current
                    ? 'linear-gradient(135deg, rgba(99,102,241,0.07), rgba(124,58,237,0.03))'
                    : 'rgba(255,255,255,0.022)',
                  border: job.current
                    ? '1px solid rgba(99,102,241,0.22)'
                    : '1px solid rgba(255,255,255,0.055)',
                }}
              >
                {/* Card header */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div className="flex items-start gap-4">
                    <CompanyLogo job={job} />
                    <div>
                      <div className="flex flex-wrap items-center gap-2.5 mb-1">
                        <span className="text-[14px] font-bold tracking-wide" style={{ color: job.companyColor }}>
                          {job.company}
                        </span>
                        <span className="flex items-center gap-1 text-[11px] text-white/28">
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
                      <h3 className="text-[18px] md:text-[20px] font-bold text-white leading-snug">
                        {job.role}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-[12px] text-white/28 shrink-0">
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
