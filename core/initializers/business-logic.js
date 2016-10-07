'use strict';

module.exports = {
    runFn: function (app, next) {
        app.bl = {};
        app.utils.readDir(app, app.bl, app.folderPath.businessLogic)
        next();
    }
};
