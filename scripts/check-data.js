/**
 * Dataset Integrity Checker for Chinese Master
 *
 * Usage: node scripts/check-data.js
 *
 * Validates all .js data files and .jsonl vocabulary files.
 * Exit 0 = clean, Exit 1 = issues found.
 */
'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const DATA_DIR = path.join(__dirname, '..', 'data');
const ISSUES = [];

function log(level, file, msg) {
  ISSUES.push({ level, file, msg });
}

function checkDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

// Create a safe sandbox for evaluating JS data files
function makeSandbox() {
  const sandbox = {
    window: {},
    Utils: { randomItems: (arr, n) => arr.slice(0, n) },
    console: { log() {}, warn() {}, error() {} },
    Audio: {},
    Array, Object, String, Number, Boolean, Date, Math,
    parseInt, parseFloat, isNaN, undefined,
    setTimeout, clearTimeout, setInterval, clearInterval,
    result: null
  };
  sandbox.window.window = sandbox.window;
  return sandbox;
}

// Try to evaluate a JS data file and extract its items array
function evalDataFile(filePath) {
  const code = fs.readFileSync(filePath, 'utf8');
  const sandbox = makeSandbox();

  // Wrap in a VM script with result capture
  const wrapped = `
    (function() {
      ${code}
      // Try to extract data — various patterns used
      if (typeof items !== 'undefined') {
        result = items;
      } else if (typeof window !== 'undefined') {
        // Try common global names
        var keys = Object.keys(window).filter(function(k) {
          return k !== 'window' && k !== 'result' &&
            window[k] && typeof window[k] === 'object';
        });
        if (keys.length > 0) {
          result = window[keys[0]];
        }
      }
    })();
  `;

  try {
    const script = new vm.Script(wrapped, { timeout: 10000 });
    script.runInNewContext(sandbox, { timeout: 10000 });
    return sandbox.result;
  } catch (e) {
    return { _parseError: e.message };
  }
}

// Check JSONL file: each line must be valid JSON with required fields
function checkJsonl(filePath, requiredFields) {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n').filter(l => l.trim());
  let lineNum = 0;
  const ids = new Set();
  const items = [];

  for (const line of lines) {
    lineNum++;
    try {
      const obj = JSON.parse(line);
      items.push(obj);

      for (const field of requiredFields) {
        if (obj[field] === undefined || obj[field] === null) {
          log('WARN', path.basename(filePath) + ':' + lineNum,
            'missing field "' + field + '"');
        }
      }

      if (obj.id) {
        if (ids.has(obj.id)) {
          log('WARN', path.basename(filePath) + ':' + lineNum,
            'duplicate ID: ' + obj.id);
        }
        ids.add(obj.id);
      }
    } catch (e) {
      log('ERROR', path.basename(filePath) + ':' + lineNum,
        'invalid JSON: ' + e.message);
    }
  }

  return items;
}

// Check JS items array for duplicates and inconsistencies
function checkItems(filePath, items) {
  if (!Array.isArray(items)) return;

  const fname = path.basename(filePath);
  const ids = new Set();
  const duplicates = [];

  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    if (!item || typeof item !== 'object') continue;

    const id = item.id || item._id;
    if (id) {
      if (ids.has(id)) {
        duplicates.push(id);
      }
      ids.add(id);
    }
  }

  if (duplicates.length > 0) {
    log('WARN', fname, duplicates.length + ' duplicate IDs: ' +
      duplicates.slice(0, 5).join(', ') +
      (duplicates.length > 5 ? '...' : ''));
  }
}

// Main
console.log('Chinese Master — Dataset Integrity Check');
console.log('Data directory: ' + DATA_DIR);
console.log('');

const allFiles = fs.readdirSync(DATA_DIR);
const jsFiles = allFiles.filter(f => f.endsWith('.js') && !f.startsWith('_'));
const jsonlFiles = allFiles.filter(f => f.endsWith('.jsonl'));
const REQUIRED_VOCAB_FIELDS = ['id', 'character', 'pinyin', 'meaning'];

