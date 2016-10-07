'use strict';

module.exports = {
    runFn: function (app, next) {
        let GLFileServerClient = require("gl-file-server-client");
        app.glFileServer = new GLFileServerClient(app.config.glFileServer);
        next();
    }
};