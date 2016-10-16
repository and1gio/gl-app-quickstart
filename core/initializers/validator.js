'use strict';

module.exports = {
    run: function (app, next) {
        app.validator = {
            buildErrorObject: function (errorArray) {
                if (errorArray && errorArray.length > 0) {
                    return app.glErrorsClient.getError(errorArray);
                } else {
                    return null;
                }
            }
        };

        app.utils.buildModulesInFolder(app, app.validator, app.folderPath.validator);
        next();
    }
};

