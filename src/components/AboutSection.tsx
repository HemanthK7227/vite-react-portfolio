import React from 'react'
import { Calendar } from 'lucide-react'
import { motion } from 'framer-motion'

interface Job {
  company: string
  location: string
  role: string
  period: string
  bullets: string[]
}

const JOBS: Job[] = [
  {
    company: 'Cigna Healthcare',
    location: 'USA',
    role: 'Machine Learning Engineer',
    period: 'March 2025 – Present',
    bullets: [
      'Built and deployed LLM-powered applications using RAG pipelines with LangChain and vector databases, improving information retrieval accuracy and supporting enterprise-scale query volumes.',
      'Developed production-grade ML services using FastAPI deployed on AWS (S3, Lambda, SageMaker), ensuring 99.9% system availability across multiple applications.',
      'Implemented MLOps pipelines using MLflow for experiment tracking, model versioning, and automated retraining — significantly reducing maintenance overhead and improving deployment efficiency.',
      'Optimized model inference using ONNX Runtime and TensorRT, enabling real-time AI applications to handle high-volume requests with reduced latency.',
    ],
  },
  {
    company: 'Lenskart',
    location: 'India',
    role: 'Data Scientist',
    period: 'January 2020 – July 2023',
    bullets: [
      'Developed ML models using Scikit-learn and XGBoost for customer retention and demand forecasting across large datasets.',
      'Built recommendation systems using collaborative filtering and behavioral analytics, increasing user engagement across 100K+ users.',
      'Conducted A/B testing and statistical analysis, leading to measurable improvements in decision-making and business strategy.',
      'Designed end-to-end ML pipelines, improving workflow efficiency and reducing model training time through automation.',
    ],
  },
  {
    company: 'Mercer University',
    location: 'USA',
    role: 'Learning Technology & Media Assistant',
    period: 'September 2023 – December 2024',
    bullets: [
      'Maintained and organized 500+ academic records and learning resources, improving data accuracy across internal systems.',
      'Coordinated with faculty members to update and verify learning materials, ensuring timely availability of all course resources.',
    ],
  },
  {
    company: 'EPAM Systems',
    location: 'India',
    role: 'Junior Software Engineer',
    period: 'April 2018 – December 2019',
    bullets: [
      'Developed backend services and REST APIs supporting scalable applications handling thousands of daily user requests.',
      'Built data processing pipelines and automation scripts, reducing manual effort and improving data processing efficiency.',
      'Collaborated with cross-functional teams to design scalable architectures and improve overall application performance.',
    ],
  },
]

const AboutSection: React.FC = () => (
  <section id="about" className="bg-cream border-b border-border py-20">
    <div className="max-w-7xl mx-auto px-6 lg:px-10">

      <div className="mb-14">
        <p className="text-[11px] tracking-[0.16em] uppercase text-[#888] mb-3 font-normal">
          Where I've worked
        </p>
        <h2
          className="font-serif font-black text-[#111] leading-none tracking-tight"
          style={{ fontSize: 'clamp(36px, 5vw, 56px)' }}
        >
          Experience
        </h2>
      </div>

      <div>
        {JOBS.map((job, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-0 border-t border-border py-10"
          >
            {/* Left — meta */}
            <div className="lg:pr-10 mb-6 lg:mb-0 flex flex-col gap-1">
              <p className="text-[11px] tracking-[0.12em] uppercase text-[#aaa] font-normal">
                {job.location}
              </p>
              <p className="font-serif font-bold text-[#111] text-lg leading-snug">
                {job.company}
              </p>
              <p className="text-sm text-[#555] font-medium mb-1">{job.role}</p>
              <p className="flex items-center gap-1.5 text-xs text-[#aaa] tracking-wide">
                <Calendar size={11} />
                {job.period}
              </p>
            </div>

            {/* Right — bullets */}
            <ul className="flex flex-col gap-3">
              {job.bullets.map((b, j) => (
                <li key={j} className="flex items-start gap-3 text-sm text-[#555] leading-relaxed font-light">
                  <span className="mt-[10px] w-5 h-px bg-[#ccc] shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
        <div className="border-t border-border" />
      </div>

    </div>
  </section>
)

export default AboutSection
