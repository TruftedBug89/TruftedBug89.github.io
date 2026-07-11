# Original User Request

## Initial Request — 2026-07-11T05:05:02Z

Optimize, clean up, and upgrade the Chinese Master (TruftedBug89.github.io) local-first vanilla JavaScript web application.

Working directory: C:\Users\lavvo\Documents\TruftedBug89.github.io
Integrity mode: development

## Requirements

### R1. Lazy-Loaded HSK Database Chunking
- **Initial Load Optimization**: Refactor `js/data-loader.js` so it does not load all HSK level files at initialization. It must only request and load HSK levels matching the user's active level or placement calibration on-demand.
- **On-Demand Caching**: Configure the Service Worker (`sw.js`) to lazily cache HSK levels (`data/vocabulary-hsk*.jsonl` files) only when they are first fetched by the application, rather than precaching or loading everything up front.

### R2. Consolidate and Clean Up Analytics & User-Agent Parsing
- **Remove Environment Telemetry**: Completely remove user-agent parsing, browser/OS identification, and window/device dimension tracking from `js/analytics-engine.js`.
- **LocalStorage Write Reduction**: Consolidate and combine study progress logging directly into `js/progress.js` (or combine operations) to minimize LocalStorage write frequency and prevent quota exceptions on lower-end devices.

### R3. Adaptive Spaced Repetition (SRS) Algorithm & Profiles
- **Adaptive Forgetting Curve**: Refactor the SRS engine in `js/sm2.js` (or equivalent) to reward users who answer correctly after a delay (when actual days elapsed > scheduled interval). Recalculate ease factor and interval using the actual elapsed days and a reward multiplier (1.2x).
- **Study Profiles**: Implement a selectable profile toggle:
  - **Speed Prep**: Shortens intervals for quick exam cramming.
  - **Deep Retention**: Stretches intervals for long-term memory.
- Provide a simple UI setting/toggle in the dashboard or settings component to switch between these profiles.

### R4. Complete Removal of Admin Panel
- **Remove Code & Script Loading**: Completely delete `components/admin-panel.js` and remove all `<script>` tags or loader references to it in `index.html` and associated scripts. Ensure the application initializes and functions correctly without error.

### R5. Verification and Test Suite Updates
- Update the existing test suite under `tests/` (especially `tests/07-analytics-engine.test.js`, `tests/05-sm2.test.js`, and `tests/10-asset-integrity.test.js`) to align with the simplified analytics engine, updated SRS algorithm, and deleted admin panel file. All tests must pass successfully.

---

## Acceptance Criteria

### R1: Lazy Loading
- [ ] No monolithic vocabulary database or multiple HSK levels are loaded at application start (verified by logging or network request inspection).
- [ ] Individual HSK level files are loaded on-demand using fetch or dynamic imports as the level is unlocked/selected.
- [ ] The Service Worker does not cache unrequested HSK level `.jsonl` files on install.

### R2: Telemetry Cleanup
- [ ] `js/analytics-engine.js` contains no browser, OS, device, or screen dimension parsing code.
- [ ] LocalStorage writes are reduced during study sessions by consolidating progress tracking and logs.

### R3: SRS Engine
- [ ] Cards reviewed after a delay and answered correctly are scheduled with an increased interval using the actual delay and a 1.2x reward multiplier.
- [ ] The application settings allow toggling between "Speed Prep" and "Deep Retention" study profiles, which scale the next review intervals accordingly.

### R4: Admin Panel Removal
- [ ] `components/admin-panel.js` is deleted from the filesystem.
- [ ] There are no references to `admin-panel.js` in `index.html`.
- [ ] The app starts and runs without throwing any reference/runtime errors.

### R5: Verification
- [ ] Running `node --test` in the `tests/` directory passes with 0 failures.
