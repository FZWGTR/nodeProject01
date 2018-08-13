// 导入express
const express = require('express');

// 引入自己写的路由
const mangerRoute=require('./route/mangerRoute');

// 实例化 app
let app = express();

// 托管静态资源
app.use(express.static('public'));

// 写路由，指定接口名称
// app.get("/",(req,res)=>{
//     res.send("自写首页");
// })
// 使用自己写的路由
app.use('/manger',mangerRoute);


// 开启监听
app.listen(8868,'127.0.0.1',()=>{
    console.log('success');
})