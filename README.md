# Portfolio

A professional portfolio website built with **Next.js**, featuring a **minimal dark interface** with a Claude Code-style split layout — browse via the sidebar or use the integrated terminal.

![Next.js](https://img.shields.io/badge/Next.js-16-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8)

## Features

- **Dual interface** — Browse sections normally *or* use the CLI terminal
- **Claude Code-style layout** — Sidebar explorer, content panel, collapsible terminal
- **Synced navigation** — CLI commands (`about`, `projects`, etc.) jump to the matching section
- **Minimal dark theme** — Clean grey palette, Inter + monospace terminal
- **Boot sequence** — Simple loading intro (skippable)
- **Typewriter effects** — Animated terminal output
- **Fully responsive** — Mobile tab nav + desktop sidebar

## Commands

| Command        | Description              |
| -------------- | ------------------------ |
| `help`         | List all commands        |
| `about`        | About you                |
| `skills`       | Technical skills         |
| `projects`     | Portfolio projects       |
| `experience`   | Work history             |
| `contact`      | Contact information      |
| `whoami`       | Quick intro              |
| `ls`           | List directories         |
| `clear`        | Clear terminal           |
| `sudo hire-me` | Easter egg               |

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

Edit your portfolio content in a single file:

```
src/data/portfolio.ts
```

Update your name, bio, skills, projects, experience, and contact links there.

## Project Structure

```
src/
├── app/                  # Next.js App Router
├── components/
│   ├── layout/           # Shell, sidebar, top bar
│   ├── sections/         # Website content panels
│   └── terminal/         # CLI panel components
├── data/
│   └── portfolio.ts      # Your portfolio content
└── lib/
    ├── commands.ts       # Command handlers
    ├── navigation.ts     # Section routing
    └── types.ts          # TypeScript types
```

## Deploy

Deploy easily on [Vercel](https://vercel.com):

```bash
npm run build
```

Or connect your GitHub repo to Vercel for automatic deployments on push.

## Tech Stack

- [Next.js 16](https://nextjs.org/) — React framework
- [TypeScript](https://www.typescriptlang.org/) — Type safety
- [Tailwind CSS 4](https://tailwindcss.com/) — Styling
- [Framer Motion](https://www.framer.com/motion/) — Animations
- [JetBrains Mono](https://www.jetbrains.com/lp/mono/) — Terminal font

## License

MIT
