/*globals suite, test, chai, pow, describe, it*/

var expect = chai.expect;

describe('pow', function () {
    it('pow should return the pow value of the number', function () {
        expect(pow(2)).to.equal(4);
    });
});