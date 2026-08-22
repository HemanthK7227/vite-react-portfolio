import React from 'react'
import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'

type Project = {
  number: string
  title: string
  subtitleTags: string[]
  description: string
  stack: StackItem[]
  link: string
}

type StackItem = {
  name: string
  color: string   // text colour
  bg: string      // background
  border: string  // border colour
}

/* Tech brand colours */
const tech = (name: string, color: string, bg: string, border: string): StackItem =>
  ({ name, color, bg, border })

const PY   = tech('Python',       '#60A5FA', 'rgba(59,130,246,0.12)',  'rgba(59,130,246,0.25)')
const API  = tech('FastAPI',      '#34D399', 'rgba(16,185,129,0.12)',  'rgba(16,185,129,0.25)')
const LG   = tech('LangGraph',   '#A78BFA', 'rgba(99,102,241,0.12)',  'rgba(99,102,241,0.25)')
const LC   = tech('LangChain',   '#818CF8', 'rgba(99,102,241,0.10)',  'rgba(99,102,241,0.22)')
const FAISS= tech('FAISS',       '#C4B5FD', 'rgba(167,139,250,0.12)', 'rgba(167,139,250,0.25)')
const TAV  = tech('Tavily',      '#7C3AED', 'rgba(124,58,237,0.15)',  'rgba(124,58,237,0.28)')
const RAG  = tech('RAG',         '#E879F9', 'rgba(168,85,247,0.12)',  'rgba(168,85,247,0.25)')
const LLM  = tech('LLMs',        '#F472B6', 'rgba(236,72,153,0.12)',  'rgba(236,72,153,0.25)')
const VS   = tech('Vector Search','#22D3EE', 'rgba(6,182,212,0.12)',   'rgba(6,182,212,0.25)')
const NLP  = tech('NLP',          '#6EE7B7', 'rgba(16,185,129,0.10)',  'rgba(16,185,129,0.22)')
const HLT  = tech('Healthcare',   '#34D399', 'rgba(16,185,129,0.12)',  'rgba(16,185,129,0.25)')
const TF   = tech('TensorFlow',  '#FB923C', 'rgba(249,115,22,0.12)',  'rgba(249,115,22,0.25)')
const LSTM = tech('LSTM',         '#F87171', 'rgba(239,68,68,0.12)',   'rgba(239,68,68,0.25)')
const PD   = tech('Pandas',       '#10B981', 'rgba(16,185,129,0.10)',  'rgba(16,185,129,0.22)')
const TS   = tech('Time Series',  '#FBBF24', 'rgba(245,158,11,0.12)',  'rgba(245,158,11,0.25)')
const SK   = tech('Scikit-learn', '#F59E0B', 'rgba(245,158,11,0.10)',  'rgba(245,158,11,0.22)')
const OPT  = tech('Optimization', '#2DD4BF', 'rgba(20,184,166,0.12)',  'rgba(20,184,166,0.25)')
const DA   = tech('Data Analysis','#93C5FD', 'rgba(59,130,246,0.10)',  'rgba(59,130,246,0.22)')
const ML   = tech('Machine Learning','#818CF8','rgba(99,102,241,0.10)','rgba(99,102,241,0.22)')
const VIZ  = tech('Visualization','#A78BFA', 'rgba(167,139,250,0.10)','rgba(167,139,250,0.22)')
const ECOM = tech('E-commerce',   '#FB923C', 'rgba(249,115,22,0.12)',  'rgba(249,115,22,0.25)')
const LOG  = tech('Logistics',    '#38BDF8', 'rgba(56,189,248,0.12)',  'rgba(56,189,248,0.25)')

const PROJECTS: Project[] = [
  {
    number: '01',
    title: 'Multi-Agent RAG Research System',
    subtitleTags: ['Generative AI', 'RAG', 'LangGraph'],
    description:
      'Built a multi-agent retrieval and QA pipeline with LangGraph, FastAPI, FAISS, and Tavily search to deliver validated, citation-aware answers from enterprise content.',
    stack: [LG, API, FAISS, TAV, PY, RAG, LLM],
    link: 'https://github.com/HemanthK7227/multi-agent-rag-langgraph',
  },
  {
    number: '02',
    title: 'E-Commerce RAG Recommender',
    subtitleTags: ['Recommendation', 'RAG', 'E-commerce'],
    description:
      'Designed an RAG-powered product recommender for e-commerce search, improving relevance by combining retrieval with generative ranking and contextual product insights.',
    stack: [PY, RAG, LLM, VS, API, ECOM],
    link: 'https://github.com/HemanthK7227/ecom-rag-recommender',
  },
  {
    number: '03',
    title: 'Healthcare RAG QA Assistant',
    subtitleTags: ['Healthcare', 'RAG', 'QA'],
    description:
      'Created a healthcare question-answering assistant that retrieves clinical knowledge and generates concise responses from medical documents using retrieval-augmented generation.',
    stack: [PY, RAG, LLM, API, HLT, NLP],
    link: 'https://github.com/HemanthK7227/healthcare-rag-qa',
  },
  {
    number: '04',
    title: 'Stock Market Analysis & Prediction',
    subtitleTags: ['Finance', 'Time Series', 'ML'],
    description:
      'Developed stock forecasting models using sequence learning and technical indicators to predict market behavior and generate actionable investment insights.',
    stack: [PY, TF, LSTM, PD, TS],
    link: 'https://github.com/HemanthK7227/Stock-Market-Analysis-and-Prediction',
  },
  {
    number: '05',
    title: 'Supply Chain Optimization',
    subtitleTags: ['Logistics', 'Optimization', 'Analytics'],
    description:
      'Optimized shipment pricing and supply chain routing through analytics-driven modeling, reducing costs and improving operational efficiency across transportation networks.',
    stack: [PY, OPT, LOG, DA, ML],
    link: 'https://github.com/HemanthK7227/Optimizing-Supply-Chain-Using-Shipment-Pricing-Data',
  },
  {
    number: '06',
    title: 'Traffic Accident Analysis & ML',
    subtitleTags: ['Safety', 'ML', 'Data Science'],
    description:
      'Conducted traffic accident analytics and built predictive models to identify high-risk conditions and support safer road planning and response strategies.',
    stack: [PY, SK, DA, VIZ, ML],
    link: 'https://github.com/HemanthK7227/Traffic-Accidents-Analysis-and-ML',
  },
]

