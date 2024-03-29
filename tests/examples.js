exports.run = function() {
    var fs = require("fs");

    describe("phantomjs-test-provisions", function() {
        it("should exist", function() {
            should.exist(testprovisions);
        });

        it("should have a math module", function() {
            should.exist(testprovisions.math);
        });

        it("should add correctly", function() {
            testprovisions.math.addition(5, 5).should.equal(10);
            testprovisions.math.addition(5, 10).should.equal(15);
            testprovisions.math.addition(1, 1).should.not.equal(3);
        });

        it("should be able to use expect", function() {
            expect([1,2,3]).to.have.length(3);
        });
    });

    describe("phantomjs-test-provisions math module", function() {
        it("should be loadable", function() {
            math = require(fs.workingDirectory + "/../src/math.js");
            math = require("./../src/math.js");
        });

        it("should exist", function() {
            math = require("./../src/math.js");
            math = require(fs.workingDirectory + "/../src/math.js");
            should.exist(math);
        });
    });

    describe("assert", function() {
        it("should work", function() {
            assert.isTrue(true, "true is true");
        });
    });

    describe("runs", function() {
        it("should work", function() {
            testprovisions.runs(function() {
                console.log("runs() callback says hello cruel world");
            });
        });
    });

    describe("waitsFor", function() {
        it("should exist", function() {
            should.exist(testprovisions.waitsFor);
        });
    });
};
