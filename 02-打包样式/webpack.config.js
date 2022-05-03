const path = require('path');
module.exports = {
    entry:"./index.js",
    mode:"development",
    module:{
        rules:[
            // 配置loader
            {
                test:/\.css$/,
                // use中的loader是有执行顺序的，从后到前执行
                use:["style-loader"/*将样式资源加入html的head里面*/,"css-loader"/*css加载入js文件*/]
            }
        ]
    },
    output:{
        filename:"bundle.js",
        // 目标文件夹
        path:path.resolve(__dirname,"build")
    },
    // 插件
    plugins:[]
}