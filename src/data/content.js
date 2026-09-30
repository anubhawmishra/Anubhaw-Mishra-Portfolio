// Single source of truth for Anubhaw Mishra's Developer Portfolio 2.0
// Strictly grounded on verified projects, credentials, and achievements.

export const personal = {
  name: 'Anubhaw Mishra',
  initials: 'AM',
  role: 'Software Engineer',
  rotatingRoles: [
    'Software Engineer',
    'Full Stack Developer',
    'Frontend Developer',
    'React Developer',
    'AI/ML Enthusiast',
  ],
  tagline: 'React.js · Node.js · PostgreSQL · Python · Java · REST APIs · AI/ML',
  about:
    '2026 Computer Science graduate (Honors in Cyber Security) building high-performance full-stack web applications, scalable REST APIs, and AI/LLM integrations.',
  location: 'Pune, Maharashtra, India',
  email: 'anubhawmishra002@gmail.com',
  phone: '+91 9939550413',
  resumeUrl: '/Resume.pdf',
  profileImage: '/Profile.jpg',
  socials: {
    linkedin: 'https://linkedin.com/in/anubhaw-mishra002',
    github: 'https://github.com/anubhawmishra',
    leetcode: 'https://leetcode.com/u/Anubhaw_M',
  },
  targetRoles: [
    'Software Engineer',
    'Software Development Engineer (SDE)',
    'Full Stack Developer',
    'Frontend Developer',
    'React Developer',
  ],
  badges: [
    { icon: 'MapPin', label: 'Pune, Maharashtra, India' },
    { icon: 'GraduationCap', label: 'B.E. Computer Science · CGPA 7.50' },
    { icon: 'ShieldCheck', label: 'Honors in Cyber Security' },
    { icon: 'Calendar', label: 'Batch Feb 2021 – Feb 2026' },
  ],
  infoCards: [
    { label: 'Location', value: 'Pune, India', icon: 'MapPin' },
    { label: 'Degree', value: 'B.E. Computer Science', sub: 'SPPU', icon: 'GraduationCap' },
    { label: 'Graduation', value: 'Feb 2026', sub: 'CGPA 7.50 / 10', icon: 'Calendar' },
    { label: 'Specialization', value: 'Honors in Cyber Security', sub: 'Research in AI/CNN', icon: 'ShieldCheck' },
    { label: 'Primary Focus', value: 'Full-Stack & AI Systems', sub: 'React · Node · Postgres · Python', icon: 'Sparkles' },
  ],
};

export const aboutText = [
  "I am a Computer Science graduate (Honors in Cyber Security) from Savitribai Phule Pune University (Feb 2021 – Feb 2026, CGPA 7.50/10) focused on Software Engineering and Full-Stack Development.",
  "My core engineering stack spans React.js, Node.js, Express.js, PostgreSQL, and Prisma ORM, complemented by systems and data engineering in Python, Java, SQL, and C. I specialize in building responsive, modern user interfaces and pairing them with robust REST APIs and database architectures.",
  "Beyond conventional web development, I build production-grade AI-powered applications — including full-stack LLM integrations (like JARVIS and PITCH™) and peer-reviewed Deepfake Detection systems utilizing Convolutional Neural Networks (CNNs) and OpenCV, with research published in JETIR and IJSREM.",
  "I am actively targeting Software Engineer, SDE, Full Stack Developer, and Frontend Developer roles where I can architect reliable software, write clean testable code, and deliver measurable product value."
];

