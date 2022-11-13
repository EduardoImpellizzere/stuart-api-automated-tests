const data = require('./td');
const bench = require('./bench');

let cases = {};

cases.setup = data.setup;

cases.success = [
  {
    testName: 'Get correct details of a created job',
    bench: bench.correctDetailsJob,
  },
];

cases.negative = [
  {
    testName: 'Invalid job id',
    data: data.invalidJobId,
    bench: bench.invalidJobId,
  },
];

module.exports = cases;
