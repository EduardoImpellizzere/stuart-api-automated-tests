const data = require('./td');
const bench = require('./bench');

let cases = {};

cases.success = [
  {
    testName: 'France operating zone and type equal to picking',
    data: data.franceOperatingZonePickingType,
    bench: bench.franceOperatingZonePickingType,
  },
  {
    testName: 'France operating zone and type equal to delivering',
    data: data.franceOperatingZoneDeliveringType,
    bench: bench.franceOperatingZoneDeliveringType,
  },
  {
    testName: 'United Kingdom operating zone and type equal to picking',
    data: data.unitedKingdomOperatingZonePickingType,
    bench: bench.unitedKingdomOperatingZonePickingType,
  },
  {
    testName: 'United Kingdom operating zone and type equal to delivering',
    data: data.unitedKingdomOperatingZoneDeliveringType,
    bench: bench.unitedKingdomOperatingZoneDeliveringType,
  },
  {
    testName: 'Spain operating zone and type equal to picking',
    data: data.spainOperatingZonePickingType,
    bench: bench.spainOperatingZonePickingType,
  },
  {
    testName: 'Spain operating zone and type equal to delivering',
    data: data.spainOperatingZoneDeliveringType,
    bench: bench.spainOperatingZoneDeliveringType,
  },
  {
    testName: 'Poland operating zone and type equal to picking',
    data: data.polandOperatingZonePickingType,
    bench: bench.polandOperatingZonePickingType,
  },
  {
    testName: 'Poland operating zone and type equal to delivering',
    data: data.polandOperatingZoneDeliveringType,
    bench: bench.polandOperatingZoneDeliveringType,
  },
  {
    testName: 'Portugal operating zone and type equal to picking',
    data: data.portugalOperatingZonePickingType,
    bench: bench.portugalOperatingZonePickingType,
  },
  {
    testName: 'Portugal operating zone and type equal to delivering',
    data: data.portugalOperatingZoneDeliveringType,
    bench: bench.portugalOperatingZoneDeliveringType,
  },
  {
    testName: 'Italy operating zone and type equal to picking',
    data: data.italyOperatingZonePickingType,
    bench: bench.italyOperatingZonePickingType,
  },
  {
    testName: 'Italy operating zone and type equal to delivering',
    data: data.italyOperatingZoneDeliveringType,
    bench: bench.italyOperatingZoneDeliveringType,
  },
];

cases.negative = [
  {
    testName: 'Empty zone',
    data: data.emptyZone,
    bench: bench.emptyZone,
  },
  {
    testName: 'Invalid zone',
    data: data.invalidZone,
    bench: bench.invalidZone,
  },
  {
    testName: 'Non-operational zone in France',
    data: data.nonOperationalZoneFrance,
    bench: bench.nonOperationalZoneFrance,
  },
  {
    testName: 'Non-operational zone in United Kingdom',
    data: data.nonOperationalZoneUnitedKingdom,
    bench: bench.nonOperationalZoneUnitedKingdom,
  },
  {
    testName: 'Non-operational zone in Spain',
    data: data.nonOperationalZoneSpain,
    bench: bench.nonOperationalZoneSpain,
  },
  {
    testName: 'Non-operational zone in Poland',
    data: data.nonOperationalZonePoland,
    bench: bench.nonOperationalZonePoland,
  },
  {
    testName: 'Non-operational zone in Portugal',
    data: data.nonOperationalZonePortugal,
    bench: bench.nonOperationalZonePortugal,
  },
  {
    testName: 'Non-operational zone in Italy',
    data: data.nonOperationalZoneItaly,
    bench: bench.nonOperationalZoneItaly,
  },
];

module.exports = cases;
