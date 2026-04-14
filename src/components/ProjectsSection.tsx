import React, { useState } from 'react'
import { ArrowUpRight, X, Github, ExternalLink } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface Project {
  num: string
  categories: string[]
  title: string
  description: string
  tags: string[]
  github: string
  live?: string
}

const PROJECTS: Project[] = [
  {
    num: '01',
    categories: ['Generative AI', 'LLMs', 'RAG'],
    title: 'Equity Research LLM Assistant',
    description:
      'End-to-end Retrieval-Augmented Generation platform enabling analysts to query real-time financial news using natural language. Built with LangChain, FAISS vector store, and OpenAI GPT — delivering citation-backed, decision-ready insights for equity research teams.',
    tags: ['LangChain', 'FAISS', 'OpenAI GPT', 'RAG', 'Streamlit', 'Vector Databases', 'Semantic Search', 'Python'],
    github: 'https://github.com/HemanthK7227',
  },
  {
    num: '02',
    categories: ['Machine Learning', 'E-Commerce'],
    title: 'Recommendation & Retention System',
    description:
      'Built recommendation systems at Lenskart using collaborative filtering and behavioral analytics across 100K+ users. Developed ML models for customer retention and demand forecasting using Scikit-learn and XGBoost, backed by end-to-end automated ML pipelines.',
    tags: ['XGBoost', 'Scikit-learn', 'Collaborative Filtering', 'A/B Testing', 'Pandas', 'Python', 'Feature Engineering'],
    github: 'https://github.com/HemanthK7227',
  },
  {
    num: '03',
    categories: ['MLOps', 'Healthcare', 'GenAI'],
    title: 'Production ML Platform — Cigna',
    description:
      'Built and deployed LLM-powered applications with RAG pipelines on AWS at Cigna Healthcare. Implemented MLOps pipelines using MLflow for experiment tracking, model versioning, and automated retraining. Optimized inference with ONNX Runtime and TensorRT for real-time workloads.',
    tags: ['AWS SageMaker', 'MLflow', 'FastAPI', 'LangChain', 'Docker', 'ONNX Runtime', 'TensorRT', 'Lambda'],
    github: 'https://github.com/HemanthK7227',
  },
]

const ProjectsSection: React.FC = () => {
  const [active, setActive] = useState<Project | null>(null)

  return (
    <section id="work" className="bg-cream border-b border-border py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="flex justify-between items-end mb-14">
          <div>
            <p className="text-[11px] tracking-[0.16em] uppercase text-[#888] mb-3 font-normal">
              Selected work
            </p>
            <h2
              className="font-serif font-black text-[#111] leading-none tracking-tight"
              style={{ fontSize: 'clamp(36px, 5vw, 56px)' }}
            >
              Projects
            </h2>
          </div>
          <a
            href="https://github.com/HemanthK7227"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block text-sm text-[#888] underline underline-offset-4
                       hover:text-[#111] transition-colors"
          >
            View all on GitHub →
          </a>
        </div>

        {/* List */}
        <div>
          {PROJECTS.map((p, i) => (
            <motion.article
              key={p.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setActive(p)}
              className="group grid grid-cols-[64px_1fr] md:grid-cols-[80px_1fr]
                         gap-0 border-t border-border py-10 cursor-pointer"
            >
              <span
                className="font-serif font-black text-[#e8e5e0] leading-none pt-1
                           text-[44px] md:text-[52px] group-hover:text-[#ddd] transition-colors select-none"
              >
                {p.num}
              </span>

              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.categories.map(c => (
                    <span key={c}
                      className="text-[11px] tracking-[0.1em] uppercase text-[#888]
                                 border border-[#e0ddd8] px-2.5 py-1"
                    >
                      {c}
                    </span>
                  ))}
                </div>

                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3
                    className="font-serif font-bold text-[#111] leading-snug tracking-tight
                               group-hover:underline underline-offset-4"
                    style={{ fontSize: 'clamp(20px, 3vw, 28px)' }}
                  >
                    {p.title}
                  </h3>
                  <ArrowUpRight
                    size={20}
                    className="text-[#bbb] group-hover:text-[#111] shrink-0 mt-1
                               transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </div>

                <p className="text-sm text-[#666] leading-relaxed font-light max-w-2xl mb-5">
                  {p.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {p.tags.map(t => (
                    <span key={t}
                      className="text-[11px] bg-[#f0ede8] text-[#777] px-2.5 py-1 tracking-wide"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
          <div className="border-t border-border" />
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
            style={{ background: 'rgba(0,0,0,0.55)' }}
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 16 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              onClick={e => e.stopPropagation()}
              className="bg-cream w-full max-w-xl border border-border overflow-hidden"
            >
              <div className="flex justify-between items-center px-7 py-5 border-b border-border">
                <div className="flex flex-wrap gap-2">
                  {active.categories.map(c => (
                    <span key={c}
                      className="text-[11px] tracking-[0.1em] uppercase text-[#888]
                                 border border-[#e0ddd8] px-2.5 py-1"
                    >
                      {c}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => setActive(null)}
                  className="text-[#aaa] hover:text-[#111] transition-colors ml-4"
                  aria-label="Close"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="px-7 py-7">
                <h3 className="font-serif font-bold text-[#111] text-2xl leading-snug tracking-tight mb-4">
                  {active.title}
                </h3>
                <p className="text-sm text-[#666] leading-relaxed font-light mb-6">
                  {active.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {active.tags.map(t => (
                    <span key={t}
                      className="text-[11px] bg-[#f0ede8] text-[#777] px-2.5 py-1 tracking-wide"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="border-t border-border pt-6 flex gap-3 flex-wrap">
                  <a
                    href={active.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm border border-[#bbb]
                               text-[#111] px-5 py-2.5 hover:border-[#111] transition-colors tracking-wide"
                  >
                    <Github size={13} /> Source code
                  </a>
                  {active.live && (
                    <a
                      href={active.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm bg-[#111] text-cream
                                 px-5 py-2.5 hover:bg-[#333] transition-colors tracking-wide"
                    >
                      <ExternalLink size={13} /> Live demo
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
