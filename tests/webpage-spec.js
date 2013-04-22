exports.run = function() {
    describe("WebPage constructor", function() {
        it("should exist in window", function() {
            expect(window.hasOwnProperty('WebPage')).to.be.ok;
        });

        it("should be a function", function() {
            expect(typeof window.WebPage).to.equal('function');
        });
    });

    describe("WebPage object", function() {
        var page = new WebPage();

        it("should be creatable", function() {
            expect(typeof page).to.equal('object');
            expect(page).to.not.equal(null);
        });

        it("should be able to get any signal handler that are currently set on it", function() {
            page.onInitialized = undefined;
            expect(page.onInitialized).to.be.undefined;
            var onInitialized1 = function() { var x = "x"; };
            page.onInitialized = onInitialized1;
            expect(page.onInitialized).to.equal(onInitialized1);
            var onInitialized2 = function() { var y = "y"; };
            page.onInitialized = onInitialized2;
            expect(page.onInitialized).to.equal(onInitialized2);
            expect(page.onInitialized).to.not.equal(onInitialized1);
            page.onInitialized = null;
            // Will only allow setting to a function value, so setting it to `null` returns `undefined`
            expect(page.onInitialized).to.be.undefined;
            page.onInitialized = undefined;
            expect(page.onInitialized).to.be.undefined;
        });

        it("should be able to get any callback handler that are currently set on it", function() {
            page.onConfirm = undefined;
            expect(page.onConfirm).to.be.undefined;
            var onConfirmFunc1 = function() { return !"x"; };
            page.onConfirm = onConfirmFunc1;
            expect(page.onConfirm).to.equal(onConfirmFunc1);
            var onConfirmFunc2 = function() { return !!"y"; };
            page.onConfirm = onConfirmFunc2;
            expect(page.onConfirm).to.equal(onConfirmFunc2);
            expect(page.onConfirm).to.not.equal(onConfirmFunc1);
            page.onConfirm = null;
            // Will only allow setting to a function value, so setting it to `null` returns `undefined`
            expect(page.onConfirm).to.be.undefined;
            page.onConfirm = undefined;
            expect(page.onConfirm).to.be.undefined;
        });

        it("should be able to get the error signal handler that is currently set on it (currently a special 1-off case)", function() {
            page.onError = undefined;
            expect(page.onError).to.be.undefined;
            var onErrorFunc1 = function() { return !"x"; };
            page.onError = onErrorFunc1;
            expect(page.onError).to.equal(onErrorFunc1);
            var onErrorFunc2 = function() { return !!"y"; };
            page.onError = onErrorFunc2;
            expect(page.onError).to.equal(onErrorFunc2);
            expect(page.onError).to.not.equal(onErrorFunc1);
            page.onError = null;
            // Will only allow setting to a function value, so setting it to `null` returns `undefined`
            expect(page.onError).to.be.undefined;
            page.onError = undefined;
            expect(page.onError).to.be.undefined;
        });

        it("should have objectName as 'WebPage'", function() {
            expect(page.objectName).to.equal('WebPage');
        });

        it("should have a non-empty paperSize object", function() {
            expect(typeof(page.paperSize)).to.equal('object');
            expect(page.paperSize).to.not.equal(null);
        });

        it("should have non-empty settings", function() {
            expect(page.settings).to.not.equal(null);
            expect(page.settings).to.not.equal({});
        });

        it("should have customHeaders as an object", function() {
            expect(typeof(page.customHeaders)).to.equal('object');
            expect(page.customHeaders).to.not.equal(null);
        });

        it("should have zoomFactor of 1", function() {
            expect(page.zoomFactor).to.be.equal(1.0);
        });

    });
}
