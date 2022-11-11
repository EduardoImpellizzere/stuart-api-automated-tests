global.baseUrl = config.get('baseUrl');
global.server = config.get('server');
global.baseHeader = {
  Authorization: '',
};

const login = async () => {
  const urlLogin = '/oauth/token';
  const form = config.get('auth');

  const response = await chai
    .request(baseUrl)
    .post(urlLogin)
    .set('content-type', 'application/x-www-form-urlencoded')
    .send(form);
  expect(response.status).to.equal(200);

  global.baseHeader.Authorization = `Bearer ${response.body.access_token}`;
};

before(async () => {
  await login();
});
