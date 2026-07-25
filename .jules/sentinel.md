## 2024-05-09 - Session Tokens in Local-Only Apps
**Vulnerability:** Session identifiers were stored in `document.cookie` in a strictly local, serverless application.
**Learning:** Even without a backend, browsers automatically attach cookies to network requests (e.g., when fetching static assets from GitHub Pages or third-party APIs). This inadvertently leaks session tokens. Standard cookie protections like `SameSite=Lax` and `Secure` are misapplied here, as they secure client-server communication, which doesn't exist in this architecture.
**Prevention:** For local-first applications where privacy from servers is paramount, strictly use `localStorage` for all sensitive identifiers, user data, and API keys to prevent automated browser transmission. Add explanatory comments to prevent future developers from mistakenly "securing" it back into a cookie.

## 2024-05-28 - DOM XSS in Toast Notifications
**Vulnerability:** XSS (Cross-Site Scripting) vulnerability in `components/network-status.js`. The `_showToast` function injected dynamically created messages directly into the DOM using `this.toast.innerHTML`.
**Learning:** Even internal utility functions like toast notifications must treat all inputs as potentially untrusted or malicious, especially in a localized app where network responses or imported data may eventually feed into them.
**Prevention:** Always use `textContent` instead of `innerHTML` when displaying plain text to completely prevent DOM-based XSS, as it treats all input strictly as text, neutralizing any HTML tags.
