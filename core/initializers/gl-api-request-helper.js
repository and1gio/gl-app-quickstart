'use strict';

module.exports = {

    runFn: function (app, next) {

        let GLApiRequestHelper = require('gl-api-request-helper');
        app.glApiRequestHelper = {};

        for (let config in app.config.glApiRequestHelper) {
            app.glApiRequestHelper[config] = new GLApiRequestHelper(app.config.glApiRequestHelper[config]);
        }
        next();
    }
};