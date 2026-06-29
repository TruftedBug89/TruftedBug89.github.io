// Chinese Master — Service Worker (offline-first)
const CACHE_VERSION = 'cm-v1';
const STATIC_ASSETS = [
    './',
    'index.html',
    'manifest.json',
    'favicon.svg',
    'css/styles.css',
    'css/themes.css',
    'css/components.css',
    'css/activity-ui.css',
    'css/modern-theme.css',
    'css/pinyin-toggle.css',
    'css/components-learner.css',
    'js/utils.js',
    'js/session.js',
    'js/storage.js',
    'js/audio.js',
    'js/progress.js',
    'js/advanced-learning.js',
    'js/level-tracker.js',
    'js/sm2.js',
    'js/pinyin-toggle.js',
    'js/daily-streak.js',
    'js/tone-practice.js',
    'js/app.js',
    'js/register-sw.js',
    'components/dashboard.js',
    'components/listening-module.js',
    'components/reading-module.js',
    'components/grammar-module.js',
    'components/speaking-module.js',
    'components/achievements.js',
    'components/analytics.js',
    'components/vocabulary-learner.js',
    'components/session-manager-ui.js'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_VERSION).then((cache) => cache.addAll(STATIC_ASSETS)).then(() => self.skipWaiting())
    );
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) =>
            Promise.all(keys.filter((k) => k !== CACHE_VERSION).map((k) => caches.delete(k)))
        ).then(() => self.clients.claim())
    );
});

// Cache-first for same-origin GET requests; falls back to network then cache.
self.addEventListener('fetch', (event) => {
    const req = event.request;
    if (req.method !== 'GET') return;
    const url = new URL(req.url);
    if (url.origin !== self.location.origin) return; // never intercept cross-origin

    event.respondWith(
        caches.match(req).then((cached) => {
            if (cached) return cached;
            return fetch(req).then((res) => {
                // Cache successful, basic responses for future offline use
                if (res && res.status === 200 && res.type === 'basic') {
                    const copy = res.clone();
                    caches.open(CACHE_VERSION).then((c) => c.put(req, copy));
                }
                return res;
            }).catch(() => caches.match('index.html'));
        })
    );
});