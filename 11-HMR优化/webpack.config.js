const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");


module.exports = {
    mode:"development",
    // 引入html文件，是的html等热更新，一般不会把html文件热更新设置，因为html仅是一个模板
    entry:["./src/index.js","./src/index.html"],
    output:{
        path:path.resolve(__dirname,"build"),
        filename:"demo.js"
    },
    module:{
        rules:[
            {test:/\.css$/,use:[
                MiniCssExtractPlugin.loader/*使用插件的loader*/,
                "css-loader",
                {
                    /**
                     * 使用post-perset-env需要在package.json中加上
                     * "browserslist": {
                     *      //开发环境
                            "development": [
                                // 兼容和最近的主流浏览器版本
                            "last 1 chrome version",
                            "last 1 firefox version",
                            "last 1 safari version"
                            ],
                            // 生产环境
                            "production": [
                            // 市场占有率0.2%以上的都兼容
                            ">0.2%",
                            "not dead",
                            "not op_mini all"
                            ]
                        }
                     * 
                    */
                    // 有两种使用方法，一种是在外面写一个postcss.config.js文件，还有自重不需要，
                    // 如下面的注释
                    loader:"postcss-loader",
                    //  options:{
                    //      postcssOptions:{
                    //         //或者将插件引入写在单独的配置js中
                    //         //config: './postcss.config.js',
                    //         plugins:[
                    //             require("postcss-preset-env")
                    //         ]
                    //      }
                    //  }
                }
            ]},
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
        // 开发环境开启压缩
        minimize:false
    }
    ,
    devServer:{
        static:path.resolve(__dirname,"build"),
        compress:true,
        port:10087,
        open:true,
        // HMR开启模块热加载
        hot:true
    }
}