import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Github, ExternalLink, Award, Eye, Sparkles } from 'lucide-react';
import { projects } from '../data/content';
import ProjectModal from './ProjectModal';

// 3D Tilt Card wrapper
function TiltCard({ children, className = '' }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x, { stiffness: 220, damping: 22 });
  const ySpring = useSpring(y, { stiffness: 220, damping: 22 });

  const rotateX = useTransform(ySpring, [-0.5, 0.5], ['7deg', '-7deg']);
  const rotateY = useTransform(xSpring, [-0.5, 0.5], ['-7deg', '7deg']);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function ProjectCard({ project, index, onSelect }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{ perspective: 1000 }}
      className="h-full"
    >
      <TiltCard className="premium-card h-full flex flex-col group cursor-default border border-border-color hover:border-accent-glow/40 transition-all duration-300">
        {/* Project Visual / Image Banner */}
        <div className="relative -m-6 mb-5 h-52 sm:h-56 overflow-hidden rounded-t-2xl bg-dark-bg border-b border-border-color/60">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
          />
          
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-mid-bg via-mid-bg/30 to-transparent pointer-events-none" />

          {/* Badge */}
          {project.badge && (
            <div className="absolute top-3 right-3 px-3 py-1 rounded-full glass-strong text-[11px] text-accent-glow font-mono font-semibold flex items-center gap-1.5 border border-accent-glow/30 shadow-md">
              <Sparkles className="w-3 h-3 text-accent-glow" />
              {project.badge}
            </div>
          )}

          {/* Category Tag */}
          <div className="absolute bottom-3 left-4 px-2.5 py-0.5 rounded-md glass text-[10px] text-text-secondary font-mono tracking-wider uppercase">
            {project.category}
          </div>
        </div>

        {/* Project Title */}
        <h3 className="text-xl font-display font-bold text-text-primary mb-2 group-hover:text-accent-glow transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-text-secondary text-xs sm:text-sm mb-5 flex-grow leading-relaxed font-sans">
          {project.description}
        </p>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-[11px] px-2.5 py-1 rounded-md bg-dark-bg/90 border border-border-color text-text-secondary font-mono hover:text-accent-glow hover:border-accent-glow/30 transition-colors"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Action Buttons: GitHub, Live Demo / Research Paper, View Details */}
        <div className="flex flex-col gap-2.5 pt-4 border-t border-border-color/70 mt-auto">
          {project.isTestModePayment && (
            <span className="text-[10.5px] font-mono text-amber-400/90 flex items-center gap-1">
              ⚠️ Razorpay Sandbox / Test Mode
            </span>
          )}

          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-accent text-dark-bg hover:bg-accent-glow transition-all"
                  title="Open Live Application"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Live Demo
                </a>
              )}

              {project.doi && (
                <a
                  href={project.doi}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 hover:bg-cyan-500/30 transition-all"
                  title="Read Peer-Reviewed Research Publication"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  Paper
                </a>
              )}

              {project.isDesktopApp && (
                <span className="text-[10px] font-mono text-cyan-400/90 px-2 py-1 rounded bg-cyan-950/40 border border-cyan-800/40">
                  Desktop App
                </span>
              )}

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-text-secondary hover:text-accent-glow transition-colors p-1"
                  title="View GitHub Repository"
                >
                  <Github className="w-4 h-4" />
                  <span>Code</span>
                </a>
              )}
            </div>

            <button
              onClick={() => onSelect(project)}
              className="inline-flex items-center gap-1.5 text-xs text-accent-glow hover:text-text-primary px-3 py-1.5 rounded-lg glass border border-accent-glow/30 hover:border-accent-glow transition-all"
              title="View Full Architecture & System Details"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Case Study</span>
            </button>
          </div>
        </div>
      </TiltCard>
    </motion.div>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('All');

  const categories = [
    { label: 'All', count: projects.length },
    { label: 'Full-Stack / Cloud', count: projects.filter((p) => ['nexdesk', 'jobtrack', 'apna-tour'].includes(p.id)).length },
    { label: 'AI & LLM', count: projects.filter((p) => ['jarvis', 'pitch'].includes(p.id)).length },
    { label: 'Computer Vision', count: projects.filter((p) => p.id === 'deepfake').length },
  ];

  const filteredProjects = projects.filter((project) => {
    if (filter === 'All') return true;
    if (filter === 'Full-Stack / Cloud') return ['nexdesk', 'jobtrack', 'apna-tour'].includes(project.id);
    if (filter === 'AI & LLM') return ['jarvis', 'pitch'].includes(project.id);
    if (filter === 'Computer Vision') return project.id === 'deepfake';
    return true;
  });

  return (
    <section id="projects" className="py-24" aria-label="Featured Software Engineering Projects">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <span className="text-xs uppercase tracking-widest text-accent-glow font-mono font-medium">
          Engineering &amp; Implementations
        </span>
        <h2 className="text-4xl md:text-5xl font-display font-bold section-title-line mt-2">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <p className="max-w-xl mx-auto text-xs sm:text-sm text-text-secondary mt-4">
          Production full-stack platforms, cloud architectures, and machine learning systems built with modern engineering standards.
        </p>

        {/* Recruiter Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
          {categories.map((cat) => (
            <button
              key={cat.label}
              onClick={() => setFilter(cat.label)}
              className={`text-xs px-4 py-2 rounded-xl font-mono transition-all duration-200 border flex items-center gap-2 ${
                filter === cat.label
                  ? 'bg-accent text-dark-bg font-bold border-accent-glow shadow-[0_0_15px_rgba(57,211,83,0.3)]'
                  : 'glass border-border-color text-text-secondary hover:text-text-primary hover:border-accent-glow/40'
              }`}
            >
              <span>{cat.label}</span>
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                  filter === cat.label
                    ? 'bg-dark-bg/30 text-dark-bg'
                    : 'bg-mid-bg text-text-secondary'
                }`}
              >
                {cat.count}
              </span>
            </button>
          ))}
        </div>
      </motion.div>

      {/* 2-Column Desktop Grid / 1-Column Mobile Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {filteredProjects.map((project, idx) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={idx}
            onSelect={setSelectedProject}
          />
        ))}
      </div>

      {/* Animated Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
