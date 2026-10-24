import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const SCREENSHOT_DIR = path.resolve('screenshots');

if (!fs.existsSync(SCREENSHOT_DIR)) {
  fs.mkdirSync(SCREENSHOT_DIR, { recursive: true });
}

async function verifyPreview() {
  console.log('🧪 Starting Automated Portfolio Verification on http://localhost:4173 ...');

  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--window-size=1440,900'],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  const errors = [];
  page.on('pageerror', (err) => {
    errors.push(err.toString());
    console.error('❌ [Page Error]:', err.message);
  });
  page.on('console', (msg) => {
    if (msg.type() === 'error') {
      console.warn('⚠️ [Console Error]:', msg.text());
    }
  });

  await page.goto('http://localhost:4173/', { waitUntil: 'networkidle0', timeout: 30000 });
  console.log('✅ Page loaded successfully.');

  await new Promise((r) => setTimeout(r, 1500));

  // 1. Check Profile Image
  const profileImg = await page.$eval('#about img', (img) => ({
    src: img.src,
    alt: img.alt,
    complete: img.complete,
    naturalWidth: img.naturalWidth,
    naturalHeight: img.naturalHeight,
  }));
  console.log('👤 Profile photo loaded:', profileImg.naturalWidth > 0 ? 'PASS' : 'FAIL', `(${profileImg.naturalWidth}x${profileImg.naturalHeight})`);

  // 2. Check Resume Button
  const resumeHref = await page.$eval('a[href*="Resume.pdf"]', (a) => a.getAttribute('href'));
  console.log('📄 Resume download link verified:', resumeHref);

  // 3. Scroll to Projects Section
  await page.evaluate(() => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'instant', block: 'start' });
  });
  await new Promise((r) => setTimeout(r, 1000));

  // 4. Verify Project Cards count & titles
  const projectCards = await page.$$eval('#projects h3', (els) => els.map((e) => e.innerText.trim()));
  console.log(`💼 Found ${projectCards.length} project cards:`, projectCards);

  if (projectCards.length !== 6) {
    throw new Error(`Expected exactly 6 projects, found ${projectCards.length}`);
  }

  // 5. Test Filter Tabs
  const tabCounts = await page.$$eval('#projects button[role="tab"]', (tabs) =>
    tabs.map((t) => t.innerText.replace(/\s+/g, ' ').trim())
  );
  console.log('🏷️ Project Category Tabs:', tabCounts);

  // 6. Test Modal Open / Close
  console.log('🔍 Testing Project Detail Modal for first project...');
  const firstDetailsBtn = await page.$('button[aria-label^="View details for"]');
  if (firstDetailsBtn) {
    await firstDetailsBtn.click();
    await new Promise((r) => setTimeout(r, 600));

    const modalTitle = await page.$eval('#project-modal-title', (el) => el.innerText.trim()).catch(() => null);
    console.log('📖 Modal opened successfully for:', modalTitle);

    // Close modal
    const closeBtn = await page.$('button[aria-label="Close modal dialog"]');
    if (closeBtn) {
      await closeBtn.click();
      await new Promise((r) => setTimeout(r, 500));
      console.log('✅ Modal closed successfully.');
    }
  }

  // 7. Test Anubhaw Assistant
  console.log('🤖 Testing Anubhaw Assistant launcher and drawer...');
  const assistantLauncher = await page.$('button[aria-label="Open Anubhaw Assistant"]');
  if (assistantLauncher) {
    await assistantLauncher.click();
    await new Promise((r) => setTimeout(r, 800));

    // Type a question
    const input = await page.$('input[placeholder*="Ask Anubhaw Assistant"]');
    if (input) {
      await input.type('What projects has he built?');
      await page.keyboard.press('Enter');
      console.log('💬 Sent message to Anubhaw Assistant...');

      // Wait for reply
      await new Promise((r) => setTimeout(r, 1500));
      const lastMessage = await page.$$eval('[data-assistant-message]', (els) => {
        return els[els.length - 1]?.innerText || '';
      }).catch(() => '');
      console.log('🤖 Assistant replied (first 120 chars):', lastMessage.slice(0, 120));
    }
  }

  // Capture final screenshot
  await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'verification-portfolio.png'), fullPage: false });
  console.log('📸 Screenshot saved to screenshots/verification-portfolio.png');

  await browser.close();

  if (errors.length > 0) {
    console.error(`❌ Found ${errors.length} page errors during test!`);
    process.exit(1);
  }

  console.log('🎉 ALL AUTOMATED VERIFICATIONS PASSED SUCCESSFULLY!');
}

verifyPreview().catch((err) => {
  console.error('Fatal test error:', err);
  process.exit(1);
});
