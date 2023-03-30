import chai from 'chai';
import { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../server.js';
import Peep from '../models/peep.js';
import mockPeepsData from '../mockPeepsData.json'assert { type: "json" };
const mockPeeps = mockPeepsData.peep

chai.use(chaiHttp);
describe('peep requests tests', () => {
    //delete and insert data into database
    beforeEach(async () => {
        await Peep.deleteMany()
            .then(() => console.log(`Peeps collection cleared`))
            .catch(error => {
                console.log(`Error clearing`);
                throw new Error();
            });

        await Peep.insertMany(mockPeeps)
            .then(() => console.log(`Database populated with peeps data`))
            .catch(error => {
                console.log(`Error inserting`);
                throw new Error();
            });
    })
    // peep API calls
    it(`GET /peep, should return status 200 and an array`, async () => {
        const res = await chai.request(app)
            .get(`/peep`)

        expect(res).to.have.status(200);
        expect(res.body).to.be.an(`array`);
        expect(res.body.length).to.be.eql(4);
    });

    it("POST /peep, should return 201 and add a new peep", async () => {
        const res = await chai.request(app)
            .post('/peep')
            .send({
                firstName: "Bryan",
                lastName: "Laws",
                peepContent: "Pet at lucas.",
                peepCreatedTime: "2022-06-24T15:35:24Z"
            });
        expect(res).to.have.status(201)
        expect(res.body).to.have.property('message').equal('Peep successfully added');
    });

    it("POST /peep, should return 400 when data is incomplete", async () => {
        const res = await chai.request(app)
            .post('/peep')
            .send({ firstName: "Bryan", peepCreatedTime: "2022-06-24T15:35:24Z" });

        expect(res).to.have.status(400)
        expect(res.body).to.have.property('error').equal('Adding peep failed');
    });
})
