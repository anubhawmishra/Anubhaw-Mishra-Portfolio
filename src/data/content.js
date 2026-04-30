// Single source of truth for all portfolio content.
// Update this file to change resume info, projects, etc.

export const personal = {
  name: 'Anubhaw Mishra',
  initials: 'AM',
  role: 'Frontend Developer',
  tagline: 'React.js | JavaScript | REST APIs',
  about:
    "Computer Science graduate building clean, functional web apps. Currently exploring Spring Boot, Angular JS, and GenAI/LLM integration.",
  location: 'Pune, Maharashtra',
  email: 'anubhawmishra002@gmail.com',
  phone: '+91 9939550413',
  resumeUrl: '/Resume.pdf', // place Resume.pdf in /public
  profileImage: '/profile.jpg', // place profile.jpg in /public
  socials: {
    linkedin: 'https://linkedin.com/in/anubhaw-mishra002',
    github: 'https://github.com/anubhawmishra',
    leetcode: 'https://leetcode.com/u/Anubhaw_M',
  },
  badges: [
    { icon: 'MapPin', label: 'Pune, Maharashtra' },
    { icon: 'GraduationCap', label: 'B.E. CS — CGPA 7.50' },
    { icon: 'Calendar', label: 'Batch 2026' },
  ],
};

export const aboutText = [
  "I'm a frontend-focused developer with a B.E. in Computer Science (Honors in Cyber Security) from Savitribai Phule Pune University, graduated Feb 2026.",
  "I enjoy building clean, responsive web applications using React.js, JavaScript, and REST APIs. I've also worked with PostgreSQL and have an ongoing certification in Full Stack Development with AI, so I'm getting into the backend and GenAI space too.",
  "Outside of web dev, I built a Deepfake Image Detection system using CNNs in Python. That project got me genuinely curious about how AI models work under the hood and led to two peer-reviewed publications.",
  "I'm currently looking for opportunities where I can contribute to real products, keep learning, and work with people who take their craft seriously.",
];

export const skills = [
  {
    category: 'Languages',
    items: [
      { name: 'JavaScript', icon: 'FileCode2' },
      { name: 'Python', icon: 'Code2' },
      { name: 'Java', icon: 'Coffee' },
      { name: 'SQL', icon: 'Database' },
    ],
  },
  {
    category: 'Frontend',
    items: [
      { name: 'React.js', icon: 'Atom' },
      { name: 'HTML5', icon: 'FileCode' },
      { name: 'CSS3', icon: 'Palette' },
      { name: 'Tailwind CSS', icon: 'Wind' },
      { name: 'Responsive Design', icon: 'Smartphone' },
    ],
  },
  {
    category: 'Backend & Database',
    items: [
      { name: 'REST APIs', icon: 'Server' },
      { name: 'Node.js', icon: 'Boxes' },
      { name: 'Spring Boot', icon: 'Leaf' },
      { name: 'PostgreSQL', icon: 'Database' },
    ],
  },
  {
    category: 'Tools & Concepts',
    items: [
      { name: 'Git & GitHub', icon: 'GitBranch' },
      { name: 'Postman', icon: 'Send' },
      { name: 'VS Code', icon: 'Code' },
      { name: 'Data Structures', icon: 'Network' },
      { name: 'OOP', icon: 'Layers' },
      { name: 'Agile / Scrum', icon: 'Workflow' },
    ],
  },
  {
    category: 'Currently Exploring',
    items: [
      { name: 'GenAI', icon: 'Sparkles', glow: true },
      { name: 'LLM Integration', icon: 'BrainCircuit', glow: true },
      { name: 'RAG Systems', icon: 'Bot', glow: true },
    ],
  },
];

export const experience = [
  {
    period: 'Jan 2023 - Feb 2023',
    title: 'Web Developer Intern',
    company: 'Oasis Infobyte',
    location: 'Remote',
    points: [
      'Built 4-5 responsive web pages using HTML, CSS, and JavaScript. Developed reusable UI components and connected REST APIs to render dynamic content on the front end.',
      'Used Git for version control throughout the project, raised pull requests, and worked through code review feedback. First real exposure to a collaborative development workflow.',
      'Tested pages manually across Chrome and Firefox to catch layout issues. Fixed CSS bugs that were breaking the mobile view before final delivery.',
    ],
    tech: ['HTML5', 'CSS3', 'JavaScript', 'REST APIs', 'Git'],
  },
];

export const projects = [
  {
    title: 'Personal Portfolio (React)',
    description:
      'A fully animated, modern developer portfolio built from scratch. Features a 3D particle background using React Three Fiber, glassmorphism UI, smooth Framer Motion animations, interactive skill cards with real tech logos, tilt-on-hover project cards, and a responsive dark theme. Deployed on Vercel.',
    tech: ['React.js', 'Vite', 'Tailwind CSS', 'Framer Motion', 'React Three Fiber', 'React Icons'],
    github: 'https://github.com/anubhawmishra',
    live: 'https://anubhaw-mishra-portfolio.vercel.app',
    image:
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=400&fit=crop',
    color: 'green',
  },
  {
    title: 'Deepfake Detection System',
    description:
      'CNN-based pipeline that classifies real vs. fake images. Handled preprocessing (OpenCV), training (TensorFlow + Keras), and evaluation using accuracy / precision / recall / F1. Hit 95%+ accuracy. Published in JETIR and IJSREM.',
    tech: ['Python', 'TensorFlow', 'CNN', 'OpenCV', 'SQLite'],
    github: 'https://github.com/anubhawmishra',
    live: null,
    image:
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop',
    color: 'blue',
    badge: 'Published',
  },
  {
    title: 'Online Examination System',
    description:
      'Console-based exam platform built in Java applying all four OOP pillars. Login auth, password reset, timed MCQ flow, positive/negative scoring. HashMap for O(1) credential lookup, modular MVC-style controller.',
    tech: ['Java', 'OOP', 'Java Collections', 'MVC'],
    github: 'https://github.com/anubhawmishra',
    live: null,
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=400&fit=crop',
    color: 'orange',
  },
  {
    title: 'Mini Web Applications',
    description:
      'Three small apps built during internship: Calculator, To-Do List, and Weather App that fetches live data from OpenWeatherMap REST API using async/await. Clean separation of JS logic and UI layers.',
    tech: ['JavaScript', 'REST API', 'HTML', 'CSS'],
    github: 'https://github.com/anubhawmishra',
    live: null,
    image:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop',
    color: 'yellow',
  },
];

export const certifications = [
  {
    name: 'Full Stack Developer with AI',
    issuer: 'Physics Wallah',
    status: 'Ongoing',
  },
  {
    name: 'RDBMS PostgreSQL',
    issuer: 'IIT Bombay Spoken Tutorial',
    status: 'Completed',
  },
  {
    name: 'Web Development (8 weeks)',
    issuer: 'Internshala',
    status: 'Completed',
  },
  {
    name: 'Python & C Programming',
    issuer: 'IIT Bombay Spoken Tutorial',
    status: 'Completed',
  },
  {
    name: 'FinTech Engineering Virtual Experience',
    issuer: 'Goldman Sachs (Forage)',
    status: 'Completed',
  },
];

export const publications = [
  {
    title: 'Guarding Authenticity: Detection for Deepfake',
    journal: 'JETIR',
    details: 'Vol. 11, Issue 5, May 2024 (IF: 7.95)',
  },
  {
    title: 'Guarding Authenticity: A Deepfake Detection System',
    journal: 'IJSREM',
    details: 'Vol. 8, Issue 5, May 2024 (IF: 8.448, DOI: 10.55041/IJSREM34789)',
  },
];
