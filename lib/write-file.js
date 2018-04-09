'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var writeFile = function writeFile(outFilename, data) {
  return new Promise(function (resolve, reject) {
    _fs2.default.writeFile(outFilename, data, function (err) {
      if (err) {
        return reject(err);
      }
      return resolve();
    });
  });
};

exports.default = writeFile;