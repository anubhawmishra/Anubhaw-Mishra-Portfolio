import { motion } from 'framer-motion';
import { skills } from '../data/content';

import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaJava, FaPython, FaDatabase, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiSpringboot, SiPostgresql, SiPostman } from "react-icons/si";
import { TbApi, TbBrandVscode } from "react-icons/tb";
import { BsRobot, BsBraces } from "react-icons/bs";
import { MdDevices } from "react-icons/md";
import { RiBrainLine } from "react-icons/ri";
import { HiSparkles } from "react-icons/hi2";
import { FiLayers, FiCode } from "react-icons/fi";

const iconColorMap = {
  "JavaScript":        { icon: FaJs,           color: "#FACC15" },
  "Python":            { icon: FaPython,        color: "#60A5FA" },
  "Java":              { icon: FaJava,          color: "#EF4444" },
  "SQL":               { icon: FaDatabase,      color: "#3B82F6" },
  "React.js":          { icon: FaReact,         color: "#22D3EE" },
  "HTML5":             { icon: FaHtml5,         color: "#F97316" },
  "CSS3":              { icon: FaCss3Alt,       color: "#3B82F6" },
  "Tailwind CSS":      { icon: SiTailwindcss,   color: "#22D3EE" },
  "Responsive Design": { icon: MdDevices,       color: "#F472B6" },
  "REST APIs":         { icon: TbApi,           color: "#4ADE80" },
  "Node.js":           { icon: FaNodeJs,        color: "#22C55E" },
  "Spring Boot":       { icon: SiSpringboot,    color: "#22C55E" },
  "PostgreSQL":        { icon: SiPostgresql,    color: "#60A5FA" },
  "Git & GitHub":      { icon: FaGitAlt,        color: "#F97316" },
  "Postman":           { icon: SiPostman,       color: "#F97316" },
  "VS Code":           { icon: TbBrandVscode,   color: "#3B82F6" },
  "Data Structures":   { icon: BsBraces,        color: "#C084FC" },
  "OOP":               { icon: FiLayers,        color: "#FACC15" },
  "Agile / Scrum":     { icon: FiCode,          color: "#4ADE80" },
  "GenAI":             { icon: HiSparkles,      color: "#39D353" },
  "LLM Integration":   { icon: RiBrainLine,     color: "#39D353" },
  "RAG Systems":       { icon: BsRobot,         color: "#39D353" },
};

function SkillIcon({ name, size = 16 }) {
  const entry = iconColorMap[name];
  if (!entry) return <FiCode style={{ width: size, height: size }} />;
  const IconComp = entry.icon;
  return <IconComp style={{ width: size, height: size, color: entry.color, flexShrink: 0 }} />;
}

function SkillCard({ skill, index, glow = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -6, rotateX: 5, rotateY: 5, scale: 1.05 }}
      style={{ transformStyle: 'preserve-3d' }}
      className={`relative group flex items-center gap-2.5 px-4 py-2.5 glass rounded-xl cursor-default transition-all duration-300 ${
        glow
          ? 'border-accent-glow/60 hover:border-accent-glow hover:shadow-[0_0_20px_rgba(57,211,83,0.5)]'
          : 'hover:border-accent-glow/50'
      }`}
    >
      <div className={`p-1.5 rounded-lg ${
        glow ? 'bg-accent-glow/20' : 'bg-mid-bg group-hover:bg-accent-glow/10'
      } transition-colors`}>
        <SkillIcon name={skill.name} size={16} />
      </div>
      <span className={`text-sm ${glow ? 'text-accent-glow font-medium' : 'text-text-primary'}`}>
        {skill.name}
      </span>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-display font-bold text-center section-title-line mb-16"
      >
        Core <span className="gradient-text">Technologies</span>
      </motion.h2>

      <div className="max-w-5xl mx-auto space-y-10">
        {skills.map((category, categoryIdx) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: categoryIdx * 0.1 }}
          >
            <p className="text-sm text-text-secondary mb-4 uppercase tracking-widest font-medium">
              {category.category}
            </p>
            <div className="flex flex-wrap gap-3">
              {category.items.map((skill, idx) => (
                <SkillCard key={skill.name} skill={skill} index={idx} glow={skill.glow} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}