# Portfolio — Setup & Customization Guide

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start development server (full-stack)
npm run dev

# 3. Or run only the frontend (no backend needed)
npm run dev:client
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## ✏️ How to Customize

**All your personal content lives in one file:**

```
client/src/portfolio.config.ts
```

Open that file and edit:
- Your name, bio, email, location
- Social media links
- Skills list
- Project cards (titles, images, descriptions)
- Services offered
- Stats (years experience, projects done, etc.)

No need to dig through component files — change the config, save, and the browser hot-reloads instantly.

---

## 📁 Project Structure

```
NewPortfolio/
├── client/
│   ├── public/
│   │   └── figmaAssets/        ← Put your images here
│   └── src/
│       ├── pages/              ← Home, About, Work, Services, Contact
│       ├── components/         ← Navbar, Footer, UI components
│       ├── lib/                ← Animations, utilities
│       ├── portfolio.config.ts ← ⭐ Edit this to customize everything
│       ├── App.tsx             ← Routes
│       └── index.css           ← Global styles & CSS variables
├── server/                     ← Express backend (optional)
├── shared/                     ← Shared types/schema
├── vite.config.ts
├── tailwind.config.ts
└── tsconfig.json
```

---

## 🖼️ Replacing Images

1. Drop your image files into `client/public/figmaAssets/`
2. Update the file names in `portfolio.config.ts` under `PROJECTS`, `ABOUT_IMAGES`, or `BRAND_LOGOS`

---

## 🎨 Changing Colors / Theme

Edit `client/src/index.css` — look for the `:root { ... }` block.  
The site uses CSS custom properties (HSL values) for all colors.

Key variables:
```css
--background: 0 0% 100%;     /* page background */
--foreground: 222.2 47.4% 11.2%;  /* text color */
--primary: 222.2 47.4% 11.2%;     /* primary color */
--accent: 210 40% 96.1%;          /* accent color */
```

---

## 🏗️ Build for Production

```bash
npm run build
# Output goes to dist/public/
```

---

## ❌ Fixes Applied

The following errors from the original Replit version were fixed:

| Issue | Fix |
|---|---|
| Replit-specific Vite plugins crashing outside Replit | Removed `@replit/vite-plugin-*` dependencies |
| Duplicate `@tailwind` directives in `index.css` causing PostCSS errors | Consolidated to single set of directives |
| `vite.config.ts` used `import.meta.dirname` (Node 20.11+ only) | Replaced with `__dirname` for broader compatibility |
| `vite` v7 (beta) compatibility issues | Pinned to stable `vite` v5 |
| `express` v5 (beta) used | Pinned to stable `express` v4 |
| Unused server-only dependencies (passport, pg, drizzle) cluttering install | Removed from required deps (add back if you need a DB) |
