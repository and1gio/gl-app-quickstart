'use strict';

module.exports = {
    runFn: function (app, next) {
        for (let i in app.config.route) {
            let module = require(app.folderPath.route + app.config.route[i]);
            app.express.use(i, module(app));
        }
        next();
    }
};
