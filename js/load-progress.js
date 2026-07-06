// ============================================
// Load Progress Tracker — updates the ink bar
// Runs synchronously (tiny, non-blocking)
// ============================================
(function () {
    var fill = document.getElementById('ink-loading-fill');
    var totalScripts = document.querySelectorAll('script[src]').length;
    var loaded = 0;
    var done = false;

    if (!fill || totalScripts === 0) return;

    function update() {
        if (done) return;
        var pct = Math.min(95, Math.round((loaded / Math.max(totalScripts, 1)) * 100));
        fill.style.width = pct + '%';
        if (pct >= 95 && !done) {
            done = true;
            fill.style.width = '98%';
        }
    }

    // Track resources as they load via PerformanceObserver
    if (typeof PerformanceObserver !== 'undefined') {
        try {
            var observer = new PerformanceObserver(function (list) {
                var entries = list.getEntries();
                for (var i = 0; i < entries.length; i++) {
                    if (/\.js(\?|$)/.test(entries[i].name)) loaded++;
                }
                update();
            });
            observer.observe({ type: 'resource', buffered: true });
        } catch (e) { /* fallback: CSS animation handles it */ }
    }

    // Fallback: count already-loaded scripts via document.scripts
    if (loaded === 0 && document.scripts) {
        loaded = document.scripts.length;
        update();
    }

    // Listen for app init signal — animate to 100% just before hide
    window.addEventListener('app-ready', function () {
        done = true;
        if (fill) fill.style.width = '100%';
    });

    // CSS animation fallback fills bar slowly
    if (fill) fill.classList.add('load-progress-active');

    // CSP-safe Google Fonts loading (no inline onload)
    var gf = document.getElementById('google-fonts');
    if (gf) {
        gf.addEventListener('load', function () { this.media = 'all'; });
        gf.addEventListener('error', function () { this.media = 'all'; });
    }
}());
