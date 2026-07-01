# Personal Portfolio

A clean, modern portfolio site built to learn and showcase front-end development. Static front-end only — no backend — ready to deploy on Vercel.

## Tech stack

- **Next.js 16** (App Router) + **TypeScript**
- **Tailwind CSS v4** with a custom theme in `tailwind.config.ts`
- **Framer Motion** for scroll reveals, hero text animation, and hover interactions
- **ESLint** + **Prettier** for consistent code style

## Getting started

```bash
# Install dependencies (if you haven't already)
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site. Pages hot-reload as you edit files.

### Other scripts

| Command | Description |
|---------|-------------|
| `npm run build` | Production build |
| `npm run start` | Serve production build locally |
| `npm run lint` | Run ESLint |
| `npm run format` | Format all files with Prettier |
| `npm run format:check` | Check formatting without writing |

## File structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout — fonts, Nav, Footer
│   ├── template.tsx        # Page transition wrapper (Framer Motion)
│   ├── globals.css         # Tailwind imports + @config
│   ├── page.tsx            # Home / About
│   ├── projects/page.tsx   # Projects grid
│   └── contact/page.tsx    # Contact form + social links
├── components/
│   ├── Nav.tsx             # Sticky nav + mobile menu
│   ├── Footer.tsx
│   ├── AnimatedText.tsx    # Staggered hero tagline
│   ├── ScrollReveal.tsx    # whileInView section wrapper
│   ├── SectionHeading.tsx
│   ├── ProjectCard.tsx
│   └── ContactForm.tsx
├── lib/
│   ├── site.ts             # Your name, bio, links (edit this!)
│   ├── projects.ts         # Project data array
│   ├── animations.ts       # Shared Framer Motion variants
│   └── types/project.ts    # Project TypeScript interface
├── tailwind.config.ts      # Custom colors, fonts, spacing
├── next.config.ts
└── README.md
```

## Customize your content

Search for `TODO` comments across the project. The main places to edit:

1. **`lib/site.ts`** — name, role, bio, email, GitHub, LinkedIn, skills
2. **`lib/projects.ts`** — project titles, descriptions, links, tech stack
3. **`app/page.tsx`** — headshot placeholder (`YN` initials → your photo in `/public`)
4. **`components/Nav.tsx`** — logo/brand text

## Deploy to Vercel

1. Push this repo to GitHub (or GitLab/Bitbucket).
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Vercel auto-detects Next.js — no extra config needed for a static/front-end site.
4. Click **Deploy**. Every push to your main branch triggers a new deployment.

For a fully static export later, see [Next.js static exports](https://nextjs.org/docs/app/guides/static-exports).

## Learn more

- [Next.js App Router docs](https://nextjs.org/docs/app)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
