import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { experience } from '../data/content';

export default function Experience() {
  return (
    <section id="experience" className="py-24" aria-label="Work Experience">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <span className="text-xs uppercase tracking-widest text-accent-glow font-mono font-medium">
          Career History
        </span>
        <h2 className="text-4xl md:text-5xl font-display font-bold section-title-line mt-2">
          Work <span className="gradient-text">Experience</span>
        </h2>
      </motion.div>

      <div className="max-w-3xl mx-auto relative">
        {/* Timeline Line */}
        <div className="absolute left-4 md:left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-glow via-accent to-transparent" />

        {experience.map((job, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="relative pl-12 md:pl-20 pb-8"
          >
            {/* Timeline Node Badge */}
            <div className="absolute left-1.5 md:left-3.5 top-1.5 w-6 h-6 rounded-full bg-gradient-to-br from-accent to-accent-glow flex items-center justify-center glow-shadow">
              <Briefcase className="w-3 h-3 text-dark-bg" />
            </div>

            <div className="premium-card border border-border-color">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="inline-flex items-center gap-1.5 text-xs text-accent-glow font-mono font-semibold px-2.5 py-1 rounded-md bg-accent/15 border border-accent-glow/30">
                  <Calendar className="w-3 h-3" />
                  {job.period}
                </span>
                <span className="inline-flex items-center gap-1 text-xs text-text-secondary font-mono">
                  <MapPin className="w-3 h-3" />
                  {job.location}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-display font-bold text-text-primary mt-1">
                {job.title}
              </h3>
              <p className="text-sm text-accent-glow font-medium mb-4">
                {job.company}
              </p>

              <ul className="space-y-2 mb-6">
                {job.points.map((point, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-text-secondary leading-relaxed">
                    <span className="text-accent-glow mt-1 flex-shrink-0 font-bold">▸</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-border-color/60">
                {job.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2.5 py-1 rounded-md bg-mid-bg border border-border-color text-text-secondary font-mono"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
