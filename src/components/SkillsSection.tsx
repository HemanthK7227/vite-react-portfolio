import React from 'react'
import { Brain, Cpu, Cloud, Code2, Database, BarChart2, Layers, Rocket } from 'lucide-react'
import { motion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'

interface Skill {
  name: string
  di?: string     // devicon class suffix → <i className={`devicon-${di} colored`} />
  emoji?: string  // fallback for abstract skills
  color: string   // accent color for emoji badge bg
}

interface Group {
  Icon: LucideIcon
  title: string
  subtitle: string
  accent: string
  glowColor: string
  skills: Skill[]
}

const GROUPS: Group[] = [
  {
    Icon: Brain,
    title: 'LLM Engineering',
    subtitle: 'LLM Engineer · AI Engineer',
    accent: 'linear-gradient(90deg, #6366F1, #A855F7)',
    glowColor: 'rgba(99,102,241,0.22)',
    skills: [
      { name: 'Prompt Engineering',     emoji: '💬', color: '#6366F1' },
      { name: 'LLMs (GPT·Claude·Llama)',emoji: '🧠', color: '#A855F7' },
      { name: 'RAG Pipelines',          emoji: '🔍', color: '#8B5CF6' },
      { name: 'LangChain · LangGraph',  emoji: '⛓️', color: '#7C3AED' },
      { name: 'LlamaIndex',             emoji: '🦙', color: '#A855F7' },
      { name: 'Multi-Agent AI',         emoji: '🕸️', color: '#8B5CF6' },
      { name: 'Function Calling',       emoji: '📞', color: '#6366F1' },
      { name: 'Fine-tuning · PEFT·LoRA',emoji: '🎯', color: '#7C3AED' },
      { name: 'RLHF',                   emoji: '🏆', color: '#A855F7' },
      { name: 'vLLM · Ollama',          emoji: '⚡', color: '#6366F1' },
      { name: 'LangSmith',              emoji: '🔭', color: '#E21B26' },
      { name: 'Context Optimization',   emoji: '⚙️', color: '#8B5CF6' },
    ],
  },
  {
    Icon: Layers,
    title: 'Frameworks & MLOps',
    subtitle: 'AI/ML Engineer · Forward Deployed',
    accent: 'linear-gradient(90deg, #3B82F6, #6366F1)',
    glowColor: 'rgba(59,130,246,0.18)',
    skills: [
      { name: 'FastAPI',                  di: 'fastapi-plain',       color: '#059669' },
      { name: 'Scikit-learn',             di: 'scikitlearn-plain',   color: '#F7931E' },
      { name: 'Hugging Face',             emoji: '🤗',               color: '#FFD21E' },
      { name: 'TensorFlow',               di: 'tensorflow-original', color: '#FF6F00' },
      { name: 'PyTorch',                  di: 'pytorch-original',    color: '#EE4C2C' },
      { name: 'Streamlit',                di: 'streamlit-original',  color: '#FF4B4B' },
      { name: 'Gradio',                   emoji: '🎨',               color: '#FF7C00' },
      { name: 'Docker',                   di: 'docker-plain',        color: '#2496ED' },
      { name: 'Kubernetes',               di: 'kubernetes-plain',    color: '#326CE5' },
      { name: 'MLflow',                   emoji: '⚗️',               color: '#0194E2' },
      { name: 'Weights & Biases',         emoji: '📊',               color: '#FFBE00' },
      { name: 'CI/CD Pipelines',          emoji: '♾️',               color: '#6366F1' },
    ],
  },
  {
    Icon: Cloud,
    title: 'Cloud & Vector DBs',
    subtitle: 'AI Engineer · LLM Engineer',
    accent: 'linear-gradient(90deg, #06B6D4, #3B82F6)',
    glowColor: 'rgba(6,182,212,0.18)',
    skills: [
      { name: 'AWS (S3·EC2·Lambda)',    di: 'amazonwebservices-plain', color: '#FF9900' },
      { name: 'AWS Bedrock',            emoji: '🪨',                   color: '#FF9900' },
      { name: 'AWS SageMaker',          emoji: '🛠️',                   color: '#FF9900' },
      { name: 'GCP · BigQuery',         di: 'googlecloud-plain',       color: '#4285F4' },
      { name: 'Azure ML',               di: 'azure-plain',             color: '#0089D6' },
      { name: 'Snowflake',              di: 'snowflake-plain',         color: '#29B5E8' },
      { name: 'Pinecone',               emoji: '🌲',                   color: '#00B887' },
      { name: 'ChromaDB',               emoji: '🟣',                   color: '#9B59B6' },
      { name: 'FAISS',                  emoji: '📐',                   color: '#6366F1' },
      { name: 'Weaviate',               emoji: '🔮',                   color: '#A855F7' },
    ],
  },
  {
    Icon: Code2,
    title: 'Programming & APIs',
    subtitle: 'AI/ML Engineer · Forward Deployed',
    accent: 'linear-gradient(90deg, #10B981, #06B6D4)',
    glowColor: 'rgba(16,185,129,0.18)',
    skills: [
      { name: 'Python',                 di: 'python-plain',    color: '#3776AB' },
      { name: 'Go (Golang)',            di: 'go-plain',        color: '#00ADD8' },
      { name: 'REST APIs',              emoji: '🔗',           color: '#10B981' },
      { name: 'SQL',                    di: 'mysql-plain',     color: '#4479A1' },
      { name: 'OpenAI API',             emoji: '🤖',           color: '#10A37F' },
      { name: 'Anthropic API',          emoji: '🧬',           color: '#B87A56' },
      { name: 'Microservices',          emoji: '🔧',           color: '#06B6D4' },
      { name: 'Distributed Systems',    emoji: '🌐',           color: '#10B981' },
      { name: 'System Design',          emoji: '🏗️',           color: '#06B6D4' },
      { name: 'API Integration',        emoji: '🔌',           color: '#10B981' },
    ],
  },
  {
    Icon: Database,
    title: 'Data Engineering',
    subtitle: 'Data Scientist · AI/ML Engineer',
    accent: 'linear-gradient(90deg, #F59E0B, #EF4444)',
    glowColor: 'rgba(245,158,11,0.18)',
    skills: [
      { name: 'Pandas',                 di: 'pandas-original',        color: '#150458' },
      { name: 'NumPy',                  di: 'numpy-original',         color: '#013243' },
      { name: 'Feature Engineering',    emoji: '🔨',                  color: '#F59E0B' },
      { name: 'ETL / ELT Pipelines',   emoji: '🔄',                  color: '#F59E0B' },
      { name: 'PostgreSQL · MySQL',     di: 'postgresql-plain',       color: '#336791' },
      { name: 'MongoDB · Redis',        di: 'mongodb-plain',          color: '#47A248' },
      { name: 'Apache Spark',           di: 'apachespark-original',   color: '#E25A1C' },
      { name: 'Apache Airflow',         di: 'apacheairflow-original', color: '#017CEE' },
      { name: 'Apache Kafka',           di: 'apachekafka-original',   color: '#231F20' },
    ],
  },
  {
    Icon: BarChart2,
    title: 'Data Science & Analytics',
    subtitle: 'Data Scientist · Forward Deployed',
    accent: 'linear-gradient(90deg, #EC4899, #8B5CF6)',
    glowColor: 'rgba(236,72,153,0.18)',
    skills: [
      { name: 'Statistical Modeling',   emoji: '📈', color: '#8B5CF6' },
      { name: 'Hypothesis Testing',     emoji: '⚖️', color: '#EC4899' },
      { name: 'A/B Testing',            emoji: '🧪', color: '#EC4899' },
      { name: 'EDA',                    emoji: '🔬', color: '#8B5CF6' },
      { name: 'Matplotlib · Seaborn',   di: 'matplotlib-plain', color: '#11557C' },
      { name: 'Power BI · Tableau',     emoji: '📊', color: '#F2C811' },
      { name: 'Git · GitHub',           di: 'git-plain',        color: '#F05032' },
      { name: 'Jupyter Notebook',       di: 'jupyter-plain',    color: '#F37726' },
      { name: 'Solutions Architecture', emoji: '🏛️', color: '#EC4899' },
      { name: 'Technical Demos',        emoji: '🎯', color: '#8B5CF6' },
    ],
  },
]

/* Individual skill chip */
const SkillChip: React.FC<{ skill: Skill; index: number }> = ({ skill, index }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: index * 0.035, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
    className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl transition-all duration-200
               hover:-translate-y-0.5 group/chip cursor-default"
    style={{
      background: 'rgba(255,255,255,0.04)',
      border: '1px solid rgba(255,255,255,0.07)',
    }}
    onMouseEnter={e => {
      const el = e.currentTarget as HTMLElement
      el.style.background = 'rgba(255,255,255,0.08)'
      el.style.borderColor = `${skill.color}55`
    }}
    onMouseLeave={e => {
      const el = e.currentTarget as HTMLElement
      el.style.background = 'rgba(255,255,255,0.04)'
      el.style.borderColor = 'rgba(255,255,255,0.07)'
    }}
  >
    {/* Icon */}
    {skill.di ? (
      <i
        className={`devicon-${skill.di} colored text-[20px] shrink-0`}
        style={{ lineHeight: 1 }}
      />
    ) : (
      <span
        className="w-7 h-7 rounded-lg flex items-center justify-center text-[14px] shrink-0"
        style={{ background: `${skill.color}22`, border: `1px solid ${skill.color}33` }}
      >
        {skill.emoji}
      </span>
    )}

    {/* Name */}
    <span className="text-[11.5px] font-medium text-white/55 group-hover/chip:text-white/80 transition-colors leading-tight">
      {skill.name}
    </span>
  </motion.div>
)

/* Category card */
const SkillCard: React.FC<Group & { cardIndex: number }> = ({
  Icon, title, subtitle, accent, glowColor, skills, cardIndex,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.12 }}
    transition={{ duration: 0.55, delay: cardIndex * 0.08, ease: [0.16, 1, 0.3, 1] }}
    className="group relative rounded-2xl p-6 md:p-7 transition-all duration-300 hover:-translate-y-1"
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
    {/* Category icon */}
    <div
      className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 shrink-0"
      style={{ background: accent }}
    >
      <Icon size={18} strokeWidth={1.8} className="text-white" />
    </div>

    {/* Title + subtitle */}
    <h3 className="text-[15px] font-bold text-white/90 tracking-tight leading-tight">{title}</h3>
    <p className="text-[10.5px] font-medium text-white/28 mt-1 mb-5 tracking-wide uppercase">{subtitle}</p>

    {/* Divider */}
    <div className="h-px mb-5" style={{ background: 'rgba(255,255,255,0.06)' }} />

    {/* Skill chips — 2-column grid */}
    <div className="grid grid-cols-2 gap-2">
      {skills.map((skill, i) => (
        <SkillChip key={skill.name} skill={skill} index={i} />
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
        className="font-extrabold tracking-tight text-white mb-3"
        style={{ fontSize: 'clamp(44px, 6.5vw, 76px)', lineHeight: 0.93 }}
      >
        Skills &amp; Stack
      </h2>
      <p className="text-[15px] text-white/35 mb-16 max-w-xl leading-relaxed">
        Covering the full spectrum — LLM engineering, data science, cloud infrastructure,
        and forward deployment.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {GROUPS.map((g, i) => (
          <SkillCard key={i} cardIndex={i} {...g} />
        ))}
      </div>
    </div>
  </section>
)

export default SkillsSection
