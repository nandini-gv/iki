# AI and Contributor Rules

## Engineering
- Read relevant files before editing. Make small, reviewable changes and avoid unrelated rewrites.
- Use React function components, strict TypeScript, explicit props and simple feature folders.
- Avoid `any`, unsafe casts, ignored errors, unnecessary effects/memoization and hypothetical abstractions.
- Use MUI theme tokens consistently. Use CSS Modules for complex section layouts if clearer than `sx`.
- Keep local UI state local. Redux Toolkit is only for genuinely shared client state.
- Use React Router for routing. Never store secrets in frontend code or `VITE_*` variables.
- Ask before adding dependencies or changing architecture.
- Report changed files, actual checks run, failures, unknowns and next step.

## Unit testing
- Use Vitest and React Testing Library.
- Test user-visible behavior and important logic, not implementation details.
- Add tests for meaningful new behavior and failure/empty/invalid states where relevant.
- Mock network boundaries. Tests must not rely on production services.
- Run tests in CI; do not claim they passed unless they actually ran.

## Snyk and dependencies
- Keep `package-lock.json` committed and use `npm ci`.
- Run Snyk dependency scanning in CI when `SNYK_TOKEN` is configured.
- Fix findings or document a time-limited, approved exception with an owner.
- Do not suppress vulnerabilities just to get a green check. `npm audit` is supplementary, not a replacement for Snyk.
- Review the purpose, maintenance and license of new dependencies.

## SonarQube
- Run SonarQube/SonarCloud in CI when configured.
- Follow the project's quality gate; fix new bugs, vulnerabilities and security hotspots.
- Do not add broad exclusions to hide findings.
- A config file is not proof a scan ran; report the real status.

## Security
- A public frontend is inspectable. Never put secrets in client code or frontend environment variables.
- Treat user input and API responses as untrusted; validate data at boundaries.
- Sensitive operations must have server-side authorization. Frontend route guards are not security boundaries.
- Use parameterized database queries on the backend; never build queries or shell commands from untrusted strings.
- Avoid `dangerouslySetInnerHTML`; if approved, sanitize with a maintained library.
- Never expose stack traces, tokens, internal configuration or personal data in user-facing errors/logs.
- Use HTTPS in production, least privilege, narrow CORS allowlists, rate limiting and abuse controls where relevant.
- Use secure session/cookie settings when authentication exists. Add CSRF protection where the auth/request design requires it.
- Do not invent authentication or claim the app is unhackable.

## Errors
- Use a React Error Boundary for render failures.
- Handle expected request failures with useful loading, empty, error and retry states.
- Do not silently swallow errors.

## Release gate
Run typecheck, lint, unit tests, production build, Snyk scan and Sonar quality gate as configured. Report each as passed, failed, skipped or not configured. Never imply a skipped check passed.
