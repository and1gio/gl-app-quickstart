'use strict';

class Route {
    constructor(app) {
        this.app = app;
        this.router = require('express').Router();
    }

    init(method, path, fn) {
        this.router[method](path, fn);
    }

    getRouter(){
        return this.router;
    }
}

module.exports = function(app) {
    let route = new Route(app);
    route.init("post", '/hello', function(req, res, next){
        app.bl.example.hello(req, function (error, data) {
            error ? next(error) : res.json(data);
        });
    });

    return route.getRouter();
};