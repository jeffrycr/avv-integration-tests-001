/*globals suite, test, chai, pow, describe, it, dataTransform*/

var expect = chai.expect;
describe('dataTransform', function () {
    it('dataTransform should validate if the data is an object or not', function () {
        expect(dataTransform({a: 'abc'})).to.have.property('success');
        expect(dataTransform('a')).to.have.property('error');
    });
});