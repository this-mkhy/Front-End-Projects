var myCacheName = 'cache-v1';

//Files that we want to cache
var cacheUrls = [
  './',
  './index.html',
  './restaurant.html',
  './js/main.js',
  './css/styles.css',
  './data/restaurants.json',    
  './js/dbhelper.js',
  './js/restaurant_info.js',
  './img/1.jpg',
  './img/2.jpg',
  './img/3.jpg',
  './img/4.jpg',
  './img/5.jpg',
  './img/6.jpg',
  './img/7.jpg',
  './img/8.jpg',
  './img/9.jpg',
  './img/10.jpg',
];

//To install event listener
self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(myCacheName).then(function (cache) {
      return cache.addAll(cacheUrls);
    })
  );
});

//To remove out dated caches
self.addEventListener('activate', function (event) {
	event.waitUntil(
		caches.keys().then((cacheNames) => {
			return Promise.all(
				cacheNames.filter(function (thisCacheName) {
					return myCacheName.startsWith('cache-') &&
						thisCacheName != myCacheName;
						console.log('Remove caches from',thisCacheName);
				})
				.map(function (myCacheName) {
					return caches.delete(myCacheName);
				})
			);
		})
	);
});

//To fetch the requests
self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request).then(function (response) {
            return response || fetch(event.request);
        })
    );
});
