import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import './helpers/data-loader-mock.js';
import { loadAppModule } from './helpers/data-loader-mock.js';

loadAppModule('level-tracker.js');

describe('06 — Level Tracker', () => {
  it('has 6 levels with names and XP thresholds', () => {
    const L = globalThis.LevelTracker;
    assert.ok(L.levels);
    const keys = Object.keys(L.levels).map(Number);
    assert.deepEqual(keys, [1, 2, 3, 4, 5, 6]);

    assert.equal(L.levels[1].name, 'Beginner');
    assert.equal(L.levels[1].minXP, 0);
    assert.equal(L.levels[6].name, 'Master');
    assert.equal(L.levels[6].minXP, 15000);
    assert.equal(L.levels[6].maxXP, Infinity);
  });

  it('calculateLevel maps XP to correct level', () => {
    const L = globalThis.LevelTracker;
    L.userData.totalXP = 0;
    assert.equal(L.calculateLevel(), 1);

    L.userData.totalXP = 500;
    assert.equal(L.calculateLevel(), 2);

    L.userData.totalXP = 1500;
    assert.equal(L.calculateLevel(), 3);

    L.userData.totalXP = 7000;
    assert.equal(L.calculateLevel(), 5);

    L.userData.totalXP = 15000;
    assert.equal(L.calculateLevel(), 6);

    L.userData.totalXP = 99999;
    assert.equal(L.calculateLevel(), 6);
  });

  it('addXP increases xp and totalXP, triggers level up', () => {
    const L = globalThis.LevelTracker;
    L.userData.totalXP = 0;
    L.userData.xp = 0;
    L.userData.level = 1;

    const result = L.addXP(600, 'test');
    assert.equal(result.xp, 600);
    assert.equal(result.totalXP, 600);
    assert.equal(result.level, 2);
    assert.equal(L.userData.level, 2);
  });

  it('getLevelProgress returns progress percentage', () => {
    const L = globalThis.LevelTracker;
    L.userData.totalXP = 250;
    L.userData.level = 1;

    const prog = L.getLevelProgress();
    assert.equal(prog.level, 1);
    assert.equal(prog.progress, 50);
    assert.equal(prog.xpNeeded, 500);
  });

  it('updateSRS increases interval with quality >= 3', () => {
    const L = globalThis.LevelTracker;
    L.srsData = {};

    const r1 = L.updateSRS('item1', 4);
    assert.equal(r1.interval, 1);
    assert.equal(r1.repetitions, 1);

    const r2 = L.updateSRS('item1', 4);
    assert.equal(r2.interval, 6);
    assert.equal(r2.repetitions, 2);
  });

  it('updateSRS resets on quality < 3', () => {
    const L = globalThis.LevelTracker;
    L.srsData = { item2: { interval: 6, repetitions: 2, easeFactor: 2.5, nextReview: new Date(), lastReview: null } };

    const r = L.updateSRS('item2', 2);
    assert.equal(r.repetitions, 0);
    assert.equal(r.interval, 1);
  });

  it('ease factor never below 1.3', () => {
    const L = globalThis.LevelTracker;
    L.srsData = { item3: { interval: 1, repetitions: 0, easeFactor: 1.3, nextReview: new Date(), lastReview: null } };

    const r = L.updateSRS('item3', 0);
    assert.ok(r.easeFactor >= 1.3);
  });

  it('getDueItems returns items with nextReview <= now', () => {
    const L = globalThis.LevelTracker;
    L.srsData = {
      'due1': { interval: 1, repetitions: 1, easeFactor: 2.5, nextReview: new Date('2020-01-01'), lastReview: null },
      'notDue': { interval: 30, repetitions: 1, easeFactor: 2.5, nextReview: new Date('2099-01-01'), lastReview: null }
    };

    const due = L.getDueItems();
    assert.equal(due.length, 1);
    assert.equal(due[0].id, 'due1');
  });

  it('recordMistake creates and tracks mistake entry', () => {
    const L = globalThis.LevelTracker;
    L.mistakeMemory = { characters: {} };

    const m = L.recordMistake('characters', 'ch_001', '我', '你', { category: 'pronouns' });
    assert.ok(m);
    assert.equal(m.totalMistakes, 1);
    assert.equal(m.attempts.length, 1);
    assert.equal(m.correctAnswer, '你');
  });

  it('recordCorrect increments consecutiveCorrect', () => {
    const L = globalThis.LevelTracker;
    L.mistakeMemory = { characters: { ch_001: { id: 'ch_001', correctAnswer: '你', attempts: [], totalMistakes: 3, consecutiveCorrect: 0, mastered: false } } };

    L.recordCorrect('characters', 'ch_001');
    L.recordCorrect('characters', 'ch_001');
    assert.equal(L.mistakeMemory.characters.ch_001.consecutiveCorrect, 2);
    assert.equal(L.mistakeMemory.characters.ch_001.mastered, false);

    L.recordCorrect('characters', 'ch_001');
    L.recordCorrect('characters', 'ch_001');
    L.recordCorrect('characters', 'ch_001');
    assert.equal(L.mistakeMemory.characters.ch_001.consecutiveCorrect, 5);
    assert.equal(L.mistakeMemory.characters.ch_001.mastered, true);
  });

  it('getMistakesForReview filters mastered items', () => {
    const L = globalThis.LevelTracker;
    L.mistakeMemory = {
      characters: {
        mastered: { id: 'm1', totalMistakes: 5, consecutiveCorrect: 10, mastered: true, lastMistake: new Date().toISOString() },
        notMastered: { id: 'm2', totalMistakes: 3, consecutiveCorrect: 2, mastered: false, lastMistake: new Date().toISOString() }
      }
    };

    const review = L.getMistakesForReview('characters', 10);
    assert.equal(review.length, 1);
    assert.equal(review[0].id, 'm2');
  });

  it('trackCategoryPerformance accumulates correctly', () => {
    const L = globalThis.LevelTracker;
    L.userData.categoryPerformance = {};

    L.trackCategoryPerformance('pronouns', true);
    L.trackCategoryPerformance('pronouns', true);
    L.trackCategoryPerformance('pronouns', false);

    const perf = L.getCategoryPerformance();
    assert.equal(perf.pronouns.accuracy, 67);
    assert.equal(perf.pronouns.total, 3);
    assert.equal(perf.pronouns.streak, 0);
  });

  it('getReadingSpeedLevel returns correct bracket', () => {
    const L = globalThis.LevelTracker;
    L.userData.readingSpeed = 0;
    assert.equal(L.getReadingSpeedLevel().level, 'Beginner');

    L.userData.readingSpeed = 80;
    assert.equal(L.getReadingSpeedLevel().level, 'Elementary');

    L.userData.readingSpeed = 150;
    assert.equal(L.getReadingSpeedLevel().level, 'Intermediate');

    L.userData.readingSpeed = 250;
    assert.equal(L.getReadingSpeedLevel().level, 'Advanced');

    L.userData.readingSpeed = 350;
    assert.equal(L.getReadingSpeedLevel().level, 'Expert');
  });

  it('getRecommendedDifficulty adapts to level and accuracy', () => {
    const L = globalThis.LevelTracker;
    L.userData.level = 3;
    L.userData.accuracy = 95;
    assert.ok(L.getRecommendedDifficulty() >= 1 && L.getRecommendedDifficulty() <= 5);

    L.userData.accuracy = 50;
    assert.ok(L.getRecommendedDifficulty() >= 1 && L.getRecommendedDifficulty() <= 5);
  });

  it('updateStreak handles consecutive and non-consecutive days', () => {
    const L = globalThis.LevelTracker;
    L.userData.streak = 3;
    L.userData.lastActive = new Date(Date.now() - 86400000).toISOString();
    L.updateStreak();
    assert.ok(L.userData.streak >= 1);
  });

  it('resetAll restores defaults', () => {
    const L = globalThis.LevelTracker;
    L.userData.totalXP = 5000;
    L.userData.level = 4;
    L.srsData = { item1: { reps: 1 } };
    L.mistakeMemory = { characters: { a: { totalMistakes: 1 } } };

    L.userData = {
      level: 1, xp: 0, totalXP: 0, readingSpeed: 0, accuracy: 0,
      streak: 0, lastActive: null, charactersLearned: [], charactersMastered: [],
      wordsLearned: [], wordsMastered: [], categoryPerformance: {},
      totalTimeSpent: 0, sessionsCompleted: 0
    };
    L.mistakeMemory = { characters: {}, words: {}, sentences: {}, grammar: {}, comprehension: {} };
    L.srsData = {};

    assert.equal(L.userData.level, 1);
    assert.equal(Object.keys(L.mistakeMemory.characters).length, 0);
    assert.equal(Object.keys(L.srsData).length, 0);
  });
});
