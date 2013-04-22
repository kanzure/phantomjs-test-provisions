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
    });
}
