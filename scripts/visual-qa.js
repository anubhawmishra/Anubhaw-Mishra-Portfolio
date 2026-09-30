import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const SCREENSHOT_DIR = 'C:\\Users\\anubh\\.gemini\\antigravity\\brain\\2b9e5236-bc9f-4d46-91c0-95ed2a0855f8\\screenshots';

async function runVisualQA() {
  console.log('🚀 Starting Puppeteer Visual QA on http://localhost:4173 ...');

  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--window-size=1440,900'],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  // 1. Console & runtime error tracking
  const consoleMessages = [];
  const pageErrors = [];
  const failedRequests = [];

  page.on('console', (msg) => {
    const text = msg.text();
    consoleMessages.push({ type: msg.type(), text });
    if (msg.type() === 'error') {
      console.error(' [Browser Console Error]:', text);
    }
  });

  page.on('pageerror', (err) => {
    pageErrors.push(err.toString());
    console.error(' [Uncaught Page Error]:', err);
  });

  page.on('requestfailed', (req) => {
    failedRequests.push({ url: req.url(), failure: req.failure()?.errorText });
    console.warn(' [Failed Request]:', req.url(), req.failure()?.errorText);
  });

  // Navigate to portfolio
  await page.goto('http://localhost:4173/', { waitUntil: 'networkidle0', timeout: 30000 });
  console.log('✔ Page loaded successfully.');

  // Wait a moment for Framer Motion and Three.js canvas to initialize
  await new Promise((r) => setTimeout(r, 1500));

  // --- 2. HERO SECTION & SCREENSHOT ---
  console.log('📸 Capturing Hero section...');
  await page.screenshot({
    path: path.join(SCREENSHOT_DIR, '01_hero_desktop.png'),
    clip: { x: 0, y: 0, width: 1440, height: 850 },
  });

  // --- 3. ABOUT SECTION & PROFILE PHOTO ---
  console.log('🔍 Inspecting About section & Profile Photo...');
  await page.evaluate(() => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'instant', block: 'center' });
  });
  await new Promise((r) => setTimeout(r, 1000));

  const profilePhotoStats = await page.evaluate(() => {
    const img = document.querySelector('#about img');
    if (!img) return null;
    const computed = window.getComputedStyle(img);
    const parentComputed = window.getComputedStyle(img.parentElement);
    const rect = img.getBoundingClientRect();
    return {
      src: img.src,
      alt: img.alt,
      complete: img.complete,
      naturalWidth: img.naturalWidth,
      naturalHeight: img.naturalHeight,
      renderedWidth: Math.round(rect.width),
      renderedHeight: Math.round(rect.height),
      opacity: computed.opacity,
      filter: computed.filter,
      objectFit: computed.objectFit,
      parentOpacity: parentComputed.opacity,
      parentBackground: parentComputed.backgroundColor,
    };
  });
  console.log('Profile Photo Inspection:', profilePhotoStats);

  // Check background image on body / hero / about
  const backgroundCheck = await page.evaluate(() => {
    const heroBg = window.getComputedStyle(document.querySelector('#hero') || document.body).backgroundImage;
    const aboutBg = window.getComputedStyle(document.querySelector('#about')).backgroundImage;
    return { heroBg, aboutBg };
  });
  console.log('Background Image Check:', backgroundCheck);

  await page.screenshot({
    path: path.join(SCREENSHOT_DIR, '02_about_desktop.png'),
  });

  // --- 4. PROFILE PHOTO SCROLL / 3D EFFECT ---
  console.log('🌀 Testing 3D Scroll Parallax on Profile Photo...');
  const scrollTransforms = await page.evaluate(async () => {
    const card = document.querySelector('#about .group.will-change-transform');
    // Scroll window so #about is in view
    document.querySelector('#about').scrollIntoView({ behavior: 'instant', block: 'start' });
    await new Promise((r) => setTimeout(r, 400));
    const startTransform = card ? card.style.transform || window.getComputedStyle(card).transform : null;

    // Scroll down 300px
    window.scrollBy({ top: 300, behavior: 'instant' });
    window.dispatchEvent(new Event('scroll'));
    await new Promise((r) => setTimeout(r, 400));
    const midTransform = card ? card.style.transform || window.getComputedStyle(card).transform : null;

    // Scroll back up 300px
    window.scrollBy({ top: -300, behavior: 'instant' });
    window.dispatchEvent(new Event('scroll'));
    await new Promise((r) => setTimeout(r, 400));
    const endTransform = card ? card.style.transform || window.getComputedStyle(card).transform : null;

    return { startTransform, midTransform, endTransform };
  });
  console.log('Scroll Transforms:', scrollTransforms);

  // --- 5. AI ASSISTANT AVATAR & DIALOG ---
  console.log('🤖 Testing AI Assistant & Avatar...');
  const launcherSelector = 'button[aria-label*="Assistant"], button[title*="Assistant"]';
  await page.waitForSelector(launcherSelector, { visible: true });

  const launcherInfo = await page.evaluate((sel) => {
    const btn = document.querySelector(sel);
    if (!btn) return { found: false };
    const avatar = btn.querySelector('svg');
    return {
      found: true,
      ariaLabel: btn.getAttribute('aria-label'),
      hasAvatar: !!avatar,
      avatarAria: avatar?.getAttribute('aria-label'),
    };
  }, launcherSelector);
  console.log('Launcher Info:', launcherInfo);

  // Click floating launcher to open popup
  await page.click(launcherSelector);
  await new Promise((r) => setTimeout(r, 800));

  // Inspect Avatar inside Assistant header
  const avatarDetails = await page.evaluate(() => {
    const headerAvatar = document.querySelector('[role="dialog"] svg[aria-label*="Avatar"]');
    // Verify Anubhaw features
    const hasHair = !!document.querySelector('[role="dialog"] #anubhawHair');
    const hasSkin = !!document.querySelector('[role="dialog"] #anubhawSkin');
    const hasOvershirt = !!document.querySelector('[role="dialog"] #anubhawShirt');
    const hasTee = !!document.querySelector('[role="dialog"] #anubhawTee');
    const hasMustache = !!document.querySelector('[role="dialog"] path[d*="42 63"]');
    const hasBeard = !!document.querySelector('[role="dialog"] path[d*="28 56"]');
    return {
      found: !!headerAvatar,
      ariaLabel: headerAvatar?.getAttribute('aria-label'),
      hasHair,
      hasSkin,
      hasOvershirt,
      hasTee,
      hasMustache,
      hasBeard,
    };
  });
  console.log('Assistant Avatar Inspection:', avatarDetails);

  await page.screenshot({
    path: path.join(SCREENSHOT_DIR, '03_assistant_open.png'),
  });

  // --- 6. ASSISTANT FUNCTIONALITY Q&A ---
  console.log('💬 Testing Assistant Queries...');
  const queriesToTest = [
    'Who is Anubhaw Mishra?',
    'What is his 10th qualification?',
    'What is his 12th percentage?',
    'Which school did he attend for 10th?',
    'Which school did he attend for 12th?',
    'What is his B.E. college?',
    'What is his CGPA?',
    'Tell me about JARVIS.',
    'Give me the JARVIS live link.',
    'Tell me about JobTrack.',
    'Give me the JobTrack live link.',
    'What is PITCH?',
    'What is FRIDAY?',
  ];

  const assistantQAOutputs = [];

  for (const q of queriesToTest) {
    const inputSelector = '[role="dialog"] input[type="text"]';
    await page.waitForSelector(inputSelector, { visible: true });

    // Focus, clear, and type
    await page.focus(inputSelector);
    await page.evaluate((sel) => {
      const input = document.querySelector(sel);
      input.value = '';
    }, inputSelector);
    await page.type(inputSelector, q);
    await page.keyboard.press('Enter');

    // Wait for response bubble to appear
    await new Promise((r) => setTimeout(r, 900));

    // Get the latest assistant response text
    const lastReply = await page.evaluate(() => {
      const messageDivs = document.querySelectorAll('[role="dialog"] [class*="rounded-bl-none"]');
      const latest = messageDivs[messageDivs.length - 1];
      return latest ? latest.innerText.trim() : '';
    });

    assistantQAOutputs.push({ query: q, response: lastReply });
  }

  console.log('Assistant QA Results Summary:');
  assistantQAOutputs.forEach((r, i) => {
    console.log(`\n[${i + 1}] Q: ${r.query}`);
    console.log(`    A: ${r.response.replace(/\n+/g, ' ').slice(0, 160)}...`);
  });

  // Close assistant dialog cleanly before Education section inspection
  await page.evaluate(() => {
    const closeBtn = document.querySelector('[role="dialog"] button[aria-label="Close Assistant"]') || document.querySelector('[role="dialog"] button[aria-label*="Close"]') || document.querySelector('[role="dialog"] button');
    closeBtn?.click();
  });
  await new Promise((r) => setTimeout(r, 600));

  // --- 7. EDUCATION SECTION ---
  console.log('🎓 Inspecting Education Section...');
  await page.evaluate(() => {
    document.querySelector('#education')?.scrollIntoView({ behavior: 'instant', block: 'start' });
  });
  await new Promise((r) => setTimeout(r, 1000));

  const educationContent = await page.evaluate(() => {
    const sec = document.querySelector('#education');
    if (!sec) return null;
    const text = sec.innerText;
    return {
      hasSITS: text.includes('Sinhgad Institute of Technology and Science'),
      hasSPPU: text.includes('SPPU') || text.includes('Savitribai Phule Pune University'),
      hasCollegeCGPA: text.includes('7.50 / 10'),
      hasHonors: text.includes('Honors in Cyber Security'),
      has12thSchool: text.includes('Rajkiya Yugal Prashad High School'),
      has12thBoard: text.includes('Bihar School Examination Board'),
      has12thScore: text.includes('60%'),
      has12thPCB: text.includes('PCB'),
      has10thSchool: text.includes('Notre Dame Public School'),
      has10thBoard: text.includes('CBSE'),
      has10thCGPA: text.includes('8.8 CGPA'),
      noFakePercentageOn10th: !text.includes('8.8%') && !text.includes('88%'),
    };
  });
  console.log('Education Verification:', educationContent);

  await page.screenshot({
    path: path.join(SCREENSHOT_DIR, '04_education_desktop.png'),
  });

  // --- 8. PROJECT LINKS CHECK ---
  console.log('🔗 Inspecting Project Links...');
  const projectLinks = await page.evaluate(() => {
    const links = Array.from(document.querySelectorAll('a[href]')).map((a) => a.href);
    const jarvisLinks = links.filter((l) => l.includes('frontend-eight-xi-61'));
    const jobtrackLinks = links.filter((l) => l.includes('job-application-tracker'));
    return {
      jarvis: jarvisLinks,
      jobtrack: jobtrackLinks,
      hasCorruptJarvis: jarvisLinks.some((l) => l.includes('/svg') || l.includes('.svg')),
      hasCorruptJobtrack: jobtrackLinks.some((l) => l.includes('/svg') || l.includes('.svg')),
    };
  });
  console.log('Project Links:', projectLinks);

  // --- 9. MOBILE VIEWPORT TEST (390x844) ---
  console.log('📱 Testing Mobile Viewport (390x844)...');
  await page.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true });
  await page.evaluate(() => window.scrollTo(0, 0));
  await new Promise((r) => setTimeout(r, 1000));

  const mobileMetrics = await page.evaluate(() => {
    return {
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth,
      hasHorizontalOverflow: document.documentElement.scrollWidth > document.documentElement.clientWidth,
    };
  });
  console.log('Mobile Layout Metrics:', mobileMetrics);

  await page.screenshot({
    path: path.join(SCREENSHOT_DIR, '05_mobile_view.png'),
    clip: { x: 0, y: 0, width: 390, height: 844 },
  });

  // Open assistant on mobile safely
  console.log('📱 Testing Assistant on Mobile...');
  await page.evaluate(() => {
    const btn = document.querySelector('button[aria-label*="Assistant"], button[title*="Assistant"]');
    btn?.click();
  });
  await new Promise((r) => setTimeout(r, 800));

  const mobileAssistantMetrics = await page.evaluate(() => {
    const dialog = document.querySelector('[role="dialog"]');
    if (!dialog) return null;
    const rect = dialog.getBoundingClientRect();
    return {
      width: Math.round(rect.width),
      height: Math.round(rect.height),
      left: Math.round(rect.left),
      right: Math.round(rect.right),
      fitsViewportHorizontally: rect.left >= 0 && rect.right <= window.innerWidth + 1,
    };
  });
  console.log('Mobile Assistant Popup Metrics:', mobileAssistantMetrics);

  await page.screenshot({
    path: path.join(SCREENSHOT_DIR, '06_mobile_assistant.png'),
    clip: { x: 0, y: 0, width: 390, height: 844 },
  });

  await browser.close();

  console.log('✔ Visual QA finished successfully!');
  return {
    consoleMessages,
    pageErrors,
    failedRequests,
    profilePhotoStats,
    backgroundCheck,
    scrollTransforms,
    launcherInfo,
    avatarDetails,
    assistantQAOutputs,
    educationContent,
    projectLinks,
    mobileMetrics,
    mobileAssistantMetrics,
  };
}

runVisualQA().then((results) => {
  fs.writeFileSync('visual-qa-results.json', JSON.stringify(results, null, 2));
  console.log('Wrote results to visual-qa-results.json');
  process.exit(0);
}).catch((err) => {
  console.error('Visual QA failed with error:', err);
  process.exit(1);
});
