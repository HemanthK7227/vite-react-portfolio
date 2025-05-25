import React, { useRef } from 'react';
import {
  Code,
  Server,
  Monitor,
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
      skills: ['Python', 'Java', 'JavaScript', 'SQL', 'R'],
    },
    {
      icon: <Server size={24} />,
      title: 'Back-End Development',
      color: 'border-blue-600',
      skills: [
        'Spring Boot',
        'Spring MVC',
        'Hibernate',
        'JPA',
        'Spring Security',
        'Maven',
        'Gradle',
      ],
    },
    {
      icon: <Monitor size={24} />,
      title: 'Front-End Development',
      color: 'border-yellow-600',
      skills: ['React.js', 'HTML5', 'CSS3', 'JavaScript (ES6+)', 'Bootstrap'],
    },
    {
      icon: <Brain size={24} />,
      title: 'Data Science & Machine Learning',
      color: 'border-purple-600',
      skills: [
        'Supervised Learning',
        'Unsupervised Learning',
        'Deep Learning',
        'scikit-learn',
        'TensorFlow',
        'PyTorch',
        'pandas',
        'NumPy',
        'MLflow',
        'Cross-validation',
      ],
    },
    {
      icon: <BarChart size={24} />,
      title: 'Data Visualization & Reporting',
      color: 'border-indigo-600',
      skills: ['Matplotlib', 'Seaborn', 'Plotly', 'Power BI', 'Tableau'],
    },
    {
      icon: <Database size={24} />,
      title: 'Data Management',
      color: 'border-green-600',
      skills: [
        'MySQL',
        'PostgreSQL',
        'MongoDB',
        'Airflow',
        'ETL Pipelines',
        'Data Modeling',
        'RESTful APIs',
        'AWS RDS',
        'S3',
      ],
    },
    {
      icon: <TestTube size={24} />,
      title: 'Statistical Analysis',
      color: 'border-amber-500',
      skills: [
        'Hypothesis Testing',
        'Regression Analysis',
        'Time Series Forecasting',
        'A/B Testing',
        'Experimental Design',
      ],
    },
    {
      icon: <Cloud size={24} />,
      title: 'DevOps & Cloud',
      color: 'border-cyan-600',
      skills: [
        'Git',
        'GitHub',
        'Jenkins',
        'Docker',
        'Kubernetes',
        'AWS (EC2, S3, RDS, SageMaker)',
        'Azure (App Services, ML)',
      ],
    },
    {
      icon: <Wrench size={24} />,
      title: 'Tools',
      color: 'border-gray-600',
      skills: [
        'VS Code',
        'IntelliJ IDEA',
        'Jupyter Notebook',
        'Postman',
        'Excel',
        'MySQL Workbench',
        'GitHub',
        'AWS Console',
        'Azure Portal',
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
            My technical toolkit encompasses a wide range of software engineering and data science skills,
            from application development to machine learning, DevOps, and cloud solutions.
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
