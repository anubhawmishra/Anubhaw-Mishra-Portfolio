import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Code2, Phone, MapPin, FileText, Sparkles } from 'lucide-react';
import { personal } from '../data/content';
import AssistantAvatar from './assistant/AssistantAvatar';

const links = [
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: personal.socials.linkedin,
    color: '#0A66C2',
  },
  {
    icon: Github,
    label: 'GitHub',
    href: personal.socials.github,
    color: '#F1F5F9',
  },
  {
    icon: Code2,
    label: 'LeetCode',
    href: personal.socials.leetcode,
    color: '#FFA116',
  },
];

export default function Contact({ onOpenAssistant }) {
  return (
    <section id="contact" className="py-24 text-center" aria-label="Contact Anubhaw Mishra">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="mb-12 inline-block"
      >
        <span className="text-xs uppercase tracking-widest text-accent-glow font-mono font-medium">
          Let's Connect
        </span>
        <h2 className="text-4xl md:text-5xl font-display font-bold section-title-line mt-2">
          Get In <span className="gradient-text">Touch</span>
        </h2>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="max-w-xl mx-auto text-sm sm:text-base text-text-secondary mb-10 leading-relaxed font-sans"
      >
        I am actively seeking full-time **Software Engineer**, **SDE**, and **Full Stack Developer** opportunities.
        Whether you have an open role, an interesting project, or want to discuss technical architectures, my inbox is open.
      </motion.p>

      {/* Main Mail CTA */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-wrap justify-center gap-4 mb-10"
      >
        <motion.a
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.98 }}
          href={`mailto:${personal.email}`}
          className="inline-flex items-center gap-2.5 px-8 py-4 bg-gradient-to-r from-accent to-accent-glow text-dark-bg font-semibold rounded-xl glow-shadow hover:glow-shadow-lg transition-all duration-300 text-sm"
        >
          <Mail className="w-4 h-4" />
          {personal.email}
        </motion.a>

        <motion.button
          onClick={onOpenAssistant}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center gap-2.5 px-7 py-4 glass border border-accent-glow/40 text-accent-glow hover:border-accent-glow rounded-xl transition-all duration-300 text-sm font-medium"
        >
          <AssistantAvatar size={22} glow={false} />
          Ask Assistant
        </motion.button>
      </motion.div>

      {/* Social Profiles */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex flex-wrap justify-center gap-3.5 mb-10"
      >
        {links.map((link) => (
          <motion.a
            key={link.label}
            whileHover={{ y: -3, borderColor: '#39d353' }}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 glass rounded-xl text-text-secondary hover:text-accent-glow border border-border-color transition-all text-xs sm:text-sm font-medium"
          >
            <link.icon className="w-4 h-4" />
            <span>{link.label}</span>
          </motion.a>
        ))}

        <motion.a
          whileHover={{ y: -3, borderColor: '#39d353' }}
          href={personal.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-2.5 glass rounded-xl text-text-secondary hover:text-accent-glow border border-border-color transition-all text-xs sm:text-sm font-medium"
        >
          <FileText className="w-4 h-4 text-accent-glow" />
          <span>Resume (PDF)</span>
        </motion.a>
      </motion.div>

      {/* Location & Phone Information */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-xs sm:text-sm text-text-secondary font-mono"
      >
        <span className="inline-flex items-center gap-1.5">
          <Phone className="w-3.5 h-3.5 text-accent-glow" />
          {personal.phone}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <MapPin className="w-3.5 h-3.5 text-accent-glow" />
          {personal.location}
        </span>
      </motion.div>
    </section>
  );
}
