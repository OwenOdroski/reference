const CACHE_NAME = "my-cache-v1";

// List of assets to precache
const PRECACHE_ASSETS = [
  '/CC/',
  '/CC/index.html',
  '/CC/style.css',
  '/CC/script.js',
  '/CC/db.json',
  '/CC/f16.glb',
  '/CC/three.js',
  '/CC/Orbit.js',
  '/CC/Loader.js',
  '/CC/781a.png',
  '/CC/781H-images-0.jpg',
  '/CC/781H-images-1.jpg',
  '/CC/icon.jpg',
  ''
];

// Install event - cache files
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(PRECACHE_ASSETS);
    })
  );
  self.skipWaiting();
});

// Activate event - cleanup old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      )
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  if (event.request.mode === 'navigate') {
    event.respondWith(
      caches.match('/CC/index.html')
        .then((resp) => resp || caches.match('/CC/offline.html'))
    );
  } else {
    event.respondWith(
      caches.match(event.request).then((resp) => resp)
    );
  }
});
