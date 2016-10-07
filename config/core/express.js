/**
 *  NODE_ENV = undefined
 */
exports.default = function (app) {
    return {
        express: {
            port: 8000
        }
    }
};

/**
 *  NODE_ENV = development
 */
exports.development = function (app) {
    return {
        express: {
            port: 8000
        }
    }
};

/**
 *  NODE_ENV = staging
 */
exports.staging = function (app) {
    return {
        express: {
            port: 8000
        }
    }
};

/**
 *  NODE_ENV = production
 */
exports.production = function (app) {
    return {
        express: {
            port: 8000
        }
    }
};