export const skills = [
  {
    category: 'Programming Languages',
    items: [
      { name: 'Python', icon: 'FaPython', color: '#38BDF8' },
      { name: 'Java', icon: 'FaJava', color: '#EF4444' },
      { name: 'JavaScript', icon: 'FaJs', color: '#FACC15' },
      { name: 'SQL', icon: 'FaDatabase', color: '#60A5FA' },
      { name: 'C', icon: 'SiC', color: '#A855F7' },
    ],
  },
  {
    category: 'Frontend Development',
    items: [
      { name: 'React.js', icon: 'FaReact', color: '#22D3EE' },
      { name: 'HTML5', icon: 'FaHtml5', color: '#F97316' },
      { name: 'CSS3', icon: 'FaCss3Alt', color: '#38BDF8' },
      { name: 'Tailwind CSS', icon: 'SiTailwindcss', color: '#38BDF8' },
      { name: 'Responsive Web Design', icon: 'MdDevices', color: '#EC4899' },
    ],
  },
  {
    category: 'Backend & APIs',
    items: [
      { name: 'Node.js', icon: 'FaNodeJs', color: '#22C55E' },
      { name: 'Express.js', icon: 'SiExpress', color: '#E2E8F0' },
      { name: 'REST APIs', icon: 'TbApi', color: '#4ADE80' },
    ],
  },
  {
    category: 'Databases & ORM',
    items: [
      { name: 'PostgreSQL', icon: 'SiPostgresql', color: '#60A5FA' },
      { name: 'SQLite', icon: 'SiSqlite', color: '#38BDF8' },
      { name: 'Prisma ORM', icon: 'SiPrisma', color: '#34D399' },
    ],
  },
  {
    category: 'AI / Machine Learning',
    items: [
      { name: 'Google Gemini', icon: 'HiSparkles', color: '#39D353', glow: true },
      { name: 'LLM API Integration', icon: 'RiBrainLine', color: '#39D353', glow: true },
      { name: 'TensorFlow', icon: 'SiTensorflow', color: '#FB923C' },
      { name: 'Keras', icon: 'SiKeras', color: '#EF4444' },
      { name: 'CNN (Deep Learning)', icon: 'BsCpu', color: '#818CF8' },
      { name: 'OpenCV', icon: 'SiOpencv', color: '#34D399' },
    ],
  },
  {
    category: 'Tools & Engineering Practices',
    items: [
      { name: 'Git', icon: 'FaGitAlt', color: '#F97316' },
      { name: 'GitHub', icon: 'FaGithub', color: '#F1F5F9' },
      { name: 'Postman', icon: 'SiPostman', color: '#FB923C' },
      { name: 'CI/CD', icon: 'FiRepeat', color: '#38BDF8' },
      { name: 'Agile / Scrum', icon: 'FiWorkflow', color: '#4ADE80' },
      { name: 'Testing & Debugging', icon: 'FiCheckCircle', color: '#A78BFA' },
      { name: 'Data Structures & Algorithms', icon: 'BsBraces', color: '#C084FC' },
      { name: 'Object-Oriented Programming', icon: 'FiLayers', color: '#FACC15' },
    ],
  },
];

export const experience = [
  {
    period: 'Jan 2023 – Feb 2023',
    title: 'Web Development & Designing Intern',
    company: 'Oasis Infobyte',
    location: 'Remote',
    points: [
      'Built and debugged responsive web interfaces using HTML, CSS and JavaScript.',
      'Worked with reusable UI components and REST API integration.',
      'Used Git-based development workflows and incorporated feedback.',
      'Tested interfaces across browsers and fixed responsive/mobile layout issues.',
      'Improved usability of assigned web projects.',
    ],
    tech: ['HTML5', 'CSS3', 'JavaScript', 'REST APIs', 'Git', 'Responsive Design'],
  },
];

