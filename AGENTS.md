# AGENTS.md

## Project

Vite + React 18 application with TypeScript, Zustand state management, Tailwind CSS, and React Router.
Architecture: Feature-Sliced Design (FSD).
Target browser: latest Google Chrome.

## Commands

- Dev server: `npm run dev` (runs on default Vite port)
- Build: `npm run build` (TypeScript compilation + Vite build)
- Lint: `npm run lint` (ESLint with TypeScript rules)
- Type check: `npx tsc --noEmit`

## Project Structure (FSD)

- `src/app/` - App initialization, routing, global providers
- `src/pages/` - Page-level components (each page is a slice)
- `src/widgets/` - Reusable complex UI blocks (header, sidebar, etc.)
- `src/features/` - User scenarios (auth, product management, sorting)
- `src/entities/` - Business entities (Product, User)
- `src/shared/` - Reusable utilities, UI kit, API clients

## Code Style

- TypeScript: strict mode enabled (`strict: true`)
- Explicit return types on all exported functions
- FSD imports: use public API (`@/shared`, `@/entities`, `@/features`, `@/widgets`, `@/pages`, `@/app`)
- No relative imports between slices (use absolute paths via aliases)
- Prefer named exports over default exports for components

## API Integration

- Data source: DummyJSON Products API (https://dummyjson.com/docs/products)
- Auth: DummyJSON Auth API (https://dummyjson.com/docs/auth)
- Search: implement via API (`/products/search?q=...`)
- Add product: local only, no API persistence required

## Boundaries

- **Never:** Use relative imports between FSD slices (use aliases)
- **Never:** Commit `.env` files with secrets
- **Never:** Disable TypeScript strict mode or use `any`
- **Ask first:** Before adding new dependencies not listed in package.json