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
  address: 'Via sense nom, 08010 Barcelona, Spain',
  type: 'picking',
  phone: '+34674591498',
};

data.approximateAddressDeliveringTypeWithPhone = {
  address: 'Via sense nom, 08010 Barcelona, Spain',
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
}

data.invalidPhone = {
    address: 'C. de Balmes, 18, 08007 Barcelona',
    type: 'picking',
    phone: '+34invalid',
}

module.exports = data;
