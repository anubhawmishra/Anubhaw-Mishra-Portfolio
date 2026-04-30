import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Github, ExternalLink, Award } from 'lucide-react';
import { projects, certifications } from '../data/content';

// Tilt-on-hover wrapper using Framer Motion
function TiltCard({ children, className = '' }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x, { stiffness: 200, damping: 20 });
  const ySpring = useSpring(y, { stiffness: 200, damping: 20 });

  const rotateX = useTransform(ySpring, [-0.5, 0.5], ['10deg', '-10deg']);
  const rotateY = useTransform(xSpring, [-0.5, 0.5], ['-10deg', '10deg']);

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

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      style={{ perspective: 1000 }}
    >
      <TiltCard className="premium-card h-full flex flex-col group cursor-default">
        {/* Project image with overlay */}
        <div className="relative -m-6 mb-5 h-48 overflow-hidden rounded-t-2xl">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-mid-bg via-mid-bg/40 to-transparent" />

          {project.badge && (
            <div className="absolute top-3 right-3 px-3 py-1 rounded-full glass text-xs text-accent-glow font-medium flex items-center gap-1">
              <Award className="w-3 h-3" />
              {project.badge}
            </div>
          )}
        </div>

        <h3 className="text-xl font-display font-bold text-text-primary mb-3">
          {project.title}
        </h3>

        <p className="text-text-secondary text-sm mb-5 flex-grow leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs px-2.5 py-1 rounded-full bg-mid-bg border border-border-color text-accent-glow"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3 pt-3 border-t border-border-color">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-text-secondary hover:text-accent-glow transition-colors"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-text-secondary hover:text-accent-glow transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          )}
        </div>
      </TiltCard>
    </motion.div>
  );
}

function CertificationsCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      style={{ perspective: 1000 }}
    >
      <TiltCard className="premium-card h-full flex flex-col">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-accent-glow/10">
            <Award className="w-5 h-5 text-accent-glow" />
          </div>
          <h3 className="text-xl font-display font-bold text-text-primary">
            Certifications
          </h3>
        </div>

        <ul className="space-y-3 text-sm text-text-secondary">
          {certifications.map((cert) => (
            <li key={cert.name} className="flex items-start gap-2">
              <span className="text-accent-glow mt-0.5 flex-shrink-0">▸</span>
              <div className="flex-1">
                <div>
                  {cert.name}
                  {cert.status === 'Ongoing' && (
                    <span className="ml-2 text-xs border border-accent-glow/40 text-accent-glow rounded px-1.5 py-0.5">
                      Ongoing
                    </span>
                  )}
                </div>
                <div className="text-xs text-text-secondary/70">{cert.issuer}</div>
              </div>
            </li>
          ))}
        </ul>
      </TiltCard>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-display font-bold text-center section-title-line mb-16"
      >
        Featured <span className="gradient-text">Projects</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project, idx) => (
          <ProjectCard key={project.title} project={project} index={idx} />
        ))}
        <CertificationsCard />
      </div>
    </section>
  );
}
