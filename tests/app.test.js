const request = require('supertest');
const app = require('../src/app');

// eslint-disable-next-line no-undef
test('should retrieve base url', async () => {
  await request(app)
    .get('/api/v1')
    .expect({
      success: 200,
      message: 'Welcome to Auto Mart stores',
    });
});
