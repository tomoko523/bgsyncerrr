importScripts("/bgsyncerrr/precache-manifest.823cdfc80856a67f62797ab0a73fc1d7.js", "https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

workbox.core.setCacheNameDetails({prefix: "bgsyncerr"});
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.core.skipWaiting();
workbox.core.clientsClaim();

let bgQueue = new workbox.backgroundSync.Queue('bg-queue-name');
self.addEventListener('fetch', (e) => {
  console.log(e)
  if (!e.request.url.startsWith('http://httpbin.org/post')) {
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
