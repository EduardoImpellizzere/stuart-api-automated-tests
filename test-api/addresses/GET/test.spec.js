const url = 'v2/addresses/validate';

const bench = {
  success: true,
};

describe('Addresses - Address validation', () => {
  describe('GET /v2/addresses/validate', () => {
    describe('Succes cases', () => {
      it('Valid address', async () => {
        const response = await chai
          .request(server)
          .get(
            `${url}?address=29 rue de Rivoli 75004 Paris&type=delivering&phone=+34666777555`
          )
          .set(baseHeader);

        expect(response).to.have.a.property('status').to.equal(200);
        expect(response.body).to.shallowDeepEqual(bench);
      });
    });
  });
});
