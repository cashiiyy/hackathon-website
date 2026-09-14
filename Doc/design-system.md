# Design System — Dhyuthi 7.0

## Visual Concept: "Signal · Structure · Spark"

### Why this direction?

Dhyuthi means *radiance* in Sanskrit. The design concept translates this meaning into a visual language:

- **Signal** — Every element has a job. Nothing decorative without purpose.
- **Structure** — A strict grid, a consistent type scale, and design tokens ensure the layout never looks accidental.
- **Spark** — One bright accent (electric cyan) breaks through the dark. It represents light, energy, and Dhyuthi's literal meaning.

The direction is **editorial + technical + premium**, not "generic dark neon startup". It references the aesthetic of high-end technical documentation, conference identity systems, and scientific publication design — all appropriate for an IEEE event.

---

## Color Palette

| Token | Hex | Usage |
|---|---|---|
| `--color-bg` | `#06060A` | Page background — near-black with a faint cool undertone |
| `--color-surface` | `#0E0E16` | Elevated surfaces: cards, nav background (on scroll) |
| `--color-surface-2` | `#131324` | Secondary elevated — inner card sections |
| `--color-surface-3` | `#1A1A2E` | Hover states on interactive surfaces |
| `--color-primary` | `#3B4CFF` | IEEE electric blue — buttons, active states, primary brand |
| `--color-primary-dim` | `rgba(59,76,255,0.15)` | Primary at low opacity — badge backgrounds |
| `--color-accent` | `#7DF9FF` | Electric cyan — Dhyuthi's "radiance" — text highlights, icons, active links |
| `--color-accent-dim` | `rgba(125,249,255,0.12)` | Accent at low opacity |
| `--color-text` | `#F0F0F8` | Primary text — off-white with slight coolness |
| `--color-text-secondary` | `#A8A8C0` | Body text, descriptions |
| `--color-muted` | `#6B6B8A` | Labels, timestamps, supporting information |
| `--color-border` | `#1E1E32` | Subtle structural dividers |
| `--color-border-light` | `#2A2A42` | More visible borders on interactive elements |

### Why these specific colors?

- **`#3B4CFF` (primary)**: References IEEE's institutional blue identity while being more saturated and modern. Communicates credibility.
- **`#7DF9FF` (accent)**: A single, restrained neon color. Cyan reads as "electricity" and "light" — both technically relevant (IEEE = electrical engineering) and semantically aligned with Dhyuthi (radiance/light).
- **`#06060A` (background)**: Not pure black. The faint blue undertone (0A in the B channel) creates subtle depth and unifies with the blue/cyan accent family.
- **No random secondary colors**: A single accent prevents visual noise. Each section feels coherent.

---

## Typography

### Font Families

| Role | Family | Why |
|---|---|---|
| Display (headings, titles) | **Space Grotesk** | Geometric sans-serif, contemporary, editorial. Wide language support. The `SP` combination in "DHYUTHI" looks especially strong in this face. |
| Body (paragraphs) | **Inter** | The gold standard for readable UI body text. Neutral, professional, optimized for screens. |
| Monospace (labels, timestamps, codes) | **JetBrains Mono** | Used sparingly for technical/data-like elements. Creates a "system readout" quality appropriate for IEEE technical content. |

### Type Scale

```
Display (hero title):   clamp(4rem, 11vw, 8rem)
Section heading:        clamp(1.875rem, 4vw, 3rem)
CTA title:              clamp(2.25rem, 6vw, 3.75rem)
Body large:             1.125rem (18px)
Body:                   1rem (16px)
Small/meta:             0.875rem (14px)
Label/mono:             0.75rem (12px), 10px
```

### Typography Rules

1. Headings always use `--font-display` (Space Grotesk), never body font.
2. Labels, timestamps, status indicators always use `--font-mono` (JetBrains Mono).
3. Body text always uses `--font-body` (Inter).
4. `letter-spacing: var(--tracking-tight)` on large display text prevents optical looseness.
5. `letter-spacing: var(--tracking-widest)` on small mono labels creates a structured "data" quality.

---

## Spacing System

Based on a 4px base unit (0.25rem):

```
--space-1:  0.25rem  (4px)
--space-2:  0.5rem   (8px)
--space-3:  0.75rem  (12px)
--space-4:  1rem     (16px)
--space-6:  1.5rem   (24px)
--space-8:  2rem     (32px)
--space-10: 2.5rem   (40px)
--space-12: 3rem     (48px)
--space-16: 4rem     (64px)
--space-20: 5rem     (80px)
--space-24: 6rem     (96px)
```

