class MockElement {
  constructor(tag) {
    this.tag = tag;
    this.style = {};
    this.classList = new MockClassList();
    this.dataset = {};
    this.children = [];
    this.childNodes = [];
    this.attributes = {};
    this.innerHTML = '';
    this.textContent = '';
    this.id = '';
    this.href = '';
    this.src = '';
    this._events = {};
  }
  setAttribute(k, v) { this.attributes[k] = v; this[k] = v; }
  getAttribute(k) { return this.attributes[k]; }
  addEventListener(ev, fn) { (this._events[ev] = this._events[ev] || []).push(fn); }
  removeEventListener() {}
  appendChild(c) { this.children.push(c); this.childNodes.push(c); return c; }
  querySelector(sel) { return this.children[0] || null; }
  querySelectorAll(sel) { return this.children; }
  getBoundingClientRect() { return { top: 0, left: 0, width: 800, height: 600 }; }
  focus() {}
  click() { if (this._events.click) this._events.click.forEach(fn => fn()); }
}

class MockClassList {
  constructor() { this._list = []; }
  add(...c) { c.forEach(x => { if (!this._list.includes(x)) this._list.push(x); }); }
  remove(...c) { this._list = this._list.filter(x => !c.includes(x)); }
  contains(c) { return this._list.includes(c); }
  get length() { return this._list.length; }
  get value() { return this._list.join(' '); }
}

export function createDOM(basePath) {
  globalThis.document = {
    _elements: new Map(),
    _scripts: [],
    styleSheets: [],

    createElement(tag) {
      if (tag === 'link') return new MockElement('link');
      if (tag === 'a') {
        const a = new MockElement('a');
        a.style = { display: '' };
        a.click = function () {
          const url = this.href;
          if (this._events.click) this._events.click.forEach(fn => fn({ preventDefault() {} }));
        };
        return a;
      }
      return new MockElement(tag);
    },

    getElementById(id) {
      if (this._elements.has(id)) return this._elements.get(id);
      const el = new MockElement('div');
      el.id = id;
      this._elements.set(id, el);
      return el;
    },

    querySelector(sel) {
      if (sel.startsWith('#')) return this.getElementById(sel.slice(1));
      return new MockElement('div');
    },

    querySelectorAll(sel) {
      return Array.from(this._elements.values());
    },

    addEventListener(ev, fn) { (this._events = this._events || {})[ev] = fn; },
    removeEventListener() {},
    createTextNode(t) { return { textContent: t, nodeType: 3 }; },
    head: new MockElement('head'),
    body: new MockElement('body'),
    documentElement: new MockElement('html')
  };

  globalThis.window = globalThis;
  globalThis.navigator = {
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
    language: 'en-US',
    maxTouchPoints: 0,
    onLine: true
  };

  globalThis.screen = { width: 1920, height: 1080, colorDepth: 24 };
  globalThis.devicePixelRatio = 1;
  globalThis.innerWidth = 1920;
  globalThis.innerHeight = 1080;

  globalThis.localStorage = {
    _store: {},
    getItem(k) { return this._store[k] || null; },
    setItem(k, v) { this._store[k] = String(v); },
    removeItem(k) { delete this._store[k]; },
    get length() { return Object.keys(this._store).length; }
  };

  globalThis.Intl = { DateTimeFormat() { return { resolvedOptions() { return { timeZone: 'UTC' }; } }; } };
  globalThis.crypto = { randomUUID: () => 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx', getRandomValues: (a) => { for (let i = 0; i < a.length; i++) a[i] = 1; } };
  globalThis.Blob = class Blob {};
  globalThis.URL = { createObjectURL() {}, revokeObjectURL() {} };
  globalThis.Audio = class Audio { play() {} };
  globalThis.MutationObserver = class { observe() {} disconnect() {} };
  globalThis.speechSynthesis = { cancel() {}, getVoices() { return []; }, speak() {} };
  globalThis.matchMedia = () => ({ matches: false, addEventListener() {}, removeEventListener() {} });
  globalThis.scrollY = 0;
  globalThis.CustomEvent = class { constructor(type) { this.type = type; } };
  globalThis.console = { log() {}, warn() {}, error() {}, info() {} };
}
