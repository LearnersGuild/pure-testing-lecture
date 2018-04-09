'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsonFetch = require('./json-fetch');

var _jsonFetch2 = _interopRequireDefault(_jsonFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getTopCryptoCoins = function getTopCryptoCoins(numCoins) {
  if (!Number.isInteger(numCoins)) {
    return Promise.reject('numCoins must be an integer');
  }
  return (0, _jsonFetch2.default)('https://api.coinmarketcap.com/v1/ticker/?limit=' + numCoins);
};

exports.default = getTopCryptoCoins;