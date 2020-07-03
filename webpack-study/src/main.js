/*
 * @Author: Xu Bai
 * @Date: 2020-06-30 14:35:13
 * @LastEditors: Xu Bai
 * @LastEditTime: 2020-07-02 23:41:33
 */
// js的入口文件
// 在这里导入所有的包
// ---------------------------
// import $ from "jquery"; //导入jquery用$接收\ES6中导入模块的方式
// import "./css/index.css"
// $(function () {
//     $('li:odd').css('backgroundColor', 'yellow');
//     $('li:even').css('backgroundColor', function () {
//         return '#' + 'D97634'
//     });
// })
// --------------------------------
// import "./css/index.less"
// webpack默认只能打包处理js类型的文件import "./css/index.css"错误、去安装loader
// npm i style-loader css-loader 再去修改webpack.config.js
// 等价node、 const $ = require('jquery)
// 这里代码修改后要重新编译、可以通过配置配置文件简化编译

// 使用webpack-dev-server来实时调试
//npm i webpack-dev-server -D安装到项目的本地开发依赖
// 然后再package.json中配置

// 2020年7月2日 22点59分
// 这里导入只提供runtime-only
import Vue from './js/vue.js'

// var login = {
//     template:'<h1>这是main.js里的login模板</h1>'
// }

// 这里又需要loader 我要杀了你
import login from "./login.vue"
var vm = new Vue({
    el: "#app",
    data: {
        msg: "123"
    },
    methods: {

    },
    // components:{
    //     login:login,
    // }
    render:function(createElement){
        return createElement(login)
    }
})