/**
 *  NODE_ENV = undefined
 */
exports.default = function (app) {
    return {
        glFileServer: {
            host: 'localhost',
            port: 8080,
            path: '/api/',
            key:  'secretKey'
        }
    }
};

/**
 *  NODE_ENV = development
 */
exports.development = function (app) {
    return {
        glFileServer: {
            host: 'localhost',
            port: 8080,
            path: '/api/',
            key:  'secretKey'
        }
    }
};

/**
 *  NODE_ENV = staging
 */
exports.staging = function (app) {
    return {
        glFileServer: {
            host: 'localhost',
            port: 8080,
            path: '/api/',
            key:  'secretKey'
        }
    }
};

/**
 *  NODE_ENV = production
 */
exports.production = function (app) {
    return {
        glFileServer: {
            host: 'localhost',
            port: 8080,
            path: '/api/',
            key:  'secretKey'
        }
    }
};
