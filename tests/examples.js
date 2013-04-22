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
};
