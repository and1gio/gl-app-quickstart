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

module.exports = Route;