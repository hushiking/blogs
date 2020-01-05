// 原始的侧边栏配置
// FIXME: 弃用

module.exports = {
  '/front-end/js/': [{
    title: 'JS 基础',
    children: [
      '',
      '/front-end/js/for...in与for...of区别',
      '/front-end/js/form表单的name属性与submit()默认事件',
    ]
  }],

  '/front-end/css/': [{
    title: 'CSS 基础',
    children: [
      '',
      '/front-end/css/CSS属性中的百分比单位',
      '/front-end/css/flex布局左侧固定右侧内容不超过容器',
    ]
  }],

  '/front-end/framework/': [{
    title: 'JS 框架',
    children: [
      ''
    ]
  }],

  '/front-end/': [''],

  '/essays/': [{
    title: '自由随笔',
    children: [
      '',
    ]
  }],

  // fallback
  '/': [
    '', /* / */
    'about' /* /about.html */
  ]
}