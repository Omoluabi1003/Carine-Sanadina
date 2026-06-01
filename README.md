# Carine-Sanadina

## Deployment and cache policy

- Vercel builds this static site with `npm run build` and serves the generated `dist/` directory.
- Production should auto-deploy from the branch where PRs are merged, preferably `main`, so merged updates go live as soon as the Vercel production deployment completes.
- The build fingerprints app-shell CSS and JavaScript filenames, while `index.html`, `offline.html`, `sw.js`, and `manifest.json` are served with `Cache-Control: no-cache` in `vercel.json`.
- Playlist metadata and cache-sensitive UI state are bundled behind `APP_VERSION` / `PLAYLIST_VERSION`; bump `APP_VERSION` for each deployment that must invalidate stale app-shell, playlist, or chatbot state without clearing user preferences such as language, install status, or visualizer choices.
