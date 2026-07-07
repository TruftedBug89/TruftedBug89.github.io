const CACHE_NAME = 'chinese-master-v2';
const LARGE_DATA_FILES = [
  'reading-mega', 'hsk-quadruple', 'reading-charmatch-extra',
  'reading-passage-extra', 'dialogues-mega', 'listening-comprehension-extra',
  'reading-sentence-extra', 'reading-radicals-extra', 'grammar-mega',
  'speaking-mega'
];

const PRECACHE_URLS = [
  '/',
  '/css/themes.css',
  '/css/modern-theme.css',
  '/css/styles.css',
  '/css/responsive.css',
  '/css/activity-ui.css',
  '/css/animations.css',
  '/css/components.css',
  '/css/components-learner.css',
  '/css/bottom-sheet.css',
  '/css/character-tooltip.css',
  '/css/consent-ui.css',
  '/css/mobile-shell.css',
  '/css/mobile-tabbar.css',
  '/css/offline-banner.css',
  '/css/pinyin-toggle.css',
  '/js/utils.js',
  '/js/storage.js',
  '/js/session.js',
  '/js/error-logger.js',
  '/js/analytics-engine.js',
  '/js/app.js',
  '/js/audio.js',
  '/js/animations.js',
  '/js/data-loader.js',
  '/js/daily-streak.js',
  '/js/level-tracker.js',
  '/js/load-progress.js',
  '/js/missions.js',
  '/js/mobile-shell.js',
  '/js/pinyin-toggle.js',
  '/js/progress.js',
  '/js/recurring-rewards.js',
  '/js/sm2.js',
  '/js/tone-practice.js',
  '/js/advanced-learning.js',
  '/js/register-sw.js',
  '/vendor/gsap.min.js',
  '/vendor/ScrollTrigger.min.js',
  '/legal/cookies.html',
  '/legal/privacy.html',
  '/legal/terms.html',
  '/manifest.json',
  '/robots.txt',
  '/structured-data.json'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return Promise.allSettled(
        PRECACHE_URLS.map(function(url) {
          return cache.add(url).catch(function(err) {
            console.warn('SW: failed to precache ' + url, err);
          });
        })
      );
    }).then(function() {
      return self.skipWaiting();
    })
  );
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(
        keys.filter(function(key) { return key !== CACHE_NAME; })
          .map(function(key) { return caches.delete(key); })
      );
    }).then(function() {
      return self.clients.claim();
    })
  );
});

function isLargeData(url) {
  return LARGE_DATA_FILES.some(function(f) { return url.indexOf(f) !== -1; });
}

self.addEventListener('fetch', function(event) {
  var url = new URL(event.request.url);

  if (event.request.method !== 'GET') return;

  if (url.pathname.indexOf('/data/') !== -1) {
    event.respondWith(
      caches.match(event.request).then(function(cached) {
        var fetched = fetch(event.request).then(function(response) {
          if (response && response.status === 200 && !isLargeData(url.pathname)) {
            var clone = response.clone();
            caches.open(CACHE_NAME).then(function(cache) {
              cache.put(event.request, clone);
            });
          }
          return response;
        });
        return cached || fetched;
      })
    );
    return;
  }

  event.respondWith(
    fetch(event.request).catch(function() {
      return caches.match(event.request);
    })
  );
});
