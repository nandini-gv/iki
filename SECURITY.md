# Security Policy

## Limitation
No public website can be guaranteed unhackable. This checklist reduces risk but is not a guarantee or a substitute for security review.

## Release checklist
- [ ] `npm ci`, typecheck, lint, unit tests and production build pass.
- [ ] Snyk scan completed; findings fixed or documented with owner and expiry.
- [ ] Sonar analysis and quality gate completed.
- [ ] No secrets in Git, frontend bundles or `VITE_*` variables.
- [ ] HTTPS enabled in production.
- [ ] Container runs as non-root; production image is minimal.
- [ ] Security headers verified; errors do not expose stack traces.
- [ ] Dependency/base-image update process exists.
- [ ] Logs avoid tokens, passwords and unnecessary personal data.
- [ ] Monitoring, backups and incident response are assigned where applicable.

## Frontend and backend
A React SPA is public by design. Its JavaScript, routes and public configuration can be inspected. Never put secrets in it. Hiding a button or guarding a route is not authorization.

When APIs exist, require server-side authentication and authorization on every protected operation, input validation, parameterized database queries, rate limiting, narrow CORS allowlists, secure sessions/cookies, CSRF protection where relevant, upload validation if uploads exist, and tests for access-control failures.

Set up a private security reporting channel before handling accounts or personal data.
