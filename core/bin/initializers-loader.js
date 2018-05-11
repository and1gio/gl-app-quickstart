'use strict';

const fs = require("fs");
const winston = require('winston');

const startInitializerChain = (app, initializers, cb) => {
    let index = 0;
    startInitializer(app, initializers, index, cb);
};

const startInitializer = (app, initializers, index, cb) => {
    const initializer = initializers[index];
    if (!initializer) {
        return cb();
    }

    app.logger.info(initializer.name);

    initializer.run(app, (err) => {
        if (err) {
            app.logger.warn(err);
            process.exit(1);
        }

        index++;
        startInitializer(app, initializers, index, cb);
    });
};

const loadInitializers = (app) => {
    const initializers = app.config.zInitializer;
    const modules = [];

    for(let i in initializers){
        if(initializers[i].enabled){
            const name = initializers[i].name;
            let module = null;

            switch (initializers[i].type) {
                case 'module':
                    module = require(name);
                    break;
                case 'app':
                    const path = app.folderPath.app.initializer;
                    module = require(path + name);
                    break;
                default:
            }
            module.name = name;
            modules.push(module);
        }
    }

    return modules;
};

module.exports = (app, cb) => {
    app.logger = winston;

    console.log("APPLICATION STARTED");
    console.log("=========================");

    app.logger.info('ROOT FOLDER:', app.folderPath.root);
    app.logger.info('MACHINE ENVIRONMENT:', app.env);

    require("./configs-loader")(app,() => {
        console.log("****************************");
        console.log("CONFIGS LOADED SUCCESSFULLY");
        console.log("****************************");
    });
    console.log("=========================");


    const modules = loadInitializers(app);

    console.log("INITIALIZERS: STARTED");
    console.log("=========================");

    startInitializerChain(app, modules, (err) => {
        console.log("=========================");
        console.log("INITIALIZERS: FINISHED");
        console.log("=========================");
        cb(err);
    });
};
