import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, X } from 'lucide-react';
import { motion } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveLink?: string;
  githubLink?: string;
  category: string;
}

const categories = [
  { value: 'all', label: 'All Projects' },
  { value: 'machine-learning', label: 'Machine Learning' },
  { value: 'visualization', label: 'Data Visualization' },
  { value: 'data-analysis', label: 'Data Analysis' }
];

const ProjectsSection: React.FC = () => {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  const projects: Project[] = [
    {
      id: 1,
      title: 'Decoding Car Insurance Premiums',
      description: 'Leveraged advanced regression models to analyze how demographics, vehicle history, and policy attributes influence annual insurance premiums, enabling predictive insights for smarter pricing strategies',
      image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg0VfrEeW-mcPCwwA0FZ2mCO5YQdf4_XKzGJ2JOSgxwIScoHht5dc1duUR4no1mahobvmAKKl7RWxiZ1e6S9LlZer8NJ-v8557PTHLFr_iXyfnJD1n5nLSYfjsj08ZWF4no7-jt9nW7znONFCqBVppkp6teHszPiKzJzFkp8ieIHqdB1EFC-hntxuH8zjw/s16000-rw/Gemini_Generated_Image_g4xas3g4xas3g4xa.jpeg',
      tags: ['Python',  'Feature Engineering',  'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Scikit-learn', 'Jupyter Notebook', 'Regression Analysis', 'Data Cleaning & Preprocessing'],
      githubLink: 'https://github.com/HemanthK7227/Decoding-car-insurance-premiums',
      category: 'machine-learning'
    },
    {
      id: 2,
      title: 'BlackFriday Consumer Behavior Analysis',
      description: 'Exploratory data analysis and interactive visualization of Black Friday consumer purchasing behavior using Tableau and Excel. Focused on uncovering trends across demographics, city category, and product preferences.',
      image: 'https://epicdesignlabs.com/wp-content/uploads/2024/08/black-friday-statistics.jpg.webp',
      tags: ['Tableau', 'MS Excel', 'Data Visualization', 'Consumer Behavior', 'Black Friday', 'Demographic Analysis', 'Retail Analytics'],
      githubLink: 'https://github.com/HemanthK7227/BlackFriday-Consumer-Behavior-Analysis',
      category: 'visualization'
    },
    {
      id: 3,
      title: 'Walmart Sales Performance Optimization: Predictive Modeling for Strategic Promotions',
      description: 'Optimized Walmarts sales performance using predictive modeling techniques, leveraging key business indicators like temperature, fuel prices, and unemployment. Developed data-driven strategies for more effective promotional efforts, boosting profitability and customer satisfaction.',
      image: 'https://ecomclips.com/blog/wp-content/uploads/2022/06/walmart-optimize-1170x500-1-1.webp',
      tags: ['Python', 'Pandas', 'Scikit-learn', 'Matplotlib', 'Time Series', 'Regression', 'Data Analysis', 'Machine Learning'],
      githubLink: 'https://github.com/HemanthK7227/walmart-sales-performance-optimization',
      category: 'machine-learning'
    },
    {
      id: 4,
      title: 'Publix-Checkout-Simulation-Optimization',
      description: 'Developed a discrete-event simulation in JaamSim to model Publix\'s checkout systems using real-time observational data. Leveraged Python, R, and JaamSim for statistical analysis, distribution fitting, and simulation—achieved 50%+ improvement in resource utilization. ',
      image: 'https://preview.redd.it/the-self-checkout-design-in-the-new-stores-make-more-sense-v0-yibzbhefkpla1.jpg?width=1080&crop=smart&auto=webp&s=08ddc07f82172fd7d605b8f473bd6e822bfdd3d7',
      tags:  ['Python', 'R', 'Jupyter Notebook', 'JaamSim', 'Simulation Modeling', 'Statistical Analysis', 'Data Visualization', 'Discrete-Event Simulation', 'Exponential Distribution', 'Beta Distribution', 'Normal Distribution'],
      githubLink: 'https://github.com/HemanthK7227/Publix-Checkout-Simulation-Optimization',
      category: 'data-analysis'
    },
    {
      id: 5,
      title: 'Sentiment Analysis of Disneyland California Reviews Using Text Mining',
      description: 'Project utilized sentiment analysis to categorize Disneyland California guest reviews into positive, negative, and neutral sentiments using machine learning algorithms. It provided actionable insights for improving customer satisfaction and refining marketing strategies.',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['Python', 'R', 'Machine Learning', 'Text Mining', 'Sentiment Analysis', 'RapidMiner', 'k-NN', 'Naive Bayes', 'Data Preprocessing'],
      githubLink: 'https://github.com/HemanthK7227/disneyland-sentiment-analysis',
      category: 'machine-learning'
    },
    
    {
      id: 6,
      title: 'Walmart Inc. Financial and Strategic Analysis: Leveraging Innovation for Market Leadership',
      description: 'Conducted a comprehensive financial and strategic analysis of Walmart Inc., evaluating its performance from 2015 to 2024. The project leverages AI, machine learning, and financial modeling to assess growth strategies, market positioning, and competitive edge in the retail sector.',
      image: 'https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['Python', 'Pandas', 'Matplotlib', 'Jupyter Notebooks', 'Financial Modeling', 'AI', 'Machine Learning', 'Data Analysis', 'E-commerce', 'Sustainability'],
      githubLink: 'https://github.com/HemanthK7227/Walmart-financial-strategic-analysis',
      category: 'data-analysis'
    }
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Research Projects</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A selection of my recent data science projects, showcasing my expertise in machine learning, data analysis, and visualization.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex flex-wrap justify-center gap-2 bg-gray-100 p-1 rounded-lg">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setFilter(cat.value)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition ${
                  filter === cat.value
                    ? 'bg-indigo-600 text-white shadow'
                    : 'text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className="cursor-pointer bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition transform hover:scale-[1.01]"
            >
              <img src={project.image} alt={project.title} className="h-48 w-full object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white max-w-2xl w-full mx-4 p-6 rounded-xl relative shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-red-500"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="rounded-md w-full h-64 object-cover mb-6"
            />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{selectedProject.title}</h3>
            <p className="text-gray-700 mb-4">{selectedProject.description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {selectedProject.tags.map((tag, i) => (
                <span key={i} className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              {selectedProject.liveLink && (
                <a
                  href={selectedProject.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-indigo-600 hover:underline font-medium"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>
              )}
              {selectedProject.githubLink && (
                <a
                  href={selectedProject.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-gray-700 hover:underline font-medium"
                >
                  <Github size={16} />
                  Code
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;