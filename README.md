# 中文大师 — Chinese Learning Tool

A free, self-contained Chinese learning app for HSK levels 1 through 5. Runs entirely in the browser — no backend, no accounts, no tracking. Just drop the files on any static host and start learning.

## Features

- **Vocabulary** — HSK 1–5 word lists with spaced-repetition flashcards (SM-2 algorithm), word browser, and search
- **Listening** — Dictation, comprehension, minimal pairs, dialogue practice, speed listening, and shadowing
- **Reading** — Character matching, sentence completion, passage reading, speed reading, radical learning, and context clues
- **Grammar** — Structured lessons with pattern explanations, examples, and practice exercises
- **Speaking** — Pronunciation drills, shadowing, and sentence reading with tone indicators
- **Smart Review** — Mistake tracking and adaptive review sessions based on your weak areas
- **Progress System** — XP, levels, achievements, daily goals, weekly stats, and activity log
- **Multi-learner Profiles** — Anonymous sessions stored in a cookie + localStorage. Switch between learners on a shared device. Export/import backups.
- **Offline PWA** — Works offline after first visit (service worker caches all assets)
- **Dark/light theme** — Toggleable, saved per session

## Quick start

Serve the directory with any static file server:

```bash
# Python
python3 -m http.server 8080

# Node
npx serve .

# Or drop the entire folder onto GitHub Pages, Netlify, Cloudflare Pages, or any CDN
```

Open `http://localhost:8080` (or your hosting URL). No build step, no `npm install`.

## Architecture

```
chineselearning/
├── index.html              # Entry point, CSP meta, PWA manifest link
├── manifest.json           # PWA manifest
├── sw.js                   # Service worker (cache-first, offline)
├── favicon.svg             # App icon
├── css/
│   ├── styles.css          # Base layout
│   ├── themes.css          # Dark/light theme variables
│   ├── components.css      # Shared UI components
│   ├── activity-ui.css     # Exercise card styles
│   ├── modern-theme.css    # Polish overrides
│   ├── pinyin-toggle.css   # Pinyin/translation toggle styles
│   └── components-learner.css  # Vocabulary learner + session picker styles
├── js/
│   ├── utils.js            # Escape utilities (XSS prevention), storage wrapper, helpers
│   ├── session.js          # Cookie+localStorage session manager, multi-profile, migration
│   ├── storage.js          # User-data persistence, XP/levels, daily stats, import sanitization
│   ├── audio.js            # Web Speech API wrapper (TTS for Chinese)
│   ├── progress.js         # XP rewards, achievements, daily goals
│   ├── sm2.js              # SuperMemo SM-2 spaced repetition algorithm
│   ├── advanced-learning.js # Mistake tracking, adaptive difficulty, SRS scheduling
│   ├── level-tracker.js    # Reading levels, mistake memory, category performance
│   ├── pinyin-toggle.js    # Global pinyin/translation show/hide
│   ├── daily-streak.js     # Streak tracking and calendar
│   ├── tone-practice.js    # Tone identification drills
│   ├── app.js              # Navigation, modal, global error handlers, init
│   └── register-sw.js      # Service worker registration
├── components/
│   ├── dashboard.js        # Home screen: stats, daily goal, activity, analytics, smart review
│   ├── listening-module.js # Listening exercise engine (6 types)
│   ├── reading-module.js   # Reading exercise engine (6 types)
│   ├── grammar-module.js   # Grammar lessons and practice
│   ├── speaking-module.js  # Pronunciation and shadowing
│   ├── vocabulary-learner.js # Flashcard review with SM-2
│   ├── achievements.js     # Achievement grid renderer
│   ├── analytics.js        # Performance charts and recommendations
│   └── session-manager-ui.js # Learner profile picker modal
└── data/
    ├── vocabulary.js       # Core vocabulary data
    ├── vocabulary-extended.js
    ├── vocabulary-mega.js
    ├── mega-vocabulary.js
    ├── hsk1.js .. hsk4-massive.js  # HSK-aligned word lists
    ├── hsk-reading-massive.js
    ├── reading.js, reading-examples.js, advanced-reading.js
    ├── mega-reading.js, reading-massive-extra.js
    ├── listening.js, listening-extended.js
    ├── grammar.js, dialogues.js, cultural.js
    └── real-world-phrases.js, topic-daily.js, topic-food.js, topic-travel.js
```

## Session system

On first visit, a UUID session ID is generated and stored in:
- A `SameSite=Lax; Secure; Path=/` cookie (`cm_sid`)
- `localStorage` (mirror, survives cookie clears)

All progress data is namespaced by session ID in localStorage, enabling multiple anonymous learners per browser. The **Switch learner** button in the nav footer opens the profile picker.

No server is required — this is a client-side system. The cookie provides a stable identity across browser restarts; the localStorage mirror provides resilience if cookies are cleared. CSP with `script-src 'self'` prevents XSS from reading the session ID.

Export your session (JSON backup) from the profile picker. Import it by calling `SessionManager.importIntoActiveSession(blob)` from the console, or wire up a file-upload UI.

## Security

- **Strict CSP** in `<meta>` tag: `script-src 'self'` (no inline scripts, no eval), `object-src 'none'`, `frame-ancestors 'none'`, `base-uri 'self'`
- **XSS hardening**: all 40+ innerHTML sinks pass through `Utils.escapeHtml()` / `Utils.escapeAttr()`. Imported JSON is schema-validated before storage. Inline `onclick` handlers replaced with `addEventListener`.
- **No secrets**: zero API keys, tokens, or credentials in any file
- **No telemetry**: zero analytics, tracking pixels, or outbound network requests (except Google Fonts)
- **localStorage protection**: quota-exceeded recovery (auto-prunes old daily stats, surfaces a toast), 90-day rolling window on `dailyStats`

### CSP rationale

`script-src 'self'` is the critical line — it prevents reflected/stored XSS by blocking all inline scripts and `eval`. `style-src 'self' 'unsafe-inline'` allows the app's dynamically generated inline style attributes (progress bars, score circles). Inline styles cannot execute JavaScript, and external resource loads are restricted by `img-src 'self' data:`, `font-src 'self' https://fonts.gstatic.com`, and `connect-src 'self'`.

## Deployment

**Static host:** Copy the entire directory. No build step, no server-side logic. Works on GitHub Pages, Netlify, Cloudflare Pages, nginx, S3+CloudFront, etc.

**HTTPS required** for the service worker and `Secure` cookie flag. The app degrades gracefully on `http://localhost` during development.

**Cache busting:** If you modify files, increment the `CACHE_VERSION` constant in `sw.js` so the service worker picks up changes.

## Development

All files are plain JS/CSS/HTML — no framework, no bundler. Edit files and refresh.

```bash
# Syntax-check all JS files
for f in js/*.js components/*.js sw.js; do node --check "$f" || break; done

# Serve locally
python3 -m http.server 8080
```

To add new vocabulary: edit the `data/*.js` files. Each follows a consistent `{ id, character, pinyin, meaning, ... }` schema. See `data/hsk1.js` for the pattern.

## License

MIT — use freely for personal, classroom, or commercial purposes.