// Track which data files DataLoader expects (from data-loader.js registry)
const dataLoaderPath = path.join(__dirname, '..', 'js', 'data-loader.js');
let expectedFiles = [];
if (fs.existsSync(dataLoaderPath)) {
  const dlCode = fs.readFileSync(dataLoaderPath, 'utf8');
  const matches = dlCode.match(/['"]data\/([^'"]+)['"]/g);
  if (matches) {
    expectedFiles = matches.map(m => m.replace(/['"]/g, '').replace('data/', ''));
  }
}

// Check JSONL files
let totalVocab = 0;
console.log('=== JSONL VOCABULARY FILES ===');
for (const f of jsonlFiles) {
  const fpath = path.join(DATA_DIR, f);
  const items = checkJsonl(fpath, REQUIRED_VOCAB_FIELDS);
  console.log('  ' + f + ': ' + items.length + ' entries');
  totalVocab += items.length;
}
console.log('  Total vocabulary entries: ' + totalVocab);
console.log('');

// Check JS data files
console.log('=== JS DATA FILES ===');
let totalItems = 0;
let parseErrors = 0;

for (const f of jsFiles) {
  const fpath = path.join(DATA_DIR, f);
  try {
    const items = evalDataFile(fpath);
    if (items && items._parseError) {
      log('ERROR', f, 'parse error: ' + items._parseError);
      parseErrors++;
      console.log('  ' + f + ': PARSE ERROR');
    } else if (Array.isArray(items)) {
      checkItems(fpath, items);
      console.log('  ' + f + ': ' + items.length + ' items');
      totalItems += items.length;
    } else if (items && typeof items === 'object') {
      // Check for nested arrays (common pattern: { lessons: [...], scenarios: [...] })
      let nestedCount = 0;
      for (const key of Object.keys(items)) {
        if (Array.isArray(items[key])) {
          nestedCount += items[key].length;
        }
      }
      console.log('  ' + f + ': object with ' + nestedCount + ' nested items');
      totalItems += nestedCount;
    } else {
      console.log('  ' + f + ': (no items array found)');
    }
  } catch (e) {
    log('ERROR', f, 'eval error: ' + e.message);
    parseErrors++;
    console.log('  ' + f + ': EVAL ERROR - ' + e.message);
  }
}

console.log('');
console.log('=== DATA LOADER REGISTRY CHECK ===');
for (const expected of expectedFiles) {
  const exists = fs.existsSync(path.join(DATA_DIR, expected));
  if (!exists) {
    log('ERROR', expected, 'referenced in data-loader.js but file does not exist');
    console.log('  MISSING: ' + expected);
  }
}

// Check orphaned files (exist on disk but no DataLoader entry)
const dataFilesOnDisk = new Set(allFiles.filter(f => f.endsWith('.js') || f.endsWith('.jsonl')));
for (const expected of expectedFiles) {
  dataFilesOnDisk.delete(expected);
}
// Don't flag JS files as orphaned — many are legacy globals loaded via <script> tags
const orphanedJsonl = [...dataFilesOnDisk].filter(f => f.endsWith('.jsonl'));
for (const f of orphanedJsonl) {
  log('WARN', f, 'JSONL file on disk but not in DataLoader registry — unreachable via JSONL loader');
  console.log('  ORPHANED JSONL: ' + f);
}

console.log('');
console.log('=== SUMMARY ===');
console.log('JS files checked: ' + jsFiles.length);
console.log('JSONL files checked: ' + jsonlFiles.length);
console.log('Total data items: ' + (totalItems + totalVocab));
console.log('Parse errors: ' + parseErrors);
console.log('Issues found: ' + ISSUES.length);

if (ISSUES.length > 0) {
  console.log('');
  console.log('=== ISSUES ===');
  for (const issue of ISSUES) {
    console.log('  [' + issue.level + '] ' + issue.file + ': ' + issue.msg);
  }
}

const hasErrors = ISSUES.some(i => i.level === 'ERROR');
process.exit(hasErrors || parseErrors > 0 ? 1 : 0);
