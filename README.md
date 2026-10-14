# IKI — Career Platform

IKI is a public-facing career platform. Keep the application maintainable without AI, secure by default, and faithful to the approved desktop/mobile mockup.

## Stack
- **Frontend**: React 18 + TypeScript (strict mode) + Vite
- **Styling**: Material UI with centralized theme, Apple-inspired system typography stack (`-apple-system`, `SF Pro`, `Helvetica Neue`), and mockup color tokens
- **Routing**: React Router v6 with SPA routing and Error Boundaries
- **State**: Local component state (Redux Toolkit only if shared client state is justified)
- **Testing**: Vitest + React Testing Library + v8 code coverage
- **Linting & Types**: ESLint 9 (flat config) + TypeScript checks
- **Target Deployment**: Cloudflare Workers Static Assets (`wrangler.jsonc` with SPA fallback)
- **Container Testing**: Multi-stage Dockerfile (`node:22-alpine` build + `nginx-unprivileged:stable-alpine` runtime)
- **Security & Quality**: Snyk dependency scanning, SonarQube / SonarCloud CI analysis

## Project Docs
- `AI_RULES.md`: engineering, security and testing rules.
- `CODE_WALKTHROUGH.md`: architecture and flow.
- `DEVELOPMENT_PHASES.md`: staged delivery milestones.
- `SECURITY.md`: security checklist, policy, and boundaries.
- `wrangler.jsonc`: Cloudflare Workers Static Assets configuration.
- `Dockerfile`, `.dockerignore`, `nginx.conf`: production container for local/containerized testing.
- `sonar-project.properties`: Sonar scanner configuration.
- `.github/workflows/ci.yml`: CI pipeline.

## Reference Deployment
- **Reference comparison URL**: [https://edunxt.nandinireddy1312.workers.dev/](https://edunxt.nandinireddy1312.workers.dev/)
- Note: Production Workers must not be overwritten or deployed without explicit approval.

## Local Development Commands

```bash
# Install dependencies
npm ci

# Start local Vite development server (http://localhost:3000)
npm run dev

# Run strict TypeScript check
npm run typecheck

# Run ESLint
npm run lint

# Run unit tests with coverage
npm run test -- --run --coverage

# Production build (outputs to dist/)
npm run build

# Preview production build locally via Vite
npm run preview
```

## Cloudflare Workers

The project is configured for Cloudflare Workers Static Assets using `wrangler.jsonc` with single-page-application fallback:
```jsonc
{
  "assets": {
    "directory": "./dist",
    "not_found_handling": "single-page-application"
  }
}
```

### Cloudflare Commands:
```bash
# Build production bundle and preview locally with Wrangler
npm run build
npm run preview:cf

# Deploy to Cloudflare Workers (requires authentication & explicit approval)
npm run deploy:cf
```
*Never commit Cloudflare API tokens or credentials into source control.*

## Containerized Testing (Docker)

A multi-stage, non-root Dockerfile is provided for local and containerized validation:
```bash
# Build container image
docker build -t iki-web .

# Run container on port 8080
docker run --rm -p 8080:8080 iki-web
```
Open `http://localhost:8080` or `http://localhost:8080/health`.

## CI & Security Scans

The GitHub Actions workflow (`.github/workflows/ci.yml`) executes:
1. `verify`: runs `typecheck`, `lint`, `test --coverage`, and `build`.
2. `snyk`: dependency security scanning. *Requires `SNYK_TOKEN` repository secret.*
3. `sonar`: SonarQube / SonarCloud code quality gate. *Requires `SONAR_TOKEN` and `SONAR_HOST_URL` repository secrets.*

## Phase 1 Verification Status

| Check | Tool | Command | Status | Notes |
|---|---|---|---|---|
| Type Checking | TypeScript 5.6 | `npm run typecheck` | Passed | Strict checking, 0 errors |
| Linting | ESLint 9 | `npm run lint` | Passed | 0 errors, 0 warnings |
| Unit Tests & Coverage | Vitest 2.1 | `npm run test -- --run --coverage` | Passed | 5/5 tests passed, 94.29% statement coverage |
| Production Build | Vite 6.0 | `npm run build` | Passed | Clean bundle in `dist/` |
| Cloudflare Config | Wrangler 3.114 | `wrangler.jsonc` | Configured | SPA fallback enabled; ready for preview/deployment |
| Docker Build | Docker 29.6 | `docker build -t iki-web .` | Skipped | Local Docker daemon inactive; configuration verified |
| Snyk Scanning | Snyk CLI | CI action | Pending CI Secret | Needs `SNYK_TOKEN` in GitHub repo settings |
| Sonar Analysis | SonarQube | CI action | Pending CI Secret | Needs `SONAR_TOKEN` & `SONAR_HOST_URL` in GitHub repo settings |

*No public website can be guaranteed impossible to hack. A static frontend must never contain secrets. Features involving accounts, personal data, job applications or employer/admin actions need server-side validation and authorization.*
