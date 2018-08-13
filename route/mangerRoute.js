// 导入
const express=require('express');

const router=express.Router();


// 内置模块
// 路径模块
const path = require('path');

// 注册登录页路由
router.get('/login', (req, res) => {

    // 直接返回静态页面即可
    res.sendFile(path.join(__dirname, '../template/login.html'))

})



// 注册注册页路由
router.get('/register', (req, res) => {

    // 直接返回静态页面即可
    res.sendFile(path.join(__dirname,'../template/register.html'))

})

// 暴露出去
module.exports = router;