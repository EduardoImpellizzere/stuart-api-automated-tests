const cases = require('./cases');

const url = 'v2/areas';

describe('Get zone coverage - GET /v2/areas/{zone}', () => {
  describe('Success cases', () => {
    cases.success.forEach(testCase => {
      it(testCase.testName, async () => {
        const response = await chai
          .request(server)
          .get(`${url}/${testCase.data.zone}?type=${testCase.data.type}`)
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
          .get(`${url}/${testCase.data.zone}?type=${testCase.data.type}`)
          .set(baseHeader);

        expect(response.status).to.equal(testCase.bench.status);
        expect(response.body).to.shallowDeepEqual(testCase.bench.body);
      });
    });
  });
});
