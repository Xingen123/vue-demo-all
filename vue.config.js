module.exports = {
  publicPath: "/", //publicPath取代了baseUrl
  outputDir: "dist",
  lintOnSave: true,
  runtimeCompiler: true, //关键点在这  原来的 Compiler 换成了 runtimeCompiler
  // 调整内部的 webpack 配置。
  // 查阅 https://github.com/vuejs/vue-doc-zh-cn/vue-cli/webpack.md
  chainWebpack: () => {},
  configureWebpack: () => {},
  // 配置 webpack-dev-server 行为。
  devServer: {
    host: "localhost",
    port: 8081, // 端口号
    https: false, // https:{type:Boolean}
    open: true, //配置自动启动浏览器
    // proxy: 'http://localhost:4000' // 配置跨域处理,只有一个代理
    // 配置多个代理
    proxy: {
      "/api": {
        target: "http://localhost:3000/api",
        changeOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  }
};
