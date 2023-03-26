import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../server.js' 

chai.use(chaiHttp);
const expect = chai.expect;

  describe('POST /login', () => {
    it('should return a token for valid credentials', (done) => {
      const user = {
        email: 'john.doe@example.com',
        password: 'password123',
      };

      chai.request(app)
        .post('/login')
        .send(user)
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.have.property('token');
          done();
        });
    });

    it('should return an error for invalid email', (done) => {
      const user = {
        email: 'email@example.com',
        password: 'password123',
      };

      chai.request(app)
        .post('/login')
        .send(user)
        .end((err, res) => {
          expect(res).to.have.status(401);
          expect(res.body).to.have.property('error').equal('Invalid email or password');
          done();
        });
    });

    it('should return an error for invalid password', (done) => {
      const user = {
        email: 'john.doe@example.com',
        password: 'password',
      };

      chai.request(app)
        .post('/login')
        .send(user)
        .end((err, res) => {
          expect(res).to.have.status(401);
          expect(res.body).to.have.property('error').equal('Invalid email or password');
          done();
        });
    });
  });
