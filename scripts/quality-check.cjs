/* eslint-disable @typescript-eslint/no-require-imports -- Standalone Node CommonJS test runner. */
// Run against a production server: TEST_BASE_URL=http://127.0.0.1:3018
// PLAYWRIGHT_MODULE may point to a separately installed Playwright package.
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const { PDFDocument } = require('pdf-lib');
const assert = require('node:assert/strict');
const fs = require('node:fs/promises');
const os = require('node:os');
const path = require('node:path');

(async () => {
  const browser = await chromium.launch({channel:'chrome', headless:true});
  const page = await browser.newPage();
  const errors = []; page.on('pageerror', e => errors.push(e.message));
  const base = process.env.TEST_BASE_URL || 'http://127.0.0.1:3018';
  await page.route(/^https?:\/\//, route => route.request().url().startsWith(base) ? route.continue() : route.abort());
  const temporary = await fs.mkdtemp(path.join(os.tmpdir(), 'resizefox-qa-'));
  try {
    assert.equal((await page.goto(base+'/compression-lab')).status(),200);
    for (const sample of ['text','gradient','transparent']) {
      await page.getByLabel('Test pattern').selectOption(sample);
      await page.getByRole('button',{name:'Compare formats',exact:true}).click();
      await page.getByRole('link',{name:'Download PNG',exact:true}).waitFor();
      const results = await page.evaluate(async () => {
        const links = [...document.querySelectorAll('a[download]')];
        return Promise.all(links.map(async a => {const blob=await (await fetch(a.href)).blob();const image=await createImageBitmap(blob); const c=document.createElement('canvas'); c.width=image.width;c.height=image.height;const ctx=c.getContext('2d');ctx.drawImage(image,0,0);const alpha=ctx.getImageData(0,0,1,1).data[3];image.close();return {type:blob.type,size:blob.size,width:c.width,height:c.height,alpha};}));
      });
      assert.equal(results.length,3); assert.deepEqual(results.map(r=>r.type),['image/png','image/webp','image/jpeg']);
      results.forEach(r=>{assert.equal(r.width,960);assert.equal(r.height,640);assert.ok(r.size>0);});
      if(sample==='transparent') {assert.equal(results[0].alpha,0);assert.equal(results[1].alpha,0);assert.equal(results[2].alpha,255);}
      console.log('PASS format exports:',sample,results.map(r=>r.size));
    }
    await page.getByLabel('Output dimensions').selectOption('50');
    assert.equal(await page.locator('a[download]').count(),0);
    await page.getByRole('button',{name:'Compare formats',exact:true}).click();
    await page.getByRole('link',{name:'Download PNG',exact:true}).waitFor();
    assert.ok(await page.getByText('960 × 640 source → 480 × 320 output',{exact:false}).count());
    await page.setViewportSize({width:390,height:844});
    assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=window.innerWidth));
    await page.screenshot({path:path.join(temporary,'lab-mobile.png'),fullPage:true});
    console.log('PASS half-size export, stale result clearing and mobile width');
    const tiny = await PDFDocument.create();tiny.addPage([300,500]).drawText('Preserve this original');
    const tinyBytes=await tiny.save(); const tinyPath=path.join(temporary,'tiny.pdf');await fs.writeFile(tinyPath,tinyBytes);
    await page.goto(base+'/compress-pdf');await page.locator('input[type=file]').setInputFiles(tinyPath);
    await page.getByRole('button',{name:'Compress PDF',exact:true}).click();
    await page.getByRole('link',{name:'Download',exact:true}).waitFor();
    let actual=Buffer.from(await page.locator('a[download]').evaluate(async a=>Array.from(new Uint8Array(await (await fetch(a.href)).arrayBuffer()))));
    assert.deepEqual(actual,Buffer.from(tinyBytes));console.log('PASS non-beneficial PDF compression preserves bytes');
    const png=await page.evaluate(async()=>{const c=document.createElement('canvas');c.width=1200;c.height=1600;const ctx=c.getContext('2d');const im=ctx.createImageData(c.width,c.height);let seed=42;for(let i=0;i<im.data.length;i+=4){seed=(Math.imul(seed,1664525)+1013904223)>>>0;im.data[i]=seed&255;im.data[i+1]=(seed>>>8)&255;im.data[i+2]=(seed>>>16)&255;im.data[i+3]=255;}ctx.putImageData(im,0,0);return c.toDataURL('image/png').split(',')[1];});
    const heavy=await PDFDocument.create();const embedded=await heavy.embedPng(Buffer.from(png,'base64'));heavy.addPage([300,500]).drawImage(embedded,{x:0,y:0,width:300,height:500});const heavyBytes=await heavy.save();const heavyPath=path.join(temporary,'heavy.pdf');await fs.writeFile(heavyPath,heavyBytes);
    await page.locator('input[type=file]').setInputFiles(heavyPath);await page.getByRole('button',{name:'Compress PDF',exact:true}).click();await page.getByRole('link',{name:'Download',exact:true}).waitFor();
    actual=Buffer.from(await page.locator('a[download]').evaluate(async a=>Array.from(new Uint8Array(await (await fetch(a.href)).arrayBuffer()))));
    const checked=await PDFDocument.load(actual);assert.equal(checked.getPageCount(),1);assert.equal(checked.getPage(0).getWidth(),300);assert.equal(checked.getPage(0).getHeight(),500);assert.ok(actual.length<heavyBytes.length);
    console.log('PASS smaller PDF with original 300 × 500 point page size');
    const sourcePath=path.join(temporary,'texture.png');await fs.writeFile(sourcePath,Buffer.from(png,'base64'));
    for(const kb of [20,100]) {
      await page.goto(base+`/resize-image-to-${kb}kb`);await page.locator('input[type=file]').setInputFiles(sourcePath);
      await page.getByRole('button',{name:`Compress Image to ${kb}KB`,exact:true}).click();
      await page.getByRole('button',{name:'Download Image',exact:true}).waitFor();
      const stats=await page.getByAltText('Result preview — inspect detail and background before downloading').evaluate(async img=>{const blob=await (await fetch(img.src)).blob();return {size:blob.size,type:blob.type};});
      assert.ok(stats.size<=kb*1024);assert.equal(stats.type,'image/jpeg');console.log('PASS image compression byte limit',kb,stats.size);
    }
    await page.getByRole('button',{name:'Choose Another Image'}).click();
    await page.locator('input[type=file]').setInputFiles({name:'broken.png',mimeType:'image/png',buffer:Buffer.from('invalid')});
    await page.getByRole('button',{name:'Compress Image to 100KB',exact:true}).click();
    await page.getByText('Something went wrong while compressing the image.',{exact:true}).waitFor();
    assert.ok(await page.getByRole('button',{name:'Choose Another Image'}).isEnabled());console.log('PASS corrupt image recovery');
    const sitemap=await (await page.request.get(base+'/sitemap.xml')).text();
    const urls=[...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(m=>m[1].replace('https://resizefox.com',base));
    for(const url of urls){const response=await page.request.get(url);assert.equal(response.status(),200,url);const html=await response.text();assert.match(html,/<h1[ >]/,url);assert.match(html,/rel="canonical"/,url);}
    assert.deepEqual(errors,[]);console.log('PASS all sitemap pages:',urls.length);console.log('Screenshots:',temporary);
  } finally {await browser.close();}
})().catch(error=>{console.error(error);process.exitCode=1;});
