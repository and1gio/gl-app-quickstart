/**
 *  NODE_ENV = undefined
 */
exports.default = (app) => {
    return {
        zFilter : {
            rootDir: 'filters',
            filters: ['example']
        }
    }
};
