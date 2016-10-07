/**
 *  NODE_ENV = undefined
 */
exports.default = function (app) {
    return {
        initializer: [
            { type: 'core', name: 'express', enabled: true },
            { type: 'core', name: 'gl-session', enabled: true },

            { type: 'core', name: 'business-logic', enabled: true },

            { type: 'core', name: 'gl-translate-client', enabled: true },
            { type: 'core', name: 'gl-errors-client', enabled: true },
            { type: 'core', name: 'gl-file-server', enabled: true },

            { type: 'core', name: 'filter', enabled: true },
            { type: 'core', name: 'validator', enabled: true },

            { type: 'core', name: 'session-data-loader', enabled: true },

            { type: 'core', name: 'middleware-before-route', enabled: true },
            { type: 'core', name: 'route', enabled: true },
            { type: 'core', name: 'middleware-after-route', enabled: true },

            { type: 'core', name: 'http-server', enabled: true }
        ]
    }
};

/**
 INITIALIZING: [client-config-loader]. Run Priority:  60
 INITIALIZING: [business-logic-loader]. Run Priority:  130
 */