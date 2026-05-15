const CACHE_NAME = 'kaizen-strategy-v2';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/Logo.jpg',
  '/photo-fondateur.png',
  // Les assets seront mis en cache dynamiquement
];

// Installation du Service Worker
self.addEventListener('install', function(event) {
  console.log('Service Worker installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Cache ouvert, ajout des URLs de base');
        return cache.addAll(urlsToCache);
      })
      .then(() => {
        console.log('Service Worker installé avec succès');
        // Force l'activation immédiate
        return self.skipWaiting();
      })
  );
});

// Activation du Service Worker
self.addEventListener('activate', function(event) {
  console.log('Service Worker activating...');
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheName !== CACHE_NAME) {
            console.log('Suppression du cache ancien:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      console.log('Service Worker activé avec succès');
      // Prendre le contrôle immédiatement
      return self.clients.claim();
    })
  );
});

// Interception des requêtes réseau
self.addEventListener('fetch', function(event) {
  // Ignorer les requêtes non-HTTP
  if (!event.request.url.startsWith('http')) {
    return;
  }

  // Stratégie: Cache First pour les assets, Network First pour l'HTML
  if (event.request.destination === 'document') {
    // Network First pour les pages HTML
    event.respondWith(
      fetch(event.request)
        .then(response => {
          // Met en cache la nouvelle version
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, responseClone);
          });
          return response;
        })
        .catch(() => {
          // Fallback vers le cache
          return caches.match(event.request);
        })
    );
  } else {
    // Cache First pour les assets (JS, CSS, images)
    event.respondWith(
      caches.match(event.request)
        .then(function(response) {
          if (response) {
            return response;
          }

          return fetch(event.request).then(
            function(response) {
              // Vérifie si la réponse est valide
              if(!response || response.status !== 200 || response.type !== 'basic') {
                return response;
              }

              // Clone la réponse pour la mettre en cache
              var responseToCache = response.clone();

              caches.open(CACHE_NAME)
                .then(function(cache) {
                  // Cache seulement les ressources de notre domaine
                  if (event.request.url.startsWith(self.location.origin)) {
                    cache.put(event.request, responseToCache);
                  }
                });

              return response;
            }
          );
        })
    );
  }
});

// Gestion des notifications push (optionnel)
self.addEventListener('push', function(event) {
  const options = {
    body: event.data ? event.data.text() : 'Nouvelle notification de Kaizen Strategy',
    icon: '/Logo.jpg',
    badge: '/Logo.jpg',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: '1'
    },
    actions: [
      {
        action: 'explore',
        title: 'Découvrir',
        icon: '/Logo.jpg'
      },
      {
        action: 'close',
        title: 'Fermer',
        icon: '/Logo.jpg'
      }
    ]
  };

  event.waitUntil(
    self.registration.showNotification('Kaizen Strategy', options)
  );
});

// Gestion des clics sur notifications
self.addEventListener('notificationclick', function(event) {
  event.notification.close();

  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});