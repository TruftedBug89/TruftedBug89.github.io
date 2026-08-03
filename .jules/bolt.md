## 2024-03-24 - Avoiding O(N) Shuffles for O(K) Subsets
**Learning:** Found a widespread pattern where a few random items are picked from a large collection (e.g. `getRandom(10)` from 5000+ words). Using `this.shuffle(array).slice(0, count)` forces an $O(N)$ allocation, full array copy, and full array shuffle just to pick 10 items.
**Action:** Replace full array shuffle with an $O(K)$ subset selection using a `Set` to track picked indices when $K$ is small relative to $N$.

## 2024-05-18 - Batch LocalStorage Writes
**Learning:** Synchronous writes to localStorage on frequent events (like analytics tracking) can cause performance bottlenecks.
**Action:** Batch state changes in memory and write to localStorage periodically (e.g., using a flush interval and visibility API).

## 2024-05-14 - Redundant localStorage Reads & parseJSONL Blocking
**Learning:** `StorageManager.getUserData()` is called dozens of times per interaction. Since it was reading from `localStorage` synchronously parsing the JSON payload every time, this introduced a significant performance bottleneck. In addition, the `analytics-engine.js` summary processing has an O(n^2) nested loop when processing summaries which slows down over time as the user uses the application.
**Action:** Introduce `_cachedUserData` and `_cachedSessionId` to `StorageManager` so it caches `getUserData` in memory. If `StorageManager.setUserData` is called, update the cache. Also, update `analytics-engine.js` summary loop to use a hash map lookup (O(n)).

## 2024-07-18 - Lazy Loading Heavy Vanilla JS Components
**Learning:** In a vanilla JS architecture, large UI components that aren't critical to the initial paint can be effectively lazy-loaded by dynamically injecting `<script>` tags on demand. This shrinks the initial payload size. However, converting a synchronous component initialization flow to an asynchronous one requires careful attention to the execution order (e.g., ensuring `init()` is called before `render()` inside the `.then()` chain) to avoid race conditions.
**Action:** When migrating synchronous component setups to lazy-loaded patterns, wrap all dependent UI setup logic (e.g., in routing functions like `populateModule` or `showMenu`) inside the `loadPromise.then()` block, and ensure idempotent initialization routines (`if (!initialized) init();`) are correctly sequenced within that block.

## 2024-09-08 - String Similarity Levenshtein Matrix Memory Overhead
**Learning:** Computing Levenshtein distance by allocating an $N \times M$ 2D array creates severe memory pressure and triggers garbage collection pauses, especially when used frequently or on longer sentences, due to allocating $N$ separate sub-arrays in JavaScript.
**Action:** Optimize space complexity from $O(N \times M)$ to $O(\min(N, M))$ by using only two 1-D arrays (`prevRow` and `currRow`) and swapping their references on each outer loop iteration. Swap strings early so the smaller string defines the column width.

## 2026-07-23 - Debouncing Search Inputs
**Learning:** Frequent DOM rendering triggered by input events on search bars causes unnecessary reflows and performance bottlenecks.
**Action:** Always wrap input event listeners for search functions with a debounce utility (e.g., `Utils.debounce`) to delay rendering until the user pauses typing.

## 2024-10-15 - Throttling High-Frequency Browser Events
**Learning:** High-frequency events like `resize`, `scroll`, and continuous `input` updates (e.g., autosizing a textarea) can trigger excessive layout calculations and DOM reflows synchronously on the main thread, causing frame drops and unresponsive UI.
**Action:** When binding high-frequency browser events, wrap `resize` callbacks with the `Utils.debounce` function (e.g., `Utils.debounce(fn, 150)`) to prevent excessive reflows. Avoid using `debounce` for continuous UI updates like `scroll` or autosizing `input` as it causes lag/jerkiness; use `requestAnimationFrame` to throttle those updates to the browser's display refresh rate.

## 2026-08-01 - Debouncing Resize Events
**Learning:** Frequent window resize events trigger reflows, causing performance bottlenecks, especially when redrawing canvases. Manual `setTimeout` tracking can be error prone and difficult to read.
**Action:** Always wrap `resize` event listeners with `Utils.debounce` (or `Utils.throttle`) to delay rendering until resizing pauses.

## 2024-11-20 - Layout Thrashing in high-frequency mousemove events
**Learning:** Calling `getBoundingClientRect()` within a high-frequency `mousemove` handler triggers synchronous layout recalculations (reflows) on every frame. When this is combined with GSAP transforms actively animating the same elements (e.g., a 3D tilt effect or magnetic button), it not only causes severe performance degradation but also creates a feedback loop resulting in visual jitter.
**Action:** When binding GSAP layout-dependent animations to `mousemove`, cache the `getBoundingClientRect()` measurements during the `mouseenter` event. Use the cached measurements during `mousemove` to avoid layout thrashing, and clear the cache on `mouseleave`.
