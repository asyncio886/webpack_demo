const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
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
        new MiniCssExtractPlugin()
    ],
    // 压缩插件（不仅仅是css）
    optimization:{
        minimizer:[
            new CssMinimizerPlugin({
            // 可以配置压缩信息
            //   test?: Rules | undefined;
            //   include?: Rules | undefined;
            //   exclude?: Rules | undefined;
            //   warningsFilter?: WarningsFilter | undefined;
            //   parallel?: Parallel;
            })
        ],
        // 开启优化
        minimize:true
    }
    ,
    devServer:{
        static:path.resolve(__dirname,"build"),
        compress:true,
        port:10087,
        open:true
    }
}