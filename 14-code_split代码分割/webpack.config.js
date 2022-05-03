const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");


module.exports = {
    mode:"development",
    //本来是会将所有的js文件都打包到一个js文件中，这样就会分别打包到对应的源码对指定文件
    entry:{
        // 自由设置文件的[name]
        index:"./src/index.js",/*打包名字属性[name]叫index*/
        test:"./src/js/testshaking.js"/*打包名字属性[name]叫test*/
    },
    output:{
        path:path.resolve(__dirname,"build"),
        filename:"demo.[name].[hash:12].js"
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
        minimize:true,

        // 主动将多个使用次数多的文件拿出来优化打包，可以不用多入口
        splitChunks:{
         chunks:"all"
        // minSize: 0, // 默认为30kb，每个代码块的尺寸
        // minChunks: 1, // 被分割前被多少模块共享（引用次数）
        // maxAsyncRequests: 2, // 限制异步块内部的最大请求数，即import了几次（默认每一个import就会拆分为一个chunks）
        }
    }
    ,
    devServer:{
        static:path.resolve(__dirname,"build"),
        compress:true,
        port:10087,
        open:true,
        // HMR开启模块热加载
        hot:true
    },
    // 可以追踪源代码的错误位置与信息
    devtool:"eval-source-map"
    /**
     * 各种map的速度
     * 开发环境下：
     * 速度快（eval > inline > cheap）
     *      eval-cheap-source-map
     *      eval-source-map
     * 调试更友好
     *      cheap-module-source-map
     *      //很多框架用下面这个
     *      eval-source-map
     *      cheap-source-map
     *      source-map
     * 生产环境下(不要用inline):
     *      source-map不隐藏源码
     *      
     *      nosource-source-map全部隐藏
     *      hidden-source-map隐藏源代码，不隐藏构建后代码(建议)
     *  
    */
}