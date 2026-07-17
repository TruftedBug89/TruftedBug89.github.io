## 2024-03-24 - Avoiding O(N) Shuffles for O(K) Subsets
**Learning:** Found a widespread pattern where a few random items are picked from a large collection (e.g. `getRandom(10)` from 5000+ words). Using `this.shuffle(array).slice(0, count)` forces an $O(N)$ allocation, full array copy, and full array shuffle just to pick 10 items.
**Action:** Replace full array shuffle with an $O(K)$ subset selection using a `Set` to track picked indices when $K$ is small relative to $N$.
