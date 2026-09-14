# Decisions — Dhyuthi 7.0

Architecture Decision Records (ADRs) for the Dhyuthi 7.0 website.

---

## Decision 001 — Retain React + Vite, migrate to TypeScript

**Context**: The existing repository used React 19 + Vite 7 + JavaScript.

**Decision**: Retain React and Vite. Add TypeScript.

**Reason**:
- React and Vite are already installed and working. Migrating to Next.js or another framework would add complexity with zero user-facing benefit for a static event landing page.
- TypeScript adds compile-time safety for configuration files and component props — critical when content is sourced from typed config objects.
- TypeScript is worth adding even mid-project because the config-driven architecture means the type contracts are load-bearing.

**Tradeoff**: Existing `.jsx` files needed to be rewritten as `.tsx`. This is acceptable because all files were being rebuilt anyway.

---

## Decision 002 — Single-page architecture, no routing

**Context**: The website is a pre-event landing page for Dhyuthi 7.0.

**Decision**: Single page (`/`) with smooth-scroll anchors. No `react-router-dom`.

**Reason**:
- A landing page's information is linear. The user scrolls from top to bottom.
- Multi-page routing would require separate URL handling, page transitions, and would break the continuous narrative flow of the design.
- `react-router-dom` would add ~14KB to the bundle for zero benefit.
- All sections are reachable via anchor links (`#about`, `#timeline`, etc.) — these work natively in browsers and are SEO-compatible.

**Tradeoff**: Cannot link directly to a specific section via URL (e.g., `/schedule`). This is acceptable for a landing page. If a `/schedule` page were needed in the future, `react-router-dom` could be added.

---

## Decision 003 — Content-driven architecture with TypeScript config files

**Context**: Event websites often hardcode content inside JSX, making them hard to update.

**Decision**: All section content lives in `src/config/content.ts`, `src/config/event.ts`, and `src/config/navigation.ts`.

**Reason**:
- Separating content from presentation is fundamental software engineering. It is also explicitly evaluated in the IEEE Web Team task brief.
- TypeScript interfaces (`Highlight`, `TimelineItem`, `FAQItem`, `Announcement`) enforce that all data has the required shape.
- Content editors can update the website without understanding React.
- Future editions (Dhyuthi 8.0) only need config updates — the components remain unchanged.

**Tradeoff**: For a small site, this may feel over-engineered. However, the task brief explicitly evaluates reusability, making this architecture appropriate.

---

## Decision 004 — Vanilla CSS with CSS custom properties, no Tailwind or CSS-in-JS

**Context**: Styling options considered: Tailwind CSS, Styled Components, CSS Modules, Vanilla CSS.

**Decision**: Vanilla CSS with CSS custom properties as design tokens.

**Reason**:
- **Design ownership**: When you write `.hero__title { font-size: clamp(4rem, 11vw, 8rem); }`, the intent is explicit. With Tailwind classes, the mapping from class to visual is opaque.
- **Token system**: CSS custom properties in `index.css` create a single source of truth for all design values (colors, spacing, typography, radius, shadows). All component CSS files reference these tokens — no magic numbers.
- **Evaluator readability**: An IEEE web evaluator can read any `.css` file and understand the design system immediately.
- **No build tooling lock-in**: The CSS is portable. It can be extracted and used in any environment without Tailwind PostCSS plugins.

**Tradeoff**: No utility classes for one-off layout needs (e.g., `flex items-center`). Workaround: common layout utilities (`.container`, `.section`, `.text-label`, `.text-display`) are defined in `index.css`.

---

## Decision 005 — No backend implementation

**Context**: The brief says backend implementation is optional.

**Decision**: No backend. Static site only. Content from TypeScript config files.

**Reason**:
- A pre-event landing page has no data requirements that need a backend (no forms, no dynamic CMS, no real-time data).
- Adding a backend would increase deployment complexity (no free static hosting; needs a server), maintenance burden, and security surface.
- Content updates are infrequent enough to be managed via file edits + `npm run deploy`.
- A proposed backend architecture is documented in `Doc/backend-architecture.md` for future reference.

**Tradeoff**: Content editors need git access and Node.js to update the site. A backend + admin CMS would lower the barrier for non-technical content updates.

---

## Decision 006 — CSS animations over animation libraries

**Context**: Framer Motion, React Spring, and GSAP are popular React animation libraries.

**Decision**: CSS keyframes + IntersectionObserver. No animation libraries.

**Reason**:
- All animations in this project (scroll reveal, hero character reveal, hover states) are achievable with CSS.
- Framer Motion adds ~30KB gzipped to the bundle.
- CSS animations run on the compositor thread — they are hardware-accelerated by default.
- The "Reveal" component is 40 lines of TypeScript. It covers 100% of the animation use cases on this site.
- Installing a library for a problem CSS can solve is unnecessary complexity.

**Tradeoff**: Complex sequence animations (staggered cards, page transitions) are harder to implement in pure CSS. If future editions require complex choreography, Framer Motion could be added without changing the existing code.

---

## Decision 007 — Typographic wordmark for Dhyuthi, not a graphic logo

**Context**: No official Dhyuthi graphic logo exists in the repository or provided assets. Only IEEE and IEEE SCT SB logos are available.

**Decision**: "DHYUTHI" is rendered as a typographic wordmark using Space Grotesk (display font) with a gradient fill. No fabricated logo.

**Reason**:
- Fabricating an official logo would misrepresent the organization's brand.
- The task brief instructs not to invent official content.
- Many premium events use purely typographic identity (e.g., major tech conferences). A well-typeset word is not a limitation.
- The Space Grotesk rendering at 8rem with a white-to-cyan gradient is visually distinctive and immediately recognizable.

**Tradeoff**: The event does not have a standalone logo mark for use in small contexts (favicon, social). The IEEE logo is used as the favicon instead. If an official Dhyuthi logo is designed, it can be swapped in by replacing `src/assets/dhyuthi-logo.svg` and updating the Hero component.
