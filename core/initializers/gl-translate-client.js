'use strict';

module.exports = {
    run: function (app, next) {
        var GLTranslateClient = require("gl-translate-client");
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