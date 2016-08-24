'use strict';

module.exports = {
    runFn: function (app, next) {
        for (let i in app.config.middleware.afterRoute) {
            require(app.folderPath.middleware.afterRoute + app.config.middleware.afterRoute[i])(app);
        }
        next();
    }
};
