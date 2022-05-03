module.exports = {
    entry:"/index.js",
    output:{
        // 打包文件名字
        filename:"bundle.js",
        // 打包路径，必须是绝对路径
        path:__dirname
    },
    mode:"development",
    module:{
        rules:[
            {test:/\.css$/,use:'css-loader'},
            {test:/\.ts$/,use:'ts-loader'}
        ]
    }
}