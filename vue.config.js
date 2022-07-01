'use strict'
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

const port = process.env.port || process.env.npm_config_port || 81 // 端口

module.exports = {
  // transpileDependencies: true // 兼容ie
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
  outputDir: 'dist', // 打包文件名
  assetsDir: 'static', // 静态文件名
  lintOnSave: process.env.NODE_ENV === 'development', // 是否开启eslint保存检测，有效值：ture | false | 'error'
  productionSourceMap: false, // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
  // webpack-dev-server 相关配置
  devServer: {
    host: '0.0.0.0',
    port: port,
    proxy: {
      // detail: https://cli.vuejs.org/config/#devserver-proxy
      [process.env.VUE_APP_BASE_API]: {
        target: `http://localhost:8080`,
        changeOrigin: true,
        pathRewrite: {
          ['^' + process.env.VUE_APP_BASE_API]: ''
        }
      }
    },
  },
  // 快捷路径
  configureWebpack: {
    name: 'vue2项目',
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  }
}
