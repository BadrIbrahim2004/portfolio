# Portfolio Website

A modern, production-ready single-page portfolio website built with React, Vite, and Bootstrap 5. Designed with a premium, minimal aesthetic inspired by leading tech companies like Stripe and Vercel.

## 🎯 Features

- **Fully Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI** - Premium, minimal design with smooth animations and interactions
- **Smooth Scrolling Navigation** - Active link highlighting and scroll-to-section functionality
- **Sticky Navbar** - Changes appearance on scroll with mobile hamburger menu
- **Multiple Sections**:
  - Hero with animated typing effect
  - About with feature cards
  - Education timeline
  - Skills categorized by expertise
  - Featured projects with hover effects
  - Contact form with validation
  - Footer with social links
- **Production-Ready**:
  - Clean, maintainable code structure
  - Reusable components
  - Lazy loading and performance optimized
  - Accessible (a11y) standards followed

## 🛠 Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **JavaScript (ES6+)** - No TypeScript
- **Bootstrap 5** - CSS framework
- **React Hooks** - useState, useEffect, useRef

## 📁 Project Structure

```
/src
  /components
    - Navbar.jsx
    - Footer.jsx
    - Button.jsx
    - Card.jsx
    - SectionTitle.jsx
    - SkillBadge.jsx

  /sections
    - Hero.jsx
    - About.jsx
    - Education.jsx
    - Skills.jsx
    - Projects.jsx
    - Contact.jsx

  /assets
    - styles.css (global styles & design system)
    - components.css (component styles)
    - sections.css (section-specific styles)

  /data
    - portfolioData.js (single source of truth for all content)

  /utils
    - scrollUtils.js (scroll utilities)

  App.jsx
  main.jsx
```

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ and npm/yarn

### Installation

1. **Clone or extract the project**

   ```bash
   cd portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

   The site will open at `http://localhost:5173`

4. **Build for production**
   ```bash
   npm run build
   ```

## 🎨 Design System

### Colors

- **Background**: `#0f172a`
- **Surface**: `#111827`
- **Primary**: `#6366f1`
- **Primary Hover**: `#818cf8`
- **Secondary**: `#22d3ee`
- **Text**: `#ffffff`
- **Text Muted**: `#94a3b8`

### Typography

- **Font**: Inter (body), Poppins (headings)
- **Hero**: 52-64px bold
- **Section Titles**: 32-40px
- **Body**: 16-18px

### Spacing & Border Radius

- **Max Width**: 1200px
- **Section Padding**: 80px (desktop), 60px (tablet), 40px (mobile)
- **Border Radius**: 16px (lg), 12px (md), 8px (sm)

## ⚙️ Configuration

All content is managed through **`/src/data/portfolioData.js`**. To customize your portfolio:

### Update Personal Info

```javascript
personal: {
  name: "Your Name",
  title: "Your Title",
  email: "your.email@example.com",
  profileImage: "url-to-your-image",
  // ... more fields
}
```

### Add/Edit Projects

```javascript
projects: [
  {
    title: "Project Name",
    description: "Project description",
    image: "url-to-image",
    technologies: ["Tech1", "Tech2"],
    liveUrl: "https://...",
    githubUrl: "https://...",
  },
];
```

### Customize Skills

```javascript
skills: [
  {
    category: "Frontend",
    items: ["React", "HTML5", ...]
  }
]
```

## 🎯 Component Guide

### Button Component

```jsx
<Button
  variant="primary" // primary | secondary | outline
  size="md" // sm | md | lg
  onClick={handleClick}
>
  Click Me
</Button>
```

### Card Component

```jsx
<Card hover variant="default" className="custom-class">
  Content goes here
</Card>
```

### SectionTitle Component

```jsx
<SectionTitle
  title="Section Name"
  subtitle="Optional subtitle"
  center={true}
  animated={true}
/>
```

### SkillBadge Component

```jsx
<SkillBadge skill="React" icon="⚛️" />
```

## 📱 Responsive Design

- **Desktop**: Full layout with all features
- **Tablet (768px)**: Optimized grid, adjusted spacing
- **Mobile (480px)**: Single column layout, hamburger menu

## ✨ Animations

- Fade-in-up on scroll
- Slide-in effects on hero content
- Button glow and lift effects
- Card hover animations
- Typing animation in hero
- Smooth scrolling between sections
- Timeline animations
- Form validation feedback

## 🔍 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 Customization Guide

### Change Colors

Edit CSS variables in `/src/assets/styles.css`:

```css
:root {
  --bg-primary: #0f172a;
  --color-primary: #6366f1;
  /* ... more variables */
}
```

### Add Sections

1. Create a new component in `/src/sections/`
2. Import and add to `App.jsx`
3. Add content to `portfolioData.js`

### Update Styling

- Global styles: `/src/assets/styles.css`
- Component styles: `/src/assets/components.css`
- Section styles: `/src/assets/sections.css`

## 🚀 Deployment

### Deploy to Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

1. Build the project: `npm run build`
2. Push `dist` folder to Netlify

### Deploy to GitHub Pages

```bash
npm run build
# Push dist to gh-pages branch
```

## 📊 Performance

- Lazy loading images
- Optimized CSS and JavaScript
- Minimal dependencies
- No external UI libraries except Bootstrap
- Clean component architecture

## 🤝 Contributing

Feel free to fork and customize this template for your own portfolio!

## 📄 License

This project is open source and available for personal and commercial use.

---

**Built with ♥ using React & Bootstrap**
