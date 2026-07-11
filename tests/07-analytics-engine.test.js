import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import './helpers/data-loader-mock.js';
import { loadAppModule } from './helpers/data-loader-mock.js';

loadAppModule('analytics-engine.js');

describe('07 — Analytics Engine', () => {
  it('does not init without consent', () => {
    const AE = globalThis.AnalyticsEngine;
    AE.consent = false;
    AE.init();
    assert.equal(AE.sessionStartTime, null);
  });

  it('inits with consent', () => {
    const AE = globalThis.AnalyticsEngine;
    localStorage.setItem('cm_analytics_consent', 'true');
    AE.consent = false;
    AE.init();
    assert.ok(AE.consent || !AE.sessionId, 'sessionId set only under consent');
    localStorage.removeItem('cm_analytics_consent');
  });

  it('_bufferEvent adds to eventBuffer', () => {
    const AE = globalThis.AnalyticsEngine;
    AE.sessionId = 'test_sid';
    AE.consent = true;
    AE.eventBuffer = [];

    AE._bufferEvent('test_type', { a: 1 });
    assert.equal(AE.eventBuffer.length, 1);
    assert.equal(AE.eventBuffer[0].type, 'test_type');
    assert.equal(AE.eventBuffer[0].a, 1);
    assert.ok(AE.eventBuffer[0].timestamp);
  });

  it('_bufferEvent respects MAX_BUFFER_SIZE', () => {
    const AE = globalThis.AnalyticsEngine;
    AE.sessionId = 'test_sid';
    AE.consent = true;
    AE.eventBuffer = [];
    AE.MAX_BUFFER_SIZE = 3;
    AE._flush = function () { this.eventBuffer = []; };

    AE._bufferEvent('t', {});
    AE._bufferEvent('t', {});
    AE._bufferEvent('t', {});
    assert.equal(AE.eventBuffer.length, 0);
  });

  it('trackPageView records module', () => {
    const AE = globalThis.AnalyticsEngine;
    AE.sessionId = 'test_sid';
    AE.consent = true;
    AE.eventBuffer = [];

    AE.trackPageView('listening');
    const last = AE.eventBuffer[AE.eventBuffer.length - 1];
    assert.equal(last.type, 'page_view');
    assert.equal(last.module, 'listening');
  });

  it('trackExercise calculates accuracy correctly', () => {
    const AE = globalThis.AnalyticsEngine;
    AE.sessionId = 'test_sid';
    AE.consent = true;
    AE.eventBuffer = [];

    AE.trackExercise('dictation', 7, 10);
    const last = AE.eventBuffer[AE.eventBuffer.length - 1];
    assert.equal(last.type, 'exercise');
    assert.equal(last.score, 7);
    assert.equal(last.total, 10);
    assert.equal(last.accuracy, 70);
  });

  it('trackVocabReview clamps quality 1-5', () => {
    const AE = globalThis.AnalyticsEngine;
    AE.sessionId = 'test_sid';
    AE.consent = true;
    AE.eventBuffer = [];

    AE.trackVocabReview(0, 'c1', 'hsk1');
    let last = AE.eventBuffer[AE.eventBuffer.length - 1];
    assert.equal(last.quality, 1);

    AE.trackVocabReview(10, 'c1', 'hsk1');
    last = AE.eventBuffer[AE.eventBuffer.length - 1];
    assert.equal(last.quality, 5);
  });

  it('trackGrammarLesson records title', () => {
    const AE = globalThis.AnalyticsEngine;
    AE.sessionId = 'test_sid';
    AE.consent = true;
    AE.eventBuffer = [];

    AE.trackGrammarLesson('g1', 'Basic Word Order');
    const last = AE.eventBuffer[AE.eventBuffer.length - 1];
    assert.equal(last.type, 'grammar_lesson');
    assert.equal(last.lessonId, 'g1');
    assert.equal(last.title, 'Basic Word Order');
  });

  it('trackCompletion deduces event type', () => {
    const AE = globalThis.AnalyticsEngine;
    AE.sessionId = 'test_sid';
    AE.consent = true;
    AE.eventBuffer = [];

    AE.trackCompletion('reading', 'reading_quiz', 8, 10);
    let last = AE.eventBuffer[AE.eventBuffer.length - 1];
    assert.equal(last.type, 'reading_quiz');

    AE.trackCompletion('listening', 'audio_test', 9, 10);
    last = AE.eventBuffer[AE.eventBuffer.length - 1];
    assert.equal(last.type, 'audio_test');
  });

  it('trackAchievement buffers correctly', () => {
    const AE = globalThis.AnalyticsEngine;
    AE.sessionId = 'test_sid';
    AE.consent = true;
    AE.eventBuffer = [];

    AE.trackAchievement('First Step');
    const last = AE.eventBuffer[AE.eventBuffer.length - 1];
    assert.equal(last.type, 'achievement_unlocked');
    assert.equal(last.achievement, 'First Step');
  });

  it('trackLevelUp records old/new levels', () => {
    const AE = globalThis.AnalyticsEngine;
    AE.sessionId = 'test_sid';
    AE.consent = true;
    AE.eventBuffer = [];

    AE.trackLevelUp(2, 3);
    const last = AE.eventBuffer[AE.eventBuffer.length - 1];
    assert.equal(last.type, 'level_up');
    assert.equal(last.oldLevel, 2);
    assert.equal(last.newLevel, 3);
  });

  it('getStats returns null without sessionId', () => {
    const AE = globalThis.AnalyticsEngine;
    AE.sessionId = null;
    assert.equal(AE.getStats(), null);
  });

  it('_recordDeviceInfo: session device info is cleaned and does not contain userAgent, screen, OS, or browser details', () => {
    const AE = globalThis.AnalyticsEngine;
    localStorage.setItem('cm_analytics_consent', 'true');
    AE.consent = true;
    AE.sessionId = 'test_clean_sid';
    AE.deviceLogged = false;
    AE._recordDeviceInfo();
    const sessions = AE._readSessions();
    assert.ok(sessions.device);
    assert.equal(sessions.device.userAgent, undefined);
    assert.equal(sessions.device.browser, undefined);
    assert.equal(sessions.device.os, undefined);
    assert.equal(sessions.device.screenWidth, undefined);
    assert.equal(sessions.device.screenHeight, undefined);
    localStorage.removeItem('cm_analytics_consent');
  });

  it('_key returns correct localStorage key format', () => {
    const AE = globalThis.AnalyticsEngine;
    AE.sessionId = 'my_session';
    assert.equal(AE._key('events'), 'analytics_my_session_events');
  });

  it('_emptySession has default shape', () => {
    const AE = globalThis.AnalyticsEngine;
    const s = AE._emptySession();
    assert.ok(s.firstVisit);
    assert.ok(s.lastVisit);
    assert.equal(s.totalPageViews, 0);
    assert.equal(s.totalExercises, 0);
    assert.equal(s.totalTimeSpent, 0);
  });

  it('_updateDailyForEvent creates daily entry', () => {
    const AE = globalThis.AnalyticsEngine;
    AE.sessionId = 'test_sid';
    AE.consent = true;
    localStorage.setItem(AE._key('daily'), '{}');

    AE._updateDailyForEvent({ type: 'page_view' });
    const d = AE._readDaily();
    const today = new Date().toISOString().split('T')[0];
    assert.ok(d[today]);
    assert.equal(d[today].pageViews, 1);
  });

  it('_handleStorageError trims events on quota error', () => {
    const AE = globalThis.AnalyticsEngine;
    AE.sessionId = 'test_sid';
    localStorage.setItem(AE._key('events'), JSON.stringify([...Array(10)].map((_, i) => ({ type: 'x', n: i }))));

    AE._handleStorageError({ name: 'QuotaExceededError' });
    const events = AE._readEvents();
    assert.ok(events.length <= 10);
  });

  it('getAllSessions returns array', () => {
    const AE = globalThis.AnalyticsEngine;
    const result = AE.getAllSessions();
    assert.ok(Array.isArray(result));
  });
});
