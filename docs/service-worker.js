importScripts("/bgsyncerrr/precache-manifest.a87eec648792b36ccda07a24ee96109e.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

workbox.core.setCacheNameDetails({prefix: "bgsyncerr"});
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.core.skipWaiting();
workbox.core.clientsClaim();

let bgQueue = new workbox.backgroundSync.Queue('bg-queue-name');
self.addEventListener('fetch', (e) => {
  console.log(e)
  if (!e.request.url.startsWith('https://eu.httpbin.org/post')) {
    return;
  }

  const clone = e.request.clone();
  const promiseChain = fetch(e.request).catch((err) => {
      return bgQueue.pushRequest({request: clone});
  });

  e.waitUntil(promiseChain);
});

self.addEventListener('sync', (e) => {
    console.log('sync event')
    console.log(e)
});

