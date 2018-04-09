'use strict';

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _blueTape = require('blue-tape');

var _blueTape2 = _interopRequireDefault(_blueTape);

var _writeFile = require('../write-file');

var _writeFile2 = _interopRequireDefault(_writeFile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

(0, _blueTape2.default)('writeFile', function (t) {
  t.plan(1);

  t.test('should write data to the named file', function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(tt) {
      var outFilename, csvData, expectedRows, rowsWritten, dataWritten;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              outFilename = _path2.default.resolve(__dirname, '..', '..', 'tmp', 'out-' + new Date().getTime() + '.csv');
              csvData = 'r1c1,r1c2,r1c3\nr2c1,r2c2,r2c3\nr3c1,r3c2,r3c3\n';
              expectedRows = csvData.split('\n');
              _context.next = 5;
              return (0, _writeFile2.default)(outFilename, csvData);

            case 5:
              rowsWritten = _context.sent;
              dataWritten = _fs2.default.readFileSync(outFilename).toString();

              tt.equal(dataWritten, csvData);

            case 8:
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