import { EventEmitter } from 'events';

globalThis.window = globalThis;
globalThis.document = {
  addEventListener() {},
  removeEventListener() {},
  createElement() { return { style: {}, classList: { add() {} }, appendChild() {}, setAttribute() {} }; },
  querySelector() { return null; },
  querySelectorAll() { return []; },
  getElementById() { return null; },
  body: { appendChild() {}, style: {} },
  documentElement: { scrollHeight: 1000, style: {} },
  head: { appendChild() {} }
};
Object.defineProperty(globalThis, 'navigator', {
  value: {
    userAgent: 'Mozilla/5.0 Test',
    language: 'en-US',
    maxTouchPoints: 0,
    onLine: true
  },
  writable: true,
  configurable: true
});
globalThis.localStorage = createLocalStorageMock();
globalThis.fetch = createFetchMock();
globalThis.Audio = class Audio {};
globalThis.Blob = class Blob {};
globalThis.URL = { createObjectURL() { return ''; }, revokeObjectURL() {} };
globalThis.addEventListener = () => {};
Object.defineProperty(globalThis, 'crypto', {
  value: { 
    getRandomValues: (arr) => { for (let i = 0; i < arr.length; i++) arr[i] = Math.floor(Math.random() * 256); },
    randomUUID: () => 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
  },
  writable: true,
  configurable: true
});
globalThis.Intl = { DateTimeFormat() { return { resolvedOptions() { return { timeZone: 'UTC' }; } }; } };
globalThis.setTimeout = (fn, ms) => { fn(); return 0; };
globalThis.clearInterval = () => {};
globalThis.setInterval = () => 0;
Object.defineProperty(globalThis, 'screen', {
  value: { width: 1920, height: 1080, colorDepth: 24 },
  writable: true,
  configurable: true
});
globalThis.speechSynthesis = { cancel() {}, getVoices() { return []; } };
globalThis.MutationObserver = class { observe() {} disconnect() {} };
globalThis.OfflineBanner = undefined;
globalThis.Utils = {
  storage: (() => { const s = {}; return { get(k, d) { return s.hasOwnProperty(k) ? s[k] : (d !== undefined ? d : null); }, set(k, v) { s[k] = v; } }; })(),
  generateId() { return 'test-' + Math.random().toString(36).slice(2); },
  escapeHtml(v) { return String(v || '').replace(/</g, '&lt;'); },
  escapeAttr(v) { return String(v || ''); },
  percentage(s, t) { return t > 0 ? Math.round((s / t) * 100) : 0; },
  random(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; },
  shuffle(arr) { const a = [...arr]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; },
  randomItems(arr, n) { return this.shuffle(arr).slice(0, n); },
  date: { today() { return new Date().toISOString().split('T')[0]; } },
  showToast() {},
  playSound() {},
  showConfetti() {}
};
globalThis.StorageManager = {
  _data: null,
  _dailyStats: {},
  _achievements: [],
  init() {},
  getUserData() {
    if (!this._data) this._data = JSON.parse(JSON.stringify(StorageManager.defaultUserData));
    return this._data;
  },
  setUserData(d) { this._data = d; },
  addXP(n) { const u = this.getUserData(); u.xp = (u.xp || 0) + n; u.totalXp = (u.totalXp || 0) + n; },
  getStatistics() {
    const u = this.getUserData();
    return {
      listeningCompleted: u.progress?.listening?.completed?.length || 0,
      readingCompleted: u.progress?.reading?.completed?.length || 0,
      grammarCompleted: u.progress?.grammar?.completed?.length || 0,
      speakingCompleted: u.progress?.speaking?.completed?.length || 0,
      totalWords: (u.progress?.vocabulary?.learned?.length || 0) + (u.progress?.vocabulary?.mastered?.length || 0),
      streak: u.streak || 0,
      totalXp: u.totalXp || 0,
      level: u.level || 1,
      perfectScores: u.perfectScores || 0,
      masteredWords: u.progress?.vocabulary?.mastered?.length || 0,
      comboMax: u.comboMax || 0
    };
  },
  getDailyStats(dateStr) {
    const key = dateStr || new Date().toISOString().split('T')[0];
    return this._dailyStats[key] || { xp: 0, listening: 0, reading: 0, vocabulary: 0 };
  },
  updateDailyStats(module, amount) {
    const key = new Date().toISOString().split('T')[0];
    if (!this._dailyStats[key]) this._dailyStats[key] = { xp: 0, listening: 0, reading: 0, vocabulary: 0 };
    this._dailyStats[key][module] = (this._dailyStats[key][module] || 0) + amount;
  },
  getLevelInfo() {
    const u = this.getUserData();
    return { level: u.level, xp: u.xp, totalXp: u.totalXp, title: 'Learner' };
  },
  addAchievement(id) { if (!this._achievements.includes(id)) this._achievements.push(id); },
  hasAchievement(id) { return this._achievements.includes(id); },
  addVocabularyWord(id, status) {
    const u = this.getUserData();
    if (status === 'learned') u.progress.vocabulary.learned.push(id);
    else if (status === 'mastered') u.progress.vocabulary.mastered.push(id);
    else u.progress.vocabulary.reviewing.push(id);
  },
  markExerciseCompleted(module, id, pct) {
    const u = this.getUserData();
    if (!u.progress[module].completed.includes(id)) u.progress[module].completed.push(id);
    u.progress[module].scores[id] = pct;
  },
  addActivity(module, desc, xp) {},
  defaultUserData: {
    name: 'Learner', level: 1, xp: 0, totalXp: 0, streak: 0, lastActiveDate: null,
    joinDate: new Date().toISOString(),
    settings: { dailyGoal: { listening: 5, reading: 3, vocabulary: 10 } },
    progress: {
      vocabulary: { learned: [], reviewing: [], mastered: [] },
      listening: { completed: [], scores: {} },
      reading: { completed: [], scores: {} },
      grammar: { completed: [], scores: {} },
      speaking: { completed: [], scores: {} }
    },
    dailyGoalsMet: 0, comboMax: 0, perfectScores: 0, masteredWords: 0
  }
};
globalThis.SessionManager = {
  getActiveSessionId() { return null; },
  getActiveSession() { return null; }
};
globalThis.RecurringRewards = {
  getMultiplier() { return 1; },
  getStats() { return { loginStreak: 0 }; }
};
globalThis.Missions = undefined;
globalThis.LevelTracker = undefined;
globalThis.AnalyticsEngine = undefined;
globalThis.SM2 = undefined;
globalThis.ProgressTracker = undefined;
globalThis.DataLoader = undefined;
globalThis.PinyinToggle = { init() {} };
globalThis.DailyStreak = { init() {} };
globalThis.TonePractice = {};
globalThis.AdvancedLearning = { init() {} };
globalThis.VocabularyLearner = { init() {} };
globalThis.WordOfTheDay = { init() {} };
globalThis.CharacterTooltip = { init() {} };
globalThis.InkAnimations = { floatXP() {} };
globalThis.ScrollTrigger = { refresh() {} };
globalThis.MobileShell = { init() {} };
globalThis.MobileTabBar = { setActive() {} };
globalThis.ErrorLogger = { install() {} };
globalThis.OfflineBanner = { init() {} };
globalThis.App = undefined;

function createLocalStorageMock() {
  const store = {};
  return {
    getItem(k) { return store[k] !== undefined ? store[k] : null; },
    setItem(k, v) { store[k] = String(v); },
    removeItem(k) { delete store[k]; },
    clear() { Object.keys(store).forEach(k => delete store[k]); },
    get length() { return Object.keys(store).length; },
    key(n) { return Object.keys(store)[n] || null; }
  };
}

import fs from 'fs';
import vm from 'vm';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = path.join(__dirname, '..', '..');

export function loadAppModule(name) {
  const fpath = path.join(ROOT_DIR, 'js', name);
  const code = fs.readFileSync(fpath, 'utf8');
  const script = new vm.Script(code, { filename: fpath });
  script.runInThisContext({ filename: fpath });
}

function createFetchMock() {
  return () => Promise.resolve({ ok: true, status: 200, text: () => Promise.resolve(''), json: () => Promise.resolve([]) });
}
