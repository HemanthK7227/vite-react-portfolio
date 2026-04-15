import React, { useRef, useEffect } from 'react'
import { Brain, Cpu, Cloud, Code2, Database, Wrench } from 'lucide-react'
import { motion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'

interface Group { Icon: LucideIcon; title: string; items: string[] }

const GROUPS: Group[] = [
  { Icon: Brain, title: 'ML & GenAI', items: ['LLMs — GPT, Claude, Llama', 'RAG Pipelines', 'LangChain · LangGraph · AutoGen', 'Fine-tuning & Instruction Tuning', 'Prompt Engineering', 'Embeddings & Vector Databases', 'Semantic Search'] },
  { Icon: Cpu, title: 'Frameworks & MLOps', items: ['TensorFlow · PyTorch', 'Scikit-learn · XGBoost', 'MLflow · Kubeflow', 'TensorRT · ONNX Runtime', 'FastAPI', 'Docker · Kubernetes', 'CI/CD Pipelines'] },
  { Icon: Cloud, title: 'Cloud Platforms', items: ['AWS SageMaker', 'AWS S3 · Lambda · Bedrock', 'GCP AI Platform · BigQuery', 'Azure ML'] },
  { Icon: Code2, title: 'Programming', items: ['Python', 'SQL', 'REST APIs'] },
  { Icon: Database, title: 'Data Engineering', items: ['Pandas · NumPy', 'Apache Spark', 'Apache Kafka', 'PostgreSQL · MySQL', 'MongoDB · Redis'] },
  { Icon: Wrench, title: 'Dev & Tools', items: ['Git · GitHub · GitLab', 'Agile / SDLC', 'Apache Airflow', 'Jupyter Notebook'] },
]

const SkillCard: React.FC<Group & { index: number }> = ({ Icon, title, items, index }) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect()
      const x = ((e.clientX - r.left) / r.width * 100).toFixed(1)
      const y = ((e.clientY - r.top) / r.height * 100).toFixed(1)
      el.style.background = `radial-gradient(circle at ${x}% ${y}%, #eff6ff, #f8f9fc 55%)`
    }
    const onLeave = () => { el.style.background = '' }
    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)
    return () => { el.removeEventListener('mousemove', onMove); el.removeEventListener('mouseleave', onLeave) }
  }, [])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
      className="relative bg-slate-50 border-2 border-slate-100 rounded-xl p-6
                 hover:border-blue-200 hover:-translate-y-1 hover:shadow-md
                 transition-all duration-300 overflow-hidden group cursor-pointer"
    >
      {/* Bottom accent bar */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-navy-600 to-navy-400
                      scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

      <div className="w-9 h-9 bg-blue-50 rounded-xl flex items-center justify-center mb-4
                      group-hover:bg-navy-600 transition-colors duration-300">
        <Icon size={16} strokeWidth={1.8}
          className="text-navy-600 group-hover:text-white transition-colors duration-300" />
      </div>
      <p className="text-sm font-bold text-navy-800 mb-3 tracking-wide">{title}</p>
      <ul className="flex flex-col gap-1.5">
        {items.map((item, j) => (
          <li key={j} className="text-xs text-slate-500 leading-relaxed flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-navy-300 shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

const SkillsSection: React.FC = () => (
  <section id="skills" className="bg-white border-b border-slate-100 py-20">
    <div className="max-w-7xl mx-auto px-6 lg:px-10">
      <p className="text-xs font-bold text-navy-600 tracking-[0.14em] uppercase mb-2">Capabilities</p>
      <h2 className="text-[clamp(32px,5vw,52px)] font-extrabold text-navy-800 tracking-tight leading-none mb-12">
        Skills &amp; Stack
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {GROUPS.map((g, i) => <SkillCard key={i} index={i} {...g} />)}
      </div>
    </div>
  </section>
)

export default SkillsSection
