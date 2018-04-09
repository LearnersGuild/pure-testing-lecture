'use strict';

var _templateObject = _taggedTemplateLiteral([''], ['']),
    _templateObject2 = _taggedTemplateLiteral(['\nUsage: ', ' [options] OUTFILE\n\nOptions:\n  -h | --help: print this help message\n'], ['\nUsage: ', ' [options] OUTFILE\n\nOptions:\n  -h | --help: print this help message\n']);

var _minimist = require('minimist');

var _minimist2 = _interopRequireDefault(_minimist);

var _getTopCryptoCoins = require('./get-top-crypto-coins');

var _getTopCryptoCoins2 = _interopRequireDefault(_getTopCryptoCoins);

var _json2Csv = require('./json-2-csv');

var _json2Csv2 = _interopRequireDefault(_json2Csv);

var _writeFile = require('./write-file');

var _writeFile2 = _interopRequireDefault(_writeFile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var NUM_COINS = 10;

var writeTopCryptoCoins = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(outFilename, numCoins) {
    var topCoinsJson, topCoinsCsv;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _getTopCryptoCoins2.default)(numCoins);

          case 2:
            topCoinsJson = _context.sent;
            topCoinsCsv = (0, _json2Csv2.default)(topCoinsJson);

            (0, _writeFile2.default)(outFilename, topCoinsCsv);

          case 5:
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

var run = function run(argv) {
  return new Promise(function (resolve, reject) {
    var args = (0, _minimist2.default)(argv.slice(2), {
      alias: { h: 'help' },
      boolean: ['h']
    });

    if (args.h) {
      console.info(''(_templateObject2, argv[1])(_templateObject));
      return resolve();
    }

    var outFilename = args._[0];
    if (!outFilename) {
      return reject('No OUTFILE specified. Try --help for usage.');
    }

    return writeTopCryptoCoins(outFilename, NUM_COINS);
  });
};

if (!module.parent) {
  run(process.argv).then(function (filename) {
    if (filename) {
      console.info('Success: result written to ' + filename);
    }
    process.exit(0);
  }).catch(function (err) {
    console.error('Failure: ' + err);
  });
}