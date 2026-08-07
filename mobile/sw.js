/* ============================================
   ZHI Studio — Mobile service worker
   Scope: /mobile/ only. The desktop app's own
   service worker is untouched.
   ============================================ */
const VERSION = '1';
const CACHE = 'zhi-mobile-v' + VERSION;
const BASE = self.location.href.replace(/sw\.js.*$/, '');

// Files we never cache (huge data bundles the mobile app doesn't use)
const LARGE_DATA = [
  'reading-mega', 'hsk-quadruple', 'reading-charmatch-extra',
  'reading-passage-extra', 'dialogues-mega', 'listening-comprehension-extra',
  'reading-sentence-extra', 'reading-radicals-extra', 'grammar-mega',
  'speaking-mega', 'listening-mega', 'listening-quadruple',
  'listening-dialogue-extra', 'reading-passage-massive', 'cultural-extra'
];

const PRECACHE = [
  'index.html',
  'app.css',
  'app.js',
  'manifest.webmanifest',
  '../favicon.svg'
].map(function (p) { return new URL(p, BASE).href; });

function isLargeData(url) {
  return LARGE_DATA.some(function (f) { return url.indexOf(f) !== -1; });
}

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE).then(function (cache) {
      return Promise.allSettled(PRECACHE.map(function (url) {
        return cache.add(url).catch(function () {});
      }));
    }).then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(
        keys.filter(function (k) { return k.indexOf('zhi-mobile-v') === 0 && k !== CACHE; })
            .map(function (k) { return caches.delete(k); })
      );
    }).then(function () { return self.clients.claim(); })
  );
});

self.addEventListener('fetch', function (event) {
  var req = event.request;
  if (req.method !== 'GET') return;
  var url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  // Data files: network first, fall back to cache; cache the small ones for offline.
  if (url.pathname.indexOf('/data/') === 0) {
    event.respondWith(
      fetch(req).then(function (res) {
        if (res && res.status === 200 && !isLargeData(url.pathname)) {
          var clone = res.clone();
          caches.open(CACHE).then(function (cache) { cache.put(req, clone); });
        }
        return res;
      }).catch(function () {
        return caches.match(req).then(function (hit) { return hit || Response.error(); });
      })
    );
    return;
  }

  // App shell: cache first (fast start), refresh in background.
  event.respondWith(
    caches.match(req).then(function (hit) {
      var refresh = fetch(req).then(function (res) {
        if (res && res.status === 200) {
          var clone = res.clone();
          caches.open(CACHE).then(function (cache) { cache.put(req, clone); });
        }
        return res;
      }).catch(function () { return hit; });
      return hit || refresh;
    })
  );
});
