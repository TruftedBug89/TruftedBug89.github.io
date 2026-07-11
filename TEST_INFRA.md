# E2E Test Infra: Chinese Master Optimization & Upgrade

## Test Philosophy
- Opaque-box, requirement-driven. No dependency on implementation design.
- Methodology: Category-Partition + BVA + Pairwise + Workload Testing.

## Feature Inventory
| # | Feature | Source (requirement) | Tier 1 | Tier 2 | Tier 3 |
|---|---------|---------------------|:------:|:------:|:------:|
| F1 | Lazy Loading | ORIGINAL_REQUEST §R1 | 5 | 5 | ✓ |
| F2 | Telemetry Cleanup & localStorage | ORIGINAL_REQUEST §R2 | 5 | 5 | ✓ |
| F3 | SRS Delays | ORIGINAL_REQUEST §R3 | 5 | 5 | ✓ |
| F4 | SRS Profiles | ORIGINAL_REQUEST §R3 | 5 | 5 | ✓ |
| F5 | Admin Panel Removal | ORIGINAL_REQUEST §R4 | 5 | 5 | ✓ |

## Test Architecture
- Test runner: Node.js native test runner (`node --test`), invoked via `npm test` or `node --test` inside the `tests/` directory.
- Test case format: JS test files using Node's standard `assert` and `node:test` framework. Mocks/runtimes simulated with `dom-env.js` and `data-loader-mock.js`.
- Directory layout:
  - `tests/`: Contain all test script files.
  - `tests/helpers/`: Mock and environment setups (`dom-env.js`, `data-loader-mock.js`, `sandbox.js`).

## Real-World Application Scenarios (Tier 4)
| # | Scenario | Features Exercised | Complexity |
|---|----------|--------------------|------------|
| 1 | Placement-to-Load Onboarding Journey | F1 | Medium |
| 2 | Exercise Completion Write Efficiency | F2 | Medium |
| 3 | Long-term Retention & Delay Review | F3 | High |
| 4 | Study Profile Customization & Scheduler | F4 | High |
| 5 | PWA Core Operations Verification | F5 | Medium |

## Coverage Thresholds
- Tier 1: ≥5 per feature (Total 25)
- Tier 2: ≥5 per feature (Total 25)
- Tier 3: pairwise coverage of major feature interactions (Total 5)
- Tier 4: ≥5 realistic application scenarios (Total 5)
- **Total Minimum: 60 test cases**
