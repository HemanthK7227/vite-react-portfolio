import React from 'react'
import { Brain, Cpu, Cloud, Code2, Database, Wrench } from 'lucide-react'
import { motion } from 'framer-motion'

import type { LucideIcon } from 'lucide-react'

interface Group { title: string; Icon: LucideIcon; items: string[] }

const GROUPS: Group[] = [
  {
    Icon: Brain,
    title: 'Machine Learning & GenAI',
    items: [
      'Supervised & Unsupervised Learning',
      'LLMs — GPT, Claude, Llama',
      'Retrieval-Augmented Generation (RAG)',
      'Multi-Agent Systems (LangGraph, AutoGen)',
      'Fine-tuning & Instruction Tuning',
      'Prompt Engineering',
      'Embeddings & Vector Databases',
      'Semantic Search',
      'Anomaly Detection',
      'Time Series Forecasting',
    ],
  },
  {
    Icon: Cpu,
    title: 'Frameworks & MLOps',
    items: [
      'LangChain · LangGraph · AutoGen',
      'TensorFlow · PyTorch',
      'Scikit-learn · XGBoost',
      'MLflow · Kubeflow',
      'TensorRT · ONNX Runtime',
      'FastAPI',
      'Docker · Kubernetes',
      'CI/CD Pipelines',
    ],
  },
  {
    Icon: Cloud,
    title: 'Cloud Platforms',
    items: [
      'AWS SageMaker',
      'AWS S3 · Lambda · Bedrock',
      'GCP AI Platform · BigQuery',
      'Azure ML',
    ],
  },
  {
    Icon: Code2,
    title: 'Programming',
    items: ['Python', 'SQL', 'REST APIs'],
  },
  {
    Icon: Database,
    title: 'Data Engineering',
    items: [
      'Pandas · NumPy',
      'Apache Spark',
      'Apache Kafka',
      'PostgreSQL · MySQL',
      'MongoDB · Redis',
    ],
  },
  {
    Icon: Wrench,
    title: 'Dev & Tools',
    items: [
      'Git · GitHub · GitLab',
      'Agile / SDLC',
      'Apache Airflow',
      'Jupyter Notebook',
    ],
  },
]

const SkillsSection: React.FC = () => (
  <section id="skills" className="bg-cream border-b border-border py-20">
    <div className="max-w-7xl mx-auto px-6 lg:px-10">

      <div className="mb-14">
        <p className="text-[11px] tracking-[0.16em] uppercase text-[#888] mb-3 font-normal">
          Capabilities
        </p>
        <h2
          className="font-serif font-black text-[#111] leading-none tracking-tight"
          style={{ fontSize: 'clamp(36px, 5vw, 56px)' }}
        >
          Skills &amp; Stack
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
        {GROUPS.map(({ Icon, title, items }, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
            className="bg-cream px-7 py-8 group hover:bg-[#f3f1ee] transition-colors duration-200"
          >
            <div className="w-9 h-9 border border-border flex items-center justify-center mb-5
                            group-hover:border-[#bbb] transition-colors">
              <Icon size={15} strokeWidth={1.5} className="text-[#aaa]" />
            </div>
            <p className="text-sm font-medium text-[#111] mb-4 tracking-wide">{title}</p>
            <ul className="flex flex-col gap-1.5">
              {items.map((item, j) => (
                <li key={j} className="text-xs text-[#888] leading-relaxed font-light">
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

    </div>
  </section>
)

export default SkillsSection
