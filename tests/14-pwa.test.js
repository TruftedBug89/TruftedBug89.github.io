import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'fs';
import path from 'path';

const ROOT_DIR = path.join(import.meta.dirname, '..');

describe('14 — PWA Readiness', () => {
  it('index.html has apple-mobile-web-app-capable meta', () => {
    const content = fs.readFileSync(path.join(ROOT_DIR, 'index.html'), 'utf8');
    assert.ok(/apple-mobile-web-app-capable.*yes/.test(content), 'missing apple mobile web capable');
  });

  it('index.html has apple-mobile-web-app-title meta', () => {
    const content = fs.readFileSync(path.join(ROOT_DIR, 'index.html'), 'utf8');
    assert.ok(/apple-mobile-web-app-title/.test(content), 'missing apple mobile title');
  });

  it('has .nojekyll for GitHub Pages', () => {
    assert.ok(fs.existsSync(path.join(ROOT_DIR, '.nojekyll')), 'missing .nojekyll');
  });

  it('has .gitignore with reasonable entries', () => {
    const giPath = path.join(ROOT_DIR, '.gitignore');
    assert.ok(fs.existsSync(giPath), '.gitignore missing');
    const content = fs.readFileSync(giPath, 'utf8');
    assert.ok(content.length > 0, '.gitignore is empty');
  });

  it('manifest.json has apple-mobile-* support', () => {
    const indexContent = fs.readFileSync(path.join(ROOT_DIR, 'index.html'), 'utf8');
    assert.ok(/apple-mobile-web-app-status-bar-style/.test(indexContent), 'missing status bar style');
  });

  it('has og:title and og:description meta tags', () => {
    const content = fs.readFileSync(path.join(ROOT_DIR, 'index.html'), 'utf8');
    assert.ok(/og:title/.test(content), 'missing og:title');
    assert.ok(/og:description/.test(content), 'missing og:description');
    assert.ok(/twitter:card/.test(content), 'missing twitter:card');
  });

  it('has schema.org structured data', () => {
    const content = fs.readFileSync(path.join(ROOT_DIR, 'index.html'), 'utf8');
    assert.ok(/application\/ld\+json/.test(content), 'missing JSON-LD structured data');
    assert.ok(/"@type":\s*"WebApplication"/.test(content), 'schema.org type not WebApplication');
  });

  it('has canonical URL', () => {
    const content = fs.readFileSync(path.join(ROOT_DIR, 'index.html'), 'utf8');
    const can = content.match(/rel="canonical"\s+href="([^"]+)"/);
    assert.ok(can, 'missing canonical tag');
    assert.ok(can[1].startsWith('https://'), `canonical not https: ${can[1]}`);
  });

  it('index.html has color-scheme: dark meta', () => {
    const content = fs.readFileSync(path.join(ROOT_DIR, 'index.html'), 'utf8');
    assert.ok(/name="color-scheme".*content="dark"/.test(content), 'missing color-scheme dark');
  });

  it('has viewport-fit=cover for iPhone notch', () => {
    const content = fs.readFileSync(path.join(ROOT_DIR, 'index.html'), 'utf8');
    assert.ok(/viewport-fit=cover/.test(content), 'missing viewport-fit=cover');
  });

  it('is index.html self-contained (no external script deps except fonts)', () => {
    const content = fs.readFileSync(path.join(ROOT_DIR, 'index.html'), 'utf8');
    const remoteScripts = content.matchAll(/<script[^>]+src="https?:\/\/[^"]+"/g);
    const count = [...remoteScripts].length;
    assert.equal(count, 0, `${count} remote scripts found — app should have no external JS deps`);
  });

  it('fonts loaded via display=swap for performance', () => {
    const content = fs.readFileSync(path.join(ROOT_DIR, 'index.html'), 'utf8');
    const fontLinks = content.matchAll(/fonts\.googleapis\.com[^"]+display=swap/g);
    assert.ok([...fontLinks].length > 0, 'Google Fonts not using display=swap');
  });
});
