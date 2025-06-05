import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Github, Linkedin, Twitter } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Hemanth<span className="font-light"> Kothapalli</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {['about', 'skills', 'projects', 'contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className="text-gray-700 hover:text-indigo-600 transition-colors duration-200"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              ))}
              <a
                href={"https://drive.google.com/file/d/1C4zdMzxKWNxEq0R3cR6V4Ce2zwTFRPZX/view?usp=sharing"}
                className="flex items-center gap-1 bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors duration-200"
              >
                <FileText size={16} />
                Resume
              </a>
            </div>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-4 pt-2 pb-4 space-y-1 bg-white shadow-lg rounded-b-lg">
          {['about', 'skills', 'projects',  'contact'].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
          <a
            href="/resume.pdf"
            className="flex items-center gap-1 px-3 py-2 text-base font-medium text-indigo-600"
            onClick={() => setIsOpen(false)}
          >
            <FileText size={16} />
            Resume
          </a>

          {/* Socials */}
          <div className="pt-4 flex justify-center space-x-6 border-t border-gray-200 mt-4">
            <a
              href="https://github.com/HemanthK7227"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-500 hover:text-gray-700 transition"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/hemanth-k-027457190/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-500 hover:text-gray-700 transition"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://x.com/imhemanth_kk"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="text-gray-500 hover:text-gray-700 transition"
            >
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
