'use strict';

module.exports = {
    runFn: function (app, next) {
        for (let i in app.config.middleware.beforeRoute) {
            require(app.folderPath.middleware.beforeRoute + app.config.middleware.beforeRoute[i])(app);
        }
        next();
    }
};
