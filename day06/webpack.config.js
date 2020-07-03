/*
 * @Author: Xu Bai
 * @Date: 2020-07-01 22:44:21
 * @LastEditors: Xu Bai
 * @LastEditTime: 2020-07-02 12:01:06
 */
/*
 * @Author: Xu Bai
 * @Date: 2020-06-30 15:13:48
 * @LastEditors: Xu Bai
 * @LastEditTime: 2020-07-01 15:15:24
 */
// 找不到模块就npm i style-loader --save
const path = require('path');
//const webpack = require('webpack');
// const VueLoaderPlugin = require('vue-loader/lib/plugin')
// 导入在内存中生成html的插件
//const webpack = require('webpack');
// 只要是插件都要放在plugins中去
//const htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    //要打包的文件 
    entry: path.join(__dirname, './src/main.js'),
    // 输出文件
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js', //指定的输出文件名

    },
    // devServer:{
    //     //这是配置dev-server参数的第二种方式
    //     open:true,//自动打开浏览器
    //     port:3000,
    //     contentBase:'src',//指定托管的根目录
    //     hot:true,//热更新

    // },
    // plugins:[
    //     new webpack.HotModuleReplacementPlugin();
    // 在内存中创建一个html、还能自动把打包好的js追加到html中
    // new htmlWebpackPlugin({
    //     template:path.join(__dirname,'./src/index.html'),
    //      filename:'index.html'//生成的页面的名字



    // ]
    module: {
        rules: [{
                test: /\.css$/, // 针对CSS结尾的文件设置LOADER
                use: [{
                        loader: "style-loader",
                        options: {
                            // singleton: true // 处理为单个style标签
                        }
                    },
                    {
                        loader: "css-loader",
                        options: {
                            // minimize: true // css代码压缩
                        }
                    },                   
                ]
            },
            
            {
                test: /\.(jpg|png|gif|bmp|jpeg)$/,
                loader: "url-loader"
            },
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude:"/node_modules/"
            }
        ]
    }

};
// 配置完成后只需要在项目路径下敲入webpack
// "scripts": {
//     "test": "echo \"Error: no test specified\" && exit 1"
//     // "dev": "webpack-dev-server"
//   },