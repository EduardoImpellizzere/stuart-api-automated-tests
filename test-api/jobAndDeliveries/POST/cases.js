const data = require('./td');
const bench = require('./bench');

let cases = {};

cases.validationSuccess = [
  {
    testName: 'All required and optional fields',
    data: data.requiredAndOptionalFields,
    bench: bench.validResponse,
  },
  {
    testName: 'Only required fields',
    data: data.onlyRequiredFields,
    bench: bench.validResponse,
  },
  {
    testName: 'Contact information as an individual',
    data: data.contactInformationAsIndividual,
    bench: bench.validResponse,
  },
  {
    testName: 'Contact information as a company',
    data: data.contactInformationAsCompany,
    bench: bench.validResponse,
  },
  {
    testName: 'Access code equal to text',
    data: data.accessCodeEqualToText,
    bench: bench.validResponse,
  },
  {
    testName: 'Access code equal to qr_text',
    data: data.accessCodeEqualToQrText,
    bench: bench.validResponse,
  },
  {
    testName: 'Access code equal to barcode_128',
    data: data.accessCodeEqualToBarcode128,
    bench: bench.validResponse,
  },
  {
    testName: 'Access code equal to scan_barcode_128',
    data: data.accessCodeEqualToScanBarcode128,
    bench: bench.validResponse,
  },
  {
    testName: 'Access code equal to scan_qr_text',
    data: data.accessCodeEqualToScanQrText,
    bench: bench.validResponse,
  },
  {
    testName: 'Package type equal to xsmall',
    data: data.packageTypeEqualToXsmall,
    bench: bench.validResponse,
  },
  {
    testName: 'Package type equal to small',
    data: data.packageTypeEqualToSmall,
    bench: bench.validResponse,
  },
  {
    testName: 'Package type equal to medium',
    data: data.packageTypeEqualToMedium,
    bench: bench.validResponse,
  },
  {
    testName: 'Package type equal to large',
    data: data.packageTypeEqualToLarge,
    bench: bench.validResponse,
  },
  {
    testName: 'Package type equal to xlarge',
    data: data.packageTypeEqualToXlarge,
    bench: bench.validResponse,
  },
];

cases.validationNegative = [
  {
    testName: 'Empty required fields',
    data: data.emptyRequiredFields,
    bench: bench.emptyRequiredFields,
  },
  {
    testName: 'Empty pickup address',
    data: data.emptyPickupAddress,
    bench: bench.emptyPickupAddress,
  },
  {
    testName: 'Empty dropoff address',
    data: data.emptyDropoffAddress,
    bench: bench.emptyDropoffAddress,
  },
  {
    testName: 'Missing contact information',
    data: data.missingContactInformation,
    bench: bench.missingContactInformation,
  },
  {
    testName: 'Invalid access code',
    data: data.invalidAccessCode,
    bench: bench.invalidAccessCode,
  },
  {
    testName: 'Invalid package type',
    data: data.invalidPackageType,
    bench: bench.invalidPackageType,
  },
  {
    testName: 'Invalid delivery area',
    data: data.invalidDeliveryArea,
    bench: bench.invalidDeliveryArea,
  },
  {
    testName: 'Invalid pickup address',
    data: data.invalidPickupAddress,
    bench: bench.invalidPickupAddress,
  },
  {
    testName: 'Invalid Dropoff address',
    data: data.invalidDropoffAddress,
    bench: bench.invalidDropoffAddress,
  },
  {
    testName: 'Schedule a pickup in the past',
    data: data.schedulePickupInPast,
    bench: bench.schedulePickupInPast,
  },
  {
    testName: 'Schedule a dropoff in the past',
    data: data.scheduleDropoffInPast,
    bench: bench.scheduleDropoffInPast,
  },
];

cases.pricingSuccess = [
  {
    testName: 'Correct currency for france',
    data: data.franceCurrency,
    bench: bench.franceCurrency,
  },
  {
    testName: 'Correct currency for united kingdom',
    data: data.unitedKingdomCurrency,
    bench: bench.unitedKingdomCurrency,
  },
  {
    testName: 'Correct currency for spain',
    data: data.spainCurrency,
    bench: bench.spainCurrency,
  },
  {
    testName: 'Correct currency for poland',
    data: data.polandCurrency,
    bench: bench.polandCurrency,
  },
  {
    testName: 'Correct currency for portugal',
    data: data.portugalCurrency,
    bench: bench.portugalCurrency,
  },
  {
    testName: 'Correct currency for italy',
    data: data.italyCurrency,
    bench: bench.italyCurrency,
  },
];

cases.etaSuccess = [
  {
    testName: 'Eta with precise address',
    data: data.etaPreciseAddress,
    bench: bench.etaPreciseAddress,
  },
  {
    testName: 'Eta with approximate address',
    data: data.etaApproximateAddress,
    bench: bench.etaApproximateAddress,
  },
];

cases.createValidJob = {
  data: data.createValidJob,
  bench: bench.createValidJob,
};

module.exports = cases;
