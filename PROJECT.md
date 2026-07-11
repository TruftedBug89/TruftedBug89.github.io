# Project: Chinese Master Optimization & Upgrade

## Architecture
The application is a local-first, vanilla JavaScript PWA.
- **Data Loading**: `js/data-loader.js` fetches HSK level databases and registers vocabulary content.
- **Service Worker**: `sw.js` manages precaching and dynamic/lazy caching of assets and vocabulary files.
- **Analytics**: `js/analytics-engine.js` buffers learning events, formats daily stats, and logs to LocalStorage.
- **Progress Storage**: `js/progress.js` tracks overall learning progress and study statistics.
- **SRS Engine**: `js/sm2.js` contains the SuperMemo-2 Spaced Repetition Algorithm implementation for active recall scheduling.
- **UI Elements**: 
  - `components/admin-panel.js` (to be removed) acts as an admin interface.
  - `components/dashboard.js` and others load interactive widgets.

## Milestones
| # | Name | Scope | Dependencies | Status |
|---|------|-------|-------------|--------|
| M1 | Lazy-Loaded HSK Database | Refactor `js/data-loader.js` and `sw.js` for on-demand loading & caching of HSK levels | None | IN_PROGRESS (87a23f71-5206-40cf-aa8d-3fd0f8512056) |
| M2 | Telemetry & Storage Clean Up | Remove OS/browser parsing from `js/analytics-engine.js` and consolidate storage in `js/progress.js` | None | IN_PROGRESS (87a23f71-5206-40cf-aa8d-3fd0f8512056) |
| M3 | SRS Upgrade & Study Profiles | Add delayed-review reward and settings toggle for Speed Prep vs Deep Retention profiles | M2 | IN_PROGRESS (87a23f71-5206-40cf-aa8d-3fd0f8512056) |
| M4 | Admin Panel Removal | Delete `components/admin-panel.js` and clean up imports/references in `index.html` | None | IN_PROGRESS (87a23f71-5206-40cf-aa8d-3fd0f8512056) |
| M5 | Test Suite Alignment | Align `tests/` with changes to analytics, sm2, asset integrity, and run test verification | M1, M2, M3, M4 | IN_PROGRESS (be006b7b-b6ea-45ab-b45c-0b04ff32a6f1) |

## Interface Contracts
### `js/data-loader.js` ↔ `sw.js`
- `sw.js` must intercept requests to `data/vocabulary-hsk*.jsonl` and cache them lazily only upon fetch.
- `js/data-loader.js` only requests active HSK level files matching the user's calibration/active levels, avoiding fetching all levels at initialization.

### `js/analytics-engine.js` ↔ `js/progress.js`
- Consolidated study progress and event logging to minimize LocalStorage write frequency.
- OS/Browser telemetry methods are removed, but core tracking methods remain API-compatible.

### `js/sm2.js` ↔ Study Profiles Selector UI
- `SM2.processReview` supports profile-based adjustments (Speed Prep vs Deep Retention) and actual interval delays.

## Code Layout
- `components/`: UI custom components (e.g. `dashboard.js`, `vocabulary-learner.js`)
- `css/`: Theme and layout stylesheets
- `data/`: HSK vocabulary database files (`.jsonl` files)
- `js/`: Core application logic modules (`app.js`, `data-loader.js`, `sm2.js`, `progress.js`, `analytics-engine.js`)
- `tests/`: Node.js native test runner suite (`node --test`)
- `sw.js`: Service worker at root
- `index.html`: Main application page
