import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Code2, Phone, MapPin } from 'lucide-react';
import { personal } from '../data/content';

const links = [
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: personal.socials.linkedin,
  },
  {
    icon: Github,
    label: 'GitHub',
    href: personal.socials.github,
  },
  {
    icon: Code2,
    label: 'LeetCode',
    href: personal.socials.leetcode,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-display font-bold section-title-line mb-12 inline-block"
      >
        Get In <span className="gradient-text">Touch</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="max-w-xl mx-auto text-text-secondary mb-10 leading-relaxed"
      >
        I'm actively looking for opportunities. If you have a role, a project, or just want to connect, my inbox is open.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex justify-center mb-10"
      >
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          href={`mailto:${personal.email}`}
          className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-accent to-accent-glow text-dark-bg font-semibold rounded-xl glow-shadow hover:glow-shadow-lg transition-all duration-300"
        >
          <Mail className="w-5 h-5" />
          {personal.email}
        </motion.a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex flex-wrap justify-center gap-4 mb-8"
      >
        {links.map((link) => (
          <motion.a
            key={link.label}
            whileHover={{ y: -4 }}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 glass rounded-lg text-text-secondary hover:text-accent-glow hover:border-accent-glow/50 transition-all"
          >
            <link.icon className="w-4 h-4" />
            <span className="text-sm">{link.label}</span>
          </motion.a>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-text-secondary"
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
