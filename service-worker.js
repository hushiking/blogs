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
    "revision": "076178858ebd845d2c8a2e9ecb3d8924"
  },
  {
    "url": "about/index.html",
    "revision": "abd7167a8c798addba046cdad8e747da"
  },
  {
    "url": "assets/css/0.styles.798a3e5c.css",
    "revision": "5e1b09905ddf85b2cb0db60a748beb6b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.349bb8a2.js",
    "revision": "565ee58288319e011d5237784cb62ce3"
  },
  {
    "url": "assets/js/11.6635ecd8.js",
    "revision": "0655bf369d280d671ac807d79bf02b26"
  },
  {
    "url": "assets/js/12.1862cbe2.js",
    "revision": "940acacc2847cd9187a4290922f76663"
  },
  {
    "url": "assets/js/13.4d55cbf7.js",
    "revision": "86e11aa5a4d4e8e92b192ae2fde92f2c"
  },
  {
    "url": "assets/js/14.a6373e0d.js",
    "revision": "1dbe7ecb470a2d481fef9bd7464d8bb2"
  },
  {
    "url": "assets/js/15.f1d685e3.js",
    "revision": "40daa36b499ae2329127173e1b69f234"
  },
  {
    "url": "assets/js/16.396c51be.js",
    "revision": "c76405ec20f25e90893aab502a4125a0"
  },
  {
    "url": "assets/js/17.25f5f5b3.js",
    "revision": "15e45c4dff212e28e076340f328a6223"
  },
  {
    "url": "assets/js/18.244f9d32.js",
    "revision": "25519a3432f2dfdfc65995c6a1ff60c1"
  },
  {
    "url": "assets/js/19.a9191cab.js",
    "revision": "fcac265553b1b79ad0997bb6ac7ccce1"
  },
  {
    "url": "assets/js/2.e3938708.js",
    "revision": "91857a03d078d845aa2dc28dafaf980f"
  },
  {
    "url": "assets/js/20.2c74cfa3.js",
    "revision": "dd2d61f8a521a7487f182eb3ad9da3ff"
  },
  {
    "url": "assets/js/21.29fcc459.js",
    "revision": "e6382690062493bd3ed962d781fb163c"
  },
  {
    "url": "assets/js/22.48fe08b2.js",
    "revision": "d874111cc738425870fb38d054addb67"
  },
  {
    "url": "assets/js/23.dc86fc0e.js",
    "revision": "4e55369a969996c961e7b0be01947b83"
  },
  {
    "url": "assets/js/24.43059530.js",
    "revision": "4c8d7087d843a1cd85404226caae16ab"
  },
  {
    "url": "assets/js/25.db064b93.js",
    "revision": "19d1dc8fd78dc61ff9ba765addba21a8"
  },
  {
    "url": "assets/js/26.d1bf62fa.js",
    "revision": "08161d07994dda4bf915b754e29be4cc"
  },
  {
    "url": "assets/js/27.7cd923cf.js",
    "revision": "fa85ade6778d6dd76cd805ec7919b18a"
  },
  {
    "url": "assets/js/28.ca7c3400.js",
    "revision": "f7bd7b6fc36e6368ab42ca4ab32ab80b"
  },
  {
    "url": "assets/js/29.a2bc4aea.js",
    "revision": "67b3e297a2acaacd4d5115fd45d9715d"
  },
  {
    "url": "assets/js/3.cacac480.js",
    "revision": "9dea791445bec8e91dc9d7130ef9dff9"
  },
  {
    "url": "assets/js/30.5d892a81.js",
    "revision": "820df6f2bc65fec0350e723044508781"
  },
  {
    "url": "assets/js/31.0991a3f3.js",
    "revision": "a0cd9cf13caddcbf19b7092f905c3b45"
  },
  {
    "url": "assets/js/32.a6c4fd5b.js",
    "revision": "0f7ace25b674a7ba64ce5434cd15d007"
  },
  {
    "url": "assets/js/33.ff4f0f42.js",
    "revision": "db65acbe30696be916341238aeeccd09"
  },
  {
    "url": "assets/js/34.6f1299ca.js",
    "revision": "9f4280d3f065bf1b753e657f40014389"
  },
  {
    "url": "assets/js/35.f4a1e6ec.js",
    "revision": "df75a81a14af66a7d0f970be9b10220d"
  },
  {
    "url": "assets/js/36.df1b426f.js",
    "revision": "248530cdfdc61328d42b40ac027d19b5"
  },
  {
    "url": "assets/js/37.c8c41246.js",
    "revision": "1cfeff8f2c2562c4e23da3e6ea823f64"
  },
  {
    "url": "assets/js/38.658095f0.js",
    "revision": "198b92ea4705dfd49c39d28d8430d313"
  },
  {
    "url": "assets/js/39.00e92083.js",
    "revision": "192fbfe4b45462d87effc33645610b9c"
  },
  {
    "url": "assets/js/4.4779633d.js",
    "revision": "fc7220c65abe69aa11914a8caa0d4470"
  },
  {
    "url": "assets/js/5.66a2a154.js",
    "revision": "405eb807c01f5cf16b690d1b0f7d4033"
  },
  {
    "url": "assets/js/6.fadff65e.js",
    "revision": "26b29ab35d2d13402d3fa4a1ea946600"
  },
  {
    "url": "assets/js/7.489ed76a.js",
    "revision": "90e9f3cc1d3d8e5ca15712857b8ed999"
  },
  {
    "url": "assets/js/8.162e2720.js",
    "revision": "d141b9187fa9461c31421a76210df62d"
  },
  {
    "url": "assets/js/9.ec25f8e8.js",
    "revision": "09cba2af4fce195d835c736bcecb69fe"
  },
  {
    "url": "assets/js/app.6d534184.js",
    "revision": "c9de8c28631edde225d890dc510b9028"
  },
  {
    "url": "back-end/index.html",
    "revision": "e3b86997b2f4ffb19a14da4314445aa4"
  },
  {
    "url": "essays/index.html",
    "revision": "905191caa111cce2d818faee75d8c0c2"
  },
  {
    "url": "fire.png",
    "revision": "1dc7d0a43fc79431c1f48e2fbefe4fd7"
  },
  {
    "url": "front-end/css/CSS属性中的百分比单位.html",
    "revision": "816f459b27a74d568e2421adffe79d11"
  },
  {
    "url": "front-end/css/flex布局左侧固定右侧内容不超过容器.html",
    "revision": "89746e6275a78264dac48c248091aa53"
  },
  {
    "url": "front-end/css/index.html",
    "revision": "1241c5614b1b7e8366f2bf4ff8cf47fb"
  },
  {
    "url": "front-end/framework/index.html",
    "revision": "35fa786ce61c73e59718d9a09d399c01"
  },
  {
    "url": "front-end/h5/index.html",
    "revision": "228fd7b3431ccb3e7b5792900f7ed044"
  },
  {
    "url": "front-end/html/index.html",
    "revision": "fcad3a79509b9aceaef579ec84a735c2"
  },
  {
    "url": "front-end/index.html",
    "revision": "b15e4a28c8aa856969f321150c1dd7ef"
  },
  {
    "url": "front-end/javascript/ECMAScript6.html",
    "revision": "ab178db39385be645dfa1da28a77c1c6"
  },
  {
    "url": "front-end/javascript/for...in与for...of区别.html",
    "revision": "af4d8a141091e95aa50d4efba8c255f3"
  },
  {
    "url": "front-end/javascript/form表单的name属性与submit()默认事件.html",
    "revision": "c169b99b4a90f34fc1d6d212b7ede5ac"
  },
  {
    "url": "front-end/javascript/index.html",
    "revision": "cb5f903a174950699ec09f8d1ceeb44a"
  },
  {
    "url": "front-end/javascript/JS可枚举与不可枚举.html",
    "revision": "e8cbe5228b14aea5103cee13d7bfbf81"
  },
  {
    "url": "front-end/javascript/JS正则表达式.html",
    "revision": "1bbefbb00b6d82bff07a9139c9a7ea97"
  },
  {
    "url": "front-end/javascript/JS生成[n,m]随机数.html",
    "revision": "bb60208099100b542c09410372618bb2"
  },
  {
    "url": "front-end/javascript/JS获取元素计算后属性.html",
    "revision": "b07271880f8bd0bd838e6301dc515e50"
  },
  {
    "url": "front-end/javascript/JS表达式与语句的区别.html",
    "revision": "874a3273e6db25e00c2cf04c1be0d8c3"
  },
  {
    "url": "front-end/javascript/Promise.then方法.html",
    "revision": "ce3cfcb10b4482fe28830e8b6f6bd56f"
  },
  {
    "url": "front-end/javascript/Promise实践之连续加载图片.html",
    "revision": "9426acbe2414868edd170970d0e048c7"
  },
  {
    "url": "front-end/javascript/this指向问题.html",
    "revision": "bdb57d76596aaae4f91821e2cfb6e70a"
  },
  {
    "url": "front-end/javascript/使用Proxy实现双向数据绑定.html",
    "revision": "4d226798b77e2654b92defcb83c9c811"
  },
  {
    "url": "front-end/javascript/使用访问器属性实现双向数据绑定.html",
    "revision": "e23e7bda3d3dca5e8fdeb267b5b637a7"
  },
  {
    "url": "front-end/javascript/原型与原型链.html",
    "revision": "351393fda81d0cf3b9d9b77210f469a0"
  },
  {
    "url": "front-end/javascript/总结一些常用的面试题.html",
    "revision": "1723d9291d72678d9c5a6ca2d96613d1"
  },
  {
    "url": "front-end/tool/index.html",
    "revision": "ca6892da598b79d41a36623b8f9a31fa"
  },
  {
    "url": "front-end/tool/去掉已经托管在git上的文件.html",
    "revision": "a62866e933a95739b0592293ea9c3f82"
  },
  {
    "url": "front-end/tool/解决VSCode占用CPU过高问题.html",
    "revision": "4fae19dd1765f1d79f4deb870e2ca265"
  },
  {
    "url": "images/front-end/code-helper.jpg",
    "revision": "de1db86dd165f3bd50c057dbc943bdfb"
  },
  {
    "url": "images/front-end/表达式与语句.png",
    "revision": "c414abf12be83bfcc182d6971bc8180f"
  },
  {
    "url": "index.html",
    "revision": "53c589551907556d264b33c688a43aa7"
  },
  {
    "url": "linux/index.html",
    "revision": "3fc6e41e5afffc562636bc3f91ef5f53"
  },
  {
    "url": "notes/index.html",
    "revision": "bf66c0e4fbf49b69a439fc550ba2f82c"
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
