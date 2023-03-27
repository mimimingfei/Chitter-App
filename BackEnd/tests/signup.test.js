import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../server.js' 
import User from '../models/user.js'

chai.use(chaiHttp);
const expect = chai.expect;

  describe.skip('POST /signup', () => {
    // beforeEach(async () => {
    //     await User.deleteMany()
    //         .then(() => console.log(`Users collection cleared`))
    //         .catch(e => {console.log(`Error clearing`)});

    //     await User.insertMany()
    //         .then(() => console.log(`Database populated with test data`))
    //         .catch(error => {console.log(`Error inserting`);
    //             throw new Error();});

    it('should create a new user', async () => {
      const mockUser = {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        password: 'password123',
      };

     const res = await chai.request(app)
        .post('/signup')
        .send(mockUser)
          expect(res).to.have.status(201);
          expect(res.body).to.have.property('message').equal('User created successfully');
        });
    });

    it('should return an error if email already exists', async () => {
      const mockUser = {
        firstName: 'Jane',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        password: 'password123',
      };

    const res = await chai.request(app)
        .post('/signup')
        .send(mockUser)
          expect(res).to.have.status(400);
          expect(res.body).to.have.property('error').equal('Email already exists');
        });
