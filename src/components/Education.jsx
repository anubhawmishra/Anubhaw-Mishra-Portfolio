import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { education, certifications } from '../data/content';

export default function Education() {
  return (
    <section id="education" className="py-24" aria-label="Education and Certifications">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <span className="text-xs uppercase tracking-widest text-accent-glow font-mono font-medium">
          Academic Foundations
        </span>
        <h2 className="text-4xl md:text-5xl font-display font-bold section-title-line mt-2">
          Education &amp; <span className="gradient-text">Certifications</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
        {/* Main Education Card (7 cols) */}
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-7 premium-card border border-border-color flex flex-col justify-between"
        >
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/20 border border-accent-glow/40 text-accent-glow text-xs font-mono font-semibold">
                <GraduationCap className="w-3.5 h-3.5" />
                Bachelor of Engineering
              </span>
              <span className="text-xs font-mono text-text-secondary flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {education.duration}
              </span>
            </div>

            <h3 className="text-2xl font-display font-bold text-text-primary mb-1">
              {education.degree}
            </h3>
            <p className="text-sm font-semibold text-accent-glow mb-2">
              {education.honors}
            </p>
            <p className="text-sm text-text-secondary mb-4 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-accent-glow flex-shrink-0" />
              <span>{education.institution} · {education.location}</span>
            </p>

            {/* CGPA Badge */}
            <div className="inline-flex items-baseline gap-2 px-4 py-2 rounded-xl bg-mid-bg border border-accent-glow/30 mb-6">
              <span className="text-xs uppercase tracking-wider text-text-secondary font-mono">
                Cumulative Grade Point Average:
              </span>
              <span className="text-lg font-bold text-accent-glow font-mono">
                {education.cgpa}
              </span>
            </div>

            {/* Coursework */}
            <div>
              <h4 className="text-xs uppercase tracking-widest text-text-secondary font-mono font-medium mb-3 flex items-center gap-2">
                <BookOpen className="w-3.5 h-3.5 text-accent-glow" />
                Relevant Core Computer Science Coursework
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {education.coursework.map((course) => (
                  <div
                    key={course}
                    className="flex items-center gap-2 p-2 rounded-lg bg-dark-bg/60 border border-border-color text-xs text-text-primary"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent-glow flex-shrink-0" />
                    <span>{course}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Certifications Card (5 cols) */}
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="lg:col-span-5 premium-card border border-border-color flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 rounded-lg bg-accent/20 border border-accent-glow/30">
                <Award className="w-4 h-4 text-accent-glow" />
              </div>
              <h3 className="text-xl font-display font-bold text-text-primary">
                Certifications
              </h3>
            </div>

            <ul className="space-y-3.5 text-xs sm:text-sm text-text-secondary">
              {certifications.map((cert) => (
                <li
                  key={cert.name}
                  className="flex items-start gap-2.5 p-2.5 rounded-xl bg-dark-bg/70 border border-border-color/70"
                >
                  <span className="text-accent-glow mt-0.5 flex-shrink-0 font-bold">▸</span>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-1">
                      <span className="text-text-primary font-medium">{cert.name}</span>
                      {cert.status === 'Ongoing' ? (
                        <span className="text-[10px] border border-accent-glow/50 text-accent-glow rounded px-1.5 py-0.5 font-mono">
                          Ongoing
                        </span>
                      ) : (
                        <span className="text-[10px] text-text-secondary/70 font-mono">
                          Verified
                        </span>
                      )}
                    </div>
                    <div className="text-xs text-text-secondary/80 mt-0.5">{cert.issuer}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
