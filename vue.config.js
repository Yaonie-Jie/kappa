const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  devServer: {
    port: 8080,
    open: false,
    proxy: {
      "/api": {
        target: 'http://47.104.223.52:8000',
        changeOrigin: true,
        pathRewrite: {
          "^/api": "/"
        }
      }
    }
  },

  productionSourceMap: false,

  chainWebpack: config => {
    config.resolve.alias.set("images", resolve("src/assets/images"));
  },

  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': []
      }
    }
  }
};