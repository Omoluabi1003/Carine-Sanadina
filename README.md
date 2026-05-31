# Carine-Sanadina

## Deployment and cache policy

- Vercel builds this static site with `npm run build` and serves the generated `dist/` directory.
- Production should auto-deploy from the branch where PRs are merged, preferably `main`, so playlist updates go live as soon as the merge deployment completes.
- The build fingerprints app-shell CSS and JavaScript filenames, while `index.html`, `offline.html`, `sw.js`, and `manifest.json` are served with `Cache-Control: no-cache` in `vercel.json`.
- Playlist metadata is bundled in `script.js` behind `PLAYLIST_VERSION`; bump that version whenever the playlist changes so stored player state and old service-worker caches cannot keep stale playlist data alive.
