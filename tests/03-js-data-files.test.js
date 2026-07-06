import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'fs';
import path from 'path';
import { evalDataFile } from './helpers/sandbox.js';

const DATA_DIR = path.join(import.meta.dirname, '..', 'data');

describe('03 — JS Data File Validation', () => {
  const jsFiles = fs.readdirSync(DATA_DIR)
    .filter(f => f.endsWith('.js') && !f.startsWith('_'));

  it('all JS data files parse without errors', () => {
    for (const f of jsFiles) {
      const fpath = path.join(DATA_DIR, f);
      const result = evalDataFile(fpath);
      assert.ok(
        !result || !result._parseError,
        `${f} — parse error: ${result?._parseError || 'unknown'}`
      );
    }
  });

  it('no duplicate IDs within any JS data file', () => {
    for (const f of jsFiles) {
      const fpath = path.join(DATA_DIR, f);
      const result = evalDataFile(fpath);
      if (!result || result._parseError) continue;
      if (!Array.isArray(result)) continue;

      const seen = new Set();
      for (let i = 0; i < result.length; i++) {
        const item = result[i];
        if (!item || typeof item !== 'object') continue;
        const id = item.id || item._id;
        if (id !== undefined && id !== null) {
          assert.ok(!seen.has(String(id)), `${f}[${i}] — duplicate ID '${id}'`);
          seen.add(String(id));
        }
      }
    }
  });

  it('each JS file has expected content (non-empty)', () => {
    for (const f of jsFiles) {
      const fpath = path.join(DATA_DIR, f);
      const result = evalDataFile(fpath);
      if (!result || result._parseError) continue;

      if (Array.isArray(result)) {
        assert.ok(result.length > 0, `${f} — empty array, no data`);
      } else if (typeof result === 'object') {
        assert.ok(Object.keys(result).length > 0, `${f} — empty object, no data`);
      }
    }
  });
});
