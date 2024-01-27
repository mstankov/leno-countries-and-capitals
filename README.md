## General info

NextJS + TS app, containing 3 pages.

- `Index` page (`/`)
- `Game` page (`/game`)
- `Result` page (`/game/result`)

## Notes

- On build, all pages are generated as `static` by default and that should be fine in the case of this game.
- Added a few tests for the sake of it
- For a better UX, I added loading indicator skeletons indicators via each page's respective `Loading` component
- Routing can definitely be improved. For example user can refresh results page and due to lack of state persistance, result will be refreshed.
  User can directly navigate to `/game` or restart his current game via refresh, again due to lack of state persistance.
- Currently, layout is usable only on desktop, laptop, perhaps some tablets too.

## Dependencies used

- `typescript` for obvious reasons
- `react-query` + `axios` for data fetching on the server side
- `material-ui` + `material-nextjs` for SSR, UI components and basic layout - check `Providers` component
- React Context API for state management (anything else would've been an overkill. For persistance, I would've gone with a simple localStorage manipulation here instead of redux-toolkit or anything of the sort). The context is provided at the highest level (Root layout), again within the `Providers` component.
- `jest` and `react-testing-library`

## Getting Started

First, create a local `.env.local` file containing the following two variables:

- NEXT_PUBLIC_API_ENDPOINT (https://lenotask.000webhostapp.com/)
- NEXT_PUBLIC_API_TOKEN (your Bearer token)

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
