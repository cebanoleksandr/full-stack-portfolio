# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start Vite dev server
- `npm run build` — type-check (`tsc -b`) then build for production
- `npm run lint` — run ESLint over the project
- `npm run preview` — preview the production build locally

There is no test runner configured in this project.

## Architecture

This is a personal portfolio site built with React 19 + TypeScript + Vite, styled with Tailwind CSS v4 (via `@tailwindcss/vite`, imported in [src/index.css](src/index.css)) and MUI (`@mui/material`, `@emotion/*`) for components. Routing is `react-router-dom` v7.

- **Routing** ([src/router/index.ts](src/router/index.ts)): routes are defined as a `RouteObject[]` and built via `createBrowserRouter`. `App` ([src/App.tsx](src/App.tsx)) is the root layout component that all pages render under. Pages live in [src/pages/](src/pages/): `HomePage`, `ProjectsPage`, `ProjectDetail` (dynamic `projects/:slug`), and a catch-all `NotFoundPage`.
- **Content as data**: site content (profile info, skills, experience, projects) is kept in typed data modules under [src/data/](src/data/) (`profile.ts`, `skills.ts`, `experience.ts`, `projects.ts`) rather than hardcoded in components — pages/components should read from these modules instead of embedding content inline.
- **Components** ([src/components/](src/components/)) is currently empty — UI is being built out; expect page-level components to be extracted here as the app grows.
- **Styling**: Tailwind utility classes are the primary styling mechanism (see usage in [src/App.tsx](src/App.tsx)); MUI components are used for form/interactive elements (buttons, text fields, icons via `@mui/icons-material`).
- Forms use `react-hook-form` with `yup` for validation when present.
- `framer-motion` is available for animations.

Note: [src/App.tsx](src/App.tsx) currently contains a placeholder login-style layout (email field + button) rather than the real router outlet — expect this to be replaced with an `<Outlet />`-based layout as the app is wired up.
