# Chinese Master

> Free, open-source Chinese language learning application. Everything runs locally in your browser — no account, no server, no tracking.

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

## Features

**HSK 1-5 Vocabulary** — Spaced repetition (SM-2 algorithm), flashcards, stroke order reference

**Listening** — Dictation, comprehension, speed listening, minimal pair drills, shadowing, dialogue practice

**Reading** — Character matching, sentence reconstruction, passage comprehension, radicals, speed reading

**Grammar** — Structured lessons with exercises across all HSK levels

**Speaking** — Pronunciation practice, tone drills, shadowing, sentence reading

**Cultural Notes** — Festivals, food, etiquette, business, history, social norms

**Real-World Phrases** — Practical sentences for travel, daily life, business

**Progress System** — 30 levels, XP, streaks, achievements, missions, combo tracking

**Multi-Session** — Create and switch between learning profiles

**Analytics Dashboard** — Learning velocity, mistake patterns, category performance (all local)

**PWA-Ready** — Offline support via service worker, installable on mobile/desktop

**Dark Theme** — Midnight Ocean design with coral, lavender, and teal accents

**Mobile-First** — Responsive layout with bottom tab bar on small screens

**Fully Local** — All data in localStorage. No external APIs. No accounts. No analytics trackers.

## Quick Start

Open `index.html` in any modern browser. No build step, no server needed.

For the best experience, serve with any static file server:

```bash
# Python
python -m http.server 8000

# Node.js
npx serve .

# Or just double-click index.html
```

## Development

Zero configuration. Edit any file and refresh.

```
├── css/           Stylesheets (~16 files)
├── js/            Core application logic (~20 files)
├── components/    UI components (~16 files)
├── data/          Learning content (~100 files)
├── vendor/        GSAP animation library
├── legal/         Privacy, terms, cookie policy
├── tests/         Pre-production test suite (node --test)
├── index.html     Entry point
├── manifest.json  PWA manifest
├── sw.js          Service worker
└── robots.txt
```

**Key architecture decisions:**
- No framework — vanilla JavaScript with global namespace pattern
- No build step — `<script>` tags in dependency order
- localStorage for all data persistence
- JSONL files for vocabulary (loaded via DataLoader)
- GSAP for animations (bundled in vendor/)

## Data Structure

**Vocabulary** — JSONL files (`data/vocabulary-hsk1.jsonl` through `hsk5.jsonl`):
```json
{"id":"h1_001","character":"我","pinyin":"wǒ","meaning":"I, me","category":"pronouns","hsk":1}
```

**Grammar** — JavaScript objects with lessons and exercises:
```js
{ id: "gx_001", title: "Basic Word Order", explanation: "...", examples: [...], exercises: [...] }
```

**Listening** — Various exercise types (dictation, comprehension, dialogue, speed):
```js
{ id: "l101", chinese: "...", pinyin: "...", meaning: "...", category: "Greetings" }
```

**Reading** — Character match, sentence reconstruction, passage comprehension, radicals.

Run `cd tests && node --test` for dataset validation and pre-production checks.

## Tech Stack

- **Vanilla JavaScript** (ES6+)
- **GSAP 3** — Animation library
- **CSS Custom Properties** — Theming
- **Service Worker** — Offline caching
- **Web Speech API** — Pronunciation audio
- **localStorage** — Data persistence

## Browser Support

Modern browsers: Chrome 80+, Firefox 80+, Safari 14+, Edge 80+

Speech synthesis requires browser support (all modern browsers).

## Legal

- [Privacy Policy](legal/privacy.html)
- [Terms of Use](legal/terms.html)
- [Cookie Policy](legal/cookies.html)

All data stays on your device. No personal information is collected.

## License

MIT — see [LICENSE](LICENSE) file.

Built with  for everyone learning Chinese.
