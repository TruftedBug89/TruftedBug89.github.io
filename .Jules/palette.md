## 2024-05-18 - Dynamic ARIA Labels for Icon Buttons
**Learning:** Static ARIA labels are insufficient for toggle buttons (like play/pause). The label must change dynamically with the component state so screen reader users understand the *current* action available.
**Action:** Always update `aria-label` in JavaScript alongside visual state changes (like changing icons) for interactive toggle buttons.
## 2026-08-05 - Missing ARIA Labels on Dynamically Injected Inputs
**Learning:** Dynamically injected form inputs in this codebase often rely on placeholders and lack associated `<label>` elements.
**Action:** Always ensure explicit `aria-label` attributes are added to these inputs for screen reader accessibility.
