importScripts('/Uranium-/uv/uv.bundle.js');
importScripts('/Uranium-/uv/uv.config.js');
importScripts('/Uranium-/uv/uv.sw.js');

const uv = new UVServiceWorker();

self.addEventListener('fetch', (event) => {
    if (event.request.url.startsWith(location.origin + '/Uranium-/service/')) {
        event.respondWith(uv.fetch(event));
    }
});
