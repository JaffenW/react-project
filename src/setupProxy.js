const { createProxyMiddleware } = require('http-proxy-middleware');
// const proxy = require('http-proxy-middleware');
module.exports = function (app) {
  app.use(
      createProxyMiddleware('/api', {
        target: 'http://127.0.0.1:49789',
        secure: false,    // 指定Cookies能否被用户读取
        changeOrigin: true,
        pathRewrite: {
          "^/api": "/"
        }
      }),
      createProxyMiddleware('/lzh', {
        target: 'http://172.172.1.208:9912',
        secure: false,
        changeOrigin: true,
        pathRewrite: {
          "^/lzh": "/"
        }
      })
    );
};