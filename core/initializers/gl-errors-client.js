'use strict';

module.exports = {

    run: function (app, next) {
        var GLErrorsClient = require("gl-errors-client");
        app.glErrorsClient = new GLErrorsClient(app.config.glErrorsClient);
        app.glErrorsClient.load(function (err, res) {
            if (err) {
                console.log("!!! - ERRORS CLIENT - !!!");
                console.log("----- FAILED TO LOAD -----");
                console.log("!!! - ERRORS CLIENT - !!!");
            }
        });
        next();
    }
};