# 📄 LaresCare Website

A production Next.js 14 website for **LaresCare**, deployed on
Vercel.\
This repository contains the full marketing site, informational pages,
and minimal backend API routes (e.g., waitlist submission).

## 🚀 Tech Stack

-   **Next.js 14 / App Router**
-   **React Server Components**
-   **Tailwind CSS v4** (via `@tailwindcss/postcss`)
-   **TypeScript**
-   **Vercel Deployment**
-   \*\*Node.js 18+\`

## 🧱 Project Structure

    src/
      app/
        layout.tsx             # Global layout wrapper
        page.tsx               # Home page
        globals.css            # Tailwind + global styles

        about/
          page.tsx             # About page

        contact/
          page.tsx             # Contact / Waitlist form

        api/
          contact/
            route.ts           # POST /api/contact – waitlist handler

Root files include:

-   `tailwind.config.ts` -- Tailwind theme + content paths\
-   `postcss.config.mjs` -- Tailwind v4 PostCSS integration\
-   `next.config.ts` -- Next.js configuration\
-   `package.json` / `package-lock.json` -- dependencies\
-   `tsconfig.json` -- TypeScript setup

## 💻 Local Development

Clone and install dependencies:

``` bash
git clone https://github.com/mbandt-lares/lares-site.git
cd lares-site
npm install
```

Run locally:

``` bash
npm run dev
```

Open the app:

    http://localhost:3000

## 🏗 Production Build

``` bash
npm run build
npm start
```

This approximates Vercel's production environment.

## 🌐 Deployment (Vercel)

Pushing to the `main` branch deploys the site automatically.

Production URL:

    https://lares-site.vercel.app

Preview deployments are automatically created for all feature branches
and pull requests.

## 📨 Waitlist API

Form submissions on `/contact` post to:

    POST /api/contact

Payload:

``` json
{
  "name": "optional",
  "email": "required",
  "message": "optional"
}
```

Current behavior:

-   Logs submissions to the server console (development placeholder)

Planned options:

-   Email notifications (Resend)
-   CRM integration (HubSpot)
-   Google Sheets sync
-   Postgres/Supabase persistence

## 🧪 Scripts

  Script            Purpose
  ----------------- ----------------------------------
  `npm run dev`     Start local development server
  `npm run build`   Create a production build
  `npm start`       Run the production build locally
  `npm run lint`    Run Next.js linting

## 👥 Collaboration Workflow

This repository uses a branch-based workflow.

### 1. Pull the latest `main`

``` bash
git checkout main
git pull origin main
```

### 2. Create a feature branch

``` bash
git checkout -b feature/your-task
```

### 3. Commit work

``` bash
git add .
git commit -m "Describe your change"
```

### 4. Push the branch

``` bash
git push origin feature/your-task
```

### 5. Open a Pull Request

-   Base: `main`
-   Compare: your branch

Vercel will automatically create a preview deployment.

### 6. Merge → Auto deploy

After your PR is merged into `main`, Vercel deploys automatically.

### 7. Sync local environment

``` bash
git checkout main
git pull origin main
```

## 🛠 Requirements

-   Node 18+
-   npm 9+
-   macOS, Linux, or WSL recommended

## 📌 Notes

-   This repo replaces older Netlify-based versions.
-   Tailwind v4 requires the `@tailwindcss/postcss` plugin --- already
    configured.
-   Backend is intentionally minimal; expansions will be added as
    needed.
