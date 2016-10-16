'use strict';

module.exports = {
    run: function (app, next) {
        var async = require("async");

        app.sessionDataLoader = {};
        app.utils.readDir(app, app.sessionDataLoader, app.folderPath.sessionDataLoader);

        app.sessionDataLoader = {
            load: function (req, cb) {
                var asyncFunctions = [];
                app.utils.callSessionLoaders(req.session, app.config.sessionDataLoader, req, asyncFunctions);
                async.parallel(asyncFunctions, function (err, res) {
                    cb(err, res);
                });
            }
        };
        next();
    }
};




