"use strict";var precacheConfig=[["/glugpace/index.html","54e0b2c941ad20491bf758c53d3cc9af"],["/glugpace/static/css/main.fedc976f.css","0243d591f4e163a767e761667516380f"],["/glugpace/static/js/main.fe5ec6a5.js","58dbab5dcf2eb9e04d646b5bf9c09cfa"],["/glugpace/static/media/android-session.8799f36d.jpg","8799f36dd152fa72e308cdad7f3075be"],["/glugpace/static/media/bg.fbfed26d.jpeg","fbfed26db8c3f3e825060cf7c9f02c1a"],["/glugpace/static/media/bytestruck2015.3f32fbbd.jpg","3f32fbbda04c0c1471e211c7ea7c1729"],["/glugpace/static/media/chars.a3869264.png","a3869264d1902df5db7125c6a37bf26c"],["/glugpace/static/media/github-session.e9058c9f.png","e9058c9f40c0a4ce2399bb9b2ae0a634"],["/glugpace/static/media/ignite16.ecf7b0d8.jpg","ecf7b0d84d9f1e15ea7c504b48115903"],["/glugpace/static/media/ignite19.f0c577ac.png","f0c577ace7e48ba84eabccca14d4a145"],["/glugpace/static/media/laravel-php.36032f37.jpg","36032f372c3eb9c8ed08fbddb861970d"],["/glugpace/static/media/logo.646313ff.png","646313ff15461da4cb84fb89a730b4fe"],["/glugpace/static/media/python-workshop.423a7f0a.jpg","423a7f0a7aa7c783909d27a6df7d4cc1"],["/glugpace/static/media/students.08113490.png","081134903c6f83c80e2a9e9e1804daa6"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var c="/glugpace/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});