Sections use `padding: var(--space-24) 0` on desktop, `var(--space-16) 0` on mobile.

---

## Border Radius

```
--radius-sm:   0.25rem  (sharp — buttons, badges, timeline dots)
--radius-md:   0.5rem   (cards)
--radius-lg:   0.75rem  (larger cards, panels)
--radius-xl:   1rem     (CTA box)
--radius-full: 9999px   (pills, scrollbar)
```

The design uses **predominantly sharp corners** (`sm` = 4px, `md` = 8px). This is intentional — it communicates precision and structure, appropriate for a technical institution. Larger radius is used only where content needs visual "softness" (the CTA section, for example).

---

## Components

### Button

Three variants:
- **Primary** — Filled `--color-primary` (#3B4CFF) — main CTAs (Register Now)
- **Ghost** — Transparent + `--color-border-light` border — secondary CTAs (Explore Event)
- **Outline** — `--color-accent` border + text — used when registration is not yet open (Follow for Updates)

Three sizes: `sm`, `md`, `lg`.

### Badge

Used for announcement status labels and timeline TBA indicators. Variants map to semantic meaning: `new` (green), `upcoming` (cyan), `update` (yellow), `important` (red), `default` (muted).

### SectionHeading

Every section starts with a `SectionHeading` that has:
1. A mono `label` (e.g., "ABOUT THE EVENT") — provides context
2. A display `title` (e.g., "What is Dhyuthi?") — the heading itself
3. Optional `subtitle` paragraph

This pattern ensures consistent visual rhythm across all sections.

### Card (Highlight cards, Announcement cards)

Consistent base style:
- `--color-surface` background
- `1px solid --color-border` border
- `var(--radius-lg)` radius
- `translateY(-4px)` on hover with border color transition

---

## Motion System

### Scroll Reveal (`Reveal` component)

All sections use `IntersectionObserver` via the `Reveal` wrapper. Elements animate with:
```css
opacity: 0 → 1
transform: translateY(24px) → translateY(0)
transition: 600ms ease
```

Stagger delays: `0ms`, `100ms`, `200ms`, `300ms`, `400ms`, `500ms` via delay class props.

### Hero Title

Character-by-character reveal using CSS `@keyframes charReveal`:
```css
@keyframes charReveal {
  to { opacity: 1; transform: translateY(0); }
}
```
Each letter is delayed by `i * 60ms`, creating a "printing" effect. Not excessive — completes in ~420ms for "DHYUTHI".

### Background (Hero)

A subtle CSS grid pattern (linear-gradient lines) with a radial mask. **No canvas, no particles, no WebGL.** The grid communicates "technical structure" without distraction.

Two soft glows: one primary-blue in the top-left, one cyan in the bottom-right. These are `filter: blur(120px)` divs — not animated, not attention-grabbing. They add depth to the black background.

### Motion Rules

- Only reveal animations on first intersection (no re-trigger on scroll back up)
- All transitions under 600ms
- No looping animations on content elements
- `prefers-reduced-motion` collapses all reveal animations to instant-visible

---

## Responsive Design

| Breakpoint | Layout behavior |
|---|---|
| `< 480px` | Full-width CTAs, single-column highlights, stacked hero meta |
| `< 768px` | Hamburger menu, stacked About grid, mobile section padding |
| `< 1024px` | 2-col highlights, reduced About stats panel width |
| `>= 1200px` | Full desktop layout, max-width container, 4-col highlights |

The navbar switches from a full horizontal link list (desktop) to a slide-in drawer (mobile) at 768px.

---

## Accessibility

- `role="list"` and `role="listitem"` on FAQ and Timeline items
- `aria-expanded` on FAQ accordion buttons
- `aria-label` and `aria-hidden` throughout
- `aria-controls` and `id` linking on FAQ question/answer pairs
- `hidden` attribute (not `display:none`) on collapsed FAQ answers — allows screen readers to understand state
- `:focus-visible` outline using `--color-accent` (2px, offset 3px)
- `prefers-reduced-motion` media query disables all CSS animations
- All images have meaningful `alt` text
- Proper heading hierarchy: `h1` in Hero, `h2` in all sections, `h3` for cards
