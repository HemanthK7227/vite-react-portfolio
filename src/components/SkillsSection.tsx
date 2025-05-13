import React, { useRef } from 'react';
import {
  BarChart3,
  BrainCircuit,
  Database,
  FileCode,
  Terminal,
  TrendingUp
} from 'lucide-react';
import { motion, useInView } from 'framer-motion';

interface SkillCategoryProps {
  icon: React.ReactNode;
  title: string;
  skills: string[];
  color: string;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ icon, title, skills, color }) => (
  <div
    className={`bg-white rounded-xl shadow-md overflow-hidden border-t-4 ${color} hover:shadow-lg transition-shadow duration-300`}
    role="region"
    aria-label={`${title} skills`}
  >
    <div className="p-6">
      <div className="flex items-center mb-4">
        <div className="mr-3 text-indigo-600">{icon}</div>
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      </div>
      <ul className="space-y-2 list-none">
        {skills.map((skill, index) => (
          <li key={`${title}-${index}`} className="flex items-center">
            <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full mr-2" />
            <span className="text-gray-700">{skill}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const SkillsSection: React.FC = () => {
  const skillCategories = [
    {
      icon: <BrainCircuit size={24} />,
      title: 'Machine Learning',
      color: 'border-indigo-600',
      skills: ['Supervised Learning', 'Unsupervised Learning', 'Deep Learning']
    },
    {
      icon: <BarChart3 size={24} />,
      title: 'Data Visualization',
      color: 'border-purple-600',
      skills: ['Tableau', 'PowerBI', 'Matplotlib', 'Seaborn']
    },
    {
      icon: <Database size={24} />,
      title: 'Data Management',
      color: 'border-blue-600',
      skills: ['SQL', 'NoSQL', 'Data Warehousing', 'ETL Pipelines', 'Big Data']
    },
    {
      icon: <FileCode size={24} />,
      title: 'Programming',
      color: 'border-pink-600',
      skills: ['Python', 'R', 'SQL', 'Java', 'JavaScript']
    },
    {
      icon: <Terminal size={24} />,
      title: 'Tools & Frameworks',
      color: 'border-green-600',
      skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'Numpy']
    },
    {
      icon: <TrendingUp size={24} />,
      title: 'Statistical Analysis',
      color: 'border-yellow-600',
      skills: ['Hypothesis Testing', 'Regression', 'Time Series', 'A/B Testing', 'Experimental Design']
    }
  ];

  const proficiencyData = [
    { name: 'Python', percentage: 95 },
    { name: 'Machine Learning', percentage: 90 },
    { name: 'Statistical Analysis', percentage: 85 },
    { name: 'Data Visualization', percentage: 88 },
    { name: 'SQL & Databases', percentage: 90 }
  ];

  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            My technical toolkit encompasses a wide range of data science skills, from statistical analysis to machine learning and data visualization.
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

        {/* Proficiency Bars */}
        <div className="mt-16 bg-white rounded-xl shadow-md p-8" ref={ref}>
          <h3 className="text-2xl font-semibold mb-6 text-center">Proficiency Levels</h3>
          <div className="space-y-6 max-w-3xl mx-auto">
            {proficiencyData.map((skill, index) => (
              <div key={`progress-${index}`}>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-700 font-medium">{skill.name}</span>
                  <span className="text-gray-500">{skill.percentage}%</span>
                </div>
                <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.percentage}%` } : {}}
                    transition={{ duration: 1.2, ease: 'easeOut' }}
                    aria-valuenow={skill.percentage}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    role="progressbar"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
