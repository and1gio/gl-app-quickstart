/**
 *  NODE_ENV = undefined
 */
exports.default = function (app) {
    return {
        middleware: {
            beforeRoute: [
                'example-before-route'
            ],
            afterRoute: [
                'example-after-route'
            ]
        }
    }
};

/**
 *  NODE_ENV = development
 */
exports.development = function (app) {
    return {
        middleware: {
            beforeRoute: [
                'example-before-route'
            ],
            afterRoute: [
                'example-after-route'
            ]
        }
    }
};

/**
 *  NODE_ENV = staging
 */
exports.staging = function (app) {
    return {
        middleware: {
            beforeRoute: [
                'example-before-route'
            ],
            afterRoute: [
                'example-after-route'
            ]
        }
    }
};

/**
 *  NODE_ENV = production
 */
exports.production = function (app) {
    return {
        middleware: {
            beforeRoute: [
                'example-before-route'
            ],
            afterRoute: [
                'example-after-route'
            ]
        }
    }
};
