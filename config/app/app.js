/**
 *  NODE_ENV = undefined
 */
exports.default = function (app) {
    return {
        app: {
            debug: true
        }
    }
};

/**
 *  NODE_ENV = development
 */
exports.development = function (app) {
    return {
        app: {
            debug: true
        }
    }
};

/**
 *  NODE_ENV = staging
 */
exports.staging = function (app) {
    return {
        app: {
            debug: false
        }
    }
};

/**
 *  NODE_ENV = production
 */
exports.production = function (app) {
    return {
        app: {
            debug: false
        }
    }
};
