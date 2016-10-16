'use strict';

module.exports = function (app) {

    var router = require('express').Router();

    router.post('/hello', function (req, res, next) {
        app.bl.example.hello(req, function (error, data) {
            error ? next(error) : res.json(data);
        });
    });

    return router;
};