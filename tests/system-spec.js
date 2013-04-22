exports.run = function() {
    describe("System object", function() {
        var system = require('system');

        it("should exist", function() {
            expect(typeof system).to.equal('object');
            expect(system).to.not.equal(null);
        });

        it("should have pid property", function() {
              expect(system.hasOwnProperty('pid')).to.be.ok;
        });

        it("should have pid as a number", function() {
            expect(typeof system.pid).to.equal('number');
        });

        it("should have pid that is an integer", function() {
            expect(system.pid).to.match(/^\d+$/);
        });

        it("should have pid greater than 0", function() {
            expect(system.pid).to.be.greaterThan(0);
        });

        it("should have platform as string", function() {
            expect(typeof(system.platform)).to.equal('string');
        });

        it("should have platform set to 'phantomjs'", function() {
            expect(system.platform).to.equal('phantomjs');
        });

        it("should have args as array", function() {
            expect(system.args instanceof Array).to.be.ok;
        });

        it("should have args with at least one item", function() {
            expect(system.args.length >= 1).to.be.ok;
        });

        it("should have env as object", function() {
            expect(typeof system.env).to.equal('object');
        });

        it("should have os as object", function() {
            expect(typeof system.os).to.equal('object');
        });

        it("should have isSSLSupported as boolean", function() {
            expect(typeof system.isSSLSupported).to.equal('boolean');
        });
    });
}
