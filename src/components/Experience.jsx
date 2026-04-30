import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { experience } from '../data/content';

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-display font-bold text-center section-title-line mb-16"
      >
        <span className="gradient-text">Experience</span>
      </motion.h2>

      <div className="max-w-3xl mx-auto relative">
        {/* Timeline vertical line */}
        <div className="absolute left-4 md:left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-glow via-accent to-transparent" />

        {experience.map((job, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="relative pl-14 md:pl-20 pb-8"
          >
            {/* Timeline node */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, type: 'spring' }}
              className="absolute left-1 md:left-3 top-1 w-7 h-7 rounded-full bg-gradient-to-br from-accent to-accent-glow flex items-center justify-center glow-shadow"
            >
              <Briefcase className="w-3.5 h-3.5 text-dark-bg" />
            </motion.div>

            <div className="premium-card">
              <p className="text-sm text-accent-glow uppercase tracking-widest mb-2 font-medium">
                {job.period}
              </p>
              <h3 className="text-2xl font-display font-bold text-text-primary mb-1">
                {job.title}
              </h3>
              <p className="text-text-secondary mb-4">
                <span className="text-accent-glow font-medium">{job.company}</span> · {job.location}
              </p>

              <ul className="space-y-2 mb-5">
                {job.points.map((point, pIdx) => (
                  <li key={pIdx} className="flex gap-2 text-sm text-text-secondary leading-relaxed">
                    <span className="text-accent-glow flex-shrink-0 mt-1">▸</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {job.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1 rounded-full bg-mid-bg border border-border-color text-accent-glow"
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
