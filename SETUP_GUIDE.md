# SETUP GUIDE — Step by Step (Hinglish)

Ye guide tujhe zero se live deployment tak le jayega. Bas follow kar.

---

## STEP 1: Folder structure samjho

Tera project folder ka naam hai: **`anubhaw-portfolio-react`**

Iske andar 2 important folders hain:

```
anubhaw-portfolio-react/
├── public/        ← YAHAN tera photo aur resume daalna hai
│   ├── favicon.svg
│   ├── profile.jpg     ← TU YAHAN APNA PHOTO DAAL
│   └── Resume.pdf      ← TU YAHAN APNA RESUME DAAL
└── src/
    ├── data/
    │   └── content.js  ← ISI FILE me name, email, projects sab hai
    └── components/     ← Sab UI components yahan hain
```

---

## STEP 2: Apna PHOTO daal

1. Apna profile photo (square photo, 800x800 pixels recommended) lo
2. Uska naam **`profile.jpg`** rakho (exactly lowercase, .jpg extension)
3. Use **`public/`** folder ke andar copy-paste karo
4. Final path hoga: `anubhaw-portfolio-react/public/profile.jpg`

**Note:** Agar tera photo `.png` hai to:
- Option A (easy): Online tool se `.jpg` me convert kar de
- Option B: File ka naam `profile.png` rakh AND `src/data/content.js` me line 19 me change kar:
  - Old: `profileImage: '/profile.jpg'`
  - New: `profileImage: '/profile.png'`

---

## STEP 3: Apna RESUME daal

1. Apna resume PDF lo (jo bhi tu apply kar raha hai)
2. Uska naam **`Resume.pdf`** rakho (capital R)
3. Use **`public/`** folder me copy-paste karo
4. Final path: `anubhaw-portfolio-react/public/Resume.pdf`

Hero section me "Download Resume" button is file ko download karega.

---

## STEP 4: Apna content update karna ho to

File: **`src/data/content.js`**

Ye file me sab kuch hai. Specific line numbers:

| Kya badalna | Line number | Kya change kar |
|-------------|-------------|----------------|
| Naam | Line 8 | `name: 'Anubhaw Mishra'` |
| Initials (logo me dikhta hai) | Line 9 | `initials: 'AM'` |
| Role | Line 10 | `role: 'Frontend Developer'` |
| About summary (Hero me) | Line 12-13 | `about: '...'` |
| Email | Line 16 | `email: 'anubhawmishra002@gmail.com'` |
| Phone | Line 17 | `phone: '+91 9939550413'` |
| Resume PDF path | Line 18 | `resumeUrl: '/Resume.pdf'` |
| Profile image path | Line 19 | `profileImage: '/profile.jpg'` |
| LinkedIn URL | Line 21 | `linkedin: '...'` |
| GitHub URL | Line 22 | `github: '...'` |
| LeetCode URL | Line 23 | `leetcode: '...'` |
| About paragraphs (4 paras) | Line 32-37 | `aboutText` array |
| Skills | Line 39-91 | `skills` array |
| Internship info | Line 93-105 | `experience` array |
| Projects | Line 107-156 | `projects` array |
| Certifications | Line 158-180 | `certifications` array |

### Project image kaise badlu?
File `content.js` me har project ka `image:` field hai. Currently Unsplash URLs hain.

Apna khud ka image use karne ke liye:
1. Image ko `public/` folder me daal (e.g., `public/portfolio-screenshot.png`)
2. content.js me wo line dhundh: `image: 'https://images.unsplash.com/...'`
3. Replace kar: `image: '/portfolio-screenshot.png'`

---

## STEP 5: VS Code me open karo

1. VS Code khol
2. Top menu: **File → Open Folder...**
3. `anubhaw-portfolio-react` folder select kar (puri folder, ek file nahi)
4. "Open" click kar
5. VS Code me left sidebar me saari files dikhengi

---

## STEP 6: Terminal me commands run karo

VS Code me terminal kholne ke liye:
- Top menu: **Terminal → New Terminal**
- OR shortcut: **Ctrl + `** (backtick key, 1 ke left me hai)

Terminal khulne ke baad ye 2 commands run kar (ek baar):

### Command 1: Dependencies install kar

```bash
npm install
```

Ye 2-5 minute lega. Saari libraries (React, Vite, Tailwind, Framer Motion, Three.js, Lucide) install hongi. Ek baar hi karna hai.

**Agar `npm install` me error aaye:**
- Check kar Node.js installed hai: `node --version` (v18+ chahiye)
- Agar Node nahi hai to: https://nodejs.org/ se install kar (LTS version)

### Command 2: Dev server start kar

```bash
npm run dev
```

Ye terminal me kuch aisa show karega:
```
  VITE v5.4.11  ready in 432 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

Browser me **`http://localhost:5173/`** open kar — tera portfolio live local me chal raha hoga.

### Dev server kaise band karu?
Terminal me **Ctrl + C** press kar.

---

## STEP 7: Live changes dekho

Jab dev server chal raha hai (`npm run dev`):
- Koi bhi file save kar (Ctrl + S)
- Browser me automatically update ho jayega (no refresh needed)
- Ye Vite ka **Hot Module Replacement (HMR)** hai

