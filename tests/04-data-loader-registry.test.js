import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'fs';
import path from 'path';

const DATA_DIR = path.join(import.meta.dirname, '..', 'data');
const JS_DIR = path.join(import.meta.dirname, '..', 'js');

describe('04 — DataLoader Registry Integrity', () => {
  let registryEntries = [];

  it('extracts all file references from data-loader.js registry', () => {
    const dlPath = path.join(JS_DIR, 'data-loader.js');
    assert.ok(fs.existsSync(dlPath), 'data-loader.js not found');

    const content = fs.readFileSync(dlPath, 'utf8');
    const matches = content.matchAll(/'data\/([^']+)'/g);
    registryEntries = [...matches].map(m => m[1]);
    assert.ok(registryEntries.length > 0, 'no data/ references found in data-loader.js');
  });

  it('every DataLoader registry entry exists on disk', () => {
    const missing = [];
    for (const entry of registryEntries) {
      const exists = fs.existsSync(path.join(DATA_DIR, entry));
      if (!exists) missing.push(entry);
    }
    assert.deepEqual(missing, [], `missing files: ${missing.join(', ')}`);
  });

  it('every JSONL file on disk is referenced in DataLoader registry', () => {
    const allFiles = fs.readdirSync(DATA_DIR);
    const diskJsonl = allFiles.filter(f => f.endsWith('.jsonl'));
    const orphaned = diskJsonl.filter(f => !registryEntries.includes(f));

    if (orphaned.length > 0) {
      assert.fail(`orphaned JSONL not in DataLoader registry: ${orphaned.join(', ')}`);
    } else {
      assert.ok(true, 'all JSONL files are registered');
    }
  });

  it('HSK level map references exist in registry', () => {
    const dlPath = path.join(JS_DIR, 'data-loader.js');
    const content = fs.readFileSync(dlPath, 'utf8');

    const expectedHSK = ['hsk1', 'hsk2', 'hsk3', 'hsk4', 'hsk5'];
    for (const level of expectedHSK) {
      const hasKey = new RegExp(`${level}:\\s*'data/`).test(content);
      assert.ok(hasKey, `data-loader.js missing registry key: ${level}`);
    }
  });
});
