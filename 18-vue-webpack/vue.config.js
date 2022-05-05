const path = require("path");
const fs = require("fs");
// 在这里面对webpack进行配置
module.exports = {
    // 配置的基本url
    publicPath:"/webpack-demo",
    // 打包文件的根目录
    outputDir:"./build",
    // 静态资源目录，相对于outputDir
    assetsDir:"static",
    // 模板路径
    // indexPath:"./public/index.html",


    // 这里可以返回一个对象给webpack,vue会将他们插入webpack配置中
    // configureWebpack:{
    //     resolve:{
    //         extensions:[".ts",".js",".vue",".jsx",".json"]
    //     }
    // },
    // 或者直接写一个回调函数这个回调函数会传入一个config对象我们可以对这个config对象修改达到修改webpack设置地目的
    configureWebpack:(config)=>{
        // 可以同过直接修改添加属性
        config.resolve.alias["@components"] = path.resolve(__dirname,"./src/components");
        // 写出来看看是啥
        fs.createWriteStream("./test.txt").write(JSON.stringify(config.resolve));
        // output等这种在vue中被包装过的属性不得再使用
        // putput:{path:"xxx",filename:"xxxx"}
    },
    // 还有一个chainWebpack的api，需要源码的理解，暂时不加入

    
    // 代理跨域
    /**
     * vue代理跨域实现的原理:
     * 在开发服务器中设置一个中间件，拦截所有网络请求，有代理的请求同过nodejs中间件请求数据并返回
     * 
     * 前端发送请求 -> 是否匹配了一个proxy代理---->符合代理利用devServer的代理向远程服务器请求数据并返回给前端
     *                                       |-->没有声明代理，在static目录中查找相关的文件
    */
    devServer:{
        proxy:{
            // 以api开头的请求将被代理到下面的请求去
            "/api":{
                // 目标远程服务器地址
                target:"http://xxx.xxxx.xxx/",
                // 是否改变域名
                changeOrigin:true,
                // 弃用websocket
                ws:true,
                pathRewrite:{
                    // 重写路径
                    "^/api":"/test"
                }
            }
        }
    }
}