Try kar:
1. `src/data/content.js` me line 8 me apna naam thoda change kar
2. Save kar (Ctrl + S)
3. Browser me dekh — instantly update ho gaya

---

## STEP 8: Production build banao (deploy karne se pehle test ke liye)

Jab development complete ho jaye, production-ready code build karne ke liye:

```bash
npm run build
```

Ye `dist/` folder banata hai with optimized files.

Build ko local me preview karne ke liye:
```bash
npm run preview
```

`http://localhost:4173/` open kar — same site dikhegi but production version.

---

## STEP 9: GitHub par push kar

### Pehle baar (one-time setup)

1. **GitHub par naya repo banao:**
   - Browser me github.com/new khol
   - Repository name: `portfolio-react` (ya jo bhi)
   - Public select kar
   - **DON'T** check "Add a README" (already hai)
   - "Create repository" click kar

2. **Terminal me ye commands run kar** (project folder ke andar se):

```bash
git init
git add .
git commit -m "Initial commit - React portfolio"
git branch -M main
git remote add origin https://github.com/TERA_GITHUB_USERNAME/portfolio-react.git
git push -u origin main
```

(`TERA_GITHUB_USERNAME` ko replace kar `anubhawmishra` se ya jo bhi tera username hai)

### Future me changes push karne ke liye

```bash
git add .
git commit -m "Updated portfolio content"
git push
```

---

## STEP 10: Vercel pe LIVE DEPLOY kar (free)

### Method 1: Web par (easiest, no CLI)

1. **vercel.com** par jaa
2. "Sign Up" click kar — **GitHub se sign up** kar (recommended)
3. Login hone ke baad: **"Add New..." → "Project"** click kar
4. GitHub repos list dikhegi — apna `portfolio-react` repo select kar
5. "Import" click kar
6. Vercel auto-detect karega ki ye Vite project hai
7. **"Deploy" click kar** (kuch change mat kar)
8. 1-2 minute wait kar — deployment ho jayegi
9. Tujhe ek live URL milega: `https://portfolio-react-xxx.vercel.app`

### Custom domain ya pretty URL chahiye?

Vercel project page me:
- **Settings → Domains**
- Free me `portfolio-react-anubhaw.vercel.app` jaisa naam customize kar sakta hai
- Apna domain hai to add kar (e.g., anubhawmishra.com)

### Future me kya hoga?

Tu jaise hi GitHub par `git push` karega, **Vercel automatically redeploy karega** within 30-60 seconds. Live site hamesha latest code par rahegi.

---

## QUICK REFERENCE — Total commands tujhe yaad rakhne ke liye

```bash
# First time setup
npm install              # one-time, install all packages

# Daily development
npm run dev              # start dev server (port 5173)
# ... edit code, browser auto-reloads ...
# Ctrl + C to stop

# Before deploying
npm run build            # create dist/ folder
npm run preview          # test production build (port 4173)

# Push to GitHub (after first-time git init)
git add .
git commit -m "Description of changes"
git push
```

---

## TROUBLESHOOTING

### "command not found: npm"
→ Node.js installed nahi hai. https://nodejs.org/ se install kar (LTS).

### "Profile photo nahi dikh raha"
→ Check kar:
- File ka naam exactly `profile.jpg` hai (lowercase)?
- File `public/` folder me hai, src me nahi?
- Browser me hard refresh kar: **Ctrl + Shift + R**

### "Resume button click karne pe 404"
→ Check kar:
- File ka naam exactly `Resume.pdf` hai (capital R)?
- File `public/` folder me hai?

### "Particles 3D background nahi chal raha"
→ Browser me WebGL enabled hona chahiye. Chrome/Firefox latest version use kar.

### "Tailwind classes work nahi kar rahe"
→ Terminal me ye command run kar:
```bash
rm -rf node_modules package-lock.json
npm install
```

### Dev server start nahi ho raha — port 5173 already in use
→ Terminal me different port try kar:
```bash
npm run dev -- --port 3000
```

---

## FOLDER STRUCTURE (final reference)

```
anubhaw-portfolio-react/
├── package.json              ← Don't touch
├── vite.config.js            ← Don't touch
├── tailwind.config.js        ← Theme colors yahan se change kar
├── postcss.config.js         ← Don't touch
├── index.html                ← SEO title/meta yahan
├── README.md                 ← Project info
├── SETUP_GUIDE.md            ← YE FILE
├── .gitignore
├── public/                   ← STATIC FILES YAHAN DAAL
│   ├── favicon.svg
│   ├── profile.jpg           ← TUNE YAHAN PHOTO DAALA
│   └── Resume.pdf            ← TUNE YAHAN RESUME DAALA
└── src/
    ├── main.jsx              ← Don't touch
    ├── App.jsx               ← Layout shell
    ├── index.css             ← Custom CSS
    ├── data/
    │   └── content.js        ← ★ MAIN FILE - sab content yahan
    └── components/           ← UI components
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── ParticleField.jsx
        ├── About.jsx
        ├── Skills.jsx
        ├── Experience.jsx
        ├── Projects.jsx
        ├── Contact.jsx
        └── Footer.jsx
```

---

**You're all set. Steps 5, 6, 9, 10 ke order me kar — done in 30 minutes.**
