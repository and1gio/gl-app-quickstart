'use strict';

module.exports = {
    runFn: function (app, next) {
        let GLTranslateClient = require("gl-translate-client");
        app.glTranslateClient = new GLTranslateClient(app.config.glTranslateClient);
        app.glTranslateClient.load(function (err, res) {
            if(err){
                console.log("!!! - TRANSLATE CLIENT - !!!");
                console.log("------ FAILED TO LOAD -------");
                console.log("!!! - TRANSLATE CLIENT - !!!");
            }
        });
        next();
    }
};