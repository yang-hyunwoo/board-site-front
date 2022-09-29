const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave : false,
  devServer: {
    port: 4000,
    allowedHosts: ['.iamport.kr'],
    proxy: {
      '/api' : {
        target : 'http://localhost:8081',
        changeOrigin: true,
        logLevel: 'debug',
        '^/api' : '/api'
      },
    }
  },

})
