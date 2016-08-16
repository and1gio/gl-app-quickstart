module.exports = {

    runFn: function (app, next) {

        const GLApiRequestHelper = require('gl-api-request-helper');
        app.glApiRequestHelper = {};

        for (var config in app.config.glApiRequestHelper) {
            app.glApiRequestHelper[config] = new GLApiRequestHelper(app.config.glApiRequestHelper[config]);
        }
        next();
    }
};