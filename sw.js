/* Service worker cho Bio — hỗ trợ offline + tải nhanh lần sau.
   Đổi VERSION mỗi khi muốn ép làm mới toàn bộ cache. */
const VERSION = 'bio-v1';

// App shell: precache những thứ nhẹ & cốt lõi để xem offline.
// (nhac-nen.mp3 không precache vì file lớn + dùng range request,
//  sẽ được lưu dần khi phát để tránh lỗi tua nhạc.)
const CORE = [
    './',
    './index.html',
    './config.js',
    './manifest.json',
    './avatar.jpg',
    './nen.jpg',
    './zalo-qr.jpg'
];

self.addEventListener('install', (event) => {
    self.skipWaiting();
    event.waitUntil(
        caches.open(VERSION).then((cache) => cache.addAll(CORE)).catch(() => {})
    );
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys()
            .then((keys) => Promise.all(keys.filter((k) => k !== VERSION).map((k) => caches.delete(k))))
            .then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', (event) => {
    const req = event.request;
    if (req.method !== 'GET') return;

    // Bỏ qua range request (audio/video) để không phá việc tua nhạc.
    if (req.headers.has('range')) return;

    const url = new URL(req.url);
    const isHTML = req.mode === 'navigate' || url.pathname.endsWith('/') || url.pathname.endsWith('index.html');
    const isDynamic = isHTML || url.pathname.endsWith('config.js') || url.pathname.endsWith('manifest.json');

    if (isDynamic) {
        // Network-first: luôn lấy bản mới khi có mạng, offline thì dùng cache.
        event.respondWith(
            fetch(req)
                .then((res) => {
                    const copy = res.clone();
                    caches.open(VERSION).then((c) => c.put(req, copy)).catch(() => {});
                    return res;
                })
                .catch(() => caches.match(req).then((r) => r || caches.match('./index.html')))
        );
    } else {
        // Cache-first cho ảnh/font: nhanh, lưu lại lần đầu gặp.
        event.respondWith(
            caches.match(req).then((cached) => {
                if (cached) return cached;
                return fetch(req).then((res) => {
                    if (res && (res.ok || res.type === 'opaque')) {
                        const copy = res.clone();
                        caches.open(VERSION).then((c) => c.put(req, copy)).catch(() => {});
                    }
                    return res;
                }).catch(() => cached);
            })
        );
    }
});
