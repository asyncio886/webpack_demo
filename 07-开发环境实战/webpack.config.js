const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    mode:"production",
    entry:"./src/index.js",
    output:{
        path:path.resolve(__dirname,"build"),
        filename:'bundle.js'
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:"./src/index.html"
        })
    ],
    module:{
        rules:[
            {test:/\.less$/,use:["style-loader","css-loader","less-loader"]},
            {test:/\.css$/,use:["style-loader","css-loader"]},
            {
                test:/\.(jpg|jpeg|webp|png)$/,
                type:"asset",
                generator:{
                    filename:"image/[name]_[hash:12][ext]"
                },
                parser:{
                    // base64的条件
                    dataUrlCondition:{
                        maxSize:8 * 1024
                    }
                }
            },
            {
                exclude:/\.(jpg|jpeg|webp|png|less|css|html|js)$/,
                type:"asset/resource",
                generator:{
                    filename:"static/[hash:13][ext]"
                }
            },
            {test:/\.html/,loader:"html-loader"}
        ]
    },
    devServer:{
        static:path.resolve(__dirname,"build"),
        open:true,
        compress:true,
        port:10086
    }
}