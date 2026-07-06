import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'fs';
import path from 'path';

const ROOT_DIR = path.join(import.meta.dirname, '..');

describe('13 — DOM & Script Smoke', () => {
  it('all JS files in js/ are syntactically valid', () => {
    const jsDir = path.join(ROOT_DIR, 'js');
    const files = fs.readdirSync(jsDir).filter(f => f.endsWith('.js'));
    assert.ok(files.length > 0, 'no JS files found');

    for (const f of files) {
      const fpath = path.join(jsDir, f);
      const content = fs.readFileSync(fpath, 'utf8');
      let parseable;
      try {
        new Function(content);
        parseable = true;
      } catch (e) {
        parseable = false;
      }
      assert.ok(parseable, `${f} — syntax error in JS file`);
    }
  });

  it('all JS files in components/ are syntactically valid', () => {
    const compDir = path.join(ROOT_DIR, 'components');
    const files = fs.readdirSync(compDir).filter(f => f.endsWith('.js'));
    assert.ok(files.length > 0, 'no component JS files found');

    for (const f of files) {
      const fpath = path.join(compDir, f);
      const content = fs.readFileSync(fpath, 'utf8');
      let parseable;
      try {
        new Function(content);
        parseable = true;
      } catch (e) {
        parseable = false;
      }
      assert.ok(parseable, `${f} — syntax error`);
    }
  });

  it('all CSS files are syntactically non-empty', () => {
    const cssDir = path.join(ROOT_DIR, 'css');
    const files = fs.readdirSync(cssDir).filter(f => f.endsWith('.css'));
    assert.ok(files.length > 0, 'no CSS files found');

    for (const f of files) {
      const content = fs.readFileSync(path.join(cssDir, f), 'utf8');
      assert.ok(content.trim().length > 0, `${f} is empty`);
    }
  });

  it('all build-*.js scripts are syntactically valid', () => {
    const files = fs.readdirSync(ROOT_DIR).filter(f => f.startsWith('build-') && f.endsWith('.js'));
    for (const f of files) {
      const content = fs.readFileSync(path.join(ROOT_DIR, f), 'utf8');
      let parseable;
      try {
        new Function(content);
        parseable = true;
      } catch (e) {
        parseable = false;
      }
      assert.ok(parseable, `${f} — syntax error`);
    }
  });

  it('no .js files have obvious debug/console spam left in', () => {
    const jsFiles = [
      ...fs.readdirSync(path.join(ROOT_DIR, 'js')).filter(f => f.endsWith('.js')),
      ...fs.readdirSync(path.join(ROOT_DIR, 'components')).filter(f => f.endsWith('.js'))
    ];

    let debuggerCount = 0;
    for (const f of jsFiles) {
      const dirName = f.startsWith('build') ? ROOT_DIR : path.join(ROOT_DIR, 'js');
      const tryPath = path.join(ROOT_DIR, 'js', f);
      const tryPathComp = path.join(ROOT_DIR, 'components', f);
      const fpath = fs.existsSync(tryPath) ? tryPath : tryPathComp;

      if (!fs.existsSync(fpath)) continue;
      const content = fs.readFileSync(fpath, 'utf8');

      if (/\bdebugger\b/.test(content)) {
        debuggerCount++;
      }
    }
    assert.equal(debuggerCount, 0, `${debuggerCount} file(s) have debugger statements left in`);
  });

  it('index.html loads scripts in dependency order (utils first)', () => {
    const indexContent = fs.readFileSync(path.join(ROOT_DIR, 'index.html'), 'utf8');
    const scriptMatches = [...indexContent.matchAll(/src="js\/([^"]+)"/g)];
    const ordered = scriptMatches.map(m => m[1]);

    const utilsIdx = ordered.indexOf('utils.js');
    const storageIdx = ordered.indexOf('storage.js');
    const appIdx = ordered.indexOf('app.js');

    assert.ok(utilsIdx >= 0, 'utils.js not found in script order');
    assert.ok(storageIdx >= 0, 'storage.js not found');
    assert.ok(appIdx >= 0, 'app.js not found');
    assert.ok(utilsIdx < storageIdx, 'utils.js should load before storage.js');
    assert.ok(storageIdx < appIdx, 'storage.js should load before app.js');
  });

  it('all data/*.js files parse without syntax errors', () => {
    const dataDir = path.join(ROOT_DIR, 'data');
    const files = fs.readdirSync(dataDir).filter(f => f.endsWith('.js') && !f.startsWith('_'));

    for (const f of files) {
      const content = fs.readFileSync(path.join(dataDir, f), 'utf8');
      let parseable;
      try {
        new Function(content);
        parseable = true;
      } catch (e) {
        parseable = false;
      }
      assert.ok(parseable, `${f} — syntax error in data file`);
    }
  });
});
