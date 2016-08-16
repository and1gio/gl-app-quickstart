module.exports = {
    runFn: function (app, next) {
        const GLFileServerClient = require("gl-file-server-client");
        app.glFileServer = new GLFileServerClient(app.config.glFileServer);
        next();
    }
};