# Josh Rafael Chiong — Developer Portfolio

A personal software developer portfolio built with React 19, TypeScript, Vite, Tailwind CSS v4,
Motion for React, and React Router.

## Stack

- React 19 + TypeScript + Vite
- Tailwind CSS v4 (`@tailwindcss/vite`)
- Motion for React (`motion/react`) for animation
- React Router v7 for routing and project detail pages
- Lucide React for icons

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:5173.

```bash
npm run build     # production build to dist/
npm run preview   # preview the production build locally
```

## Project structure

```
src/
├── components/
│   ├── layout/      Navbar, Footer, ThemeProvider, ScrollProgress, BackToTop
│   ├── ui/           Button, Badge, Container, SectionHeading, PageFallback
│   └── projects/     ProjectCard, ProjectMockup, ProjectGallery, ProjectFilters
├── sections/         Hero, About, Skills, Experience, Projects, Education, Contact
├── pages/            Home, ProjectDetails, NotFound
├── data/             profile.ts, experience.ts, projects.ts — all portfolio content
├── hooks/            useTheme, useActiveSection
└── types/            Shared TypeScript interfaces
```

All editable content (profile, skills, experience, project copy) lives in `src/data/` —
update those files rather than the components.

## Deployment

The app is a static single-page app. Client-side routing on refresh is pre-configured for:

- **Vercel** — `vercel.json` rewrites all routes to `index.html`.
- **Netlify** — `public/_redirects` does the same.
- **Cloudflare Pages** — set the SPA fallback to `index.html` in project settings, or add the
  same rewrite rule.

No environment variables are required; this is a static site with no backend.

```bash
npm run build
# deploy the generated dist/ folder
```

## Setup checklist — what to do before going fully live

- [x] **Project screenshots.** Real screenshots are now wired in for 4 of 6 projects — RGC Debt
      Management, Vehicle Maintenance System, RGC Inventory and Buying System, and ESS Error
      Registry — each captured from an isolated demo/seeded instance so no real customer, debt,
      or production data is shown. `ProjectMockup` renders the real image when a gallery entry
      has one, falling back to the gradient placeholder otherwise.
      - [ ] Lantaka Room and Event Reservation System and AI vs. Human-Created Landscape
            Classification still show placeholders — add images to
            `public/images/projects/<project>/` and reference them from that project's
            `gallery` field in `src/data/projects.ts` once available.
- [ ] **Profile photo.** The hero and about sections currently show a "JRC" monogram instead of
      a real photo. Add `public/images/profile/photo.jpg` and swap it into `src/sections/Hero.tsx`
      and `src/sections/About.tsx`.
- [ ] **Public project links.** None of the six projects currently has a public repo or live
      demo link — several are private commissioned/client or internal systems. If any have a
      public repo you're comfortable sharing, add it to that project's `links` array in
      `src/data/projects.ts`.
- [ ] **Social links.** Only email and phone are wired as clickable links (verified from your
      resume). If you have a GitHub or LinkedIn profile, add it to `profile.social` in
      `src/data/profile.ts`.
- [ ] **Contact form.** The contact form validates input client-side and opens the visitor's own
      email client with the message pre-filled (via `mailto:`) — it does not silently "send" on
      your behalf, since no email-sending backend/credentials were configured. Wire it to a
      service like Formspree, EmailJS, or a small serverless function if you want in-page
      delivery instead.
