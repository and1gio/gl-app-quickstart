/**
 *  NODE_ENV = undefined
 */
exports.default = function (app) {
    return {
        glTranslateClient: {
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
        glTranslateClient: {
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
        glTranslateClient: {
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
        glTranslateClient: {
            host: 'localhost',
            port: 8080,
            path: '/api/'
        }
    }
};
