const APP_VERSION = 'carine-site-2026-06-03-paranoia-persecutive';
const PLAYLIST_VERSION = APP_VERSION;
const CACHE_VERSION = `carine-static-v9-${APP_VERSION}`;
const OFFLINE_URL = './offline.html';
const CORE_ASSETS = [
  './offline.html',
  './styles.css',
  './content-reflections.js',
  './script.js',
  './manifest.json'
];

const isMediaRequest = (request) => {
  const url = new URL(request.url);
  return /\.(mp3|wav|ogg|m4a|mp4|webm)$/i.test(url.pathname);
};

const isHtmlRequest = (request) => request.mode === 'navigate'
  || (request.headers.get('accept') || '').includes('text/html')
  || /\/($|index\.html$)/i.test(new URL(request.url).pathname);

const isManifestOrPlaylistDataRequest = (request) => {
  const url = new URL(request.url);
  return /manifest\.json$/i.test(url.pathname) || /playlist/i.test(url.pathname);
};

const isVersionedStaticAsset = (request) => {
  const url = new URL(request.url);
  return request.method === 'GET'
    && url.origin === self.location.origin
    && /\.[a-f0-9]{8,}\.(css|js)$/i.test(url.pathname)
    && !isMediaRequest(request);
};

const isUnversionedAppShellAsset = (request) => {
  const url = new URL(request.url);
  return request.method === 'GET'
    && url.origin === self.location.origin
    && (/\.(css|js|json)$/i.test(url.pathname) || isManifestOrPlaylistDataRequest(request))
    && !isVersionedStaticAsset(request)
    && !isMediaRequest(request);
};

const cacheResponse = async (request, response) => {
  if (!response || !response.ok || response.type === 'opaque') {
    return response;
  }

  const cache = await caches.open(CACHE_VERSION);
  await cache.put(request, response.clone());
  return response;
};

const fetchFresh = async (request) => fetch(request, { cache: 'no-store' });

const offlineHtmlResponse = () => caches.match(OFFLINE_URL);

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_VERSION)
      .then((cache) => cache.addAll(CORE_ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE_VERSION).map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('message', (event) => {
  if (event.data?.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

self.addEventListener('fetch', (event) => {
  const { request } = event;

  if (request.method !== 'GET' || isMediaRequest(request)) {
    return;
  }

  if (isHtmlRequest(request)) {
    event.respondWith(
      fetchFresh(request)
        .then((response) => cacheResponse(request, response))
        .catch(() => offlineHtmlResponse())
    );
    return;
  }

  if (isUnversionedAppShellAsset(request)) {
    event.respondWith(
      fetchFresh(request)
        .then((response) => cacheResponse(request, response))
    );
    return;
  }

  if (isVersionedStaticAsset(request)) {
    event.respondWith(
      caches.match(request).then((cached) => {
        if (cached) return cached;
        return fetch(request).then((response) => cacheResponse(request, response));
      })
    );
  }
});
