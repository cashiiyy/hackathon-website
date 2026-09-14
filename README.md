# Dhyuthi 7.0

**Official website for Dhyuthi 7.0** — the Annual Technical Symposium of the IEEE SCT Student Branch.

---

## Live Website

> https://cashiiyy.github.io/hackathon-website/

## Repository

> https://github.com/cashiiyy/hackathon-website

---

## Features

- Distinctive visual identity: "Signal · Structure · Spark"
- Official IEEE and IEEE SCT SB branding throughout
- Full event information architecture (Hero, About, Highlights, Timeline, Announcements, FAQ, CTA)
- Pre-event content system (Announcements with badge variants)
- Content-driven architecture — all event data in `src/config/`
- TypeScript with strict mode
- Responsive — mobile to 4K
- Accessible — semantic HTML, ARIA, keyboard nav, reduced-motion
- Zero external UI/animation library dependencies

## Tech Stack

React 19 · Vite 7 · TypeScript · Vanilla CSS (CSS custom properties)

## Architecture

```
src/
├── config/       # event.ts, navigation.ts, content.ts
├── components/
│   ├── layout/   # Navbar, Footer
│   ├── ui/       # Button, Badge, SectionHeading
│   ├── sections/ # Hero, About, Highlights, Timeline, Announcements, FAQ, CTA
│   └── motion/   # Reveal (scroll animation wrapper)
└── assets/       # IEEE + SCT SB logos
```

## Local Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy

```bash
npm run deploy   # → GitHub Pages
```

## Documentation

See [`/Doc`](./Doc/) for:

- [Design System](./Doc/design-system.md)
- [Architecture](./Doc/architecture.md)
- [Component Architecture](./Doc/component-architecture.md)
- [Technical Approach](./Doc/technical-approach.md)
- [Backend Architecture (Proposed)](./Doc/backend-architecture.md)
- [Deployment](./Doc/deployment.md)
- [Decisions](./Doc/decisions.md)
- [Final Review](./Doc/final-review.md)

## Design Philosophy

> "Design with intent. Build with structure. Make it reusable."

Visual concept: **Signal · Structure · Spark** — editorial, technical, premium.  
Not: particles, random neon, generic AI-dark-website.

## Reusability

Update `src/config/event.ts` + `src/config/content.ts` → new edition ready.  
Swap assets + accent color → another IEEE event.

## Credits

IEEE SCT Student Branch · Sree Chitra Thirunal College of Engineering, Trivandrum  
Typefaces: Space Grotesk, Inter, JetBrains Mono (Google Fonts)  
Logos: Official IEEE Brand Assets
