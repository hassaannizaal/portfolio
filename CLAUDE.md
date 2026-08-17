# Portfolio Project Documentation

## Overview
A professional portfolio website showcasing ODIN — an AI-powered design & development platform. Built with Next.js 16, React 19, and Tailwind CSS 4, featuring a clean dark interface with an interactive 3D WebGL hero section.

## Tech Stack
- **Framework**: Next.js 16 (App Router)
- **UI**: React 19
- **Styling**: Tailwind CSS 4
- **3D Graphics**: Three.js (WebGL)
- **Language**: TypeScript 5
- **Type Checking**: Strict mode enabled
- **Linting**: ESLint 9 (Next.js config)
- **Formatting**: Prettier 3

## Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout with metadata
│   ├── page.tsx                # Homepage
│   ├── sitemap.ts              # SEO sitemap (Next.js convention)
│   ├── robots.ts               # SEO robots.txt (Next.js convention)
│   ├── globals.css             # Global styles & CSS variables
│   ├── viewport.tsx            # Viewport config
│   └── projects/
│       ├── page.tsx            # Projects list page
│       └── [slug]/page.tsx      # Project detail page
├── components/
│   └── site/
│       ├── SectionTitle.tsx     # Shared section title component
│       ├── Hero.tsx             # 3D hero section with BinaryMap
│       ├── BinaryMap.tsx        # WebGL binary animation (500 lines)
│       ├── ProjectCard.tsx      # Project list card
│       ├── ProjectDetail.tsx    # Project detail layout (361 lines)
│       ├── ProjectsSection.tsx  # Projects grid section
│       ├── BackgroundSection.tsx # Experience & education section
│       ├── CertsSection.tsx     # Certifications section
│       ├── AboutModal.tsx       # About dialog modal
│       ├── ContactModal.tsx     # Contact dialog modal
│       ├── SiteHeader.tsx       # Top navigation bar
│       └── SiteFooter.tsx       # Footer with contact links
├── data/
│   ├── portfolio.ts            # Portfolio metadata & contact links
│   ├── projects.ts             # Project data (ODIN details)
│   └── odin.ts                 # ODIN project full details
├── lib/
│   └── types.ts                # TypeScript type definitions
└── styles/
    └── globals.css             # CSS variables, animations, utilities
```

## Component Patterns

### Client vs Server Components
- **Client**: Interactive components with state/events (`Hero`, `AboutModal`, `ContactModal`, `BackgroundSection`, `CertsSection`, `ProjectNav`, `SiteHeader`, `BinaryMap`)
- **Server**: Presentational/data-driven components (`HomePage`, `ProjectCard`, `ProjectsSection`, `ProjectDetail`, `SiteFooter`)
- All `use client` declarations are at component boundaries, not deep in the tree

### Prop Typing
- All components use TypeScript interfaces for props (e.g., `interface AboutModalProps { ... }`)
- Inline types are used where appropriate
- No `PropTypes` or `any` types in the codebase

### Styling Approach
- **Tailwind CSS 4** for utility classes (primary approach)
- **CSS custom properties** (`--css-var`) for dynamic values (animations, theme colors)
- **Inline styles** for computed animations (transforms, opacity) — wrap in `style={{ ... }}`
- Responsive breakpoints: `sm:`, `lg:`, `xl:` (mobile-first)
- Dark theme throughout — CSS vars define color palette (`--fg`, `--bg`, `--accent`, `--line`, etc.)

## Key Conventions

### Naming
- Components: PascalCase (`.tsx`)
- Data/utilities: camelCase or lowercase (`.ts`)
- Folder structure: lowercase + kebab-case
- CSS classes: lowercase, hyphen-separated (Tailwind style)

### Accessibility
- All interactive elements have `aria-label` (modals, buttons, links)
- Decorative elements use `aria-hidden="true"`
- Modals: `role="dialog"`, `aria-modal="true"`, Escape-key close, body scroll lock
- **Note**: Modal focus trap not yet implemented (TODO: add focus trap utilities)
- Heading hierarchy: proper `<h1>`, `<h2>`, `<h3>` tags (not just styled `<p>`)

### Data Flow
- Portfolio metadata centralized in `src/data/portfolio.ts` (name, email, socials, etc.)
- Contact links extracted to `contactLinks` array in `portfolio.ts` — imported by `ContactModal` and `SiteFooter`
- Projects data in `src/data/projects.ts` + detailed ODIN data in `src/data/odin.ts`
- Type definitions in `src/lib/types.ts` (single source of truth for shapes)

## Common Commands

```bash
npm run dev        # Start dev server (http://localhost:3000)
npm run build      # Build for production
npm run start      # Start production server
npm run lint       # Run ESLint checks
npm run typecheck  # Run TypeScript type checking
npm run format     # Format code with Prettier
```

## Important Notes

### Performance
- `BinaryMap.tsx` (WebGL hero) is not code-split — consider wrapping in `next/dynamic({ ssr: false })` to reduce initial JS bundle if it becomes heavy
- Remote images (`images.credly.com`) are optimized via `next/image` and configured in `next.config.ts`

### SEO
- Metadata set in `src/app/layout.tsx` with `metadataBase`
- Sitemap generated at `src/app/sitemap.ts` (exports Next.js format)
- Robots.txt generated at `src/app/robots.ts` (exports Next.js format)
- Per-route metadata via `generateMetadata()` in route files

### Testing
- No test runner currently configured (Jest/Vitest/Playwright not installed)
- TODO: Add smoke tests for homepage and project detail pages

### Deployment
- Configured for Vercel (see `next.config.ts`)
- Node engine pinned to `>=20` in `package.json`
- No environment variables currently used (all data is static)

## Recent Improvements (2026-08-17)

1. Updated README to match actual project structure (was describing nonexistent "CLI terminal" feature)
2. Added SEO fundamentals: `sitemap.ts`, `robots.ts`, `metadataBase` in layout
3. Configured `next/image` for remote Credly badges (added `images.remotePatterns`)
4. Removed unused `Stars.tsx` component
5. Extracted duplicated contact links to `src/data/portfolio.ts::contactLinks`
6. Consolidated duplicated `SectionTitle` component (was in 3 files, now in `src/components/site/SectionTitle.tsx`)
7. Renamed AI-generated asset from `Gemini_Generated_Image_...png` to `portrait.png`
8. Added `engines.node`, `typecheck`, and `format` scripts to `package.json`
9. Added Prettier config (`.prettierrc`)
10. Created this `CLAUDE.md` for future Claude Code sessions

## TODOs / Future Work

- Add focus trap + focus return to modals (`AboutModal`, `ContactModal`)
- Consider code-splitting `BinaryMap.tsx` with `next/dynamic`
- Add minimal test suite (Vitest + React Testing Library)
- Consolidate dual-shape `Project`/`ProjectDetailContent` types in `src/lib/types.ts` (currently has overlapping `ProjectStack` vs `ProjectDetailStack`)
- Split `ProjectDetail.tsx` into per-section subcomponents for better maintainability
