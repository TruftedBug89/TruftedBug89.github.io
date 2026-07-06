import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'fs';
import path from 'path';
import { evalDataFile } from './helpers/sandbox.js';

const DATA_DIR = path.join(import.meta.dirname, '..', 'data');
const ROOT_DIR = path.join(import.meta.dirname, '..');

describe('01 — Data Integrity (umbrella)', () => {
  const allFiles = fs.readdirSync(DATA_DIR);
  const jsFiles = allFiles.filter(f => f.endsWith('.js') && !f.startsWith('_'));
  const jsonlFiles = allFiles.filter(f => f.endsWith('.jsonl'));

  it(`found ${jsFiles.length} JS data files and ${jsonlFiles.length} JSONL files`, () => {
    assert.ok(jsFiles.length > 0, 'no JS data files');
    assert.ok(jsonlFiles.length > 0, 'no JSONL data files');
  });

  it('total data file count is reasonable (>50)', () => {
    assert.ok(allFiles.length > 50, `only ${allFiles.length} files in data/`);
  });

  it('all JSONL files are valid and have entries', () => {
    const REQUIRED = ['id', 'character', 'pinyin', 'meaning'];
    let totalVocab = 0;
    const issues = [];

    for (const f of jsonlFiles) {
      const content = fs.readFileSync(path.join(DATA_DIR, f), 'utf8');
      const lines = content.split('\n').filter(l => l.trim());
      const ids = new Set();

      for (let i = 0; i < lines.length; i++) {
        let obj;
        try {
          obj = JSON.parse(lines[i]);
        } catch (e) {
          issues.push(`${f}:${i + 1} — invalid JSON`);
          continue;
        }
        for (const field of REQUIRED) {
          if (obj[field] === undefined || obj[field] === null) {
            issues.push(`${f}:${i + 1} — missing '${field}'`);
          }
        }
        if (obj.id !== undefined) {
          if (ids.has(String(obj.id))) {
            issues.push(`${f}:${i + 1} — duplicate ID '${obj.id}'`);
          }
          ids.add(String(obj.id));
        }
      }
      totalVocab += lines.length;
    }

    assert.equal(issues.length, 0, `JSONL issues:\n  ${issues.join('\n  ')}`);
    assert.ok(totalVocab > 0, 'zero vocabulary entries across all JSONL files');
  });

  it('all JS data files parse and have content', () => {
    let parseErrors = 0;
    let totalItems = 0;
    const issues = [];

    for (const f of jsFiles) {
      const fpath = path.join(DATA_DIR, f);
      const result = evalDataFile(fpath);

      if (result && result._parseError) {
        issues.push(`${f} — parse error: ${result._parseError}`);
        parseErrors++;
      } else if (Array.isArray(result)) {
        const ids = new Set();
        for (let i = 0; i < result.length; i++) {
          const item = result[i];
          if (!item || typeof item !== 'object') continue;
          const id = item.id || item._id;
          if (id !== undefined && id !== null) {
            if (ids.has(String(id))) {
              issues.push(`${f}[${i}] — duplicate ID '${id}'`);
            }
            ids.add(String(id));
          }
        }
        totalItems += result.length;
      } else if (result && typeof result === 'object') {
        let nested = 0;
        for (const key of Object.keys(result)) {
          if (Array.isArray(result[key])) nested += result[key].length;
        }
        totalItems += nested;
      }
    }

    assert.equal(parseErrors, 0, `parse errors:\n  ${issues.join('\n  ')}`);
    assert.ok(totalItems > 0, 'zero items across all JS data files');
  });

  it('DataLoader registry matches all JSONL files on disk', () => {
    const dlPath = path.join(ROOT_DIR, 'js', 'data-loader.js');
    const content = fs.readFileSync(dlPath, 'utf8');
    const matches = content.matchAll(/'data\/([^']+)'/g);
    const referenced = [...matches].map(m => m[1]);

    const diskJsonl = fs.readdirSync(DATA_DIR).filter(f => f.endsWith('.jsonl'));
    const missing = referenced.filter(r => !fs.existsSync(path.join(DATA_DIR, r)));
    const orphaned = diskJsonl.filter(f => !referenced.includes(f));

    assert.deepEqual(missing, [], `referenced files missing from disk: ${missing.join(', ')}`);
    assert.deepEqual(orphaned, [], `orphaned JSONL not in registry: ${orphaned.join(', ')}`);
  });
});
