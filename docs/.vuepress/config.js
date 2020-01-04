const pluginConf = require('../../config/pluginConf')
const navConf = require('../../config/navConf')
const sidebarConf = require('../../config/sidebarConf/index')

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
  plugins: pluginConf,
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
    nav: navConf,
    sidebar: sidebarConf
  }
}