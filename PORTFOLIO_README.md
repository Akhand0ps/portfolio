# Backend-Focused Developer Portfolio

A minimal, engineer-first portfolio website built for backend developers targeting systems-oriented roles. Designed to be reviewed by backend engineers, not designers.

## Tech Stack

- **React 19** - UI library
- **Vite 7** - Build tool and dev server
- **Tailwind CSS 4** - Utility-first CSS framework  
- **Framer Motion** - Minimal, restrained animations
- **TypeScript** - Type safety

## Design Philosophy

### Colors (STRICT)
- **Milky White**: `#FAFAF8` (light mode background)
- **Deep Black**: `#0A0A0A` (dark mode background)
- **No gradients, no accent colors, no colorful shadows**

### Typography
- **Primary**: Inter (Google Fonts)
- **Monospace**: JetBrains Mono (for tech labels, metrics, code-like metadata)
- **Weights**: 400 (body), 500-600 (headings)
- **Line height**: 1.7 for readability

### Motion (Conservative)
- Duration: 0.4–0.6s
- Easing: easeOut / easeInOut
- Effects: opacity, y translate, scale ≤ 1.02
- No spring physics, no parallax

## Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx       # Fixed header with theme toggle
│   ├── Hero.tsx         # Name, role, GitHub avatar
│   ├── EngineeringSummary.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx     # Backend-focused project cards
│   ├── Experience.tsx
│   ├── EngineeringPrinciples.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── data/
│   └── portfolio.ts     # ⭐ EDIT THIS FILE
├── hooks/
│   └── useTheme.ts
├── utils/
│   ├── motion.ts
│   └── colors.ts
└── index.css
```

## Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Customize Your Content

**Edit `src/data/portfolio.ts` with your information:**

```typescript
export const portfolioData = {
  personal: {
    name: 'Your Name',
    github: 'yourusername',  // For GitHub avatar
    email: 'your.email@example.com',
    linkedin: 'yourlinkedin',
  },
  // Update all sections...
};
```

### 3. Run Development Server
```bash
npm run dev
```

Visit **http://localhost:5173**

### 4. Build for Production
```bash
npm run build
npm run preview
```

## Content Guidelines

### Projects Section (MOST IMPORTANT)
Each project must include:
- **Problem statement**: What you were solving
- **Backend responsibilities**: Data modeling, API design, concurrency
- **Tech stack**: Technologies used
- **Trade-offs**: Engineering decisions

Example:
```typescript
{
  title: 'Distributed Task Queue',
  problem: 'Reliable background job processing with retry logic',
  backend: [
    'Designed job queue with PostgreSQL for durability',
    'Implemented exponential backoff retry mechanism',
  ],
  techStack: ['Node.js', 'PostgreSQL', 'Redis'],
  github: 'https://github.com/yourusername/project',
}
```

## Deployment

### Vercel (Recommended)
```bash
vercel
```

### Netlify
Deploy the `dist/` folder after `npm run build`

### GitHub Pages
```bash
npm run build
gh-pages -d dist
```

## Engineering Rationale

### Why Vite?
- Lightning-fast HMR
- Optimized production builds
- Zero-config TypeScript

### Why This Structure?
- Component isolation
- Data separation for easy updates
- Type safety
- Scalable

## Customization

### Change Colors
Edit `src/utils/colors.ts`

### Adjust Animations
Edit `src/utils/motion.ts`

### Add New Section
1. Create component in `src/components/`
2. Import in `src/App.tsx`

## License

MIT

---

**Built with clarity, engineered for backend roles.**
