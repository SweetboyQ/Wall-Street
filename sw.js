self.addEventListener('install', e => {
    e.waitUntil(
      caches.open('wall-street-cache').then(cache => {
        return cache.addAll([
          '/',
          '/index.html',
          '/css/styles.css',
          '/js/scripts.js',
          '/images/favicon.png'
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', e => {
    e.respondWith(
      caches.match(e.request).then(response => {
        return response || fetch(e.request);
      })
    );
  });
  