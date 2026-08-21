# Full Stack Portfolio

Personal portfolio site for Oleksandr Cheban — a full-stack developer. Built with React 19, TypeScript, and Vite, styled with Tailwind CSS and MUI, and animated with Framer Motion.

Live: https://cebanoleksandr.github.io/full-stack-portfolio/

## Tech Stack

- **React 19** + **TypeScript** + **Vite**
- **React Router v7** (hash routing, for GitHub Pages compatibility)
- **Tailwind CSS v4** + **MUI** for styling and components
- **Framer Motion** for scroll-reveal and page animations
- **ESLint** + **typescript-eslint** for linting

## Getting Started

```bash
npm install
npm run dev
```

The app runs at `http://localhost:5173`.

## Scripts

| Command          | Description                                      |
| ---------------- | ------------------------------------------------- |
| `npm run dev`     | Start the Vite dev server                         |
| `npm run build`   | Type-check (`tsc -b`) and build for production    |
| `npm run preview` | Preview the production build locally              |
| `npm run lint`    | Run ESLint over the project                        |
| `npm run deploy`  | Build and publish `dist/` to GitHub Pages          |

## Project Structure

```
src/
├── App.tsx               # Root layout: sidebar + routed content
├── theme.ts               # MUI dark theme
├── router/                # React Router route definitions
├── layouts/                # Route-level layouts (Home, Projects)
├── pages/                 # HomePage, ProjectsPage, ProjectDetail, NotFoundPage
├── components/             # Sidebar, Header, ProjectCard, ImageLightbox, etc.
└── data/                  # Site content: profile, skills, experience, projects
```

Site content (bio, skills, experience, and project details) lives in typed data modules under `src/data/`, kept separate from the components that render it.

## Pages

- **Home** — hero intro, about/stats, skills, experience timeline, education, and contact section (single scrollable page with anchor navigation).
- **Projects** — grid of project cards sourced from `src/data/projects.ts`.
- **Project Detail** — full case study per project: overview, image gallery (with a fullscreen lightbox), embedded video walkthrough, and tech stack.

## Deployment

The site deploys to GitHub Pages via the `deploy` script, which builds the project and publishes the `dist/` folder using `gh-pages`.
