/**
 *  NODE_ENV = undefined
 */
exports.default = function (app) {
    return {
        glErrorsClient: {
            host: 'localhost',
            port: 8080,
            path: '/api/'
        }
    }
};

/**
 *  NODE_ENV = development
 */
exports.development = function (app) {
    return {
        glErrorsClient: {
            host: 'localhost',
            port: 8080,
            path: '/api/'
        }
    }
};

/**
 *  NODE_ENV = staging
 */
exports.staging = function (app) {
    return {
        glErrorsClient: {
            host: 'localhost',
            port: 8080,
            path: '/api/'
        }
    }
};

/**
 *  NODE_ENV = production
 */
exports.production = function (app) {
    return {
        glErrorsClient: {
            host: 'localhost',
            port: 8080,
            path: '/api/'
        }
    }
};
