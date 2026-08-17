# Portfolio

A professional portfolio website showcasing ODIN — an AI-powered design & development platform. Built with **Next.js 16**, **React 19**, and **Tailwind CSS 4**, featuring a clean dark interface with an interactive 3D hero section.

![Next.js](https://img.shields.io/badge/Next.js-16-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8)
![React](https://img.shields.io/badge/React-19-61dafb)

## Features

- **3D Hero Section** — Interactive WebGL binary map animation using Three.js
- **Project Showcase** — Detailed project pages with architecture, stack, and outcomes
- **Dark Theme** — Minimal, elegant dark interface with smooth animations
- **Responsive Design** — Mobile-first approach with adaptive tap targets
- **Modal Dialogs** — About and contact modals with keyboard support
- **Accessibility** — ARIA labels, focus management, semantic HTML

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                      # Next.js App Router pages & layouts
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Homepage
│   ├── sitemap.ts           # SEO sitemap
│   └── robots.ts            # SEO robots.txt
├── components/
│   └── site/                # Reusable UI components
│       ├── Hero.tsx         # 3D hero section with BinaryMap
│       ├── ProjectCard.tsx  # Project list item
│       ├── ProjectDetail.tsx # Project detail page layout
│       ├── AboutModal.tsx   # About dialog
│       ├── ContactModal.tsx # Contact dialog
│       └── ...other components
├── data/
│   └── portfolio.ts         # Portfolio content & metadata
├── lib/
│   └── types.ts             # TypeScript type definitions
└── styles/
    └── globals.css          # Global styles & CSS variables
```

## Customization

Edit your portfolio content in:

```
src/data/portfolio.ts
```

Update your name, bio, projects, skills, social links, and contact info there.

## Styling Approach

- **Tailwind CSS 4** for utility-first styling
- **CSS custom properties** for dynamic values (animations, gradients)
- **Inline styles** sparingly for computed animations
- **Responsive design** using Tailwind breakpoints

## Tech Stack

- [Next.js 16](https://nextjs.org/) — React framework
- [React 19](https://react.dev/) — UI library
- [TypeScript](https://www.typescriptlang.org/) — Type safety
- [Tailwind CSS 4](https://tailwindcss.com/) — Styling
- [Three.js](https://threejs.org/) — 3D graphics (hero section)

## Scripts

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run start      # Start production server
npm run lint       # Run ESLint
npm run typecheck  # Run TypeScript type checking
npm run format     # Format code with Prettier
```

## Deploy

Deploy easily on [Vercel](https://vercel.com):

```bash
npm run build
```

Or connect your GitHub repo to Vercel for automatic deployments on push.

## License

MIT
