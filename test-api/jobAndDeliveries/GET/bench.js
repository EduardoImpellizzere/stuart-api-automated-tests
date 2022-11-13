let bench = {};

bench.correctDetailsJob = {
  status: 200,
  body: {
    status: 'scheduled',
    package_type: 'medium',
    transport_type: null,
    assignment_code: null,
    pickup_at: '2022-11-18T12:00:00.000+01:00',
    dropoff_at: null,
    ended_at: null,
    comment: null,
    distance: 1.505,
    duration: 6,
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
            street: 'C/ de Mallorca, 08008 Barcelona',
            postcode: '08008',
            city: 'Barcelona',
            zone: 'barcelona',
            country: 'Spain',
            formatted_address: 'C/ de Mallorca, 08008 Barcelona',
          },
          latitude: 41.3913454,
          longitude: 2.1592683,
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

bench.invalidJobId = {
  status: 404,
  body: {
    error: 'NOT_FOUND',
    message: 'Not found',
  },
};

module.exports = bench;
