let bench = {};

bench.validResponse = {
  status: 200,
  body: {
    valid: true,
  },
};

bench.emptyRequiredFields = {
  status: 422,
  body: {
    error: 'ADDRESS_INVALID',
    message: 'An origin address is not in a valid pickup area',
    data: {
      'job.pickups.address': ['must be filled', 'is not in a valid area'],
      'job.dropoffs.address': ['must be filled', 'is not in a valid area'],
      'job.dropoffs.package_type': [
        'must be filled',
        'Package size  is not allowed',
      ],
    },
  },
};

bench.emptyPickupAddress = {
  status: 422,
  body: {
    error: 'ADDRESS_INVALID',
    message: 'An origin address is not in a valid pickup area',
    data: {
      'job.pickups.address': ['must be filled', 'is not in a valid area'],
    },
  },
};

bench.emptyDropoffAddress = {
  status: 422,
  body: {
    error: 'ADDRESS_INVALID',
    message: 'A destination address is not in a valid delivery area',
    data: {
      'job.dropoffs.address': ['must be filled', 'is not in a valid area'],
    },
  },
};

bench.missingContactInformation = {
  status: 422,
  body: {},
};

bench.invalidAccessCode = {
  status: 422,
  body: {
    error: 'RECORD_INVALID',
    message: 'Unable to save record',
    data: {
      'packages.origin.access_codes.code_type': [
        'must be one of: text, qr_text, barcode_128',
      ],
    },
  },
};

bench.invalidPackageType = {
  status: 422,
  body: {
    error: 'RECORD_INVALID',
    message: 'Unable to save record',
    data: {
      'job.dropoffs.package_type': ['Package size invalid is not allowed'],
    },
  },
};

bench.invalidDeliveryArea = {
  status: 422,
  body: {
    error: 'ADDRESS_INVALID',
    message: 'A destination address is not in a valid delivery area',
    data: {
      'job.dropoffs.address': ['is not in a valid area'],
    },
  },
};

bench.invalidPickupAddress = {
  status: 422,
  body: {
    error: 'CANT_GEOCODE_ADDRESS',
    message: "The address can't be geocoded",
  },
};

bench.invalidDropoffAddress = {
  status: 422,
  body: {
    error: 'CANT_GEOCODE_ADDRESS',
    message: "The address can't be geocoded",
  },
};

bench.schedulePickupInPast = {
  status: 422,
  body: {
    error: 'RECORD_INVALID',
    message: 'Unable to save record',
    data: {
      'job.pickup_at': [
        'can not schedule a pickup in the past',
        'is not valid',
      ],
    },
  },
};

bench.scheduleDropoffInPast = {
  status: 422,
  body: {
    error: 'RECORD_INVALID',
    message: 'Unable to save record',
    data: {
      'job.dropoff_at': [
        'can not schedule a dropoff in the past',
        'is not valid',
      ],
    },
  },
};

bench.franceCurrency = {
  status: 200,
  body: {
    currency: 'EUR',
  },
};

bench.unitedKingdomCurrency = {
  status: 200,
  body: {
    currency: 'GBP',
  },
};

bench.spainCurrency = {
  status: 200,
  body: {
    currency: 'EUR',
  },
};
bench.polandCurrency = {
  status: 200,
  body: {
    currency: 'PLN',
  },
};
bench.portugalCurrency = {
  status: 200,
  body: {
    currency: 'EUR',
  },
};
bench.italyCurrency = {
  status: 200,
  body: {
    currency: 'EUR',
  },
};

bench.etaPreciseAddress = {
  status: 200,
  body: {
    eta: 600,
  },
};

bench.etaApproximateAddress = {
  status: 200,
  body: {
    eta: 600,
  },
};

bench.createValidJob = {
  status: 201,
  body: {
    status: 'scheduled',
    package_type: 'medium',
    transport_type: null,
    assignment_code: null,
    pickup_at: '2022-11-18T12:00:00.000+01:00',
    dropoff_at: null,
    ended_at: null,
    comment: null,
    distance: 1.687,
    duration: 7,
    traveled_time: 0,
    traveled_distance: 0,
    deliveries: [
      {
        status: 'pending',
        picked_at: null,
        delivered_at: null,
        client_reference: null,
        package_description: 'Yellow package',
        package_type: 'medium',
        fleet_ids: [1],
        pickup: {
          address: {
            street: 'C/ de Mallorca, 236, 08008 Barcelona',
            postcode: '08008',
            city: 'Barcelona',
            zone: 'barcelona',
            country: 'Spain',
            formatted_address: 'C/ de Mallorca, 236, 08008 Barcelona',
          },
          latitude: 41.392402,
          longitude: 2.160929,
          comment: 'Piso 2, Puerta 4',
          contact: {
            firstname: 'Eduardo Jose',
            lastname: 'Impellizzere',
            phone: '+34674591498',
            company_name: 'My test company',
            email: 'eduardo.impellizzere@gmail.com',
          },
          access_codes: [
            {
              code: '123456789',
              type: 'text',
              title: 'Access code title',
              instructions: 'Test instructions',
            },
          ],
        },
        dropoff: {
          address: {
            street: 'C/ de Muntaner, 282, 08021 Barcelona',
            postcode: '08021',
            city: 'Barcelona',
            zone: 'barcelona',
            country: 'Spain',
            formatted_address: 'C/ de Muntaner, 282, 08021 Barcelona',
          },
          latitude: 41.3964016,
          longitude: 2.1466947,
          comment: 'Comment',
          contact: {
            firstname: 'Julia',
            lastname: 'Moore',
            phone: '+33712222222',
            company_name: 'Sample Company Inc.',
            email: 'client3@email.com',
          },
          access_codes: [
            {
              code: 'your_access_code_2',
              type: 'text',
              title: 'access code title',
              instructions: 'please put your instructions here',
            },
          ],
        },
        cancellation: {
          canceled_by: null,
          reason_key: null,
          comment: null,
        },
        eta: {
          pickup: null,
          dropoff: null,
        },
        proof: {
          signature_url: null,
        },
        package_image_url: null,
      },
    ],
    driver: null,
    pricing: {
      price_tax_included: 10.04,
      price_tax_excluded: 8.3,
      tax_amount: 1.74,
      invoice_url: null,
      tax_percentage: 0.21,
      currency: 'EUR',
    },
    rating: null,
  },
};

module.exports = bench;
