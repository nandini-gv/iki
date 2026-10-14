# Development Phases

Complete and verify each phase before starting the next.

## Phase 0 — Decisions
Confirm the approved mockup, section order, responsive behavior, and whether release one is a static marketing site or includes APIs, job search, accounts and employer workflows. Record unknowns instead of guessing.

## Phase 1 — Foundation
Scaffold Vite + React + strict TypeScript. Add MUI, React Router, lint, typecheck, Vitest and React Testing Library. Add a basic theme and Error Boundary. Add Redux Toolkit only if a concrete shared-state requirement exists. Add Docker and CI.

**Acceptance:** clean install, tests, production build and container work.

## Phase 2 — Design system
Define MUI palette, typography, spacing, breakpoints and component defaults. Build header, page container, footer and legal strip. Confirm section heights and responsive widths.

## Phase 3 — Homepage
Build in order: hero, 2×2 promotional grid, opportunities carousel, partners, FAQ, conversation section, footer/legal strip. Preserve the mockup. Test interactions and responsive behavior.

## Phase 4 — Quality
Add keyboard support, focus states, semantic landmarks, accessible labels and alt text. Run typecheck, lint, unit tests, build, Snyk and Sonar when configured.

## Phase 5 — Backend features only after approval
Define API contracts, identity provider, roles, data retention and threat model. Implement server-side validation and authorization, safe errors and rate limiting where relevant. Never treat frontend checks as security controls.

## Phase 6 — Release
Run all configured checks, review Snyk findings and Sonar quality gate, inspect container and headers, verify HTTPS/secrets/monitoring, and document deployment/rollback.

For each task, the agent must state scope first and report actual verification results afterward.
