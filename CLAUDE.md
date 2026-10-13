# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React portfolio website built with Next.js (App Router) and static export. The application showcases software development and security engineering expertise with a focus on clean, professional design and security-focused aesthetic. All pages are pre-rendered to static HTML at build time for optimal SEO and AI crawler visibility.

## Development Commands

```bash
# Start development server (runs on http://localhost:3000/)
npm run dev

# Build for production (outputs to out/ directory as static HTML)
npm run build

# Run ESLint
npm run lint

# Start production server (for local testing)
npm start
```

## Architecture

### Application Structure

The application uses Next.js App Router with `output: 'export'` for static site generation:

- **src/app/layout.js**: Root layout with metadata, fonts, global CSS, and analytics
- **src/app/page.js**: Home page (Server Component) that composes all section components
- **src/components/**: Client components for each section, each with `"use client"` directive
- **src/components/SEO/StructuredData.jsx**: JSON-LD structured data for search engines

### Navigation System

The app uses a scroll-based navigation system (no routing):

1. Each section has an `id` attribute matching the navigation item
2. Links are plain `href="#id"` anchors; `html { scroll-behavior: smooth }` animates them (off under reduced motion)
3. `.section { scroll-margin-top: var(--nav-height) }` keeps sections clear of the fixed navbar (72px, 60px on mobile)
4. Navigation tracks scroll position to set the active item; the page bottom always selects the last item
5. `ScrollReveal.jsx` fades in `.reveal` elements on first view

To add a new section:
1. Create component in `src/components/` with `"use client"` directive
2. Import and add to `src/app/page.js`
3. Update `navItems` array in `Navigation.jsx` with matching `id`
4. Ensure section has `id` attribute and `section` class

### Styling Approach

- Each component has a co-located CSS file (e.g., `Home.jsx` → `Home.css`)
- Global styles in `src/index.css` (CSS reset, scrollbar, base elements)
- Shared section styles in `src/App.css` (`.section`, `.container`, `.section-title`)
- Google Fonts (Inter) loaded via `next/font/google` in layout.js
- Color scheme uses CSS custom properties defined in `:root`

**Color Palette**:
- Primary: `#00d4ff` (cyan), secondary `#d4a574`
- Backgrounds: `#0a0a0a` (dark), `#111111` (light), `#161616` (card)
- Text: `#e8e8e8`, `#a0a0a0`, `#888888` (muted; keep ≥ 4.5:1 contrast on the backgrounds)

### Component Patterns

All section components follow this pattern:
- `"use client"` directive at the top (required for react-icons and browser APIs)
- Import corresponding CSS file
- Define data arrays/objects for content (skills, experiences, projects, etc.)
- Return semantic HTML with proper section `id` and classes
- Use consistent spacing and responsive design

### SEO & Metadata

- All meta tags (title, description, OG, Twitter, geo) are defined in `src/app/layout.js` via Next.js `metadata` export
- Structured data (JSON-LD) is rendered by `src/components/SEO/StructuredData.jsx`
- Static images served from `public/` (profile image, favicons)
- `vercel.json` handles redirects (non-www → www) and security headers

## Content Customization

All content is in the component files:

- **Home.jsx**: Introduction text and CTA buttons
- **Skills.jsx**: `skillCategories` and `certifications` arrays
- **Experience.jsx**: `experiences` array (work history and education)
- **Projects.jsx**: `projects` array with technologies and highlights
- **Contact.jsx**: `contactMethods` array with email, GitHub, LinkedIn links

## Responsive Design

The application is desktop-first with mobile breakpoints:
- `@media (max-width: 768px)`: Tablet adjustments
- `@media (max-width: 480px)`: Mobile adjustments

All components include responsive styles in their CSS files.

## Deployment

The site deploys to Vercel via Git integration (push to main → auto build → deploy):
- `next build` produces static HTML in `out/` directory (`output: 'export'`)
- Vercel auto-detects Next.js and uses the appropriate builder
- `vercel.json` configures edge-level redirects and security headers
- No server required — fully static CDN deployment
