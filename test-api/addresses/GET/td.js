let data = {};

data.preciseAddressPickingType = {
  address: 'C. de Balmes, 18, 08007 Barcelona',
  type: 'picking',
  phone: '',
};

data.preciseAddressDeliveringType = {
  address: 'C. de Balmes, 18, 08007 Barcelona',
  type: 'delivering',
  phone: '',
};

data.approximateAddressPickingTypeWithPhone = {
  address: 'C/ de Mallorca, 08008 Barcelona',
  type: 'picking',
  phone: '+34674591498',
};

data.approximateAddressDeliveringTypeWithPhone = {
  address: 'C/ de Mallorca, 08008 Barcelona',
  type: 'delivering',
  phone: '+34674591498',
};

data.emptyParameters = {
  address: '',
  type: '',
  phone: '',
};

data.invalidAddress = {
  address: 'Paseo de Invalid 18, 08007 Barcelona',
  type: 'picking',
  phone: '+34674591498',
};

data.invalidType = {
  address: 'C. de Balmes, 18, 08007 Barcelona',
  type: 'invalid',
  phone: '+34674591498',
};

data.invalidPhonePreciseAddress = {
  address: 'C. de Balmes, 18, 08007 Barcelona',
  type: 'picking',
  phone: '+34invalid',
};

data.invalidPhoneApproximateAddress = {
  address: 'C/ de Mallorca, 08008 Barcelona',
  type: 'picking',
  phone: '+34invalid',
};

module.exports = data;
