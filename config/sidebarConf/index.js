const css = require('./front-end/css')
const script = require('./front-end/script')
const framework = require('./front-end/framework')
const essays = require('./essays/index')

module.exports = {
  '/front-end/js': script,
  '/front-end/css': css,
  '/front-end/framework/': framework,
  '/front-end/': [''],
  '/essays/': essays,
  // fallback
  '/': [
    '', /* / */
    'about' /* /about.html */
  ]
}