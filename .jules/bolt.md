## 2024-03-24 - Avoiding O(N) Shuffles for O(K) Subsets
**Learning:** Found a widespread pattern where a few random items are picked from a large collection (e.g. `getRandom(10)` from 5000+ words). Using `this.shuffle(array).slice(0, count)` forces an $O(N)$ allocation, full array copy, and full array shuffle just to pick 10 items.
**Action:** Replace full array shuffle with an $O(K)$ subset selection using a `Set` to track picked indices when $K$ is small relative to $N$.

## 2024-05-18 - Batch LocalStorage Writes
**Learning:** Synchronous writes to localStorage on frequent events (like analytics tracking) can cause performance bottlenecks.
**Action:** Batch state changes in memory and write to localStorage periodically (e.g., using a flush interval and visibility API).
