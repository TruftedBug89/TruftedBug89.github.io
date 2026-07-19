import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import './helpers/data-loader-mock.js';
import { loadAppModule } from './helpers/data-loader-mock.js';

loadAppModule('sm2.js');

describe('05 — SM-2 Spaced Repetition', () => {
  globalThis.Utils = {
    ...globalThis.Utils,
    generateId() { return 'test-' + Math.random().toString(36).slice(2); }
  };

  it('exposes QUALITY constants (0-5)', () => {
    const S = globalThis.SM2;
    assert.equal(S.QUALITY.BLACKOUT, 0);
    assert.equal(S.QUALITY.PERFECT, 5);
    assert.equal(S.QUALITY.CORRECT_HARD, 3);
  });

  it('createCard returns card with all fields', () => {
    const card = globalThis.SM2.createCard('t1', '我', 'me');
    assert.equal(card.id, 't1');
    assert.equal(card.front, '我');
    assert.equal(card.back, 'me');
    assert.equal(card.efactor, 2.5);
    assert.equal(card.interval, 0);
    assert.equal(card.repetitions, 0);
    assert.equal(card.lapses, 0);
    assert.ok(card.nextReview);
    assert.ok(card.created);
  });

  it('processReview: quality < 3 resets interval to 1', () => {
    const card = globalThis.SM2.createCard('t1', '我', 'me');
    card.repetitions = 3;
    card.interval = 10;
    card.efactor = 2.5;

    const result = globalThis.SM2.processReview(card, 1);
    assert.equal(result.interval, 1);
    assert.equal(result.repetitions, 0);
    assert.equal(result.lapses, 1);
  });

  it('processReview: quality >= 3 increases repetitions', () => {
    const card = globalThis.SM2.createCard('t1', '我', 'me');
    const r1 = globalThis.SM2.processReview(card, 4);
    assert.equal(r1.interval, 1);
    assert.equal(r1.repetitions, 1);

    const r2 = globalThis.SM2.processReview(r1, 4);
    assert.equal(r2.interval, 6);
    assert.equal(r2.repetitions, 2);

    const r3 = globalThis.SM2.processReview(r2, 4);
    assert.ok(r3.interval > 6, `interval should be >6, got ${r3.interval}`);
    assert.equal(r3.repetitions, 3);
  });

  it('E-Factor never goes below 1.3', () => {
    const card = globalThis.SM2.createCard('t1', '我', 'me');
    card.efactor = 1.3;

    const result = globalThis.SM2.processReview(card, 0);
    assert.ok(result.efactor >= 1.3);
  });

  it('E-Factor adjusts with quality', () => {
    const card = globalThis.SM2.createCard('t1', '我', 'me');
    card.efactor = 2.5;

    const rGood = globalThis.SM2.processReview(card, 5);
    assert.ok(rGood.efactor > 2.5, `EF should increase for q=5, got ${rGood.efactor}`);

    const rBad = globalThis.SM2.processReview(card, 2);
    assert.ok(rBad.efactor < 2.5, `EF should decrease for q=2, got ${rBad.efactor}`);
  });

  it('getDueCards returns only cards with nextReview <= now', () => {
    const past = new Date();
    past.setDate(past.getDate() - 1);
    const future = new Date();
    future.setDate(future.getDate() + 30);

    const cards = [
      { ...globalThis.SM2.createCard('a1', 'a', 'a'), nextReview: past.toISOString() },
      { ...globalThis.SM2.createCard('a2', 'b', 'b'), nextReview: future.toISOString() }
    ];

    const due = globalThis.SM2.getDueCards(cards);
    assert.equal(due.length, 1);
    assert.equal(due[0].id, 'a1');
  });

  it('getNewCards returns cards with repetitions === 0', () => {
    const cards = [
      { ...globalThis.SM2.createCard('a1', 'a', 'a'), repetitions: 0 },
      { ...globalThis.SM2.createCard('a2', 'b', 'b'), repetitions: 3 }
    ];

    const news = globalThis.SM2.getNewCards(cards);
    assert.equal(news.length, 1);
    assert.equal(news[0].id, 'a1');
  });

  it('getStats returns correct categories', () => {
    const now = new Date();
    const cards = [
      { ...globalThis.SM2.createCard('a1', 'a', 'a'), repetitions: 0, nextReview: now.toISOString() },
      { ...globalThis.SM2.createCard('a2', 'b', 'b'), repetitions: 1, interval: 1, nextReview: now.toISOString() },
      { ...globalThis.SM2.createCard('a3', 'c', 'c'), repetitions: 2, interval: 21, nextReview: new Date(now.getTime() + 86400000).toISOString() }
    ];

    const stats = globalThis.SM2.getStats(cards);
    assert.equal(stats.total, 3);
    assert.equal(stats.new, 1);
    assert.equal(stats.learning, 1);
    assert.equal(stats.mastered, 1);
    assert.equal(stats.dueToday, 2);
  });

  it('getOptimalStudyTime returns minutes estimate', () => {
    const cards = [];
    for (let i = 0; i < 12; i++) {
      cards.push(globalThis.SM2.createCard(`c${i}`, `${i}`, `${i}`));
    }
    const minutes = globalThis.SM2.getOptimalStudyTime(cards);
    assert.equal(minutes, 2);
  });

  it('predictReviews returns correct day count', () => {
    const cards = [];
    const days = globalThis.SM2.predictReviews(cards, 30);
    assert.equal(days.length, 30);
  });

  it('addCards skips duplicate IDs', () => {
    const existing = [globalThis.SM2.createCard('a1', 'a', 'a')];
    globalThis.SM2.saveCards('test-deck', existing);

    const newCards = [globalThis.SM2.createCard('a1', 'a', 'a'), globalThis.SM2.createCard('a2', 'b', 'b')];
    const added = globalThis.SM2.addCards('test-deck', newCards);
    assert.equal(added, 1);

    const loaded = globalThis.SM2.loadCards('test-deck');
    assert.equal(loaded.length, 2);
  });

  it('shuffleArray preserves count', () => {
    const arr = [1, 2, 3, 4, 5];
    const shuffled = globalThis.SM2.shuffleArray(arr);
    assert.equal(shuffled.length, arr.length);
    assert.deepEqual(shuffled.sort(), arr.sort());
  });

  it('importDeck sanitizes bad data', () => {
    const result = globalThis.SM2.importDeck('import-test', JSON.stringify([
      { id: 'i1', front: { character: '好', pinyin: 'hǎo' }, back: { meaning: 'good' } },
      'not an object',
      null,
      { id: 'i2', front: { character: 'a'.repeat(300), pinyin: '' }, back: { meaning: '' }, efactor: 0.5 }
    ]));
    assert.equal(result, 2);
    const loaded = globalThis.SM2.loadCards('import-test');
    assert.equal(loaded.length, 2);
    const clamped = loaded.find(c => c.id === 'i2');
    assert.ok(clamped, 'imported card i2 not found');
    assert.equal(clamped.efactor, 1.3);
  });

  it('processReview: applies 1.2x reward multiplier on delayed correct answers', () => {
    const card = globalThis.SM2.createCard('t1', '我', 'me');
    card.interval = 5;
    card.repetitions = 2;
    card.efactor = 2.5;
    
    const tenDaysAgo = new Date();
    tenDaysAgo.setDate(tenDaysAgo.getDate() - 10);
    card.lastReview = tenDaysAgo.toISOString();

    const result = globalThis.SM2.processReview(card, 4);
    const expected = Math.round(10 * result.efactor * 1.2);
    assert.equal(result.interval, expected);
  });

  it('processReview: respects Speed Prep profile scaling (0.5x)', () => {
    const card = globalThis.SM2.createCard('t1', '我', 'me');
    card.interval = 6;
    card.repetitions = 2;
    card.efactor = 2.5;
    
    const data = globalThis.StorageManager.getUserData();
    data.settings = {
      ...data.settings,
      studyProfile: 'speed'
    };
    globalThis.StorageManager.setUserData(data);

    try {
      const result = globalThis.SM2.processReview(card, 4);
      const expectedBase = Math.round(6 * result.efactor);
      const expectedScaled = Math.max(1, Math.round(expectedBase * 0.5));
      assert.equal(result.interval, expectedScaled);
    } finally {
      data.settings.studyProfile = 'standard';
      globalThis.StorageManager.setUserData(data);
    }
  });

  it('processReview: respects Deep Retention profile scaling (1.5x)', () => {
    const card = globalThis.SM2.createCard('t1', '我', 'me');
    card.interval = 6;
    card.repetitions = 2;
    card.efactor = 2.5;
    
    const data = globalThis.StorageManager.getUserData();
    data.settings = {
      ...data.settings,
      studyProfile: 'retention'
    };
    globalThis.StorageManager.setUserData(data);

    try {
      const result = globalThis.SM2.processReview(card, 4);
      const expectedBase = Math.round(6 * result.efactor);
      const expectedScaled = Math.round(expectedBase * 1.5);
      assert.equal(result.interval, expectedScaled);
    } finally {
      data.settings.studyProfile = 'standard';
      globalThis.StorageManager.setUserData(data);
    }
  });

  it('processReview: initial review correctly calculates next interval', () => {
    const card = globalThis.SM2.createCard('t1', '我', 'me');
    // Sanity check initial values
    assert.equal(card.repetitions, 0);
    const result = globalThis.SM2.processReview(card, 4);
    assert.equal(result.interval, 1);
    assert.equal(result.repetitions, 1);
  });

  it('processReview: consecutive successful recalls exponentially increase interval', () => {
    const card = globalThis.SM2.createCard('t1', '我', 'me');
    card.interval = 1;
    card.repetitions = 1;
    card.efactor = 2.5;

    const r1 = globalThis.SM2.processReview(card, 4);
    assert.equal(r1.interval, 6);
    assert.equal(r1.repetitions, 2);

    const r2 = globalThis.SM2.processReview(r1, 4);
    assert.equal(r2.interval, Math.round(6 * r2.efactor));
    assert.equal(r2.repetitions, 3);
  });

  it('processReview: forgetting a card (lapse) resets interval to 1 and increases lapse count', () => {
    const card = globalThis.SM2.createCard('t1', '我', 'me');
    card.interval = 30;
    card.repetitions = 5;
    card.lapses = 2;

    const result = globalThis.SM2.processReview(card, 2);
    assert.equal(result.interval, 1);
    assert.equal(result.repetitions, 0);
    assert.equal(result.lapses, 3);
  });

  it('processReview: efactor bounds correctly clamps to 1.3 even when recalculating', () => {
    const card = globalThis.SM2.createCard('t1', '我', 'me');
    card.efactor = 1.3;
    // quality < 3 decreases efactor
    const result = globalThis.SM2.processReview(card, 1);
    assert.equal(result.efactor, 1.3);
  });

  it('processReview: interval caps verify scaling logic Math.max(1, Math.round(newInterval * profileMultiplier))', () => {
    const card = globalThis.SM2.createCard('t1', '我', 'me');
    card.interval = 1;
    card.repetitions = 2; // will trigger interval * newEfactor
    card.efactor = 1.3;

    // newEfactor with quality 3 will decrease slightly but bounded at 1.3
    // base newInterval will be round(1 * 1.3) = 1

    const data = globalThis.StorageManager.getUserData();
    data.settings = {
      ...data.settings,
      studyProfile: 'speed'
    };
    globalThis.StorageManager.setUserData(data);

    try {
      const result = globalThis.SM2.processReview(card, 3);
      assert.equal(result.interval, 1);
    } finally {
      data.settings.studyProfile = 'standard';
      globalThis.StorageManager.setUserData(data);
    }
  });

  it('processReview: handles edge cases and malformed quality gracefully', () => {
    const card = globalThis.SM2.createCard('t1', '我', 'me');
    card.efactor = 1.5;

    // Negative quality (treated as failure, resets interval, decreases efactor by a lot)
    const resultNeg = globalThis.SM2.processReview(card, -1);
    assert.equal(resultNeg.interval, 1);
    assert.equal(resultNeg.repetitions, 0);
    // efactor decreases by (0.1 - (5 - (-1)) * (0.08 + (5 - (-1)) * 0.02))
    // = 0.1 - 6 * (0.08 + 0.12) = 0.1 - 6 * 0.2 = 0.1 - 1.2 = -1.1. Clamped to 1.3.
    assert.equal(resultNeg.efactor, 1.3);

    // Quality > 5 (treated as passed, but math for efactor uses >5)
    // 6: 0.1 - (5-6)*(0.08 + (5-6)*0.02) = 0.1 - (-1)*(0.08 - 0.02) = 0.1 - (-0.06) = 0.16
    card.efactor = 2.5;
    const resultOver = globalThis.SM2.processReview(card, 6);
    assert.equal(resultOver.interval, 1);
    assert.equal(resultOver.repetitions, 1);
    assert.equal(resultOver.efactor.toFixed(2), "2.66"); // 2.5 + 0.16 = 2.66

    // NaN quality
    const resultNaN = globalThis.SM2.processReview(card, NaN);
    // quality < 3 is false since NaN < 3 is false, so it falls into else block
    // newEfactor = 2.5 + (0.1 - (5-NaN)*(0.08 + (5-NaN)*0.02)) = NaN
    // NaN < 1.3 is false.
    // So newEfactor is NaN.
    // interval falls into repetitions === 1 -> newInterval = 1
    // The test just checks that it doesn't crash and returns the object.
    assert.ok(resultNaN.nextReview);
  });

  it('processReview: handles missing card properties (throws due to NaN)', () => {
    const card = { id: 'test' }; // Missing everything
    assert.throws(() => globalThis.SM2.processReview(card, 4), RangeError);
  });

  it('shuffleArray preserves count and is deterministic given random seed', () => {
    const arr = [1, 2, 3, 4, 5];
    const originalRandom = Math.random;

    // Deterministic random
    let seed = 0.1;
    Math.random = () => {
      seed += 0.1;
      return seed % 1;
    };

    const shuffled1 = globalThis.SM2.shuffleArray([...arr]);

    seed = 0.1;
    const shuffled2 = globalThis.SM2.shuffleArray([...arr]);

    assert.deepEqual(shuffled1, shuffled2);

    Math.random = originalRandom;
  });
});
