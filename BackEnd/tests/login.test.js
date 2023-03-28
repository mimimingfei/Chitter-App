import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../server.js';
import mockUsersData from '../mockUsersData.json'assert { type: "json" };
const mockUsers = mockUsersData.user


chai.use(chaiHttp);
const expect = chai.expect;

describe('Login Tests', () => {

    beforeEach(async () => {
        await User.deleteMany()
            .then(() => console.log(`Users collection cleared`))
            .catch(error => {
                console.log(`Error clearing`);
                throw new Error();
            });

        await User.insertMany(mockUsers)
            .then(() => console.log(`Database populated with users data`))
            .catch(error => {
                console.log(`Error inserting`);
                throw new Error();
            });

        it('POST /login, should successfully log in', async () => {
            const mockUser = {
                email: 'baseodin2@webs.com',
                password: 'password1234',
            };
            const res = await chai.request(app)
                .post('/login')
                .send(mockUser)
            expect(res).to.have.status(200);
            expect(res.body).to.be.an(`object`);
            expect(res.text).to.include('Login successful');
        });


        it('POST /login, should return an error for invalid email', async () => {
            const mockUser = {
                email: 'base@webs.com',
                password: 'password1234',
            };
            const res = await chai.request(app)
                .post('/login')
                .send(mockUser)
            expect(res).to.have.status(401);
            expect(res.body).to.be.an(`object`);
            expect(res.body).to.have.property('error').equal('Invalid email');
        });


        it('POST /login, should return an error for invalid password', async () => {
            const mockUser = {
                email: 'baseodin2@webs.com',
                password: 'wrongPassword',
            };
            const res = await chai.request(app)
                .post('/login')
                .send(mockUser)
            expect(res).to.have.status(401);
            expect(res.body).to.be.an(`object`);
            expect(res.body).to.have.property('error').equal('Invalid password');
        });
    });
});