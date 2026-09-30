# Anubhaw Mishra — Software Engineer Portfolio 2.0

A modern, recruiter-focused, production-grade Software Engineer & Full-Stack Developer portfolio featuring an actual functional AI assistant: **Anubhaw Assistant**.

Deployed on Vercel: [https://anubhaw-mishra-portfolio.vercel.app](https://anubhaw-mishra-portfolio.vercel.app)

---

## ⚡ Tech Stack & Architecture

- **Frontend**: React 18 + Vite (ESM fast dev & production bundling)
- **Styling**: Tailwind CSS + Custom Dark Theme Glassmorphism System
- **Motion & Interactions**: Framer Motion (page transitions, 3D tilt cards, modals, reactive chat drawer)
- **3D Graphics**: Three.js + React Three Fiber (`@react-three/fiber`, `@react-three/drei`)
- **Icons**: React Icons (`react-icons`) + Lucide React (`lucide-react`)
- **AI Assistant**: **Anubhaw Assistant** (Custom 3D-styled reactive animated avatar + Google Gemini serverless API endpoint `/api/assistant` + deterministic grounded fallback engine)
- **Persistence**: Relational PostgreSQL + Prisma ORM (demonstrated in JobTrack & PITCH™)
- **Security**: Server-side API key isolation (zero client key exposure), strict input sanitization, prompt injection defenses

---

## 🚀 Key Sections

1. **Hero**: Animated gradient typography, live rotating role indicator (`Software Engineer`, `Full Stack Developer`, `Frontend Developer`, `React Developer`, `AI/ML Enthusiast`), interactive mouse-tracking spotlight, React Three Fiber particle field, and instant recruiter CTAs.
2. **About**: Verified academic background (B.E. Computer Science, SPPU, Feb 2021 – Feb 2026, CGPA 7.50/10, Honors in Cyber Security), full-stack focus, animated credential cards (Location, Degree, Graduation, Specialization, Focus).
3. **Skills**: Categorized into 6 verified domains:
   - Programming Languages (Python, Java, JavaScript, SQL, C)
   - Frontend Development (React.js, HTML5, CSS3, Tailwind CSS, Responsive Web Design)
   - Backend & APIs (Node.js, Express.js, REST APIs)
   - Databases & ORM (PostgreSQL, SQLite, Prisma ORM)
   - AI & Machine Learning (Google Gemini, LLM API Integration, TensorFlow, Keras, CNN, OpenCV)
   - Tools & Engineering Practices (Git, GitHub, Postman, CI/CD, Agile/Scrum, Testing & Debugging, DSA, OOP)
4. **Experience**: Oasis Infobyte (Web Development & Designing Intern, Jan 2023 – Feb 2023). Responsive UI engineering, REST API integration, Git-based collaborative reviews, cross-browser manual testing.
5. **Featured Projects**:
   - **AI Resume & Job Matcher — JARVIS**: AI-powered resume and job description analysis with ATS compatibility scoring and tailored interview prep. [Live Demo](https://frontend-eight-xi-61.vercel.app/) · [GitHub](https://github.com/anubhawmishra/AI-Resume-Job-Matcher)
   - **JobTrack — Job Application Tracker**: Modern SaaS job application tracker with status pipeline, recruiter contacts, and JWT auth backed by PostgreSQL/Prisma. [Live Demo](https://job-application-tracker-eosin-gamma.vercel.app/) · [GitHub](https://github.com/anubhawmishra/Job-Application-Tracker)
   - **PITCH™ — AI Cricket E-Commerce Platform**: Full-stack cricket e-commerce marketplace featuring FRIDAY (conversational shopping assistant powered by Google Gemini), custom bat builder, and Razorpay test mode payments. [GitHub](https://github.com/anubhawmishra/PITCH-Cricket-E-Commerce)
   - **Deepfake Detection System**: CNN-based computer vision deep learning model with OpenCV preprocessing for detecting manipulated facial imagery (95%+ reported accuracy). [GitHub](https://github.com/anubhawmishra/Deepfake-Detection-App) · [IJSREM DOI](https://doi.org/10.55041/IJSREM34789)
6. **Project Details Modal**: Interactive deep-dive modal displaying Problem, Solution, Architecture, Features, and Engineering Highlights.
7. **Research & Publications**:
   - *"Guarding Authenticity: A Deepfake Detection System"* — **IJSREM** (Vol. 8, Issue 5, May 2024, Impact Factor: 8.448, DOI: `10.55041/IJSREM34789`)
   - *"Guarding Authenticity: Detection for Deepfake"* — **JETIR** (Vol. 11, Issue 5, May 2024, Impact Factor: 7.95)
8. **Education & Certifications**: B.E. CS at Savitribai Phule Pune University, coursework breakdown, and professional credentials (Physics Wallah, IIT Bombay, Internshala, Goldman Sachs).
9. **Contact**: Direct email, phone, location, LinkedIn, GitHub, LeetCode, and downloadable resume.

---

## 🤖 Anubhaw Assistant (Interactive AI Guide)

The portfolio embeds an actual functioning AI assistant, **Anubhaw Assistant**:
- **Custom 3D-Style Animated Avatar**: Includes natural eye-blinking cycles, subtle eye glancing, floating idle breathing, reactive speaking animation, and cybernetic glowing accents matching the portfolio theme.
- **Initial Welcome Popup**: Welcomes visitors with quick action chips after a 1.8-second delay (session-aware via `sessionStorage`).
- **Floating Launcher & Minimization**: Floating circular avatar launcher at bottom-right with pulse glow and tooltip. Supports minimize and close workflows without losing conversation state.
- **Navbar AI Integration**: "Ask AI" button in the top navigation bar opens the assistant instantly.
- **Dual-Mode Intelligence**:
  - **Live AI Mode**: Powered by Google Gemini server-side through `/api/assistant`.
  - **Deterministic Grounded Fallback**: Grounded on a structured knowledge base (`assistantKnowledge`) with zero hallucination if the server key is unset or offline.
- **Security**: The Gemini API key is strictly server-side (`GEMINI_API_KEY`) and never bundled into frontend JavaScript (`VITE_*`).

---

## 💻 Local Setup & Development

```bash
# 1. Install dependencies
npm install

# 2. (Optional) Configure Gemini API Key for live AI responses
# Create a .env file (automatically git-ignored):
GEMINI_API_KEY=your_gemini_api_key_here

# 3. Start local development server
npm run dev

# 4. Build for production
npm run build

# 5. Preview production build
npm run preview
```

---

## 🌐 Deploy to Vercel

1. Push your repository to GitHub.
2. In Vercel, import the repository.
3. (Optional) In **Project Settings -> Environment Variables**, add:
   - `GEMINI_API_KEY` = your Google Gemini API key
4. Deploy. The `/api/assistant` serverless function will automatically handle AI requests with seamless fallback.

---

## 👤 Author

**Anubhaw Mishra**
- **Location**: Pune, Maharashtra, India
- **LinkedIn**: [linkedin.com/in/anubhaw-mishra002](https://linkedin.com/in/anubhaw-mishra002)
- **GitHub**: [github.com/anubhawmishra](https://github.com/anubhawmishra)
- **LeetCode**: [leetcode.com/u/Anubhaw_M](https://leetcode.com/u/Anubhaw_M)
- **Email**: [anubhawmishra002@gmail.com](mailto:anubhawmishra002@gmail.com)
