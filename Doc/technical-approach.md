# Technical Approach — Dhyuthi 7.0

## Why React?

The existing repository used React 19. Continuing with React ensures:
1. No migration risk or learning overhead
2. Access to the existing component patterns
3. Ecosystem maturity for future contributors from the IEEE SB team

React is appropriate for a content-heavy event website because the component model maps naturally to the visual structure (sections → components → primitives).

## Why Vite?

Vite 7 was already in the project. It provides:
- Sub-second HMR during development
- Tree-shaking and code splitting out of the box
- No configuration overhead for TypeScript

The build output (`213KB JS, 27KB CSS`, gzipped to `66KB + 5KB`) is well within acceptable limits for a landing page.

## Why TypeScript?

The original project used JavaScript (`.jsx`). TypeScript was added for:
1. **Type-safe config files** — `event.ts`, `content.ts`, `navigation.ts` export typed interfaces. If a component references `eventConfig.registrationOpen`, TypeScript ensures the property exists and is a boolean.
2. **Component prop validation** — All component props are defined in TypeScript interfaces, catching errors at compile time.
3. **Reusability documentation** — Types serve as documentation. `Highlight`, `TimelineItem`, `Announcement`, `FAQItem` interfaces define exactly what shape data arrays must take.

## Why Vanilla CSS?

**Not Tailwind, not CSS Modules, not styled-components.**

Reasons:
1. **Design system ownership** — CSS custom properties in `index.css` are the single source of truth for all design tokens. Any team member can read and understand them.
2. **No build-time overhead** — No Tailwind class generation, no styled-components runtime.
3. **Scoped CSS files per component** — Each component has its own `.css` file. This provides scoping without the complexity of CSS Modules.
4. **Evaluator-readable** — An evaluator looking at any `.css` file can immediately understand the design logic.

## Why No Animation Library (Framer Motion, etc.)?

The animations in this project are:
1. Scroll reveal (CSS transition + IntersectionObserver)
2. Hero character reveal (CSS `@keyframes`)
3. Hamburger menu transition (CSS `transform`)
4. Button hover states (CSS `transition`)

All of these are achievable with CSS. Installing Framer Motion for effects achievable in CSS would:
- Add ~30KB to the bundle
- Create a build dependency that requires ongoing maintenance
- Be harder to explain during evaluation ("why did you need a library for a fade-in?")

## Why No Backend?

The brief explicitly states backend is optional. A pre-event landing page has no backend requirements:
- There is no form submission (registration goes to an external URL)
- There is no dynamic content (announcements come from config, not a CMS)
- There is no authentication

Adding a backend would increase complexity, maintenance burden, and deployment overhead with zero user-facing benefit. A proposed future architecture is documented in `backend-architecture.md`.

## How Assets Are Handled

Official IEEE and IEEE SCT SB logos are in:
1. `img/` — Original files (checked into git for reference)
2. `src/assets/` — Renamed copies for Vite import (clean names, no spaces)

Logo imports in components use Vite's asset pipeline:
```typescript
import ieeeLogo from "@/assets/ieee-logo-white.png";
```

Vite fingerprints assets in production (`ieee-logo-white-CZK4o9wl.png`) for cache busting.

## How Content Is Separated from Presentation

Content data lives in `src/config/content.ts` as typed arrays. Components import and render this data:

```typescript
// content.ts — data definition
export const highlights: Highlight[] = [
  { id: "h1", icon: "◈", title: "Technical Competitions", description: "..." }
];

// Highlights.tsx — rendering
import { highlights } from "@/config/content";
highlights.map((item) => <HighlightCard key={item.id} {...item} />)
```

A content editor does not need to understand React to update event content. They only need to edit `content.ts`.

## Path Aliases

`@/` maps to `src/` via Vite config + TypeScript `paths`:
```typescript
import Navbar from "@/components/layout/Navbar";
```
This eliminates brittle relative import chains (`../../../../`).
