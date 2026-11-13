# THE FORTY UI

Responsive React + Vite prototype for THE FORTY SaaS dashboard.

## Requirements
- Node.js 20+ recommended
- npm

## Install and run
```bash
npm install
npm run dev
```

## Production build
```bash
npm run build
npm run preview
```

## Notes
- This is a frontend prototype with illustrative/mock dashboard data.
- Sidebar module links currently show placeholder module pages.
- No backend, authentication, database, tenant isolation, or live analytics is connected yet.
- The CSS uses Vazirmatn as the available Persian fallback. To use licensed Peyda font files, add them under `src/assets/fonts/` and define `@font-face` in `src/index.css`.
- Tailwind CSS v4 is configured through `@tailwindcss/vite`.
