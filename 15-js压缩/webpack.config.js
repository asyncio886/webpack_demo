const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    mode:"development",
    entry:{
        index:"./src/index.js",
    },
    output:{
        path:path.resolve(__dirname,"build"),
        filename:"[name].[hash:12].js"
    },
    module:{
        rules:[
            {test:/\.css$/,use:[
                MiniCssExtractPlugin.loader,
                "css-loader",
                {
                    loader:"postcss-loader",
                    options:{
                        postcssOptions:{
                            plugins:[
                                require("postcss-preset-env")
                            ]
                        }
                    }
                }]
            },
            {test:/\.html$/,loader:"html-loader"},
            {
                test:/\.(jpg|png|webp|jpeg|gif)$/,
                type:"asset",
                generator:{
                    filename:"images/[name].[hash:12][ext]"
                },
                parser:{
                    // base64的条件
                    dataUrlCondition:{
                        maxSize:8 * 1024
                    }
                }
            },
            {
                exclude:/\.(jpg|png|webp|jpeg|gif|html|js|css)/,
                type:"asset/resource",
                generator:{
                    filename:"static/[name].[hash:12][ext]"
                }
            }
        ]
    },
    plugins:[
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template:"./src/index.html"
        }),
        // new BundleAnalyzerPlugin()
    ],
    optimization:{
        minimizer:[
            // 压缩js
            new TerserPlugin({
                // 注释不抽离
                // extractComments:false,
                // 使用多线程，可以指定数字表示几个线程
                parallel:true,
                terserOptions:{
                    compress:{
                        drop_console:true,
                        drop_debugger:true
                    },
                    output: {
                        comments: false,
                    }
                },
                // 不提取注释文件
                extractComments: false,
            }),
            // // 压缩css
            new CssMinimizerPlugin()
        ],
        splitChunks:{
            chunks:"all"
        },
        // 一定要开启压缩
        minimize:true,
    }
    ,
    devServer:{
        static:path.resolve(__dirname,"build"),
        hot:true,
        port:10086,
        open:true,
        compress:true
    },
    devtool:false

}