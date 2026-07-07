import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import './helpers/data-loader-mock.js';
import { loadAppModule } from './helpers/data-loader-mock.js';

loadAppModule('missions.js');

describe('08 — Missions System', () => {
  it('templates array has at least 10 entries', () => {
    const M = globalThis.Missions;
    assert.ok(Array.isArray(M.templates));
    assert.ok(M.templates.length >= 10);
  });

  it('weeklyTemplates array has at least 5 entries', () => {
    const M = globalThis.Missions;
    assert.ok(Array.isArray(M.weeklyTemplates));
    assert.ok(M.weeklyTemplates.length >= 5);
  });

  it('every template has required fields', () => {
    const M = globalThis.Missions;
    const all = [...M.templates, ...M.weeklyTemplates];
    for (const t of all) {
      assert.ok(t.id, `template missing id`);
      assert.ok(t.type, `template ${t.id} missing type`);
      assert.ok(t.description, `template ${t.id} missing description`);
      assert.ok(typeof t.target === 'number', `template ${t.id} target not number`);
      assert.ok(typeof t.reward === 'number', `template ${t.id} reward not number`);
      assert.ok(t.reward > 0, `template ${t.id} reward <= 0`);
      assert.ok(t.target > 0, `template ${t.id} target <= 0`);
    }
  });

  it('no duplicate template IDs', () => {
    const M = globalThis.Missions;
    const ids = new Set();
    for (const t of M.templates) {
      assert.ok(!ids.has(t.id), `duplicate template ID: ${t.id}`);
      ids.add(t.id);
    }
    for (const t of M.weeklyTemplates) {
      assert.ok(!ids.has(t.id), `duplicate template ID: ${t.id}`);
      ids.add(t.id);
    }
  });

  it('_freshData returns correct initial shape', () => {
    const M = globalThis.Missions;
    M._storageKey = 'missions_test';
    M._data = null;

    const fresh = M._freshData();
    assert.ok(Array.isArray(fresh.dailies));
    assert.equal(fresh.dailies.length, 0);
    assert.equal(fresh.weekly, null);
    assert.equal(fresh.totalCompleted, 0);
    assert.equal(fresh.totalXpEarned, 0);
  });

  it('init loads and checks refresh', () => {
    const M = globalThis.Missions;
    M._data = null;
    M.init();

    assert.ok(M._data);
    assert.ok(Array.isArray(M._data.dailies));
    assert.ok(M._data.dailies.length >= 0);
    assert.ok(M._data.lastRefresh);
  });

  it('checkRefresh generates daily and weekly missions', () => {
    const M = globalThis.Missions;
    M.checkRefresh();

    assert.ok(M._data.dailies.length > 0, 'dailies not generated');
    assert.ok(M._data.weekly, 'weekly not generated');
    assert.equal(M._data.dailies.length, 3, 'should generate exactly 3 dailies');
  });

  it('each daily has correct shape', () => {
    const M = globalThis.Missions;
    for (const m of M._data.dailies) {
      assert.ok(m.id.startsWith('d-'));
      assert.ok(m.templateId);
      assert.ok(m.type);
      assert.ok(m.description);
      assert.ok(m.icon);
      assert.ok(typeof m.target === 'number');
      assert.ok(typeof m.progress === 'number');
      assert.ok(typeof m.reward === 'number');
      assert.equal(m.claimed, false);
    }
  });

  it('weekly has correct shape', () => {
    const M = globalThis.Missions;
    const w = M._data.weekly;
    assert.ok(w);
    assert.ok(w.id.startsWith('w-'));
    assert.ok(w.templateId);
    assert.ok(w.type);
    assert.ok(typeof w.target === 'number');
    assert.equal(w.claimed, false);
  });

  it('recordActivity increments matching mission progress', () => {
    const M = globalThis.Missions;
    M._data.dailies = [
      {
        id: 'd-test-' + M._today() + '-0',
        templateId: 'listen-3',
        type: 'listening',
        description: 'Complete 3 listening exercises',
        icon: '🎧',
        target: 3,
        progress: 0,
        reward: 30,
        claimed: false,
        date: M._today()
      }
    ];

    M.recordActivity('listening', { score: 8, total: 10, isPerfect: false, xp: 10 });
    assert.equal(M._data.dailies[0].progress, 1);
  });

  it('getDailies returns array', () => {
    const M = globalThis.Missions;
    const d = M.getDailies();
    assert.ok(Array.isArray(d));
    assert.ok(d.length > 0);
  });

  it('getWeekly returns object or null', () => {
    const M = globalThis.Missions;
    const w = M.getWeekly();
    assert.ok(w !== undefined);
  });

  it('getStats returns totals', () => {
    const M = globalThis.Missions;
    const s = M.getStats();
    assert.ok(typeof s.totalCompleted === 'number');
    assert.ok(typeof s.totalXpEarned === 'number');
  });
});
