# Mentlabs - Personal Landing Page

A modern, responsive portfolio website built with React showcasing software development and security engineering expertise.

## Features

- **Single Page Application (SPA)** with smooth scrolling navigation
- **Responsive Design** - Works beautifully on desktop, tablet, and mobile
- **Modern UI/UX** - Clean, professional design with security-focused aesthetic
- **Modular Components** - Easy to customize and extend
- **No Backend Required** - Fully client-side, static deployment

## Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx      # Sticky navigation bar
│   │   ├── Home.jsx             # Hero section
│   │   ├── Skills.jsx           # Skills and certifications
│   │   ├── Experience.jsx       # Work experience timeline
│   │   ├── Projects.jsx         # Personal projects showcase
│   │   └── Contact.jsx          # Contact information
│   ├── App.jsx                  # Main app component
│   ├── App.css                  # Global app styles
│   └── index.css                # Base styles and CSS reset
└── package.json
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173/`

## Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment to any static hosting service.

## Customization Guide

### Personal Information

#### 1. Home Section
Edit `/src/components/Home.jsx`:
- Update the title and description
- Modify call-to-action buttons

#### 2. Skills & Certifications
Edit `/src/components/Skills.jsx`:
- Modify `skillCategories` array to add/remove skill categories
- Update `certifications` array with your actual certifications
- Add certification details: name, issuer, year, description

#### 3. Experience & Education
Edit `/src/components/Experience.jsx`:
- Update the `experiences` array with your work history
- Add your educational background
- Modify job titles, companies, periods, and responsibilities

#### 4. Projects
Edit `/src/components/Projects.jsx`:
- Update the `projects` array with your personal projects
- Include project name, period, description, technologies, and highlights

#### 5. Contact Information
Edit `/src/components/Contact.jsx`:
- Replace placeholder email, GitHub, and LinkedIn URLs with your actual links
- Update the `contactMethods` array

### Styling

The application uses a consistent color scheme based on blue tones:

- **Primary Color**: `#60a5fa` (blue-400)
- **Secondary Color**: `#3b82f6` (blue-500)
- **Background Dark**: `#0f172a` (slate-900)
- **Background Light**: `#1e293b` (slate-800)

To customize colors, search and replace these hex values across the CSS files.

### Navigation

The navigation bar is sticky and automatically highlights the active section based on scroll position. To add a new section:

1. Create a new component in `/src/components/`
2. Import it in `/src/App.jsx`
3. Add the section to the main layout
4. Update the `navItems` array in `/src/components/Navigation.jsx`

## Deployment

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

```bash
npm install -g netlify-cli
netlify deploy --prod
```

### Deploy to GitHub Pages

1. Update `vite.config.js` to set the correct base path
2. Build the project: `npm run build`
3. Deploy the `dist/` folder to GitHub Pages

## Technologies Used

- **React** - UI library
- **Vite** - Build tool and development server
- **CSS3** - Styling with modern CSS features
- **JavaScript (ES6+)** - Modern JavaScript features

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Next Steps

1. Replace all placeholder content with your actual information
2. Add your own projects and experiences
3. Update contact links (email, GitHub, LinkedIn)
4. Customize colors and styling to match your personal brand
5. Consider adding:
   - A blog section
   - Testimonials
   - A resume download link
   - Integration with analytics (Google Analytics, Plausible, etc.)
