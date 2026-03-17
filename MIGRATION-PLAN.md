# Next.js Static Export Migration Plan

**Issue:** [#16 — Implement Server-Side Rendering or Static Site Generation](https://github.com/Morn98/mentlabs/issues/16)

**Goal:** Migrate from Vite SPA to Next.js App Router with `output: 'export'` so AI crawlers see fully rendered HTML instead of an empty `<div id="root"></div>`.

---

## What Stays the Same

- All section components (Home, Skills, Experience, Projects, Contact) — content and JSX untouched
- All CSS files — co-located imports work identically in Next.js
- `scroll.js` utility — pure browser API
- `public/` assets (favicons, robots.txt, sitemap.xml, etc.)
- `vercel.json` — redirects and headers still work alongside Next.js on Vercel

## What Changes

- `index.html` + `main.jsx` → Next.js App Router `layout.js` + `page.js`
- Meta tags → Next.js `metadata` export in `layout.js`
- Google Fonts → `next/font/google`
- Interactive components get `"use client"` directive
- `@vercel/analytics/react` → `@vercel/analytics/next`
- Profile image moves from `src/assets/` to `public/`

---

## Phase 1: Project Configuration

1. **Swap dependencies** — remove `vite`, `@vitejs/plugin-react`, `eslint-plugin-react-refresh`; add `next`
2. **Update scripts** — `dev` → `next dev`, `build` → `next build`, etc.
3. **Create `next.config.js`** — `output: 'export'` + `images: { unoptimized: true }`
4. **Delete** `vite.config.js` and `index.html`

## Phase 2: App Router Structure

5. **Create `src/app/layout.js`** — root layout with:
   - Global CSS imports (`index.css`, `App.css`)
   - Google Fonts via `next/font/google`
   - `metadata` export with all SEO tags (title, OG, Twitter, geo, alternates, etc.)
   - `<noscript>` fallback content
   - `<Analytics />` component
6. **Create `src/app/page.js`** — Server Component composing all section components (replaces `App.jsx`)

## Phase 3: Component Updates

7. **Add `"use client"`** to: `Navigation.jsx`, `Home.jsx`, `Skills.jsx`, `Experience.jsx`, `Projects.jsx`, `Contact.jsx` (all use `react-icons` or browser APIs)
8. **Move `src/assets/ment.jpeg` → `public/ment.jpeg`** — update imports to string path `"/ment.jpeg"`
9. **Update analytics import** to `@vercel/analytics/next`

## Phase 4: Cleanup

10. **Update `.gitignore`** — add `.next/`, `out/`; remove `dist/`
11. **Update CLAUDE.md** to reflect new setup
12. **Test build** — verify `out/index.html` contains full rendered HTML, meta tags, structured data

---

## Gotchas

- **`react-icons`** likely won't work in Server Components → `"use client"` on all components using them
- **CSS ordering** may differ from Vite → visual check needed after migration
- **`output: 'export'` limitations** — no API routes, no middleware, no `headers()` in next.config (but `vercel.json` headers still work on Vercel)
- **`#root` CSS selector** in `index.css` becomes dead code (Next.js doesn't use `#root`)

## Deployment

No changes needed. Vercel auto-detects Next.js from `package.json` and switches from the Vite builder to the Next.js builder automatically. The `vercel.json` redirects and security headers continue to work at the edge.
