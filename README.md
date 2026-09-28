# PromoPower Website

Next.js static site with form APIs on Cloudflare Workers. See [AGENTS.md](./AGENTS.md) and the `0*_*.md` project docs before making changes.

## Requirements

- Node.js 20+
- Cloudflare account (for deploy and form API testing)
- `CLOUDFLARE_API_TOKEN` in the environment for `wrangler` (or run `wrangler login`)

## Local development (pages only)

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). This mode serves the Next.js app only. **`/api/contact` and `/api/jobseekers` are not available** here because the site uses static export; those routes live on the Worker.

## Local development (pages + form API)

Build the static export, then run the Worker with the `out/` assets binding:

```bash
npm run preview
```

Open the URL shown by Wrangler (typically [http://localhost:8787](http://localhost:8787)). Form submissions hit the same handlers as production.

Optional env for the client bundle (create `.env.local` from [`.env.example`](./.env.example)):

- `NEXT_PUBLIC_FORM_DEMO_MODE=true` — force demo banner and demo API responses
- `NEXT_PUBLIC_FORMS_LIVE=true` — hide demo banner when building for go-live

Worker secrets (email delivery) are set on Cloudflare, not in `.env.local`:

```bash
wrangler secret put FORM_RECIPIENT_EMAIL
```

See [TODO.md](./TODO.md) for MailChannels DNS and production cutover.

## Build and deploy

```bash
npm run build    # writes static files to out/
npm run deploy   # build + wrangler deploy
```

Preview deployment: `https://promopower-website.mohmadnoorariffin.workers.dev` (see [ownershiptransfer.md](./ownershiptransfer.md)).

Portfolio client sections live on a single [`/our-work`](./app/our-work/page.tsx) page. `/our-work/*` URLs redirect to `/our-work` via [`public/_redirects`](./public/_redirects).

## Scripts

| Script | Purpose |
|--------|---------|
| `npm run dev` | Next.js dev server (UI only) |
| `npm run preview` | Production-like Worker + static assets + APIs |
| `npm run build` | Static export to `out/` |
| `npm run deploy` | Deploy Worker and assets to Cloudflare |
| `npm run lint` | ESLint |
