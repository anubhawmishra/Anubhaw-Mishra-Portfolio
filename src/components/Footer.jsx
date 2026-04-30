import { Linkedin, Github, Code2 } from 'lucide-react';
import { personal } from '../data/content';

export default function Footer() {
  return (
    <footer className="relative z-10 py-10 border-t border-border-color/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-4">
          <div className="flex space-x-6">
            <a
              href={personal.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-accent-glow hover:-translate-y-0.5 transition-all duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={personal.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-accent-glow hover:-translate-y-0.5 transition-all duration-300"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={personal.socials.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-accent-glow hover:-translate-y-0.5 transition-all duration-300"
              title="LeetCode"
            >
              <Code2 className="w-5 h-5" />
            </a>
          </div>
          <p className="text-xs text-text-secondary">
            Designed & Built by{' '}
            <span className="gradient-text font-semibold">{personal.name}</span>
          </p>
          <p className="text-xs text-text-secondary/60">
            Built with React, Vite, Tailwind, Framer Motion, and React Three Fiber
          </p>
        </div>
      </div>
    </footer>
  );
}
