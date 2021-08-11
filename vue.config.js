'use strict'
const path = require('path')
module.exports = {
  configureWebpack (config) {
    config.resolve.alias = Object.assign({}, config.resolve.alias, {
      vue$: path.resolve(path.join(__dirname, './node_modules/vue/dist/vue.esm.js'))
    })
  }
}
