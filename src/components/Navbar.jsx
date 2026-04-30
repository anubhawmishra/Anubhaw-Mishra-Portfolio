import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, Code2 } from 'lucide-react';
import { personal } from '../data/content';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (href) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed w-full z-50 top-0 transition-all duration-300 ${
        scrolled ? 'glass-strong' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a
          href="#"
          className="text-3xl font-display font-bold gradient-text"
        >
          {personal.initials}
        </a>

        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleClick(link.href)}
              className="text-sm text-text-secondary hover:text-accent-glow transition-colors duration-300 relative group"
            >
              {link.name}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-accent-glow group-hover:w-full transition-all duration-300" />
            </button>
          ))}
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <a
            href={personal.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-accent-glow transition-all duration-300 hover:-translate-y-0.5"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href={personal.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-accent-glow transition-all duration-300 hover:-translate-y-0.5"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={personal.socials.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-accent-glow transition-all duration-300 hover:-translate-y-0.5"
            title="LeetCode"
          >
            <Code2 className="w-5 h-5" />
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-text-secondary hover:text-accent-glow"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden glass-strong"
          >
            <div className="px-6 py-4 space-y-3">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleClick(link.href)}
                  className="block w-full text-left py-2 text-text-secondary hover:text-accent-glow transition-colors"
                >
                  {link.name}
                </button>
              ))}
              <div className="flex space-x-4 pt-3 border-t border-border-color">
                <a href={personal.socials.linkedin} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5 text-text-secondary hover:text-accent-glow" />
                </a>
                <a href={personal.socials.github} target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 text-text-secondary hover:text-accent-glow" />
                </a>
                <a href={personal.socials.leetcode} target="_blank" rel="noopener noreferrer">
                  <Code2 className="w-5 h-5 text-text-secondary hover:text-accent-glow" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
