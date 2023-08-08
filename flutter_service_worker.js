'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "9d74abb609d34013ea6c4af24eecafeb",
"index.html": "59b3f799637b2b9dda376706fc3eb577",
"/": "59b3f799637b2b9dda376706fc3eb577",
"main.dart.js": "52950854ad5a31f47c3e0f2e1bc7446c",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "f5fa087c30d3f5a51f4d8569dff537fa",
"icons/Icon-maskable-512.png.png": "16f7ae7deb490459064ba6778e1aa6e2",
"icons/Icon-192.png": "d1a52af1cc4393dd91020ff9955cd6fb",
"icons/Icon-maskable-192.png": "d1a52af1cc4393dd91020ff9955cd6fb",
"icons/Icon-512.png": "16f7ae7deb490459064ba6778e1aa6e2",
"manifest.json": "ef4f1079910ab5e89cd0862c8603b095",
"assets/AssetManifest.json": "c32b00b5d7b3950493a38d9bf7e0d8b3",
"assets/NOTICES": "8d260f2d510de9f61635ddef0ef78514",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/youtube_player_iframe/assets/player.html": "dc7a0426386dc6fd0e4187079900aea8",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "efc6c90b58d765987f922c95c2031dd2",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "01bb14ae3f14c73ee03eed84f480ded9",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "0db203e8632f03baae0184700f3bda48",
"assets/packages/awesome_dialog/assets/rive/info_reverse.riv": "c6e814d66c0e469f1574a2f171a13a76",
"assets/packages/awesome_dialog/assets/rive/question.riv": "00f02da4d08c2960079d4cd8211c930c",
"assets/packages/awesome_dialog/assets/rive/warning.riv": "0becf971559a68f9a74c8f0c6e0f8335",
"assets/packages/awesome_dialog/assets/rive/info.riv": "2a425920b11404228f613bc51b30b2fb",
"assets/packages/awesome_dialog/assets/rive/success.riv": "73618ab4166b406e130c2042dc595f42",
"assets/packages/awesome_dialog/assets/rive/error.riv": "e74e21f8b53de4b541dd037c667027c1",
"assets/packages/awesome_dialog/assets/flare/succes.flr": "ebae20460b624d738bb48269fb492edf",
"assets/packages/awesome_dialog/assets/flare/succes_without_loop.flr": "3d8b3b3552370677bf3fb55d0d56a152",
"assets/packages/awesome_dialog/assets/flare/error.flr": "e3b124665e57682dab45f4ee8a16b3c9",
"assets/packages/awesome_dialog/assets/flare/info2.flr": "21af33cb65751b76639d98e106835cfb",
"assets/packages/awesome_dialog/assets/flare/warning_without_loop.flr": "c84f528c7e7afe91a929898988012291",
"assets/packages/awesome_dialog/assets/flare/info_without_loop.flr": "cf106e19d7dee9846bbc1ac29296a43f",
"assets/packages/awesome_dialog/assets/flare/warning.flr": "68898234dacef62093ae95ff4772509b",
"assets/packages/awesome_dialog/assets/flare/info.flr": "bc654ba9a96055d7309f0922746fe7a7",
"assets/packages/awesome_dialog/assets/flare/question.flr": "1c31ec57688a19de5899338f898290f0",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.smcbin": "4876d2f6873eb7c4c7d68af429d466f8",
"assets/fonts/MaterialIcons-Regular.otf": "6bd470777ec475eaf6135836b6412ff2",
"assets/assets/images/default_empty_view_image_mobile.png": "e0333daa0bf04df60e7eb3ac947b1bce",
"assets/assets/images/neutral_sentiment.png": "4c021faf7697130824d7d3c457ea5836",
"assets/assets/images/appbar_background.png": "a4cf970d3a177f147b678d69bcde5e6d",
"assets/assets/images/apes_logo.png": "8289123f62dcd033faadfd1e29d1704b",
"assets/assets/images/profile_icon.png": "3f1b482f0b30553cf3934ea8a6fba79f",
"assets/assets/images/positive_sentiment.png": "877819d01179a702439a786a5e17e4ee",
"assets/assets/images/consumption_icon.png": "6fa0a9b5262d7b9f825d0e5b724c58e6",
"assets/assets/images/before_wizard.png": "67821a540e4344a4255731a132f6b743",
"assets/assets/images/after_wizard.png": "a2e12ecc85d839ec605eb0d50776e3fa",
"assets/assets/images/office_icon.png": "97bcca4dcba5c06d9be561d08c1ed741",
"assets/assets/images/home_icon.png": "b3aca66a54ef0cbf1b4a2c95db59714f",
"assets/assets/images/water_icon.png": "f36064544b9d2c599008497a6311e2bd",
"assets/assets/images/finished_wizard.png": "e6bf1e7b0543cc07ad3a2629902685de",
"assets/assets/images/home_mobile_background.png": "bd03b286fc2824237ee9e0cba0e023c6",
"assets/assets/images/reach_us_icon.png": "a6608746c63606fe408756546cc1a70a",
"assets/assets/images/co2_icon.png": "6c87a37a5e336f38bb3e4b8c6746054d",
"assets/assets/images/water.png": "0f7d12652d6f05c3201196b63d3818e3",
"assets/assets/images/negative_sentiment.png": "acd7d9d0c1be91804dc9f432649a4c90",
"assets/assets/images/money.png": "97c5422c4bcde1e92a88c3b48026ce15",
"assets/assets/images/offers_icon.png": "ace6250b99b005177e4e006c604510f2",
"assets/assets/images/money_icon.png": "cc22399a494a29f17818f63df39c5347",
"assets/assets/images/learn_icon.png": "2736ae774bf580b621eb12b322ac04c8",
"assets/assets/images/solutions_icon.png": "0c1940ac69132d5d539c53597ab265a7",
"assets/assets/images/wms_logo.png": "2cf1f7ad832f64d81992bfece7e1498c",
"assets/assets/images/home_desktop_background.png": "4a2cd73c32307f920f962d8ae870cd56",
"assets/assets/languages/en.json": "99914b932bd37a50b983c5e7c90ae93b",
"assets/assets/languages/ar.json": "99914b932bd37a50b983c5e7c90ae93b",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
