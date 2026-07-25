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
