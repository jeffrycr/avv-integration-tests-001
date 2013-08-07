/*globals expect, describe, dataTransform, it*/
describe("transform test", function () {
    it("tranform data should return value or error", function () {

        expect(dataTransform({a : 'abc'}).success).toBe(true);
        expect(dataTransform('a')).not.toBe('false');
    });
});