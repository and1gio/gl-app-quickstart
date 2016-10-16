/**
 *  NODE_ENV = undefined
 */
exports.default = function (app) {
    return {
        initializer: [
            { type: 'module', name: 'z-express-initializer', enabled: true },
            { type: 'module', name: 'z-session-initializer', enabled: true },
            { type: 'module', name: 'z-api-request-helper-initializer', enabled: true },

            { type: 'core', name: 'business-logic', enabled: true },

            { type: 'core', name: 'gl-translate-client', enabled: true },
            { type: 'core', name: 'gl-errors-client', enabled: true },
            { type: 'core', name: 'gl-file-server', enabled: true },

            { type: 'core', name: 'filter', enabled: true },
            { type: 'core', name: 'validator', enabled: true },

            //{ type: 'core', name: 'session-data-loader', enabled: true },

            { type: 'module', name: 'z-route-initializer', enabled: true },


            { type: 'core', name: 'http-server', enabled: true }
        ]
    }
};
