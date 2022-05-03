const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode:"development",
    entry:"./index.js",
    output:{
        path:path.resolve(__dirname,"build"),
        filename:"demo.js"
    },
    module:{
        rules:[
            {test:/\.css$/,use:["style-loader","css-loader"]},
            /**
             * asset/resource:替代file-loader:发送一个单独的文件并导出URL
                asset/inline:替代url-loader:导出一个资源的 data URI
                asset/source:替代raw-loader:导出资源的源代码,之前通过使用实现
                asset:替代url-loader,并且配置资源体积限制实现:在导出一个data URI和发送一个单独的文件之间自动选择

            */
            // 直接使用webpack新特性，assetmodule
            {
                test:/\.(jpg|png|webp)/,
                type:"asset",
                // 文件相关
                generator:{
                    // 位置 + 文件名
                    filename:"img/[name]_[hash:13][ext]"
                },
                parser:{
                    // base64的条件
                    dataUrlCondition:{
                        maxSize:8 * 1024
                    }
                }
            },
            // html上的资源管理
            {
                test:/\.html/,
                loader:"html-loader"
            }
        ],
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./index.html'
        })
    ]
}
