import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import {
  MapPin,
  GraduationCap,
  Calendar,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { personal, aboutText } from '../data/content';

const iconMap = {
  MapPin,
  GraduationCap,
  Calendar,
  ShieldCheck,
  Sparkles,
};

export default function About() {
  const containerRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  // Track scroll progress of the About section for subtle 3D/parallax depth
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Parallax transforms: card moves with subtle depth & reverses smoothly on scroll-up
  const translateY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    shouldReduceMotion ? [0, 0, 0] : [24, 0, -24]
  );
  const rotateX = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    shouldReduceMotion ? [0, 0, 0] : [4, 0, -4]
  );
  const rotateY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    shouldReduceMotion ? [0, 0, 0] : [-3, 0, 3]
  );
  const scale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    shouldReduceMotion ? [1, 1, 1] : [0.97, 1, 0.98]
  );
  // Smooth opacity only when entering and naturally exiting viewport
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.85, 1],
    [0.75, 1, 1, 0.75]
  );
  const glowY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [-15, 15]
  );

  return (
    <section
      id="about"
      ref={containerRef}
      className="py-24 relative"
      aria-label="About Anubhaw Mishra"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <span className="text-xs uppercase tracking-widest text-accent-glow font-mono font-medium">
          Background &amp; Profile
        </span>
        <h2 className="text-4xl md:text-5xl font-display font-bold section-title-line mt-2">
          About <span className="gradient-text">Me</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
        {/* Profile Image Column (5 cols) with smooth 3D scroll interaction */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center [perspective:1000px]">
          <motion.div
            style={{
              translateY,
              rotateX,
              rotateY,
              scale,
              opacity,
              transformStyle: 'preserve-3d',
            }}
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="relative group will-change-transform"
          >
            {/* Ambient Animated Glow Rings that shift subtly with scroll */}
            <motion.div
              style={{ y: glowY }}
              className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-accent to-accent-glow blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 scale-105 pointer-events-none"
            />

            {/* Normal, clear, sharp Profile Picture Card */}
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-3xl overflow-hidden border-2 border-accent-glow/40 glass p-2 glow-shadow bg-dark-bg/80">
              <img
                src={personal.profileImage}
                alt="Anubhaw Mishra"
                loading="eager"
                onError={(e) => {
                  e.target.src = '/profile.jpg';
                }}
                className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Status Pill */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full glass border border-accent-glow/40 text-xs font-mono text-accent-glow whitespace-nowrap shadow-lg flex items-center gap-1.5 bg-dark-bg/90">
              <span className="w-2 h-2 rounded-full bg-accent-glow animate-pulse" />
              <span>Full-Stack &amp; AI Engineer</span>
            </div>
          </motion.div>
        </div>

        {/* Narrative & Info Cards Column (7 cols) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="lg:col-span-7 space-y-6 text-text-secondary text-sm sm:text-base leading-relaxed"
        >
          <div className="space-y-4">
            {aboutText.map((paragraph, idx) => (
              <p key={idx} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Animated Information Cards Grid */}
          <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3">
            {personal.infoCards.map((card, idx) => {
              const Icon = iconMap[card.icon] || Sparkles;
              return (
                <motion.div
                  key={card.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + idx * 0.08, duration: 0.4 }}
                  whileHover={{ y: -3, borderColor: 'rgba(57, 211, 83, 0.5)' }}
                  className="p-3.5 rounded-xl glass border border-border-color transition-all"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <Icon className="w-3.5 h-3.5 text-accent-glow" />
                    <span className="text-[11px] uppercase tracking-wider text-text-secondary font-mono">
                      {card.label}
                    </span>
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-text-primary">
                    {card.value}
                  </div>
                  {card.sub && (
                    <div className="text-[11px] text-accent-glow/80 mt-0.5">{card.sub}</div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
