module.exports = {
  title: '化简为凡',
  description: '化简为凡的文档， VuePress 文档，技术文档，博客，笔记，心得体会。',
  themeConfig: {
    nav: [
      { text: 'External', link: 'https://google.com', target:'_self', rel:'' },
      { text: 'Guide', link: '/guide/', target:'_blank' },
      {
        text: 'Languages',
        ariaLabel: 'Language Menu',
        items: [
          { text: 'Chinese', link: '/language/chinese/' },
          { text: 'Japanese', link: '/language/japanese/' }
        ]
      }
    ],
    sidebar: {
      '/css/': [
        '',     /* /foo/ */
        'CSS属性中的百分比单位',  /* /foo/one.html */
        'flex布局左侧固定右侧内容不超过容器'   /* /foo/two.html */
      ],

      '/javascript/': [
        '',      /* /bar/ */
        'for...in与for...of区别', /* /bar/three.html */
        'form表单的name属性与submit()默认事件'   /* /bar/four.html */
      ],

      // fallback
      '/': [
        '',        /* / */
        'contact', /* /contact.html */
        'about'    /* /about.html */
      ]
    },
    lastUpdated: 'Last Updated', // string | boolean
  }
}