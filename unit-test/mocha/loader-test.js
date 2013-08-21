/*globals suite, test, chai, loadJSON, loadJSONPromise, describe, it, sinon*/
var expect = chai.expect,
    $http = {
        getJson: sinon.stub()

    },
    clock = sinon.useFakeTimers();

describe('loadJSON', function () {
    it('loadJSON should return an object data', function () {
        setTimeout($http.getJson, 100);

        loadJSON('url', $http, function (data) {
            this.clock.tick(100);
            expect(data).to.be.ok;
        });
    });
});
/*
describe('loadJSONPromise', function () {

    it('loadJSONPromise should return a promise', function () {
        setTimeout($http.getJson, 100);

        loadJSONPromise('url', $http, function (data) {
            this.clock.tick(100);
            expect(promiseFor(data)).to.eventually.be.ok;
        });
    });
});
*/