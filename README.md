# Marco Santos portfolio

A React and TypeScript portfolio built with Vite. The terminal, project previews, and demos run in the browser.

## Run locally

Use Node.js 22.12 or newer.

```sh
npm ci
npm run dev
npm run build
npm run preview
```

Project copy lives in `src/content/projects.ts`. Demo content lives in `src/content/demos.ts`. The WiBo video is an edited excerpt from a recorded practice session. The Six Hops gallery and Gravity Rules preview use screenshots of the games.

## Branches and deployment

Open feature pull requests against `develop`. Vercel builds `develop` as a Preview deployment. Open a pull request from `develop` to `main` for a production release. Set `main` as the Vercel Production Branch and use the Vite preset. The checked-in Vercel config sets the framework and routes for direct links to project pages and the About page.
