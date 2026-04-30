import { Suspense } from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowDown, Sparkles } from 'lucide-react';
import ParticleField from './ParticleField';
import { personal } from '../data/content';

const TYPED_ROLES = ['React.js', 'JavaScript', 'REST APIs', 'Node.js'];

export default function Hero() {
  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* 3D particle background (R3F) */}
      <Suspense fallback={null}>
        <div className="absolute inset-0 z-0">
          <ParticleField />
        </div>
      </Suspense>

      {/* Soft animated gradient orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent-glow/10 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/15 rounded-full blur-3xl animate-float"
        style={{ animationDelay: '2s' }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-6 text-xs uppercase tracking-widest"
        >
          <Sparkles className="w-3.5 h-3.5 text-accent-glow" />
          <span className="text-accent-glow">Welcome to my portfolio</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-tight mb-4"
        >
          <span className="gradient-text">{personal.name}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="text-xl md:text-2xl text-text-secondary mb-2"
        >
          {personal.role}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7 }}
          className="text-base md:text-lg text-text-secondary mb-6 flex flex-wrap justify-center gap-x-3 gap-y-1"
        >
          {TYPED_ROLES.map((role, idx) => (
            <span key={role} className="flex items-center gap-3">
              <span className="text-accent-glow font-semibold">{role}</span>
              {idx < TYPED_ROLES.length - 1 && (
                <span className="text-border-color">|</span>
              )}
            </span>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7 }}
          className="max-w-2xl mx-auto text-text-secondary mb-10 leading-relaxed"
        >
          {personal.about}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.7 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <motion.a
            href={personal.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="group inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-accent to-accent-glow text-dark-bg font-semibold rounded-lg glow-shadow hover:glow-shadow-lg transition-all duration-300"
          >
            <Download className="w-4 h-4" />
            Download Resume
          </motion.a>
          <motion.button
            onClick={scrollToProjects}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-8 py-3.5 border border-border-color text-text-primary rounded-lg hover:border-accent-glow hover:text-accent-glow transition-all duration-300"
          >
            View Projects
            <ArrowDown className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 border-2 border-text-secondary rounded-full flex items-start justify-center pt-2"
        >
          <div className="w-1 h-2 bg-accent-glow rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
