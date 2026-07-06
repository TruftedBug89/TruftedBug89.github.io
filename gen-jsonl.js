// gen-jsonl.js — Extract vocabulary words from JS data files → JSONL
// Run: node gen-jsonl.js
var fs = require('fs');
var vm = require('vm');

function extractWords(filePath, varName) {
  var code = fs.readFileSync(filePath, 'utf-8');
  var modified = code.replace(/^const\s+(\w+)\s*=\s*/, 'var ' + varName + ' = ');
  var sandbox = { window: {} };
  vm.createContext(sandbox);
  vm.runInContext(modified, sandbox);
  var data = sandbox[varName] || sandbox.window[varName];
  if (!data || !data.words) {
    throw new Error('Missing ' + varName + '.words in ' + filePath);
  }
  return data.words;
}

function writeJSONL(words, outputPath) {
  var lines = words.map(function (w) { return JSON.stringify(w); });
  fs.writeFileSync(outputPath, lines.join('\n') + '\n', 'utf-8');
  console.log('Wrote ' + words.length + ' entries to ' + outputPath);
}

var conversions = [
  { file: 'data/hsk1.js',       varName: 'HSK1',           out: 'data/vocabulary-hsk1.jsonl' },
  { file: 'data/hsk2.js',       varName: 'HSK2',           out: 'data/vocabulary-hsk2.jsonl' },
  { file: 'data/hsk3.js',       varName: 'HSK3',           out: 'data/vocabulary-hsk3.jsonl' },
  { file: 'data/hsk4-5.js',     varName: 'HSK4_5',         out: 'data/vocabulary-hsk4-5.jsonl' },
  { file: 'data/vocabulary.js', varName: 'VocabularyData', out: 'data/vocabulary-extended.jsonl' },
];

conversions.forEach(function (c) {
  try {
    console.log('Processing ' + c.file + ' ...');
    var words = extractWords(c.file, c.varName);
    writeJSONL(words, c.out);
  } catch (e) {
    console.error('FAILED ' + c.file + ': ' + e.message);
  }
});

console.log('Done.');
