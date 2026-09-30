import { assistantKnowledge, projects, publications, education, personal, experience } from '../data/content.js';

/**
 * Deterministic grounding matcher that operates purely on verified portfolio facts.
 * Ensures zero hallucination when offline or when GEMINI_API_KEY is not configured on the server.
 */
export function getLocalAssistantResponse(userQuery) {
  const query = (userQuery || '').toLowerCase().trim();

  if (!query) {
    return {
      reply: "Hello! I am Anubhaw Assistant. Ask me anything about Anubhaw's projects, technical skills, education, internship, or research publications.",
      smartCards: null,
      mode: 'grounded-local',
    };
  }

  // 1. Identity & Portfolio Owner / "Who is Anubhaw?"
  if (
    query.includes('owner') ||
    query.includes('whose') ||
    query.includes('who is') ||
    query.includes('who created') ||
    query.includes('who made') ||
    query.includes('who built this') ||
    query.includes('about anubhaw') ||
    query.includes('tell me about anubhaw') ||
    query.includes('introduction') ||
    query === 'anubhaw' ||
    query === 'anubhaw mishra'
  ) {
    const isOwnerQuery = query.includes('owner') || query.includes('whose') || query.includes('created') || query.includes('made') || query.includes('built this');
    return {
      reply: `${isOwnerQuery ? 'This portfolio is owned and created by **Anubhaw Mishra**.\n\n' : ''}**Anubhaw Mishra** is a Software Engineer and 2026 Computer Science graduate (Honors in Cyber Security) from Savitribai Phule Pune University (CGPA 7.50/10).

He specializes in Full-Stack Development and AI integration, building production applications with React.js, Node.js, Express.js, PostgreSQL, and Python. His flagship projects include **JARVIS** (AI Resume Matcher with live ATS scoring), **JobTrack** (Full-Stack Application Tracker), **PITCH™** (Cricket E-Commerce with the FRIDAY Gemini assistant), and a peer-reviewed **Deepfake Detection System** (95%+ reported accuracy).

Would you like to explore his projects, technical stack, or research publications?`,
      smartCards: [
        {
          title: 'Explore Featured Work',
          tech: 'Full-Stack · AI/ML · Systems',
          links: [
            { label: 'View JARVIS Live', url: 'https://frontend-eight-xi-61.vercel.app/', primary: true },
            { label: 'View JobTrack Live', url: 'https://job-application-tracker-eosin-gamma.vercel.app/' },
          ],
        },
      ],
      mode: 'grounded-local',
    };
  }

  // 2. Projects - JARVIS
  if (
    query.includes('jarvis') ||
    query.includes('resume') ||
    (query.includes('job') && query.includes('matcher')) ||
    query.includes('ats')
  ) {
    const p = projects.find((x) => x.id === 'jarvis');
    return {
      reply: `**AI Resume & Job Matcher — JARVIS** is an AI-powered career analytics platform built with React, Node.js, Express, and LLM APIs.

It parses applicant resumes and compares them with job descriptions to compute ATS compatibility scores, detect missing skills, recommend targeted bullet-point improvements, and dynamically generate role-specific technical interview questions.`,
      smartCards: [
        {
          title: 'AI Resume & Job Matcher — JARVIS',
          tag: 'Live Demo Available',
          tech: 'React · Node.js · Express · LLM API · Tailwind',
          links: [
            { label: 'View Live Demo', url: p.live, primary: true },
            { label: 'View GitHub', url: p.github },
          ],
        },
      ],
      mode: 'grounded-local',
    };
  }

  // 2. Projects - JobTrack
  if (
    query.includes('jobtrack') ||
    query.includes('job track') ||
    (query.includes('application') && query.includes('tracker')) ||
    (query.includes('job') && (query.includes('tracker') || query.includes('status')))
  ) {
    const p = projects.find((x) => x.id === 'jobtrack');
    return {
      reply: `**JobTrack — Job Application Tracker** is a full-stack SaaS web application designed to track and organize job applications through every recruitment phase.

Built with React, Node.js, Express, and PostgreSQL using Prisma ORM, it features a status lifecycle pipeline (Applied, Interviewing, Offer, Rejected), recruiter contact notes, fast search/filtering, and secure token-based JWT authentication.`,
      smartCards: [
        {
          title: 'JobTrack — Job Application Tracker',
          tag: 'Live Demo Available',
          tech: 'React · Node.js · PostgreSQL · Prisma · JWT',
          links: [
            { label: 'View Live Demo', url: p.live, primary: true },
            { label: 'View GitHub', url: p.github },
          ],
        },
      ],
      mode: 'grounded-local',
    };
  }

  // 3. Projects - PITCH & FRIDAY
  if (
    query.includes('pitch') ||
    query.includes('friday') ||
    query.includes('cricket') ||
    query.includes('e-commerce') ||
    query.includes('bat')
  ) {
    const p = projects.find((x) => x.id === 'pitch');
    return {
      reply: `**PITCH™** is a full-stack AI-powered cricket e-commerce platform. It combines complete retail operations (catalog search, filtering, wishlist, cart, and checkout) with an interactive custom bat configurator and **FRIDAY**, an embedded conversational AI shopping assistant powered by Google Gemini.

Key Architecture:
• Frontend: React, Vite, Tailwind CSS
• Backend: Node.js, Express.js, REST APIs
• Database: PostgreSQL with Prisma ORM
• Security: JWT authentication & bcrypt password hashing
• AI: FRIDAY (Google Gemini) for equipment guidance
• Payments: Razorpay Test Mode integration`,
      smartCards: [
        {
          title: 'PITCH™ — AI Cricket Platform',
          tag: 'Full Stack & FRIDAY AI',
          tech: 'React · Node.js · Postgres · Prisma · Gemini · Razorpay',
          links: [{ label: 'View GitHub', url: p.github, primary: true }],
        },
      ],
      mode: 'grounded-local',
    };
  }

  // 4. Projects - Deepfake Detection
  if (
    query.includes('deepfake') ||
    query.includes('detection') ||
    query.includes('cnn') ||
    query.includes('opencv') ||
    query.includes('authenticity')
  ) {
    const p = projects.find((x) => x.id === 'deepfake');
    return {
      reply: `**Deepfake Detection System** is a computer vision research project utilizing Convolutional Neural Networks (CNNs) and OpenCV to identify synthetic, manipulated facial imagery.

Key Highlights:
• Preprocessing: OpenCV for facial landmark extraction, normalization, and face alignment
• Model: Deep CNN architecture trained in Python using TensorFlow and Keras
• Reported Accuracy: 95%+ classification accuracy on test evaluations
• Research: Published in two peer-reviewed academic journals (JETIR & IJSREM with DOI: 10.55041/IJSREM34789).`,
      smartCards: [
        {
          title: 'Deepfake Detection System',
          tag: '95%+ Accuracy · Published',
          tech: 'Python · TensorFlow · Keras · CNN · OpenCV',
          links: [
            { label: 'View GitHub', url: p.github, primary: true },
            { label: 'IJSREM DOI Paper', url: 'https://doi.org/10.55041/IJSREM34789' },
          ],
        },
      ],
      mode: 'grounded-local',
    };
  }

  // 5. All Projects Overview
  if (
    query.includes('project') ||
    query.includes('work') ||
    query.includes('portfolio') ||
    query.includes('built') ||
    query.includes('build')
  ) {
    return {
      reply: `Anubhaw has built 4 major software engineering and AI projects:

1. **AI Resume & Job Matcher — JARVIS**: Full-stack ATS compatibility & resume analysis with LLM APIs and tailored interview preparation. (Live Demo Available)
2. **JobTrack — Job Application Tracker**: Full-stack application lifecycle tracker with PostgreSQL, Prisma ORM, and JWT authentication. (Live Demo Available)
3. **PITCH™ — Full-Stack AI Cricket Platform**: Cricket marketplace featuring the FRIDAY conversational shopping assistant (Google Gemini), custom bat builder, and Razorpay test payments.
4. **Deepfake Detection System**: CNN-based computer vision pipeline with OpenCV achieving 95%+ reported accuracy, published in JETIR and IJSREM.

Which project would you like to explore in detail?`,
      smartCards: [
        {
          title: 'JARVIS (Live)',
          tech: 'React · Node · LLM API',
          links: [{ label: 'Live Demo', url: 'https://frontend-eight-xi-61.vercel.app/', primary: true }],
        },
        {
          title: 'JobTrack (Live)',
          tech: 'React · Postgres · Prisma',
          links: [{ label: 'Live Demo', url: 'https://job-application-tracker-eosin-gamma.vercel.app/', primary: true }],
        },
      ],
      mode: 'grounded-local',
    };
  }

  // 6. Education / Degree / College / CGPA / University
  if (
    query.includes('education') ||
    query.includes('study') ||
    query.includes('studied') ||
    query.includes('college') ||
    query.includes('university') ||
    query.includes('degree') ||
    query.includes('cgpa') ||
    query.includes('gpa') ||
    query.includes('graduation') ||
    query.includes('school') ||
    query.includes('sppu')
  ) {
    return {
      reply: `Anubhaw's verified academic credentials:

• **Institution**: Savitribai Phule Pune University (SPPU), Pune, India
• **Degree**: Bachelor of Engineering (B.E.) in Computer Science
• **Specialization**: Honors in Cyber Security
• **Duration**: February 2021 – February 2026
• **CGPA**: 7.50 / 10
• **Core Coursework**: Data Structures & Algorithms, Database Management Systems (DBMS), Operating Systems, Computer Networks, Software Engineering, Object-Oriented Programming.`,
      smartCards: null,
      mode: 'grounded-local',
    };
  }

  // 7. Skills & Technical Stack
  if (
    query.includes('skill') ||
    query.includes('technology') ||
    query.includes('tech') ||
    query.includes('language') ||
    query.includes('stack') ||
    query.includes('frontend') ||
    query.includes('backend') ||
    query.includes('database') ||
    query.includes('python') ||
    query.includes('java') ||
    query.includes('react') ||
    query.includes('node') ||
    query.includes('postgres') ||
    query.includes('sql')
  ) {
    return {
      reply: `Anubhaw's verified technical skills:

• **Programming Languages**: Python, Java, JavaScript, SQL, C
• **Frontend**: React.js, HTML5, CSS3, Tailwind CSS, Responsive Web Design
• **Backend & APIs**: Node.js, Express.js, REST APIs
• **Databases & ORM**: PostgreSQL, SQLite, Prisma ORM
• **AI & Machine Learning**: Google Gemini, LLM API Integration, TensorFlow, Keras, CNN, OpenCV
• **Engineering & Tools**: Git, GitHub, Postman, CI/CD, Agile/Scrum, Testing & Debugging, Data Structures & Algorithms, OOP.`,
      smartCards: null,
      mode: 'grounded-local',
    };
  }

  // 8. Internship / Oasis Infobyte / Experience
  if (
    query.includes('intern') ||
    query.includes('experience') ||
    query.includes('oasis') ||
    query.includes('infobyte') ||
    query.includes('job history') ||
    query.includes('company')
  ) {
    return {
      reply: `Anubhaw completed a Web Development & Designing Internship at **Oasis Infobyte** (Jan 2023 – Feb 2023, Remote):

• Built and debugged responsive web interfaces using HTML, CSS, and JavaScript.
• Developed reusable UI components and connected REST APIs for dynamic front-end rendering.
• Utilized Git-based version control workflows and incorporated code review feedback.
• Tested cross-browser compatibility across Chrome and Firefox, diagnosing and fixing mobile layout issues.
• Improved interface usability across assigned web projects.`,
      smartCards: null,
      mode: 'grounded-local',
    };
  }

  // 9. Research & Publications
  if (
    query.includes('publication') ||
    query.includes('research') ||
    query.includes('paper') ||
    query.includes('journal') ||
    query.includes('jetir') ||
    query.includes('ijsrem') ||
    query.includes('doi')
  ) {
    return {
      reply: `Anubhaw has co-authored two peer-reviewed academic publications on deep learning media forensics:

1. **"Guarding Authenticity: A Deepfake Detection System"**
• Published in: International Journal of Scientific Research in Engineering and Management (IJSREM)
• Vol. 8, Issue 5, May 2024 (Impact Factor: 8.448)
• DOI: 10.55041/IJSREM34789

2. **"Guarding Authenticity: Detection for Deepfake"**
• Published in: Journal of Emerging Technologies and Innovative Research (JETIR)
• Vol. 11, Issue 5, May 2024 (Impact Factor: 7.95)

Both papers detail the OpenCV preprocessing and CNN classification pipelines achieving 95%+ reported accuracy.`,
      smartCards: [
        {
          title: 'IJSREM Publication (DOI)',
          tech: 'CNN · Computer Vision Forensics',
          links: [{ label: 'Open DOI Reference', url: 'https://doi.org/10.55041/IJSREM34789', primary: true }],
        },
      ],
      mode: 'grounded-local',
    };
  }

  // 10. Certifications
  if (
    query.includes('certificate') ||
    query.includes('certification') ||
    query.includes('credential') ||
    query.includes('course')
  ) {
    return {
      reply: `Anubhaw's verified professional certifications:

1. **Full Stack Developer with AI** — Physics Wallah (Ongoing)
2. **RDBMS PostgreSQL** — IIT Bombay Spoken Tutorial (Completed)
3. **Web Development (8 Weeks)** — Internshala (Completed)
4. **Python & C Programming** — IIT Bombay Spoken Tutorial (Completed)
5. **FinTech Engineering Virtual Experience** — Goldman Sachs (Forage, Completed)`,
      smartCards: null,
      mode: 'grounded-local',
    };
  }

  // 11. Target Roles / Career Focus
  if (
    query.includes('role') ||
    query.includes('target') ||
    query.includes('looking for') ||
    query.includes('hire') ||
    query.includes('hiring') ||
    query.includes('position') ||
    query.includes('opportunity') ||
    query.includes('sde')
  ) {
    return {
      reply: `Anubhaw is actively targeting the following full-time opportunities:

• **Software Engineer**
• **Software Development Engineer (SDE)**
• **Full Stack Developer**
• **Frontend Developer**
• **React Developer**

He brings hands-on experience building production React/Node.js/PostgreSQL applications, architecting RESTful services, integrating LLMs, and applying strong Data Structures & Algorithms principles.`,
      smartCards: [
        {
          title: 'Contact Anubhaw for Opportunities',
          tech: 'Available for Software Engineering roles',
          links: [
            { label: 'LinkedIn Profile', url: personal.socials.linkedin, primary: true },
            { label: 'Send Email', url: `mailto:${personal.email}` },
          ],
        },
      ],
      mode: 'grounded-local',
    };
  }

  // 12. Contact / Resume / Socials
  if (
    query.includes('contact') ||
    query.includes('email') ||
    query.includes('phone') ||
    query.includes('reach') ||
    query.includes('connect') ||
    query.includes('linkedin') ||
    query.includes('github') ||
    query.includes('leetcode') ||
    query.includes('resume')
  ) {
    return {
      reply: `You can reach Anubhaw Mishra directly through his official public channels:

• **Email**: ${personal.email}
• **Phone**: ${personal.phone}
• **Location**: ${personal.location}
• **LinkedIn**: ${personal.socials.linkedin}
• **GitHub**: ${personal.socials.github}
• **LeetCode**: ${personal.socials.leetcode}
• **Resume**: Available on this portfolio ([Download Resume](${personal.resumeUrl}))`,
      smartCards: [
        {
          title: 'Official Profiles & Links',
          tech: 'Pune, Maharashtra, India',
          links: [
            { label: 'LinkedIn', url: personal.socials.linkedin, primary: true },
            { label: 'GitHub', url: personal.socials.github },
            { label: 'LeetCode', url: personal.socials.leetcode },
            { label: 'Download Resume', url: personal.resumeUrl },
          ],
        },
      ],
      mode: 'grounded-local',
    };
  }

  // 13. General "Who is Anubhaw?" / Portfolio Owner / Intro
  if (
    query.includes('owner') ||
    query.includes('whose') ||
    query.includes('who is') ||
    query.includes('about anubhaw') ||
    query.includes('tell me about') ||
    query.includes('introduction') ||
    query.includes('who built') ||
    query.includes('who created') ||
    query.includes('who made') ||
    query.includes('hello') ||
    query.includes('hi') ||
    query.includes('hey')
  ) {
    const isOwnerQuery = query.includes('owner') || query.includes('whose');
    return {
      reply: `${isOwnerQuery ? 'This portfolio is owned and created by **Anubhaw Mishra**.\n\n' : ''}**Anubhaw Mishra** is a Software Engineer and 2026 Computer Science graduate (Honors in Cyber Security) from Savitribai Phule Pune University (CGPA 7.50/10).

He specializes in Full-Stack Development and AI integration, building production applications with React.js, Node.js, Express.js, PostgreSQL, and Python. His flagship projects include **JARVIS** (AI Resume Matcher with live ATS scoring), **JobTrack** (Full-Stack Application Tracker), **PITCH™** (Cricket E-Commerce with the FRIDAY Gemini assistant), and a peer-reviewed **Deepfake Detection System** (95%+ reported accuracy).

Would you like to explore his projects, technical stack, or research publications?`,
      smartCards: [
        {
          title: 'Explore Featured Work',
          tech: 'Full-Stack · AI/ML · Systems',
          links: [
            { label: 'View JARVIS Live', url: 'https://frontend-eight-xi-61.vercel.app/', primary: true },
            { label: 'View JobTrack Live', url: 'https://job-application-tracker-eosin-gamma.vercel.app/' },
          ],
        },
      ],
      mode: 'grounded-local',
    };
  }

  // 14. Unknown question fallback
  return {
    reply: "I don't have verified information about that in Anubhaw's portfolio. I can help you explore his projects (JARVIS, JobTrack, PITCH™, Deepfake Detection), technical skills (React, Node, PostgreSQL, Python), education, internship at Oasis Infobyte, research publications, or contact details.",
    smartCards: null,
    mode: 'grounded-fallback',
  };
}

