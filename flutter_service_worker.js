'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "b2a79f4e545cae8292f951fdb0787892",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "cdaeb30a9f7e8df1deb304d17479c46f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c6375a786a306c7d00fab0557c6217c5",
".git/logs/refs/heads/master": "ec372432cc5042b273a7e533968e1e56",
".git/objects/13/5dfb445c357ed4eaeb89c1519f548f1dd0c6fd": "64b70fb39e5d6c1838a542d94f088760",
".git/objects/13/6e904a452fc25966acf8ee3180c909b8768fc2": "87df01afcb63aa4b184bd1bd62dc85a3",
".git/objects/17/a66cdd1750a2954b23594952e23191bc3add30": "1ee0acf9d65f50287268d8f19359f682",
".git/objects/2c/f7f5a754b61f7eaf1a506d3db759d9ee9fe948": "5f099e36c73042ba3404eab27605a342",
".git/objects/2f/2effd0c3b801c37d5e653f7b0845c28c7094ec": "fc081f685ac01ef127c6e2b898363c88",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/39/b3660538f87576db63a68b9e7c8424b3e2f0c1": "5cc83a2355bfdc0d9b4b901c284760bf",
".git/objects/3f/8265cb487188cfff7c208fbf98163bad008c66": "107c64488903c6e8d07aab58ba39ada6",
".git/objects/45/a5c7e9edb380c77461c3dfd5f7d012222dfb36": "945048630c79fc54ec33c48b631b9708",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/51/4dae3a0469e526cf109f312c2b636daf9b7062": "aedd04db658afe737d6e5897bbe67e80",
".git/objects/63/71526abf5ed2f7ed19273baf7d052b346dee7e": "c7c513ee105f99f182402c90a9f5471b",
".git/objects/65/d17c18000c03798fb53bfe8a650a6874c4544f": "590bd0467b7016b433f3ddbdb6b8066e",
".git/objects/6a/84669eb72d389982cdd0174b595a05223bd5a6": "8da0806ae12d45d9cd037e412f46b284",
".git/objects/76/81bd02f6484ac61b1bf25bcdcd00837e25510c": "49725ae1a8bac85c7c51c31beb0499fa",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/80/1108965d6bfb9253a4d78eacc264cf4fcd8960": "3fb1fa0030aa842a835428562a07ad85",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/96/09bdad41ca36d524e1b4303ab5309fe0ef4dda": "9e043a936935d717567bba90698b6b90",
".git/objects/97/f5dc3da576defced21c0988c1f0a8034006041": "721829760ffbe5a94c9b7c5ff291ab1a",
".git/objects/98/1251a3758b49e19331791b867e1e480b5231e5": "2c2e87b534169ff6b17dcc2e3266f3c3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c2/b44b0009e2104bb4818361d2e578f06a69db0e": "3839159ec908bdff8d1e0ef0535a16c9",
".git/objects/cd/f376fbd6415f18c79df45482254c8d2348ba24": "6ff4ee233777f847a7a7fa7b006eb5f2",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/0a80ddee9126cd76b5c5776d8e86cfd74cb55d": "8a6631c3f6da63c56c9245ddd8aae975",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f3/3a75a3d548e1c266b680f6030bc631f76e43e9": "dfd4fa0898747efb53e8ba2458956953",
".git/objects/f9/fa24408f2bc3da9b26982e61732a9a6bf61425": "1844f7a1e2c005852d146eff006fdb88",
".git/objects/fc/f8e4d9b9e2f7f135f8c3fa73c11216815c6ced": "181323a246ce7b17555b511c6b62e50a",
".git/refs/heads/master": "1215f5418a945187c6b811800e3c1e78",
"assets/AssetManifest.json": "29d0fa0f82ebabb3fcf5bfa478d3bcfd",
"assets/assets/china.png": "bf5d8a244dadc18323bc6a7d121d1a23",
"assets/assets/france.png": "d5c12041f2ddd200c2c881e5be833179",
"assets/assets/img1.png": "4d166536fe0468f0e5ede72652ec753f",
"assets/assets/img2.png": "b7e46d2fc37a7532471dea0df8358042",
"assets/assets/img3.png": "4dbe856d9f6a08b97a21651738f55828",
"assets/assets/japan.png": "f08fff44b95f18959c3603e36d1b47dc",
"assets/assets/loading.png": "d4d6dafea9e7488ce9c790ae221487e5",
"assets/assets/logo.png": "2b9704aec11680a75dd8a7367517e4fd",
"assets/assets/russia.png": "0549a0d01fd31662e91ac382f6071187",
"assets/assets/united-kingdom.png": "a0f21f7bff7a0eb9ce4ebf9af7ef03c7",
"assets/assets/vietnam.png": "4aee6772d4e03012b78f5b99c97ba859",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "322ca53649fecceac127913d09838375",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "437dc729142bc603fcfbf1314da2960d",
"/": "437dc729142bc603fcfbf1314da2960d",
"main.dart.js": "04791364f0099db6b52207dcb6048059",
"manifest.json": "83d533e5ab22a8928a684b90a19bb48d",
"version.json": "fe3614bc69b6d5841fdc4da774f9fa71"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
