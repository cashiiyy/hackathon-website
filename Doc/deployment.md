# Deployment — Dhyuthi 7.0

## Current Deployment: GitHub Pages

The website is deployed to GitHub Pages using the `gh-pages` npm package.

### Prerequisites

- Node.js 18+
- npm 9+
- Git configured with push access to the repository

### Production Deployment Steps

```bash
# 1. Ensure all changes are committed
git status
git add .
git commit -m "Update Dhyuthi 7.0 content"

# 2. Build and deploy to GitHub Pages
npm run deploy

# This runs: npm run build && gh-pages -d dist
```

### What happens

1. `npm run build` — Vite builds the production bundle into `/dist`
2. `gh-pages -d dist` — Pushes the `dist/` directory to the `gh-pages` branch
3. GitHub Pages serves the `gh-pages` branch at the configured URL

### Live URL

The site is served from:
```
https://cashiiyy.github.io/hackathon-website/
```

**Note**: The `vite.config.ts` has `base: "./"` to ensure all asset paths are relative — required for GitHub Pages subdirectory deployments.

---

## Local Development

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:5173)
npm run dev

# Build production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## Environment Variables

This is a fully static site. There are no environment variables or secrets required for the current implementation.

If a backend is added in the future, create a `.env` file:
```bash
VITE_API_URL=https://api.dhyuthi.ieeesctb.in/api/v1
```

---

## Updating Content

All event content is in `src/config/`. To update:

1. Edit `src/config/event.ts` — event dates, venue, registration URL
2. Edit `src/config/content.ts` — announcements, timeline, FAQ, highlights
3. Run `npm run deploy`

---

## CI/CD (Future Recommendation)

A GitHub Actions workflow could automate deployment on every push to `main`:

```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

---

## Repository Requirements

- Repository must remain **public** for GitHub Pages free hosting
- The `gh-pages` branch should not be deleted
- The `main` branch is the source of truth for all development
