const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports= {
    entry:"./index.js",
    mode:"development",
    module:{
        rules:[
            {test:/\.css$/,use:["style-loader","css-loader"]},

        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            // 设置引入的html结构
            template:"./demo.html"
        })
    ]
    ,
    output:{
        path:path.resolve(__dirname,"build"),
        filename:"bundle.js"
    },
}