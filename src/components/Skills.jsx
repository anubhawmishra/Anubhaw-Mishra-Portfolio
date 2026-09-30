import { motion } from 'framer-motion';
import { skills } from '../data/content';

import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaJava,
  FaPython,
  FaDatabase,
  FaGitAlt,
  FaGithub,
} from 'react-icons/fa';
import {
  SiTailwindcss,
  SiPostgresql,
  SiSqlite,
  SiPrisma,
  SiTensorflow,
  SiKeras,
  SiOpencv,
  SiPostman,
  SiExpress,
  SiC,
} from 'react-icons/si';
import { TbApi } from 'react-icons/tb';
import { BsCpu, BsBraces } from 'react-icons/bs';
import { MdDevices } from 'react-icons/md';
import { RiBrainLine } from 'react-icons/ri';
import { HiSparkles } from 'react-icons/hi2';
import { FiLayers, FiCode, FiRepeat, FiGitPullRequest, FiCheckCircle } from 'react-icons/fi';

const iconMap = {
  // Programming Languages
  Python: { icon: FaPython, color: '#38BDF8' },
  Java: { icon: FaJava, color: '#EF4444' },
  JavaScript: { icon: FaJs, color: '#FACC15' },
  SQL: { icon: FaDatabase, color: '#60A5FA' },
  C: { icon: SiC, color: '#A855F7' },

  // Frontend
  'React.js': { icon: FaReact, color: '#22D3EE' },
  HTML5: { icon: FaHtml5, color: '#F97316' },
  CSS3: { icon: FaCss3Alt, color: '#38BDF8' },
  'Tailwind CSS': { icon: SiTailwindcss, color: '#38BDF8' },
  'Responsive Web Design': { icon: MdDevices, color: '#EC4899' },

  // Backend & APIs
  'Node.js': { icon: FaNodeJs, color: '#22C55E' },
  'Express.js': { icon: SiExpress, color: '#E2E8F0' },
  'REST APIs': { icon: TbApi, color: '#4ADE80' },

  // Databases & ORM
  PostgreSQL: { icon: SiPostgresql, color: '#60A5FA' },
  SQLite: { icon: SiSqlite, color: '#38BDF8' },
  'Prisma ORM': { icon: SiPrisma, color: '#34D399' },

  // AI & ML
  'Google Gemini': { icon: HiSparkles, color: '#39D353' },
  'LLM API Integration': { icon: RiBrainLine, color: '#39D353' },
  TensorFlow: { icon: SiTensorflow, color: '#FB923C' },
  Keras: { icon: SiKeras, color: '#EF4444' },
  'CNN (Deep Learning)': { icon: BsCpu, color: '#818CF8' },
  OpenCV: { icon: SiOpencv, color: '#34D399' },

  // Tools & Engineering
  Git: { icon: FaGitAlt, color: '#F97316' },
  GitHub: { icon: FaGithub, color: '#F1F5F9' },
  Postman: { icon: SiPostman, color: '#FB923C' },
  'CI/CD': { icon: FiRepeat, color: '#38BDF8' },
  'Agile / Scrum': { icon: FiGitPullRequest, color: '#4ADE80' },
  'Testing & Debugging': { icon: FiCheckCircle, color: '#A78BFA' },
  'Data Structures & Algorithms': { icon: BsBraces, color: '#C084FC' },
  'Object-Oriented Programming': { icon: FiLayers, color: '#FACC15' },
};

function SkillBadge({ skill, index, glow = false }) {
  const meta = iconMap[skill.name] || { icon: FiCode, color: '#39d353' };
  const IconComponent = meta.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.35, delay: index * 0.04 }}
      whileHover={{ y: -4, scale: 1.04 }}
      className={`group flex items-center gap-2.5 px-3.5 py-2 glass rounded-xl cursor-default transition-all duration-200 border ${
        glow
          ? 'border-accent-glow/50 bg-accent/10 shadow-[0_0_15px_rgba(57,211,83,0.15)] hover:border-accent-glow hover:shadow-[0_0_20px_rgba(57,211,83,0.3)]'
          : 'border-border-color hover:border-accent-glow/50 hover:bg-mid-bg'
      }`}
    >
      <div
        className={`p-1.5 rounded-lg flex items-center justify-center transition-colors ${
          glow ? 'bg-accent-glow/20' : 'bg-mid-bg group-hover:bg-dark-bg'
        }`}
      >
        <IconComponent
          style={{ color: meta.color }}
          className="w-4 h-4 flex-shrink-0 transition-transform group-hover:scale-110"
        />
      </div>
      <span
        className={`text-xs sm:text-sm font-medium ${
          glow ? 'text-accent-glow font-semibold' : 'text-text-primary'
        }`}
      >
        {skill.name}
      </span>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24" aria-label="Technical Skills & Competencies">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <span className="text-xs uppercase tracking-widest text-accent-glow font-mono font-medium">
          Proficiency &amp; Tooling
        </span>
        <h2 className="text-4xl md:text-5xl font-display font-bold section-title-line mt-2">
          Technical <span className="gradient-text">Skills</span>
        </h2>
      </motion.div>

      <div className="max-w-5xl mx-auto space-y-8">
        {skills.map((category, catIdx) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.45, delay: catIdx * 0.08 }}
            className="p-5 sm:p-6 rounded-2xl glass-strong border border-border-color"
          >
            <h3 className="text-xs uppercase tracking-widest text-accent-glow font-mono font-semibold mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-glow" />
              {category.category}
            </h3>

            <div className="flex flex-wrap gap-2.5">
              {category.items.map((skill, idx) => (
                <SkillBadge key={skill.name} skill={skill} index={idx} glow={skill.glow} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}