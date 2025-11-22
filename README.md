SURGE — Arcade Games Browser
=============================

Project overview
----------------
SURGE is a Next.js TypeScript app that serves as a lightweight arcade games browser. It includes a games catalog, filtering, categories, favorites, and embedded game playback using iframes/components.

Prerequisites
-------------
- Node.js v16+ (LTS recommended)
- npm (or yarn/pnpm) installed
- Windows PowerShell is used in examples, but commands are shell-agnostic

Install & Setup
---------------
1. Install dependencies:

   ```powershell
   npm install
   ```

2. Start the development server:

   ```powershell
   npm run dev
   ```

   - The app will open at `http://localhost:3000` by default.

3. Build for production:

   ```powershell
   npm run build
   npm start
   ```

Available scripts (check `package.json` for the exact scripts):
- `dev` - Run Next.js in development mode
- `build` - Create a production build
- `start` - Start the production server after `build`

Features implemented
--------------------
- Games catalog with data in `db/games.ts`.
- Categories and filtering via `db/categories.ts` and `hooks/useFilter.ts`.
- Favorites: add/remove favorites from the list (UI and redux integration in `providers/ReduxProvider.tsx` and `redux/`).
- Game detail pages and embed: `app/games/[slug]` and components like `Embed.tsx` and `GameIframe.tsx`.
- Responsive UI components: `GameCard`, `GameImageContainer`, `FavoriteButton`, `Modal`, `Breadcrumbs`.
- Visual polish: progress indicator (`NgProgress.tsx`) and particle effects (`Particles.tsx`).

App structure (key files & folders)
----------------------------------
- `app/` - Next.js app routes and pages
  - `page.tsx` - Home page
  - `games/` - Games listing and dynamic game pages
  - `favorites/` - Favorites listing page
  - `(components)/` - Page-local components (Filter, Games, Embed, GameIframe, etc.)

- `components/` - Global shared components
  - `GameCard.tsx`, `GameImageContainer.tsx`, `FavoriteButton.tsx`, `Modal.tsx`, `NgProgress.tsx`, `Particles.tsx`, `Breadcrumbs.tsx`, etc.
  - `Layout/` - `Header.tsx`, `Footer.tsx`, `Layout.tsx`

- `db/` - Static data
  - `games.ts` - Game metadata
  - `categories.ts` - Category definitions

- `hooks/` - Custom hooks
  - `useFilter.ts` - Filtering logic
  - `useHeaderRoutes.ts` - Header route logic

- `providers/` - App-level providers
  - `ReduxProvider.tsx` - Redux store provider

- `redux/` - Redux store & reducers
  - `store.ts` - Redux store setup
  - `reducers/game.reducer.ts` and `reducers/types.ts` - reducer and action types

- `public/` - Static assets (icons, images)

- `utils/helpers/constants.ts` - App constants

Notes and recommendations
-------------------------
- Environment variables: This repo does not include `.env` usage by default. If you need API keys or external services, add a `.env.local` and update code to read `process.env.*`.
- Data: Games and categories are currently stored in `db/` as static data. To add new games, edit `db/games.ts` and provide required fields used by the UI.
- Tests: The `tests/` folder is present but may be empty; add unit/integration tests as needed.
- Lint & formatting: Configure/prefer `eslint` and `prettier` if not already set in the repo.

Contributing
------------
- Fork or branch from `main`.
- Make feature branches and open PRs with focused changes.
- Update `db/` data and components consistently; follow existing component patterns.

Troubleshooting
---------------
- If the dev server fails to start, ensure dependencies are installed and Node.js meets the minimum version requirement.
- If a page shows missing assets, verify the `public/` folder contains the referenced files.

Contact
-------
For questions about the project structure or architecture, open an issue in the repository or contact the maintainer.



(Generated: .readme)