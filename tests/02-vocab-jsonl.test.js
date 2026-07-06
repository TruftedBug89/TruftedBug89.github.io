import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'fs';
import path from 'path';

const DATA_DIR = path.join(import.meta.dirname, '..', 'data');

describe('02 — Vocabulary JSONL Validation', () => {
  const REQUIRED = ['id', 'character', 'pinyin', 'meaning'];

  it('all JSONL files have valid JSON on every line', () => {
    const files = fs.readdirSync(DATA_DIR).filter(f => f.endsWith('.jsonl'));
    assert.ok(files.length > 0, 'no JSONL files found');

    for (const f of files) {
      const content = fs.readFileSync(path.join(DATA_DIR, f), 'utf8');
      const lines = content.split('\n').filter(l => l.trim());
      assert.ok(lines.length > 0, `${f} is empty`);

      for (let i = 0; i < lines.length; i++) {
        let obj;
        try {
          obj = JSON.parse(lines[i]);
        } catch (e) {
          assert.fail(`${f}:${i + 1} — invalid JSON: ${e.message}`);
        }
        assert.ok(obj && typeof obj === 'object', `${f}:${i + 1} — not an object`);
      }
    }
  });

  it('all entries have required fields (id, character, pinyin, meaning)', () => {
    const files = fs.readdirSync(DATA_DIR).filter(f => f.endsWith('.jsonl'));

    for (const f of files) {
      const content = fs.readFileSync(path.join(DATA_DIR, f), 'utf8');
      const lines = content.split('\n').filter(l => l.trim());

      for (let i = 0; i < lines.length; i++) {
        const obj = JSON.parse(lines[i]);
        for (const field of REQUIRED) {
          assert.notEqual(obj[field], undefined, `${f}:${i + 1} — missing '${field}'`);
          assert.notEqual(obj[field], null, `${f}:${i + 1} — null '${field}'`);
        }
        assert.ok(typeof obj.id === 'string' || typeof obj.id === 'number', `${f}:${i + 1} — id not string/number`);
        assert.ok(typeof obj.character === 'string', `${f}:${i + 1} — character not string`);
        assert.ok(typeof obj.pinyin === 'string', `${f}:${i + 1} — pinyin not string`);
        assert.ok(typeof obj.meaning === 'string', `${f}:${i + 1} — meaning not string`);
      }
    }
  });

  it('no duplicate IDs within any JSONL file', () => {
    const files = fs.readdirSync(DATA_DIR).filter(f => f.endsWith('.jsonl'));

    for (const f of files) {
      const content = fs.readFileSync(path.join(DATA_DIR, f), 'utf8');
      const lines = content.split('\n').filter(l => l.trim());
      const seen = new Set();

      for (let i = 0; i < lines.length; i++) {
        const obj = JSON.parse(lines[i]);
        if (obj.id !== undefined) {
          assert.ok(!seen.has(String(obj.id)), `${f}:${i + 1} — duplicate ID '${obj.id}'`);
          seen.add(String(obj.id));
        }
      }
    }
  });

  it('no empty character or pinyin fields', () => {
    const files = fs.readdirSync(DATA_DIR).filter(f => f.endsWith('.jsonl'));

    for (const f of files) {
      const content = fs.readFileSync(path.join(DATA_DIR, f), 'utf8');
      const lines = content.split('\n').filter(l => l.trim());

      for (let i = 0; i < lines.length; i++) {
        const obj = JSON.parse(lines[i]);
        assert.ok(String(obj.character).trim().length > 0, `${f}:${i + 1} — empty character`);
        assert.ok(String(obj.pinyin).trim().length > 0, `${f}:${i + 1} — empty pinyin`);
        assert.ok(String(obj.meaning).trim().length > 0, `${f}:${i + 1} — empty meaning`);
      }
    }
  });
});
