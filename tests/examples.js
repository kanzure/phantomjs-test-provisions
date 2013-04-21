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
        console.log("current workingDirectory is: " + fs.absolute(fs.workingDirectory));

        // works
        math = require(fs.workingDirectory + "/../src/math.js");

        // this next one works when calling ./bin/phantomjs-test
        // but doesn't work when using a globally-installed phantomjs-test
        math = require("./../src/math.js");
    });

    it("should exist", function() {
        //math = require("./../src/math.js");
        math = require(fs.workingDirectory + "/../src/math.js");
        should.exist(math);
    });
});
