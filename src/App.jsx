import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AnubhawAssistant from './components/assistant/AnubhawAssistant';

export default function App() {
  const [isAssistantOpen, setIsAssistantOpen] = useState(false);

  const handleOpenAssistant = () => {
    setIsAssistantOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-dark-bg text-text-primary overflow-x-hidden selection:bg-accent-glow selection:text-dark-bg">
      {/* Subtle ambient gradient background that follows the whole page */}
      <div className="fixed inset-0 bg-glow-gradient pointer-events-none z-0" />

      {/* Top Navigation */}
      <Navbar onOpenAssistant={handleOpenAssistant} />

      <main className="relative z-10">
        <Hero onOpenAssistant={handleOpenAssistant} />

        <div className="container mx-auto px-6">
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Publications />
          <Education />
          <Contact onOpenAssistant={handleOpenAssistant} />
        </div>
      </main>

      <Footer />

      {/* Anubhaw Assistant - Grounded AI Portfolio Guide */}
      <AnubhawAssistant
        isOpen={isAssistantOpen}
        setIsOpen={setIsAssistantOpen}
      />
    </div>
  );
}