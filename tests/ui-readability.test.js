const test = require('node:test');
const assert = require('node:assert/strict');
const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const { chromium } = require('playwright');

const root = path.resolve(__dirname, '..');
let server;
let origin;
let browser;

const types = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.json': 'application/json', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg' };

test.before(async () => {
  server = http.createServer((request, response) => {
    const pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
    const relative = pathname === '/' ? 'index.html' : pathname.replace(/^\//, '');
    const file = path.resolve(root, relative);
    if (!file.startsWith(`${root}${path.sep}`) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) {
      response.writeHead(404).end('Not found');
      return;
    }
    response.setHeader('Content-Type', types[path.extname(file)] || 'application/octet-stream');
    fs.createReadStream(file).pipe(response);
  });
  await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
  origin = `http://127.0.0.1:${server.address().port}`;
  browser = await chromium.launch({ headless: true });
});

test.after(async () => {
  await browser?.close();
  await new Promise((resolve) => server?.close(resolve));
});

const auditPage = async (width, height, language = 'en') => {
  const page = await browser.newPage({ viewport: { width, height }, reducedMotion: 'reduce' });
  await page.goto(origin, { waitUntil: 'domcontentloaded' });
  await page.evaluate(() => {
    document.querySelector('[data-cinematic-splash]')?.remove();
    document.documentElement.classList.remove('splash-booting', 'splash-ready');
  });
  if (language !== 'en') {
    await page.click('[data-language-trigger]');
    await page.click(`[data-language-option="${language}"]`);
  }
  await page.waitForTimeout(150);

  const result = await page.evaluate(() => {
    const visible = (element) => {
      const style = getComputedStyle(element);
      const rect = element.getBoundingClientRect();
      return style.display !== 'none' && style.visibility !== 'hidden' && Number(style.opacity) > 0 && rect.width > 1 && rect.height > 1;
    };
    const viewportEscapes = [...document.querySelectorAll('main > section, .container, .about-content, .book-card, .reflection-card, .premium-card, .cta-panel, .expanded-player-card, .video-modal__panel, .videos-drawer__panel, .media-kit-drawer__panel, .guide-panel')]
      .filter(visible)
      .filter((element) => {
        const rect = element.getBoundingClientRect();
        return rect.bottom > 0 && rect.top < innerHeight && (rect.left < -1 || rect.right > innerWidth + 1);
      })
      .map((element) => `${element.tagName.toLowerCase()}.${element.className}`)
      .slice(0, 12);
    const clippedText = [...document.querySelectorAll('main h1, main h2, main h3, main p, main li, main a.button, main button')]
      .filter(visible)
      .filter((element) => {
        const style = getComputedStyle(element);
        return (style.overflow === 'hidden' || style.overflowY === 'hidden') && element.scrollHeight > element.clientHeight + 2;
      })
      .map((element) => element.textContent.trim().slice(0, 60));
    const undersized = [...document.querySelectorAll('main p, main li, main a.button, main button')]
      .filter(visible)
      .filter((element) => Number.parseFloat(getComputedStyle(element).fontSize) < 13)
      .map((element) => element.textContent.trim().slice(0, 60));
    return {
      horizontalOverflow: document.documentElement.scrollWidth - document.documentElement.clientWidth,
      viewportEscapes,
      clippedText,
      undersized,
      missingSections: ['hero', 'about', 'works', 'music', 'videos', 'reflections', 'press', 'contact']
        .filter((id) => !document.getElementById(id)?.getBoundingClientRect().height)
    };
  });
  await page.close();
  return result;
};

for (const viewport of [
  { width: 1440, height: 1000 },
  { width: 1024, height: 900 },
  { width: 768, height: 900 },
  { width: 430, height: 860 },
  { width: 390, height: 844 },
  { width: 360, height: 800 }
]) {
  test(`layout remains readable at ${viewport.width}px`, async () => {
    const result = await auditPage(viewport.width, viewport.height, viewport.width === 390 ? 'de' : 'en');
    assert.ok(result.horizontalOverflow <= 1, `document overflows by ${result.horizontalOverflow}px`);
    assert.deepEqual(result.viewportEscapes, [], `elements escape viewport: ${result.viewportEscapes.join(', ')}`);
    assert.deepEqual(result.clippedText, [], `text is clipped: ${result.clippedText.join(' | ')}`);
    assert.deepEqual(result.undersized, [], `important text is under 13px: ${result.undersized.join(' | ')}`);
    assert.deepEqual(result.missingSections, [], `sections did not render: ${result.missingSections.join(', ')}`);
  });
}

test('mobile navigation opens and exposes its links', async () => {
  const page = await browser.newPage({ viewport: { width: 360, height: 800 }, reducedMotion: 'reduce' });
  await page.goto(origin, { waitUntil: 'domcontentloaded' });
  await page.waitForFunction(() => typeof window.auditTranslations === 'function');
  await page.evaluate(() => {
    document.querySelector('[data-cinematic-splash]')?.remove();
    document.documentElement.classList.remove('splash-booting', 'splash-ready');
  });
  await page.locator('.nav-toggle').evaluate((button) => button.click());
  assert.equal(await page.locator('.nav-toggle').getAttribute('aria-expanded'), 'true');
  await page.waitForTimeout(250);
  const navState = await page.locator('.nav-links').evaluate((element) => ({
    className: element.className,
    visibility: getComputedStyle(element).visibility,
    opacity: getComputedStyle(element).opacity,
    headerVisibility: getComputedStyle(element.closest('.site-header')).visibility
  }));
  assert.equal(navState.visibility, 'visible', JSON.stringify(navState));
  assert.ok(await page.locator('.nav-links a').count() >= 5);
  await page.close();
});

test('hero and install actions preserve readable sapphire-theme contrast', async () => {
  const page = await browser.newPage({ viewport: { width: 390, height: 844 }, reducedMotion: 'reduce' });
  await page.goto(origin, { waitUntil: 'domcontentloaded' });
  await page.evaluate(() => {
    document.querySelector('[data-cinematic-splash]')?.remove();
    document.documentElement.classList.remove('splash-booting', 'splash-ready');
    document.querySelector('[data-install-toast]')?.removeAttribute('hidden');
  });

  const colors = await page.evaluate(() => {
    const read = (selector) => {
      const style = getComputedStyle(document.querySelector(selector));
      return { color: style.color, backgroundColor: style.backgroundColor };
    };
    return {
      subtitle: read('.hero .subtitle'),
      heading: read('.hero h2'),
      primary: read('.hero .button-primary'),
      install: read('[data-install-button]')
    };
  });

  assert.equal(colors.subtitle.color, 'rgb(230, 240, 255)');
  assert.equal(colors.heading.color, 'rgb(255, 250, 241)');
  for (const control of [colors.primary, colors.install]) {
    assert.equal(control.color, 'rgb(255, 255, 255)');
    assert.equal(control.backgroundColor, 'rgb(29, 78, 216)');
    assert.notEqual(control.color, control.backgroundColor);
  }
  await page.close();
});
