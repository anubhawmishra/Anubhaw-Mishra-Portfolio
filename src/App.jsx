import Navbar from './components/Navbar';

import Hero from './components/Hero';

import About from './components/About';

import Skills from './components/Skills';

import Experience from './components/Experience';

import Projects from './components/Projects';

import Contact from './components/Contact';

import Footer from './components/Footer';



export default function App() {

  return (

    <div className="relative min-h-screen bg-dark-bg text-text-primary overflow-x-hidden">

      {/* Subtle ambient gradient background that follows the whole page */}

      <div className="fixed inset-0 bg-glow-gradient pointer-events-none z-0" />



      <Navbar />



      <main className="relative z-10">

        <Hero />

        <div className="container mx-auto px-6">

          <About />

          <Skills />

          <Experience />

          <Projects />

          <Contact />

        </div>

      </main>



      <Footer />

    </div>

  );

}