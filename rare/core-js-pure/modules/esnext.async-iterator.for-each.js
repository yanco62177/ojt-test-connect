'use strict';
var $ = require('../internals/export');
var $forEach = require('../internals/async-iterator-iteration').forEach;

// `AsyncIterator.prototype.forEach` method
// https://github.com/tc39/proposal-iterator-helpers
$({ target: 'AsyncIterator', proto: true, real: true }, {
  forEach: function forEach(fn) {
    return $forEach(this, fn);
  }
});
