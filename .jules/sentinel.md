## 2024-05-09 - Session Tokens in Local-Only Apps
**Vulnerability:** Session identifiers were stored in `document.cookie` in a strictly local, serverless application.
**Learning:** Even without a backend, browsers automatically attach cookies to network requests (e.g., when fetching static assets from GitHub Pages or third-party APIs). This inadvertently leaks session tokens. Standard cookie protections like `SameSite=Lax` and `Secure` are misapplied here, as they secure client-server communication, which doesn't exist in this architecture.
**Prevention:** For local-first applications where privacy from servers is paramount, strictly use `localStorage` for all sensitive identifiers, user data, and API keys to prevent automated browser transmission. Add explanatory comments to prevent future developers from mistakenly "securing" it back into a cookie.

## 2024-05-28 - DOM XSS in Toast Notifications
**Vulnerability:** XSS (Cross-Site Scripting) vulnerability in `components/network-status.js`. The `_showToast` function injected dynamically created messages directly into the DOM using `this.toast.innerHTML`.
**Learning:** Even internal utility functions like toast notifications must treat all inputs as potentially untrusted or malicious, especially in a localized app where network responses or imported data may eventually feed into them.
**Prevention:** Always use `textContent` instead of `innerHTML` when displaying plain text to completely prevent DOM-based XSS, as it treats all input strictly as text, neutralizing any HTML tags.

## 2026-08-05 - DOM-based XSS in components/bottom-sheet.js
**Vulnerability:** XSS vulnerability in `components/bottom-sheet.js`. When constructing the bottom sheet, dynamic properties like `r.label`, `r.action`, `title`, and `subtitle` were appended directly to `innerHTML` without being escaped.
**Learning:** Even internal UI components passing configuration objects can be vectors for DOM-based XSS if the configuration originates from potentially untrusted data or user input downstream, and those properties aren't sanitized before being injected into the DOM.
**Prevention:** Always sanitize dynamic strings using `Utils.escapeHtml()` and `Utils.escapeAttr()` before interpolating them into HTML strings that are assigned to `innerHTML`.
