import test from 'node:test';
import assert from 'node:assert';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const source = fs.readFileSync(path.join(__dirname, '../components/data-manager.js'), 'utf8');

// A simplistic way to evaluate the component in a pseudo-browser environment
let DataManager;
const fakeWindow = {};
const fakeModule = { exports: {} };

try {
    const fn = new Function('window', 'module', source + '\nreturn window.DataManager || module.exports;');
    DataManager = fn(fakeWindow, fakeModule);
} catch (e) {
    console.error("Failed to parse DataManager:", e);
}

test('DataManager - isValidBackup()', async (t) => {
    await t.test('rejects null and undefined', () => {
        assert.strictEqual(DataManager.isValidBackup(null), false);
        assert.strictEqual(DataManager.isValidBackup(undefined), false);
    });

    await t.test('rejects non-object types', () => {
        assert.strictEqual(DataManager.isValidBackup('string'), false);
        assert.strictEqual(DataManager.isValidBackup(123), false);
        assert.strictEqual(DataManager.isValidBackup(true), false);
    });

    await t.test('rejects objects missing format property', () => {
        assert.strictEqual(DataManager.isValidBackup({ data: {}, session: {} }), false);
        assert.strictEqual(DataManager.isValidBackup({ format: 'wrong-format', data: {}, session: {} }), false);
    });

    await t.test('rejects objects missing data or session properties', () => {
        assert.strictEqual(DataManager.isValidBackup({ format: 'chinese-master-session', session: {} }), false);
        assert.strictEqual(DataManager.isValidBackup({ format: 'chinese-master-session', data: {} }), false);
    });

    await t.test('accepts valid schema', () => {
        const validBackup = {
            format: 'chinese-master-session',
            data: { userData: { name: 'Test' } },
            session: { id: 's_123', name: 'Learner' }
        };
        assert.strictEqual(DataManager.isValidBackup(validBackup), true);
    });
});

test('DataManager - importData() isolated', async (t) => {
    // Override global window or SessionManager to test isolated behaviour
    global.SessionManager = undefined;
    global.Utils = { showToast: () => {} };
    global.App = { closeModal: () => {} };

    await t.test('returns false for malformed JSON string', () => {
        const result = DataManager.importData('not-a-json');
        assert.strictEqual(result, false);
    });

    await t.test('returns false for valid JSON but invalid schema', () => {
        const result = DataManager.importData(JSON.stringify({ invalid: 'schema' }));
        assert.strictEqual(result, false);
    });

    await t.test('returns parsed object for valid JSON schema when SessionManager is undefined', () => {
        const validBackup = {
            format: 'chinese-master-session',
            data: { userData: { name: 'Test' } },
            session: { id: 's_123', name: 'Learner' }
        };
        const result = DataManager.importData(JSON.stringify(validBackup));
        assert.deepStrictEqual(result, validBackup);
    });

    await t.test('calls SessionManager.importIntoActiveSession when SessionManager is present', () => {
        let importCalledWith = null;
        global.SessionManager = {
            importIntoActiveSession: (data) => {
                importCalledWith = data;
                return true;
            }
        };

        // Mock setTimeout and window.location.reload to prevent errors/reload during test
        const originalSetTimeout = global.setTimeout;
        global.setTimeout = (cb) => { };
        global.window = { location: { reload: () => {} } };

        const validBackup = {
            format: 'chinese-master-session',
            data: { userData: { name: 'Test' } },
            session: { id: 's_123', name: 'Learner' }
        };
        const result = DataManager.importData(JSON.stringify(validBackup));
        assert.strictEqual(result, true);
        assert.deepStrictEqual(importCalledWith, validBackup);

        global.setTimeout = originalSetTimeout;
        delete global.window;
    });

    // Cleanup globals
    delete global.SessionManager;
    delete global.Utils;
    delete global.App;
});
