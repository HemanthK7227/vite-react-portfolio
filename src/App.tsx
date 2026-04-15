import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ProjectsSection from './components/ProjectsSection'
import AboutSection from './components/AboutSection'
import SkillsSection from './components/SkillsSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

const App: React.FC = () => (
  <>
    <Navbar />
    <main>
      <HeroSection />
      <ProjectsSection />
      <AboutSection />
      <SkillsSection />
      <ContactSection />
    </main>
    <Footer />
  </>
)

export default App
