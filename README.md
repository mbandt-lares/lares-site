# 📄 LaresCare Website

A production Next.js 14 website for **LaresCare**, deployed on Vercel.
This repository contains the full marketing site, informational pages, and minimal backend API routes (e.g., waitlist submission).

## 🚀 Tech Stack

-   **Next.js 14 / App Router**
-   **React Server Components**
-   **Tailwind CSS v4** (via `@tailwindcss/postcss`)
-   **TypeScript**
-   **Vercel Deployment**
-   **Node.js 18+**

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

-   `tailwind.config.ts` -- Tailwind theme + content paths
-   `postcss.config.mjs` -- Tailwind v4 PostCSS integration
-   `next.config.ts` -- Next.js configuration
-   `package.json` / `package-lock.json` -- dependencies
-   `tsconfig.json` -- TypeScript setup

## 💻 Local Development

Clone and install dependencies:

``` bash
git clone https://github.com/Gera-IT-AI/LaresCare-Landing.git
cd LaresCare-Landing
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

## 🌐 Deployment (Vercel)

Pushing to the `main` branch deploys the site automatically.

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
- Logs submissions to Google Sheets (connected via API)

## 🧪 Scripts

| Script | Purpose |
| :--- | :--- |
| `npm run dev` | Start local development server |
| `npm run build` | Create a production build |
| `npm start` | Run the production build locally |
| `npm run lint` | Run Next.js linting |

## 👥 Collaboration Workflow

This repository uses a branch-based workflow.

1.  **Pull the latest `main`**
2.  **Create a feature branch**
3.  **Commit work** (Follow Conventional Commits)
4.  **Push the branch**
5.  **Open a Pull Request**

## 🛠 Requirements

-   Node 18+
-   npm 9+
-   macOS, Linux, or WSL recommended
