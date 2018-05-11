'use strict';

/**
 * Current Directory
 */
const dir = __dirname;

/**
 * Module dependencies.
 */
const initializersLoader = require("./core/bin/initializers-loader");

/**
 * Required Modules
 */
const fs = require("fs");
const camelCase = require('camelcase');
const lodash = require("lodash");

/**
 * load initializers
 */
const app = {

    folderPath: {
        root: dir,
        app: {
            root: dir + '/app/',
            initializer: dir + '/app/initializers/',
            config: dir + '/app/config/'
        }
    },

    env: process.env.NODE_ENV,

    _: lodash,

    utils: {
        buildModulesInFolder: (app, namespace, dir) => {
            if (fs.existsSync(dir)) {
                const rootDir = fs.readdirSync(dir);

                if (rootDir && rootDir.length > 0) {
                    rootDir.forEach((file) => {
                        const nameParts = file.split('/');
                        const name = camelCase(nameParts[(nameParts.length - 1)].split(".")[0]);
                        const filePath = dir + file;

                        if (fs.lstatSync(filePath).isDirectory()) {
                            namespace[name] = {};
                            return app.utils.buildModulesInFolder(app, namespace[name], filePath + '/');
                        } else {
                            if (fs.existsSync(filePath)) {
                                const module = require(filePath);
                                namespace[name] = new module(app);
                            }
                        }
                    });
                }
            }
        },
        callSessionLoaders: (valNamespace, fnNamespace, req, asyncFunctions) => {
            for (let i in fnNamespace) {
                if (typeof fnNamespace[i] == "function" || typeof fnNamespace[i].fn == "function") {
                    asyncFunctions.push(((index) => {
                        const fn = fnNamespace[index].fn || fnNamespace[index];
                        return function (next) {
                            fn(req, (err, res) => {
                                if (!err) {
                                    valNamespace[index] = res;
                                }
                                next(err);
                            });
                        }
                    })(i));
                } else {
                    if (fnNamespace[i].include || fnNamespace[i].exclude) {
                        continue;
                    }
                    valNamespace[i] = {};
                    app.utils.callSessionLoaders(valNamespace[i], fnNamespace[i], req, asyncFunctions);
                }
            }
        }
    }
};

/**
 * Start Initializer Loader
 */
initializersLoader(app, (err) => {
});
