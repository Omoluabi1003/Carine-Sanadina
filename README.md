# Carine Sanadina

A custom, framework-free static website with a small edge API for synchronizing the YouTube video catalog.

## Application architecture

The repository does not use a web framework. `npm run build` runs the custom Node.js builder in `scripts/build.js`, fingerprints the CSS and JavaScript app shell, copies static content, and writes the deployable website to `dist/`.

Cloudflare deployment uses **Workers with Static Assets** rather than Pages:

- `dist/` is deployed through the Workers Static Assets binding.
- Static files are served asset-first at Cloudflare's edge.
- Only `/api/*` invokes the Worker first.
- `/api/youtube-videos` replaces the former provider-specific serverless function.
- Worker code and static files are released atomically by one `wrangler deploy` command.

## Prerequisites

- Node.js 22 or newer (see `.nvmrc`).
- A Cloudflare account with Workers enabled.
- Wrangler authentication through `wrangler login` for local use, or `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` in CI.

Install dependencies with:

```bash
npm ci
```

## Local development

The browser-only site can be rebuilt with:

```bash
npm run build
```

To run the complete Cloudflare application locally, including the Worker API:

1. Copy `.dev.vars.example` to `.dev.vars`.
2. Replace the placeholders if automatic YouTube synchronization is needed. The site safely falls back to its manual video catalog when they are absent.
3. Run:

```bash
npm run cf:dev
```

Do not commit `.dev.vars`, `.env`, API tokens, or account credentials.

## Cloudflare environments

`wrangler.jsonc` defines two isolated Workers:

| Environment | Worker name | Purpose | Command |
| --- | --- | --- | --- |
| Preview | `carine-sanadina-preview` | Branch/release-candidate verification | `npm run cf:deploy:preview` |
| Production | `carine-sanadina-production` | Public production traffic | `npm run cf:deploy:production` |

Both initially deploy to `workers.dev`. Production preview URLs are disabled, while preview deployment URLs remain enabled. Add the public custom domain to the production Worker after its first deployment.

## Deployment commands

```bash
npm run cf:dry-run             # Build and locally package the preview deployment
npm run cf:deploy:preview      # Build and deploy the preview Worker
npm run cf:deploy:production   # Build and deploy the production Worker
npm run cf:types               # Regenerate optional Worker binding types
```

Wrangler is pinned in `devDependencies`; use the npm scripts instead of a globally installed Wrangler version.

## Runtime configuration and secrets

The YouTube endpoint reads these Worker bindings:

- `YOUTUBE_API_KEY`: secret Google/YouTube Data API v3 credential.
- `YOUTUBE_CHANNEL_ID`: the canonical channel ID. This is not intrinsically sensitive, but it is configured alongside the API key so each environment can be managed independently.

Set them separately for each environment:

```bash
npx wrangler secret put YOUTUBE_API_KEY --env preview
npx wrangler secret put YOUTUBE_CHANNEL_ID --env preview
npx wrangler secret put YOUTUBE_API_KEY --env production
npx wrangler secret put YOUTUBE_CHANNEL_ID --env production
```

The API caches successful normalized responses at Cloudflare's edge for 15 minutes and permits stale responses while revalidating. Missing or invalid configuration returns a safe error and leaves the manually bundled video catalog usable.

## Cache and security policy

`public/_headers` is copied into `dist/` during every build. It applies baseline browser security headers, keeps HTML/service-worker metadata revalidated, caches fingerprinted app-shell assets immutably for one year, and prevents direct `workers.dev` hostnames from being indexed.

Bump `APP_VERSION` when a release must invalidate stale app-shell, playlist, or chatbot state without clearing user preferences such as language, install status, or visualizer choices.

## Cloudflare dashboard checklist

After the first authenticated deployment, complete the following actions:

- [ ] Confirm both Workers appear under **Workers & Pages**: `carine-sanadina-preview` and `carine-sanadina-production`.
- [ ] Add `YOUTUBE_API_KEY` and `YOUTUBE_CHANNEL_ID` as encrypted secrets to **each** environment (or use the Wrangler commands above).
- [ ] Restrict the Google API key to YouTube Data API v3 and apply the narrowest practical application/quota restrictions in Google Cloud.
- [ ] Add the public custom domain to `carine-sanadina-production` under **Settings → Domains & Routes**. Do not attach the production domain to the preview Worker.
- [ ] If the domain is not already on Cloudflare DNS, onboard it and update the registrar nameservers before attaching the Worker custom domain.
- [ ] Verify SSL/TLS mode is **Full (strict)** for any proxied origin records that remain in use.
- [ ] Decide who may access the preview Worker. If previews must be private, protect `carine-sanadina-preview` with Cloudflare Access; `X-Robots-Tag: noindex` prevents indexing but is not access control.
- [ ] Create a scoped CI API token if deployments will run from GitHub or another CI provider. Grant only the account/Workers permissions required to deploy, and store the token plus account ID in the CI secret store.
- [ ] Review Workers Logs/Observability after the first real requests and choose an appropriate retention/sampling policy for traffic volume and privacy requirements.
- [ ] After DNS cutover, test `/`, `/legal/`, `/offline.html`, `/sw.js`, and `/api/youtube-videos` on both preview and production before removing the previous hosting project.
