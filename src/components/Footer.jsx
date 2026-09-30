import { Linkedin, Github, Code2, Heart, FileText } from 'lucide-react';
import { personal } from '../data/content';

export default function Footer() {
  return (
    <footer className="relative z-10 py-12 border-t border-border-color/60 bg-dark-bg/90">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-5">
          {/* Social Links */}
          <div className="flex space-x-6 items-center">
            <a
              href={personal.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-accent-glow hover:-translate-y-0.5 transition-all duration-200"
              aria-label="LinkedIn Profile"
              title="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={personal.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-accent-glow hover:-translate-y-0.5 transition-all duration-200"
              aria-label="GitHub Profile"
              title="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={personal.socials.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-accent-glow hover:-translate-y-0.5 transition-all duration-200"
              aria-label="LeetCode Profile"
              title="LeetCode"
            >
              <Code2 className="w-5 h-5" />
            </a>
            <a
              href={personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-accent-glow hover:-translate-y-0.5 transition-all duration-200"
              aria-label="Download Resume"
              title="Resume"
            >
              <FileText className="w-5 h-5" />
            </a>
          </div>

          <div className="text-center space-y-1.5">
            <p className="text-xs sm:text-sm text-text-secondary font-mono">
              Designed &amp; Engineered by{' '}
              <span className="gradient-text font-bold">{personal.name}</span>
            </p>
            <p className="text-[11px] text-text-secondary/60 font-mono">
              Software Engineer Portfolio 2.0 · React · Node.js · PostgreSQL · Tailwind · Three.js · Gemini AI
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
