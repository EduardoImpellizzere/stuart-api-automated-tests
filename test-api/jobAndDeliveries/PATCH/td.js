let data = {};

data.setup = {
  job: {
    pickup_at: '2022-11-18T11:00:00.000+00:00',
    pickups: [
      {
        address: 'C/ de Mallorca, 08008 Barcelona',
        comment: 'Piso 2, Puerta 4',
        contact: {
          firstname: 'Eduardo Jose',
          lastname: 'Impellizzere',
          phone: '+34674591498',
          email: 'eduardo.impellizzere@gmail.com',
          company: 'My test company',
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
    ],
    dropoffs: [
      {
        package_type: 'medium',
        package_description: 'Yellow package',
        address: 'C/ de Muntaner, 282, 08021 Barcelona',
        comment: 'Comment',
        end_customer_time_window_start: '2022-11-18T11:00:00.000+00:00',
        end_customer_time_window_end: '2022-11-18T13:00:00.000+00:00',
        contact: {
          firstname: 'Julia',
          lastname: 'Moore',
          phone: '+33712222222',
          email: 'client3@email.com',
          company: 'Sample Company Inc.',
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
    ],
  },
};

data.updateDuringPending = {
  job: {
    deliveries: [
      {
        package_description: 'Small green package',
        pickup: {
          comment: 'Updated pickup comment',
          contact: {
            company_name: 'Updated Company Name',
            firstname: 'My firstname',
            lastname: 'My last name',
            phone: '+33610101010',
            email: 'pickup@company.com',
          },
        },
        dropoff: {
          comment: 'Updated dropoff comment',
          contact: {
            company_name: 'Dropoff Company Name',
            firstname: "Customer's firstname",
            lastname: "Customer's lastname",
            phone: '+33620202020',
            email: 'dropoff@company.com',
          },
        },
      },
    ],
  },
};

data.invalidUpdate = {
  job: {
    deliveries: [
      {
        package_description: 'Small green package',
        pickup: {
          comment: 'Updated pickup comment',
          contact: {
            company_name: 'Updated Company Name',
            firstname: 'My firstname',
            lastname: 'My last name',
            phone: '',
            email: 'pickup@company.com',
          },
        },
        dropoff: {
          comment: 'Updated dropoff comment',
          contact: {
            company_name: 'Dropoff Company Name',
            firstname: "Customer's firstname",
            lastname: "Customer's lastname",
            phone: '+33620202020',
            email: 'dropoff@company.com',
          },
        },
      },
    ],
  },
};

module.exports = data;
