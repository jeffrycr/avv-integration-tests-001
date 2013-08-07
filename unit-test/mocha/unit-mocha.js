/*globals suite, test*/
var assert = require('assert');

suite('pow', function () {
    test('pow should return the pow value of the number', function (done) {
        assert.equal(4, pow(2));
        done();
    });
});