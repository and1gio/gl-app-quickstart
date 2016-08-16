/**
 *  NODE_ENV = undefined
 */
exports.default = function (app) {
    return {
        filter : {
            "testFilter" : "example"
        }
    }
};

/**
 *  NODE_ENV = development
 */
exports.development = function (app) {
    return {
        filter : {
            "testFilter" : "example"
        }
    }
};

/**
 *  NODE_ENV = staging
 */
exports.staging = function (app) {
    return {
        filter : {
            "testFilter" : "example"
        }
    }
};

/**
 *  NODE_ENV = production
 */
exports.production = function (app) {
    return {
        filter : {
            "testFilter" : "example"
        }
    }
};
