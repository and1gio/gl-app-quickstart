module.exports = {

    runFn: function (app, next) {
        const GLErrorsClient = require("gl-errors-client");
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