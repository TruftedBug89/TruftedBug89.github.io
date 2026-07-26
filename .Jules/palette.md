## 2024-05-18 - Dynamic ARIA Labels for Icon Buttons
**Learning:** Static ARIA labels are insufficient for toggle buttons (like play/pause). The label must change dynamically with the component state so screen reader users understand the *current* action available.
**Action:** Always update `aria-label` in JavaScript alongside visual state changes (like changing icons) for interactive toggle buttons.

## 2026-07-18 - Focus Timer Dynamic ARIA Labels
**Learning:** Icon-only buttons in dynamically injected components (like floating focus timers) are completely invisible to screen readers without ARIA labels. State-toggling buttons (like play/pause) must dynamically update their `aria-label` to reflect the *next* available action, not just the current state.
**Action:** When injecting UI components with icon-only controls, always include `aria-label` attributes. For toggle buttons, bind the `aria-label` update to the same logic that updates the visual icon or text.
## 2026-07-26 - Form Inputs ARIA Labels
**Learning:** Text inputs and sliders without `<label>` elements rely entirely on placeholders or context, which is insufficient for screen readers. Explicit `<label>` elements or `aria-label` attributes must be provided. Wait, I should not overwrite existing explicit label elements!
**Action:** When creating form controls without visible `<label>` elements, ensure `aria-label` is applied directly to the control.
