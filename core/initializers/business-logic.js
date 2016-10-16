'use strict';

module.exports = {

    run: function (app, next) {
        app.bl = {};
        app.utils.buildModulesInFolder(app, app.bl, app.folderPath.app.root + app.config.businessLogic.rootDir + '/');
        next();
    }

};
