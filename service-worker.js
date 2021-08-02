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
    "revision": "f6c727bb5a41b1070ca48c16aaef50b1"
  },
  {
    "url": "about/index.html",
    "revision": "3a37e0a6e74529ac966539b3e7ffc58b"
  },
  {
    "url": "assets/css/0.styles.ec72a7ef.css",
    "revision": "5e1b09905ddf85b2cb0db60a748beb6b"
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
    "url": "assets/js/11.2622da29.js",
    "revision": "4ac906669725a90e3a1139e24f8fa7dc"
  },
  {
    "url": "assets/js/12.83c0c8f2.js",
    "revision": "18adc332c62875bb882e5218f2b612c9"
  },
  {
    "url": "assets/js/13.f6122005.js",
    "revision": "8ec03551d41d4d2cd84e83c7f7b7d8ad"
  },
  {
    "url": "assets/js/14.3e518e77.js",
    "revision": "95496ddfc665985a9d216cd60b54b307"
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
    "url": "assets/js/20.61587303.js",
    "revision": "8946e65f65541df1bd81ff1ee35ae1a5"
  },
  {
    "url": "assets/js/21.da6a605d.js",
    "revision": "f79c271bdce684ae252fa97c591a4f6f"
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
    "url": "assets/js/25.362fdcad.js",
    "revision": "db3b768212ef0b980c871955e2f75325"
  },
  {
    "url": "assets/js/26.4277a6b9.js",
    "revision": "49f832d72f0c1e2ac620a6bb4e54748f"
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
    "url": "assets/js/29.8e64a73e.js",
    "revision": "bc010ff415046b1f78f2da153bd0feea"
  },
  {
    "url": "assets/js/3.470e69cf.js",
    "revision": "9dea791445bec8e91dc9d7130ef9dff9"
  },
  {
    "url": "assets/js/30.715ded8c.js",
    "revision": "629729c736e5a209c77ae2d3f6eb796f"
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
    "url": "assets/js/36.06151785.js",
    "revision": "a015815f4912902988139c0ca4049931"
  },
  {
    "url": "assets/js/37.faa2ca05.js",
    "revision": "67e4cda0c116dd184dec8cf3737f4079"
  },
  {
    "url": "assets/js/38.57e76f32.js",
    "revision": "44e1f58f879c4383e314ac7c7c18000a"
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
    "url": "assets/js/app.1428c50a.js",
    "revision": "dc811e205a7b2bc7e46e4e15fe4e3575"
  },
  {
    "url": "back-end/index.html",
    "revision": "a4e3d6480cabafff709a481687a1bee1"
  },
  {
    "url": "essays/index.html",
    "revision": "211364d5979544730222afb2b02fb661"
  },
  {
    "url": "fire.png",
    "revision": "1dc7d0a43fc79431c1f48e2fbefe4fd7"
  },
  {
    "url": "front-end/css/CSS属性中的百分比单位.html",
    "revision": "d57a9b36909a4d0de4979aec4286fe71"
  },
  {
    "url": "front-end/css/flex布局左侧固定右侧内容不超过容器.html",
    "revision": "0b21ba78a7cb3e7369e9caa00d25c7c5"
  },
  {
    "url": "front-end/css/index.html",
    "revision": "6e7076fa8e229a857bced966d711e5c2"
  },
  {
    "url": "front-end/framework/index.html",
    "revision": "7fa37d894ec7414b37b26e28759a92cd"
  },
  {
    "url": "front-end/h5/index.html",
    "revision": "8ae98a6f34a706c7024d5231ff7cc348"
  },
  {
    "url": "front-end/html/index.html",
    "revision": "6ae1277e4c611a0aa94dbe6cffc1f2c6"
  },
  {
    "url": "front-end/index.html",
    "revision": "907334304c1c6e0b6af1b6bab4d5f4b5"
  },
  {
    "url": "front-end/javascript/使用访问器属性实现双向数据绑定.html",
    "revision": "e2e5d981db19157d815dd6adfd254f7b"
  },
  {
    "url": "front-end/javascript/使用Proxy实现双向数据绑定.html",
    "revision": "49cc54f9ae8ef46df1ce06cec882895b"
  },
  {
    "url": "front-end/javascript/原型与原型链.html",
    "revision": "8626d4c36a44fe786fab29af3ed925fd"
  },
  {
    "url": "front-end/javascript/总结一些常用的面试题.html",
    "revision": "6646652443172a2d4891168bedfb9320"
  },
  {
    "url": "front-end/javascript/ECMAScript6.html",
    "revision": "46c610cc058de0ff035a8ee2d2fed4a8"
  },
  {
    "url": "front-end/javascript/for...in与for...of区别.html",
    "revision": "6e52866541dba89ad19302161e466228"
  },
  {
    "url": "front-end/javascript/form表单的name属性与submit()默认事件.html",
    "revision": "279bae0d8acf4ee4b535f26e45e633b4"
  },
  {
    "url": "front-end/javascript/index.html",
    "revision": "c7aa5408ba4296b45d6b7d3ffc19f6da"
  },
  {
    "url": "front-end/javascript/JS表达式与语句的区别.html",
    "revision": "f30376207ab0db209d01ddc64445b8c1"
  },
  {
    "url": "front-end/javascript/JS获取元素计算后属性.html",
    "revision": "db60d582f462103fbb8ece1c6496cb6c"
  },
  {
    "url": "front-end/javascript/JS可枚举与不可枚举.html",
    "revision": "81dcd4e09a841fb01e70db628658e07b"
  },
  {
    "url": "front-end/javascript/JS生成[n,m]随机数.html",
    "revision": "91ffc095a2012cf7d2cdb0bd632220c2"
  },
  {
    "url": "front-end/javascript/JS正则表达式.html",
    "revision": "c6aec65e655d1803f01076745e8679f2"
  },
  {
    "url": "front-end/javascript/Promise.then方法.html",
    "revision": "9dfc647b3a2d55f08bdde8e06ca8f773"
  },
  {
    "url": "front-end/javascript/Promise实践之连续加载图片.html",
    "revision": "8f9674e37bd92a6cc02f269cd7ea9181"
  },
  {
    "url": "front-end/javascript/this指向问题.html",
    "revision": "fc346d4ced07355707f115338d231d08"
  },
  {
    "url": "front-end/tool/解决VSCode占用CPU过高问题.html",
    "revision": "87f752ab7bcc220ee053369552b4fe03"
  },
  {
    "url": "front-end/tool/去掉已经托管在git上的文件.html",
    "revision": "831c48ae342a3709c0be893f9b5af7e0"
  },
  {
    "url": "front-end/tool/index.html",
    "revision": "23dbe9b2e66e7e59edea6778ae8d11ec"
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
    "revision": "a98b80017af2122adf0ab906d56bc7ab"
  },
  {
    "url": "linux/index.html",
    "revision": "c37909e556da9138818ec027706438b8"
  },
  {
    "url": "notes/index.html",
    "revision": "e667883834f23eb0b9c845fdccf9b0d5"
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
