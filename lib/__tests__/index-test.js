'use strict';

var _blueTape = require('blue-tape');

var _blueTape2 = _interopRequireDefault(_blueTape);

var _nock = require('nock');

var _nock2 = _interopRequireDefault(_nock);

var _index = require('../index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

(0, _blueTape2.default)('jsonFetch', function (t) {
  t.plan(2);

  t.test('should fail on error responses', function (tt) {
    _nock2.default.cleanAll();
    (0, _nock2.default)('https://www.example.com').get('/NotFound').reply(404, 'Not Found').get('/ServerError').reply(500, 'Internal Server Error');
    tt.shouldFail((0, _index.jsonFetch)('https://www.example.com/NotFound'), 'Not Found');
    tt.shouldFail((0, _index.jsonFetch)('https://www.example.com/ServerError'), 'Internal Server Error');
  });

  t.test('should return the data as an object on success response', function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(tt) {
      var expectedData, data;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              expectedData = { this: 'is', my: 'data' };

              _nock2.default.cleanAll();
              (0, _nock2.default)('https://www.example.com').get('/SomeData').reply(200, expectedData);
              _context.next = 5;
              return (0, _index.jsonFetch)('https://www.example.com/SomeData');

            case 5:
              data = _context.sent;

              tt.deepEqual(data, expectedData);

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