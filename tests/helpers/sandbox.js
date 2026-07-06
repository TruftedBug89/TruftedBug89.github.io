import fs from 'fs';
import vm from 'vm';

export function makeSandbox() {
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

export function evalDataFile(filePath) {
  const code = fs.readFileSync(filePath, 'utf8');
  const sandbox = makeSandbox();

  const wrapped = `
    (function() {
      ${code}
      if (typeof items !== 'undefined') {
        result = items;
      } else if (typeof window !== 'undefined') {
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
