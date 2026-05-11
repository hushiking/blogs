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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "3814d15bb685cd83621f3097d64692c2"
  },
  {
    "url": "about/index.html",
    "revision": "e01144d19e12df0063dc84a0ac9aa81e"
  },
  {
    "url": "assets/css/0.styles.37fcfece.css",
    "revision": "1725e1a1e61fb27298edbe1bc591a482"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.81efd998.js",
    "revision": "86e3880f9c23c687c9eb0e38fcd8fb8e"
  },
  {
    "url": "assets/js/11.4699dc33.js",
    "revision": "8ac8e4884813eda5c26e5195960d7852"
  },
  {
    "url": "assets/js/12.83c0c8f2.js",
    "revision": "18adc332c62875bb882e5218f2b612c9"
  },
  {
    "url": "assets/js/13.b91ed895.js",
    "revision": "c4f9865ffde08bbc730cc02c2f54b19c"
  },
  {
    "url": "assets/js/14.a5285b3f.js",
    "revision": "01d96f5cdd7389669face0c984dc2faf"
  },
  {
    "url": "assets/js/15.c30fe223.js",
    "revision": "13f20a59c71d5810358c50a45548b07d"
  },
  {
    "url": "assets/js/16.161cabe8.js",
    "revision": "a840c995670339a7369665c7461f1135"
  },
  {
    "url": "assets/js/17.bee13a26.js",
    "revision": "66da6eefc2dfe88ff950781e0b5e5a1b"
  },
  {
    "url": "assets/js/18.eb3371a7.js",
    "revision": "6d86f2c852fdfb2bf3eca5bedaeac907"
  },
  {
    "url": "assets/js/19.07ec4a72.js",
    "revision": "63377c2a7bf1ce9b184f77933356a722"
  },
  {
    "url": "assets/js/2.81e608ce.js",
    "revision": "91857a03d078d845aa2dc28dafaf980f"
  },
  {
    "url": "assets/js/20.62be7ed9.js",
    "revision": "55cb4fb06256d431eb1ebe0b316706e0"
  },
  {
    "url": "assets/js/21.bf276f51.js",
    "revision": "fa69b4fed1320b3f50791549b883d2a5"
  },
  {
    "url": "assets/js/22.0b305c64.js",
    "revision": "e2ff7b8fac0a5a8a3cc16c5edf9fadfc"
  },
  {
    "url": "assets/js/23.16349352.js",
    "revision": "5116440560210a62bc03cf6b23f0844c"
  },
  {
    "url": "assets/js/24.9d9b8ce9.js",
    "revision": "a02c94ab083e91f7944efb03f8c7ec21"
  },
  {
    "url": "assets/js/25.8d4c1d66.js",
    "revision": "dbc7327818d8edf67ac8c835dbd05b50"
  },
  {
    "url": "assets/js/26.0c3d0897.js",
    "revision": "857f3bb5a74994847d16f36353734067"
  },
  {
    "url": "assets/js/27.2e060572.js",
    "revision": "6497fd2ad83e8801364d285369460465"
  },
  {
    "url": "assets/js/28.9786dd07.js",
    "revision": "bbc5b4313d81886d4966a21f904bf49c"
  },
  {
    "url": "assets/js/29.623bf400.js",
    "revision": "5e12eb281577ee3e26888aad2c6d3af1"
  },
  {
    "url": "assets/js/3.470e69cf.js",
    "revision": "9dea791445bec8e91dc9d7130ef9dff9"
  },
  {
    "url": "assets/js/30.77118286.js",
    "revision": "106ca6374c913ad3d8554e57b727c0f7"
  },
  {
    "url": "assets/js/31.8ff111b9.js",
    "revision": "d57e32ce453d039f808f5c8d4bffd417"
  },
  {
    "url": "assets/js/32.d3ab1929.js",
    "revision": "5c464fabc880ffd3e741a59907a0db18"
  },
  {
    "url": "assets/js/33.44e06862.js",
    "revision": "6d6f1604c59997b6a3ed1e153dddb552"
  },
  {
    "url": "assets/js/34.d8f89fc7.js",
    "revision": "66897f149913310aa9e6bacfb9f4396b"
  },
  {
    "url": "assets/js/35.bee017a1.js",
    "revision": "405d71a83a218012ce30a84a108df02f"
  },
  {
    "url": "assets/js/36.8b7f38be.js",
    "revision": "2228d8c814e4be706e6f76479e7ac805"
  },
  {
    "url": "assets/js/37.faa2ca05.js",
    "revision": "67e4cda0c116dd184dec8cf3737f4079"
  },
  {
    "url": "assets/js/38.213f0a6b.js",
    "revision": "48c0e2f6beb38b4a380a08d54439fc39"
  },
  {
    "url": "assets/js/39.4c666a59.js",
    "revision": "192fbfe4b45462d87effc33645610b9c"
  },
  {
    "url": "assets/js/4.22296e49.js",
    "revision": "10211180a1953df4f13819068834431a"
  },
  {
    "url": "assets/js/5.8f65ba9d.js",
    "revision": "405eb807c01f5cf16b690d1b0f7d4033"
  },
  {
    "url": "assets/js/6.a65debd1.js",
    "revision": "26b29ab35d2d13402d3fa4a1ea946600"
  },
  {
    "url": "assets/js/7.80075e6f.js",
    "revision": "48f544ec1632bfa16c0e386b09538141"
  },
  {
    "url": "assets/js/8.f854bcc5.js",
    "revision": "dcc202ffa3322f1adaf5c20fdef655a3"
  },
  {
    "url": "assets/js/9.5a206c5b.js",
    "revision": "2bd95533ee4457816eccb97a5a5b18bf"
  },
  {
    "url": "assets/js/app.556e3b5e.js",
    "revision": "2bd6d94722fd2d249ae174db1eabda86"
  },
  {
    "url": "back-end/index.html",
    "revision": "6c6f859c7e82a2b00bed2a0a1bb7913d"
  },
  {
    "url": "essays/index.html",
    "revision": "bf31e96321cb17a2d6a7924317ffa06b"
  },
  {
    "url": "fire.png",
    "revision": "1dc7d0a43fc79431c1f48e2fbefe4fd7"
  },
  {
    "url": "front-end/css/CSS属性中的百分比单位.html",
    "revision": "efbc9f58392b149dec13e753cd5a67b1"
  },
  {
    "url": "front-end/css/flex布局左侧固定右侧内容不超过容器.html",
    "revision": "5297dd666af6098057b38f371643d0e5"
  },
  {
    "url": "front-end/css/index.html",
    "revision": "330cba3326a763558d7d6cae26dc8535"
  },
  {
    "url": "front-end/framework/index.html",
    "revision": "7aa106b15c65f3918b36cccc938d4b02"
  },
  {
    "url": "front-end/h5/index.html",
    "revision": "de9bb01b61c5012ed275fee48c09a418"
  },
  {
    "url": "front-end/html/index.html",
    "revision": "5c9120ce2bf4057308ea84470d86828d"
  },
  {
    "url": "front-end/index.html",
    "revision": "5ad37bbc1ecfed684109c5030e862d4f"
  },
  {
    "url": "front-end/javascript/使用访问器属性实现双向数据绑定.html",
    "revision": "6c8eedea3036dbe60b8073c849c98881"
  },
  {
    "url": "front-end/javascript/使用Proxy实现双向数据绑定.html",
    "revision": "35d4b012e895e21b724752c7a6636b5a"
  },
  {
    "url": "front-end/javascript/原型与原型链.html",
    "revision": "f1521f69c05c027a03e60edafea39d1b"
  },
  {
    "url": "front-end/javascript/总结一些常用的面试题.html",
    "revision": "a3de96c9b20f363324d23590f5cf36b5"
  },
  {
    "url": "front-end/javascript/ECMAScript6.html",
    "revision": "10a9dfad9578b1b3de2f547779532aba"
  },
  {
    "url": "front-end/javascript/for...in与for...of区别.html",
    "revision": "3cdcd75117d8905c60e9c67ace97949c"
  },
  {
    "url": "front-end/javascript/form表单的name属性与submit()默认事件.html",
    "revision": "c25ed95a88aff17f26c4c244f9b4ef8d"
  },
  {
    "url": "front-end/javascript/index.html",
    "revision": "7db3ff521a429379cc7dd2fa1c0512c0"
  },
  {
    "url": "front-end/javascript/JS表达式与语句的区别.html",
    "revision": "7077569da7319177b15e47e93220115a"
  },
  {
    "url": "front-end/javascript/JS获取元素计算后属性.html",
    "revision": "566e1cb43c3c31d0189c02a99e90aa81"
  },
  {
    "url": "front-end/javascript/JS可枚举与不可枚举.html",
    "revision": "da2b1a30b73f4ed041db04189e0b5a6b"
  },
  {
    "url": "front-end/javascript/JS生成[n,m]随机数.html",
    "revision": "e98f20897d3bf0b6b186222005ff7616"
  },
  {
    "url": "front-end/javascript/JS正则表达式.html",
    "revision": "1706469cc6f60fa7555af188c2af382f"
  },
  {
    "url": "front-end/javascript/Promise.then方法.html",
    "revision": "11dc09193e9c093a36363f9328468af0"
  },
  {
    "url": "front-end/javascript/Promise实践之连续加载图片.html",
    "revision": "3de6d6014a5dc300454c9afb8944ea96"
  },
  {
    "url": "front-end/javascript/this指向问题.html",
    "revision": "d16dfe6a44fbd227179ea7324286ae80"
  },
  {
    "url": "front-end/tool/解决VSCode占用CPU过高问题.html",
    "revision": "d8b158caf13adfce93d3210d81102fd0"
  },
  {
    "url": "front-end/tool/去掉已经托管在git上的文件.html",
    "revision": "5f0e78749c4792b4c5bda8d82ff524aa"
  },
  {
    "url": "front-end/tool/index.html",
    "revision": "8f773842fd92666b9a509ae3c8d47f04"
  },
  {
    "url": "images/front-end/表达式与语句.png",
    "revision": "c414abf12be83bfcc182d6971bc8180f"
  },
  {
    "url": "images/front-end/code-helper.jpg",
    "revision": "de1db86dd165f3bd50c057dbc943bdfb"
  },
  {
    "url": "index.html",
    "revision": "11dbac502ce605fae3cc901974b74182"
  },
  {
    "url": "linux/index.html",
    "revision": "d32013c261a22c92f8616ab1f40cb2e8"
  },
  {
    "url": "notes/index.html",
    "revision": "d27dff1d6295c6999bf815dde02a4ca3"
  },
  {
    "url": "Pumpkin.png",
    "revision": "8488576a18fd4e13fbbd1f505f481282"
  }
].concat(self.__precacheManifest || []);
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
