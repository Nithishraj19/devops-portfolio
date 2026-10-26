# Nithish Raj — DevOps Engineering Portfolio

A responsive, dark engineering portfolio built with Astro and TypeScript, with a JARVIS-inspired blue-black interface, a custom arc-reactor centerpiece, and restrained red/gold accents. The site is static-first, has no database or paid API dependency, and includes a downloadable resume PDF.

## Included

- Responsive portfolio page with keyboard-accessible navigation
- Nine project cards linked to public GitHub repositories
- Search and category filters for projects
- Skills/capabilities, engineering approach, and contact links
- Resume PDF download
- SEO metadata, Open Graph preview image, favicon, robots.txt, and custom 404 page
- `PREVIEW.html` — standalone visual preview; open it in a browser without installing dependencies (not used for production deployment)
- Reduced-motion styling and a mobile navigation menu

## Project claims and scope

The website intentionally distinguishes local labs and hands-on workflows from reference architectures. In particular, the AWS EKS platform, SMTP infrastructure, AWS HA/DR, and AWS cost/migration projects are presented as reference architectures where appropriate rather than claimed as deployed production environments. Keep repository READMEs as the source of truth for exact setup and implementation status.

## Run locally

Prerequisite: Node.js `22.23.4` or later (pinned in `.node-version` and `.nvmrc`).

```bash
npm install
npm run dev
```

Open the local URL printed by Astro. To validate a production build:

```bash
npm run build
npm run preview
```

The production output is written to `dist/`.

## Deploy with Cloudflare Pages

1. Create a **public** GitHub repository, for example `devops-portfolio`.
2. Upload the contents of this project to the repository root (not the parent folder). Keep `.node-version`, `package.json`, `astro.config.mjs`, `src/` and `public/` at the root.
3. Open the Cloudflare dashboard → **Workers & Pages** → **Create** → **Pages** → **Import an existing Git repository**.
4. Connect GitHub and select the new repository.
5. Use these build settings:
   - Framework preset: `Astro`
   - Production branch: `main`
   - Build command: `npm run build`
   - Build output directory: `dist`
6. Deploy. Cloudflare Pages assigns a `*.pages.dev` address from the project name, if that name is available.

After the first deployment, each commit pushed to the connected branch will trigger a new build and deployment. The exact project name/subdomain is not reserved in advance; choose it in Cloudflare and confirm availability there.

## Before publishing

- Preview the site at desktop and mobile widths.
- Verify each repository link and resume download.
- Confirm that every listed technology reflects experience you can discuss.
- Keep public repositories free of credentials, tokens, internal architecture, customer data, and other sensitive information.
- The website uses only public contact links; add a public email only if you are comfortable publishing it.

## Main files

- `src/pages/index.astro` — portfolio content and project data
- `src/pages/404.astro` — not-found page
- `src/styles/global.css` — visual design system and responsive styling
- `public/` — resume PDF, favicon, social preview, and robots.txt
