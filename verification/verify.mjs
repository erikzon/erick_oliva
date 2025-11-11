
import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:8080');
  await page.click('#spanish');
  await page.screenshot({ path: 'verification/spanish.png' });
  await browser.close();
})();
