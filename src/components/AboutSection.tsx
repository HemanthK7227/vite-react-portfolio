import React from 'react';
import { Award, GraduationCap, Briefcase } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">About Me</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <div className="order-2 lg:order-1 max-w-2xl">
            <p className="text-base leading-relaxed text-gray-800 mb-6">
              I am an AI & Machine Learning Engineer with a strong foundation in data science, model development, and 
              full-stack ML system deployment. With experience in supervised and unsupervised learning, deep learning, 
              and MLOps, I specialize in building scalable, end-to-end machine learning pipelines that deliver business value.

            </p>

            <p className="text-base leading-relaxed text-gray-800 mb-6">
              I have a passion for turning raw data into actionable insights using tools like Python, TensorFlow, PyTorch, and 
              cloud platforms like AWS 
            </p>

            <p className="text-base leading-relaxed text-gray-800 mb-6">
              My expertise spans data preprocessing, feature engineering, model training, hyperparameter tuning, and deployment 
              using APIs and containerized services. I thrive in cross-functional teams and enjoy solving real-world problems with AI.
            </p>

            <blockquote className="italic text-indigo-700 mt-4">
              "Engineering intelligent solutions at the intersection of software and data."
            </blockquote>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-gray-50 p-8 rounded-lg shadow-sm transition-transform hover:scale-105 hover:shadow-md">
                <div className="flex items-center mb-2">
                  <Award className="text-indigo-600 mr-2" size={20} />
                  <h3 className="font-semibold text-gray-900">Experience</h3>
                </div>
                <p className="text-gray-700">3+ Years</p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg shadow-sm transition-transform hover:scale-105 hover:shadow-md">
                <div className="flex items-center mb-2">
                  <Briefcase className="text-indigo-600 mr-2" size={20} />
                  <h3 className="font-semibold text-gray-900">Projects</h3>
                </div>
                <p className="text-gray-700">10+ Completed</p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg shadow-sm transition-transform hover:scale-105 hover:shadow-md">
                <div className="flex items-center mb-2">
                  <GraduationCap className="text-indigo-600 mr-2" size={20} />
                  <h3 className="font-semibold text-gray-900">Education</h3>
                </div>
                <p className="text-gray-700">M.S. Business Analytics</p>
                <p className="text-gray-700">M.S. Advanced Computer Science</p>
              </div>
            </div>

            <a
              href="https://drive.google.com/file/d/1bTRc1UOS4eI1Ca7lehDV0S89SzR7zhRD/view?usp=sharing"
              className="mt-8 inline-block bg-indigo-600 text-white px-6 py-2 rounded-lg shadow hover:bg-indigo-700 transition"
            >
              Download Resume
            </a>
          </div>

          {/* Right Column - Professional Journey */}
          <div className="order-1 lg:order-2 mt-12 lg:mt-0 lg:w-full">
            <div className="relative">
              <div className="absolute -inset-6 bg-indigo-100 rounded-xl transform -rotate-6"></div>
              <div className="relative bg-white p-6 md:p-10 lg:p-12 xl:p-16 rounded-lg shadow-lg z-10">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">Professional Journey</h3>

                <div className="space-y-8">
                  <article>
                    <div className="flex justify-between mb-2">
                      <strong className="text-gray-700 font-bold">ML Engineer</strong>
                      <span className="text-sm text-gray-500">02/2025 - 06/2025</span>
                    </div>
                    <p className="text-sm text-gray-500">Zangle Technologies</p>
                  </article>

                  <article>
                    <div className="flex justify-between mb-2">
                      <strong className="text-gray-700 font-bold">Learning Technology and Media Assistant</strong>
                      <span className="text-sm text-gray-500">08/2023 - 12/2024</span>
                    </div>
                    <p className="text-sm text-gray-500">Mercer University</p>
                  </article>

                  <article>
                    <div className="flex justify-between mb-2">
                      <strong className="text-gray-700 font-bold">Data Scientist - Intern</strong>
                      <span className="text-sm text-gray-500">03/2021 - 09/2021</span>
                    </div>
                    <p className="text-sm text-gray-500">Flyers Soft</p>
                  </article>

                  <article>
                    <div className="flex justify-between mb-2">
                      <strong className="text-gray-700 font-bold">Junior Software Engineer</strong>
                      <span className="text-sm text-gray-500">04/2017 - 12/2019</span>
                    </div>
                    <p className="text-sm text-gray-500">EPAM Systems</p>
                  </article>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
