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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="order-2 lg:order-1">
            <p className="text-base leading-relaxed text-gray-800 mb-6">
              I’m a data analyst professional with over three years of experience turning data into actionable business insights.
              My work includes solving complex use cases such as customer retention analysis, sales forecasting, and marketing optimization—
              empowering organizations to make data-backed decisions and drive growth.
              Outside of my professional work, I stay engaged with the latest trends in AI and machine learning, contributing to open-source projects
              and continually refining my skill set.
            </p>

            <blockquote className="italic text-indigo-700 mt-4">
              "Data should drive decisions, not assumptions."
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
              href="https://drive.google.com/file/d/1Gx1H5yGWEWmMtZTjuCJPUn9GXwXBFiNS/view?usp=sharing"
              className="mt-8 inline-block bg-indigo-600 text-white px-6 py-2 rounded-lg shadow hover:bg-indigo-700 transition"
            >
              Download Resume
            </a>
          </div>

          {/* Right Column - Professional Journey */}
          <div className="order-1 lg:order-2 mt-12 lg:mt-0 lg:w-full xl:w-full 2xl:w-full">
            <div className="relative">
              <div className="absolute -inset-6 bg-indigo-100 rounded-xl transform -rotate-6"></div>
              <div className="relative bg-white p-24 rounded-lg shadow-lg z-10">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">Professional Journey</h3>

                <div className="space-y-8">
                  <article>
                    <div className="flex justify-between mb-2">
                      <strong className="text-gray-700 font-bold">Learning Technology and Media Assistant</strong>
                      <span className="text-sm text-gray-500">2023 - 2024</span>
                    </div>
                    <p className="text-gray-600 font-bold">Mercer University</p>
                    <p className="text-gray-500">Assisting in various learning technologies for faculty and students, focusing on improving educational experiences and increasing engagement with media tools.</p>
                  </article>

                  <article>
                    <div className="flex justify-between mb-2">
                      <strong className="text-gray-700 font-bold">Data Analyst</strong>
                      <span className="text-sm text-gray-500">2018 - 2020</span>
                    </div>
                    <p className="text-gray-600 font-bold">Epam Systems</p>
                    <p className="text-gray-500">Developed data-driven insights to inform decision-making in marketing and customer retention, providing analysis using Python and SQL for business solutions.</p>
                  </article>

                  <article>
                    <div className="flex justify-between mb-2">
                      <strong className="text-gray-700 font-bold">Intern Data Analyst</strong>
                      <span className="text-sm text-gray-500">2017 - 2018</span>
                    </div>
                    <p className="text-gray-600 font-bold">Flyers Soft</p>
                    <p className="text-gray-500">Worked on market trend analysis, sales forecasting, and customer segmentation to drive the company's growth strategy, delivering reports for executive leadership.</p>
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
