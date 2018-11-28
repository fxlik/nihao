const nihaoCache = 'nihao-v1';
let filesToCache = [
    '.',
    'index.html',
    '/assets/calc.png',
    '/assets/calc2.png',
    '/assets/maps.js',
    '/assets/peta.png',
    '/assets/style.css',
    '/calc/calc.css',
    '/calc/calc.js',
    '/calc/calc.min.css',
    '/calc/calc.min.js',
    '/calc/index.html',
    '/css-grid/index.html',
    '/css-grid/css-grid.css',
    '/css-grid/css=grid.min.css',
    '/warungs/index.html',
    '/warungs/maps.js',
    '/warungs/warungs.css',
    '/warungs/peta.json',
    '/warungs/imgs/0gambar.jpg',
    '/warungs/imgs/1gambar.jpg',
    '/warungs/imgs/2gambar.jpg',
    '/warungs/imgs/3gambar.jpg',
    '/warungs/imgs/4gambar.jpg',
    '/warungs/imgs/5gambar.jpg'
];

self.addEventListener('install', event => {
    console.log('Persiapan Cache');
    event.waitUntil(
        caches.open(nihaoCache)
        .then(cache => {
            return cache.addAll(filesToCache);
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
        .then(ada_response => {
            if(ada_response){
                return ada_response;
            }
            else{
                return fetch(event.request)
            }
        })
        .catch(error => {
            return new Response("Opps " + error);
        })
    );
});