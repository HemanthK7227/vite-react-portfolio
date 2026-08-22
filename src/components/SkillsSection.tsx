import React from 'react'
import { Brain, Cpu, Cloud, Code2, Database, BarChart2 } from 'lucide-react'
import { motion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'

interface Group {
  Icon: LucideIcon
  title: string
  accent: string       // gradient CSS string
  glowColor: string    // rgba for box-shadow
  items: string[]
}

const GROUPS: Group[] = [
  {
    Icon: Brain,
    title: 'ML & GenAI',
    accent: 'linear-gradient(135deg, #6366F1, #A855F7)',
    glowColor: 'rgba(99,102,241,0.25)',
    items: [
      'LLMs — GPT, Claude, Llama',
      'RAG Pipelines',
      'LangChain · LangGraph · LlamaIndex',
      'Multi-Agent AI (AutoGen, CrewAI)',
      'Fine-tuning & Instruction Tuning',
      'Prompt Engineering',
      'Embeddings & Vector Databases',
      'Semantic & Intent Search',
    ],
  },
  {
    Icon: Cpu,
    title: 'Frameworks & MLOps',
    accent: 'linear-gradient(135deg, #3B82F6, #6366F1)',
    glowColor: 'rgba(59,130,246,0.2)',
    items: [
      'TensorFlow · PyTorch',
      'Scikit-learn · XGBoost',
      'MLflow · Kubeflow',
      'Hugging Face Transformers',
      'FastAPI',
      'Docker · Kubernetes',
      'CI/CD Pipelines',
      'Model Monitoring & Drift Detection',
    ],
  },
  {
    Icon: Cloud,
    title: 'Cloud Platforms',
    accent: 'linear-gradient(135deg, #06B6D4, #3B82F6)',
    glowColor: 'rgba(6,182,212,0.2)',
    items: [
      'AWS (S3, EC2, Lambda, SageMaker)',
      'AWS Bedrock',
      'GCP AI Platform · BigQuery',
      'Azure ML',
      'Snowflake',
    ],
  },
  {
    Icon: Code2,
    title: 'Programming',
    accent: 'linear-gradient(135deg, #10B981, #06B6D4)',
    glowColor: 'rgba(16,185,129,0.2)',
    items: [
      'Python',
      'Go (Golang)',
      'SQL',
      'REST APIs',
      'Microservices',
      'Distributed Systems',
    ],
  },
  {
    Icon: Database,
    title: 'Data Engineering',
    accent: 'linear-gradient(135deg, #F59E0B, #EF4444)',
    glowColor: 'rgba(245,158,11,0.2)',
    items: [
      'Pandas · NumPy',
      'Apache Spark (PySpark)',
      'Apache Kafka',
      'Apache Airflow',
      'PostgreSQL · MySQL',
      'MongoDB · Redis',
      'ETL / ELT Pipelines',
    ],
  },
  {
    Icon: BarChart2,
    title: 'Analytics & Tools',
    accent: 'linear-gradient(135deg, #EC4899, #8B5CF6)',
    glowColor: 'rgba(236,72,153,0.2)',
    items: [
      'Power BI · Tableau',
      'Statistical Modeling',
      'A/B Testing · Causal Inference',
      'SPSS · SAS',
      'Git · GitHub · GitLab',
      'Jupyter Notebook',
      'Agile / SDLC',
    ],
  },
]

const SkillCard: React.FC<Group & { index: number }> = ({
  Icon, title, accent, glowColor, items, index,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.1 }}
    transition={{ duration: 0.55, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
    className="group relative rounded-2xl p-6 md:p-7 cursor-default
               transition-all duration-300 hover:-translate-y-1"
    style={{
      background: 'rgba(255,255,255,0.025)',
      border: '1px solid rgba(255,255,255,0.06)',
    }}
    onMouseEnter={e => {
      const el = e.currentTarget as HTMLElement
      el.style.borderColor = 'rgba(255,255,255,0.12)'
      el.style.boxShadow = `0 20px 60px ${glowColor}`
    }}
    onMouseLeave={e => {
      const el = e.currentTarget as HTMLElement
      el.style.borderColor = 'rgba(255,255,255,0.06)'
      el.style.boxShadow = 'none'
    }}
  >
    {/* Icon */}
    <div
      className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 shrink-0"
      style={{ background: accent }}
    >
      <Icon size={18} strokeWidth={1.8} className="text-white" />
    </div>

    {/* Title */}
    <h3 className="text-[16px] font-bold text-white/90 mb-4 tracking-tight">{title}</h3>

    {/* Divider */}
    <div className="h-px mb-5" style={{ background: 'rgba(255,255,255,0.06)' }} />

    {/* Skills as tags */}
    <div className="flex flex-wrap gap-2">
      {items.map(item => (
        <span
          key={item}
          className="px-2.5 py-1 rounded-md text-[12px] text-white/45 font-medium
                     group-hover:text-white/60 transition-colors duration-200"
          style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          {item}
        </span>
      ))}
    </div>
  </motion.div>
)

const SkillsSection: React.FC = () => (
  <section id="skills" className="bg-[#06090F]" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
    <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">

      <p className="text-[12px] font-bold tracking-[0.2em] uppercase text-indigo-400 mb-4">
        Capabilities
      </p>
      <h2
        className="font-extrabold tracking-tight text-white mb-16"
        style={{ fontSize: 'clamp(44px, 6.5vw, 76px)', lineHeight: 0.93 }}
      >
        Skills &amp; Stack
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {GROUPS.map((g, i) => (
          <SkillCard key={i} index={i} {...g} />
        ))}
      </div>
    </div>
  </section>
)

export default SkillsSection
