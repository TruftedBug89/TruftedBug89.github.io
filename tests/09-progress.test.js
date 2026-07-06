import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import './helpers/data-loader-mock.js';
import { loadAppModule } from './helpers/data-loader-mock.js';

loadAppModule('progress.js');

describe('09 — Progress Tracker', () => {
  it('xpRewards has all module categories', () => {
    const P = globalThis.ProgressTracker;
    assert.ok(P.xpRewards.listening);
    assert.ok(P.xpRewards.reading);
    assert.ok(P.xpRewards.vocabulary);
    assert.ok(P.xpRewards.grammar);
    assert.ok(P.xpRewards.speaking);
  });

  it('xpRewards values are non-negative numbers', () => {
    const P = globalThis.ProgressTracker;
    for (const mod of Object.values(P.xpRewards)) {
      for (const val of Object.values(mod)) {
        assert.ok(typeof val === 'number' && val >= 0);
      }
    }
  });

  it('levelTitles has 5 entries in order', () => {
    const titles = globalThis.ProgressTracker.levelTitles;
    assert.equal(titles.length, 5);
    assert.equal(titles[0].level, 1);
    assert.equal(titles[4].level, 20);
    assert.equal(titles[0].title, 'Beginner');
    assert.equal(titles[4].title, 'Master');
  });

  it('getLevelTitle returns correct title at each threshold', () => {
    const P = globalThis.ProgressTracker;
    assert.equal(P.getLevelTitle(0).title, 'Beginner');
    assert.equal(P.getLevelTitle(4).title, 'Beginner');
    assert.equal(P.getLevelTitle(5).title, 'Student');
    assert.equal(P.getLevelTitle(19).title, 'Expert');
    assert.equal(P.getLevelTitle(20).title, 'Master');
    assert.equal(P.getLevelTitle(99).title, 'Master');
  });

  it('achievements array has many entries (>= 40)', () => {
    const P = globalThis.ProgressTracker;
    assert.ok(Array.isArray(P.achievements));
    assert.ok(P.achievements.length >= 40, `only ${P.achievements.length} achievements`);
  });

  it('every achievement has id, title, description, icon, condition', () => {
    const P = globalThis.ProgressTracker;
    for (const a of P.achievements) {
      assert.ok(a.id, `achievement missing id`);
      assert.ok(a.title, `achievement ${a.id} missing title`);
      assert.ok(a.description, `achievement ${a.id} missing description`);
      assert.ok(a.icon, `achievement ${a.id} missing icon`);
      assert.ok(typeof a.condition === 'function', `achievement ${a.id} condition not a function`);
    }
  });

  it('no duplicate achievement IDs', () => {
    const ids = new Set();
    for (const a of globalThis.ProgressTracker.achievements) {
      assert.ok(!ids.has(a.id), `duplicate achievement ID: ${a.id}`);
      ids.add(a.id);
    }
  });

  it('achievement conditions work with stats', () => {
    const P = globalThis.ProgressTracker;
    const firstStep = P.achievements.find(a => a.id === 'first-lesson');
    assert.ok(firstStep);
    assert.equal(firstStep.condition({ totalCompleted: 0 }), false);
    assert.equal(firstStep.condition({ totalCompleted: 1 }), true);
  });

  it('trackExercise returns xp and percentage', () => {
    const P = globalThis.ProgressTracker;
    globalThis.StorageManager._data = JSON.parse(JSON.stringify(StorageManager.defaultUserData));
    globalThis.Missions = { recordActivity() {} };

    const result = P.trackExercise('listening', 'ex1', 8, 10);
    assert.ok(result.xp >= 0);
    assert.equal(result.percentage, 80);
    assert.equal(result.isPerfect, false);
  });

  it('trackExercise detects perfect score', () => {
    const P = globalThis.ProgressTracker;
    globalThis.StorageManager._data = JSON.parse(JSON.stringify(StorageManager.defaultUserData));
    globalThis.Missions = { recordActivity() {} };

    const result = P.trackExercise('reading', 'ex1', 10, 10);
    assert.equal(result.isPerfect, true);
    assert.equal(result.percentage, 100);
  });

  it('trackVocabulary returns xp for each status', () => {
    const P = globalThis.ProgressTracker;
    globalThis.StorageManager._data = JSON.parse(JSON.stringify(StorageManager.defaultUserData));

    const r1 = P.trackVocabulary('w1', 'learned');
    assert.equal(r1.xp, P.xpRewards.vocabulary.learned);

    const r2 = P.trackVocabulary('w2', 'mastered');
    assert.equal(r2.xp, P.xpRewards.vocabulary.mastered);
  });

  it('getAchievementProgress returns array with unlocked flag', () => {
    const P = globalThis.ProgressTracker;
    const progress = P.getAchievementProgress();
    assert.ok(Array.isArray(progress));
    assert.ok(progress.length > 0);
    for (const p of progress) {
      assert.ok(typeof p.unlocked === 'boolean');
    }
  });

  it('getDailyGoalProgress returns progress for 3 categories', () => {
    const userData = globalThis.StorageManager.getUserData();
    userData.settings.dailyGoal = { listening: 5, reading: 3, vocabulary: 10 };

    const prog = globalThis.ProgressTracker.getDailyGoalProgress();
    assert.ok(prog.listening);
    assert.ok(prog.reading);
    assert.ok(prog.vocabulary);
    assert.ok(typeof prog.overall === 'number');
  });

  it('getWeeklyStats returns 7 days', () => {
    const stats = globalThis.ProgressTracker.getWeeklyStats();
    assert.ok(Array.isArray(stats));
    assert.equal(stats.length, 7);
    for (const day of stats) {
      assert.ok(day.date);
      assert.ok(day.day);
    }
  });

  it('getLearningSummary returns all sections', () => {
    const summary = globalThis.ProgressTracker.getLearningSummary();
    assert.ok(summary.level);
    assert.ok(summary.stats);
    assert.ok(summary.achievements);
    assert.ok(summary.achievements.total > 0);
  });
});
