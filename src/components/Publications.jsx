import { motion } from 'framer-motion';
import { BookOpen, ExternalLink, Award, FileText, CheckCircle2 } from 'lucide-react';
import { publications } from '../data/content';

export default function Publications() {
  return (
    <section id="publications" className="py-24" aria-label="Research & Publications">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <span className="text-xs uppercase tracking-widest text-accent-glow font-mono font-medium">
          Academic Research &amp; Papers
        </span>
        <h2 className="text-4xl md:text-5xl font-display font-bold section-title-line mt-2">
          Research &amp; <span className="gradient-text">Publications</span>
        </h2>
        <p className="max-w-xl mx-auto text-xs sm:text-sm text-text-secondary mt-4">
          Peer-reviewed research focusing on Convolutional Neural Networks, digital media forensics, and automated deepfake detection.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {publications.map((paper, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            className="premium-card flex flex-col justify-between border border-border-color hover:border-accent-glow/40 transition-all"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/15 border border-accent-glow/30 text-accent-glow text-xs font-mono font-semibold">
                  <Award className="w-3.5 h-3.5" />
                  <span>Peer-Reviewed</span>
                </div>
                <span className="text-xs font-mono text-text-secondary font-medium">
                  {paper.journalShort}
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-display font-bold text-text-primary mb-2 leading-snug">
                {paper.title}
              </h3>

              <p className="text-xs text-accent-glow font-medium mb-3">
                {paper.journal}
              </p>

              <p className="text-xs text-text-secondary/80 font-mono mb-4">
                {paper.details}
              </p>

              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-6">
                {paper.abstract}
              </p>
            </div>

            <div>
              <div className="flex flex-wrap gap-1.5 mb-6 pt-4 border-t border-border-color/60">
                {paper.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] px-2.5 py-0.5 rounded-md bg-dark-bg border border-border-color text-text-secondary font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {paper.doiUrl && (
                <a
                  href={paper.doiUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs px-3.5 py-2 rounded-lg bg-accent/20 border border-accent-glow/40 text-accent-glow hover:bg-accent hover:text-dark-bg font-semibold transition-all"
                  title="View DOI indexing"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  View DOI Publication (10.55041)
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