/* Tag colour map for subtitle tags */
const TAG_STYLE: Record<string, string> = {
  'Generative AI': 'from-indigo-500/15 to-violet-500/8 border-indigo-500/22 text-indigo-300',
  'RAG':           'from-violet-500/15 to-purple-500/8 border-violet-500/22 text-violet-300',
  'LangGraph':     'from-blue-500/15 to-indigo-500/8 border-blue-500/22 text-blue-300',
  'Healthcare':    'from-emerald-500/15 to-teal-500/8 border-emerald-500/22 text-emerald-300',
  'Finance':       'from-amber-500/15 to-yellow-500/8 border-amber-500/22 text-amber-300',
  'Logistics':     'from-sky-500/15 to-cyan-500/8 border-sky-500/22 text-sky-300',
  'Safety':        'from-rose-500/15 to-pink-500/8 border-rose-500/22 text-rose-300',
}
const DEFAULT_TAG = 'from-white/5 to-white/2 border-white/10 text-white/45'

/* Inline GitHub SVG */
const GithubIcon: React.FC<{ size?: number }> = ({ size = 15 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483
             0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466
             -.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832
             .092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688
             -.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115
             2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595
             1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012
             2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
)

const ProjectsSection: React.FC = () => (
  <section id="work" className="bg-[#06090F]" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
    <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">

      {/* Header */}
      <div className="flex items-end justify-between gap-6 mb-16">
        <div>
          <p className="text-[12px] font-bold tracking-[0.2em] uppercase text-indigo-400 mb-4">
            Selected Work
          </p>
          <h2
            className="font-extrabold tracking-tight text-white"
            style={{ fontSize: 'clamp(44px, 6.5vw, 76px)', lineHeight: 0.93 }}
          >
            Projects
          </h2>
        </div>
        <a
          href="https://github.com/HemanthK7227"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 text-[13px] text-white/35
                     hover:text-white/70 transition-colors duration-200 group"
        >
          <GithubIcon size={15} />
          All repos on GitHub
          <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </div>

      {/* Project list */}
      <div className="space-y-3">
        {PROJECTS.map((project, index) => (
          <motion.a
            key={project.number}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
            className="group relative block rounded-2xl overflow-hidden cursor-pointer transition-all duration-300"
            style={{
              background: 'rgba(255,255,255,0.022)',
              border: '1px solid rgba(255,255,255,0.055)',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement
              el.style.background = 'rgba(255,255,255,0.042)'
              el.style.borderColor = 'rgba(99,102,241,0.22)'
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement
              el.style.background = 'rgba(255,255,255,0.022)'
              el.style.borderColor = 'rgba(255,255,255,0.055)'
            }}
          >
            {/* Left gradient accent bar */}
            <div
              className="absolute left-0 top-0 bottom-0 w-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: 'linear-gradient(to bottom, #6366F1, #A855F7, #38BDF8)' }}
            />

            <div className="pl-6 pr-6 py-8 md:pl-10 md:pr-10 md:py-10">
              <div className="grid grid-cols-1 md:grid-cols-[80px_1fr_44px] gap-4 md:gap-7 items-start">

                {/* Number */}
                <div
                  className="text-[52px] md:text-[62px] font-black leading-none tracking-tight select-none transition-colors duration-300"
                  style={{ color: 'rgba(255,255,255,0.05)' }}
                >
                  {project.number}
                </div>

                {/* Content */}
                <div>
                  {/* Subtitle tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.subtitleTags.map(tag => (
                      <span
                        key={tag}
                        className={`px-2.5 py-1 rounded-md text-[11px] font-semibold tracking-wide
                                    uppercase bg-gradient-to-r border ${TAG_STYLE[tag] ?? DEFAULT_TAG}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="text-[20px] md:text-[28px] font-bold text-white/80 group-hover:text-white
                                 tracking-tight leading-[1.2] mb-3 transition-colors duration-200">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[14px] md:text-[15px] leading-[1.85] text-white/40 max-w-3xl mb-5">
                    {project.description}
                  </p>

                  {/* Tech stack — coloured pills */}
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map(item => (
                      <span
                        key={item.name}
                        className="px-3 py-1.5 rounded-full text-[12px] font-medium transition-all duration-200"
                        style={{
                          color: item.color,
                          background: item.bg,
                          border: `1px solid ${item.border}`,
                        }}
                      >
                        {item.name}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex items-start justify-end mt-0.5 shrink-0">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 group-hover:scale-110"
                    style={{
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.08)',
                    }}
                  >
                    <ArrowUpRight
                      size={17}
                      className="text-white/35 group-hover:text-white transition-colors
                                 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 duration-200"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.a>
        ))}
      </div>

      {/* Mobile GitHub link */}
      <div className="mt-10 md:hidden">
        <a
          href="https://github.com/HemanthK7227"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[14px] text-white/35 hover:text-white/70 transition-colors"
        >
          <GithubIcon size={15} />
          All repos on GitHub
        </a>
      </div>
    </div>
  </section>
)

export default ProjectsSection
