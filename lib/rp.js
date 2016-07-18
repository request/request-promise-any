'use strict';

var AnyPromise = require('any-promise'),
    configure = require('@request/promise-core/configure/request2'),
    stealthyRequire = require('stealthy-require');

// Load Request freshly - so that users can require an unaltered request instance!
var request = stealthyRequire(require.cache, function () {
    return require('request');
});


configure({
    request: request,
    PromiseImpl: AnyPromise,
    expose: [
        'then',
        'catch',
        'promise'
    ]
});


module.exports = request;
