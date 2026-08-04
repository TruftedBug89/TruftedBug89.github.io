## 2024-05-24 - Accessibility: Reduced Motion Fallbacks & CSS Reset
**Learning:** When guarding JS-driven canvas animations with `matchMedia('(prefers-reduced-motion: reduce)')`, simply returning early can leave canvases entirely blank. In CSS, disabling transitions entirely via `transition: none` can break JavaScript logic relying on `transitionend` events.
**Action:** Always draw a static frame or final state in JS canvas animations before returning when reduced motion is detected. In CSS, use `animation-duration: 0.01ms !important` and `transition-duration: 0.01ms !important` to visually skip animations while preserving event dispatches.

## 2024-05-24 - Accessibility: WCAG AA Dark Theme Contrast
**Learning:** Default semantic colors (slate, coral, rose, bright blue) often fail WCAG AA contrast (4.5:1) against dark backgrounds (`#0f172a`, `#1e293b`).
**Action:** Audit text and semantic accent colors against the background palette using contrast calculators. Lighten the colors appropriately to pass contrast ratios while maintaining the application's overall visual identity.