export const projects = [
  {
    id: 'jarvis',
    title: 'AI Resume & Job Matcher — JARVIS',
    shortTitle: 'JARVIS',
    category: 'Full-Stack / AI & LLM',
    tagline: 'AI-powered resume & job description analysis with ATS scoring & interview prep',
    description:
      'A comprehensive full-stack career analytics platform that analyzes applicant resumes against target job descriptions using AI. Features skill matching, missing skill identification, ATS optimization recommendations, and tailored technical interview question generation.',
    longDescription:
      'JARVIS bridges the gap between candidates and ATS systems. Users can upload resumes and match them against target job descriptions to receive instant compatibility scoring, actionable skill gap breakdowns, bullet-point improvement suggestions, and dynamically generated interview questions tailored to the position.',
    problem:
      'Job seekers struggle to understand how ATS parsers evaluate their resumes and often miss critical keyword matches, leading to low interview callback rates without actionable feedback.',
    solution:
      'Engineered an automated pipeline that parses unstructured resume text and job specifications, runs semantic evaluation via LLM prompts, generates granular ATS compatibility metrics, and suggests targeted resume improvements.',
    architecture:
      'React frontend communicating with a Node.js/Express REST API. Server-side prompt engineering orchestrates LLM analysis with structured JSON schema outputs, ensuring consistent response formatting and fast client-side rendering.',
    features: [
      'Resume & Job Description Analysis',
      'Semantic Skill Matching & Gap Detection',
      'ATS-Oriented Compatibility Scoring',
      'Bullet-Point Resume Improvement Recommendations',
      'Dynamic Technical Interview Question Generator',
      'Interactive AI Career Assistant Guide',
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'REST APIs', 'LLM API Integration', 'Tailwind CSS'],
    engineeringHighlights: [
      'Engineered robust JSON schema validation for LLM responses to avoid parsing failures',
      'Designed responsive UI with real-time analysis progress states and match breakdowns',
      'Implemented secure REST endpoints separating API credentials from client code',
    ],
    github: 'https://github.com/anubhawmishra/AI-Resume-Job-Matcher',
    live: 'https://frontend-eight-xi-61.vercel.app/',
    image: '/projects/jarvis.svg',
    accent: '#8B5CF6',
    color: 'purple',
    badge: 'Live Demo',
  },
  {
    id: 'jobtrack',
    title: 'JobTrack — Job Application Tracker',
    shortTitle: 'JobTrack',
    category: 'Full-Stack Web Application',
    tagline: 'Modern job application tracker with status workflows, search, and JWT auth',
    description:
      'A full-stack web application designed for developers and job seekers to organize, track, and manage their job applications. Features status pipeline management, recruiter notes, search, filtering, and secure JWT authentication.',
    longDescription:
      'JobTrack replaces chaotic spreadsheets with a structured SaaS-grade workflow. Built on React and a PostgreSQL database managed via Prisma ORM, it enables users to record applications, track recruitment stages (Applied, Screening, Interview, Offer, Rejected), filter by company/role, and maintain interview contacts securely.',
    problem:
      'Managing dozens of concurrent job applications across multiple portals leads to missed follow-ups, lost recruiter contacts, and lack of visibility into interview pipelines.',
    solution:
      'Built a dedicated tracking system with authenticated user sessions, relational database storage for application histories, and real-time status transitions.',
    architecture:
      'React frontend styled with Tailwind CSS, communicating with a Node.js & Express RESTful API. Relational persistence backed by PostgreSQL using Prisma ORM with JWT authentication and bcrypt password hashing.',
    features: [
      'Complete Job Application Lifecycle Management (Applied, Interviewing, Offer, etc.)',
      'Company, Role, Location, and Recruiter Contact Records',
      'Fast Real-Time Search, Filtering, and Sorting',
      'Secure User Authentication via JWT & bcrypt',
      'Relational Data Schema via PostgreSQL & Prisma ORM',
      'Dark/Light UI with Fully Responsive Mobile Support',
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'Prisma ORM', 'JWT', 'REST APIs', 'Tailwind CSS'],
    engineeringHighlights: [
      'Modeled clean relational schema with Prisma ORM for users, jobs, and status logs',
      'Secured backend endpoints with token-based JWT middleware and parameterized SQL queries',
      'Optimized client state with instant UI updates upon status changes',
    ],
    github: 'https://github.com/anubhawmishra/Job-Application-Tracker',
    live: 'https://job-application-tracker-eosin-gamma.vercel.app/',
    image: '/projects/jobtrack.svg',
    accent: '#3B82F6',
    color: 'blue',
    badge: 'Live Demo',
  },
  {
    id: 'pitch',
    title: 'PITCH™ — Full-Stack AI Cricket E-Commerce Platform',
    shortTitle: 'PITCH™',
    category: 'Full-Stack / AI E-Commerce',
    tagline: 'Full-stack cricket e-commerce with FRIDAY AI shopping assistant & Razorpay test mode',
    description:
      'A full-stack AI-powered cricket e-commerce platform featuring dynamic product catalogs, search, filtering, wishlist, shopping cart, checkout, custom bat builder, Razorpay Test Mode integration, and "FRIDAY" — a Google Gemini conversational shopping assistant.',
    longDescription:
      'PITCH™ delivers a tailored e-commerce experience built specifically for cricket athletes and fans. It combines complete retail workflows (catalog browsing, sorting, shopping cart, wishlist, orders, Razorpay test payments) with interactive product configuration (custom bat builder) and FRIDAY, an embedded Google Gemini AI assistant that helps users select equipment based on playing style and specifications.',
    problem:
      'Standard generic e-commerce stores fail to provide domain-specific equipment guidance (such as bat willow grade, weight distribution, and playing condition advice) needed by serious cricketers.',
    solution:
      'Created a specialized cricket marketplace with a custom bat configuration tool and FRIDAY, a domain-trained AI shopping assistant that recommends gear based on user preferences and budget.',
    architecture:
      'React (Vite) frontend with Tailwind CSS and interactive animations. Node.js and Express backend with PostgreSQL & Prisma ORM persistence, JWT/bcrypt user security, Google Gemini API for the FRIDAY assistant, and Razorpay test payment integration.',
    features: [
      'FRIDAY AI Shopping Assistant (powered by Google Gemini)',
      'Custom Bat Builder & Interactive Equipment Configurator',
      'Complete E-Commerce Flow: Product Search, Filter, Sort, Cart, Wishlist, Checkout',
      'Razorpay Test Mode Payment Gateway Integration',
      'Secure Authentication with JWT and bcrypt Password Hashing',
      'PostgreSQL Relational Storage managed via Prisma ORM',
    ],
    tech: [
      'React.js',
      'Vite',
      'Tailwind CSS',
      'Node.js',
      'Express.js',
      'PostgreSQL',
      'Prisma ORM',
      'Google Gemini',
      'Razorpay (Test)',
      'JWT',
    ],
    engineeringHighlights: [
      'Implemented FRIDAY conversational assistant integrating Google Gemini with cricket domain context',
      'Engineered interactive custom bat configurator with dynamic price and spec calculation',
      'Integrated Razorpay test payment flow with backend signature verification and order state handling',
    ],
    github: 'https://github.com/anubhawmishra/PITCH-Cricket-E-Commerce',
    live: null,
    image: '/projects/pitch.svg',
    accent: '#22C55E',
    color: 'green',
    badge: 'AI-Powered',
  },
  {
    id: 'deepfake',
    title: 'Deepfake Detection System',
    shortTitle: 'Deepfake Detection',
    category: 'Computer Vision / Deep Learning',
    tagline: 'CNN-based visual media classification with OpenCV preprocessing (95%+ accuracy)',
    description:
      'A computer vision pipeline utilizing Convolutional Neural Networks (CNNs) and OpenCV to classify real vs. manipulated facial imagery. Achieved 95%+ classification accuracy and published in two peer-reviewed journals (JETIR and IJSREM).',
    longDescription:
      'With the exponential rise of manipulated synthetic media, this project engineered a deep learning pipeline to detect subtle facial artifacts and blending inconsistencies introduced by generative deepfake algorithms. Using OpenCV for face detection, alignment, and frame normalization, followed by a multi-layer CNN trained via TensorFlow/Keras, the system detects falsified media with high precision.',
    problem:
      'Hyper-realistic generative deepfakes pose significant risks to information integrity, identity security, and digital trust, demanding accessible and automated forensic detection systems.',
    solution:
      'Designed an end-to-end classification system that extracts spatial facial regions, extracts forensic feature maps through CNN convolutional filters, and produces a real vs. fake classification probability.',
    architecture:
      'Python-based machine learning pipeline with OpenCV for facial landmark framing, TensorFlow and Keras for CNN model definition and training, SQLite for inference logging, and a Tkinter desktop evaluation interface.',
    features: [
      'Frame-by-Frame Image and Video Preprocessing with OpenCV',
      'Custom Convolutional Neural Network (CNN) Architecture',
      'Evaluation via Accuracy, Precision, Recall, and F1-Score',
      'Reported 95%+ Classification Accuracy on Evaluated Datasets',
      'SQLite Integration for Detection Audit Logging',
      'Two Peer-Reviewed Academic Research Publications',
    ],
    tech: ['Python', 'TensorFlow', 'Keras', 'CNN', 'OpenCV', 'SQLite', 'Tkinter'],
    engineeringHighlights: [
      'Trained deep CNN model achieving 95%+ reported accuracy across evaluation splits',
      'Built automated OpenCV preprocessing pipeline for face cropping and dimension standardization',
      'Co-authored 2 research papers published in JETIR and IJSREM detailing the methodology',
    ],
    github: 'https://github.com/anubhawmishra/Deepfake-Detection-App',
    live: null,
    image: '/projects/deepfake.svg',
    accent: '#06B6D4',
    color: 'cyan',
    badge: 'Published Research',
  },
];

