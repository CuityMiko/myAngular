'use strict';
//
//全局路由注册
//
module.exports = function (app) {
    require('./indexRoutes')(app);
    //angular 学习
    require('./angularRoutes')(app);
};
