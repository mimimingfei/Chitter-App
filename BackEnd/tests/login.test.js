import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../server.js'

chai.use(chaiHttp);
const expect = chai.expect;

describe('POST /login', () => {
    it('should return a token for valid credentials', async () => {
        const mockUser = {
            email: 'john.doe@example.com',
            password: 'password123',
        };

        const res = await chai.request(app)
            .post('/login')
            .send(mockUser)

        expect(res).to.have.status(200);
        expect(res.text).to.include('Login successful');
    });

it('should return an error for invalid email', async () => {
    const mockUser = {
        email: 'email@example.com',
        password: 'password123',
    };

    const res = await chai.request(app)
        .post('/login')
        .send(mockUser)

    expect(res).to.have.status(401);
    expect(res.body).to.have.property('error').equal('Invalid email or password');
});


it('should return an error for invalid password', async () => {
    const mockUser = {
        email: 'john.doe@example.com',
        password: 'password',
    };

    const res = await chai.request(app)
        .post('/login')
        .send(mockUser)
    expect(res).to.have.status(401);
    expect(res.body).to.have.property('error').equal('Invalid email or password');
});
});