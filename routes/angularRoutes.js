'use strict';
var angularController = myproj.controllers.angular;

module.exports = function (app) {
    app.get('/angular', function (req, res, next) { //angular 学习
        angularController.index(req,res,next);
    });
}
