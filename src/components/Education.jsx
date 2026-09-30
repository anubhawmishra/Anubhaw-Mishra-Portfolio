import { motion } from 'framer-motion';
import {
  GraduationCap,
  Award,
  BookOpen,
  Calendar,
  MapPin,
  CheckCircle2,
  Building2,
  Sparkles,
} from 'lucide-react';
import { education, educationHistory, certifications } from '../data/content';

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
        <p className="text-sm text-text-secondary max-w-xl mx-auto mt-4">
          A verified timeline of formal engineering education, secondary schooling, and specialized technical certifications.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
        {/* Academic Journey Timeline (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex items-center gap-2 mb-2">
            <div className="p-2 rounded-lg bg-accent/20 border border-accent-glow/30">
              <GraduationCap className="w-4 h-4 text-accent-glow" />
            </div>
            <h3 className="text-xl font-display font-bold text-text-primary">
              Academic Journey
            </h3>
          </div>

          <div className="space-y-4">
            {educationHistory.map((item, idx) => (
              <motion.div
                key={item.level}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                className={`premium-card border border-border-color p-5 relative overflow-hidden transition-all hover:border-accent-glow/40 ${
                  idx === 0 ? 'bg-gradient-to-br from-card-bg via-mid-bg/60 to-dark-bg/90' : ''
                }`}
              >
                {/* Accent top edge for primary degree */}
                {idx === 0 && (
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent via-accent-glow to-accent" />
                )}

                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-accent/15 border border-accent-glow/30 text-accent-glow text-[11px] font-mono font-medium">
                    <Sparkles className="w-3 h-3" />
                    {item.badge}
                  </span>
                  <span className="text-xs font-mono text-text-secondary flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-accent-glow/70" />
                    {item.duration}
                  </span>
                </div>

                <h4 className="text-lg font-display font-bold text-text-primary">
                  {item.degree}
                </h4>

                {item.honors && (
                  <p className="text-xs font-semibold text-accent-glow mt-0.5">
                    {item.honors}
                  </p>
                )}

                <div className="mt-2 space-y-1 text-xs text-text-secondary">
                  <div className="flex items-center gap-1.5 font-medium text-text-primary">
                    <Building2 className="w-3.5 h-3.5 text-accent-glow flex-shrink-0" />
                    <span>{item.institution}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-text-secondary/90 pl-5">
                    <span>Affiliated with: <span className="text-text-primary">{item.university}</span></span>
                  </div>
                  {item.location && (
                    <div className="flex items-center gap-1.5 text-text-secondary/75 pl-5">
                      <MapPin className="w-3 h-3 text-accent-glow/60 flex-shrink-0" />
                      <span>{item.location}</span>
                    </div>
                  )}
                </div>

                {/* Score badge */}
                <div className="mt-3.5 flex items-center justify-between pt-3 border-t border-border-color/60">
                  <span className="text-[11px] uppercase tracking-wider text-text-secondary font-mono">
                    {item.scoreLabel}:
                  </span>
                  <span className="text-sm font-bold text-accent-glow font-mono px-2.5 py-0.5 rounded-md bg-accent/10 border border-accent-glow/30">
                    {item.score}
                  </span>
                </div>

                {/* Coursework list only for B.E. */}
                {idx === 0 && education.coursework && (
                  <div className="mt-4 pt-3 border-t border-border-color/50">
                    <h5 className="text-[11px] uppercase tracking-wider text-text-secondary font-mono mb-2 flex items-center gap-1.5">
                      <BookOpen className="w-3 h-3 text-accent-glow" />
                      Core Computer Science Coursework
                    </h5>
                    <div className="grid grid-cols-2 gap-1.5">
                      {education.coursework.map((course) => (
                        <div
                          key={course}
                          className="flex items-center gap-1.5 p-1.5 rounded-md bg-dark-bg/60 border border-border-color/60 text-[11px] text-text-primary"
                        >
                          <CheckCircle2 className="w-3 h-3 text-accent-glow flex-shrink-0" />
                          <span className="truncate">{course}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications Card (5 cols) */}
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="lg:col-span-5 flex flex-col"
        >
          <div className="flex items-center gap-2 mb-2">
            <div className="p-2 rounded-lg bg-accent/20 border border-accent-glow/30">
              <Award className="w-4 h-4 text-accent-glow" />
            </div>
            <h3 className="text-xl font-display font-bold text-text-primary">
              Verified Certifications
            </h3>
          </div>

          <div className="premium-card border border-border-color flex-1 flex flex-col justify-between p-6">
            <ul className="space-y-3 text-xs sm:text-sm text-text-secondary">
              {certifications.map((cert) => (
                <li
                  key={cert.name}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-dark-bg/70 border border-border-color/70 hover:border-accent-glow/30 transition-all"
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
                    <div className="text-xs text-text-secondary/80 mt-1">{cert.issuer}</div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-6 p-3 rounded-xl bg-accent/10 border border-accent-glow/20 text-center">
              <span className="text-xs text-text-secondary font-mono">
                Continuous Learning in Software Engineering &amp; AI
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
