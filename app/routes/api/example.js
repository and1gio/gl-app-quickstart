'use strict';

module.exports = function (app) {

    var router = require('express').Router();

    router.post(
        '/hello',
        app.filter.example.example2('joni'),
        app.validator.validate(app.validator.example.hello),
        function (req, res, next) {
            app.routeController.example.hello(req, function (error, data) {
                error ? next(error) : res.json(data);
            });
        });

    router.get(
        '/renderPage',
        app.filter.example.example2('joni'),
        function (req, res, next) {
            app.routeController.example.hello(req, function (error, data) {
                res.render('index', {error: error, data: data});
            });
        });

    return router;
};