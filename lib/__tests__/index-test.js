'use strict';

var _tapeAsync = require('tape-async');

var _tapeAsync2 = _interopRequireDefault(_tapeAsync);

var _index = require('../index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _tapeAsync2.default)('theAnswer', function (t) {
  t.equal((0, _index.theAnswer)(), 42);
  t.end();
});