const cases = require('./cases');

const url = '/v2/jobs/schedules';

describe('Get zone scheduling slots - GET /v2/jobs/schedules/{zone}/{type}/{date}', () => {
  describe('Success cases', () => {
    cases.success.forEach(testCase => {
      it(testCase.testName, async () => {
        const response = await chai
          .request(server)
          .get(
            `${url}/${testCase.data.zone}/${testCase.data.type}/${testCase.data.date}`
          )
          .set(baseHeader);

        expect(response.status).to.equal(testCase.bench.status);
        expect(response.body).to.shallowDeepEqual(testCase.bench.body);
      });
    });
  });

  describe('Negative cases', () => {
    cases.negative.forEach(testCase => {
      it(testCase.testName, async () => {
        const response = await chai
          .request(server)
          .get(
            `${url}/${testCase.data.zone}/${testCase.data.type}/${testCase.data.date}`
          )
          .set(baseHeader);

        expect(response.status).to.equal(testCase.bench.status);
        expect(response.body).to.shallowDeepEqual(testCase.bench.body);
      });
    });
  });
});
