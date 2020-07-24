const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app){
    // app.use 可以配置多个
    /**
     * app.use中的第一个参数表示要匹配的 .env.development配置的环境变量 的值，匹配到之后把本地路径转发为 target服务器地址
     * 
     * 然后下面的pathRewrite 重写路径，把devApi替换成空的，
     * 
     * 这样开发环境和线上环境可以随意切换，不用改动
     * 
     */
    app.use(process.env.REACT_APP_API,createProxyMiddleware({
        target:process.env.REACT_APP_BASE_URL,//配置你要请求的服务器地址
        changeOrigin:true,
        pathRewrite:{
            [`^${process.env.REACT_APP_API}`]:''
            // "^/devApi":''
        }
    }))
}