export const publications = [
  {
    title: 'Guarding Authenticity: A Deepfake Detection System',
    journal: 'International Journal of Scientific Research in Engineering and Management (IJSREM)',
    journalShort: 'IJSREM',
    details: 'Vol. 8, Issue 5, May 2024 · Impact Factor: 8.448',
    doi: '10.55041/IJSREM34789',
    doiUrl: 'https://doi.org/10.55041/IJSREM34789',
    abstract:
      'Presents a deep learning forensic framework using Convolutional Neural Networks (CNNs) and OpenCV frame extraction to identify facial anomalies and synthesis artifacts in digital media.',
    tags: ['Deepfake Detection', 'CNN', 'Computer Vision', 'Deep Learning', 'OpenCV'],
  },
  {
    title: 'Guarding Authenticity: Detection for Deepfake',
    journal: 'Journal of Emerging Technologies and Innovative Research (JETIR)',
    journalShort: 'JETIR',
    details: 'Vol. 11, Issue 5, May 2024 · Impact Factor: 7.95',
    doi: null,
    doiUrl: null,
    abstract:
      'Investigates CNN-based classification pipelines for differentiating between authentic and manipulated human facial imagery with 95%+ reported experimental accuracy.',
    tags: ['Deep Learning', 'Convolutional Neural Networks', 'Media Forensics', 'TensorFlow'],
  },
];

