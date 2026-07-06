import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'fs';
import path from 'path';

const ROOT_DIR = path.join(import.meta.dirname, '..');

describe('11 — Manifest Validation', () => {
  let manifest;

  it('manifest.json exists', () => {
    const mp = path.join(ROOT_DIR, 'manifest.json');
    assert.ok(fs.existsSync(mp), 'manifest.json not found');
    const content = fs.readFileSync(mp, 'utf8');
    try {
      manifest = JSON.parse(content);
    } catch (e) {
      assert.fail('manifest.json is not valid JSON');
    }
  });

  it('has required PWA fields', () => {
    assert.ok(manifest.name, 'missing name');
    assert.ok(manifest.short_name, 'missing short_name');
    assert.ok(manifest.start_url, 'missing start_url');
    assert.ok(manifest.display, 'missing display');
    assert.ok(manifest.background_color, 'missing background_color');
    assert.ok(manifest.theme_color, 'missing theme_color');
  });

  it('display is standalone or fullscreen', () => {
    const valid = ['standalone', 'fullscreen', 'minimal-ui'];
    assert.ok(valid.includes(manifest.display), `invalid display: ${manifest.display}`);
  });

  it('start_url and scope are valid', () => {
    assert.ok(manifest.start_url.length > 0);
    assert.ok(['/', '/index.html', './', '.'].includes(manifest.start_url) || manifest.start_url.startsWith('/'));
  });

  it('theme_color matches dark theme', () => {
    assert.ok(/^#[0-9a-fA-F]{6}$/.test(manifest.theme_color), `invalid theme_color: ${manifest.theme_color}`);
    assert.equal(manifest.theme_color.toLowerCase(), '#0a0a0f');
  });

  it('lang is present', () => {
    assert.ok(manifest.lang, 'missing lang');
    assert.ok(manifest.lang.startsWith('en'), `lang should be en, got ${manifest.lang}`);
  });

  it('categories includes education', () => {
    assert.ok(Array.isArray(manifest.categories), 'categories not an array');
    assert.ok(manifest.categories.includes('education'), 'missing education category');
  });

  it('orientation is valid if present', () => {
    if (manifest.orientation) {
      const valid = ['any', 'natural', 'landscape', 'landscape-primary', 'landscape-secondary',
        'portrait', 'portrait-primary', 'portrait-secondary'];
      assert.ok(valid.includes(manifest.orientation), `invalid orientation: ${manifest.orientation}`);
    }
  });

  it('index.html theme-color meta matches manifest', () => {
    const indexContent = fs.readFileSync(path.join(ROOT_DIR, 'index.html'), 'utf8');
    const metaTheme = indexContent.match(/name="theme-color"\s+content="([^"]+)"/);
    if (metaTheme) {
      assert.equal(metaTheme[1].toLowerCase(), manifest.theme_color.toLowerCase(),
        'theme-color meta does not match manifest');
    }
  });
});
