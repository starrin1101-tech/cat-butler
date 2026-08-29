// 貓管家 Service Worker
// 每次你更新 index.html 內容後，記得把下面的版本號改掉（例如 v1 -> v2），
// 這樣使用者才會抓到最新版本，而不是一直吃到舊的快取。
const CACHE_VERSION = 'cat-manager-v1';
const APP_SHELL = [
  './index.html',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-512-maskable.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_VERSION).then((cache) => cache.addAll(APP_SHELL))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_VERSION)
          .map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  // 網頁本體：優先用「有網路就抓最新版，沒網路才用快取」，
  // 確保你之後更新這個網頁時使用者能拿到新版本，離線時仍可開啟。
  if (req.mode === 'navigate' || req.destination === 'document') {
    event.respondWith(
      fetch(req)
        .then((res) => {
          const resClone = res.clone();
          caches.open(CACHE_VERSION).then((cache) => cache.put('./index.html', resClone));
          return res;
        })
        .catch(() => caches.match('./index.html'))
    );
    return;
  }

  // 其他資源（圖示等）：先用快取，快取沒有才發網路請求。
  event.respondWith(
    caches.match(req).then((cached) => cached || fetch(req))
  );
});
