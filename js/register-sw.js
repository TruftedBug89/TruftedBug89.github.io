// Register the service worker (CSP-safe — external file so script-src 'self' is satisfied).
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js').catch(() => { /* ignore */ });
    });
}