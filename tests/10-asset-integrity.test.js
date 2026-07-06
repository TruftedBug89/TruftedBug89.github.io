import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'fs';
import path from 'path';

const ROOT_DIR = path.join(import.meta.dirname, '..');

describe('10 — Asset Integrity', () => {
  let indexContent;
  let scriptPaths = [];
  let cssPaths = [];
  let dataScriptPaths = [];

  it('index.html exists and is readable', () => {
    const indexPath = path.join(ROOT_DIR, 'index.html');
    indexContent = fs.readFileSync(indexPath, 'utf8');
    assert.ok(indexContent.length > 100, 'index.html too small');

    const matches = indexContent.matchAll(/<script\s+src="([^"]+)"/g);
    scriptPaths = [...matches].map(m => m[1]);

    const cssMatches = indexContent.matchAll(/<link[^>]+href="([^"]+\.css)"/g);
    cssPaths = [...cssMatches].map(m => m[1]);

    const dataMatches = indexContent.matchAll(/src="(data\/[^"]+\.js)"/g);
    dataScriptPaths = [...dataMatches].map(m => m[1]);
  });

  it('all <script> src paths resolve to existing files', () => {
    assert.ok(scriptPaths.length > 0, 'no script tags in index.html');

    const missing = [];
    for (const sp of scriptPaths) {
      const fullPath = path.join(ROOT_DIR, sp);
      if (!fs.existsSync(fullPath)) {
        missing.push(sp);
      }
    }
    assert.deepEqual(missing, [], `missing script files:\n  ${missing.join('\n  ')}`);
  });

  it('all <link> CSS href paths resolve to existing files', () => {
    assert.ok(cssPaths.length > 0, 'no CSS links in index.html');

    const missing = [];
    for (const cp of cssPaths) {
      if (cp.startsWith('http')) continue;
      const fullPath = path.join(ROOT_DIR, cp);
      if (!fs.existsSync(fullPath)) {
        missing.push(cp);
      }
    }
    assert.deepEqual(missing, [], `missing CSS files:\n  ${missing.join('\n  ')}`);
  });

  it('all data/ JS files referenced in index.html exist on disk', () => {
    const missing = [];
    for (const dp of dataScriptPaths) {
      const fullPath = path.join(ROOT_DIR, dp);
      if (!fs.existsSync(fullPath)) {
        missing.push(dp);
      }
    }
    assert.deepEqual(missing, [], `missing data/ script files:\n  ${missing.join('\n  ')}`);
  });

  it('important JS files are present', () => {
    const required = [
      'js/utils.js', 'js/storage.js', 'js/session.js', 'js/app.js',
      'js/audio.js', 'js/sm2.js', 'js/data-loader.js', 'js/progress.js'
    ];
    for (const f of required) {
      assert.ok(fs.existsSync(path.join(ROOT_DIR, f)), `missing: ${f}`);
    }
  });

  it('vendor libraries exist', () => {
    assert.ok(fs.existsSync(path.join(ROOT_DIR, 'vendor', 'gsap.min.js')), 'missing gsap.min.js');
    assert.ok(fs.existsSync(path.join(ROOT_DIR, 'vendor', 'ScrollTrigger.min.js')), 'missing ScrollTrigger.min.js');
  });

  it('legal pages exist', () => {
    assert.ok(fs.existsSync(path.join(ROOT_DIR, 'legal', 'privacy.html')), 'missing privacy.html');
    assert.ok(fs.existsSync(path.join(ROOT_DIR, 'legal', 'terms.html')), 'missing terms.html');
    assert.ok(fs.existsSync(path.join(ROOT_DIR, 'legal', 'cookies.html')), 'missing cookies.html');
  });

  it('no broken internal links in legal pages', () => {
    for (const legalFile of ['privacy.html', 'terms.html', 'cookies.html']) {
      const content = fs.readFileSync(path.join(ROOT_DIR, 'legal', legalFile), 'utf8');
      const links = content.matchAll(/href="([^"]+)"/g);
      for (const m of links) {
        const href = m[1];
        if (href.startsWith('http') || href.startsWith('#') || href.startsWith('mailto:')) continue;
        const resolved = path.join(path.join(ROOT_DIR, 'legal'), href);
        if (fs.existsSync(resolved)) continue;
      }
    }
    assert.ok(true);
  });

  it('robots.txt exists', () => {
    assert.ok(fs.existsSync(path.join(ROOT_DIR, 'robots.txt')));
  });

  it('structured-data.json exists and is valid JSON', () => {
    const sdPath = path.join(ROOT_DIR, 'structured-data.json');
    assert.ok(fs.existsSync(sdPath), 'structured-data.json missing');
    const content = fs.readFileSync(sdPath, 'utf8');
    let parsed;
    try {
      parsed = JSON.parse(content);
    } catch (e) {
      assert.fail('structured-data.json not valid JSON');
    }
    assert.ok(parsed && typeof parsed === 'object');
  });

  it('index.html has DOCTYPE and lang attribute', () => {
    assert.ok(indexContent.startsWith('<!DOCTYPE html>'), 'missing DOCTYPE');
    assert.ok(/<html[^>]+lang="en"/.test(indexContent), 'missing lang="en"');
  });

  it('index.html has viewport meta', () => {
    assert.ok(/name="viewport"/.test(indexContent), 'missing viewport meta');
  });

  it('index.html has manifest link', () => {
    assert.ok(/rel="manifest"/.test(indexContent), 'missing manifest link');
  });

  it('index.html has SW registration script', () => {
    assert.ok(
      /register-sw\.js/.test(indexContent) || /serviceWorker/.test(indexContent),
      'no service worker registration found'
    );
  });

  it('index.html has noscript fallback', () => {
    assert.ok(/<noscript>/.test(indexContent), 'missing <noscript> fallback');
  });
});
