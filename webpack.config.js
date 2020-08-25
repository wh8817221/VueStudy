// 由于 webpack 是基于Node进行构建的，所有，webpack的配置文件中，任何合法的Node代码都是支持的
var path = require('path');
// 在内存中，根据指定的模板页面，生成一份内存中的首页，同时自动把打包好的bundle注入到页面底部
// 如果要配置插件，需要在导出的对象中，挂载一个 plugins 节点
var HtmlWebpackPlugin = require('html-webpack-plugin');
// 当以命令行形式运行 webpack 或 webpack-dev-server 的时候，工具会发现，我们并没有提供 要打包 的文件的 入口 和 出口文件，此时，他会检查项目根目录中的配置文件，并读取这个文件，就拿到了导出的这个 配置对象，然后根据这个对象，进行打包构建

// v15版的vue-loader配置需要加个VueLoaderPlugin
var VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    entry: path.join(__dirname, './src/main.js'), // 入口文件
    output: { // 指定输出选项
        path: path.join(__dirname, './dist'), // 输出路径
        filename: 'bundle.js' // 指定输出文件的名称
    },
    plugins: [ //所有webpack插件的配置节点
        new HtmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'),//指定模板文件路径
            filename: 'index.html' //设置内存生成页面的名称
        }),
        new VueLoaderPlugin()
    ],
    module: { //配置所有第三方loader
        rules:[ //第三方模块的匹配规则
            { test: /\.css$/, use: ['style-loader', 'css-loader'] }, //处理cell文件的loader
            { test: /\.(jpg|png|gif|bmp|jpeg)$/, use: 'url-loader?limit=5000&name=[hash:8]-[name].[ext]&esModule=false' }, //处理 图片路径的 loader  在url-loader内部封装了file-loader ，而file-loader在新版本中esModule属性默认为true 即默认使用ES模块语法导致了造成了引用图片文件的方式和以前的版本不一样了。所以需要关闭ES模块语法。
             // limit 给定的值，是图片的大小，单位是 byte， 如果我们引用的 图片，大于或等于给定的 limit值，则不会被转为base64格式的字符串， 如果 图片小于给定的 limit 值，则会被转为 base64的字符串
            { test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader' },//处理字体文件的loader
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ }, //配置bebel来转换高级的ES语法
            { test: /\.vue$/, use: 'vue-loader' }//处理.vue文件的loader

        ],
        // resolve: {
        //     alias: { //修改Vue被导入时候的包的路径
        //        "vue$": "vue/dist/vue.js" 
        //     }
        // }
    },
}