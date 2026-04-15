import React from 'react'
import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'

type Project = {
  number: string
  title: string
  subtitleTags: string[]
  description: string
  stack: string[]
  link: string
}

const PROJECTS: Project[] = [
  {
    number: '01',
    title: 'Equity Research LLM Assistant',
    subtitleTags: ['Generative AI', 'RAG', 'LLMs'],
    description:
      'End-to-end Retrieval-Augmented Generation platform enabling analysts to query real-time financial news using natural language. Built to support citation-backed, decision-ready insights for research workflows.',
    stack: ['LangChain', 'FAISS', 'OpenAI GPT', 'RAG', 'Streamlit', 'Vector Databases', 'Python'],
    link: 'https://github.com/',
  },
  {
    number: '02',
    title: 'Recommendation & Retention System',
    subtitleTags: ['Machine Learning', 'E-Commerce'],
    description:
      'Built recommendation and retention workflows using collaborative filtering and behavioral analytics. Designed production-ready ML pipelines for personalized suggestions and retention-focused modeling.',
    stack: ['XGBoost', 'Scikit-learn', 'Collaborative Filtering', 'A/B Testing', 'Pandas', 'Python'],
    link: 'https://github.com/',
  },
  {
    number: '03',
    title: 'Production ML Platform — Cigna',
    subtitleTags: ['MLOps', 'Healthcare', 'GenAI'],
    description:
      'Built and deployed production ML and LLM-powered workflows with scalable pipelines, model serving, and cloud-based deployment patterns for enterprise AI applications.',
    stack: ['AWS', 'MLflow', 'FastAPI', 'Docker', 'Kubernetes', 'LLMs', 'Python'],
    link: 'https://github.com/',
  },
]

const ProjectsSection: React.FC = () => {
  return (
    <section id="work" className="bg-[#f5f7fb] border-t border-[#dfe5ef]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-24">
        <div className="flex items-start justify-between gap-6 mb-12">
          <div>
            <p className="text-[#3157c8] text-[12px] md:text-[13px] font-semibold tracking-[0.18em] uppercase mb-3">
              Selected Work
            </p>
            <h2
              className="text-[#0f234d] font-semibold tracking-tight"
              style={{ fontSize: 'clamp(48px, 7vw, 80px)', lineHeight: 0.95 }}
            >
              Projects
            </h2>
          </div>

          <a
            href="https://github.com/HemanthK7227"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-block text-[16px] text-[#8ea0be] underline underline-offset-4 hover:text-[#3157c8] transition-colors mt-10"
          >
            View all on GitHub →
          </a>
        </div>

        <div className="space-y-8">
          {PROJECTS.map((project, index) => (
            <motion.a
              key={project.number}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group block rounded-[28px] border border-[#dfe5ef] bg-[#f7f9fc] hover:bg-white transition-colors duration-300"
            >
              <div className="px-7 py-9 md:px-10 md:py-11">
                <div className="grid grid-cols-1 md:grid-cols-[96px_1fr_40px] gap-5 md:gap-6 items-start">
                  <div className="text-[56px] md:text-[64px] font-semibold leading-none text-[#d3dbe8] tracking-tight">
                    {project.number}
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.subtitleTags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center rounded-full bg-[#eef3ff] px-3 py-1 text-[12px] font-medium text-[#3157c8]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-[#2748b8] text-[30px] md:text-[42px] font-semibold tracking-tight leading-[1.05] mb-4">
                      {project.title}
                    </h3>

                    <p className="max-w-4xl text-[#6e7f9d] text-[18px] leading-[1.8] mb-6">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((item) => (
                        <span
                          key={item}
                          className="inline-flex items-center rounded-md bg-[#eef2f7] px-3 py-1.5 text-[13px] text-[#6a7a96]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex md:justify-end">
                    <ArrowUpRight
                      size={28}
                      strokeWidth={1.7}
                      className="text-[#c9d3e3] group-hover:text-[#3157c8] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-200"
                    />
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-8 md:hidden">
          <a
            href="https://github.com/HemanthK7227"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[15px] text-[#8ea0be] underline underline-offset-4 hover:text-[#3157c8] transition-colors"
          >
            View all on GitHub →
          </a>
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection