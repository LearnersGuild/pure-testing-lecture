'use strict';

var _blueTape = require('blue-tape');

var _blueTape2 = _interopRequireDefault(_blueTape);

var _nock = require('nock');

var _nock2 = _interopRequireDefault(_nock);

var _getTopCryptoCoins = require('../get-top-crypto-coins');

var _getTopCryptoCoins2 = _interopRequireDefault(_getTopCryptoCoins);

var _apiCoinmarketcapV1TickerLimit10Response = require('./api-coinmarketcap-v1-ticker-limit-10-response');

var _apiCoinmarketcapV1TickerLimit10Response2 = _interopRequireDefault(_apiCoinmarketcapV1TickerLimit10Response);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

(0, _blueTape2.default)('getTopCryptoCoins', function (t) {
  t.plan(2);

  t.test('should fail if numCoins is not an integer', function (tt) {
    tt.shouldFail((0, _getTopCryptoCoins2.default)('not-a-number'), 'must be an integer');
  });

  t.test('should return a list of objects representing crypto coin market cap information', function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(tt) {
      var numCoins, data;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              numCoins = 10;

              _nock2.default.cleanAll();
              (0, _nock2.default)('https://api.coinmarketcap.com').get('/v1/ticker/?limit=' + numCoins).reply(200, _apiCoinmarketcapV1TickerLimit10Response2.default);
              _context.next = 5;
              return (0, _getTopCryptoCoins2.default)(numCoins);

            case 5:
              data = _context.sent;

              tt.deepEqual(data, _apiCoinmarketcapV1TickerLimit10Response2.default);

            case 7:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());

  t.end();
});