const cases = require('./cases');

const url = 'v2/jobs';

describe('Job update - PATCH /v2/jobs/{jobId}', () => {
  describe('Success cases', () => {
    cases.success.forEach(testCase => {
      it(testCase.testName, async () => {
        const jobResponse = await chai
          .request(server)
          .post(url)
          .send(cases.setup)
          .set(baseHeader);
        const createdJobId = jobResponse.body.id;
        testCase.data.job.deliveries[0].id = jobResponse.body.deliveries[0].id;

        const updateResponse = await chai
          .request(server)
          .patch(`${url}/${createdJobId}`)
          .send(testCase.data)
          .set(baseHeader);

        expect(updateResponse.status).to.equal(testCase.bench.status);
        expect(updateResponse.body).to.shallowDeepEqual(testCase.bench.body);
      });
    });
  });

  describe('Negative cases', () => {
    cases.negative.forEach(testCase => {
      it(testCase.testName, async () => {
        const jobResponse = await chai
          .request(server)
          .post(url)
          .send(cases.setup)
          .set(baseHeader);
        const createdJobId = jobResponse.body.id;
        testCase.data.job.deliveries[0].id = jobResponse.body.deliveries[0].id;

        const updateResponse = await chai
          .request(server)
          .patch(`${url}/${createdJobId}`)
          .send(testCase.data)
          .set(baseHeader);

        expect(updateResponse.status).to.equal(testCase.bench.status);
        expect(updateResponse.body).to.deep.equal(testCase.bench.body);
      });
    });
  });
});
