# Code Walkthrough

Create folders only when real code needs them.

```text
iki/
├── public/images/
├── src/
│   ├── app/ (App.tsx, router.tsx, theme.ts, store.ts only if needed)
│   ├── components/
│   │   ├── layout/ (SiteHeader.tsx, SiteFooter.tsx, PageContainer.tsx)
│   │   └── common/ (ErrorBoundary.tsx)
│   ├── features/home/
│   │   ├── pages/HomePage.tsx
│   │   ├── components/ (HeroSection, PromoGrid, OpportunitiesCarousel,
│   │   │              PartnersSection, FAQSection, ConversationSection)
│   │   └── data/homeContent.ts
│   ├── services/ (only when external APIs exist)
│   ├── types/ (shared types only)
│   ├── test/
│   ├── main.tsx
│   └── vite-env.d.ts
├── .github/workflows/ci.yml
├── Dockerfile
├── .dockerignore
├── nginx.conf
├── sonar-project.properties
├── SECURITY.md
└── README.md
```

## Flow
`main.tsx` mounts React → `App.tsx` installs providers → React Router selects a page → `HomePage` composes sections. MUI theme supplies design tokens. Add Redux Provider only if shared client state is needed.

## State
Local accordion/menu/carousel state belongs in components. Redux Toolkit is for genuinely shared client state. Choose API caching only after API requirements exist; do not mirror server data into Redux without a reason.

## Errors
Render exception → Error Boundary. Request/action failure → feature-level message and retry where appropriate. Invalid form → inline validation. Unknown URL → not-found page. Never show internal diagnostics to users.

## Change flow
Find the owning component → make a small change → add/update tests → run typecheck, lint, tests and build → run configured Snyk/Sonar checks → inspect browser output → update docs.
