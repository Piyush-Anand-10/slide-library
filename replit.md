# 8th Sem Major Project - Presentation Browser

## Overview
A React/Vite frontend application that lets users browse, search, filter, and view project presentations organized by topic. Migrated from Lovable to Replit.

## Architecture
- **Type**: Pure frontend SPA (Single Page Application)
- **Framework**: React 18 with TypeScript
- **Build tool**: Vite 5
- **Styling**: Tailwind CSS with shadcn/ui components
- **Routing**: React Router v6
- **State/Data fetching**: TanStack Query

## Project Structure
- `src/pages/` — Route-level page components (Index, NotFound)
- `src/components/` — UI components (CategoryFilter, PresentationCard, PresentationViewer, NavLink, SearchBar, ui/)
- `src/data/` — Static data files
- `src/hooks/` — Custom React hooks
- `src/lib/` — Utility functions

## Development
- Run: `npm run dev` (starts Vite dev server on port 5000)
- Build: `npm run build`
- The workflow "Start application" handles the dev server

## Deployment
- Static site deployment
- Build output goes to `dist/`
- Build command: `npm run build`

## Key Decisions
- Removed `lovable-tagger` plugin from Vite config (Lovable-specific, not needed on Replit)
- Moved Google Fonts `@import` before `@tailwind` directives in `index.css` to fix CSS ordering warning
- Vite server configured to listen on `0.0.0.0:5000` with `allowedHosts: true` for Replit's proxy
