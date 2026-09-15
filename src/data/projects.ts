import onlineStoreCover from "../assets/images/online-store/n-main.png";
import onlineStoreImg1 from "../assets/images/online-store/n-1.png";
import onlineStoreImg2 from "../assets/images/online-store/n-2.png";
import onlineStoreImg3 from "../assets/images/online-store/n-3.png";
import onlineStoreImg4 from "../assets/images/online-store/n-4.png";
import onlineStoreImg5 from "../assets/images/online-store/n-5.png";

import aiPlannerCover from "../assets/images/ai-planner/planner-main.png";
import aiPlannerImg1 from "../assets/images/ai-planner/planner-1.png";
import aiPlannerImg2 from "../assets/images/ai-planner/planner-2.png";
import aiPlannerImg3 from "../assets/images/ai-planner/planner-3.png";
import aiPlannerImg4 from "../assets/images/ai-planner/planner-4.png";
import aiPlannerImg5 from "../assets/images/ai-planner/planner-5.png";
import aiPlannerImg6 from "../assets/images/ai-planner/planner-6.png";
import aiPlannerImg7 from "../assets/images/ai-planner/planner-7.png";
import aiPlannerImg8 from "../assets/images/ai-planner/planner-8.png";

import networkCover from "../assets/images/network/network-main.png";
import networkImg1 from "../assets/images/network/network1.png";
import networkImg2 from "../assets/images/network/network2.png";
import networkImg3 from "../assets/images/network/network3.png";
import networkImg4 from "../assets/images/network/network4.png";

import englishStudyCover from "../assets/images/english-study/english-main.png";
import englishStudyImg1 from "../assets/images/english-study/english1.png";
import englishStudyImg2 from "../assets/images/english-study/english2.png";

import beautyLandingCover from "../assets/images/beauty-landing/beauty-main.png";
import beautyLandingImg1 from "../assets/images/beauty-landing/beauty.png";
import beautyLandingImg2 from "../assets/images/beauty-landing/beauty2.png";
import beautyLandingImg3 from "../assets/images/beauty-landing/beauty3.png";
import beautyLandingImg5 from "../assets/images/beauty-landing/beauty5.png";
import beautyLandingImg6 from "../assets/images/beauty-landing/beauty6.png";
import beautyLandingImg7 from "../assets/images/beauty-landing/beauty7.png";
import beautyLandingImg8 from "../assets/images/beauty-landing/beauty8.png";

import promofireCover from "../assets/images/promofire/promofire-main.png";
import promofireImg1 from "../assets/images/promofire/promofire1.png";
import promofireImg2 from "../assets/images/promofire/promofire2.png";
import promofireImg3 from "../assets/images/promofire/promofire3.png";
import promofireImg4 from "../assets/images/promofire/promofire4.png";
import promofireImg5 from "../assets/images/promofire/promofire5.png";
import promofireImg6 from "../assets/images/promofire/promofire6.png";
import promofireImg7 from "../assets/images/promofire/promofire7.png";
import promofireImg8 from "../assets/images/promofire/promofire8.png";
import promofireImg9 from "../assets/images/promofire/promofire9.png";
import promofireImg10 from "../assets/images/promofire/promofire10.png";
import promofireImg11 from "../assets/images/promofire/promofire11.png";
import promofireImg12 from "../assets/images/promofire/promofire12.png";

import beautyCover from "../assets/images/beauty/beauty-main.png";
import beauty1 from "../assets/images/beauty/beauty.png";
import beauty2 from "../assets/images/beauty/beauty2.png";
import beauty4 from "../assets/images/beauty/beauty4.png";
import beauty3 from "../assets/images/beauty/beauty3.png";
import beauty5 from "../assets/images/beauty/beauty5.png";
import beauty6 from "../assets/images/beauty/beauty6.png";

