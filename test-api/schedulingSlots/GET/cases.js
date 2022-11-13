const data = require('./td');
const bench = require('./bench');

let cases = {};

cases.success = [
  {
    testName: 'France scheduling slots and type equal to pickup',
    data: data.franceSchedulingSlotsPickupType,
    bench: bench.pickupResponse,
  },
  {
    testName: 'France scheduling slots and type equal to dropoff',
    data: data.franceSchedulingSlotsDropoffType,
    bench: bench.dropoffResponse,
  },
  {
    testName: 'United Kingdom scheduling slots and type equal to pickup',
    data: data.unitedKingdomSchedulingSlotsPickupType,
    bench: bench.pickupResponseTimeZone,
  },
  {
    testName: 'United Kingdom scheduling slots and type equal to dropoff',
    data: data.unitedKingdomSchedulingSlotsDropoffType,
    bench: bench.dropoffResponseTimeZone,
  },
  {
    testName: 'Spain scheduling slots and type equal to pickup',
    data: data.spainSchedulingSlotsPickupType,
    bench: bench.pickupResponse,
  },
  {
    testName: 'Spain scheduling slots and type equal to dropoff',
    data: data.spainSchedulingSlotsDropoffType,
    bench: bench.dropoffResponse,
  },
  {
    testName: 'Poland scheduling slots and type equal to pickup',
    data: data.polandSchedulingSlotsPickupType,
    bench: bench.pickupResponse,
  },
  {
    testName: 'Poland scheduling slots and type equal to dropoff',
    data: data.polandSchedulingSlotsDropoffType,
    bench: bench.dropoffResponse,
  },
  {
    testName: 'Portugal scheduling slots and type equal to pickup',
    data: data.portugalSchedulingSlotsPickupType,
    bench: bench.pickupResponseTimeZone,
  },
  {
    testName: 'Portugal scheduling slots and type equal to dropoff',
    data: data.portugalSchedulingSlotsDropoffType,
    bench: bench.dropoffResponseTimeZone,
  },
  {
    testName: 'Italy scheduling slots and type equal to pickup',
    data: data.italySchedulingSlotsPickupType,
    bench: bench.pickupResponse,
  },
  {
    testName: 'Italy scheduling slots and type equal to dropoff',
    data: data.italySchedulingSlotsDropoffType,
    bench: bench.dropoffResponse,
  },
];

cases.negative = [
  {
    testName: 'Empty zone',
    data: data.emptyZone,
    bench: bench.emptyZone,
  },
  {
    testName: 'Empty type',
    data: data.emptyType,
    bench: bench.emptyType,
  },
  {
    testName: 'Empty date',
    data: data.emptyDate,
    bench: bench.emptyDate,
  },
  {
    testName: 'Invalid zone',
    data: data.invalidZone,
    bench: bench.invalidZone,
  },
  {
    testName: 'Invalid type',
    data: data.invalidType,
    bench: bench.invalidType,
  },
  {
    testName: 'Invalid date',
    data: data.invalidDate,
    bench: bench.invalidDate,
  },
  {
    testName: 'Invalid date format',
    data: data.invalidDateFormat,
    bench: bench.invalidDateFormat,
  },
];

module.exports = cases;
