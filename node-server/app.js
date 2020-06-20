/*
 * @Author: Xu Bai
 * @Date: 2020-06-17 21:29:19
 * @LastEditors: Xu Bai
 * @LastEditTime: 2020-06-20 13:25:08
 */ 
// 导入http内置模块
const http = require('http');
// 能够解析url地址，从而拿到pathname
const urlModule = require('url');

// 创建一个http服务器
const server = http.createServer();

// 监听http服务器的request请求
server.on('request',function(req,res){
    // code
    // const url = req.url;
    const{pathname:url,query } = urlModule.parse(req.url,true);
    if(url === '/getscript'){
        // 这里跨域了
        //var scriptStr = 'show()';
        var data = {
            name:'vue',
            age:1100,
            gender:'男'
        }
        var scriptStr = `${query.callback}(${JSON.stringify(data)})`
        res.end(scriptStr);

    }
    else{
        res.end('404');
    }
})

// 指定端口并启动服务器监听
server.listen(3000,function(){
    console.log('server listen at http://127.0.0.1:3000');
})