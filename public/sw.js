const CACHE_NAME = 'kaizen-strategy-v3';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/logo.jpg',
  '/photo-fondateur.png',
  // Les assets seront mis en cache dynamiquement
];

// Installation du Service Worker
self.addEventListener('install', function(event) {
  console.log('Service Worker installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(async function(cache) {
        console.log('Cache ouvert, ajout des URLs de base');
        // Evite l'échec total de l'installation si une ressource statique est absente.
        await Promise.all(
          urlsToCache.map((url) =>
            cache.add(url).catch(() => {
              console.warn('Ressource ignorée pendant l\'installation du cache:', url);
            })
          )
        );
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

// Permet à la page de demander l'activation immédiate d'une nouvelle version du SW.
self.addEventListener('message', function(event) {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// Interception des requêtes réseau
self.addEventListener('fetch', function(event) {
  // Ignorer les requêtes non-HTTP
  if (!event.request.url.startsWith('http') || event.request.method !== 'GET') {
    return;
  }

  // Ne pas toucher aux requêtes cross-origin.
  if (!event.request.url.startsWith(self.location.origin)) {
    return;
  }

  // Network First pour HTML/JS/CSS afin d'éviter d'afficher des anciennes versions.
  if (
    event.request.destination === 'document' ||
    event.request.destination === 'script' ||
    event.request.destination === 'style' ||
    event.request.destination === 'worker'
  ) {
    event.respondWith((async () => {
      try {
        const networkResponse = await fetch(event.request);
        if (networkResponse && networkResponse.status === 200) {
          const cache = await caches.open(CACHE_NAME);
          await cache.put(event.request, networkResponse.clone());
        }
        return networkResponse;
      } catch {
        const cachedResponse = await caches.match(event.request);
        if (cachedResponse) {
          return cachedResponse;
        }
        if (event.request.destination === 'document') {
          return caches.match('/index.html');
        }
        throw new Error('Network and cache unavailable');
      }
    })());
    return;
  }

  // Cache First pour les images/polices, avec rafraîchissement en arrière-plan.
  if (event.request.destination === 'image' || event.request.destination === 'font') {
    event.respondWith((async () => {
      const cachedResponse = await caches.match(event.request);

      const networkFetch = fetch(event.request)
        .then(async (networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const cache = await caches.open(CACHE_NAME);
            await cache.put(event.request, networkResponse.clone());
          }
          return networkResponse;
        })
        .catch(() => null);

      if (cachedResponse) {
        return cachedResponse;
      }

      const freshResponse = await networkFetch;
      if (freshResponse) {
        return freshResponse;
      }

      throw new Error('Asset unavailable');
    })());
    return;
  }

  // Par défaut: réseau puis fallback cache.
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        if (response && response.status === 200) {
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, response.clone());
          });
        }
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});

// Gestion des notifications push (optionnel)
self.addEventListener('push', function(event) {
  const options = {
    body: event.data ? event.data.text() : 'Nouvelle notification de Kaizen Strategy',
    icon: '/logo.jpg',
    badge: '/logo.jpg',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: '1'
    },
    actions: [
      {
        action: 'explore',
        title: 'Découvrir',
        icon: '/logo.jpg'
      },
      {
        action: 'close',
        title: 'Fermer',
        icon: '/logo.jpg'
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