# Keylor Delgado — Portfolio

Personal portfolio of **Keylor Delgado Castro**, Front-End Developer.
A fast, responsive single-page site showcasing selected React & Vue projects.

🔗 Live: https://kdelgado1998.github.io / Netlify deploy

## Tech stack

- **React 18** + **Vite**
- **Tailwind CSS** (utility layer) + custom design system (`src/index.css`)
- Vanilla CSS variables for theming, `IntersectionObserver` for scroll reveals
- Google Fonts: Space Grotesk (display), Inter (body), JetBrains Mono (labels)

## Getting started

```bash
npm install      # install dependencies
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # production build into /dist
npm run preview  # preview the production build
```

## Structure

```
src/
├─ components/   Header, Hero, Footer
├─ Paginas/      Projects, AboutMe, ContactMe (page sections)
├─ hooks/        useReveal (scroll animations)
├─ data/         db.js (project list)
└─ index.css     design system + component styles
public/img/      project screenshots, logo, icons
```

To add a project, append an entry to `src/data/db.js` and drop its image
(named to match the `imagen` field) into `public/img/`.
