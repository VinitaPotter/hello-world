importScripts("/precache-manifest.b601126553c249f48be63d65b4c9e29b.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

if (workbox) {
  console.log(`Workbox is loaded`);

  workbox.precaching.precacheAndRoute(self.__precacheManifest);
} else {
  console.log(`Workbox didn't load`);
}

self.addEventListener("install", (event) => {
  console.log("Installing service worker");
  event.waitUntil(self.skipWaiting());
});

self.addEventListener("activate", (event) => {
  console.log("Activated service worker");

  event.waitUntil(self.clients.claim());
});

self.addEventListener("message", (msg) => {
  if (msg.data.action == "skipWaiting") {
    self.skipWaiting();
  }
});
console.log(self.clients);

