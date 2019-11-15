const request = require('supertest');
const db = require('../database/dbConfig');

const server = require('./server.js');

let token;

beforeAll(done => {
  return request(server)
    .post('/api/auth/register')
    .set('Accept', 'application/json')
    .send({
      username: 'username',
      password: 'password'
    })
    .end((err, response) => {
      token = response.body.token;
      done();
    });
});

describe('server.js', () => {
  describe('auth route', () => {
    it('can successfully signup', async () => {
      return request(server)
        .post('/api/auth/register')
        .set('Accept', 'application/json')
        .send({ username: 'john', password: 'test' })
        .expect(201);
    });

    it('can unsuccessfully login', async () => {
      return request(server)
        .post('/api/auth/login')
        .set('Accept', 'application/json')
        .send({ username: 'john1', password: 'test' })
        .expect(400);
    });

    it('can successfully login', async () => {
      return request(server)
        .post('/api/auth/login')
        .set('Accept', 'application/json')
        .send({ username: 'username', password: 'password' })
        .expect(200);
    });
  });

  describe('jokes route', () => {
    it('returns error without token', async () => {
      return request(server)
        .get('/api/jokes')
        .expect(401);
    });
    it('successful with token', async () => {
      return request(server)
        .get('/api/jokes')
        .set('Authorization', token)
        .expect(200);
    });
  });
});
