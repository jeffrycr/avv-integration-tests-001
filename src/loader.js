/* exported loadJSON, loadJSONPromise */

// $http.getJson must have a 100ms delay

function loadJSON(url, $http, callback) {
    'use strict';
    $http.getJson(url, function (data) {
        data._loadedOn = new Date();
        callback(data);
    });
}

function loadJSONPromise(url, $http, callback) {
    'use strict';
    $http.getJson(url).then(function (data) {
        data._loadedOn = new Date();
        callback(data);
    });
}