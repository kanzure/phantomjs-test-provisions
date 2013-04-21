describe("phantomjs-test-provisions functions", function() {
    it("should exist", function() {
        should.exist(testprovisions);
    });

    it("should add correctly", function() {
        testprovisions.math.addition(5, 5).should.equal(10);
        testprovisions.math.addition(5, 10).should.equal(15);
        testprovisions.math.addition(1, 1).should.not.equal(3);
    });
});
