import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Calendar } from 'lucide-react';
import { personal, aboutText } from '../data/content';

const iconMap = { MapPin, GraduationCap, Calendar };

export default function About() {
  return (
    <section id="about" className="py-24">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-display font-bold text-center section-title-line mb-16"
      >
        About <span className="gradient-text">Me</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
        {/* Profile image with glow + tilt */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center"
        >
          <motion.div
            whileHover={{ rotateY: 8, rotateX: -8, scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="relative"
            style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
          >
            {/* Glow ring behind image */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent to-accent-glow blur-2xl opacity-40 scale-110 animate-glow-pulse" />
            <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-accent-glow/30 glow-shadow">
              <img
                src={personal.profileImage}
                alt={personal.name}
                onError={(e) => {
                  // Fallback if /public/profile.jpg is missing
                  e.target.src = `https://ui-avatars.com/api/?name=Anubhaw+Mishra&size=400&background=0d1117&color=39d353&bold=true&font-size=0.4`;
                }}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* About text + badges */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="space-y-4 text-text-secondary"
        >
          {aboutText.map((para, idx) => (
            <p key={idx} className="leading-relaxed">
              {para}
            </p>
          ))}

          <div className="pt-4 flex flex-wrap gap-3">
            {personal.badges.map((badge) => {
              const Icon = iconMap[badge.icon];
              return (
                <motion.span
                  key={badge.label}
                  whileHover={{ scale: 1.05, borderColor: '#39d353' }}
                  className="inline-flex items-center gap-2 text-xs border border-border-color rounded-full px-4 py-2"
                >
                  {Icon && <Icon className="w-3.5 h-3.5 text-accent-glow" />}
                  {badge.label}
                </motion.span>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
