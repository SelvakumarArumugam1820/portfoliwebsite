import React from 'react';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './sections/About/AboutSection';
import Skills from './sections/Skills/SkillsSection';
import Experience from './sections/Experience/ExperienceSection';
import Education from './sections/Education/EducationSection';
import Internship from './sections/Internship/InternshipSection';
import Projects from './sections/Projects/ProjectsSection';
import Contact from './sections/Contact/ContactSection';
import Footer from './components/Footer/Footer';

import { motion } from 'framer-motion';

function App() {
  return (
    <ErrorBoundary>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="app-container"
      >

        <Navbar />

        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Education />
          <Internship />
          <Projects />
          <Contact />
        </main>


        <Footer />
      </motion.div>
    </ErrorBoundary>
  );
}

export default App;

