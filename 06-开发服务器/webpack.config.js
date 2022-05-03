const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    mode:"development",
    entry:"./index.js",
    output:{
        path:path.resolve(__dirname,"build"),
        filename:"demo.js"
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:"./index.html"
        })
    ],
    module:{
        rules:[
            {test:/\.css$/,use:["style-loader","css-loader"]},
            {
                exclude:/\.(css|html|js)/,
                type:"asset/resource",
                generator:{
                    filename:"resource/[name]_[hash:12][ext]"
                }
            },
            {test:/\.html/,loader:"html-loader"}
        ]
    },
    devServer:{
        // 项目根路径
        static:path.resolve(__dirname,"build"),
        // 启动gzip压缩
        compress:true,
        // 端口
        port:9000,
        // 自动打开浏览器
        open:true
    }
}