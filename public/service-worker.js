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
