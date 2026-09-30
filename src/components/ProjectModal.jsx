import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, CheckCircle2, Layers, Cpu, AlertCircle, Sparkles } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  // ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-project-title"
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-dark-bg/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto glass-strong border border-accent-glow/30 rounded-2xl shadow-2xl p-6 sm:p-8 z-10 text-text-primary"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-xl text-text-secondary hover:text-text-primary hover:bg-mid-bg transition-colors"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header area */}
          <div className="mb-6 pr-8">
            <span className="text-xs uppercase tracking-wider text-accent-glow font-mono font-medium">
              {project.category}
            </span>
            <h2
              id="modal-project-title"
              className="text-2xl sm:text-3xl font-display font-bold text-text-primary mt-1 mb-2"
            >
              {project.title}
            </h2>
            <p className="text-sm text-text-secondary leading-relaxed">{project.tagline}</p>
          </div>

          {/* Preview Image / Visual Banner */}
          <div className="relative mb-8 rounded-xl overflow-hidden border border-border-color bg-mid-bg aspect-video max-h-72">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 mb-8 pb-6 border-b border-border-color">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-accent to-accent-glow text-dark-bg font-semibold text-sm glow-shadow hover:glow-shadow-lg transition-all"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl glass border border-border-color text-text-primary hover:border-accent-glow hover:text-accent-glow text-sm font-medium transition-all"
              >
                <Github className="w-4 h-4" />
                Source Code
              </a>
            )}
            {project.id === 'deepfake' && (
              <a
                href="https://doi.org/10.55041/IJSREM34789"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl glass border border-cyan-500/40 text-cyan-400 hover:border-cyan-400 text-sm font-medium transition-all"
              >
                <Sparkles className="w-4 h-4" />
                View Publication (DOI)
              </a>
            )}
          </div>

          {/* Detailed Content Grid */}
          <div className="space-y-6 text-sm">
            {/* 1. Project Overview */}
            <div>
              <h3 className="text-base font-display font-semibold text-accent-glow mb-2 flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Project Overview
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {project.longDescription || project.description}
              </p>
            </div>

            {/* 2. Problem & Solution */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-mid-bg/60 border border-border-color">
                <h4 className="text-xs uppercase tracking-wider text-amber-400 font-bold mb-2 flex items-center gap-1.5">
                  <AlertCircle className="w-3.5 h-3.5" />
                  The Problem
                </h4>
                <p className="text-xs text-text-secondary leading-relaxed">{project.problem}</p>
              </div>

              <div className="p-4 rounded-xl bg-mid-bg/60 border border-border-color">
                <h4 className="text-xs uppercase tracking-wider text-accent-glow font-bold mb-2 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  The Solution
                </h4>
                <p className="text-xs text-text-secondary leading-relaxed">{project.solution}</p>
              </div>
            </div>

            {/* 3. System Architecture */}
            {project.architecture && (
              <div>
                <h3 className="text-base font-display font-semibold text-accent-glow mb-2 flex items-center gap-2">
                  <Layers className="w-4 h-4" />
                  Architecture &amp; Design
                </h3>
                <p className="text-text-secondary leading-relaxed">{project.architecture}</p>
              </div>
            )}

            {/* 4. Key Features */}
            {project.features && (
              <div>
                <h3 className="text-base font-display font-semibold text-accent-glow mb-3">
                  Key Features
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.features.map((feat, fIdx) => (
                    <div
                      key={fIdx}
                      className="flex items-start gap-2 p-2.5 rounded-lg bg-dark-bg/60 border border-border-color/60 text-xs"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent-glow mt-0.5 flex-shrink-0" />
                      <span className="text-text-primary">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 5. Engineering Highlights */}
            {project.engineeringHighlights && (
              <div>
                <h3 className="text-base font-display font-semibold text-accent-glow mb-2 flex items-center gap-2">
                  <Cpu className="w-4 h-4" />
                  Engineering Highlights
                </h3>
                <ul className="space-y-1.5 text-xs text-text-secondary">
                  {project.engineeringHighlights.map((hl, hlIdx) => (
                    <li key={hlIdx} className="flex items-start gap-2">
                      <span className="text-accent-glow font-bold">▸</span>
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* 6. Technology Stack */}
            <div>
              <h3 className="text-xs uppercase tracking-wider text-text-secondary mb-3 font-medium">
                Verified Technology Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1 rounded-full bg-mid-bg border border-border-color text-accent-glow font-mono"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
