// const proxy = require('http-proxy-middleware')
const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app){
    // app.use 可以配置多个
    /**
     * app.use中的第一个参数表示要匹配的 until中的index里de baseUrl的值，匹配到之后把本地路径转发为 target服务器地址
     * 
     * 然后下面的pathRewrite 重写路径，把devApi替换成空的，
     * 
     * 这样开发环境和线上环境可以随意切换，不用改动
     * 
     */
    app.use('/devApi',createProxyMiddleware({
        target:'http://www.web-jshtml.cn/api/react',//配置你要请求的服务器地址
        changeOrigin:true,
        pathRewrite:{
            "^/devApi":''
        }
    }))
}