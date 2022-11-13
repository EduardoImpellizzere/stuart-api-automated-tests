const data = require('./td');
const bench = require('./bench');

let cases = {};

cases.setup = data.setup;

cases.success = [
  {
    testName: 'Update valid information during pending status',
    data: data.updateDuringPending,
    bench: bench.updateDuringPending,
  },
];

cases.negative = [
  {
    testName: 'Update invalid information',
    data: data.invalidUpdate,
    bench: bench.invalidUpdate,
  },
];

module.exports = cases;
