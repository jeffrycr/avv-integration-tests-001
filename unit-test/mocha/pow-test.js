/*globals suite, test*/

var expect = chai.expect;

describe('pow', function(){
    it('pow should return the pow value of the number', function () {
        expect(pow(2)).to.equal(4);
    });
});