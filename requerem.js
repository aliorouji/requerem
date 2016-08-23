var appRoot = require('app-root-path');

module.exports = function(lib) {
    try {
        return require(appRoot + "/" + lib);
    } catch (err) {
        return require(lib);
    }
};