import puppeteer from 'puppeteer-core';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

async function verifyLive() {
  console.log('🌐 Verifying live production deployment: https://anubhaw-mishra-portfolio.vercel.app ...');
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  await page.goto('https://anubhaw-mishra-portfolio.vercel.app', { waitUntil: 'networkidle0', timeout: 30000 });

  await page.evaluate(() => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'instant', block: 'start' });
  });
  await new Promise((r) => setTimeout(r, 2000));

  const titles = await page.$$eval('#projects h3', (els) => els.map((e) => e.innerText.trim()));
  console.log(`✅ Live Site Projects (${titles.length}):`, titles);

  const images = await page.$$eval('#projects img', (imgs) => imgs.map((img) => ({
    alt: img.alt,
    loaded: img.complete && img.naturalWidth > 0,
    dims: `${img.naturalWidth}x${img.naturalHeight}`
  })));
  console.log('🖼️ Project Banner Images:', images);

  await browser.close();
}

verifyLive().catch((e) => {
  console.error('Error verifying live deployment:', e);
  process.exit(1);
});
