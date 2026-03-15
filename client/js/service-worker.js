const CACHE_NAME = "my-cache-v1";
const URLS_TO_CACHE = [
  "/",
  "/index.html",
  "/assets/css/all-styles.css",
  "/js/app.js",
  "/assets/img/",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(URLS_TO_CACHE))
      .then(() => self.skipWaiting())
      .catch((error) =>
        console.error("Error during service worker installation:", error)
      )
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) =>
        Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== CACHE_NAME) {
              return caches.delete(cacheName);
            }
          })
        )
      )
      .then(() => self.clients.claim())
      .catch((error) =>
        console.error("Error during service worker activation:", error)
      )
  );
});

self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);
  const isSameOrigin = url.origin === location.origin;

  event.respondWith(
    isSameOrigin && URLS_TO_CACHE.includes(url.pathname)
      ? caches.match(event.request).then(
          (cachedResponse) =>
            cachedResponse ||
            fetch(event.request)
              .then((response) => {
                return caches.open(CACHE_NAME).then((cache) => {
                  cache.put(event.request, response.clone());
                  return response;
                });
              })
              .catch(() => caches.match("/index.html"))
        )
      : fetch(event.request).catch(() => caches.match("/index.html"))
  );
});

self.addEventListener("message", (event) => {
  if (event.data?.type === "SAVE_DATA") {
    const { key, data } = event.data;
    saveToIndexedDB(key, data);
  }
});

function saveToIndexedDB(key, data) {
  const request = indexedDB.open("my-database", 1);

  request.onupgradeneeded = (event) => {
    const db = event.target.result;
    db.createObjectStore("store", { keyPath: "key" });
  };

  request.onsuccess = (event) => {
    const db = event.target.result;
    const transaction = db.transaction("store", "readwrite");
    const store = transaction.objectStore("store");
    store.put({ key, data });

    transaction.onerror = (error) => {
      console.error("Error saving data to IndexedDB:", error);
    };
  };

  request.onerror = (error) => {
    console.error("Error opening IndexedDB:", error);
  };
}
