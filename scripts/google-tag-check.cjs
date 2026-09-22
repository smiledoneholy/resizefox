/* eslint-disable @typescript-eslint/no-require-imports */
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const assert = require('node:assert/strict');
(async () => {
 const base = process.env.TEST_BASE_URL || 'http://localhost:3022';
 const browser = await chromium.launch({channel:'chrome',headless:true});
 try {
  const page = await browser.newPage();
  let loaders = 0;
  await page.route(/^https?:\/\//, route => {
   const url = new URL(route.request().url());
   if(url.hostname === 'www.googletagmanager.com' && url.pathname === '/gtag/js') {
    loaders++; return route.fulfill({contentType:'application/javascript',body:'/* Stub: inspect queued configuration without sending test visits. */'});
   }
   return url.origin === new URL(base).origin ? route.continue() : route.abort();
  });
  await page.goto(base);
  await page.waitForFunction(()=>window.dataLayer?.length >= 3);
  const check=async()=>{
   const commands=await page.evaluate(()=>window.dataLayer.map(entry=>Array.from(entry)));
   for(const id of ['G-64KRV3M9TN','AW-17041135809']) assert.equal(commands.filter(c=>c[0]==='config'&&c[1]===id).length,1,id);
   assert.equal(commands.filter(c=>c[0]==='js').length,1);
   assert.equal(loaders,1);
   assert.equal(await page.locator('script[src*="googletagmanager.com/gtag/js"]').count(),1);
  };
  await check();
  await page.locator('a[href="/edit-pdf"]').first().click();await page.waitForURL(base+'/edit-pdf');await check();
  assert.ok(!(await page.evaluate(()=>window.dataLayer.map(e=>Array.from(e)))).some(e=>e[0]==='event'&&e[1]==='conversion'));
  console.log('PASS one Google loader, both account configurations once, client navigation without reinitialization, no invented conversion event');
 } finally {await browser.close();}
})().catch(error=>{console.error(error);process.exitCode=1;});
