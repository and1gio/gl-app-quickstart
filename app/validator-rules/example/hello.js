module.exports = function (app) {
    return {
        "data": {
            presence: {
                message: "^DATA_REQUIRED"
            }
        },
        "data.id": {
            presence: {
                message: "^ID_REQUIRED"
            }
        }
    };
};