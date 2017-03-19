'use strict';

module.exports = function (app) {

    var router = require('express').Router();

    router.post(
        '/hello/:id/:type',
        app.zValidator.validate(app.zValidator.api.example.hello),
        function (req, res, next) {
            app.zService.example.hello(req, function (error, data) {
                error ? next(error) : res.json(data);
            });
        });

    router.get(
        '/index',
        function (req, res, next) {
            app.zService.example.hello(req, function (error, data) {
                res.render('index', {error: error, data: data});
            });
        });



    router.put(
        '/test',
        app.filter.example.incomingDataLogger("chveni loggeri 1"),
        app.zService.example.test,
        app.zService.example.test2
    );

    return router;
};


// PUT http://localhost:8000/api/example/test
// POST http://localhost:8000/api/example/hello
// GET http://localhost:8000/api/example/renderPage