# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React-based Single Page Application (SPA) portfolio website built with Vite. The application showcases software development and security engineering expertise with a focus on clean, professional design and security-focused aesthetic.

## Development Commands

```bash
# Start development server (runs on http://localhost:5173/)
npm run dev

# Build for production (outputs to dist/ directory)
npm run build

# Run ESLint
npm run lint

# Preview production build locally
npm run preview
```

## Architecture

### Application Structure

The application follows a component-based SPA architecture with smooth scrolling navigation:

- **App.jsx**: Main application component that renders all sections in a single-page layout
- **Navigation.jsx**: Fixed navigation bar with scroll-based active section detection
- **Section Components**: Each major section (Home, Skills, Experience, Projects, Contact) is a self-contained component with its own CSS

### Navigation System

The app uses a scroll-based navigation system instead of React Router:

1. Each section has an `id` attribute matching the navigation item
2. Navigation component uses `useEffect` to track scroll position and update active state
3. Click handlers use `window.scrollTo()` with smooth scrolling behavior
4. Fixed offset (80px) compensates for the sticky navbar height

To add a new section:
1. Create component in `src/components/`
2. Import and add to `App.jsx` main layout
3. Update `navItems` array in `Navigation.jsx` with matching `id`
4. Ensure section has `id` attribute and `section` class

### Styling Approach

- Each component has a co-located CSS file (e.g., `Home.jsx` → `Home.css`)
- Global styles in `index.css` (CSS reset, scrollbar, base elements)
- Shared section styles in `App.css` (`.section`, `.container`, `.section-title`)
- Color scheme uses CSS custom properties defined inline (consider moving to `:root`)

**Color Palette**:
- Primary: `#60a5fa` (blue-400)
- Secondary: `#3b82f6` (blue-500)
- Dark background: `#0f172a` (slate-900)
- Light background: `#1e293b` (slate-800)
- Text: `#cbd5e1`, `#94a3b8`, `#ffffff`

### Component Patterns

All section components follow this pattern:
- Import corresponding CSS file
- Define data arrays/objects for content (skills, experiences, projects, etc.)
- Return semantic HTML with proper section `id` and classes
- Use consistent spacing and responsive design

## Content Customization

All placeholder content is in the component files:

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

The built application is fully static and can be deployed to:
- Vercel, Netlify, GitHub Pages, or any static hosting
- Requires updating `vite.config.js` base path for subdirectory deployments (e.g., GitHub Pages)