/**
 * Communicates with the secure server-side /api/assistant endpoint.
 * Falls back transparently to getLocalAssistantResponse if the server is offline or unset.
 */
export async function sendAssistantMessage(message, conversationHistory = []) {
  const sanitized = (message || '').trim().slice(0, 500);

  if (!sanitized) {
    return {
      reply: "Please enter a question or select one of the suggested topics below.",
      smartCards: null,
      mode: 'grounded-local',
    };
  }

  try {
    const res = await fetch('/api/assistant', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: sanitized,
        history: conversationHistory.slice(-6).map((item) => ({
          role: item.role === 'user' ? 'user' : 'assistant',
          content: item.content,
        })),
      }),
    });

    if (res.ok) {
      const data = await res.json();
      if (data && data.reply) {
        // If the server answered or signaled a fallback, ensure we attach smartCards if relevant
        const localMatch = getLocalAssistantResponse(sanitized);
        return {
          reply: data.reply,
          smartCards: data.smartCards || localMatch.smartCards,
          mode: data.mode || 'ai',
        };
      }
    }
  } catch (err) {
    // Silent failover to deterministic local grounding
    console.debug('Using verified local assistant grounding:', err?.message);
  }

  // Transparent fallback to deterministic verified knowledge base
  return getLocalAssistantResponse(sanitized);
}
