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

export const projects = [
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