export const projects = [
  {
    slug: "beauty-salon-booking",
    title: "Beauty Salon — Booking Platform",
    shortDescription:
      "A full-stack beauty salon booking platform with role-based workflows for clients, masters, salon owners, and admins — React + TypeScript frontend backed by a NestJS + PostgreSQL API.",
    fullDescription:
      "A full-stack beauty salon booking platform built end-to-end, from a NestJS REST API to a React SPA. Clients can discover and search salons, view available services and masters, choose appointments, and manage their bookings and notifications. Masters have a dedicated dashboard for managing upcoming bookings, services, working hours, blocked time, and salon join requests, while salon owners manage their salons, locations, services, and staff. The application implements four role-based access levels (Client, Master, Salon Owner, Admin) with protected routes on the frontend and JWT authentication with role-based guards on the backend. Frontend data fetching follows a consistent three-layer architecture: typed Axios API services, TanStack Query hooks for server state and caching, and page components that consume only the hooks, while Redux Toolkit is used for client-side UI state such as global alerts. The UI combines MUI components with Tailwind CSS and supports four languages through react-i18next. Leaflet and React Leaflet provide interactive maps for discovering nearby salons and selecting salon locations. On the backend, a NestJS API is organized into domain modules for users, authentication, salons, masters, services, master-service assignments, working hours, blocked times, bookings, notifications, salon join requests, and reviews. PostgreSQL persistence is managed with TypeORM and migration-based schema management, with database synchronization disabled.",
    cover: beautyCover,
    media: [
      { type: "image", src: beauty1, alt: "" },
      { type: "image", src: beauty2, alt: "" },
      { type: "image", src: beauty3, alt: "" },
      { type: "image", src: beauty4, alt: "" },
      { type: "image", src: beauty5, alt: "" },
      { type: "image", src: beauty6, alt: "" },
      { type: "video", src: "https://www.loom.com/share/fdcf773cb7594c928d202488332b9630", provider: "loom" },
    ],
    stack: {
      frontend: [
        "React 19",
        "TypeScript",
        "Vite",
        "React Router",
        "TanStack Query",
        "Redux Toolkit",
        "MUI",
        "Tailwind CSS",
        "react-i18next",
        "Leaflet",
        "react-leaflet",
        "react-hook-form",
        "Yup",
        "Axios",
      ],
      backend: [
        "NestJS",
        "TypeScript",
        "TypeORM",
        "PostgreSQL",
        "JWT (@nestjs/passport, @nestjs/jwt)",
        "Role-Based Access Control",
        "class-validator",
        "Docker Compose",
      ],
    },
      role: "Full-Stack Developer (solo)",
      demoUrl: "https://cebanoleksandr.github.io/beauty-salon-fe/",
      repoUrl: {
      frontend: "https://github.com/cebanoleksandr/beauty-salon-fe",
      backend: "https://github.com/cebanoleksandr/beauty-salon-be",
    },
    year: 2026,
    featured: false,
  },
  {
    slug: "promofire",
    title: "PromoFire — Promo Campaign & Distribution Platform",
    shortDescription:
      "A full-stack multi-tenant platform for managing promo campaigns, codes, and distributors with SDK redemptions and analytics — React + TypeScript frontend backed by a NestJS + PostgreSQL API.",
    fullDescription:
      "A multi-tenant promo-code management platform built end-to-end, from a NestJS REST API to an administrative React SPA. The system organizes access across an Account → Workspace → Membership hierarchy with role-based scoping (Owner, Admin, Distributor). On the frontend, users manage marketing campaigns, generate ambiguity-free promo codes, manage distributors and tracked customers, and monitor performance through interactive Recharts dashboard widgets and stat cards. Routing is powered by React Router v7 with route guards, dark/light theme switching, and multi-language support via react-i18next. Frontend architecture implements a strict three-layer data pattern: a typed Axios client with interceptors for token attachment and 401 handling, domain services, and TanStack Query hooks driven by centralized query keys, with Redux Toolkit managing global UI alerts. On the backend, a NestJS 10 API handles two authentication flows: JWT with workspace selection for panel users, and a SHA-256 hashed API-key scheme with rate limiting for SDK-based code redemptions. Persistence is managed via TypeORM on PostgreSQL, with request validation using class-validator DTOs and transactional emails delivered via Nodemailer.",
    cover: promofireCover,
    media: [
      { type: "image", src: promofireImg1, alt: "" },
      { type: "image", src: promofireImg2, alt: "" },
      { type: "image", src: promofireImg3, alt: "" },
      { type: "image", src: promofireImg4, alt: "" },
      { type: "image", src: promofireImg5, alt: "" },
      { type: "image", src: promofireImg6, alt: "" },
      { type: "image", src: promofireImg7, alt: "" },
      { type: "image", src: promofireImg8, alt: "" },
      { type: "image", src: promofireImg9, alt: "" },
      { type: "image", src: promofireImg10, alt: "" },
      { type: "image", src: promofireImg11, alt: "" },
      { type: "image", src: promofireImg12, alt: "" },
      { type: "video", src: "https://www.loom.com/share/a9ed33acdc9147ebbca64862936428d7", provider: "loom" }
    ],
    stack: {
      frontend: [
        "React 19",
        "TypeScript",
        "Vite",
        "React Router v7",
        "TanStack Query",
        "Redux Toolkit",
        "MUI v9",
        "Tailwind CSS v4",
        "react-i18next",
        "react-hook-form",
        "Yup",
        "Recharts",
        "Framer Motion",
        "Axios",
      ],
      backend: [
        "NestJS 10",
        "TypeScript",
        "TypeORM",
        "PostgreSQL",
        "JWT (Passport)",
        "API Key Auth (SHA-256)",
        "class-validator",
        "Nodemailer",
        "Docker Compose",
      ],
      credentials: {
        email: "owner@promofire.dev",
        password: "ChangeMe123!",
      }
    },
    role: "Full-Stack Developer (solo)",
    demoUrl: "https://cebanoleksandr.github.io/my-promofire-fe/",
    repoUrl: {
      frontend: "https://github.com/cebanoleksandr/my-promofire-fe",
      backend: "https://github.com/cebanoleksandr/my-promofire-be",
    },
    year: 2026,
    featured: false,
  },
  {
    slug: "beauty-landing",
    title: "Silk — Beauty Salon Landing Page",
    shortDescription:
      "A single-page landing site for a fictional beauty salon, with hero, services, team, testimonials, FAQ, and a validated booking form — React + TypeScript + MUI.",
    fullDescription:
      "A single-page landing site for a fictional beauty salon (\"Silk\"), built with React, TypeScript, and MUI. The page is assembled from a set of self-contained sections: a full-viewport hero, a salon \"our story\" section, service cards (manicure, massage, haircut), team portraits, guest testimonials, an accordion-style FAQ, and a booking form built with React Hook Form and Yup for client-side validation. Sections are separated by a decorative SVG thread divider and animated in with a scroll-triggered fade/slide-in reveal wrapper. Styling combines a custom dark, gold-accented MUI theme with a Tailwind CSS utility layer alongside MUI's `sx` prop, using self-hosted Cormorant Garamond and Jost fonts via Fontsource. The header is a fixed nav bar with a mobile drawer for smaller viewports. The booking form validates entirely client-side and doesn't submit anywhere — on submit it simply shows a confirmation toast. The site is built with Vite and deployed to GitHub Pages under a dedicated base path.",
    cover: beautyLandingCover,
    media: [
      { type: "image", src: beautyLandingImg1, alt: "" },
      { type: "image", src: beautyLandingImg2, alt: "" },
      { type: "image", src: beautyLandingImg3, alt: "" },
      { type: "image", src: beautyLandingImg5, alt: "" },
      { type: "image", src: beautyLandingImg6, alt: "" },
      { type: "image", src: beautyLandingImg7, alt: "" },
      { type: "image", src: beautyLandingImg8, alt: "" },
    ],
    stack: {
      frontend: [
        "React 19",
        "TypeScript",
        "Vite",
        "MUI",
        "Tailwind CSS (@tailwindcss/vite)",
        "react-hook-form",
        "Yup",
        "Fontsource (Cormorant Garamond, Jost)",
      ],
      backend: [],
    },
    role: "Frontend Developer (solo)",
    demoUrl: "https://cebanoleksandr.github.io/beauty-landing/",
    repoUrl: {
      frontend: "https://github.com/cebanoleksandr/beauty-landing",
    },
    year: 2026,
    featured: false,
  },
  {
    slug: "nice-gadgets-online-store",
    title: "Nice Gadgets — Online Store",
    shortDescription:
      "A full-stack e-commerce app for phones, tablets, and accessories — React + TypeScript frontend backed by a NestJS + PostgreSQL + Redis API.",
    fullDescription:
      "A full-featured e-commerce platform built end-to-end, from a NestJS REST API to a React SPA. On the frontend, users browse products by category, filter and sort the catalog, manage a cart and favorites list (as a guest or signed-in user), and complete checkout through a mock Stripe-style payment flow with order history and status tracking. Authenticated admins get a protected panel to create, edit, and delete products. The app supports four languages (English, Ukrainian, Polish, Spanish) with runtime switching, a persisted light/dark theme, and a fully responsive layout from mobile to desktop. Frontend data fetching follows a consistent three-layer pattern per resource: a typed API service layer, TanStack Query hooks for queries/mutations and caching, and components that consume only the hooks. On the backend, a NestJS API organized as modules-per-domain (auth, users, products, cart, orders, payments, favorites, uploads) handles JWT authentication with role-based access control, PostgreSQL persistence via TypeORM, Redis-backed shopping cart storage, request validation with class-validator, and file uploads via Multer.",
    cover: onlineStoreCover,
    media: [
      { type: "image", src: onlineStoreImg1, alt: "" },
      { type: "image", src: onlineStoreImg2, alt: "" },
      { type: "image", src: onlineStoreImg3, alt: "" },
      { type: "image", src: onlineStoreImg4, alt: "" },
      { type: "image", src: onlineStoreImg5, alt: "" },
      { type: "video", src: "https://www.loom.com/share/1c390f4624e54a7e9d8e3d3ee58f4518", provider: "loom" }
    ],
    stack: {
      frontend: [
        "React 19",
        "TypeScript",
        "Vite",
        "React Router",
        "TanStack Query",
        "Redux Toolkit",
        "MUI",
        "Tailwind CSS",
        "react-i18next",
        "react-hook-form",
        "Yup",
        "Axios",
        "Swiper",
      ],
      backend: [
        "NestJS",
        "TypeScript",
        "TypeORM",
        "PostgreSQL",
        "Redis (ioredis)",
        "JWT (@nestjs/passport, passport-jwt)",
        "class-validator",
        "Multer",
        "Docker Compose",
      ],
    },
    role: "Full-Stack Developer (solo)",
    demoUrl: "https://cebanoleksandr.github.io/online-store-app-fe/#/",
    repoUrl: {
      frontend: "https://github.com/cebanoleksandr/online-store-app-fe",
      backend: "https://github.com/cebanoleksandr/online-store-app-be",
    },
    year: 2026,
    featured: true,
  },
  {
    slug: "ai-planner-assistant",
    title: "AI Planner Assistant",
    shortDescription:
      "A personal planning app organizing life around Life Areas → Goals → Tasks, with an AI chat assistant and n8n-powered task optimization — React + TypeScript frontend, NestJS + PostgreSQL API.",
    fullDescription:
      "A personal AI-assisted planning app built end-to-end, from a NestJS REST API to a React SPA. Users structure their life into a three-level hierarchy — Life Areas (e.g. Health, Career, Finance) at the top, Goals with target dates and status tracking nested under each area, and Tasks with due dates nested under each goal. A dashboard gives a quick overview of goals and tasks with fast-create actions, a task backlog view surfaces an AI Insights panel, and a react-big-calendar-powered calendar shows tasks and events by month or week. A floating AI chat widget lets users converse with an assistant to help plan and manage items, proxied through an n8n webhook, while a separate n8n workflow powers AI-driven task optimization. The app is guarded by a JWT-based auth flow and ships with a responsive layout adapted for mobile popups and chat. On the backend, a NestJS API organized as modules-per-domain (auth, users, life-areas, goals, tasks, chat) handles JWT authentication, PostgreSQL persistence via TypeORM with migration-based schema management, and integrates with n8n webhooks for AI chat and task optimization. Frontend data fetching follows a consistent pattern per resource: an API service layer, TanStack Query hooks for queries/mutations, Redux Toolkit for global UI state (e.g. alerts), and React Hook Form + Yup for form validation, with i18next for internationalization.",
    cover: aiPlannerCover,
    media: [
      { type: "image", src: aiPlannerImg1, alt: "" },
      { type: "image", src: aiPlannerImg2, alt: "" },
      { type: "image", src: aiPlannerImg3, alt: "" },
      { type: "image", src: aiPlannerImg4, alt: "" },
      { type: "image", src: aiPlannerImg5, alt: "" },
      { type: "image", src: aiPlannerImg6, alt: "" },
      { type: "image", src: aiPlannerImg7, alt: "" },
      { type: "image", src: aiPlannerImg8, alt: "" },
      { type: "video", src: "https://www.loom.com/share/5aff12bf3f7a4c6fa798ca48eb323ff8", provider: "loom" },
    ],
    stack: {
      frontend: [
        "React 19",
        "TypeScript",
        "Vite",
        "React Router",
        "TanStack Query",
        "Redux Toolkit",
        "MUI",
        "Tailwind CSS",
        "i18next",
        "react-hook-form",
        "Yup",
        "react-big-calendar",
        "Framer Motion",
        "Axios",
      ],
      backend: [
        "NestJS",
        "TypeScript",
        "TypeORM",
        "PostgreSQL",
        "JWT (Passport)",
        "n8n (AI workflows & chat webhook)",
        "Docker Compose",
      ],
    },
    role: "Full-Stack Developer (solo)",
    demoUrl: "https://cebanoleksandr.github.io/ai-planner-assistant-fe/",
    repoUrl: {
      frontend: "https://github.com/cebanoleksandr/ai-planner-assistant-fe",
      backend: "https://github.com/cebanoleksandr/ai-planner-assistant-be",
    },
    year: 2026,
    featured: false,
  },
  {
    slug: "network-social-app",
    title: "Network — Social Network App",
    shortDescription:
      "A full-stack social network with feed, stories, direct messaging over sockets, groups, and people search — React + TypeScript frontend backed by a NestJS + PostgreSQL API.",
    fullDescription:
      "A social network platform built end-to-end, from a NestJS REST API to a React SPA. Users browse a feed of posts with likes, comments, and bookmarks, view and post stories, message each other in real time via sockets (with typing indicators and read receipts), join groups, and search for people. The app ships with a full profile system, light/dark theming, and i18n across five languages (English, Russian, Ukrainian, Polish, Spanish). Routing is split into three top-level branches — a public landing page, an authenticated app shell (feed, search, people, groups, photos, music, video, games, settings, profile, dialogs, chat), and an auth flow (login, register, reset password) — with route loaders gating access based on a stored token. Each API domain has its own service file built on a shared Axios instance that attaches the bearer token to every request and silently refreshes it on 401, queuing concurrent requests while a refresh is in flight. On the backend, a NestJS API organized as modules-per-domain (auth, user, post, media, interactions, story, chat, group) handles JWT-based authentication with access/refresh tokens, PostgreSQL persistence via TypeORM with CLI-managed migrations, and real-time chat over WebSockets (@nestjs/websockets + socket.io).",
    cover: networkCover,
    media: [
      { type: "image", src: networkImg1, alt: "" },
      { type: "image", src: networkImg2, alt: "" },
      { type: "image", src: networkImg3, alt: "" },
      { type: "image", src: networkImg4, alt: "" },
      { type: "video", src: "https://www.loom.com/share/44bb1ff3ab7c44f3a89ec168677a504f", provider: "loom" },
    ],
    stack: {
      frontend: [
        "React 19",
        "TypeScript",
        "Vite",
        "React Router v7",
        "Redux Toolkit",
        "MUI",
        "Tailwind CSS v4",
        "react-i18next",
        "react-hook-form",
        "Yup",
        "Axios",
        "socket.io-client",
      ],
      backend: [
        "NestJS",
        "TypeScript",
        "TypeORM",
        "PostgreSQL",
        "JWT (access/refresh tokens)",
        "socket.io (@nestjs/websockets)",
        "Docker Compose",
      ],
    },
    role: "Full-Stack Developer (solo)",
    demoUrl: "https://cebanoleksandr.github.io/react-network-app-fe/",
    repoUrl: {
      frontend: "https://github.com/cebanoleksandr/react-network-app-fe",
      backend: "https://github.com/cebanoleksandr/react-network-app-be",
    },
    year: 2026,
    featured: false,
  },
  {
    slug: "english-study",
    title: "English Study",
    shortDescription:
      "An AI-powered English learning app that generates lessons (vocabulary, reading text, quiz) on any topic and level, then scores your quiz results — React + TypeScript frontend, NestJS + PostgreSQL API.",
    fullDescription:
      "An AI-driven English learning platform built end-to-end, from a NestJS REST API to a React SPA. Users register and log in, then request a lesson by picking a topic and level; an external n8n workflow generates the lesson content — a vocabulary list, a reading text, and a quiz — which is persisted and served back through the API. The lesson detail page presents the vocabulary in a table, the reading text, and an interactive quiz that scores answers on submission, with past lessons listed on a dashboard alongside search and quick-creation. The UI supports five languages (Ukrainian, English, Russian, Polish, Spanish) and a light/dark theme, both switchable from a dedicated Settings page and persisted to localStorage. The frontend uses a hash router so the app works on GitHub Pages without server-side rewrites, with route loaders gating access by reading the JWT from localStorage. Data fetching follows a consistent per-domain pattern: a typed axios-based service layer that attaches the bearer token and handles 401s, paired with TanStack Query hooks for queries and mutations. On the backend, a NestJS API organized as modules-per-domain (auth, users, lessons) handles JWT authentication via Passport, PostgreSQL persistence via TypeORM with migration-based schema management (no auto-sync), and integrates with an n8n webhook to generate lesson content and grade quiz submissions.",
    cover: englishStudyCover,
    media: [
      { type: "image", src: englishStudyImg1, alt: "" },
      { type: "image", src: englishStudyImg2, alt: "" },
      { type: "video", src: "https://www.loom.com/share/2d65fa315fb64c8c99c0333e26e05cc2", provider: "loom" },
    ],
    stack: {
      frontend: [
        "React 19",
        "TypeScript",
        "Vite",
        "React Router",
        "TanStack Query",
        "Redux Toolkit",
        "MUI",
        "Tailwind CSS",
        "i18next",
        "react-hook-form",
        "Yup",
        "Axios",
      ],
      backend: [
        "NestJS",
        "TypeScript",
        "TypeORM",
        "PostgreSQL",
        "JWT (Passport)",
        "n8n (AI lesson generation)",
        "Docker Compose",
      ],
    },
    role: "Full-Stack Developer (solo)",
    demoUrl: "https://cebanoleksandr.github.io/english-study-fe/#/",
    repoUrl: {
      frontend: "https://github.com/cebanoleksandr/english-study-fe",
      backend: "https://github.com/cebanoleksandr/english-study-be",
    },
    year: 2026,
    featured: false,
  },
];
