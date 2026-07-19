## 2024-05-24 - Avoid synchronous localStorage inside tight loops
**Learning:** `_updateSessionStats` and `_updateDailyForEvent` in `analytics-engine.js` were making synchronous `localStorage` writes per event track. This blocks the main thread on an expensive I/O operation whenever an event fires.
**Action:** Move I/O writes into periodic flushing methods (like `_flush`), operate purely in memory using the existing arrays/objects when buffering events, and only save back to `localStorage` once at the very end of the batch flush.
