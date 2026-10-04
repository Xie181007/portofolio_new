import React, { useState } from 'react';
import { Bubble3DBackground } from './components/Bubble3DBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { TechStack } from './components/TechStack';
import { Projects } from './components/Projects';
import { Process } from './components/Process';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { AboutModal } from './components/AboutModal';
import { ProjectModal, ProjectData } from './components/ProjectModal';

export default function App() {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  return (
    <div className="relative min-h-screen text-slate-200 bg-[#080B11]">
      {/* 3D Animated Bubble Background Canvas */}
      <Bubble3DBackground />

      {/* Background Ambient Glows */}
      <div 
        className="fixed top-0 left-1/4 w-96 h-96 bg-purple-700/15 rounded-full blur-[130px] pointer-events-none -z-10" 
        aria-hidden="true" 
      />
      <div 
        className="fixed bottom-1/3 right-10 w-[450px] h-[450px] bg-cyan-600/12 rounded-full blur-[140px] pointer-events-none -z-10" 
        aria-hidden="true" 
      />
      <div 
        className="fixed top-1/2 -left-20 w-80 h-80 bg-indigo-600/15 rounded-full blur-[130px] pointer-events-none -z-10" 
        aria-hidden="true" 
      />
      <div 
        className="fixed bottom-10 left-1/3 w-96 h-96 bg-blue-700/10 rounded-full blur-[120px] pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      {/* Navigation Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* About Me Section */}
        <About onOpenAbout={() => setAboutOpen(true)} />

        {/* Services Section */}
        <Services />

        {/* Technologies I Use Section */}
        <TechStack />

        {/* Selected Work / Projects Section */}
        <Projects onSelectProject={(project) => setSelectedProject(project)} />

        {/* Development Methodology Section */}
        <Process />

        {/* Testimonials Section */}
        <Testimonials />

        {/* Contact Form Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
      <AboutModal 
        isOpen={aboutOpen} 
        onClose={() => setAboutOpen(false)} 
      />

      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </div>
  );
}
