# Portfolio Development Guide

## Project Overview

This is a production-ready, premium single-page portfolio website built with React 18, Vite, Bootstrap 5, and JavaScript (ES6+).

## Technology Stack

- **React 18** - UI library with Hooks
- **Vite** - Next generation build tool
- **Bootstrap 5** - CSS framework (no Tailwind)
- **React Hooks** - useState, useEffect, useRef
- **JavaScript ES6+** - No TypeScript
- **Functional Components** - No class components

## Project Architecture

### Key Principles

1. **Single Source of Truth** - All content comes from `/src/data/portfolioData.js`
2. **Reusable Components** - DRY principle throughout
3. **Modular Design** - Clear separation of concerns
4. **Production-Ready** - Clean, maintainable, scalable code
5. **No External UI Libraries** - Only Bootstrap for CSS framework

### File Structure

```
/src
  /components      - Reusable UI components
  /sections        - Page sections (Hero, About, Education, etc.)
  /data            - portfolioData.js (content management)
  /assets          - CSS files (styles, components, sections)
  /utils           - Helper functions (scrollUtils)
  App.jsx          - Main app component
  main.jsx         - Entry point
```

## Development Workflow

### 1. Adding Content

All content is managed in `/src/data/portfolioData.js`. Update this file to customize:

- Personal information
- About section
- Education history
- Skills
- Projects
- Contact information

### 2. Creating Components

When creating new components:

1. Use functional components only
2. Use React Hooks (useState, useEffect, useRef)
3. Follow the naming convention: `ComponentName.jsx`
4. Place in appropriate folder (`/components` or `/sections`)
5. Export as default export
6. Add styling to corresponding CSS file

### 3. Styling Guidelines

- **Global Styles**: `/src/assets/styles.css`
- **Component Styles**: `/src/assets/components.css`
- **Section Styles**: `/src/assets/sections.css`
- **CSS Variables**: Defined in `:root` for consistent theming
- **No Inline Styles**: Use CSS classes instead
- **Bootstrap Grid**: Use Bootstrap 5 grid system

## Design System

### Color Palette

```css
--bg-primary: #0f172a (Main background) --bg-secondary: #111827
  (Secondary background) --color-primary: #6366f1 (Primary accent)
  --color-hover: #818cf8 (Hover state) --color-secondary: #22d3ee
  (Secondary accent) --color-text: #ffffff (Main text)
  --color-text-muted: #94a3b8 (Muted text);
```

### Typography

- **Font Family**: Inter (body), Poppins (headings)
- **Hero Title**: 52-64px bold
- **Section Titles**: 32-40px
- **Body Text**: 16-18px

### Spacing System

```css
--spacing-xs: 0.5rem --spacing-sm: 1rem --spacing-md: 1.5rem --spacing-lg: 2rem
  --spacing-xl: 3rem --spacing-2xl: 4rem --spacing-3xl: 5rem;
```

## Common Tasks

### Update Profile Image

In `/src/data/portfolioData.js`:

```javascript
profileImage: "path-to-your-image";
```

### Add a New Skill

In `/src/data/portfolioData.js`, add to the `skills` array:

```javascript
{
  category: "New Category",
  items: ["Skill1", "Skill2"]
}
```

### Add a New Project

In `/src/data/portfolioData.js`, add to the `projects` array:

```javascript
{
  id: 5,
  title: "Project Name",
  description: "Short description",
  image: "image-url",
  technologies: ["Tech1", "Tech2"],
  liveUrl: "https://...",
  githubUrl: "https://..."
}
```

### Customize Colors

Edit CSS variables in `/src/assets/styles.css`:

```css
:root {
  --color-primary: #your-color;
  /* ... more variables */
}
```

## Component Documentation

### Button Component

Props:

- `variant`: "primary" | "secondary" | "outline"
- `size`: "sm" | "md" | "lg"
- `onClick`: Function
- `href`: Link (renders as anchor tag)
- `disabled`: Boolean
- `type`: "button" | "submit"

### Card Component

Props:

- `variant`: "default" | "glass"
- `hover`: Boolean (adds hover-lift effect)
- `className`: Additional CSS classes
- `children`: Content

### SectionTitle Component

Props:

- `title`: String (required)
- `subtitle`: String (optional)
- `center`: Boolean (default: true)
- `animated`: Boolean (default: true)

### SkillBadge Component

Props:

- `skill`: String (required)
- `icon`: String (optional)
- `className`: Additional CSS classes

## Running the Project

```bash
# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm preview
```

## Animation Classes

```css
.fade-in-up       - Fade in with upward movement
.fade-in          - Simple fade in
.slide-in-left    - Slide in from left
.slide-in-right   - Slide in from right
.slide-in-down    - Slide in from top
```

## Performance Tips

1. Use lazy loading for images
2. Minimize CSS file sizes
3. Avoid unnecessary re-renders
4. Keep component structure clean
5. Use proper key props in lists

## Accessibility (a11y)

- All buttons and links have proper labels
- Form inputs have associated labels
- ARIA attributes used where necessary
- Keyboard navigation supported
- Sufficient color contrast

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Responsive Design

- **Desktop**: 1200px max-width
- **Tablet**: 768px breakpoint
- **Mobile**: 480px breakpoint

## Deployment

### Vercel (Recommended)

```bash
vercel
```

### Netlify

1. `npm run build`
2. Deploy `/dist` folder

### GitHub Pages

1. `npm run build`
2. Push `/dist` to gh-pages branch

## Code Style

- Use ES6+ syntax
- Use const/let (no var)
- Use arrow functions
- Use template literals
- Proper prop validation
- Clean code principles

## Common Issues & Solutions

### Port Already in Use

```bash
npm run dev -- --port 5174
```

### Build Errors

1. Check for syntax errors
2. Verify all imports are correct
3. Ensure no circular dependencies
4. Clear node_modules and reinstall if needed

### Styling Issues

1. Check CSS file imports in App.jsx
2. Verify Bootstrap CSS is imported
3. Check for CSS specificity conflicts
4. Use browser DevTools to debug

## Resources

- [React Docs](https://react.dev)
- [Vite Docs](https://vitejs.dev)
- [Bootstrap 5 Docs](https://getbootstrap.com/docs/5.0)
- [MDN Web Docs](https://developer.mozilla.org)

---

**Last Updated**: 2026
**Version**: 1.0.0
