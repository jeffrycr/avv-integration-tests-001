/*globals test, equal, pow, dataTransform,deepEqual*/
test("transform test", function () {
    equal(dataTransform({name : 'moe'}).success, true, "transform ok");
    deepEqual(dataTransform('a'), {error: 'No Keys Founds'}, "transform not ok");
});