export const education = {
  institution: 'Savitribai Phule Pune University',
  degree: 'Bachelor of Engineering (B.E.) in Computer Science',
  honors: 'Honors in Cyber Security',
  duration: 'Feb 2021 – Feb 2026',
  cgpa: '7.50 / 10',
  location: 'Pune, Maharashtra, India',
  coursework: [
    'Data Structures & Algorithms',
    'Object-Oriented Programming',
    'Database Management Systems',
    'Operating Systems',
    'Computer Networks',
    'Software Engineering',
  ],
};

export const certifications = [
  {
    name: 'Full Stack Developer with AI',
    issuer: 'Physics Wallah',
    status: 'Ongoing',
    year: '2024 – Present',
  },
  {
    name: 'RDBMS PostgreSQL',
    issuer: 'IIT Bombay Spoken Tutorial',
    status: 'Completed',
    year: 'Completed',
  },
  {
    name: 'Web Development (8 Weeks)',
    issuer: 'Internshala',
    status: 'Completed',
    year: 'Completed',
  },
  {
    name: 'Python & C Programming',
    issuer: 'IIT Bombay Spoken Tutorial',
    status: 'Completed',
    year: 'Completed',
  },
  {
    name: 'FinTech Engineering Virtual Experience',
    issuer: 'Goldman Sachs (Forage)',
    status: 'Completed',
    year: 'Completed',
  },
];

