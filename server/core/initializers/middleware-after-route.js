module.exports = {
    runFn: function (app, next) {
        for (var i in app.config.middleware.afterRoute) {
            require(app.folderPath.middleware.afterRoute + app.config.middleware.afterRoute[i])(app);
        }
        next();
    }
};
