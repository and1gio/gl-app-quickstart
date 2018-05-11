/**
 *  NODE_ENV = undefined
 */
exports.default = (app) => {
    return {
        zApiRequestHelper: {
            exampleApi: {
                host: 'localhost',
                port: 8080,
                path: '/api/',
                debug: true
            }
        }
    }
};

/**
 *  NODE_ENV = development
 */
exports.development = (app) => {
    return {
        zApiRequestHelper: {
            exampleApi: {
                host: 'localhost',
                port: 8080,
                path: '/api/'
            }
        }
    }
};

/**
 *  NODE_ENV = staging
 */
exports.staging = (app) => {
    return {
        zApiRequestHelper: {
            exampleApi: {
                host: 'localhost',
                port: 8080,
                path: '/api/'
            }
        }
    }
};

/**
 *  NODE_ENV = production
 */
exports.production = (app) => {
    return {
        zApiRequestHelper: {
            exampleApi: {
                host: 'localhost',
                port: 8080,
                path: '/api/'
            }
        }
    }
};
