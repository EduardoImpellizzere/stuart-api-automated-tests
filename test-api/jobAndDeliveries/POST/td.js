let data = {};

data.requiredAndOptionalFields = {
  job: {
    pickup_at: '2022-11-18T11:00:00.000+00:00',
    pickups: [
      {
        address: 'C/ de Mallorca, 236, 08008 Barcelona',
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

data.onlyRequiredFields = {
  job: {
    pickups: [
      {
        address: 'C/ de Mallorca, 236, 08008 Barcelona',
      },
    ],
    dropoffs: [
      {
        package_type: 'medium',
        address: 'C/ de Muntaner, 282, 08021 Barcelona',
      },
    ],
  },
};

data.contactInformationAsIndividual = {
  job: {
    pickups: [
      {
        address: 'C/ de Mallorca, 236, 08008 Barcelona',
        contact: {
          firstname: 'Julia',
          lastname: 'Moore',
          phone: '',
          email: '',
          company: '',
        },
      },
    ],
    dropoffs: [
      {
        package_type: 'medium',
        address: 'C/ de Muntaner, 282, 08021 Barcelona',
      },
    ],
  },
};

data.contactInformationAsCompany = {
  job: {
    pickups: [
      {
        address: 'C/ de Mallorca, 236, 08008 Barcelona',
        contact: {
          firstname: '',
          lastname: '',
          phone: '',
          email: '',
          company: 'Company Name',
        },
      },
    ],
    dropoffs: [
      {
        package_type: 'medium',
        address: 'C/ de Muntaner, 282, 08021 Barcelona',
      },
    ],
  },
};

data.accessCodeEqualToText = {
  job: {
    pickups: [
      {
        address: 'C/ de Mallorca, 236, 08008 Barcelona',
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
        address: 'C/ de Muntaner, 282, 08021 Barcelona',
      },
    ],
  },
};

data.accessCodeEqualToQrText = {
  job: {
    pickups: [
      {
        address: 'C/ de Mallorca, 236, 08008 Barcelona',
        access_codes: [
          {
            code: '123456789',
            type: 'qr_text',
            title: 'Access code title',
            instructions: 'Test instructions',
          },
        ],
      },
    ],
    dropoffs: [
      {
        package_type: 'medium',
        address: 'C/ de Muntaner, 282, 08021 Barcelona',
      },
    ],
  },
};

data.accessCodeEqualToBarcode128 = {
  job: {
    pickups: [
      {
        address: 'C/ de Mallorca, 236, 08008 Barcelona',
        access_codes: [
          {
            code: '123456789',
            type: 'barcode_128',
            title: 'Access code title',
            instructions: 'Test instructions',
          },
        ],
      },
    ],
    dropoffs: [
      {
        package_type: 'medium',
        address: 'C/ de Muntaner, 282, 08021 Barcelona',
      },
    ],
  },
};

data.accessCodeEqualToScanBarcode128 = {
  job: {
    pickups: [
      {
        address: 'C/ de Mallorca, 236, 08008 Barcelona',
        access_codes: [
          {
            code: '123456789',
            type: 'scan_barcode_128',
            title: 'Access code title',
            instructions: 'Test instructions',
          },
        ],
      },
    ],
    dropoffs: [
      {
        package_type: 'medium',
        address: 'C/ de Muntaner, 282, 08021 Barcelona',
      },
    ],
  },
};

data.accessCodeEqualToScanQrText = {
  job: {
    pickups: [
      {
        address: 'C/ de Mallorca, 236, 08008 Barcelona',
        access_codes: [
          {
            code: '123456789',
            type: 'scan_qr_text',
            title: 'Access code title',
            instructions: 'Test instructions',
          },
        ],
      },
    ],
    dropoffs: [
      {
        package_type: 'medium',
        address: 'C/ de Muntaner, 282, 08021 Barcelona',
      },
    ],
  },
};

data.packageTypeEqualToXsmall = {
  job: {
    pickups: [
      {
        address: 'C/ de Mallorca, 236, 08008 Barcelona',
      },
    ],
    dropoffs: [
      {
        package_type: 'xsmall',
        address: 'C/ de Muntaner, 282, 08021 Barcelona',
      },
    ],
  },
};

data.packageTypeEqualToSmall = {
  job: {
    pickups: [
      {
        address: 'C/ de Mallorca, 236, 08008 Barcelona',
      },
    ],
    dropoffs: [
      {
        package_type: 'small',
        address: 'C/ de Muntaner, 282, 08021 Barcelona',
      },
    ],
  },
};

data.packageTypeEqualToMedium = {
  job: {
    pickups: [
      {
        address: 'C/ de Mallorca, 236, 08008 Barcelona',
      },
    ],
    dropoffs: [
      {
        package_type: 'medium',
        address: 'C/ de Muntaner, 282, 08021 Barcelona',
      },
    ],
  },
};

data.packageTypeEqualToLarge = {
  job: {
    pickups: [
      {
        address: 'C/ de Mallorca, 236, 08008 Barcelona',
      },
    ],
    dropoffs: [
      {
        package_type: 'large',
        address: 'C/ de Muntaner, 282, 08021 Barcelona',
      },
    ],
  },
};

data.packageTypeEqualToXlarge = {
  job: {
    pickups: [
      {
        address: 'C/ de Mallorca, 236, 08008 Barcelona',
      },
    ],
    dropoffs: [
      {
        package_type: 'xlarge',
        address: 'C/ de Muntaner, 282, 08021 Barcelona',
      },
    ],
  },
};

data.emptyRequiredFields = {
  job: {
    pickups: [
      {
        address: '',
      },
    ],
    dropoffs: [
      {
        package_type: '',
        address: '',
      },
    ],
  },
};

data.emptyPickupAddress = {
  job: {
    pickups: [
      {
        address: '',
      },
    ],
    dropoffs: [
      {
        package_type: 'medium',
        address: 'C/ de Muntaner, 282, 08021 Barcelona',
      },
    ],
  },
};

data.emptyDropoffAddress = {
  job: {
    pickups: [
      {
        address: 'C/ de Mallorca, 236, 08008 Barcelona',
      },
    ],
    dropoffs: [
      {
        package_type: 'medium',
        address: '',
      },
    ],
  },
};

data.missingContactInformation = {
  job: {
    pickups: [
      {
        address: 'C/ de Mallorca, 236, 08008 Barcelona',
        contact: {
          firstname: '',
          lastname: '',
          phone: '',
          email: '',
          company: '',
        },
      },
    ],
    dropoffs: [
      {
        package_type: 'medium',
        address: 'C/ de Muntaner, 282, 08021 Barcelona',
      },
    ],
  },
};

data.invalidAccessCode = {
  job: {
    pickups: [
      {
        address: 'C/ de Mallorca, 236, 08008 Barcelona',
        access_codes: [
          {
            code: '123456789',
            type: 'invalid',
            title: 'Access code title',
            instructions: 'Test instructions',
          },
        ],
      },
    ],
    dropoffs: [
      {
        package_type: 'medium',
        address: 'C/ de Muntaner, 282, 08021 Barcelona',
      },
    ],
  },
};

data.invalidPackageType = {
  job: {
    pickups: [
      {
        address: 'C/ de Mallorca, 236, 08008 Barcelona',
      },
    ],
    dropoffs: [
      {
        package_type: 'invalid',
        address: 'C/ de Muntaner, 282, 08021 Barcelona',
      },
    ],
  },
};

data.invalidDeliveryArea = {
  job: {
    pickups: [
      {
        address: 'C/ de Mallorca, 236, 08008 Barcelona',
      },
    ],
    dropoffs: [
      {
        package_type: 'medium',
        address: 'C. Gremios, 21, 28037 Madrid',
      },
    ],
  },
};

data.invalidPickupAddress = {
  job: {
    pickups: [
      {
        address: 'Invalid Street, 88888 Barcelona',
      },
    ],
    dropoffs: [
      {
        package_type: 'medium',
        address: 'C/ de Muntaner, 282, 08021 Barcelona',
      },
    ],
  },
};

data.invalidDropoffAddress = {
  job: {
    pickups: [
      {
        address: 'C/ de Mallorca, 236, 08008 Barcelona',
      },
    ],
    dropoffs: [
      {
        package_type: 'medium',
        address: 'Invalid Street, 88888 Barcelona',
      },
    ],
  },
};

data.schedulePickupInPast = {
  job: {
    pickup_at: '2022-11-11T11:00:00.000+00:00',
    pickups: [
      {
        address: 'C/ de Mallorca, 236, 08008 Barcelona',
      },
    ],
    dropoffs: [
      {
        package_type: 'medium',
        address: 'C/ de Muntaner, 282, 08021 Barcelona',
      },
    ],
  },
};

data.scheduleDropoffInPast = {
  job: {
    dropoff_at: '2022-11-11T11:00:00.000+00:00',
    pickups: [
      {
        address: 'C/ de Mallorca, 236, 08008 Barcelona',
      },
    ],
    dropoffs: [
      {
        package_type: 'medium',
        address: 'C/ de Muntaner, 282, 08021 Barcelona',
      },
    ],
  },
};

data.franceCurrency = {
  job: {
    pickups: [
      {
        address: '10 Bd Montmartre, 75009 Paris, Francia',
      },
    ],
    dropoffs: [
      {
        package_type: 'medium',
        address: '1 Av. Claude Vellefaux, 75010 Paris, Francia',
      },
    ],
  },
};

data.unitedKingdomCurrency = {
  job: {
    pickups: [
      {
        address:
          'Turner House, 16-18 Ramillies St, London W1F 7LW, Reino Unido',
      },
    ],
    dropoffs: [
      {
        package_type: 'medium',
        address: '458 Oxford St, London W1C 1AP, Reino Unido',
      },
    ],
  },
};

data.spainCurrency = {
  job: {
    pickups: [
      {
        address: 'C. del Maestro Victoria, 2, 28013 Madrid',
      },
    ],
    dropoffs: [
      {
        package_type: 'medium',
        address: 'C. Gremios, 21, 28037 Madrid',
      },
    ],
  },
};

data.polandCurrency = {
  job: {
    pickups: [
      {
        address: 'Piotrkowska 59, 90-001 Lodz, Polonia',
      },
    ],
    dropoffs: [
      {
        package_type: 'medium',
        address: 'Marcina Kasprzaka 7/9, 91-078 Lodz, Polonia',
      },
    ],
  },
};

data.portugalCurrency = {
  job: {
    pickups: [
      {
        address: 'Lgo do Mastro 29B, 1150-000 Lisboa, Portugal',
      },
    ],
    dropoffs: [
      {
        package_type: 'medium',
        address: 'Av. Duque de Loulé 96, 1050-092 Lisboa, Portugal',
      },
    ],
  },
};

data.italyCurrency = {
  job: {
    pickups: [
      {
        address: 'Via Tivoli, 2, 20121 Milano MI, Italia',
      },
    ],
    dropoffs: [
      {
        package_type: 'medium',
        address: 'Via del Carmine, Via Ciovasso, 7, 20121 Milano MI, Italia',
      },
    ],
  },
};

data.etaPreciseAddress = {
  job: {
    pickups: [
      {
        address: 'C/ de Mallorca, 236, 08008 Barcelona',
      },
    ],
    dropoffs: [
      {
        package_type: 'medium',
        address: 'C/ de Muntaner, 282, 08021 Barcelona',
      },
    ],
  },
};

data.etaApproximateAddress = {
  job: {
    pickups: [
      {
        address: 'C/ de Mallorca, 08008 Barcelona',
        contact: {
          phone: '+33712222222',
        },
      },
    ],
    dropoffs: [
      {
        package_type: 'medium',
        address: 'C/ de Muntaner, 282, 08021 Barcelona',
      },
    ],
  },
};

data.createValidJob = {
  job: {
    pickup_at: '2022-11-18T11:00:00.000+00:00',
    pickups: [
      {
        address: 'C/ de Mallorca, 236, 08008 Barcelona',
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

module.exports = data;
