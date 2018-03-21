import request from 'supertest';
import createServer from '../../src/server';
import routes from '../../src/routes';

describe('GET /api/v1/home', function () {
  it('respond with json {message: Hello World!}, state code 200', function (done) {
    createServer(routes).then(app => {
      request(app)
        .get('/api/v1/home')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(res => {
          expect(res.body).toEqual({ message: 'Hello World!' });
        })
        .expect(200, done);
    });
  });
});
