module.exports = {
  title: '化简为凡',
  description: '化简为凡的文档， VuePress 文档，技术文档，博客，笔记，心得体会。',
  head: [
    ['link', {
      rel: 'icon',
      href: '/garageband.ico'
    }],
    ['link', {
      rel: 'manifest',
      href: '/manifest.json'
    }]
  ],
  plugins: {
    '@vuepress/pwa': {
      serviceWorker: true,
      updatePopup: {
        message: "发现新内容可用.",
        buttonText: "刷新"
      }
    }
  },
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  // base: '/blogs/',
  themeConfig: {
    repo: 'hushiking/blogs',
    // 假如文档不是放在仓库的根目录下：
    docsDir: 'docs',
    editLinks: true,
    lastUpdated: 'Last Updated', // string | boolean
    nav: [{
        text: '前端',
        items: [{
            text: 'JS',
            items: [{
                text: 'JS 语法',
                link: '/js/base/'
              },
              {
                text: 'JS 框架',
                link: '/js/framework/'
              }
            ]
          },
          {
            text: 'CSS',
            items: [{
              text: '布局',
              link: '/css/layout/'
            }, {
              text: 'CSS 语法',
              link: '/css/base/'
            }]
          }
        ]
      },
      {
        text: '后端',
        link: '/back-end/'
      },
      {
        text: '运维与Linux',
        link: '/linux/'
      },
      {
        text: '读书笔记',
        link: '/notes/',
      },
      {
        text: '自由随笔',
        link: '/essays/'
      },
      {
        text: '关于',
        link: '/about/'
      }
    ],
    sidebar: {
      '/css/base/': [
        '', /* /foo/ */
        'CSS属性中的百分比单位', /* /foo/one.html */
      ],

      '/css/layout/': [
        '',
        'flex布局左侧固定右侧内容不超过容器', /* /foo/two.html */
      ],

      '/js/base/': [
        '', /* /bar/ */
        'for...in与for...of区别', /* /bar/three.html */
        'form表单的name属性与submit()默认事件', /* /bar/four.html */
      ],

      '/js/framework/': [
        '',
      ],

      // fallback
      '/': [
        '', /* / */
        'about' /* /about.html */
      ]
    }
  }
}