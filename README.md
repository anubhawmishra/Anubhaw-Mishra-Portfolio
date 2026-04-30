# Anubhaw Mishra - Portfolio (React + Vite)

A premium, animated, production-ready developer portfolio.

## Tech Stack

- **React 18** + **Vite** (fast dev + build)
- **Tailwind CSS** (utility-first styling)
- **Framer Motion** (page and element animations)
- **React Three Fiber** + **three.js** (3D particle hero background)
- **Lucide React** (icons)

## Folder Structure

```
anubhaw-portfolio-react/
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── index.html
├── public/
│   ├── favicon.svg
│   ├── profile.jpg          <-- ADD YOUR PROFILE PHOTO HERE
│   └── Resume.pdf           <-- ADD YOUR RESUME PDF HERE
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── data/
    │   └── content.js       <-- EDIT ALL TEXT/PROJECTS/SKILLS HERE
    └── components/
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

## Setup (one-time)

```bash
cd anubhaw-portfolio-react
npm install
npm run dev
```

Open `http://localhost:5173` in your browser. The dev server hot-reloads on every save.

## Where to add YOUR images and PDF

Put these files inside the `public/` folder:

| File           | Purpose                              | Used in            |
|----------------|--------------------------------------|--------------------|
| `profile.jpg`  | Your profile photo (square, 800x800) | About section      |
| `Resume.pdf`   | Your resume PDF                      | Hero "Download" btn|

If `profile.jpg` is missing, the About component automatically falls back to a UI Avatars-generated image.

## Where to update content

Open `src/data/content.js`. Everything is centralized:

- `personal` — name, role, email, phone, social links, profile image path
- `aboutText` — paragraphs in About section
- `skills` — categorized skill list with icons
- `experience` — internships
- `projects` — project cards (title, description, tech, github, live, image)
- `certifications` — certificate list
- `publications` — research publications

To change project images, replace the `image` URL in each project object. Use any direct image URL (Unsplash, your own CDN, etc.) or place an image in `public/projects/yourimage.jpg` and reference as `/projects/yourimage.jpg`.

## Production Build

```bash
npm run build
```

Output goes to `dist/`. Test the production build locally with:

```bash
npm run preview
```

## Deploy to Vercel (recommended)

### Option 1: Connect GitHub repo

1. Push the project to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your GitHub repository.
4. Vercel auto-detects Vite. Click **Deploy**.
5. Done. Every commit to main auto-deploys.

### Option 2: Vercel CLI

```bash
npm install -g vercel
vercel
```

Follow the prompts. First deploy creates the project; subsequent `vercel --prod` deploys to production.

## Deploy to Netlify

1. Run `npm run build`
2. Drag the `dist` folder into [app.netlify.com/drop](https://app.netlify.com/drop)
   OR connect your GitHub repo at netlify.com.

Build command: `npm run build`
Publish directory: `dist`

## Customize Colors / Theme

Edit `tailwind.config.js` under `theme.extend.colors`:

```js
'accent': '#238636',        // primary green
'accent-glow': '#39d353',   // glow green
'dark-bg': '#010409',       // page background
'mid-bg': '#0d1117',        // card background
```

Change those 4 colors and the entire theme updates.

## Performance Tips

- Project images are loaded with `loading="lazy"`.
- React Three Fiber canvas is wrapped in `Suspense` so it doesn't block first paint.
- Tailwind's JIT means only used utilities ship in production CSS.
- Lighthouse score on desktop should be 95+ out of the box.

## Common Issues

**Issue:** Profile image shows fallback initials instead of my photo.
**Fix:** Save your photo as `public/profile.jpg`. Filename and path are case-sensitive.

**Issue:** Resume button does nothing.
**Fix:** Save your resume as `public/Resume.pdf` (capital R).

**Issue:** Particles don't show / WebGL error.
**Fix:** Some browsers block WebGL on incognito. Test in a regular window. Particles auto-fail-safe to no background.

## Built by

Anubhaw Mishra · [LinkedIn](https://linkedin.com/in/anubhaw-mishra002) · [GitHub](https://github.com/anubhawmishra) · [LeetCode](https://leetcode.com/u/Anubhaw_M)
