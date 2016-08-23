var reqlib = require('app-root-path').require;

module.exports = function(lib) {
    try {
        return reqlib(lib);
    } catch (err) {
        return require(lib);
    }
};