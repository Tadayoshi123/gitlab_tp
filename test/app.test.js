const request = require('supertest');
const app = require('../index');

describe('GET /', () => {
  it('should return Hello GitLab CI/CD!', async () => {
    const res = await request(app).get('/');
    expect(res.text).toBe('Hello GitLab CI/CD!');
  });
});
