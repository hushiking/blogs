const path = require('path')
const rootpath = path.dirname(__dirname) //执行一次dirname将目录定位到docs的上级目录，也就是博客根目录
const genSidebarConf = require(rootpath + '/utils/genSidebarConf.js')

/**
 * 侧边栏的配置（顺序无所谓）
 * utils.genSidebar('Java基础', filehelper.getFileName(docs+"/Java/Basic/"), false),
 */
const linux = genSidebarConf('/linux/')
const notes = genSidebarConf('/notes/')
const essays = genSidebarConf('/essays/')
const about = genSidebarConf('/about/', '关于', false)
const javascript = genSidebarConf('/front-end/javascript/', 'JS 基础')
const html = genSidebarConf('/front-end/html/', 'HTML 基础')
const css = genSidebarConf('/front-end/css/', 'CSS 基础')
const h5 = genSidebarConf('/front-end/h5/', '移动端 H5')
const framework = genSidebarConf('/front-end/framework/', 'JS 框架')
const pack = genSidebarConf('/front-end/pack/', '打包工具')
const frontEnd = genSidebarConf('/front-end/', '前端', false)
const backEnd = genSidebarConf('/back-end/', '后端', false)

module.exports = Object.assign({}, linux, notes, essays, about, javascript, html, css, h5, framework, pack, frontEnd, backEnd)