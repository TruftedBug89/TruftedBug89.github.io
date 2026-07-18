import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'fs';
import path from 'path';

const ROOT_DIR = path.join(import.meta.dirname, '..');

describe('12 — Service Worker Validation', () => {
  let swContent;

  it('sw.js exists and has CACHE_NAME', () => {
    const swp = path.join(ROOT_DIR, 'sw.js');
    assert.ok(fs.existsSync(swp), 'sw.js not found');
    swContent = fs.readFileSync(swp, 'utf8');
    assert.ok(swContent.length > 50, 'sw.js too small');

    assert.ok(/CACHE_NAME/.test(swContent), 'missing CACHE_NAME constant');
  });

  it('PRECACHE_URLS array is defined', () => {
    assert.ok(/PRECACHE_URLS\s*=\s*\[/.test(swContent), 'missing PRECACHE_URLS');
  });

  it('all precached URLs exist on disk', () => {
    const urlMatch = swContent.match(/PRECACHE_URLS\s*=\s*\[([\s\S]*?)\];/);
    assert.ok(urlMatch, 'cannot extract PRECACHE_URLS');

    const urlContent = urlMatch[1];
    const pathMatches = urlContent.matchAll(/['"]([^'"]+)['"]/g);
    const missing = [];

    for (const pm of pathMatches) {
      const p = pm[1];
      const relPath = p.replace(/^\//, '');
      const fullPath = path.join(ROOT_DIR, relPath);
      if (!fs.existsSync(fullPath)) {
        missing.push(p);
      }
    }

    assert.deepEqual(missing, [], `precached URLs missing from disk:\n  ${missing.join('\n  ')}`);
  });

  it('has install event listener', () => {
    assert.ok(/addEventListener\(['"]install['"]/.test(swContent), 'missing install listener');
  });

  it('has activate event listener with cache cleanup', () => {
    assert.ok(/addEventListener\(['"]activate['"]/.test(swContent), 'missing activate listener');
  });

  it('has fetch event listener with cache-first strategy', () => {
    assert.ok(/addEventListener\(['"]fetch['"]/.test(swContent), 'missing fetch listener');
    assert.ok(/caches\.match/.test(swContent), 'missing cache.match in fetch handler');
  });

  it('index.html has register-sw.js script', () => {
    const indexContent = fs.readFileSync(path.join(ROOT_DIR, 'index.html'), 'utf8');
    assert.ok(/register-sw\.js/.test(indexContent), 'register-sw.js not referenced in index.html');
  });

  it('register-sw.js exists', () => {
    assert.ok(fs.existsSync(path.join(ROOT_DIR, 'js', 'register-sw.js')), 'register-sw.js not found');
  });

  it('large data files have corresponding data/ files', () => {
    const largeMatch = swContent.match(/LARGE_DATA_FILES\s*=\s*\[([\s\S]*?)\];/);
    if (largeMatch) {
      const content = largeMatch[1];
      const names = content.matchAll(/'([^']+)'/g);
      for (const nm of names) {
        const name = nm[1];
        const inData = fs.readdirSync(path.join(ROOT_DIR, 'data'))
          .filter(f => f.endsWith('.js'))
          .some(f => f.includes(name));
        assert.ok(inData, `LARGE_DATA_FILES entry '${name}' not found in data/ dir`);
      }
    }
  });

  it('cache invalidation uses versioned CACHE_NAME', () => {
    assert.ok(/chinese-master-v\d+/.test(swContent), 'CACHE_NAME should be versioned');
    assert.ok(/caches\.delete/.test(swContent) || /filter.*!==\s*CACHE_NAME/.test(swContent),
      'missing old cache cleanup');
  });

  it('deduplicates PRECACHE_URLS', () => {
    assert.ok(/new Set\(PRECACHE_URLS\)/.test(swContent), 'missing Set deduplication for PRECACHE_URLS');
  });

  it('notifies clients of new version via postMessage', () => {
    assert.ok(/postMessage\(\{\s*type:\s*['"]NEW_VERSION['"]\s*\}\)/.test(swContent), 'missing NEW_VERSION postMessage in activate handler');
  });

  it('restricts lazy caching to vocabulary-hsk jsonl files', () => {
    assert.ok(/indexOf\(['"]vocabulary-hsk['"]\)/.test(swContent) && /endsWith\(['"]\.jsonl['"]\)/.test(swContent), 'lazy caching should be restricted to vocabulary-hsk*.jsonl');
  });
});
