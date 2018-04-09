'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _json2csv = require('json2csv');

var _jsonFetch = require('./json-fetch');

var _jsonFetch2 = _interopRequireDefault(_jsonFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var writeTopCryptoCoins = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(outFilename, numCoins) {
    var topCoinData, topCoinCsv;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (Number.isInteger(numCoins)) {
              _context.next = 2;
              break;
            }

            return _context.abrupt('return', Promise.reject('numCoins must be an integer'));

          case 2:
            _context.next = 4;
            return (0, _jsonFetch2.default)('https://api.coinmarketcap.com/v1/ticker/?limit=' + numCoins);

          case 4:
            topCoinData = _context.sent;
            topCoinCsv = (0, _json2csv.parse)(topCoinData);


            _fs2.default.writeFile(outFilename, topCoinCsv, function (err) {
              if (err) {
                throw new Error(err);
              }
            });

          case 7:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function writeTopCryptoCoins(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = writeTopCryptoCoins;