# Copilot Instructions for feane-react

## Project Overview
- **Framework:** React (with Vite for build and dev server)
- **Structure:**
  - `src/` contains all source code
    - `components/` holds React components (e.g., `Navbar.jsx`, `Menu.jsx`)
    - `assets/` for static assets (e.g., images)
    - `App.jsx` is the main app entry
    - `main.jsx` is the Vite entry point
  - `public/` for static files served as-is
  - `index.html` is the HTML entry point

## Build & Development
- **Start dev server:** `npm run dev` (Vite, with HMR)
- **Build for production:** `npm run build`
- **Preview production build:** `npm run preview`
- **Lint:** `npm run lint` (if configured)
- **No test setup by default**

## Coding Patterns & Conventions
- **Component structure:**
  - Functional React components, one per file in `components/`
  - Use `.jsx` extension for components
  - Import assets from `src/assets/`
- **Styling:**
  - Global styles in `src/index.css`
  - No CSS-in-JS or CSS Modules by default
- **Routing:**
  - No router present; all content is rendered in `App.jsx`
- **State management:**
  - No global state library (e.g., Redux) in use

## Integration & External Dependencies
- **Vite plugins:** Uses `@vitejs/plugin-react` (see `vite.config.js`)
- **ESLint:** Configured via `eslint.config.js` (expand as needed)
- **No backend/API integration present**

## Examples
- To add a new page/section: create a new component in `src/components/`, import and render it in `App.jsx`.
- To add an image: place it in `src/assets/` and import it in your component.

## Key Files
- `src/App.jsx`: Main app logic and component composition
- `src/components/`: All UI sections/components
- `vite.config.js`: Vite build/dev configuration
- `eslint.config.js`: Linting rules
- `README.md`: Basic project info

---

**For AI agents:**
- Follow the above structure and conventions for new code.
- Prefer functional components and direct imports.
- If adding new workflows (tests, CI, etc.), document them here.
