<a href="http://promisesaplus.com/">
    <img src="https://promises-aplus.github.io/promises-spec/assets/logo-small.png" align="right" alt="Promises/A+ logo" />
</a>

# Request-Promise-Any

[![Gitter](https://img.shields.io/badge/gitter-join_chat-blue.svg?style=flat-square&maxAge=2592000)](https://gitter.im/request/request-promise?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![Build Status](https://img.shields.io/travis/request/request-promise-any/master.svg?style=flat-square&maxAge=2592000)](https://travis-ci.org/request/request-promise-any)
[![Coverage Status](https://img.shields.io/coveralls/request/request-promise-any.svg?style=flat-square&maxAge=2592000)](https://coveralls.io/r/request/request-promise-any)
[![Dependency Status](https://img.shields.io/david/request/request-promise-any.svg?style=flat-square&maxAge=2592000)](https://david-dm.org/request/request-promise-any)
[![Known Vulnerabilities](https://snyk.io/test/npm/request-promise-any/badge.svg?style=flat-square&maxAge=2592000)](https://snyk.io/test/npm/request-promise-any)

This package is similar to [`request-promise`](https://www.npmjs.com/package/request-promise) but uses [`any-promise`](https://www.npmjs.com/package/any-promise) to let the user choose which Promise library to use.

Please refer to the [`request-promise` documentation](https://www.npmjs.com/package/request-promise). Everything applies to `request-promise-any` except the following:
- Instead of using Bluebird promises this library uses the Promise library chosen by the user.
- This library has to work with the API that all supported Promise libraries have in common. And that is the API of native ES6 promises. Mind that they have less features than Bluebird promises. In particular, the `.finally(...)` method is not available.

## Installation

This module is installed via npm:

```
npm install --save request
npm install --save request-promise-any
```

`request` is defined as a peer-dependency and thus has to be installed separately.

## Registering Your Preferred Promise Library

First, install your preferred Promise library. E.g. [Q](https://www.npmjs.com/package/q):

```
npm install --save q
```

Then, register the Promise library before you require `request-promise-any` for the first time:

``` js
require('any-promise/register/q')

var rp = require('request-promise-any')
```

For a list of supported Promise libraries and advanced registration features read the [documentation of `any-promise`](https://github.com/kevinbeaty/any-promise).

## Migration from `request-promise` to `request-promise-any`

1. Go through the [migration instructions](https://github.com/request/request-promise#migration-from-v3-to-v4) to upgrade to `request-promise` v4.
2. Ensure that you don't use Bluebird-specific features on the promise returned by your request calls. In particular, you can't use `.finally(...)` anymore.
3. Follow the registration instructions above.
4. You are done.

## Contributing

To set up your development environment:

1. clone the repo to your desktop,
2. in the shell `cd` to the main folder,
3. hit `npm install`,
4. hit `npm install gulp -g` if you haven't installed gulp globally yet, and
5. run `gulp dev`. (Or run `node ./node_modules/.bin/gulp dev` if you don't want to install gulp globally.)

`gulp dev` watches all source files and if you save some changes it will lint the code and execute all tests. The test coverage report can be viewed from `./coverage/lcov-report/index.html`.

If you want to debug a test you should use `gulp test-without-coverage` to run all tests without obscuring the code by the test coverage instrumentation.

## Change History

- v1.0.5 (2017-09-22)
    - Upgraded `tough-cookie` to a version without regex DoS vulnerability
      *(Thanks to @rouanw and @sophieklm for their pull requests [request-promise#226](https://github.com/request/request-promise/pull/226) and [request-promise-native#13](https://github.com/request/request-promise-native/pull/13))*
- v1.0.4 (2017-05-07)
    - Fix that allows to use `tough-cookie` for [cookie creation](https://github.com/request/request-promise#include-a-cookie)
- v1.0.3 (2016-08-08)
    - Renamed internally used package `@request/promise-core` to `request-promise-core` because there where [too](https://github.com/request/request-promise/issues/137) [many](https://github.com/request/request-promise/issues/141) issues with the scoped package name
- v1.0.2 (2016-07-18)
    - Fix for using with module bundlers like Webpack and Browserify
- v1.0.1 (2016-07-17)
    - Fixed `@request/promise-core` version for safer versioning
- v1.0.0 (2016-07-15)
    - Initial version similar to [`request-promise`](https://www.npmjs.com/package/request-promise) v4

## License (ISC)

In case you never heard about the [ISC license](http://en.wikipedia.org/wiki/ISC_license) it is functionally equivalent to the MIT license.

See the [LICENSE file](LICENSE) for details.
