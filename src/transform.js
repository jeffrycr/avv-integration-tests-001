/*global _ */
/*exported dataTransform*/

function dataTransform(data) {
    'use strict';
    var result;

    if (!_.isObject(data) || _.keys(data) === 0) {
        result = {
            error: 'No Keys Founds'
        };
    } else {
        result = {
            success: true,
            name: _.pluck(data, 'name')
        };
    }
    return result;
}