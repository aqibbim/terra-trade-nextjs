if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return r[e]||(s=new Promise(async s=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=s}else importScripts(e),s()})),s.then(()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]})},s=(s,r)=>{Promise.all(s.map(e)).then(e=>r(1===e.length?e[0]:e))},r={require:Promise.resolve(s)};self.define=(s,a,n)=>{r[s]||(r[s]=Promise.resolve().then(()=>{let r={};const c={uri:location.origin+s.slice(1)};return Promise.all(a.map(s=>{switch(s){case"exports":return r;case"module":return c;default:return e(s)}})).then(e=>{const s=n(...e);return r.default||(r.default=s),r})}))}}define("./sw.js",["./workbox-6f0d2936"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/",revision:"rhNxzhUFwgZSNg_Lc5fl8"},{url:"/_next/static/chunks/19271566f084d9e3c509d2bd5009e3df5cfd836b.92878cf99693685a7c2c.js",revision:"40af5a903ebe5b92815200598a2aad16"},{url:"/_next/static/chunks/framework.0f140d5eb2070c7e423d.js",revision:"a07dacbb502f5257565ceb7d460e71e6"},{url:"/_next/static/rhNxzhUFwgZSNg_Lc5fl8/_buildManifest.js",revision:"fb96ae7926f5104f50f0cf1b3a23a9b5"},{url:"/_next/static/rhNxzhUFwgZSNg_Lc5fl8/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/_next/static/rhNxzhUFwgZSNg_Lc5fl8/pages/_app.js",revision:"e222232f5227dcee42d886a2822aa4f7"},{url:"/_next/static/rhNxzhUFwgZSNg_Lc5fl8/pages/_error.js",revision:"b3138c6393630c9edfd9990b6d372a92"},{url:"/_next/static/rhNxzhUFwgZSNg_Lc5fl8/pages/index.js",revision:"a1920bd0e70aac12e22726d6189fef53"},{url:"/_next/static/runtime/main-e62a9b389ac7f450c2c7.js",revision:"3cc5d23213ad83c41c99e74a8aeebfd4"},{url:"/_next/static/runtime/polyfills-516a1fdae57f705e03d1.js",revision:"bfccb4d8b5cdb208bb5e63076bb6e66f"},{url:"/_next/static/runtime/webpack-b65cab0b00afd201cbda.js",revision:"f5e6e2fca3144cc944812cfa3547f475"},{url:"/favicon.ico",revision:"412192267449ea67eebabd3e62acfe51"},{url:"/icons/192x192.png",revision:"b535937db1c57231fcd17557854c681e"},{url:"/icons/32x32.png",revision:"f343ad78db1125dc9462c0580314c3d0"},{url:"/icons/512x512.png",revision:"a77267e95a678d10556ccf7584a736b9"},{url:"/manifest.json",revision:"688128be216cc2f753fe641590f2fcd3"},{url:"/zeit.svg",revision:"7b2022f3692adf56949c7019f7ebb670"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/use\.fontawesome\.com\/releases\/.*/i,new e.CacheFirst({cacheName:"font-awesome",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.StaleWhileRevalidate({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.StaleWhileRevalidate({cacheName:"others",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
