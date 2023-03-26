import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../server.js' 

chai.use(chaiHttp);
const expect = chai.expect;

  describe('POST /signup', () => {
    it('should create a new user', (done) => {
      const user = {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        password: 'password123',
      };

      chai.request(app)
        .post('/signup')
        .send(user)
        .end((err, res) => {
          expect(res).to.have.status(201);
          expect(res.body).to.have.property('message').equal('User created successfully');
          done();
        });
    });

    it('should return an error if email already exists', (done) => {
      const user = {
        firstName: 'Jane',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        password: 'password123',
      };

      chai.request(app)
        .post('/signup')
        .send(user)
        .end((err, res) => {
          expect(res).to.have.status(400);
          expect(res.body).to.have.property('error').equal('Email already exists');
          done();
        });
    });
  });
