# Carine-Sanadina

## Local development

This project is a dependency-free static site. Its automated tests use Node.js's built-in test runner; it does not require Playwright or downloaded browser binaries.

```sh
npm install
npm run lint
npm run build
npm run test
```

Serve the production build from `dist/` with any static HTTP server. For example:

```sh
python3 -m http.server 4173 --directory dist
```

### npm 11 proxy warning

If npm reports `Unknown env config "http-proxy"`, remove the legacy `npm_config_http_proxy` environment variable before invoking npm. Standard `HTTP_PROXY`, `HTTPS_PROXY`, and npm's supported `npm_config_proxy` / `npm_config_https_proxy` settings can remain configured.

```sh
unset npm_config_http_proxy
```

The warning comes from the invoking shell or CI environment, not from this repository; there is no project `.npmrc` defining `http-proxy`.

## GeoAware OS Governance

This repository follows GeoAware OS v1.0.0, a design and engineering philosophy founded by Paul Iyogun for calm, geography-first digital experiences where technology quietly guides discovery.

Governance details are recorded in `.geoaware/constitution.json`, including founder attribution, the local product mission, GeoAware design principles, and quality gates for performance, accessibility, restraint, and product coherence.

## Deployment and cache policy

- Vercel builds this static site with `npm run build` and serves the generated `dist/` directory.
- Production should auto-deploy from the branch where PRs are merged, preferably `main`, so merged updates go live as soon as the Vercel production deployment completes.
- The build fingerprints app-shell CSS and JavaScript filenames, while `index.html`, `offline.html`, `sw.js`, and `manifest.json` are served with `Cache-Control: no-cache` in `vercel.json`.
- Playlist metadata and cache-sensitive UI state are bundled behind `APP_VERSION` / `PLAYLIST_VERSION`; bump `APP_VERSION` for each deployment that must invalidate stale app-shell, playlist, or chatbot state without clearing user preferences such as language, install status, or visualizer choices.

## YouTube video catalog

The website renders the four-video manual catalog immediately, then makes a non-blocking request to `/api/youtube-videos`. If the endpoint is unavailable, slow, or returns invalid data, the manual catalog remains visible and fully playable.

For Vercel automatic updates, configure these server-side environment variables (never expose them in browser JavaScript):

- `YOUTUBE_API_KEY`: a YouTube Data API v3 key restricted appropriately in Google Cloud.
- `YOUTUBE_CHANNEL_ID`: Carine's canonical YouTube channel ID.

The serverless function resolves the channel's uploads playlist, returns a normalized video list, and emits edge-cache headers (`s-maxage=900`, `stale-while-revalidate=86400`) to conserve quota. A simpler future alternative is to parse the channel uploads RSS feed in this endpoint or at build time; client-side RSS fetching should not be used because of cross-origin reliability. The manual catalog remains the stability fallback in either design.

## Pull request readiness

Before opening a pull request, fetch the latest base branch and run the repository check:

```sh
git fetch origin
npm run check:pr
```

The check prevents empty or unsafe PR attempts by verifying that `origin` and `origin/main` exist, the current branch is a feature branch with committed work, the working tree is clean, the branch is not behind `origin/main`, and no unresolved Git or conflict-marker artifacts remain in `script.js` or `styles.css`. Set `PR_BASE_REF` to check against a different remote base branch.
