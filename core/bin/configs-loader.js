'use strict';

module.exports = (app, cb) => {
    const fs = require("fs");

    app.config = {};

    loadConfig(app.folderPath.app.config);

    function loadConfig(configDir){
        fs.readdirSync(configDir).forEach( (file) => {
            const module = require(configDir + '/' + file);
            const configs = module[app.env] ? module[app.env](app) : module["default"](app);
            for (let i in configs) {
                app.config[i] = configs[i];
            }
        });
    }

    cb();
};
