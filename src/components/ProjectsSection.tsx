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
    title: 'Multi-Agent RAG Research System',
    subtitleTags: ['Generative AI', 'RAG', 'LangGraph'],
    description:
      'Built a multi-agent retrieval and QA pipeline with LangGraph, FastAPI, FAISS, and Tavily search to deliver validated, citation-aware answers from enterprise content.',
    stack: ['LangGraph', 'FastAPI', 'FAISS', 'Tavily', 'Python', 'RAG', 'LLMs'],
    link: 'https://github.com/HemanthK7227/multi-agent-rag-langgraph',
  },
  {
    number: '02',
    title: 'E-Commerce RAG Recommender',
    subtitleTags: ['Recommendation', 'RAG', 'E-commerce'],
    description:
      'Designed an RAG-powered product recommender for e-commerce search, improving relevance by combining retrieval with generative ranking and contextual product insights.',
    stack: ['Python', 'RAG', 'LLMs', 'Vector Search', 'FastAPI', 'E-commerce'],
    link: 'https://github.com/HemanthK7227/ecom-rag-recommender',
  },
  {
    number: '03',
    title: 'Healthcare RAG QA Assistant',
    subtitleTags: ['Healthcare', 'RAG', 'QA'],
    description:
      'Created a healthcare question-answering assistant that retrieves clinical knowledge and generates concise responses from medical documents using retrieval-augmented generation.',
    stack: ['Python', 'RAG', 'LLMs', 'FastAPI', 'Healthcare', 'NLP'],
    link: 'https://github.com/HemanthK7227/healthcare-rag-qa',
  },
  {
    number: '04',
    title: 'Stock Market Analysis & Prediction',
    subtitleTags: ['Finance', 'Time Series', 'ML'],
    description:
      'Developed stock forecasting models using sequence learning and technical indicators to predict market behavior and generate actionable investment insights.',
    stack: ['Python', 'TensorFlow', 'LSTM', 'Pandas', 'Time Series'],
    link: 'https://github.com/HemanthK7227/Stock-Market-Analysis-and-Prediction',
  },
  {
    number: '05',
    title: 'Supply Chain Optimization',
    subtitleTags: ['Logistics', 'Optimization', 'Analytics'],
    description:
      'Optimized shipment pricing and supply chain routing through analytics-driven modeling, reducing costs and improving operational efficiency across transportation networks.',
    stack: ['Python', 'Optimization', 'Logistics', 'Data Analysis', 'Machine Learning'],
    link: 'https://github.com/HemanthK7227/Optimizing-Supply-Chain-Using-Shipment-Pricing-Data',
  },
  {
    number: '06',
    title: 'Traffic Accident Analysis & ML',
    subtitleTags: ['Safety', 'ML', 'Data Science'],
    description:
      'Conducted traffic accident analytics and built predictive models to identify high-risk conditions and support safer road planning and response strategies.',
    stack: ['Python', 'Scikit-learn', 'Data Analysis', 'Visualization', 'Machine Learning'],
    link: 'https://github.com/HemanthK7227/Traffic-Accidents-Analysis-and-ML',
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
