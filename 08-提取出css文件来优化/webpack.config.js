const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");


module.exports = {
    mode:"development",
    entry:"./src/index.js",
    output:{
        path:path.resolve(__dirname,"build"),
        filename:"demo.js"
    },
    module:{
        rules:[
            {test:/\.css$/,use:[MiniCssExtractPlugin.loader/*使用插件的loader*/,"css-loader"]},
            {test:/\.html/,loader:"html-loader"}
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:"./src/index.html"
        }),
        // 注册插件
        new MiniCssExtractPlugin({
            // 配置文件名
            filename:"css/build.css"
        })
    ],
    devServer:{
        static:path.resolve(__dirname,"build"),
        compress:true,
        port:10087,
        open:true
    }
}