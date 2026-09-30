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

        {/* Action Buttons: GitHub, Live Demo, View Details */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-border-color/70 mt-auto">
          <div className="flex items-center gap-3">
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
            <span>View Details</span>
          </button>
        </div>
      </TiltCard>
    </motion.div>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24" aria-label="Featured Software Engineering Projects">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
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
      </motion.div>

      {/* 2-Column Desktop Grid / 1-Column Mobile Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project, idx) => (
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
