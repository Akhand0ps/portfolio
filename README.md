# Portfolio

Backend-focused developer portfolio built with React, TypeScript, and Tailwind CSS.

## About

Minimalist portfolio showcasing backend engineering work with a focus on:
- API design and implementation
- Data modeling and integrity
- Distributed systems
- Database architecture

## Tech Stack

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Utility-first styling
- **Framer Motion** - Conservative animations
- **Vite 7** - Build tool

## Design Philosophy

- **Two colors only**: Milky white (#FAFAF8) and deep black (#0A0A0A)
- **Minimal motion**: Conservative animations (0.4-0.6s, easeOut)
- **Engineer-first**: Reads like documentation, not marketing
- **Dark/Light themes**: System preference with manual toggle

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

Deploy to Vercel, Netlify, or any static hosting:

1. Run `npm run build`
2. Deploy the `dist` folder

**After deployment**, update these in `index.html`:
- `og:url` meta tag with your actual domain
- `og:image` and `twitter:image` meta tags with OG image URL

## Project Structure

```
src/
├── components/       # React components
├── data/            # Portfolio content
├── hooks/           # Custom hooks (theme)
├── utils/           # Motion variants
└── assets/          # Images
```

## License

MIT
