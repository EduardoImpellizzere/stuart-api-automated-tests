const data = require('./td');
const bench = require('./bench');

let cases = {};

cases.success = [
  {
    testName: 'Precise address and type equal to picking',
    data: data.preciseAddressPickingType,
    bench: bench.preciseAddressPickingType,
  },
  {
    testName: 'Precise address and type equal to delivering',
    data: data.preciseAddressDeliveringType,
    bench: bench.preciseAddressDeliveringType,
  },
  {
    testName: 'Approximate address and type equal to picking with phone number',
    data: data.approximateAddressPickingTypeWithPhone,
    bench: bench.approximateAddressPickingTypeWithPhone,
  },
  {
    testName:
      'Approximate address and type equal to delivering with phone number',
    data: data.approximateAddressDeliveringTypeWithPhone,
    bench: bench.approximateAddressDeliveringTypeWithPhone,
  },
];

cases.negative = [
  {
    testName: 'Empty parameters',
    data: data.emptyParameters,
    bench: bench.emptyParameters,
  },
  {
    testName: 'Invalid address',
    data: data.invalidAddress,
    bench: bench.invalidAddress,
  },
  {
    testName: 'Invalid type',
    data: data.invalidType,
    bench: bench.invalidType,
  },
  {
    testName: 'Precise address with invalid phone number',
    data: data.invalidPhonePreciseAddress,
    bench: bench.invalidPhonePreciseAddress,
  },
  {
    testName: 'Approximate address with invalid phone number',
    data: data.invalidPhoneApproximateAddress,
    bench: bench.invalidPhoneApproximateAddress,
  },
];

module.exports = cases;
