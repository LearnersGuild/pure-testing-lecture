'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTopCryptoCoins = exports.jsonFetch = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _nodeFetch = require('node-fetch');

var _nodeFetch2 = _interopRequireDefault(_nodeFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var jsonFetch = exports.jsonFetch = function jsonFetch(url) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var allOptions = _extends({}, options, { Accept: 'application/json' });
  return (0, _nodeFetch2.default)(url, allOptions).then(function (resp) {
    if (!resp.ok) {
      throw new Error(resp.status + ': ' + (resp.statusText || 'Unknown Error'));
    }
    return resp.json();
  });
};

var getTopCryptoCoins = exports.getTopCryptoCoins = function getTopCryptoCoins() {
  var numCoins = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;

  var url = 'https://api.coinmarketcap.com/v1/ticker/?limit=' + numCoins;
  return jsonFetch(url);
};