// Structured, grounded knowledge base for Anubhaw Assistant
export const assistantKnowledge = {
  personal: {
    name: 'Anubhaw Mishra',
    role: 'Software Engineer',
    targetRoles: [
      'Software Engineer',
      'Software Development Engineer (SDE)',
      'Full Stack Developer',
      'Frontend Developer',
      'React Developer',
    ],
    location: 'Pune, Maharashtra, India',
    email: 'anubhawmishra002@gmail.com',
    phone: '+91 9939550413',
    linkedin: 'https://linkedin.com/in/anubhaw-mishra002',
    github: 'https://github.com/anubhawmishra',
    leetcode: 'https://leetcode.com/u/Anubhaw_M',
  },
  education: {
    institution: 'Savitribai Phule Pune University',
    degree: 'B.E. in Computer Science (Honors in Cyber Security)',
    duration: 'February 2021 – February 2026',
    cgpa: '7.50 / 10',
    coursework: [
      'Data Structures & Algorithms',
      'Database Management Systems',
      'Operating Systems',
      'Computer Networks',
      'Software Engineering',
      'Object-Oriented Programming',
    ],
  },
  skills: {
    languages: ['Python', 'Java', 'JavaScript', 'SQL', 'C'],
    frontend: ['React.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Responsive Web Design'],
    backend: ['Node.js', 'Express.js', 'REST APIs'],
    databases: ['PostgreSQL', 'SQLite', 'Prisma ORM'],
    ai_ml: ['Google Gemini', 'LLM API Integration', 'TensorFlow', 'Keras', 'CNN', 'OpenCV'],
    engineering: [
      'Git',
      'GitHub',
      'Postman',
      'CI/CD',
      'Agile / Scrum',
      'Testing & Debugging',
      'Data Structures & Algorithms',
      'Object-Oriented Programming',
    ],
  },
  experience: [
    {
      company: 'Oasis Infobyte',
      role: 'Web Development & Designing Intern',
      period: 'January 2023 – February 2023',
      location: 'Remote',
      points: [
        'Built and debugged responsive web interfaces using HTML, CSS and JavaScript.',
        'Worked with reusable UI components and REST API integration.',
        'Used Git-based development workflows and incorporated feedback.',
        'Tested interfaces across browsers and fixed responsive/mobile layout issues.',
        'Improved usability of assigned web projects.',
      ],
    },
  ],
  projects: [
    {
      name: 'JARVIS — AI Resume & Job Matcher',
      id: 'jarvis',
      description:
        'Full-stack AI career analytics platform comparing resumes with job descriptions to deliver skill gap analysis, ATS scoring, resume improvement suggestions, and tailored interview prep questions.',
      stack: ['React.js', 'Node.js', 'Express.js', 'REST APIs', 'LLM API Integration', 'Tailwind CSS'],
      liveUrl: 'https://frontend-eight-xi-61.vercel.app/',
      githubUrl: 'https://github.com/anubhawmishra/AI-Resume-Job-Matcher',
      highlights: 'Semantic skill matching, ATS compatibility score, dynamic interview questions, LLM prompt engineering.',
    },
    {
      name: 'JobTrack — Job Application Tracker',
      id: 'jobtrack',
      description:
        'Full-stack job application tracker to organize, search, filter, and manage job applications across interview stages with secure JWT authentication and PostgreSQL persistence via Prisma ORM.',
      stack: ['React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'Prisma ORM', 'JWT', 'Tailwind CSS'],
      liveUrl: 'https://job-application-tracker-eosin-gamma.vercel.app/',
      githubUrl: 'https://github.com/anubhawmishra/Job-Application-Tracker',
      highlights: 'Application status pipeline, search and filtering, JWT auth, relational schema with Prisma ORM.',
    },
    {
      name: 'PITCH™ — Full-Stack AI Cricket E-Commerce Platform',
      id: 'pitch',
      description:
        'Full-stack cricket e-commerce platform with product catalogs, search, filtering, custom bat builder, cart, wishlist, checkout, Razorpay Test Mode integration, and "FRIDAY" — a Google Gemini conversational shopping assistant.',
      stack: [
        'React.js',
        'Vite',
        'Tailwind CSS',
        'Node.js',
        'Express.js',
        'PostgreSQL',
        'Prisma ORM',
        'Google Gemini',
        'Razorpay Test Mode',
        'JWT',
        'bcrypt',
      ],
      liveUrl: null,
      githubUrl: 'https://github.com/anubhawmishra/PITCH-Cricket-E-Commerce',
      highlights:
        'FRIDAY AI shopping assistant (Google Gemini), custom bat builder, Razorpay test mode payment flow, PostgreSQL with Prisma.',
    },
    {
      name: 'Deepfake Detection System',
      id: 'deepfake',
      description:
        'CNN-based computer vision deep learning system that classifies real vs. fake images and video frames. Uses OpenCV preprocessing and custom CNN architecture with 95%+ reported accuracy. Published in JETIR and IJSREM.',
      stack: ['Python', 'TensorFlow', 'Keras', 'CNN', 'OpenCV', 'SQLite', 'Tkinter'],
      liveUrl: null,
      githubUrl: 'https://github.com/anubhawmishra/Deepfake-Detection-App',
      highlights:
        '95%+ reported accuracy, OpenCV facial landmark normalization, published research in JETIR and IJSREM.',
    },
  ],
  publications: [
    {
      title: 'Guarding Authenticity: A Deepfake Detection System',
      journal: 'IJSREM (Vol. 8, Issue 5, May 2024, Impact Factor 8.448)',
      doi: '10.55041/IJSREM34789',
    },
    {
      title: 'Guarding Authenticity: Detection for Deepfake',
      journal: 'JETIR (Vol. 11, Issue 5, May 2024, Impact Factor 7.95)',
    },
  ],
  certifications: [
    'Full Stack Developer with AI — Physics Wallah (Ongoing)',
    'RDBMS PostgreSQL — IIT Bombay Spoken Tutorial (Completed)',
    'Web Development (8 Weeks) — Internshala (Completed)',
    'Python & C Programming — IIT Bombay Spoken Tutorial (Completed)',
    'FinTech Engineering Virtual Experience — Goldman Sachs (Completed)',
  ],
};
