
self.addEventListener('install', function(e){
    e.waitUntil(
        caches.open('nihao').then(function(cache){
            return cache.addAll([
                '/',
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
            ]);
        })
    );
})