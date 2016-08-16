module.exports = function(app, cb){
    const fs = require("fs");

    app.config = {};

    loadConfig(app.folderPath.config.core);
    loadConfig(app.folderPath.config.app);

    function loadConfig(configDir){
        fs.readdirSync(configDir).forEach(function (file) {
            const module = require(configDir + '/' + file);
            const configs = module[app.env] ? module[app.env](app) : module["default"](app);
            for (var i in configs) {
                app.config[i] = configs[i];
            }
        });
    }

    cb();
};