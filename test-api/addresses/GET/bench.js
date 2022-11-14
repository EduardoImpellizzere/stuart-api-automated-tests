let bench = {};

bench.preciseAddressPickingType = {
  status: 200,
  body: {
    success: true,
  },
};

bench.preciseAddressDeliveringType = {
  status: 200,
  body: {
    success: true,
  },
};

bench.approximateAddressPickingTypeWithPhone = {
  status: 200,
  body: {
    success: true,
  },
};

bench.approximateAddressDeliveringTypeWithPhone = {
  status: 200,
  body: {
    success: true,
  },
};

bench.emptyParameters = {
  status: 422,
  body: {
    error: 'CANT_GEOCODE_ADDRESS',
    message: "The address can't be geocoded",
  },
};

bench.invalidAddress = {
  status: 422,
  body: {
    error: 'CANT_GEOCODE_ADDRESS',
    message: "The address can't be geocoded",
  },
};

bench.invalidType = {
  status: 400,
  body: {
    error: 'BAD_REQUEST',
    message: 'Type does not have a valid value',
  },
};

bench.invalidPhonePreciseAddress = {
  status: 422,
  body: {
    error: 'ADDRESS_CONTACT_PHONE_REQUIRED',
    message: 'Contact phone is required',
  },
};

bench.invalidPhoneApproximateAddress = {
  status: 422,
  body: {
    error: 'ADDRESS_CONTACT_PHONE_REQUIRED',
    message: 'Contact phone is required',
  },
};

module.exports = bench;
