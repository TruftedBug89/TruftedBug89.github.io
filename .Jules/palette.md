## 2024-05-18 - Dynamic ARIA Labels for Icon Buttons
**Learning:** Static ARIA labels are insufficient for toggle buttons (like play/pause). The label must change dynamically with the component state so screen reader users understand the *current* action available.
**Action:** Always update `aria-label` in JavaScript alongside visual state changes (like changing icons) for interactive toggle buttons.

## 2026-07-18 - Focus Timer Dynamic ARIA Labels
**Learning:** Icon-only buttons in dynamically injected components (like floating focus timers) are completely invisible to screen readers without ARIA labels. State-toggling buttons (like play/pause) must dynamically update their `aria-label` to reflect the *next* available action, not just the current state.
**Action:** When injecting UI components with icon-only controls, always include `aria-label` attributes. For toggle buttons, bind the `aria-label` update to the same logic that updates the visual icon or text.

## 2026-08-05 - Contextual ARIA Labels for Numeric/Symbolic Buttons
**Learning:** Buttons that display only numbers (like '+10' for XP rewards) or symbols (like '✓' for completed tasks) are read by screen readers exactly as they appear, which lacks context (e.g., 'plus ten button').
**Action:** Always add descriptive `aria-label` and `title` attributes to numeric or symbolic buttons to provide clear context (e.g., 'Claim 10 XP' instead of just '+10').
