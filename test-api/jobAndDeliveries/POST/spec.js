const cases = require('./cases');

const url = 'v2/jobs';

describe('Job validation - POST /v2/jobs/validate', () => {
  describe('Success cases', () => {
    cases.validationSuccess.forEach(testCase => {
      it(testCase.testName, async () => {
        const response = await chai
          .request(server)
          .post(`${url}/validate`)
          .send(testCase.data)
          .set(baseHeader);

        expect(response.status).to.equal(testCase.bench.status);
        expect(response.body).to.shallowDeepEqual(testCase.bench.body);
      });
    });
  });

  describe('Negative cases', () => {
    cases.validationNegative.forEach(testCase => {
      it(testCase.testName, async () => {
        const response = await chai
          .request(server)
          .post(`${url}/validate`)
          .send(testCase.data)
          .set(baseHeader);

        expect(response.status).to.equal(testCase.bench.status);
        expect(response.body).to.deep.equal(testCase.bench.body);
      });
    });
  });
});

describe('Job pricing - POST /v2/jobs/pricing', () => {
  describe('Success cases', () => {
    cases.pricingSuccess.forEach(testCase => {
      it(testCase.testName, async () => {
        const response = await chai
          .request(server)
          .post(`${url}/pricing`)
          .send(testCase.data)
          .set(baseHeader);

        expect(response.status).to.equal(testCase.bench.status);
        expect(response.body).to.shallowDeepEqual(testCase.bench.body);
      });
    });
  });
});

describe('Job eta - POST /v2/jobs/eta', () => {
  describe('Success cases', () => {
    cases.etaSuccess.forEach(testCase => {
      it(testCase.testName, async () => {
        const response = await chai
          .request(server)
          .post(`${url}/eta`)
          .send(testCase.data)
          .set(baseHeader);

        expect(response.status).to.equal(testCase.bench.status);
        expect(response.body).to.deep.equal(testCase.bench.body);
      });
    });
  });
});

describe('Job creation - POST /v2/jobs', () => {
  it('Create a valid job', async () => {
    const response = await chai
      .request(server)
      .post(url)
      .send(cases.createValidJob.data)
      .set(baseHeader);

    expect(response.status).to.equal(cases.createValidJob.bench.status);
    expect(response.body).to.shallowDeepEqual(cases.createValidJob.bench.body);
  });

  it('New job matches with pricing and eta endpoint results', async () => {
    const etaResponse = await chai
      .request(server)
      .post(`${url}/eta`)
      .send(cases.createValidJob.data)
      .set(baseHeader);
    const etaMinutes = Math.floor(etaResponse.body.eta / 60);
    const pricingResponse = await chai
      .request(server)
      .post(`${url}/pricing`)
      .send(cases.createValidJob.data)
      .set(baseHeader);

    const jobResponse = await chai
      .request(server)
      .post(url)
      .send(cases.createValidJob.data)
      .set(baseHeader);

    expect(etaResponse.status).to.equal(200);
    expect(pricingResponse.status).to.equal(200);
    expect(jobResponse.status).to.equal(201);
    expect(jobResponse.body.duration).to.equal(etaMinutes);
    expect(jobResponse.body.pricing.price_tax_excluded).to.equal(
      pricingResponse.body.amount
    );
  });
});
