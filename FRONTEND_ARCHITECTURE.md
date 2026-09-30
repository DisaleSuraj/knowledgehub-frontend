# KnowledgeHub AI Frontend Architecture

## Core areas

- `pages/landing` — public SaaS landing page
- `pages/auth` — authentication screens
- `pages/employee` — employee experience
- `pages/editor` — knowledge editor experience
- `pages/manager` — department manager experience
- `pages/admin` — super admin experience
- `pages/guest` — public/guest experience

## Shared layers

- `components/` — reusable UI and domain components
- `routes/` — route and role protection
- `services/` — backend API boundaries
- `hooks/` — TanStack Query/application hooks
- `store/` — client state
- `types/` — shared TypeScript models
- `utils/` — permissions, constants and formatting

## Design principle

Build reusable document, AI, analytics and UI components once. Role-specific pages compose those components rather than duplicating them.

## Planned role routing

- `/admin/*`
- `/manager/*`
- `/editor/*`
- `/employee/*`
- `/guest/*`

## Planned clearance levels

- PUBLIC
- INTERNAL
- CONFIDENTIAL
- RESTRICTED
- EXECUTIVE
