# Carine-Sanadina

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
