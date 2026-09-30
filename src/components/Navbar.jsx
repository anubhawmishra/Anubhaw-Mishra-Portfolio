import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, Code2, Sparkles, FileText } from 'lucide-react';
import { personal } from '../data/content';
import AssistantAvatar from './assistant/AssistantAvatar';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Publications', href: '#publications' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar({ onOpenAssistant }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 25);

      // Calculate scroll progress percentage
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((scrollY / totalHeight) * 100);
      }

      // Detect active section
      const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'publications', 'education', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 180 && rect.bottom >= 180) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (href) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed w-full z-40 top-0 transition-all duration-300 ${
        scrolled ? 'glass-strong py-3 shadow-lg' : 'bg-transparent py-4'
      }`}
    >
      {/* Subtle Scroll Progress Bar */}
      <div
        className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-accent via-accent-glow to-accent transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      <nav className="container mx-auto px-6 flex justify-between items-center" aria-label="Main Navigation">
        {/* Brand / Logo */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleClick('#hero');
          }}
          className="flex items-center gap-2 group"
          aria-label="Back to top"
        >
          <span className="text-2xl sm:text-3xl font-display font-bold gradient-text">
            {personal.initials}
          </span>
          <span className="hidden sm:inline-block text-xs text-text-secondary font-mono tracking-wider opacity-60 group-hover:opacity-100 transition-opacity">
            / PORTFOLIO 2.0
          </span>
        </a>

        {/* Desktop Navigation Links with Active Indicator */}
        <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
          {navLinks.map((link) => {
            const sectionId = link.href.replace('#', '');
            const isActive = activeSection === sectionId;
            return (
              <button
                key={link.name}
                onClick={() => handleClick(link.href)}
                className={`text-sm transition-all duration-200 relative py-1 ${
                  isActive
                    ? 'text-accent-glow font-medium'
                    : 'text-text-secondary hover:text-accent-glow'
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.span
                    layoutId="activeIndicator"
                    className="absolute left-0 bottom-0 w-full h-0.5 bg-accent-glow rounded-full shadow-[0_0_8px_#39d353]"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Right CTA Actions: Ask AI, Resume, Socials */}
        <div className="hidden md:flex items-center space-x-3 xl:space-x-4">
          {/* "Ask AI" Assistant Trigger */}
          <button
            onClick={onOpenAssistant}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/15 border border-accent-glow/40 text-xs text-accent-glow font-medium hover:bg-accent hover:text-dark-bg transition-all duration-300 glow-shadow"
            title="Ask Anubhaw Assistant (AI Guide)"
          >
            <AssistantAvatar size={20} glow={false} />
            <span>Ask AI</span>
            <span className="w-1.5 h-1.5 rounded-full bg-accent-glow animate-pulse" />
          </button>

          {/* Resume Quick Link */}
          <a
            href={personal.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg glass border border-border-color text-xs text-text-primary hover:border-accent-glow hover:text-accent-glow transition-all"
            title="View Resume PDF"
          >
            <FileText className="w-3.5 h-3.5 text-accent-glow" />
            <span>Resume</span>
          </a>

          <div className="h-4 w-[1px] bg-border-color mx-1" />

          {/* Social Icons */}
          <a
            href={personal.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-accent-glow transition-all duration-200 hover:-translate-y-0.5"
            aria-label="LinkedIn"
            title="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={personal.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-accent-glow transition-all duration-200 hover:-translate-y-0.5"
            aria-label="GitHub"
            title="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={personal.socials.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-accent-glow transition-all duration-200 hover:-translate-y-0.5"
            aria-label="LeetCode"
            title="LeetCode Profile"
          >
            <Code2 className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Action & Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenAssistant}
            className="p-1.5 rounded-full bg-accent/20 border border-accent-glow/40 text-accent-glow"
            title="Ask AI"
            aria-label="Ask AI"
          >
            <AssistantAvatar size={24} glow={false} />
          </button>

          <button
            onClick={() => setOpen(!open)}
            className="p-2 text-text-secondary hover:text-accent-glow rounded-lg hover:bg-mid-bg"
            aria-label="Toggle mobile navigation menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden glass-strong border-b border-border-color"
          >
            <div className="px-6 py-5 space-y-3">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleClick(link.href)}
                  className="block w-full text-left py-2 text-sm text-text-secondary hover:text-accent-glow hover:pl-2 transition-all"
                >
                  {link.name}
                </button>
              ))}

              <div className="pt-4 mt-2 border-t border-border-color flex flex-wrap items-center justify-between gap-3">
                <a
                  href={personal.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs px-3.5 py-2 rounded-lg bg-accent/20 border border-accent-glow/40 text-accent-glow font-medium"
                >
                  <FileText className="w-3.5 h-3.5" />
                  Download Resume
                </a>

                <div className="flex items-center space-x-4">
                  <a href={personal.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <Linkedin className="w-4 h-4 text-text-secondary hover:text-accent-glow" />
                  </a>
                  <a href={personal.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <Github className="w-4 h-4 text-text-secondary hover:text-accent-glow" />
                  </a>
                  <a href={personal.socials.leetcode} target="_blank" rel="noopener noreferrer" aria-label="LeetCode">
                    <Code2 className="w-4 h-4 text-text-secondary hover:text-accent-glow" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
