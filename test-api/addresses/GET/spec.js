const cases = require('./cases');

const url = 'v2/addresses/validate';

describe('Address validation - GET /v2/addresses/validate', () => {
  describe('Success cases', () => {
    cases.success.forEach(testCase => {
      it(testCase.testName, async () => {
        const response = await chai
          .request(server)
          .get(
            `${url}?address=${testCase.data.address}&type=${testCase.data.type}&phone=${testCase.data.phone}`
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
            `${url}?address=${testCase.data.address}&type=${testCase.data.type}&phone=${testCase.data.phone}`
          )
          .set(baseHeader);

        expect(response.status).to.equal(testCase.bench.status);
        expect(response.body).to.shallowDeepEqual(testCase.bench.body);
      });
    });
  });
});
