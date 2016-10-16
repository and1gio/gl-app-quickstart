'use strict';

module.exports = {
    run: function (app, next) {
        var GLFileServerClient = require("gl-file-server-client");
        app.glFileServer = new GLFileServerClient(app.config.glFileServer);
        next();
    }
};