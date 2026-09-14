# Dhyuthi 7.0 — Official IEEE SCT Student Branch Technical Symposium Website

## What is Dhyuthi 7.0?

Dhyuthi (Sanskrit: *radiance, brilliance*) is the annual technical symposium of the **IEEE SCT Student Branch** at Sree Chitra Thirunal College of Engineering, Trivandrum, Kerala. Now in its **7th edition**, Dhyuthi is one of the flagship technical events in the IEEE Kerala Section.

This repository contains the first official website for Dhyuthi 7.0 — rebuilt from scratch from an older hackathon website, redesigned with a distinctive visual identity, and architected for reusability across future IEEE events.

---

## Live Website

> **To be updated after first deployment.**  
> Run `npm run deploy` after confirming the GitHub Pages URL.

---

## Repository

[https://github.com/cashiiyy/hackathon-website](https://github.com/cashiiyy/hackathon-website)

---

## Features

- **Distinctive visual identity** — "Signal · Structure · Spark" design concept
- **IEEE branding** — Official IEEE and IEEE SCT SB logos integrated throughout
- **Full event information architecture** — Hero, About, Highlights, Timeline, Announcements, FAQ, CTA, Footer
- **Pre-event content system** — Announcements section ready for real content as it's confirmed
- **Content-driven architecture** — All section data in `src/config/` — zero hardcoded content in components
- **TypeScript** — Full type safety across all components and configurations
- **Responsive** — Mobile-first design, tested from 320px to 1920px
- **Accessible** — Semantic HTML, keyboard navigation, ARIA roles, focus states
- **Scroll-aware navbar** with active section highlighting (IntersectionObserver scrollspy)
- **Scroll reveal animations** — CSS-based, respects `prefers-reduced-motion`
- **FAQ accordion** — Keyboard accessible
- **Zero external UI library dependencies** — Vanilla CSS + React only

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 |
| Build tool | Vite 7 |
| Language | TypeScript (strict) |
| Styling | Vanilla CSS + CSS custom properties (design tokens) |
| Animation | CSS keyframes + IntersectionObserver |
| Deployment | GitHub Pages via `gh-pages` |

---

## Architecture Overview

```
src/
├── components/
│   ├── layout/    (Navbar, Footer)
│   ├── ui/        (Button, Badge, SectionHeading, Card, Divider)
│   ├── sections/  (Hero, About, Highlights, Timeline, Announcements, FAQ, CTA)
│   └── motion/    (Reveal — scroll animation wrapper)
├── config/
│   ├── event.ts        (single source of truth for event data)
│   ├── navigation.ts   (nav links)
│   └── content.ts      (all section content arrays)
└── assets/             (IEEE + SCTB logos)
```

See [Doc/architecture.md](./architecture.md) for diagrams and full detail.

---

## Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Visit http://localhost:5173
```

---

## Build

```bash
npm run build
# Output in dist/
```

---

## Lint

```bash
npm run lint
```

---

## Deployment

```bash
npm run deploy
# Builds and pushes to gh-pages branch
```

See [Doc/deployment.md](./deployment.md) for full deployment instructions.

---

## Documentation

All project documentation is in the `/Doc` folder:

| File | Contents |
|---|---|
| [README.md](./README.md) | Project overview |
| [design-system.md](./design-system.md) | Visual identity, color, typography, motion |
| [architecture.md](./architecture.md) | System architecture with diagrams |
| [component-architecture.md](./component-architecture.md) | Component hierarchy and responsibilities |
| [technical-approach.md](./technical-approach.md) | Technical decision rationale |
| [backend-architecture.md](./backend-architecture.md) | Proposed future backend |
| [deployment.md](./deployment.md) | Deployment process |
| [decisions.md](./decisions.md) | Architecture decision records |
| [final-review.md](./final-review.md) | Evaluation against brief |

---

## Design Philosophy

> "Design with intent. Build with structure. Make it reusable."

The visual concept **"Signal · Structure · Spark"** drives every decision:
- **Signal** — clear information hierarchy, every element communicates something
- **Structure** — rigid grid, consistent type scale, no ad-hoc styles
- **Spark** — single electric accent color (cyan) representing *dhyuthi* — radiance

---

## Reusability

The codebase is structured to be reused for:
- **Dhyuthi 8.0** — update `src/config/event.ts` and `src/config/content.ts`
- **Another IEEE SB event** — swap logos, update config, swap accent color
- **Another student branch website** — replace brand assets, update config

No content is hardcoded in components. The design system is driven by CSS custom properties.

---

## Credits

- **Organization**: IEEE SCT Student Branch, Sree Chitra Thirunal College of Engineering
- **IEEE Logos**: Official IEEE brand assets (see `img/19-DCI-313 BrandGuidelines-Q3_FNL.pdf`)
- **Typefaces**: Space Grotesk, Inter, JetBrains Mono (Google Fonts)
