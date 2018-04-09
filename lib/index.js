'use strict';

var _templateObject = _taggedTemplateLiteral([''], ['']),
    _templateObject2 = _taggedTemplateLiteral(['\nUsage: ', ' [options] OUTFILE\n\nOptions:\n  -h | --help: print this help message\n'], ['\nUsage: ', ' [options] OUTFILE\n\nOptions:\n  -h | --help: print this help message\n']);

var _minimist = require('minimist');

var _minimist2 = _interopRequireDefault(_minimist);

var _writeTopCryptoCoins = require('./write-top-crypto-coins');

var _writeTopCryptoCoins2 = _interopRequireDefault(_writeTopCryptoCoins);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var NUM_COINS = 10;

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

    return (0, _writeTopCryptoCoins2.default)(outFilename, NUM_COINS);
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