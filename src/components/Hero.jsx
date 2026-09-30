import { Suspense, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, ArrowDown, Sparkles, Code2, Bot, Terminal } from 'lucide-react';
import ParticleField from './ParticleField';
import { personal } from '../data/content';
import AssistantAvatar from './assistant/AssistantAvatar';

export default function Hero({ onOpenAssistant }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Rotating roles cycle
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % personal.rotatingRoles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  // Subtle mouse tracking for radial spotlight
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    setMousePos({ x: clientX, y: clientY });
  };

  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16"
      aria-label="Introduction & Overview"
    >
      {/* 3D Particle Background (React Three Fiber) */}
      <Suspense fallback={null}>
        <div className="absolute inset-0 z-0 opacity-80 pointer-events-none">
          <ParticleField />
        </div>
      </Suspense>

      {/* Subtle Background Grid */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: `linear-gradient(#39d353 1px, transparent 1px), linear-gradient(90deg, #39d353 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      />

      {/* Interactive Mouse-Follow Spotlight Glow */}
      <div
        className="pointer-events-none absolute z-0 w-[500px] h-[500px] rounded-full blur-[140px] opacity-15 transition-all duration-700 ease-out"
        style={{
          background: 'radial-gradient(circle, #39d353 0%, rgba(35,134,54,0.1) 70%, transparent 100%)',
          left: mousePos.x ? `${mousePos.x - 250}px` : '40%',
          top: mousePos.y ? `${mousePos.y - 250}px` : '30%',
        }}
      />

      {/* Ambient background soft orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent-glow/10 rounded-full blur-3xl animate-float pointer-events-none" />
      <div
        className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/15 rounded-full blur-3xl animate-float pointer-events-none"
        style={{ animationDelay: '2.5s' }}
      />

      {/* Main Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
      >
        {/* Recruiter Status / Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15, duration: 0.4 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass mb-6 border border-accent-glow/30"
        >
          <span className="w-2 h-2 rounded-full bg-accent-glow animate-pulse" />
          <span className="text-xs uppercase tracking-widest text-text-primary font-medium">
            Available For Full-Time Roles · Batch 2026
          </span>
        </motion.div>

        {/* Primary Identity */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.6 }}
          className="text-5xl sm:text-7xl lg:text-8xl font-display font-extrabold leading-tight tracking-tight mb-3"
        >
          <span className="gradient-text">{personal.name}</span>
        </motion.h1>

        {/* Primary & Rotating Role Transition */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="h-10 sm:h-12 flex items-center justify-center gap-2 text-xl sm:text-2xl md:text-3xl text-text-secondary font-mono mb-4"
        >
          <span className="text-text-primary font-semibold">Role:</span>
          <div className="relative overflow-hidden inline-flex items-center justify-center min-w-[240px] sm:min-w-[280px]">
            <AnimatePresence mode="wait">
              <motion.span
                key={personal.rotatingRoles[roleIndex]}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                className="text-accent-glow font-bold"
              >
                {personal.rotatingRoles[roleIndex]}
              </motion.span>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Tech stack badge pills */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-2 mb-6 max-w-2xl mx-auto"
        >
          {['React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'Python', 'Java', 'REST APIs', 'AI/ML'].map(
            (tech) => (
              <span
                key={tech}
                className="text-xs px-3 py-1 rounded-md glass border border-border-color/80 text-text-secondary font-mono hover:border-accent-glow/50 hover:text-accent-glow transition-colors"
              >
                {tech}
              </span>
            )
          )}
        </motion.div>

        {/* Concise Recruiter Bio */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="max-w-2xl mx-auto text-sm sm:text-base text-text-secondary mb-10 leading-relaxed font-sans"
        >
          Computer Science graduate (Honors in Cyber Security) from Savitribai Phule Pune University.
          Specialized in architecting reliable full-stack applications with React &amp; Node.js,
          scalable PostgreSQL databases, and real-world LLM / Computer Vision deep learning systems.
        </motion.p>

        {/* Hero CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.6 }}
          className="flex flex-wrap justify-center items-center gap-4"
        >
          <motion.a
            href={personal.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            className="group inline-flex items-center gap-2.5 px-7 py-3.5 bg-gradient-to-r from-accent to-accent-glow text-dark-bg font-semibold rounded-xl glow-shadow hover:glow-shadow-lg transition-all duration-300 text-sm shadow-md"
          >
            <Download className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
            Download Resume
          </motion.a>

          <motion.button
            onClick={scrollToProjects}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-7 py-3.5 glass border border-border-color text-text-primary rounded-xl hover:border-accent-glow hover:text-accent-glow transition-all duration-300 text-sm font-medium"
          >
            Featured Projects
            <ArrowDown className="w-4 h-4" />
          </motion.button>

          <motion.button
            onClick={onOpenAssistant}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-mid-bg border border-accent-glow/40 text-accent-glow hover:border-accent-glow hover:bg-accent/15 transition-all duration-300 text-sm font-medium"
          >
            <AssistantAvatar size={20} glow={false} />
            Ask Assistant
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Animated Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden sm:block"
      >
        <button
          onClick={scrollToProjects}
          className="flex flex-col items-center gap-1.5 text-text-secondary/60 hover:text-accent-glow transition-colors"
          aria-label="Scroll to featured projects"
        >
          <span className="text-[10px] uppercase font-mono tracking-widest">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="w-5 h-8 border-2 border-border-color rounded-full flex items-start justify-center pt-1.5"
          >
            <div className="w-1 h-2 bg-accent-glow rounded-full" />
          </motion.div>
        </button>
      </motion.div>
    </section>
  );
}
