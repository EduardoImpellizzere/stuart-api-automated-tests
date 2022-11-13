const cases = require('./cases');

const url = 'v2/jobs';

describe('Get a job - GET /v2/jobs/{jobId}', () => {
  describe('Success cases', () => {
    cases.success.forEach(testCase => {
      it(testCase.testName, async () => {
        const jobResponse = await chai
          .request(server)
          .post(url)
          .send(cases.setup)
          .set(baseHeader);
        const createdJobId = jobResponse.body.id;

        const getJobResponse = await chai
          .request(server)
          .get(`${url}/${createdJobId}`)
          .set(baseHeader);

        expect(getJobResponse.status).to.equal(testCase.bench.status);
        expect(getJobResponse.body).to.shallowDeepEqual(testCase.bench.body);
      });
    });
  });

  describe('Negative cases', () => {
    cases.negative.forEach(testCase => {
      it(testCase.testName, async () => {
        const response = await chai
          .request(server)
          .get(`${url}/${testCase.data}`)
          .set(baseHeader);

        expect(response.status).to.equal(testCase.bench.status);
        expect(response.body).to.deep.equal(testCase.bench.body);
      });
    });
  });
});
