var should = require('chai').should(),
    requerem = require('../requerem');

describe('requerem', function () {
    it('requires app modules correctly', function () {
        var self = requerem('requerem');
        self.should.to.be.ok;
    });

    it('requires node_modules correctly', function () {
        var app_root_path = requerem('app-root-path');
        app_root_path.should.to.be.ok;
    });
});