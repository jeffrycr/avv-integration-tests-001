/*globals suite, test, chai, randomArray, describe, it, sinon*/

var expect = chai.expect,
    randomGenerated = {
        generate: sinon.stub()
    };

randomGenerated.generate.withArgs(1, 10).returns(3);
randomGenerated.generate.returns(2);

describe('randomArray', function () {
    it('randomArray should return an array of random numbers', function () {
        expect(randomArray(randomGenerated)).to.have.length(2);
        expect(randomArray(randomGenerated, 1, 10)).to.have.length(3);
        expect(randomArray(randomGenerated)).to.deep.equal([0, 1]);
        expect(randomArray(randomGenerated, 1, 10)).to.deep.equal([0, 1, 2]);
    });
});
