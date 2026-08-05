## 2026-08-05 - Missing CSP
**Vulnerability:** Missing Content Security Policy
**Learning:** The app's security model (e.g. SessionManager) explicitly relied on a strict CSP being in place, but the header/meta tag was missing from index.html.
**Prevention:** Added strict CSP meta tag to prevent unauthorized scripts and restrict connections.
