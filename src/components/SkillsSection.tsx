import React, { useRef } from 'react';
import {
  Code,
  Brain,
  BarChart,
  Database,
  Cloud,
  Wrench,
  TestTube,
} from 'lucide-react';
import { useInView } from 'framer-motion';

interface SkillCategoryProps {
  icon: React.ReactNode;
  title: string;
  skills: string[];
  color: string;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({
  icon,
  title,
  skills,
  color,
}) => (
  <div
    className={`bg-white rounded-xl shadow-sm hover:shadow-lg border-t-4 ${color} transition-shadow duration-300`}
    role="region"
    aria-label={`${title} skills`}
  >
    <div className="p-6">
      <div className="flex items-center mb-4">
        <div className="mr-3 text-indigo-600">{icon}</div>
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      </div>
      <ul className="space-y-2 list-none text-sm text-gray-700">
        {skills.map((skill, index) => (
          <li key={`${title}-${index}`} className="flex items-center">
            <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full mr-2" />
            <span>{skill}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const SkillsSection: React.FC = () => {
const skillCategories = [
  {
    icon: <Code size={24} />,
    title: 'Programming Languages',
    color: 'border-pink-600',
    skills: ['Python', 'R', 'SQL'],
  },
  {
    icon: <Brain size={24} />,
    title: 'Machine Learning & AI',
    color: 'border-purple-600',
    skills: [
      'Supervised Learning',
      'Unsupervised Learning',
      'Deep Learning',
      'NLP (Transformers, BERT)',
      'Computer Vision (CNN, YOLO)',
      'Model Evaluation & Cross-Validation',
      'Transfer Learning',
      'ML Pipelines',
    ],
  },
  {
    icon: <Brain size={24} />,
    title: 'Generative AI & LLMs',
    color: 'border-fuchsia-600',
    skills: [
      'Prompt Engineering',
      'Large Language Models (LLMs)',
      'GPT (3.5, 4.0)',
      'LangChain',
      'RAG (Retrieval Augmented Generation)',
      'Fine-tuning LLMs',
      'Hugging Face Transformers',
      'OpenAI API',
      'Chatbot Development',
    ],
  },
  {
    icon: <BarChart size={24} />,
    title: 'Data Science & Visualization',
    color: 'border-indigo-600',
    skills: [
      'Pandas',
      'NumPy',
      'scikit-learn',
      'Matplotlib',
      'Seaborn',
      'Plotly',
      'Power BI',
      'Tableau',
      'EDA',
    ],
  },
  {
    icon: <TestTube size={24} />,
    title: 'Mathematics & Statistics',
    color: 'border-amber-500',
    skills: [
      'Probability & Statistics',
      'Linear Algebra',
      'Calculus',
      'Gradient Descent',
      'Hypothesis Testing',
      'Regression Analysis',
      'A/B Testing',
    ],
  },
  {
    icon: <Cloud size={24} />,
    title: 'AWS Cloud Services',
    color: 'border-cyan-600',
    skills: [
      'Amazon SageMaker',
      'AWS Lambda',
      'AWS S3',
      'Amazon Comprehend (NLP)',
      'Amazon Rekognition (CV)',
      'Amazon Forecast (Time Series)',
      'AWS Step Functions',
      'AWS Glue',
    ],
  },
  {
    icon: <Database size={24} />,
    title: 'Databases',
    color: 'border-green-600',
    skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'AWS RDS', 'SQLite'],
  },
  {
    icon: <Wrench size={24} />,
    title: 'Tools & Frameworks',
    color: 'border-gray-600',
    skills: [
      'TensorFlow',
      'PyTorch',
      'Keras',
      'Jupyter Notebooks',
      'Git & GitHub',
      'Docker',
      'MLflow',
      'VS Code',
      'Postman',
    ],
  },
];


  const ref = useRef(null);
  useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            My technical toolkit blends machine learning, data science, and cloud engineering with AWS — enabling smart, scalable AI solutions.
          </p>
        </div>

        {/* Skill Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={`category-${index}`}
              icon={category.icon}
              title={category.title}
              skills={category.skills}
              color={category.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
