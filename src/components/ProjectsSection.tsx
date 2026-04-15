import React, { useState } from 'react'
import { ArrowUpRight, X, Github } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface Project { num: string; categories: string[]; title: string; description: string; tags: string[]; github: string; live?: string }

const PROJECTS: Project[] = [
  {
    num: '01', categories: ['Generative AI', 'RAG', 'LLMs'],
    title: 'Equity Research LLM Assistant',
    description: 'End-to-end Retrieval-Augmented Generation platform enabling analysts to query real-time financial news using natural language. Built with LangChain, FAISS vector store, and OpenAI GPT — delivering citation-backed, decision-ready insights for equity research teams.',
    tags: ['LangChain', 'FAISS', 'OpenAI GPT', 'RAG', 'Streamlit', 'Vector Databases', 'Python'],
    github: 'https://github.com/HemanthK7227',
  },
  {
    num: '02', categories: ['Machine Learning', 'E-Commerce'],
    title: 'Recommendation & Retention System',
    description: 'Built recommendation systems at Lenskart using collaborative filtering and behavioral analytics across 100K+ users. Developed ML models for customer retention and demand forecasting using Scikit-learn and XGBoost, backed by end-to-end automated ML pipelines.',
    tags: ['XGBoost', 'Scikit-learn', 'Collaborative Filtering', 'A/B Testing', 'Pandas', 'Python'],
    github: 'https://github.com/HemanthK7227',
  },
  {
    num: '03', categories: ['MLOps', 'Healthcare', 'GenAI'],
    title: 'Production ML Platform — Cigna',
    description: 'Built and deployed LLM-powered applications with RAG pipelines on AWS at Cigna Healthcare. Implemented MLOps pipelines using MLflow for experiment tracking, model versioning, and automated retraining. Optimized inference with ONNX Runtime and TensorRT.',
    tags: ['AWS SageMaker', 'MLflow', 'FastAPI', 'LangChain', 'Docker', 'ONNX Runtime', 'TensorRT'],
    github: 'https://github.com/HemanthK7227',
  },
]

const ProjectsSection: React.FC = () => {
  const [active, setActive] = useState<Project | null>(null)

  return (
    <section id="work" className="bg-slate-50 border-b border-slate-100 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="flex justify-between items-end mb-12">
          <div>
            <p className="text-xs font-bold text-navy-600 tracking-[0.14em] uppercase mb-2">Selected work</p>
            <h2 className="text-[clamp(32px,5vw,52px)] font-extrabold text-navy-800 tracking-tight leading-none">
              Projects
            </h2>
          </div>
          <a href="https://github.com/HemanthK7227" target="_blank" rel="noopener noreferrer"
            className="hidden md:block text-sm text-slate-400 hover:text-navy-600 transition-colors underline underline-offset-4">
            View all on GitHub →
          </a>
        </div>

        <div>
          {PROJECTS.map((p, i) => (
            <motion.article
              key={p.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setActive(p)}
              className="group grid grid-cols-[56px_1fr_40px] md:grid-cols-[72px_1fr_40px]
                         border-t border-slate-200 py-8 cursor-pointer
                         transition-all duration-200 hover:pl-2 rounded-lg"
            >
              <span className="text-[40px] md:text-[52px] font-extrabold text-slate-200
                               leading-none pt-1 group-hover:text-slate-300 transition-colors select-none">
                {p.num}
              </span>
              <div>
                <div className="flex flex-wrap gap-2 mb-3">
                  {p.categories.map(c => (
                    <span key={c} className="text-[11px] font-semibold text-navy-600 bg-blue-50
                                             px-2.5 py-1 rounded-full tracking-wide">
                      {c}
                    </span>
                  ))}
                </div>
                <h3 className="text-[clamp(18px,2.5vw,24px)] font-bold text-navy-800 leading-snug
                               tracking-tight mb-2 group-hover:text-navy-600 transition-colors">
                  {p.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed max-w-2xl mb-4 font-normal">
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map(t => (
                    <span key={t} className="text-[11px] bg-slate-100 text-slate-500 px-2 py-1 rounded font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="text-xl text-slate-300 group-hover:text-navy-600 pt-1 text-right
                              transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                ↗
              </div>
            </motion.article>
          ))}
          <div className="border-t border-slate-200" />
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: 'rgba(15,31,61,0.6)', backdropFilter: 'blur(4px)' }}
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 16 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              onClick={e => e.stopPropagation()}
              className="bg-white w-full max-w-xl rounded-2xl overflow-hidden shadow-2xl"
            >
              <div className="flex justify-between items-center px-7 py-5 border-b border-slate-100">
                <div className="flex flex-wrap gap-2">
                  {active.categories.map(c => (
                    <span key={c} className="text-[11px] font-semibold text-navy-600 bg-blue-50 px-2.5 py-1 rounded-full">
                      {c}
                    </span>
                  ))}
                </div>
                <button onClick={() => setActive(null)}
                  className="text-slate-300 hover:text-navy-600 transition-colors ml-4">
                  <X size={18} />
                </button>
              </div>
              <div className="px-7 py-7">
                <h3 className="text-xl font-bold text-navy-800 mb-3 leading-snug">{active.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-5">{active.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-7">
                  {active.tags.map(t => (
                    <span key={t} className="text-[11px] bg-slate-100 text-slate-500 px-2.5 py-1 rounded font-medium">{t}</span>
                  ))}
                </div>
                <div className="border-t border-slate-100 pt-5 flex gap-3">
                  <a href={active.github} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm border-2 border-slate-200
                               text-navy-800 px-5 py-2.5 rounded-lg font-semibold
                               hover:border-navy-600 hover:text-navy-600 transition-all">
                    <Github size={14} /> Source code
                  </a>
                  {active.live && (
                    <a href={active.live} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm bg-navy-600 text-white
                                 px-5 py-2.5 rounded-lg font-semibold hover:bg-navy-700 transition-all">
                      <ArrowUpRight size={14} /> Live demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default ProjectsSection
