# Architecture — Dhyuthi 7.0

## System Architecture

```mermaid
flowchart TD
    User["Browser / User"]
    GHPages["GitHub Pages\nStatic Hosting"]
    ReactApp["React 19 App\nVite + TypeScript"]
    Config["src/config/\nevent.ts · navigation.ts · content.ts"]
    Layout["Layout Components\nNavbar · Footer"]
    Sections["Section Components\nHero · About · Highlights · Timeline\nAnnouncements · FAQ · CTA"]
    UIKit["UI Primitives\nButton · Badge · SectionHeading · Card"]
    Motion["Motion Layer\nReveal (IntersectionObserver)"]
    Assets["Assets\nIEEE Logo · SCTB Logo"]
    CSS["Global Design System\nindex.css — CSS custom properties"]

    User --> GHPages
    GHPages --> ReactApp
    ReactApp --> Config
    ReactApp --> Layout
    ReactApp --> Sections
    Sections --> UIKit
    Sections --> Motion
    Config --> Sections
    Config --> Layout
    UIKit --> CSS
    Sections --> CSS
    Sections --> Assets
    Layout --> Assets
```

---

## Data Flow

```mermaid
flowchart LR
    Event["event.ts\nOrg, dates, URLs, tagline"]
    Navigation["navigation.ts\nNav link definitions"]
    Content["content.ts\nHighlights, Timeline, FAQ,\nAnnouncements, Stats"]

    Event --> Hero
    Event --> About
    Event --> CTA
    Event --> Footer
    Event --> Navbar

    Navigation --> Navbar
    Navigation --> Footer

    Content --> About
    Content --> Highlights
    Content --> Timeline
    Content --> Announcements
    Content --> FAQ
```

---

## Deployment Architecture

```mermaid
flowchart LR
    Dev["Developer\nlocal code"]
    GitHub["GitHub\ncashiiyy/hackathon-website"]
    Build["npm run build\nvite build → dist/"]
    Deploy["npm run deploy\ngh-pages → gh-pages branch"]
    GHPages["GitHub Pages\nlive URL"]

    Dev --> GitHub
    GitHub --> Build
    Build --> Deploy
    Deploy --> GHPages
```

---

## Key Architectural Decisions

### 1. Static Single-Page Application

The website is a fully static SPA. There is no backend server, no API, and no database. All content is bundled at build time from TypeScript config files.

**Why**: Pre-event landing pages don't require dynamic data. Static hosting on GitHub Pages is free, fast, and globally distributed via CDN.

### 2. Content–Presentation Separation

All event-specific text, dates, and links live in `src/config/`. Components receive this data as imports — they never hardcode event content.

**Why**: This makes the codebase reusable. To create Dhyuthi 8.0, only the config files need to change.

### 3. CSS Custom Properties (not Tailwind, not CSS Modules)

The design system is implemented as a single `index.css` file with CSS custom properties. Components use scoped CSS files that reference the global tokens.

**Why**: Maximum control. No build-time class generation overhead. Easier to understand by any team member, not just Tailwind users.

### 4. No State Management Library

The only React state used is:
- `useState` in `Navbar` (scroll state, menu open state)
- `useState` in `FAQ` (which item is open)
- `useState` in `Hero` (mounted flag for entrance animation)

No Redux, no Zustand, no Context API needed. The app is content-driven, not interactive.

---

## File Structure

```
k:/PROJECTS/Dhyuthi/
│
├── src/
│   ├── App.tsx                    # Root component — assembles all sections
│   ├── main.tsx                   # Entry point
│   ├── index.css                  # Global design token system
│   │
│   ├── config/
│   │   ├── event.ts               # All event metadata
│   │   ├── navigation.ts          # Nav link definitions
│   │   └── content.ts             # Section content arrays
│   │
│   ├── assets/
│   │   ├── ieee-logo-white.png    # Official IEEE logo (white)
│   │   ├── ieee-logo-black.png    # Official IEEE logo (black)
│   │   ├── sctb-logo-white.png    # IEEE SCT SB logo (white)
│   │   └── sctb-logo-black.png    # IEEE SCT SB logo (black)
│   │
│   └── components/
│       ├── layout/
│       │   ├── Navbar/
│       │   └── Footer/
│       ├── ui/
│       │   ├── Button/
│       │   ├── Badge/
│       │   └── SectionHeading/
│       ├── sections/
│       │   ├── Hero/
│       │   ├── About/
│       │   ├── Highlights/
│       │   ├── Timeline/
│       │   ├── Announcements/
│       │   ├── FAQ/
│       │   └── CTA/
│       └── motion/
│           └── Reveal.tsx
│
├── public/
│   └── favicon.png                # IEEE logo as favicon
│
├── img/                           # Original logo assets from IEEE
│   ├── IEEE Logo_tag White 1.png
│   ├── IEEE Logo_tag Black(1) 1.png
│   ├── SB_White 1.png
│   └── SB_Black 1.png
│
├── Doc/                           # Project documentation
│
├── index.html                     # App entry HTML with SEO meta
├── vite.config.ts
├── tsconfig.json
├── tsconfig.node.json
├── package.json
└── eslint.config.js
```
