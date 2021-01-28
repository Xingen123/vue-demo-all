const CompressionWebpackPlugin = require('compression-webpack-plugin');
module.exports = {
  publicPath: '/', // publicPath取代了baseUrl
  outputDir: 'dist',
  lintOnSave: false,
  runtimeCompiler: true, // 关键点在这  原来的 Compiler 换成了 runtimeCompiler
  // 调整内部的 webpack 配置。
  // 查阅 https://github.com/vuejs/vue-doc-zh-cn/vue-cli/webpack.md
  chainWebpack: (config) => {
    // 生产环境，开启js\css压缩
    if (process.env.NODE_ENV === 'production') {
      config.plugin('compressionPlugin').use(
        new CompressionWebpackPlugin({
          test: /\.(js|css|less)$/, // 匹配文件名
          threshold: 10240, // 对超过10k的数据压缩
          minRatio: 0.8,
          deleteOriginalAssets: true, // 删除源文件
        })
      );
    }
  },
  configureWebpack: () => {},
  // 配置 webpack-dev-server 行为。
  devServer: {
    overlay: {
      warning: false,
      errors: false,
    },
    host: 'localhost',
    port: 3000, // 端口号
    https: false, // https:{type:Boolean}
    open: true, // 配置自动启动浏览器
    // proxy: 'http://localhost:4000' // 配置跨域处理,只有一个代理
    // 配置多个代理
    proxy: {
      '/api': {
        target: 'http://localhost:3000/api',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  },
};
