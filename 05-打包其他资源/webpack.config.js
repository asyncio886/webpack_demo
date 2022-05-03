const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

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
    plugins:[
        new HtmlWebpackPlugin({
            template:"./index.html"
        })
    ]
}