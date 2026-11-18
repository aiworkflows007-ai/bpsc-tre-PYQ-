// TRE Ready Service Worker - Offline PWA Support (Network-First for HTML/JSON, Cache-First for static assets)
const CACHE_NAME = 'tre-ready-v3';
const CORE_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icon-192.png',
  '/icon-512.png',
  '/assets/index.css',
  '/assets/index.js'
];

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      // Use allSettled so one missing item never fails the entire SW install
      return Promise.allSettled(
        CORE_ASSETS.map((url) =>
          cache.add(url).catch((err) => {
            console.warn('Pre-cache skip:', url, err);
          })
        )
      );
    })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);
  const isNavigate = event.request.mode === 'navigate';
  const isHtml = event.request.destination === 'document' || url.pathname.endsWith('.html');
  const isJsonData = url.pathname.endsWith('.json');

  // NETWORK-FIRST strategy for HTML navigation & JSON data
  // Prevents stale cache after deployments while supporting 100% offline fallback
  if (isNavigate || isHtml || isJsonData) {
    event.respondWith(
      fetch(event.request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseClone);
            });
            return networkResponse;
          }

          // CRITICAL: If server returned 404 on a navigation request (e.g. /assets/ or subroute),
          // rescue it by returning cached index.html so installed app NEVER shows "Not Found"!
          if (isNavigate && networkResponse && networkResponse.status === 404) {
            return caches.match('/index.html')
              .then((cached) => cached || caches.match('./index.html'))
              .then((cached) => cached || fetch('/index.html'))
              .catch(() => networkResponse);
          }

          return networkResponse;
        })
        .catch(() => {
          return caches.match(event.request).then((cached) => {
            if (cached) return cached;
            if (isNavigate || isHtml) {
              return caches.match('/index.html')
                .then((cachedIndex) => cachedIndex || caches.match('./index.html'));
            }
            return new Response('{"error":"offline"}', {
              headers: { 'Content-Type': 'application/json' }
            });
          });
        })
    );
    return;
  }

  // CACHE-FIRST / STALE-WHILE-REVALIDATE for hashed scripts, styles, and images
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      const fetchPromise = fetch(event.request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseClone);
            });
          }
          return networkResponse;
        })
        .catch(() => cachedResponse);

      return cachedResponse || fetchPromise;
    })
  );
});
