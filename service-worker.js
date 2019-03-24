/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "9a811be356b2f59d67d3a6677cfdcab3"
  },
  {
    "url": "assets/css/0.styles.35aa3fd2.css",
    "revision": "d48e80920c5e410707ac8aa33db5c8bf"
  },
  {
    "url": "assets/img/demo1.a4d19d03.jpg",
    "revision": "a4d19d03662f8cf9cc945959b8d3023e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.857a1d9c.js",
    "revision": "4d11127b00238579916a45b2a38e06ff"
  },
  {
    "url": "assets/js/11.6fe75b28.js",
    "revision": "45e9485a3d337cebb27e4fe455af5d38"
  },
  {
    "url": "assets/js/12.6db9fd57.js",
    "revision": "31966a2c640a9393c245017dbbc5615b"
  },
  {
    "url": "assets/js/13.c652824f.js",
    "revision": "fd526747cd49b5a7ef73962cc2fc9b42"
  },
  {
    "url": "assets/js/14.cee86c9a.js",
    "revision": "252019025ff6843e48f957e77c40b975"
  },
  {
    "url": "assets/js/15.95a8c1d6.js",
    "revision": "f4a1a1104d2fa6e6c3417cd3c9dbf5c2"
  },
  {
    "url": "assets/js/16.f5e3f5fa.js",
    "revision": "c439b5458b2755a596d68a3fe7cbf2a0"
  },
  {
    "url": "assets/js/17.ac9d7db6.js",
    "revision": "dba75e2c2f4721804959f9767e920497"
  },
  {
    "url": "assets/js/18.337d3dc3.js",
    "revision": "c082ede59365376bf9a40acaa2e05fe8"
  },
  {
    "url": "assets/js/19.094b16d0.js",
    "revision": "82a93fd4122e40d3345c0508914de079"
  },
  {
    "url": "assets/js/2.aa6679b2.js",
    "revision": "76790ce8f611b33a569261bf52b03a22"
  },
  {
    "url": "assets/js/20.a7044630.js",
    "revision": "d1c1cac9742f35ae001ea3b47454dd54"
  },
  {
    "url": "assets/js/21.f3973c76.js",
    "revision": "1af99c6a2d609f89c3ed99e29cc64aba"
  },
  {
    "url": "assets/js/22.15413560.js",
    "revision": "f97391df28216788f7469ccc05ff0846"
  },
  {
    "url": "assets/js/23.0ac99f0d.js",
    "revision": "23a7816f9825df4351ce1413c9a9c872"
  },
  {
    "url": "assets/js/24.1052dd90.js",
    "revision": "5dea982347e0c1ce898b27f74ee96192"
  },
  {
    "url": "assets/js/25.658c7ace.js",
    "revision": "5c7fc704eab711053169dfa8d86326a3"
  },
  {
    "url": "assets/js/26.adb4da0e.js",
    "revision": "1c3703184096a7fdec35ced1c2d1fe41"
  },
  {
    "url": "assets/js/27.f46dba94.js",
    "revision": "bbc4985bd6b4190758a14422c6eae52c"
  },
  {
    "url": "assets/js/28.6162d905.js",
    "revision": "9cebe056d324656386ae2a7cc40c0a48"
  },
  {
    "url": "assets/js/29.e1c3eb22.js",
    "revision": "0a657ed02f975452217e37da3a373ba5"
  },
  {
    "url": "assets/js/3.9d4b450a.js",
    "revision": "7f8e90107bc5cd2e345479e77a1a53d9"
  },
  {
    "url": "assets/js/30.619c9e73.js",
    "revision": "d2ebf0cd5797b0e73e1d972b08d0a379"
  },
  {
    "url": "assets/js/31.ccfba318.js",
    "revision": "7eea1f499aa174317ed677e2d71f0381"
  },
  {
    "url": "assets/js/32.f7a54837.js",
    "revision": "15d217b0cd8c8aa6843e021a6eed25f0"
  },
  {
    "url": "assets/js/33.b2d4ba4a.js",
    "revision": "caf99386ea51432fbb6afcd4238b15ad"
  },
  {
    "url": "assets/js/34.b69a2c60.js",
    "revision": "89c944475e7b0ef8196374e0d6271589"
  },
  {
    "url": "assets/js/35.83eebef6.js",
    "revision": "5b536ed6679dd03e926007066ec6be37"
  },
  {
    "url": "assets/js/36.363e8987.js",
    "revision": "a93293f0a19a78845e27d6a0667ea3e6"
  },
  {
    "url": "assets/js/37.51154014.js",
    "revision": "bb7b2209d304b2bf1f0ccbc760b29ead"
  },
  {
    "url": "assets/js/38.13a66d58.js",
    "revision": "15005d1f0e920bd734ada600bf0a48e6"
  },
  {
    "url": "assets/js/39.b17b5b75.js",
    "revision": "127451063d490f68f92c67495a5b0050"
  },
  {
    "url": "assets/js/4.1dcb59de.js",
    "revision": "c22f6eb1561f1ec1751b1d4e0df69a7e"
  },
  {
    "url": "assets/js/40.2ff3a561.js",
    "revision": "3f1fc7d6098abe90d84e2b0628e6ed2a"
  },
  {
    "url": "assets/js/41.426cca0c.js",
    "revision": "48f744ee93f48d4580b4e464d068cd23"
  },
  {
    "url": "assets/js/42.cd8b58b9.js",
    "revision": "77ae667ac8e998ae04f7b95eb0e91180"
  },
  {
    "url": "assets/js/43.3238376e.js",
    "revision": "9325d4a157fe12aedd193301bc7c09e9"
  },
  {
    "url": "assets/js/44.5a068fe6.js",
    "revision": "fab61ae6f78a1e47501a8ee567eee730"
  },
  {
    "url": "assets/js/45.34fe6983.js",
    "revision": "036f719edfed7944d120c806ab7fab87"
  },
  {
    "url": "assets/js/46.a215f544.js",
    "revision": "1626c3e188025e79df1add7336a8655f"
  },
  {
    "url": "assets/js/5.793c30e9.js",
    "revision": "5a564efbf7504258c1bb3b76b18bd0f5"
  },
  {
    "url": "assets/js/6.84f5b1f0.js",
    "revision": "95261cd93ba330696dc94bb8bdb331ac"
  },
  {
    "url": "assets/js/7.ff55a58a.js",
    "revision": "a24c9d38b625b4e6b12c048bd452dc35"
  },
  {
    "url": "assets/js/8.ca70a968.js",
    "revision": "83f64dada1141b3b5bd5411a7b1b4e7a"
  },
  {
    "url": "assets/js/9.e15c6826.js",
    "revision": "a645cb8e26ccc195d19cc4ccf4803468"
  },
  {
    "url": "assets/js/app.b2e57c85.js",
    "revision": "fffe9c2f98af2c942ad1f357cc694579"
  },
  {
    "url": "collection/index.html",
    "revision": "d35ac579ec318d97ccb197ae48c72d9a"
  },
  {
    "url": "demo/index.html",
    "revision": "88892cef6575fea26c6d07926f84951d"
  },
  {
    "url": "demo1.jpg",
    "revision": "a4d19d03662f8cf9cc945959b8d3023e"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "home1.jpg",
    "revision": "7da232ed8da01898e21a4923b5c752e6"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "54e1feb8822f21d67a1e9da8c4ba3202"
  },
  {
    "url": "line-numbers-desktop.png",
    "revision": "7c8ccab7c4953ac2fb9e4bc93ecd25ac"
  },
  {
    "url": "line-numbers-mobile.gif",
    "revision": "580b860f45436c9a15a9f3bd036edd97"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "note/algorithm/index.html",
    "revision": "f90939a4da5d3f2138a837ee2463c289"
  },
  {
    "url": "note/algorithm/sort.html",
    "revision": "8d7ff84f116aad9108a196bca056db09"
  },
  {
    "url": "note/browser/ajax.html",
    "revision": "63b1aff3ddac5fcef0bf357513bcb00a"
  },
  {
    "url": "note/browser/browser.html",
    "revision": "e9e035d2c469ebf1e6d3c3b90bfc7f5e"
  },
  {
    "url": "note/browser/cors.html",
    "revision": "4d39c94d1c8b83c831f6530f6fe796c4"
  },
  {
    "url": "note/browser/event-loop.html",
    "revision": "9bc79bf2402b18943de19107463b6a47"
  },
  {
    "url": "note/browser/index.html",
    "revision": "f87b0dcaaf1705598fad7115bf633fb2"
  },
  {
    "url": "note/browser/render.html",
    "revision": "73203afe1222c5dc06cb53c3b5b1e54a"
  },
  {
    "url": "note/browser/storage.html",
    "revision": "4746693cf96c3560696356f0e85fa39a"
  },
  {
    "url": "note/code/code1.html",
    "revision": "4e933eb0fcb19aff8b3e046bfd26036c"
  },
  {
    "url": "note/code/index.html",
    "revision": "db80328ebb5f4b6ccd2465a2f0b07f48"
  },
  {
    "url": "note/css/css1.html",
    "revision": "88cdcc66c78e6112b0215ac0c458ebaa"
  },
  {
    "url": "note/css/index.html",
    "revision": "56e8ed6dd3488ddfe87d3c2f22f42727"
  },
  {
    "url": "note/es6/es6-1.html",
    "revision": "ed6af3a5f6521c315411d32506f72ae8"
  },
  {
    "url": "note/es6/index.html",
    "revision": "271f4107d653ff794cfd29db020f479f"
  },
  {
    "url": "note/html/html1.html",
    "revision": "1cf9d03bd0198f591a901bc7c6d27c13"
  },
  {
    "url": "note/html/index.html",
    "revision": "74ba3c317a7952f20b179bbd318a93f1"
  },
  {
    "url": "note/index.html",
    "revision": "8af34130f3e9a5b62f45a50aa930f864"
  },
  {
    "url": "note/JavaScript/func.html",
    "revision": "a09028a09e2ed04e16e61e81a981d41a"
  },
  {
    "url": "note/JavaScript/index.html",
    "revision": "a3b7ddae6b956254af7d2f49d44ef62e"
  },
  {
    "url": "note/JavaScript/promise.html",
    "revision": "64194f2708604896f137565140274bc0"
  },
  {
    "url": "note/JavaScript/proto.html",
    "revision": "186a7acf4c71a34c3e5f656e79dca32d"
  },
  {
    "url": "note/JavaScript/regexp.html",
    "revision": "8e496b548c5848669dd8a9e08b7ca66d"
  },
  {
    "url": "note/node/index.html",
    "revision": "610fdee1747629103449130cf3d8a055"
  },
  {
    "url": "note/node/node.html",
    "revision": "e59abd8cb0654325f3a3ad7dbe4b7cd0"
  },
  {
    "url": "note/optimize/index.html",
    "revision": "9ba949769a8d8b94250cf66d374fe573"
  },
  {
    "url": "note/optimize/optimize.html",
    "revision": "209d882853dc7234b98a543e48946a77"
  },
  {
    "url": "note/other/index.html",
    "revision": "e340f28091c9c15e87d1c2d18a2cd2e4"
  },
  {
    "url": "note/other/other.html",
    "revision": "2ad9bd94a8a9b40148d2a7fe107e15eb"
  },
  {
    "url": "note/vue/index.html",
    "revision": "f814bb5bd7a7b7a1979a6a7bae314279"
  },
  {
    "url": "note/vue/vue.html",
    "revision": "c87fc516f0ac831221b277779ffba906"
  },
  {
    "url": "note/web/http.html",
    "revision": "6595f8bda66161cbd7d14805f395ac2a"
  },
  {
    "url": "note/web/index.html",
    "revision": "abd639696235f1a4b1d0474a85291694"
  },
  {
    "url": "note/web/web-safety.html",
    "revision": "40110bb0d4039768cd84ce4925ef4f98"
  },
  {
    "url": "resume/index.html",
    "revision": "f94c42abdbc25a5c953ab887cc22529c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
