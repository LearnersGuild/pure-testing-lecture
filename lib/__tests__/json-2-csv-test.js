'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _tape = require('tape');

var _tape2 = _interopRequireDefault(_tape);

var _json2Csv = require('../json-2-csv');

var _json2Csv2 = _interopRequireDefault(_json2Csv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

(0, _tape2.default)('json2csv', function (t) {
  t.plan(3);

  t.test('should throw an error if input data is not in JSON format', function (tt) {
    tt.throws(function () {
      return (0, _json2Csv2.default)('this-is-not-json');
    }, 'throws if input data is not JSON');
  });

  var inputObjects = [{
    a: 1,
    b: 2,
    c: 3
  }, {
    a: 10,
    b: 20,
    c: 30
  }];

  t.test('should include a header row with the correct columns', function (tt) {
    tt.plan(1);
    var csvData = (0, _json2Csv2.default)(inputObjects);

    var _csvData$split = csvData.split('\n'),
        _csvData$split2 = _slicedToArray(_csvData$split, 1),
        csvHeaders = _csvData$split2[0];

    tt.deepEqual(csvHeaders, '"a","b","c"', '"a", "b", and "c" headers are present');
  });

  t.test('should have as many non-header rows as incoming objects and correct data', function (tt) {
    tt.plan(2);
    var csvData = (0, _json2Csv2.default)(inputObjects);

    var _csvData$split3 = csvData.split('\n'),
        _csvData$split4 = _toArray(_csvData$split3),
        csvHeaders = _csvData$split4[0],
        csvRows = _csvData$split4.slice(1);

    tt.equal(csvRows.length, 2, 'has correct number of rows');
    tt.deepEqual(csvRows, ['1,2,3', '10,20,30'], 'has correct data');
  });

  t.end();
});