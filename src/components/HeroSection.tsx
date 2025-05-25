import React from 'react';
import { ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 z-0"></div>

      {/* Decorative blurred circles */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute -right-24 -top-24 w-96 h-96 bg-indigo-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute left-1/2 top-1/3 w-64 h-64 bg-purple-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -left-24 bottom-1/4 w-80 h-80 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <div className="mb-4 inline-block">
              <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">
              Software Development Engineer | Machine Learning & Data Analytics Enthusiast
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Hello, I'm <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Hemanth</span>
            </h1>

            <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
            I'm a Software Development Engineer with a strong focus on full-stack development, machine learning, and data analytics. I specialize in building scalable applications using Java, Spring Boot, and React.js, while also developing data-driven solutions through predictive modeling and statistical analysis. My work transforms complex data into actionable insights, enabling smarter decisions and real-world impact. I'm passionate about combining software engineering and AI to solve meaningful problems and deliver high-impact solutions.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
              <a 
                href="#projects" 
                className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                View Projects
                <ArrowRight size={18} />
              </a>
              <a 
                href="#contact" 
                className="px-6 py-3 border border-gray-300 hover:border-indigo-600 text-gray-700 hover:text-indigo-600 rounded-lg transition-all duration-300"
              >
                Contact Me
              </a>
            </div>

            <div className="flex justify-center lg:justify-start gap-6">
              <a 
                href="https://github.com/HemanthK7227" 
                className="text-gray-600 hover:text-indigo-600 transition-colors duration-300"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/hemanth-k-027457190/" 
                className="text-gray-600 hover:text-indigo-600 transition-colors duration-300"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="https://x.com/imhemanth_kk" 
                className="text-gray-600 hover:text-indigo-600 transition-colors duration-300"
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter size={24} />
              </a>
            </div>
          </div>

          {/* Right Column - Photo Card */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-96 md:w-[450px] lg:w-[500px] h-[500px] bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
              <img
                src="https://i.imgur.com/rcg5SnC.jpeg"
                alt="Hemanth's Profile"
                className="w-full h-full object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-xl font-bold text-gray-800">Hemanth Kothapalli</h3>
                <p className="text-sm text-gray-500 mt-1">Software Development Engineer</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
