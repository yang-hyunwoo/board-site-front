const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave : false,
  devServer: {
    port: 4000,
    proxy: {
      '/api' : {
        target : 'http://192.168.0.2:8081',
        changeOrigin: true,
        logLevel: 'debug'
      }
    }
  },

})
