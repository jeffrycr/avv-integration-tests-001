/* exported randomArray */
// min is optional, defaults to 0
// max is optional, defaults to 100
function randomArray(randomGenerator, min, max) {
    'use strict';
    var r = randomGenerator.generate(min, max),
        arr = [],
        i;
    for (i = 0; i < r; i += 1) {
        arr.push(i);
    }
    return arr;
}