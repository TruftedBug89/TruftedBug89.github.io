## 2024-05-09 - Session Tokens in Local-Only Apps
**Vulnerability:** Session identifiers were stored in `document.cookie` in a strictly local, serverless application.
**Learning:** Even without a backend, browsers automatically attach cookies to network requests (e.g., when fetching static assets from GitHub Pages or third-party APIs). This inadvertently leaks session tokens. Standard cookie protections like `SameSite=Lax` and `Secure` are misapplied here, as they secure client-server communication, which doesn't exist in this architecture.
**Prevention:** For local-first applications where privacy from servers is paramount, strictly use `localStorage` for all sensitive identifiers, user data, and API keys to prevent automated browser transmission. Add explanatory comments to prevent future developers from mistakenly "securing" it back into a cookie.

## 2024-07-24 - Unsanitized innerHTML in Lazy-Loaded Component
**Vulnerability:** XSS via `innerHTML` in `NetworkStatus._showToast` where unsanitized `message` was injected.
**Learning:** Even though `Utils.escapeHtml` exists, using native DOM APIs like `document.createElement` and `textContent` is a more robust and resilient way to mitigate DOM-based XSS when injecting dynamic content in vanilla JavaScript components.
**Prevention:** Prefer using native DOM assignment methods (`textContent`) over `innerHTML` + string escaping (`Utils.escapeHtml`) for injecting user-provided or dynamic text into UI components.
